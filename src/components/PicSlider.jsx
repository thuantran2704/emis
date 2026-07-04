import { useState, useRef, useEffect } from 'react';

/**
 * PicSlider — reusable image showcase / content slider.
 *
 * Props:
 *   pics      — array of image imports (required)
 *   content   — optional object with:
 *                 label      string          section eyebrow label
 *                 heading    string          h2 text
 *                 subheading string          paragraph below h2
 *                 pic        array of { title?, description? }  per-slide metadata
 *   bgColor   — optional image pane background (default: #CCBA78)
 *   className — optional wrapper section className override
 *
 * Layout behaviour:
 *   • If content.pic[i] has title/description  → split layout (image 55% | text 45%)
 *   • If no per-slide content                  → full-width image with overlaid arrows
 *   • Thumbnails scroll horizontally when there are many pics
 *   • Dots shown only when total ≤ 8
 */
export default function PicSlider({ pics, content = {}, bgColor = '#CCBA78', className }) {
  const [active, setActive] = useState(0);
  const total = pics.length;
  const perSlide = content.pic ?? [];
  const thumbRefs = useRef([]);

  // Auto-scroll thumbnail strip to keep active tile centered (PowerPoint filmstrip behaviour)
  useEffect(() => {
    thumbRefs.current[active]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [active]);
  const hasSlideContent = perSlide.some((p) => p?.description);
  const hasTitleOnly = !hasSlideContent && perSlide.some((p) => p?.title);
  const cur = perSlide[active] ?? {};

  const prev = () => setActive((p) => (p === 0 ? total - 1 : p - 1));
  const next = () => setActive((p) => (p === total - 1 ? 0 : p + 1));

  const sectionLabelClass =
    'mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C5AF73]';

  const ArrowBtn = ({ dir, onClick }) => (
    <button
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe4ec] text-[#2a3439] hover:border-[#d4af37] hover:text-[#d4af37] transition"
      aria-label={dir === 'prev' ? 'Previous' : 'Next'}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d={dir === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
        />
      </svg>
    </button>
  );

  return (
    <section className={className ?? 'bg-[#f7fafc] py-16 md:py-24'}>
      <div className="mx-auto max-w-6xl px-6">

        {/* Optional section header */}
        {(content.label || content.heading || content.subheading) && (
          <div className="mx-auto max-w-2xl text-center mb-12">
            {content.label && <p className={sectionLabelClass}>{content.label}</p>}
            {content.heading && (
              <h2 className="text-2xl font-bold text-[#2a3439] md:text-3xl">{content.heading}</h2>
            )}
            {content.subheading && (
              <p className="mt-4 text-base leading-relaxed text-gray-500">{content.subheading}</p>
            )}
          </div>
        )}

        {/* Main card */}
        <div className="overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(31,41,55,0.14)] bg-white">
          {hasSlideContent ? (
            /* Split layout: image | text (description present, title optional) */
            <div className="flex flex-col md:flex-row">
              {/* Image pane */}
              <div
                className="relative w-full md:w-[55%] min-h-[380px] md:min-h-[480px] overflow-hidden"
                style={{ backgroundColor: bgColor }}
              >
                <img
                  key={active}
                  src={pics[active]}
                  alt={cur.title ?? `Slide ${active + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Content pane */}
              <div className="w-full md:w-[45%] flex flex-col justify-between p-8 md:p-12">
                <div>
                  <span className="block text-[96px] leading-none font-black text-[#d4af37]/12 select-none -ml-2">
                    {String(active + 1).padStart(2, '0')}
                  </span>
                  {cur.title && (
                    <h3 className="mt-1 text-xl font-bold text-[#1d3953] md:text-2xl">{cur.title}</h3>
                  )}
                  {cur.description && (
                    <p className="mt-4 text-sm leading-relaxed text-gray-500">{cur.description}</p>
                  )}
                </div>

                {/* Nav */}
                <div className="mt-10 flex items-center gap-3">
                  <ArrowBtn dir="prev" onClick={prev} />
                  {total <= 8 && (
                    <div className="flex gap-2">
                      {pics.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className={`rounded-full transition-all duration-200 ${
                            active === i ? 'w-6 h-2 bg-[#d4af37]' : 'w-2 h-2 bg-[#d0dce8] hover:bg-[#b0bfcc]'
                          }`}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                  <ArrowBtn dir="next" onClick={next} />
                  <span className="ml-auto text-xs font-semibold tabular-nums text-[#8aa0b5]">
                    {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ) : hasTitleOnly ? (
            /* Title-above layout: title bar → full-width image → overlaid arrows */
            <div>
              <div className="px-6 pt-6 pb-4 border-b border-[#dbe4ec]">
                <p className="text-base font-semibold text-[#1d3953]">{cur.title}</p>
              </div>
              <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[520px]" style={{ backgroundColor: bgColor }}>
                <img
                  key={active}
                  src={pics[active]}
                  alt={cur.title ?? `Slide ${active + 1}`}
                  className="max-h-[480px] max-w-full object-contain p-6"
                />
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <span className="pointer-events-auto"><ArrowBtn dir="prev" onClick={prev} /></span>
                  <span className="pointer-events-auto"><ArrowBtn dir="next" onClick={next} /></span>
                </div>
              </div>
            </div>
          ) : (
            /* Full-width image layout — no overlay text */
            <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[520px]" style={{ backgroundColor: bgColor }}>
              <img
                key={active}
                src={pics[active]}
                alt={`Slide ${active + 1}`}
                className="max-h-[480px] max-w-full object-contain p-6"
              />
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <span className="pointer-events-auto"><ArrowBtn dir="prev" onClick={prev} /></span>
                <span className="pointer-events-auto"><ArrowBtn dir="next" onClick={next} /></span>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnail strip — fixed-width tiles, auto-scrolls to active (PowerPoint filmstrip) */}
        {total > 1 && (
          <div
            className={`mt-4 flex gap-3 pb-1 snap-x ${total <= 6 ? 'justify-center' : 'overflow-x-auto'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {pics.map((src, i) => (
              <button
                key={i}
                ref={(el) => (thumbRefs.current[i] = el)}
                onClick={() => setActive(i)}
                className={`snap-center overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                  total <= 6 ? 'flex-1 min-w-0 max-w-[120px]' : 'flex-shrink-0 w-20'
                } ${
                  active === i
                    ? 'border-[#d4af37] shadow-md opacity-100'
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <div
                  className={`flex items-center justify-center ${total <= 6 ? 'h-20' : 'h-16'}`}
                  style={{ backgroundColor: bgColor }}
                >
                  <img
                    src={src}
                    alt={perSlide[i]?.title ?? `Slide ${i + 1}`}
                    className="max-h-full max-w-full object-contain p-1.5"
                  />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
