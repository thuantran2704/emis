import { Link } from 'react-router-dom';

/**
 * CtaButton — the shared call-to-action button/link primitive.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 * The same pill-shaped CTA styles (gold primary, outline secondary, arrow text
 * link) were hand-written 25+ times across pages with slightly different values.
 * CtaButton centralizes the look and is polymorphic — it renders the right
 * element based on which prop you pass.
 *
 * ELEMENT SELECTION
 *   to      → react-router <Link>            (internal navigation)
 *   href    → <a>                            (external / mailto / tel)
 *   onClick / type (no to/href) → <button>   (actions)
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO USE (for agents & contributors)
 *
 *   import CtaButton from '../components/CtaButton';
 *
 *   <CtaButton to="/contact" variant="primary">{cta}</CtaButton>
 *   <CtaButton to="/faq" variant="outline" size="sm">{cta}</CtaButton>
 *   <CtaButton href="tel:+84…" variant="secondary">Call</CtaButton>
 *   <CtaButton onClick={fn} variant="link" withArrow>{cta}</CtaButton>
 *
 * PROPS
 *   variant  — 'primary' (gold) | 'secondary' (dark) | 'outline' (light border)
 *              | 'outlineGold' | 'ghostWhite' (on dark bg) | 'link' (text+arrow).
 *   size     — 'sm' | 'md' (default) | 'lg'. Ignored by the 'link' variant.
 *   withArrow— append the → arrow icon (default true for 'link').
 *   to/href/onClick — see element selection above.
 *   className— extra classes (spacing like mt-*, width like w-full).
 *   ...rest  — forwarded to the element (target, rel, aria-*, type…).
 *
 * Add a new look to VARIANTS below rather than styling inline, so CTAs stay
 * consistent across the site.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const BASE =
  'inline-flex items-center justify-center gap-2 font-semibold transition';

const SIZES = {
  sm: 'rounded-full px-4 py-2 text-sm',
  md: 'rounded-full px-6 py-3 text-sm',
  lg: 'rounded-full px-7 py-3.5 text-sm',
  chip: 'rounded-full px-5 py-2.5 text-[10px] uppercase tracking-[0.14em] lg:px-6 lg:py-3 lg:text-[11px] lg:tracking-[0.16em]',
};

const VARIANTS = {
  primary: 'bg-[#d4af37] text-[#202a30] hover:bg-[#e1be50]',
  secondary: 'bg-[#2a3439] text-white hover:bg-[#1e282d]',
  outline: 'border border-[#9ab1c5] bg-white text-[#1f3b57] hover:bg-[#f2f7fb]',
  outlineGold: 'border border-[#d4af37] text-[#2a3439] hover:bg-white',
  ghostWhite: 'border border-white/60 bg-transparent text-white hover:bg-white/10',
  link: 'text-sm text-[#2a3439] hover:text-[#c19d30]',
};

const Arrow = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

export default function CtaButton({
  variant = 'primary',
  size = 'md',
  withArrow,
  to,
  href,
  className = '',
  children,
  ...rest
}) {
  const isLink = variant === 'link';
  const sizeClass = isLink ? '' : SIZES[size] || SIZES.md;
  const classes = [BASE, sizeClass, VARIANTS[variant] || VARIANTS.primary, className]
    .filter(Boolean)
    .join(' ');

  const showArrow = withArrow ?? isLink;
  const content = (
    <>
      {children}
      {showArrow && <Arrow />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
