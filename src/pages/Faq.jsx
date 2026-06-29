import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Plus } from 'lucide-react';
import { faqContent } from '../Translations/faqContent';
import { sectionLabelClass, titleClass } from '../styles/ui';
import ContactCtas from '../components/ContactCtas';

const bodyClass = 'text-[17px] md:text-[19px] text-gray-600 leading-relaxed';

const pad = (n) => String(n + 1).padStart(2, '0');

const Faq = () => {
  const language = useSelector((state) => state.language.language);
  const content = faqContent[language] || faqContent.english;

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
        <div
          className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-8 py-16 lg:py-24 text-center">
          <p className={sectionLabelClass}>EMIS Dental</p>
          <h1 className={titleClass + ' mt-4'}>{content.title}</h1>
          <p className={bodyClass + ' mt-5'}>{content.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-8">
            <ContactCtas primaryLabel={content.primaryCta} secondaryLabel={content.secondaryCta} />
          </div>
        </div>
      </section>

      {/* Body: sticky category nav + accordions */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">
            {/* Table of contents */}
            <nav className="lg:sticky lg:top-24 hidden lg:block" aria-label="FAQ categories">
              <p className={sectionLabelClass + ' mb-4'}>Topics</p>
              <ul className="space-y-1">
                {content.categories.map((category, index) => (
                  <li key={category.title}>
                    <a
                      href={`#faq-${index}`}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#2a3439] transition hover:bg-white hover:shadow-sm"
                    >
                      <span className="text-xs font-semibold text-[#C5AF73]">{pad(index)}</span>
                      <span className="flex-1 group-hover:text-[#a8924f]">{category.title}</span>
                      <span className="text-xs text-gray-400">{category.items.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Categories */}
            <div className="space-y-14">
              {content.categories.map((category, index) => (
                <div key={category.title} id={`faq-${index}`} className="scroll-mt-28">
                  <div className="flex items-baseline gap-3 mb-5 border-b border-[#e4ebf2] pb-4">
                    <span className="text-sm font-semibold text-[#C5AF73]">{pad(index)}</span>
                    <h2 className="text-[1.5rem] md:text-[1.9rem] text-[#2a3439] leading-tight flex-1">
                      {category.title}
                    </h2>
                    <span className="text-xs uppercase tracking-wider text-gray-400">
                      {category.items.length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <details
                        key={item.question}
                        className="group rounded-2xl border border-[#dde5ec] bg-white px-5 py-4 shadow-sm transition hover:border-[#d4af37]/40 open:border-[#d4af37]/60 open:shadow-md"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#2a3439]">
                          {item.question}
                          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#f7f2e7] text-[#d4af37] transition-transform group-open:rotate-45" aria-hidden="true">
                            <Plus size={16} />
                          </span>
                        </summary>
                        <p className="mt-3 text-[16px] leading-relaxed text-gray-600">{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}

              {/* Closing prompt */}
              <div className="rounded-3xl bg-[#f7f2e7] px-8 py-10 text-center">
                <p className={bodyClass}>{content.intro}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
                  <ContactCtas primaryLabel={content.primaryCta} secondaryLabel={content.secondaryCta} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
