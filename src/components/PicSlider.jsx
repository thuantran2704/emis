import { useState } from 'react';

/**
 * PicSlider — reusable image+content slider.
 *
 * Props:
 *   pics     — array of image imports, one per slide
 *   content  — object with:
 *                label      string   section eyebrow label
 *                heading    string   h2 text
 *                subheading string   paragraph below h2
 *                pic        array of { title, description } — one per slide
 */
export default function PicSlider({ pics, content }) {
  const [active, setActive] = useState(0);
  const total = pics.length;

  const prev = () => setActive((p) => (p === 0 ? total - 1 : p - 1));
  const next = () => setActive((p) => (p === total - 1 ? 0 : p + 1));

  const sectionLabelClass =
    'mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C5AF73]';

  return (
    <section className="bg-[#f7fafc] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className={sectionLabelClass}>{content.label}</p>
          <h2 className="text-2xl font-bold text-[#2a3439] md:text-3xl">{content.heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">{content.subheading}</p>
        </div>

        {/* Main slider card */}
        <div className="overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(31,41,55,0.14)] bg-white">
          <div className="flex flex-col md:flex-row">
            {/* Image pane */}
            <div className="w-full md:w-[55%] bg-[#CCBA78] flex items-center justify-center p-6 min-h-[300px] md:min-h-[480px]">
              <img
                key={active}
                src={pics[active]}
                alt={content.pic[active].title}
                className="max-h-[440px] max-w-full object-contain"
              />
            </div>

            {/* Content pane */}
            <div className="w-full md:w-[45%] flex flex-col justify-between p-8 md:p-12">
              <div>
                <span className="block text-[96px] leading-none font-black text-[#d4af37]/12 select-none -ml-2">
                  {String(active + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1 text-xl font-bold text-[#1d3953] md:text-2xl">
                  {content.pic[active].title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  {content.pic[active].description}
                </p>
              </div>

              {/* Navigation */}
              <div className="mt-10 flex items-center gap-3">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe4ec] text-[#2a3439] hover:border-[#d4af37] hover:text-[#d4af37] transition"
                  aria-label="Previous"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

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

                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe4ec] text-[#2a3439] hover:border-[#d4af37] hover:text-[#d4af37] transition"
                  aria-label="Next"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <span className="ml-auto text-xs font-semibold tabular-nums text-[#8aa0b5]">
                  {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className={`mt-4 grid gap-3`} style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}>
          {pics.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`overflow-hidden rounded-2xl border-2 transition-all duration-200 ${
                active === i
                  ? 'border-[#d4af37] shadow-md opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <div className="bg-[#CCBA78] flex items-center justify-center h-20">
                <img
                  src={src}
                  alt={content.pic[i].title}
                  className="max-h-full max-w-full object-contain p-2"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
