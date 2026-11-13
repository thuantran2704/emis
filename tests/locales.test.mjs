import test from 'node:test';
import assert from 'node:assert/strict';
import {
  localeFromPath,
  pathForLocale,
  canonicalForPath,
  availableLocalesForRoute,
  languageSwitchHref,
  publicRoutes,
} from '../src/seo/locales.js';

test('language comes from the URL and English keeps the existing path', () => {
  assert.deepEqual(localeFromPath('/'), { language: 'english', routePath: '/', prefix: '' });
  assert.deepEqual(localeFromPath('/fr/real-cases/klaus'), {
    language: 'french', routePath: '/real-cases/klaus', prefix: '/fr',
  });
  assert.deepEqual(localeFromPath('/zh-hant/contact'), {
    language: 'traditional', routePath: '/contact', prefix: '/zh-hant',
  });
  assert.equal(localeFromPath('/en/real-cases').language, 'english');
});

test('language switch preserves the equivalent page', () => {
  assert.equal(pathForLocale('/real-cases/klaus', 'korean'), '/ko/real-cases/klaus');
  assert.equal(pathForLocale('/fr/real-cases/klaus', 'vietnamese'), '/vi/real-cases/klaus');
  assert.equal(pathForLocale('/zh-hans/real-cases/klaus', 'english'), '/real-cases/klaus');
  assert.equal(pathForLocale('/contact', 'french'), '/fr/contact');
});

test('canonical is stable and tied to the language URL', () => {
  assert.equal(canonicalForPath('/'), 'https://emisdental.com/');
  assert.equal(canonicalForPath('/fr/real-cases/klaus'), 'https://emisdental.com/fr/real-cases/klaus');
  assert.equal(canonicalForPath('/fr/'), 'https://emisdental.com/fr/');
});

test('only public known routes and available translations can be indexed', () => {
  assert.ok(publicRoutes.includes('/real-cases/klaus'));
  assert.ok(publicRoutes.includes('/real-cases/sergey-zhanna'));
  assert.ok(!publicRoutes.includes('/mail'));
  assert.deepEqual(availableLocalesForRoute('/privacy'), [
    'english', 'vietnamese', 'french', 'korean', 'simplified', 'traditional',
  ]);
  assert.deepEqual(availableLocalesForRoute('/real-cases/klaus'), [
    'english', 'vietnamese', 'french', 'korean', 'simplified', 'traditional',
  ]);
  assert.deepEqual(availableLocalesForRoute('/does-not-exist'), []);
});

test('language switch keeps the same page for all completed translations', () => {
  assert.equal(languageSwitchHref('/real-cases/klaus', 'french'), '/fr/real-cases/klaus');
  assert.equal(languageSwitchHref('/privacy', 'french'), '/fr/privacy');
  assert.equal(languageSwitchHref('/privacy', 'vietnamese'), '/vi/privacy');
});
