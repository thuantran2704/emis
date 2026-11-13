# Emis Dental localized pages design

## Intent

Give patients a direct, shareable page in their chosen language and let search engines discover that language version. Keep the existing Emis Dental site, visual design, patient stories, and domain. A language change should open the equivalent page in the chosen language.

## Approaches considered

1. **One URL per page, client-side language switch.** Smallest change, but search engines may see only one language at each URL. This is the current model and does not meet the chosen search goal.
2. **One domain, a distinct URL per language. Chosen.** The same React page components and visual design serve language-specific URLs. This gives each version a stable canonical URL without buying or operating more domains.
3. **Separate domain per language.** Distinct URLs but unnecessary domain, deployment, and brand overhead for this clinic.

## Goals

- Use `https://emisdental.com/` for English. Use `/vi/`, `/fr/`, `/ko/`, `/zh-hans/`, and `/zh-hant/` prefixes for the other five languages. The completed project covers every public content route, including Home, Real Cases, case details, treatments, doctors, contact, and policy pages.
- Preserve the existing path and case identifier when switching languages. For example, `/real-cases/klaus` becomes `/fr/real-cases/klaus` when French is selected.
- Keep internal navigation in the selected language, with a visible language switcher that links to actual alternate URLs.
- Send rendered page content and page-specific title, description, canonical, Open Graph data, and `html lang` in the initial HTML response of each indexable URL. Use build-time static generation on the existing Vite/Vercel deployment where possible.
- Generate self-canonical URLs, reciprocal `hreflang` entries for available translations, an `x-default` English URL, and a sitemap of the rendered public URLs.
- Make the English root and existing unprefixed URLs continue to work. Preserve existing links and search equity; do not redirect every visitor based on browser language.
- Review translations in context, including headings, clinical facts, photo labels, alt text, CTAs, page titles, descriptions, and long mobile labels.

## Constraints and boundaries

- One production domain: `emisdental.com`. No country domains or separate visual sites.
- The six language choices remain English, Vietnamese, French, Korean, Simplified Chinese, and Traditional Chinese.
- Existing case photos, names, medical details, reviews, and public copy must not be invented or materially changed by translation. Flag changed or ambiguous clinical claims for an Emis Dental clinical reviewer; language skills support but do not replace that review. A page with unresolved clinical claims remains out of the localized index until reviewed.
- A locale page is indexable and appears in `hreflang` only when its main content is translated and checked. Do not silently publish an English fallback as a purported French, Korean, Chinese, or Vietnamese page. Release may be staged by page, but the project is complete only when all public content routes have all six versions.
- `/mail` and `/drive` are external redirects and are not localized or indexed. Unknown paths need a real not-found response where the hosting setup permits it, rather than indexable copies of the homepage.
- Keep the existing Real Cases layout and photo presentation. The homepage case-preview improvement from the document review is a separate UI task, with the same six-language content standard.

## Page and navigation behavior

- English content stays at the current URLs. Other language pages use a prefix but share the same route components and overall layout.
- The URL is the source of truth for language. A direct visit to `/ko/real-cases/klaus` renders Korean without needing a saved preference or browser-language detection. The root remains stable English.
- Internal links created by React Router retain the locale prefix. Explicit external links, telephone links, WhatsApp, and email links keep their existing destinations.
- The switcher uses links to corresponding URLs, so it works with keyboard navigation and can be followed by crawlers. If a page is unavailable in the target language, link to that language's nearest relevant index page and explain the fallback rather than presenting English under the target prefix.
- Page headings and labels stay in the content language. Patient names and the Emis Dental brand remain consistent with approved source copy.

## Search and rendering

- Maintain a single route inventory and a locale-availability matrix that drive static page generation, sitemap entries, and alternate-language links. Case-detail routes are enumerated from case data; do not generate a generic `:caseId` page.
- Render each approved route/locale combination to HTML during the build. The browser hydrates that content for interactivity rather than discarding the rendered markup. Verify the fetched HTML contains its unique main heading and metadata before JavaScript runs.
- Consolidate canonical and alternate tags so `index.html`, the app shell, and individual pages do not emit conflicting values. Keep each page's title and description specific to its content and locale.
- Remove the nonexistent `/services` `SearchAction` target and the sitewide FAQ markup that does not match every page. Use truthful, page-relevant structured data; do not add self-serving review-star markup for Emis Dental.
- Configure Vercel to serve generated files first and retain a fallback only for application routes that need it. Validate deep-link HTTP behavior after deployment.

## Translation workflow

1. Freeze approved source facts, brand terms, treatment names, case chronology, numbers, and contact details in a small project glossary.
2. Translate page copy and metadata using the product/web/marketing translation workflow. Use French, Korean, and Chinese specialist passes; review Simplified and Traditional Chinese separately. Use the Vietnamese landing-copy and natural-language review skills for Vietnamese.
3. Compare every target string with source meaning and the glossary. Check medical terminology and claims with a qualified clinic reviewer. Do not claim a language has been human-reviewed until that review occurs.
4. Verify each locale in the actual page at desktop and phone widths, including truncation, image text, alt text, navigation, and contact links.

## Delivery and validation

- Inventory all public routes and existing translation coverage before generating URLs. The privacy, media-consent, medical-disclaimer, warranty, patient-story, and chat content files currently have only English and Vietnamese keys; complete the missing languages before marking those pages fully migrated.
- Implement route-derived language, alternate links, static HTML output, metadata, sitemap, and hosting rules in a testable sequence. Release complete locale pages first, then finish the remaining translation gaps and publish their URLs. Do not mark the project complete after only the first batch.
- Validate direct requests for representative routes in all six languages, source HTML without JavaScript, canonical and reciprocal `hreflang`, sitemap coverage, old English URLs, 404 behavior, and language switching from a case detail page.
- Run lint and build, then review desktop and mobile pages locally. After publication, check live HTTP responses and Google Search Console indexing; a successful build or deployment alone is not live SEO verification.

## Decisions left to implementation

- Choose the smallest build-time renderer compatible with existing Vite, React Router, Redux, and Helmet usage; document any server-only changes it requires.
- Audit locale completeness route by route before choosing the release order. Prioritize Home, Real Cases, case details, contact, doctors, and international-patient routes, then the remaining public routes.
- Keep the homepage case preview and broader visual polish in a separate implementation plan after the locale foundation, so each change can be reviewed independently.
