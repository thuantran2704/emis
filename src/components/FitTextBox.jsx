import { useRef, useLayoutEffect, useState, useCallback } from 'react';

/**
 * FitTextBox — a box whose text auto-scales to fill the available space,
 * leaving only a minimal, even gap between the paragraph and the borders.
 *
 * The box keeps a fixed footprint (set its width/height via `className`).
 * The font size is binary-searched so the content is as large as possible
 * while still fitting inside the padding box on both axes.
 *
 * Props:
 *   children   — text / inline content to fit (required)
 *   className  — wrapper classes; give it a width/height (e.g. "h-64 w-full")
 *   minFontSize — smallest px font before it stops shrinking (default 14).
 *                 When the text cannot fit even at this size, the box is
 *                 allowed to overflow rather than clip, so text stays readable.
 *   maxFontSize — largest px font it will grow to (default 96)
 *   padding    — inner gap in px between text and border (default 12)
 *   as         — element tag for the text (default 'p')
 *   align      — 'center' (default) | 'start' | 'end' — vertical + text align
 *   mobileBreakpoint   — max viewport width (px) treated as mobile (default 640)
 *   mobileMinFontSize  — smaller floor used on mobile (default minFontSize - 3)
 */
export default function FitTextBox({
  children,
  className = '',
  minFontSize = 12,
  maxFontSize = 96,
  padding = 12,
  as: Tag = 'p',
  align = 'center',
  mobileBreakpoint = 640,
  mobileMinFontSize = minFontSize - 3,
}) {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  const fit = useCallback(() => {
    const box = boxRef.current;
    const text = textRef.current;
    if (!box || !text) return;

    const availW = box.clientWidth - padding * 2;
    const availH = box.clientHeight - padding * 2;
    if (availW <= 0 || availH <= 0) return;

    // On mobile viewports allow the text to shrink further so it still fits.
    const isMobile =
      typeof window !== 'undefined' && window.innerWidth <= mobileBreakpoint;
    const floor = Math.max(8, isMobile ? mobileMinFontSize : minFontSize);

    const fits = (size) => {
      text.style.fontSize = `${size}px`;
      return text.scrollWidth <= availW && text.scrollHeight <= availH;
    };

    let lo = floor;
    let hi = maxFontSize;
    let best = floor;
    // Binary search for the largest font size that still fits.
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (fits(mid)) {
        best = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    text.style.fontSize = `${best}px`;
    setFontSize(best);
  }, [minFontSize, maxFontSize, padding, mobileBreakpoint, mobileMinFontSize]);

  useLayoutEffect(() => {
    fit();
    const box = boxRef.current;
    if (!box || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => fit());
    ro.observe(box);
    window.addEventListener('resize', fit);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, [fit, children]);

  const justify =
    align === 'start' ? 'justify-start' : align === 'end' ? 'justify-end' : 'justify-center';
  const textAlign =
    align === 'start' ? 'text-left' : align === 'end' ? 'text-right' : 'text-center';

  return (
    <div
      ref={boxRef}
      className={`flex flex-col overflow-visible ${justify} ${className}`}
      style={{ padding }}
    >
      <Tag
        ref={textRef}
        className={`m-0 leading-snug ${textAlign}`}
        style={{ fontSize }}
      >
        {children}
      </Tag>
    </div>
  );
}
