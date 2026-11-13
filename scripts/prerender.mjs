import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { publicRoutes, locales, availableLocalesForRoute, pathForLocale, canonicalForPath } from '../src/seo/locales.js';

const dist = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', dist), 'utf8');
const { renderPage } = await import(new URL('../dist-ssr/entry-server.js', import.meta.url).href);

function htmlForPath(pathname) {
  const { markup, helmet } = renderPage(pathname);
  const language = locales.find(({ prefix }) => prefix && pathname.startsWith(`${prefix}/`))?.code || 'en';
  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].filter(Boolean).join('\n    ');
  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
}

const urls = [];
for (const routePath of publicRoutes) {
  for (const language of availableLocalesForRoute(routePath)) {
    const pathname = pathForLocale(routePath, language);
    const destination = pathname === '/'
      ? new URL('index.html', dist)
      : new URL(`${pathname.replace(/^\//, '').replace(/\/$/, '')}/index.html`, dist);
    await mkdir(new URL('.', destination), { recursive: true });
    let html;
    try {
      html = htmlForPath(pathname);
    } catch (error) {
      throw new Error(`Unable to prerender ${pathname}`, { cause: error });
    }
    await writeFile(destination, html, 'utf8');
    urls.push(canonicalForPath(pathname));
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(new URL('sitemap.xml', dist), sitemap, 'utf8');
console.log(`Prerendered ${urls.length} localized pages.`);
