# EMIS Dental SEO and homepage review, 21 November 2026

The two supplied Word documents are stakeholder suggestions. This review checks them against the current React site and its published content. A successful build establishes what the site will output locally; it does not establish Google indexing, production deployment, or appointment email delivery.

Update, 22 November 2026: The clinic confirmed free consultation and approved the four supplied journey screenshots for publication on `emisdental.com`, including the visible patient conversation content.

Later update, 22 November 2026: The separate `emis_be` service was inspected. Its appointment model requires a date and limits phone numbers to 20 characters; the server supplies a default service. The homepage and Doctors consultation form now sends the preferred date and selected service as top-level API fields, and both forms show the country code as part of one phone number. The backend saves the request to MongoDB before awaiting Gmail delivery. If that email fails, it returns an error even though the request may already be stored. The frontend now warns patients to contact the clinic before submitting again; the backend mail failure still needs a separate repair.

## Implemented in this pass

| Suggestion | Decision |
| --- | --- |
| Put a clinic introduction near the top | Added a concise About section immediately after the hero, with links to About and Doctors. The hero still states the service and location first. |
| Show care beyond implants | Added a compact, linked Other Dental Services section using four existing service routes. Updated the Why Emis message to include orthodontics and aesthetic restoration without promising an outcome. |
| Move real cases below services | Moved the two case previews beneath implant and other service options. |
| Use a warmer ivory and gold palette | Warmed homepage section backgrounds and service cards while keeping dark text for legibility. The existing dark footer remains consistent with the broader site. |
| Replace the casual selfie in the trust section | Used an existing professional treatment photograph from the repository and updated its alternative text. |
| Make consultation preferences interactive | Added optional searchable country input, date picker, contact method, language, and referral source to the homepage form. The existing appointment API receives these details in its supported message field. |
| Add WhatsApp, Messenger, Zalo and email access | These channels already exist in the site's contact data. The form now offers the channels as preferences and shows a direct link for messaging channels. |
| Describe clinicians in structured data | Added profile references for both existing doctor pages and the clinic's listed contact languages to the current Dentist structured data. |
| Replace the four journey chat screenshots | The four supplied 1080×1080 images are now wired into the homepage slider in the specified order. Their frame uses a contained layout, so message bubbles remain visible. A note explains that the exchanges are individual examples. |
| Highlight a free consultation | The clinic confirmed that consultation is free. The homepage form now presents this in a gold-accented box in all six languages. |

All new visible homepage and form text has six language versions, matching the six published language routes.

## Already in place

| Suggestion | Current site evidence |
| --- | --- |
| Dedicated doctor profiles | `/dr-long` and `/dr-tu` already have profile pages and links from Doctors. Creating a second slug for Dr. Long would duplicate the profile. |
| Home and subpage titles and descriptions | Pages already set titles and descriptions in React Helmet; the build prerenders the HTML. The site does not run WordPress, Yoast, or Rank Math. |
| Hreflang, canonicals, sitemap and robots | All six language routes already have canonical and reciprocal alternate links. The build writes a localized sitemap; robots.txt points to it. |
| Clinic structured data | The site already uses Dentist, LocalBusiness, Organization and WebSite markup, with an address and opening hours. The doctor references were the material gap addressed here. |
| Contact channels | WhatsApp, phone, email, Zalo and social links are already configured. |

## Deferred or declined

| Suggestion | Reason / required next input |
| --- | --- |
| Paste the proposed English, Chinese and Vietnamese SEO titles and descriptions verbatim | The clinic has confirmed the supplied professional facts. The draft metadata is still long and keyword heavy, so the existing localized titles and descriptions were retained. Google has no strict 60-character title or 155-character description limit; it truncates to available display width. |
| Force Google sitelinks through metadata | Sitelinks are generated automatically. Clear headings, navigation and internal links help, but no page title or description can force them. |
| Add another Dr. Long URL such as `/bs-cki-do-thai-long` | `/dr-long` already has the profile and is linked. A second URL would create duplicate content and complicate canonicals. A redirect could be considered only if that slug is needed for a campaign. |
| Use the exact proposed promotional and medical copy | The clinic has confirmed the source information and credentials. The exact draft was not pasted into the six-language site; its outcome language and tone would need to be adapted consistently across the localized pages. This is an editorial choice, not a missing fact check. |
| Rename the Sergey and Zhanna case to “New Smile With Veneers” | Their documented case includes nine implant-supported crowns and five veneers. A veneers-only headline would omit the larger part of the treatment. |
| Exact screenshot layout and fully gold footer | The reference layouts mix third-party UI patterns with the current site's design. The gold footer proposal would need site-wide contrast and brand review. The homepage received targeted palette and hierarchy changes. |
| Automatic appointment emails | The frontend posts to an external `/api/appointments` service; the email processing code and live mailbox were not available in this repository. The new preferences are included in the message payload, but end-to-end delivery needs a controlled test with the service owner. A `mailto:` handoff is unsuitable for medical enquiries. |
| Country-specific phone prefix selector | Country of residence and a telephone field now exist, but an international dial-code selector needs a verified numbering library and a corresponding API validation rule. Guessing a prefix from residence can be wrong for travelers. |
| New blog pages for the listed keywords | The document supplies keyword topics, not article drafts or outlines. New pages require original writing, a clear audience for each topic, and a maintenance owner. |
| Search Console re-index and Google Business Profile edits | These require access to the verified properties and review of the deployed pages. Requesting a crawl does not guarantee indexing or a one-week turnaround. |

## Remaining practical work

1. Verify the deployed homepage and contact form at desktop and phone widths. Local browser checks have now been completed; production appearance remains unverified from this environment.
2. Repair or replace the backend email step, then run a controlled non-patient test submission. The current service saves to MongoDB first and can return an error afterward if Gmail delivery fails.
3. Use the completed Search Console work and actual queries to choose any new doctor, implant cost, orthodontics, or veneer article. The supplied SEO document has topics only.
4. Run a focused image and JavaScript weight pass. The current build still emits a 1.27 MB main JavaScript asset and several multi-megabyte images, including large images on treatment pages.

Google documentation: [sitelinks](https://developers.google.com/search/docs/appearance/sitelinks), [title links](https://developers.google.com/search/docs/appearance/title-link), [snippets](https://developers.google.com/search/docs/appearance/snippet), [localized pages](https://developers.google.com/search/docs/specialty/international/localized-versions), [recrawl requests](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
