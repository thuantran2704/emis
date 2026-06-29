import React from 'react';

/**
 * ProcessSteps — numbered step flow, responsive:
 *   mobile  : vertical timeline with connector line (no arrows, scales to any count)
 *   sm+     : horizontal single row, overflow-x scroll, inline chevrons between items
 *             (no flex-wrap → arrows can NEVER point to nowhere)
 *
 * steps: string[] | { title: string, text?: string }[]
 */
export default function ProcessSteps({ steps = [], note, className = '' }) {
  const items = steps.map((s) =>
    typeof s === 'string' ? { title: s } : s
  );

  return (
    <div className={className}>

      {/* ── Mobile: vertical timeline ── */}
      <ol className="sm:hidden flex flex-col">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 relative">
            {/* connector line */}
            {i < items.length - 1 && (
              <span
                className="absolute left-[17px] top-9 bottom-0 w-px bg-[#dde5ec]"
                aria-hidden="true"
              />
            )}
            <span className="z-10 flex-shrink-0 w-[34px] h-[34px] rounded-full bg-[#d4af37] text-white text-xs font-semibold flex items-center justify-center">
              {i + 1}
            </span>
            <div className={i < items.length - 1 ? 'pb-7' : ''}>
              <p className="text-[14px] font-semibold text-[#2a3439] leading-snug pt-1">{item.title}</p>
              {item.text && (
                <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">{item.text}</p>
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* ── sm+: horizontal, no-wrap, scrollable ── */}
      <div className="hidden sm:flex items-center gap-2 overflow-x-auto pb-1 justify-center">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-2.5 flex-shrink-0 rounded-xl bg-white border border-[#dde5ec] px-4 py-3 shadow-sm">
              <span className="flex-shrink-0 w-[26px] h-[26px] rounded-full bg-[#d4af37] text-white text-[11px] font-semibold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <p className="text-[13px] font-medium text-[#2a3439] whitespace-nowrap">{item.title}</p>
                {item.text && (
                  <p className="text-[11px] text-gray-400 mt-0.5 whitespace-nowrap">{item.text}</p>
                )}
              </div>
            </div>
            {i < items.length - 1 && (
              <svg
                className="flex-shrink-0 w-4 h-4 text-[#C5AF73]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>

      {note && (
        <p className="mt-6 text-[13px] text-gray-500 leading-relaxed text-center italic">
          {note}
        </p>
      )}
    </div>
  );
}

