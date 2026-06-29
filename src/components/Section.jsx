import { sectionLabelClass, sectionTitleClass } from '../styles/ui';

const introClass =
  'text-[17px] md:text-[19px] text-gray-600 leading-relaxed mt-5';

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
