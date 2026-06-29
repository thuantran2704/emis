import React from 'react';

/**
 * ProcessSteps — stepper bar on sm+, vertical list on mobile.
 * Designed for ≤6 steps. For longer sequences use a different layout.
 *
 * steps: string[]
 *      | { title, text? }[]
 *      | { title, description? }[]   (description → shown as subtext)
 *      | { step, title, text? }[]    (step label is ignored; title used)
 *      | { number, title, description? }[]
 */
export default function ProcessSteps({ steps = [], note, className = '' }) {
  const items = steps.map((s) =>
    typeof s === 'string'
      ? { title: s }
      : { title: s.title || s.step || '', text: s.text || s.description || '' }
  );

  return (
    <div className={className}>

      {/* ── Mobile: simple numbered list ── */}
      <ol className="sm:hidden space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#d4af37] text-white text-xs font-semibold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <div>
              <p className="text-[14px] font-medium text-[#2a3439] leading-snug">{item.title}</p>
              {item.text && <p className="text-[12px] text-gray-400 mt-0.5">{item.text}</p>}
            </div>
          </li>
        ))}
      </ol>

      {/* ── sm+: stepper bar ── */}
      <div className="hidden sm:block">
        {/* Dots + connecting line */}
        <div className="relative flex items-center justify-between">
          {/* Background line */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-[#dde5ec]" aria-hidden="true" />
          {items.map((_, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center" style={{ width: `${100 / items.length}%` }}>
              <span className="w-8 h-8 rounded-full bg-[#d4af37] text-white text-xs font-semibold flex items-center justify-center ring-4 ring-white">
                {i + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Labels below */}
        <div className="flex justify-between mt-3">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center px-1" style={{ width: `${100 / items.length}%` }}>
              <p className="text-[12px] font-medium text-[#2a3439] leading-snug">{item.title}</p>
              {item.text && <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{item.text}</p>}
            </div>
          ))}
        </div>
      </div>

      {note && (
        <p className="mt-6 text-[13px] text-gray-500 leading-relaxed text-center italic">
          {note}
        </p>
      )}
    </div>
  );
}

