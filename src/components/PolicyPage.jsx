import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FileText, Check, Info, MessageCircle } from 'lucide-react';

const sectionLabelClass = 'uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold';
const titleClass = 'text-3xl md:text-5xl text-[#2a3439] leading-tight';
const bodyClass = 'text-[16px] md:text-[17px] text-gray-600 leading-relaxed';
const ctaPrimaryClass =
  'px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center';
const eyebrowFont = {};
const headingFont = {};
const bodyFont = {};

const pad = (n) => String(n + 1).padStart(2, '0');

const Chips = ({ items }) => (
  <div className="mt-4 flex flex-wrap gap-2.5">
    {items.map((item) => (
      <span
        key={item}
        className="inline-flex items-center gap-2 rounded-full border border-[#e9e0c8] bg-[#fbf7ec] px-4 py-2 text-[14px] text-[#2a3439]"
        style={eyebrowFont}
      >
        <Check size={14} className="text-[#d4af37] flex-shrink-0" aria-hidden="true" />
        {item}
      </span>
    ))}
  </div>
);

/**
 * Shared layout for legal / policy pages (privacy, media consent, etc.).
 * Renders a hero, a sticky table of contents, and icon-led section cards.
 */
const PolicyPage = ({ contentByLanguage, heroIcon = FileText, sectionIcons = [], groupIcons = [] }) => {
  const language = useSelector((state) => state.language.language);
  const content = contentByLanguage[language] || contentByLanguage.english;
  const HeroIcon = heroIcon;

  return (
    <main className="bg-[#f7fafc] text-[#2a3439] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f7fafc]" aria-hidden="true" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-8 py-16 lg:py-20 text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f7f2e7] text-[#d4af37] shadow-sm">
            <HeroIcon size={30} aria-hidden="true" />
          </span>
          <h1 className={titleClass + ' mt-6'} style={headingFont}>{content.title}</h1>
          <p className="mt-4">
            <span className="inline-block rounded-full bg-white border border-[#e4ebf2] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gray-500" style={eyebrowFont}>
              {content.lastUpdatedLabel}: {content.lastUpdated}
            </span>
          </p>
          <div className="mt-6 space-y-2">
            {content.intro.map((paragraph) => (
              <p key={paragraph} className={bodyClass} style={bodyFont}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-14 items-start">
            {/* Contents */}
            <nav className="lg:sticky lg:top-24 hidden lg:block" aria-label="Policy sections">
              <p className={sectionLabelClass + ' mb-4'} style={eyebrowFont}>Contents</p>
              <ul className="space-y-1">
                {content.sections.map((section, index) => {
                  const Icon = sectionIcons[index] || FileText;
                  return (
                    <li key={section.title}>
                      <a
                        href={`#policy-${index}`}
                        className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] text-[#2a3439] transition hover:bg-white hover:shadow-sm"
                        style={eyebrowFont}
                      >
                        <Icon size={15} className="text-[#C5AF73] flex-shrink-0" aria-hidden="true" />
                        <span className="flex-1 group-hover:text-[#a8924f]">{section.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Sections */}
            <div className="space-y-6">
              {content.sections.map((section, index) => {
                const Icon = sectionIcons[index] || FileText;
                return (
                  <article key={section.title} id={`policy-${index}`} className="scroll-mt-28 rounded-3xl border border-[#e4ebf2] bg-white p-7 lg:p-8 shadow-sm transition hover:shadow-md">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#f7f2e7] text-[#d4af37]">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-[#C5AF73]" style={eyebrowFont}>{pad(index)}</span>
                        <h2 className="text-[1.3rem] md:text-[1.55rem] text-[#2a3439] leading-tight" style={headingFont}>
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    {section.paragraphs && section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className={bodyClass + ' mt-2'} style={bodyFont}>{paragraph}</p>
                    ))}

                    {section.groups && (
                      <div className="mt-5 grid sm:grid-cols-2 gap-4">
                        {section.groups.map((group, gi) => {
                          const GIcon = groupIcons[gi] || FileText;
                          return (
                            <div key={group.subtitle} className="rounded-2xl bg-[#f7fafc] border border-[#e4ebf2] p-5">
                              <div className="flex items-center gap-2.5 mb-2">
                                <GIcon size={18} className="text-[#d4af37] flex-shrink-0" aria-hidden="true" />
                                <h3 className="text-[15px] font-semibold text-[#2a3439]" style={eyebrowFont}>{group.subtitle}</h3>
                              </div>
                              {group.intro && <p className="text-[14px] text-gray-500 leading-relaxed" style={bodyFont}>{group.intro}</p>}
                              {group.items && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {group.items.map((item) => (
                                    <span key={item} className="rounded-full bg-white border border-[#e9e0c8] px-3 py-1.5 text-[13px] text-[#2a3439]" style={eyebrowFont}>
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {group.note && <p className="mt-3 text-[13px] text-gray-400" style={bodyFont}>{group.note}</p>}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {section.bullets && <Chips items={section.bullets} />}

                    {section.note && (
                      <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#fbf7ec] border border-[#e9e0c8] px-4 py-3">
                        <Info size={16} className="text-[#d4af37] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <p className="text-[14px] text-gray-600 leading-relaxed" style={bodyFont}>{section.note}</p>
                      </div>
                    )}

                    {index === content.sections.length - 1 && (
                      <Link to="/contact" className={ctaPrimaryClass + ' inline-flex items-center gap-2 mt-6'} style={eyebrowFont}>
                        <MessageCircle size={16} aria-hidden="true" />
                        {content.contactCta}
                      </Link>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PolicyPage;
