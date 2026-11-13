// Local static preview with the same per-page lookup as the Vercel rewrite.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { publicRoutes, availableLocalesForRoute, pathForLocale } from '../src/seo/locales.js';

const published = new Set(publicRoutes.flatMap((route) =>
  availableLocalesForRoute(route).map((language) => pathForLocale(route, language))));
const dist = new URL('../dist/', import.meta.url);
const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.xml': 'application/xml',
  '.woff2': 'font/woff2', '.json': 'application/json',
};

createServer(async (req, res) => {
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  let file;
  if (published.has(pathname) || published.has(normalized)) {
    file = pathname === '/' ? 'index.html' : `${normalized.slice(1)}/index.html`;
  } else if (/^\/(assets\/|[^/]+\.[a-z0-9]+$)/i.test(pathname) && !pathname.includes('..')) {
    file = pathname.slice(1);
  } else {
    res.writeHead(404).end('Not found');
    return;
  }
  try {
    const body = await readFile(new URL(file, dist));
    res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' }).end(body);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(4174, '127.0.0.1', () => console.log('Prerender preview: http://127.0.0.1:4174'));
