// Run with: node --experimental-websocket scripts/browser-audit.mjs
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import { publicRoutes, availableLocalesForRoute, pathForLocale } from '../src/seo/locales.js';

const chrome = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const base = process.env.AUDIT_BASE || 'http://127.0.0.1:4174';
const port = 9224;
const screenshots = new URL('../.browser-audit/', import.meta.url);
await mkdir(screenshots, { recursive: true });
const child = spawn(chrome, [
  '--headless=old', '--disable-gpu', '--disable-software-rasterizer',
  '--disable-gpu-sandbox', '--no-sandbox', '--no-first-run',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${new URL('../.browser-audit-profile/', import.meta.url).pathname.replace(/^\/(?:[A-Za-z]:)/, (match) => match.slice(1))}`,
  'about:blank',
], { stdio: 'ignore' });

let socket;
try {
  let target;
  for (let i = 0; i < 50; i += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`);
      target = (await response.json()).find((entry) => entry.type === 'page');
      if (target) break;
    } catch { /* Chrome is starting. */ }
    await delay(200);
  }
  if (!target) throw new Error('Chrome DevTools did not start');

  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });
  let nextId = 0;
  let currentPath = '/';
  const pending = new Map();
  const exceptions = [];
  const diagnostics = [];
  socket.addEventListener('message', ({ data }) => {
    const message = JSON.parse(data);
    if (message.method === 'Runtime.exceptionThrown') {
      const detail = message.params.exceptionDetails;
      exceptions.push(detail.exception?.description || detail.exception?.value || detail.text);
    }
    if (process.env.ROUTE_FILTER && message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') {
      diagnostics.push(`console: ${message.params.args.map((arg) => arg.value || arg.description).join(' ')}`);
    }
    if (process.env.ROUTE_FILTER && message.method === 'Network.loadingFailed') {
      diagnostics.push(`network: ${message.params.errorText}`);
    }
    if (process.env.ROUTE_FILTER && message.method === 'Network.responseReceived' && message.params.response.status >= 400) {
      diagnostics.push(`HTTP ${message.params.response.status}: ${message.params.response.url}`);
    }
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      message.error ? reject(new Error(message.error.message)) : resolve(message.result);
    }
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++nextId;
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`CDP timeout: ${method} at ${currentPath}`)); }, 30000);
    pending.set(id, {
      resolve: (value) => { clearTimeout(timer); resolve(value); },
      reject: (error) => { clearTimeout(timer); reject(error); },
    });
    socket.send(JSON.stringify({ id, method, params }));
  });
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');
  if (process.env.AUDIT_BLOCK_IMAGES !== '0') {
    await send('Network.setBlockedURLs', { urls: ['*.jpg', '*.jpeg', '*.png', '*.webp', '*.gif'] });
  }
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });

  const failures = [];
  let visited = 0;
  const navigate = async (path) => {
    currentPath = path;
    const result = await send('Page.navigate', { url: `${base}${path}` });
    let ready = false;
    for (let attempt = 0; attempt < 80; attempt += 1) {
      const check = await send('Runtime.evaluate', {
        expression: 'JSON.stringify({ path: location.pathname, heading: !!document.querySelector("h1") })',
        returnByValue: true,
      });
      const state = JSON.parse(check.result.value || '{}');
      if (state.path === path && state.heading) { ready = true; break; }
      await delay(250);
    }
    if (!ready) throw new Error(`Page content timeout: ${path}`);
    await delay(Number(process.env.AUDIT_SETTLE_MS || 200));
    return result;
  };
  const routes = publicRoutes.flatMap((route) => availableLocalesForRoute(route).map((language) => pathForLocale(route, language)))
    .filter((path) => !process.env.ROUTE_FILTER || process.env.ROUTE_FILTER.split(',').includes(path));
  for (const path of routes) {
    exceptions.length = 0;
    const { frameId } = await navigate(path);
    if (!frameId) failures.push(`${path}: navigation failed`);
    const result = await send('Runtime.evaluate', {
      expression: `JSON.stringify({ path: location.pathname, lang: document.documentElement.lang, title: document.title, h1: document.querySelector('h1')?.textContent?.trim(), root: document.querySelector('#root')?.children.length, width: document.documentElement.scrollWidth, viewport: innerWidth })`,
      returnByValue: true,
    });
    const page = JSON.parse(result.result.value || '{}');
    if (page.path !== path || !page.h1 || !page.title || !page.root) failures.push(`${path}: incomplete browser page ${JSON.stringify(page)} ${process.env.ROUTE_FILTER ? JSON.stringify(result).slice(0, 500) : ''}`);
    if (page.width > page.viewport + 2) failures.push(`${path}: horizontal overflow ${page.width}px at ${page.viewport}px`);
    if (exceptions.length) failures.push(`${path}: ${exceptions.map((message) => process.env.ROUTE_FILTER ? message : message.split('\n')[0]).join('; ')}`);
    visited += 1;
    if (visited % 20 === 0) console.log(`Checked ${visited}/${routes.length} pages`);
  }

  await send('Network.setBlockedURLs', { urls: [] });
  const samples = process.env.ROUTE_FILTER ? [] : [
    ['/', 1366, 900], ['/vi/privacy', 390, 844],
    ['/fr/real-cases/klaus', 390, 844], ['/ko/contact', 390, 844],
    ['/zh-hans/doctors', 390, 844], ['/zh-hant/real-cases', 390, 844],
  ];
  for (const [path, width, height] of samples) {
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 500 });
    await navigate(path);
    const result = await send('Runtime.evaluate', {
      expression: 'JSON.stringify({ width: document.documentElement.scrollWidth, viewport: innerWidth, h1: document.querySelector("h1")?.textContent?.trim() })',
      returnByValue: true,
    });
    const page = JSON.parse(result.result.value || '{}');
    if (page.width > page.viewport + 2) failures.push(`${path} at ${width}px: horizontal overflow ${page.width}px`);
    const capture = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    const name = `${path.replaceAll('/', '_') || 'home'}-${width}.png`;
    await writeFile(new URL(name, screenshots), Buffer.from(capture.data, 'base64'));
  }

  console.log(`Browser visited ${visited} pages; captured ${samples.length} desktop/mobile screenshots.`);
  if (failures.length) {
    console.error(failures.slice(0, 30).join('\n'));
    if (diagnostics.length) console.error(diagnostics.slice(0, 20).join('\n'));
    process.exitCode = 1;
  }
} finally {
  socket?.close();
  child.kill();
}
