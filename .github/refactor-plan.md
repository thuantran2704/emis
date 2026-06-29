# Page Refactor Plan (sections → components)

> Status: **PLAN ONLY** (not implemented). Goal: split large pages into section
> components and extract duplicated helpers.
> Style-guide limits: page soft **300** / hard **450** lines.

## Extract these shared pieces first (highest leverage)

- **`SectionLabel` / `SectionTitle` / `SectionHeading`** — currently re-defined
  inline and identically in `About`, `drSonPage`, `drTuPage`, `fixedTeeth`,
  `fullMouth`. Move to one `src/components/Section.jsx`.
- **`<Section tone="white|cool|cream">` wrapper** — almost every page alternates
  `py-* bg-white / bg-[#f1f5f9] / bg-[#f7f2e7]`. One wrapper removes the repetition.
- **Ad-page template** — `crown` (611), `canal` (453), `whitening` (560),
  `genAd` (724) are near-duplicates: Hero → QuickBanner → rounded white info cards
  → dark-gradient Final CTA → contact footer. Extract `AdHero`, `QuickBanner`,
  `InfoCard`, `FinalCtaBanner`, `AdContactFooter`. **Single biggest win.**
- **Treatment-page template** — `fixedTeeth`, `fullMouth`, `solutions`,
  `OralSurgery`, `SmileAesthetics`: hero + `ContactCtas`, alternating
  `SectionHeading` blocks, journey steps, patient-cases grid, team strip,
  final CTA → `JourneySteps`, `PatientCasesGrid`, `TeamStrip`, `FinalCtaSection`.
- **Doctor-page template** — `drSonPage` (314) / `drTuPage` (372) share the same
  section flow → shared profile section components.
- **Already shared (reuse, don't duplicate):** `ContactCtas`, `contactChannels`,
  `styles/ui.js`, `PolicyPage`, `ContactForm`, `MachineBanner`, `AdBanner`.

## Biggest offenders (line counts)

| Lines | File |
| ----- | ---- |
| 724 | `src/pages/genAd.jsx` |
| 611 | `src/pages/crown.jsx` |
| 560 | `src/pages/whitening.jsx` |
| 543 | `src/components/Navbar.jsx` |
| 474 | `src/pages/Home.jsx` |
| 469 | `src/pages/implant.jsx` |
| 453 | `src/pages/canal.jsx` |
| 372 | `src/pages/drTuPage.jsx` |
| 350 | `src/pages/Services.jsx` |
| 349 | `src/pages/solutions.jsx` |
| 348 | `src/pages/About.jsx` |

## Per-page section breakdown

- **About (348):** Hero, OurApproach, WhyPlanning, Technology&Safety, Team,
  SupportOverseas, Trust&Transparency, StartSteps. Move `SectionLabel`/`SectionTitle` out.
- **crown (611, ad):** Hero (Text / BrandPills / DiscountBadge / Image / Stats),
  QuickBanner, SuitableFor+Guarantees, BrandsGrid, WhyChoose, Process+SmileDesign,
  Features, FinalCTA, ContactFooter → use `Ad*` components.
- **canal (453, ad):** Hero (Text / Stats / Image), QuickBanner, WhatIsPulpitis,
  Process, CrownRole+Symptoms, FinalCTA, ContactFooter → `Ad*` components.
- **whitening (560, ad):** same ad template → `Ad*` components.
- **genAd (724):** largest. Move service/highlights **data arrays** into a config
  module, then split Hero, services grid, highlights, 3-service grid, comparison, CTA.
- **Home (474):** hero + multiple feature/CTA bands → section components.
- **implant (469):** hero + sections 1–7 (incl. system-cards grid) → section components.
- **doctors (329):** HeroSection, JourneySection, DoctorSection, DecisionSection (+ form).
- **drSonPage (314) / drTuPage (372):** shared `DoctorProfile` sections.
- **Services (350) / SmileAesthetics (310) / OralSurgery (288) / solutions (349) /
  fixedTeeth (260) / fullMouth (294):** treatment template sections.
- **Contact (308):** ContactActions (bubbles — reuse `contactChannels`) +
  AppointmentForm (extract form; `ContactForm.jsx` already exists — dedupe).
- **Equipment (213) / InternationalPatients (255) / flightassist (260) /
  landingPage1 (283) / bocRang (322):** split heroes + repeated card sections.

## Notes

- Many pages already define small inline helpers (`SectionHeading`, etc.)
  identically → centralize.
- Ad pages are near-duplicates → biggest win is one shared ad template.
- Keep section components **presentational**; pass content via props from the page.

## Progress

- [x] `src/components/Section.jsx` — `SectionHeading` extracted; applied to
  `fixedTeeth`, `fullMouth`.
- [x] `src/components/AdContactFooter.jsx` — created (not yet wired).
- [x] `src/components/AdQuickBanner.jsx` — created (not yet wired).
- [x] `src/components/AdFinalCta.jsx` — created (not yet wired).
- [ ] Wire Ad* components into `crown`, `canal`, `whitening`.
- [ ] Treatment template, doctor template, genAd data split.
