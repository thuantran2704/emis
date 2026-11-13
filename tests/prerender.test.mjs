import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('French Klaus page has content and search metadata in response HTML', async () => {
  const html = await readFile(new URL('../dist/fr/real-cases/klaus/index.html', import.meta.url), 'utf8');
  assert.match(html, /<html[^>]*lang="fr"/);
  assert.match(html, /<h1[^>]*>[^<]+<\/h1>/);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/emisdental\.com\/fr\/real-cases\/klaus"/);
  assert.match(html, /hreflang="ko"[^>]*href="https:\/\/emisdental\.com\/ko\/real-cases\/klaus"/i);
  assert.doesNotMatch(html, /https:\/\/emisdental\.com\/services\?q=/);
});

test('Vietnamese and French privacy pages have distinct localized content', async () => {
  const vi = await readFile(new URL('../dist/vi/privacy/index.html', import.meta.url), 'utf8');
  const fr = await readFile(new URL('../dist/fr/privacy/index.html', import.meta.url), 'utf8');
  assert.match(vi, /<html[^>]*lang="vi"/);
  assert.match(fr, /<html[^>]*lang="fr"/);
  assert.match(fr, /Politique de confidentialité/);
  assert.doesNotMatch(fr, /<h1[^>]*>Privacy Policy<\/h1>/);
});
