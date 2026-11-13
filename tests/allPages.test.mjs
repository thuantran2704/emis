import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { publicRoutes, locales, availableLocalesForRoute, pathForLocale, canonicalForPath } from '../src/seo/locales.js';

const dist = new URL('../dist/', import.meta.url);
const fileForPath = (path) => new URL(path === '/' ? 'index.html' : `${path.slice(1).replace(/\/$/, '')}/index.html`, dist);

test('every published page has a localized response and valid internal page links', async () => {
  const errors = [];
  let count = 0;
  for (const route of publicRoutes) {
    for (const language of availableLocalesForRoute(route)) {
      const path = pathForLocale(route, language);
      const code = locales.find((locale) => locale.language === language).code;
      let html;
      try {
        html = await readFile(fileForPath(path), 'utf8');
      } catch {
        errors.push(`${path}: missing HTML`);
        continue;
      }
      count += 1;
      const titles = html.match(/<title\b[^>]*>/g) || [];
      const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*>/g) || [];
      const descriptions = html.match(/<meta\b[^>]*name="description"[^>]*>/g) || [];
      const robots = html.match(/<meta\b[^>]*name="robots"[^>]*>/g) || [];
      const ogUrls = html.match(/<meta\b[^>]*property="og:url"[^>]*>/g) || [];
      const alternateTags = html.match(/<link\b[^>]*rel="alternate"[^>]*>/g) || [];
      if (!html.includes(`<html lang="${code}">`)) errors.push(`${path}: wrong html lang`);
      if (titles.length !== 1) errors.push(`${path}: ${titles.length} titles`);
      if (canonical.length !== 1 || !canonical[0].includes(`href="${canonicalForPath(path)}"`)) errors.push(`${path}: canonical`);
      if (descriptions.length !== 1) errors.push(`${path}: ${descriptions.length} descriptions`);
      if (robots.length !== 1) errors.push(`${path}: ${robots.length} robots tags`);
      if (ogUrls.length !== 1 || !ogUrls[0].includes(`content="${canonicalForPath(path)}"`)) errors.push(`${path}: og:url`);
      const expectedAlternates = availableLocalesForRoute(route).map((alternate) => {
        const localeCode = locales.find((locale) => locale.language === alternate).code;
        return [localeCode, canonicalForPath(pathForLocale(route, alternate))];
      });
      expectedAlternates.push(['x-default', canonicalForPath(route)]);
      if (alternateTags.length !== expectedAlternates.length || expectedAlternates.some(([localeCode, url]) =>
        !alternateTags.some((tag) => tag.includes(`hrefLang="${localeCode}"`) && tag.includes(`href="${url}"`)))) {
        errors.push(`${path}: alternate language links`);
      }
      if (!/<h1\b[^>]*>/.test(html)) errors.push(`${path}: H1`);
      for (const href of html.matchAll(/\bhref="(\/[^"]+)"/g)) {
        const target = href[1].split(/[?#]/, 1)[0];
        if (target === '/' || target === '') continue;
        try {
          const destination = /\.[a-z0-9]{2,12}$/i.test(target)
            ? new URL(target.slice(1), dist)
            : fileForPath(target);
          await access(destination);
        } catch {
          errors.push(`${path}: broken link ${target}`);
        }
      }
      for (const src of html.matchAll(/\bsrc="(\/[^"]+)"/g)) {
        const target = src[1].split(/[?#]/, 1)[0];
        try {
          await access(new URL(target.slice(1), dist));
        } catch {
          errors.push(`${path}: broken asset ${target}`);
        }
      }
    }
  }
  assert.ok(count > 100, `expected broad route coverage, found ${count}`);
  assert.deepEqual([...new Set(errors)].slice(0, 100), []);
});

test('Klaus gallery keeps the original before and full-smile after portraits in order', async () => {
  for (const language of availableLocalesForRoute('/real-cases/klaus')) {
    const path = pathForLocale('/real-cases/klaus', language);
    const html = await readFile(fileForPath(path), 'utf8');
    const portraits = [...html.matchAll(/<img src="([^"]+)" alt="([^"]+)" class="aspect-\[3\/5\] w-full object-cover"/g)];
    assert.equal(portraits.length, 2, `${path}: expected two labeled portraits`);
    assert.match(portraits[0][1], /\/klaus-before-[^/]+\.jpeg$/, `${path}: before portrait`);
    assert.match(portraits[1][1], /\/klaus-after-portrait-[^/]+\.png$/, `${path}: after portrait`);
    if (language === 'english') {
      assert.match(portraits[0][2], /^Before:/);
      assert.match(portraits[1][2], /^After:/);
    }
  }
});
