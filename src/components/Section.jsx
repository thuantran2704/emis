import { sectionLabelClass, sectionTitleClass } from '../styles/ui';

const introClass =
  'text-[17px] md:text-[19px] text-gray-600 leading-relaxed mt-5';

/**
 * Section — page section shell with a shared background + vertical rhythm.
 *
 * Removes the repeated `py-16 md:py-20 bg-[…]` strings and keeps the alternating
 * background palette consistent site-wide.
 *
 *   <Section tone="cool" width="7xl">…</Section>
 *
 * Props:
 *   tone   — background: 'white' | 'cool' (#f1f5f9) | 'light' (#f7fafc) | 'cream' (#f7f2e7)
 *   py     — vertical padding: 'default' (py-16 md:py-20) | 'lg' (py-20 lg:py-28)
 *   width  — if set, wraps children in a centered container:
 *            '7xl' | '6xl' | '5xl' | '4xl' | '3xl' (adds `mx-auto max-w-* px-6`)
 *   className — extra classes on the <section>
 *   ...rest — forwarded to the <section> (id, aria-*)
 */
const TONES = {
  white: 'bg-white',
  cool: 'bg-[#f1f5f9]',
  light: 'bg-[#f7fafc]',
  cream: 'bg-[#f7f2e7]',
};

const PY = {
  default: 'py-16 md:py-20',
  lg: 'py-20 lg:py-28',
};

const WIDTHS = {
  '7xl': 'max-w-7xl',
  '6xl': 'max-w-6xl',
  '5xl': 'max-w-5xl',
  '4xl': 'max-w-4xl',
  '3xl': 'max-w-3xl',
};

export default function Section({
  tone = 'white',
  py = 'default',
  width,
  className = '',
  children,
  ...rest
}) {
  const classes = [TONES[tone] || TONES.white, PY[py] || PY.default, className]
    .filter(Boolean)
    .join(' ');
  const inner = width ? (
    <div className={`mx-auto ${WIDTHS[width] || ''} px-6`}>{children}</div>
  ) : (
    children
  );
  return (
    <section className={classes} {...rest}>
      {inner}
    </section>
  );
}

// Centered (or left-aligned) eyebrow + title + optional intro. Shared across
// treatment pages. Keep presentational only — content via props.
// align: 'center' (default) | 'left'
export function SectionHeading({ eyebrow, title, intro, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto';
  return (
    <div className={`max-w-3xl mb-12 ${alignClass}`}>
      <p className={sectionLabelClass}>{eyebrow}</p>
      <h2 className={sectionTitleClass}>{title}</h2>
      {intro && <p className={introClass}>{intro}</p>}
    </div>
  );
}
