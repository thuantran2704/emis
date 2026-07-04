# Reusable Components Guide

> Purpose: a quick reference for the shared presentational components used across
> the marketing pages. **Reuse these instead of hand-writing Tailwind strings or
> duplicating section markup.** Keep this file updated when you add/refactor a
> shared component.

## `Text` — typography primitive

**File:** [`src/components/Text.jsx`](../src/components/Text.jsx)

The single source of truth for headings, intros, card titles and body copy.
Purely presentational (class mapping only — no JS font measuring). Replaces the
~40 hand-rolled `h2/h3/p` class strings that used to drift out of sync.

```jsx
import Text from '../components/Text';

<Text variant="eyebrow" className="mb-4">{page.section.label}</Text>
<Text variant="title">{page.section.title}</Text>
<Text variant="intro" align="center" className="mt-4">{page.section.intro}</Text>
<Text variant="cardTitle">{card.title}</Text>
<Text variant="description" tone="slate" className="mt-2">{card.text}</Text>
```

- **variant** — role preset: `eyebrow`, `title`, `subtitle`, `intro`,
  `cardTitle`, `cardSubtitle`, `description`. Sets weight/transform/wrap, a
  default tag, default size and default color.
- **tone** — color override (`heading`, `headingBlue`, `headingSlate`, `muted`,
  `slate`, `steel`, `gold`, `faint`, `white`, `invert`, `dim`).
- **size** — font-size override (`micro`, `tiny`, `xs`, `sm`, `base`, `lg`,
  `titleSm`, `title`, plus page tokens like `p13`/`p15`/`aboutTitle`/`hero`).
- **weight** — font-weight override: `normal` | `medium` | `semibold` | `bold`
  (e.g. About's headings use `weight="normal"`).
- **align** — `left` | `center` | `right` (omit to inherit).
- **as** — override the tag (e.g. `as="h3"` / `as="span"`).
- **className** — spacing (`mt-*`/`mb-*`), hover states, `max-w-*`.

Rules: put spacing in `className`; change color with `tone` (not a `text-[#…]`
class); change size with `size` (not a `text-lg` class). Only one color and one
size class is ever emitted, so overrides are reliable. Add new colors/sizes to
the `TONES`/`SIZES` maps in the component so they stay shared.

## `CtaButton` — call-to-action button / link

**File:** [`src/components/CtaButton.jsx`](../src/components/CtaButton.jsx)

Polymorphic pill CTA. Renders `<Link>` (`to`), `<a>` (`href`), or `<button>`
(`onClick`) automatically. Replaces 25+ hand-written button class strings.

```jsx
import CtaButton from '../components/CtaButton';

<CtaButton to="/contact" variant="primary">{cta}</CtaButton>
<CtaButton to="/faq" variant="outline" size="sm">{cta}</CtaButton>
<CtaButton onClick={fn} variant="link" withArrow>{cta}</CtaButton>
```

- **variant** — `primary` (gold) / `secondary` (dark) / `outline` /
  `outlineGold` / `ghostWhite` (on dark bg) / `link` (text + arrow).
- **size** — `sm` | `md` (default) | `lg` (ignored by `link`).
- **withArrow** — append the → icon (default on for `link`).
- **to** / **href** / **onClick** — pick the rendered element.
- **className** — spacing (`mt-*`), width (`w-full`).

Add new looks to `VARIANTS` in the component, not inline.

## `PicSlider` — image / content showcase slider

**File:** [`src/components/PicSlider.jsx`](../src/components/PicSlider.jsx)

Reusable slider with three auto-selected layouts and a filmstrip thumbnail rail.

```jsx
import PicSlider from '../components/PicSlider';

<PicSlider pics={journeyPics} content={page.realJourneys} />
```

- **pics** — array of imported images (required).
- **content** — `{ label, heading, subheading, pic: [{ title, description }] }`.
  - Per-slide `title` + `description` → split image/text layout.
  - `title` only → title bar above a full-width image.
  - none → full-width image with overlaid arrows.
- **bgColor** — image pane background (default `#CCBA78`).
- **className** — wrapper `<section>` override.

## `Section` / `SectionHeading` — section shell + heading block

**File:** [`src/components/Section.jsx`](../src/components/Section.jsx)

`Section` (default export) is the page-section shell — it applies the shared
background palette and vertical rhythm so pages alternate consistently.

```jsx
import Section, { SectionHeading } from '../components/Section';

<Section tone="cool" width="7xl">…</Section>
```

- **tone** — `white` | `cool` (#f1f5f9) | `light` (#f7fafc) | `cream` (#f7f2e7).
- **py** — `default` (py-16 md:py-20) | `lg` (py-20 lg:py-28).
- **width** — optional; wraps children in `mx-auto max-w-* px-6`
  (`7xl`/`6xl`/`5xl`/`4xl`/`3xl`). Omit when the section has a custom inner
  grid/container.

`SectionHeading` renders an eyebrow + title + optional intro. Prefer composing
`Text` for new one-off headings; use `SectionHeading` where the trio repeats.

## `styles/ui.js` — shared class tokens

**File:** [`src/styles/ui.js`](../src/styles/ui.js)

Exported Tailwind class strings for CTAs and legacy titles
(`ctaPrimaryClass`, `ctaSecondaryClass`, `sectionLabelClass`, etc.). Import
instead of re-declaring. New typography should prefer `Text`.

---

### Notes / history

- A previous `FitTextBox` auto-fit component was removed: per-element font
  scaling produced visually inconsistent sizes. Do **not** reintroduce JS font
  fitting for body copy — use `Text` with a fixed type scale plus
  `text-balance` (headings/intros) and `text-pretty` (body) for clean wrapping.
