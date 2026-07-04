/**
 * Text — the single typography primitive for marketing pages.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 * Titles, intros, card headings and descriptions were previously written as
 * hand-rolled Tailwind strings, repeated ~40× across a page with slightly
 * different values. `Text` centralizes those decisions so a role looks the same
 * everywhere and changes (alignment, wrap, color) are a single prop.
 *
 * This is PURELY presentational (class mapping only) — no measuring, no JS
 * resizing. Do NOT reintroduce auto-fit font scaling here; per-element font
 * scaling produced inconsistent sizes and was removed on purpose.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO USE (for agents & contributors)
 *
 *   import Text from '../components/Text';
 *
 *   <Text variant="eyebrow" className="mb-4">{page.section.label}</Text>
 *   <Text variant="title">{page.section.title}</Text>
 *   <Text variant="intro" align="center" className="mt-4">{page.section.intro}</Text>
 *   <Text variant="cardTitle">{card.title}</Text>
 *   <Text variant="description" tone="slate" className="mt-2">{card.text}</Text>
 *
 * PROPS
 *   variant  — role preset. One of:
 *                eyebrow      small uppercase gold label above a title
 *                title        section <h2> heading
 *                subtitle     muted line under a title/card heading
 *                intro        section lead paragraph (auto text-balance)
 *                cardTitle    <h3> heading inside a card
 *                cardSubtitle small label inside a card
 *                description  body copy paragraph (auto text-pretty)
 *   tone     — text color override (see TONES). Defaults per variant.
 *   size     — font-size override (see SIZES). Defaults per variant.
 *   weight   — font-weight override: 'normal' | 'medium' | 'semibold' | 'bold'.
 *   align    — 'left' | 'center' | 'right'. Omit to inherit parent alignment.
 *   as       — override the rendered tag (e.g. as="h3" for SEO/semantics).
 *   className— extra classes: spacing (mt-* or mb-*), hover states, max-width, etc.
 *   ...rest  — any other DOM props (id, style, aria-*) are forwarded.
 *
 * RULES OF THUMB
 *   • Put margins/spacing in `className`, never in a variant.
 *   • Change color with `tone`, not by adding a text-[#...] class (avoids
 *     Tailwind color conflicts — the component emits exactly one color class).
 *   • Change size with `size`, not by adding a text-lg class (same reason —
 *     exactly one size class is emitted, so overrides are reliable).
 *   • Need a new color/size? Add it to TONES/SIZES below so it stays shared.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Role → transform / wrap only (size, color, weight and alignment live below).
const VARIANT_STYLE = {
  eyebrow: 'uppercase tracking-[0.3em]',
  title: 'leading-tight text-balance',
  subtitle: '',
  intro: 'leading-relaxed text-balance',
  cardTitle: '',
  cardSubtitle: '',
  description: 'leading-relaxed text-pretty',
};

const VARIANT_SIZE = {
  eyebrow: 'xs',
  title: 'title',
  subtitle: 'sm',
  intro: 'base',
  cardTitle: 'base',
  cardSubtitle: 'xs',
  description: 'xs',
};

const VARIANT_TAG = {
  eyebrow: 'p',
  title: 'h2',
  subtitle: 'p',
  intro: 'p',
  cardTitle: 'h3',
  cardSubtitle: 'p',
  description: 'p',
};

const VARIANT_TONE = {
  eyebrow: 'gold',
  title: 'heading',
  subtitle: 'faint',
  intro: 'muted',
  cardTitle: 'heading',
  cardSubtitle: 'faint',
  description: 'muted',
};

// Role → default font-weight — override via the `weight` prop.
const VARIANT_WEIGHT = {
  eyebrow: 'semibold',
  title: 'bold',
  subtitle: 'medium',
  intro: 'normal',
  cardTitle: 'semibold',
  cardSubtitle: 'medium',
  description: 'normal',
};

const WEIGHTS = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

// One color class per name — override via the `tone` prop.
const TONES = {
  heading: 'text-[#2a3439]',
  headingBlue: 'text-[#16324a]',
  headingSlate: 'text-[#1d3953]',
  muted: 'text-gray-500',
  subtle: 'text-gray-400',
  body: 'text-gray-600',
  slate: 'text-[#5d7388]',
  steel: 'text-[#6f8da6]',
  gold: 'text-[#C5AF73]',
  goldLight: 'text-[#e7c873]',
  faint: 'text-[#8aa0b5]',
  white: 'text-white',
  whiteSoft: 'text-white/85',
  invert: 'text-[#d6e2ed]',
  dim: 'text-[#dce7f1]',
};

// One size class per name — override via the `size` prop.
const SIZES = {
  micro: 'text-[10px]',
  tiny: 'text-[11px]',
  xs: 'text-xs',
  sm: 'text-sm',
  p13: 'text-[13px]',
  p14: 'text-[14px]',
  p15: 'text-[15px]',
  p16: 'text-[16px]',
  p17: 'text-[17px] md:text-[19px]',
  base: 'text-base',
  lg: 'text-lg',
  bullet: 'text-[1.05rem]',
  card115: 'text-[1.15rem]',
  card125: 'text-[1.25rem]',
  cardLg: 'text-[1.2rem]',
  titleSm: 'text-xl md:text-2xl',
  title: 'text-2xl md:text-3xl',
  sectionTitle: 'text-[1.8rem] md:text-[2.4rem]',
  aboutTitle: 'text-[1.75rem] md:text-[2.1rem]',
  heroSub: 'text-[15px] md:text-[18px]',
  hero: 'text-3xl md:text-5xl',
};

const ALIGN = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export default function Text({
  variant = 'description',
  tone,
  size,
  weight,
  align,
  as,
  className = '',
  children,
  ...rest
}) {
  const Tag = as || VARIANT_TAG[variant] || 'p';
  const style = VARIANT_STYLE[variant] || '';
  const sizeClass = SIZES[size] || SIZES[VARIANT_SIZE[variant]] || '';
  const toneClass = TONES[tone] || TONES[VARIANT_TONE[variant]] || '';
  const weightClass = WEIGHTS[weight] || WEIGHTS[VARIANT_WEIGHT[variant]] || '';
  const alignClass = align ? ALIGN[align] : '';

  const classes = [style, sizeClass, weightClass, toneClass, alignClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
