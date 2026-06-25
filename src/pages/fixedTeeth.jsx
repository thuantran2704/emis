import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { fixedTeethContent } from '../Translations/fixedTeethContent';
import heroImage from '../pics/all-on-4-implant.jpg';
import allOnImage from '../pics/allon4.png';
import overseasImage from '../pics/doctor-reviewing-x-ray-with-patient-explaining-treatment.jpg';

const sectionLabelClass = 'uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold';
const titleClass = 'text-3xl md:text-5xl text-[#2a3439] leading-tight';
const sectionTitleClass = 'text-[1.8rem] md:text-[2.4rem] text-[#2a3439] leading-tight';
const bodyClass = 'text-[17px] md:text-[19px] text-gray-600 leading-relaxed';
const ctaPrimaryClass =
  'px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center';
const ctaSecondaryClass =
  'px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-white transition text-center';
const eyebrowFont = { fontFamily: "'Be Vietnam Pro', sans-serif" };
const headingFont = { fontFamily: "'Playfair Display', serif" };
const bodyFont = { fontFamily: "'Cormorant', serif" };

const Checklist = ({ items }) => (
  <div className="grid sm:grid-cols-2 gap-3">
    {items.map((item) => (
      <div key={item} className="flex gap-2 items-start rounded-xl bg-white border border-[#dde5ec] px-4 py-3">
        <CheckCircle size={18} className="text-[#d4af37] mt-0.5 flex-shrink-0" aria-hidden="true" />
        <span className="text-[15px] text-[#2a3439]" style={eyebrowFont}>{item}</span>
      </div>
    ))}
  </div>
);

const SectionHeading = ({ eyebrow, title, intro }) => (
  <div className="text-center max-w-3xl mx-auto mb-12">
    <p className={sectionLabelClass} style={eyebrowFont}>{eyebrow}</p>
    <h2 className={sectionTitleClass} style={headingFont}>{title}</h2>
    {intro && <p className={bodyClass + ' mt-5'} style={bodyFont}>{intro}</p>}
  </div>
);

