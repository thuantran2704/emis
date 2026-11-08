# Real Cases Implementation Plan

**Goal:** Add a browsable, multilingual Real Cases section for the two supplied EMIS patient stories and make it easy to find from the existing site.

**Architecture:** Keep the current React Router and Redux language model. Use one index route and two detail routes, with localized content stored alongside the other translation modules. Reuse the site's shared navigation, footer, and SEO pattern.

**Tech stack:** React 19, React Router 7, Redux Toolkit, Tailwind CSS 4, Vite.

**Source:** `Real cases website Emis.docx` supplied by the user. The document's links and layout notes are content references, not build instructions.

## Constraints

- Keep all work local. Do not push.
- Preserve the six existing languages: English, Vietnamese, French, Korean, Simplified Chinese, Traditional Chinese.
- Make case claims specific to the supplied stories and avoid implying another patient's treatment or result will be the same.
- Use selected photos from the two downloaded Drive folders, cropped to avoid baked-in social post text.
- Keep the existing patient journey and patient story routes working.

## Tasks

- [x] Add `/real-cases`, `/real-cases/sergey-zhanna`, and `/real-cases/klaus` routes. Build a two-card index and structured detail pages with the challenge, care plan, documented outcome, and consultation CTA.
- [x] Add content for all six languages, with page titles and descriptions that reflect each story accurately.
- [x] Put Real Cases in a compact Patients navigation menu, alongside Patient Journey and FAQ. Fix the footer case link and add the three URLs to the sitemap.
- [x] Run final lint and build. Inspect desktop, tablet, and phone layouts, images, and language switching. Leave the local dev server running for review.

## Review focus

- The two cases are distinct and their treatment details stay consistent with the source document.
- Medical details, especially Klaus's bleeding history, are phrased without guarantees.
- Narrow layouts have readable text and no horizontal overflow.
- Every language has working navigation and page text.
- Index and detail pages each have a useful title, description, canonical URL, and internal links.
