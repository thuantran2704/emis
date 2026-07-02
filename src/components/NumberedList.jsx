import { ArrowRight } from 'lucide-react';

/**
 * Reusable dark-theme numbered list.
 * Props:
 *   title  — heading string
 *   items  — array of strings
 *   compact — true for the condensed card variant (banner), false (default) for the full-section variant
 */
export default function NumberedList({ title, items = [], compact = false }) {
  return (
    <>
      {compact ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]/80">{title}</p>
      ) : (
        <h2 className="mb-8 text-[1.45rem] leading-[1.1] text-white lg:mb-12 lg:text-[2.1rem]">{title}</h2>
      )}

      <ol className={`flex flex-col ${compact ? 'mt-4' : ''}`}>
        {items.map((item, index) => (
          <li
            key={item}
            className={`group flex items-center transition-colors hover:bg-white/[0.03] border-b border-white/10 ${
              compact
                ? 'gap-4 py-3.5 last:border-b-0'
                : 'gap-5 py-5 lg:gap-8 lg:py-6'
            }`}
          >
            <span
              className={`font-semibold tabular-nums text-[#d4af37]/60 transition-colors group-hover:text-[#d4af37] ${
                compact ? 'text-sm' : 'text-[1.1rem] lg:text-[1.35rem]'
              }`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span
              className={`flex-1 text-white/85 transition-colors group-hover:text-white ${
                compact
                  ? 'text-sm'
                  : 'text-[14px] font-medium uppercase tracking-[0.12em] lg:text-[16px]'
              }`}
            >
              {item}
            </span>
            <ArrowRight
              className={`translate-x-[-6px] text-[#d4af37] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${
                compact ? 'h-4 w-4' : 'h-5 w-5'
              }`}
              strokeWidth={1.6}
            />
          </li>
        ))}
      </ol>
    </>
  );
}