const FixedTeeth = () => {
  const language = useSelector((state) => state.language.language);
  const content = fixedTeethContent[language] || fixedTeethContent.english;
  const { hero, familiar, whatAreFixedTeeth, allOnOptions, hopeToImprove, planning, journey, overseas, patientCases, team, finalCta } = content;

  return (
    <main className="bg-[#f7fafc] text-[#2a3439] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
      </Helmet>

      {/* Hero */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className={sectionLabelClass} style={eyebrowFont}>{hero.eyebrow}</p>
              <h1 className={titleClass} style={headingFont}>{hero.title}</h1>
              <p className={bodyClass} style={bodyFont}>{hero.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link to="/contact" className={ctaPrimaryClass} style={eyebrowFont}>{hero.primaryCta}</Link>
                <Link to="/contact" className={ctaSecondaryClass} style={eyebrowFont}>{hero.secondaryCta}</Link>
              </div>
            </div>
            <div className="rounded-2xl border border-[#dfe7ef] shadow-md bg-white p-5 lg:p-7">
              <img
                src={heroImage}
                alt="Illustration of an All-on-4 implant-supported fixed teeth restoration"
                className="w-full h-[300px] lg:h-[440px] object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Familiar concerns */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={familiar.eyebrow} title={familiar.title} />
          <div className="max-w-4xl mx-auto">
            <Checklist items={familiar.items} />
            {familiar.note && (
              <p className={bodyClass + ' mt-7 text-center'} style={bodyFont}>{familiar.note}</p>
            )}
          </div>
        </div>
      </section>

      {/* What are fixed teeth + comparison */}
      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={whatAreFixedTeeth.eyebrow} title={whatAreFixedTeeth.title} intro={whatAreFixedTeeth.intro} />
          <h3 className="text-center text-[1.2rem] text-[#2a3439] mb-7" style={headingFont}>
            {whatAreFixedTeeth.comparisonTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {[whatAreFixedTeeth.comparison.removable, whatAreFixedTeeth.comparison.fixed].map((col) => (
              <article key={col.title} className="flex flex-col rounded-2xl border border-[#dbe4ec] bg-white p-7 lg:p-8 h-full">
                <h4 className="text-[1.25rem] text-[#2a3439] mb-4" style={headingFont}>{col.title}</h4>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <CheckCircle size={18} className="text-[#d4af37] mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[16px] text-gray-600" style={bodyFont}>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All-on-4 & All-on-6 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={allOnOptions.eyebrow} title={allOnOptions.title} intro={allOnOptions.intro} />
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <div className="rounded-2xl border border-[#dfe7ef] bg-[#f7fafc] p-5 lg:p-7">
              <img
                src={allOnImage}
                alt="Diagram comparing All-on-4 and All-on-6 implant configurations"
                className="w-full h-[280px] lg:h-[360px] object-contain object-center"
                loading="lazy"
              />
            </div>
            <div className="space-y-5">
              <p className={bodyClass} style={bodyFont}>{allOnOptions.detail}</p>
              <div className="rounded-2xl border border-[#d4af37] bg-[#fbf6e7] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#a8842a] font-semibold mb-2" style={eyebrowFont}>
                  {allOnOptions.importantTitle}
                </p>
                <p className="text-[16px] text-[#2a3439] leading-relaxed" style={bodyFont}>
                  {allOnOptions.importantText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What people hope to improve */}
      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={hopeToImprove.eyebrow} title={hopeToImprove.title} />
          <div className="max-w-4xl mx-auto">
            <Checklist items={hopeToImprove.items} />
          </div>
        </div>
      </section>

      {/* Planning */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={planning.eyebrow} title={planning.title} intro={planning.intro} />
          <div className="max-w-4xl mx-auto">
            <Checklist items={planning.items} />
            {planning.note && (
              <p className={bodyClass + ' mt-7 text-center'} style={bodyFont}>{planning.note}</p>
            )}
          </div>
        </div>
      </section>

      {/* Treatment journey */}
      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={journey.eyebrow} title={journey.title} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {journey.steps.map((step, index) => (
              <article key={step} className="rounded-2xl border border-[#dbe4ec] bg-white p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C5AF73] font-semibold" style={eyebrowFont}>
                  {language === 'vietnamese' ? `Bước ${index + 1}` : `Step ${index + 1}`}
                </p>
                <p className="mt-2 text-[1.05rem] text-[#2a3439]" style={headingFont}>{step}</p>
              </article>
            ))}
          </div>
          {journey.note && (
            <p className={bodyClass + ' mt-10 text-center max-w-3xl mx-auto'} style={bodyFont}>{journey.note}</p>
          )}
        </div>
      </section>

      {/* Overseas patients */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-stretch">
            <div className="rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] p-7 lg:p-8">
              <p className={sectionLabelClass} style={eyebrowFont}>{overseas.eyebrow}</p>
              <h2 className={sectionTitleClass + ' mt-3'} style={headingFont}>{overseas.title}</h2>
              <p className={bodyClass + ' mt-5'} style={bodyFont}>{overseas.intro}</p>
              <h3 className="mt-8 mb-3 text-[1.15rem] text-[#2a3439]" style={headingFont}>{overseas.costTitle}</h3>
              <p className={bodyClass} style={bodyFont}>{overseas.costText}</p>
              <p className={bodyClass + ' mt-4'} style={bodyFont}>{overseas.costTextSecondary}</p>
              <Link
                to={overseas.ctaPath}
                className="mt-7 inline-flex items-center gap-2 text-sm text-[#2a3439] hover:text-[#c19d30] font-semibold"
                style={eyebrowFont}
              >
                {overseas.cta}
                <ArrowRight size={15} className="text-[#d4af37]" aria-hidden="true" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#dfe7ef] shadow-sm bg-white">
              <img
                src={overseasImage}
                alt="Doctor reviewing a dental X-ray with a patient while explaining treatment"
                className="w-full h-full min-h-[320px] lg:min-h-[480px] object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient cases */}
      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className={sectionLabelClass} style={eyebrowFont}>{patientCases.eyebrow}</p>
          <h2 className={sectionTitleClass + ' mt-3'} style={headingFont}>{patientCases.title}</h2>
          <p className={bodyClass + ' mt-5'} style={bodyFont}>{patientCases.intro}</p>
          <Link
            to={patientCases.ctaPath}
            className="mt-7 inline-flex items-center gap-2 text-sm text-[#2a3439] hover:text-[#c19d30] font-semibold"
            style={eyebrowFont}
          >
            {patientCases.cta}
            <ArrowRight size={15} className="text-[#d4af37]" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className={sectionLabelClass} style={eyebrowFont}>{team.eyebrow}</p>
          <h2 className={sectionTitleClass + ' mt-3'} style={headingFont}>{team.title}</h2>
          <p className={bodyClass + ' mt-5'} style={bodyFont}>{team.intro}</p>
          <Link
            to={team.ctaPath}
            className="mt-7 inline-flex items-center gap-2 text-sm text-[#2a3439] hover:text-[#c19d30] font-semibold"
            style={eyebrowFont}
          >
            {team.cta}
            <ArrowRight size={15} className="text-[#d4af37]" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={sectionTitleClass} style={headingFont}>{finalCta.title}</h2>
          <p className={bodyClass + ' mt-5'} style={bodyFont}>{finalCta.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className={ctaPrimaryClass} style={eyebrowFont}>{finalCta.primaryCta}</Link>
            <Link to="/contact" className={ctaSecondaryClass} style={eyebrowFont}>{finalCta.secondaryCta}</Link>
          </div>
          {finalCta.note && (
            <p className="text-sm text-gray-500 mt-7 italic" style={bodyFont}>{finalCta.note}</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default FixedTeeth;
