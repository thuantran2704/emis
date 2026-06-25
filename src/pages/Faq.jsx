import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { faqContent } from '../Translations/faqContent';

const sectionLabelClass = 'uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold';
const titleClass = 'text-3xl md:text-5xl text-[#2a3439] leading-tight';
const bodyClass = 'text-[17px] md:text-[19px] text-gray-600 leading-relaxed';
const ctaPrimaryClass =
  'px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center';
const ctaSecondaryClass =
  'px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-white transition text-center';
const eyebrowFont = { fontFamily: "'Be Vietnam Pro', sans-serif" };
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Cormorant', serif" };

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
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className={sectionLabelClass} style={eyebrowFont}>EMIS Dental</p>
          <h1 className={titleClass + ' mt-3'} style={headingFont}>{content.title}</h1>
          <p className={bodyClass + ' mt-5'} style={bodyFont}>{content.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-7">
            <Link to="/contact" className={ctaPrimaryClass} style={eyebrowFont}>{content.primaryCta}</Link>
            <Link to="/contact" className={ctaSecondaryClass} style={eyebrowFont}>{content.secondaryCta}</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-8 space-y-12">
          {content.categories.map((category) => (
            <div key={category.title}>
              <h2 className="text-[1.5rem] md:text-[1.9rem] text-[#2a3439] leading-tight mb-5" style={headingFont}>
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <details key={item.question} className="group rounded-2xl border border-[#dde5ec] bg-white p-5 shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#2a3439]" style={eyebrowFont}>
                      {item.question}
                      <span className="text-[#C5AF73] text-xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 text-[16px] leading-relaxed text-gray-600" style={bodyFont}>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Faq;
