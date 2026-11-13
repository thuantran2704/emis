# Localized Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Serve each completed Emis Dental language version at a stable URL on the existing domain, with rendered content and correct search metadata.

**Architecture:** English retains existing paths; other locales use `/vi`, `/fr`, `/ko`, `/zh-hans`, `/zh-hant`. React Router keeps shared page components under a locale basename. Build-time rendering emits an HTML file for each available route and locale; one route inventory drives rendering, sitemap, canonical, and alternate tags.

**Tech Stack:** React 19, React Router 7, Redux, Vite 6, Vercel static hosting, Node built-in test runner.

**Spec:** `docs/superpowers/specs/2026-11-13-localized-pages-design.md`

## Global Constraints

- Preserve existing page design, images, patient facts, and existing English URLs.
- Never publish English fallback content under another locale's indexable URL.
- Exclude `/mail`, `/drive`, unknown routes, and incomplete translations from the localized sitemap and `hreflang`.
- Do not push until direct requests and rendered UI have been reviewed across every published route.

## Review Focus

- Deep links: direct `/fr/real-cases/klaus` request renders French without browser-language state.
- Navigation: locale prefix survives internal links and page-equivalent language switches.
- Static output: fetched HTML already contains localized H1, title, description, canonical, and `hreflang` before JavaScript.
- Content integrity: missing translation never silently falls back to English at an indexable localized URL.
- Deployment routing: generated files win over SPA fallback, and unknown paths do not masquerade as valid pages.

---

### Task 1: Locale and route model

**Files:** Create `src/seo/locales.js`, `src/seo/routes.js`, `tests/locales.test.mjs`; modify `src/slices/languageSlice.js`.

**Interfaces:** `localeFromPath(pathname)`, `pathForLocale(pathname, locale)`, `canonicalForPath(pathname)`, `publicRoutes`, and `availableLocalesForRoute(pathname)`.

- [ ] Write tests for all six locale paths, English root, case detail paths, unsupported locale, and route availability. Run `node --test tests/locales.test.mjs` and observe failure.
- [ ] Implement locale mapping and the public-route inventory from `src/App.jsx`; enumerate case IDs from case data. Run the same tests and observe pass.
- [ ] Set Redux initial language from the current path without browser-language override. Verify the route model tests and commit this task.

### Task 2: URL-driven navigation

**Files:** Modify `src/App.jsx`, `src/components/LanguageToggle.jsx`, `src/components/Navbar.jsx` only if needed; add a representative navigation test or build-level check.

**Interfaces:** Browser router receives locale basename; language switcher uses `pathForLocale` to link to equivalents.

- [ ] Write a failing test or browser check for direct locale path and equivalent language switch.
- [ ] Make locale URL authoritative, preserve locale in internal links, and make language options accessible links.
- [ ] Verify English and non-English direct navigation, mobile menu, and case-detail switching. Commit this task.

### Task 3: Rendered HTML and SEO output

**Files:** Create `src/entry-server.jsx`, `scripts/prerender.mjs`, `tests/prerender.test.mjs`; modify `src/main.jsx`, `index.html`, `src/App.jsx`, `src/components/seoMarkup.jsx`, `package.json`, `vercel.json`, `public/sitemap.xml` generation.

**Interfaces:** Build script emits `dist/<localized-route>/index.html` and sitemap from route inventory; browser uses `hydrateRoot` for rendered pages.

- [ ] Write a failing build-level test that inspects a localized case page's HTML, metadata, canonical, and reciprocal alternate links.
- [ ] Add server-safe rendering and build-time generation without changing page layout. Remove conflicting global metadata and stale `/services` schema.
- [ ] Validate generated HTML for all published routes, sitemap entries, HTTP status, and hydration; commit this task.

### Task 4: Translation coverage and review

**Files:** Fill missing locale content in `src/Translations/chatContent.jsx`, `disclaimerContent.jsx`, `patientCase1Content.jsx`, `warrantyContent.jsx`, `privacyContent.jsx`, `mediaContent.jsx`; add `tests/translationCoverage.test.mjs` or equivalent validation.

**Interfaces:** Availability matrix is updated only for complete, reviewed locale versions.

- [ ] Write a failing coverage check for missing locale keys and source-string fallbacks on public pages.
- [ ] Translate with web/marketing and French/Korean/Chinese/Vietnamese specialist passes, preserving facts and legal/clinical scope; flag ambiguous claims for clinic review.
- [ ] Verify six-language page rendering, long labels, contact data, and no mojibake; commit this task.

### Task 5: Whole-site verification and delivery

**Files:** Fix only issues revealed by the checks; update plan ledger with results.

- [ ] Run `npm run lint`, `npm run build`, and route/translation tests.
- [ ] Crawl every generated URL to check response, language, H1, metadata, canonical, alternates, images, and internal links.
- [ ] Review representative and long-content pages visually on desktop and phone in all six languages; fix failures and rerun checks.
- [ ] Review the final diff and public-media scope, then push the verified commits to `origin/master` as authorized by the user's delivery request. Confirm remote HEAD and deployment status separately.

## Local verification, 2026-11-13

- The build generated 168 static pages, covering 28 routes in six languages. The eight route and rendered-HTML tests passed.
- The browser audit visited all 168 pages at phone width without missing headings, JavaScript exceptions, or horizontal overflow. Six desktop and phone screenshots were captured and reviewed locally.
- Visible-copy and image-alt comparisons against English leave proper names, product names, and contact brands unchanged. Klaus's supplied before/after portrait order was corrected after visual review.
- The production-style local preview responds at `http://127.0.0.1:4174/zh-hans/`; a known page returned 200 and an unknown page returned 404.
- At this local-review checkpoint, no implementation commit or push had been made. Clinical/legal terminology still needs qualified review; see `docs/translation-review-2026-11-13.md`.

## Final delivery check, 2026-11-13

- The user reviewed the local work and explicitly requested one final check and push.
- Fresh lint, production build, and all eight route/render tests passed; 168 localized pages were generated.
- The final browser pass visited all 168 pages without a reported page error; representative mobile screenshots were checked again. Remote delivery and deployment status still require verification after the push.
