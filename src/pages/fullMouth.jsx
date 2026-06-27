import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Layers,
  Activity,
  HeartPulse,
  Stethoscope,
  Wrench,
} from 'lucide-react';
import { fullMouthContent } from '../Translations/fullMouthContent';
import heroImage from '../pics/khach_cuoi_chup_hinh_voi_bs.jpg';
import overseasImage from '../pics/consulting-team.jpg';
import teamImage from '../pics/healthcare-team.jpg';

const sectionLabelClass = 'uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold';
const titleClass = 'text-3xl md:text-5xl text-[#2a3439] leading-tight';
const sectionTitleClass = 'text-[1.8rem] md:text-[2.4rem] text-[#2a3439] leading-tight';
const bodyClass = 'text-[17px] md:text-[19px] text-gray-600 leading-relaxed';
const ctaPrimaryClass =
  'px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center';
const ctaSecondaryClass =
  'px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-white transition text-center';
const eyebrowFont = {};
const headingFont = {};
const bodyFont = {};

const cardIcons = [Sparkles, Layers, Activity, HeartPulse, Stethoscope, Wrench];

const SectionHeading = ({ eyebrow, title, intro }) => (
  <div className="text-center max-w-3xl mx-auto mb-12">
    <p className={sectionLabelClass} style={eyebrowFont}>{eyebrow}</p>
    <h2 className={sectionTitleClass} style={headingFont}>{title}</h2>
    {intro && <p className={bodyClass + ' mt-5'} style={bodyFont}>{intro}</p>}
  </div>
);

const FlowRow = ({ steps }) => (
  <div className="flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center justify-center gap-3">
    {steps.map((step, index) => (
      <React.Fragment key={step}>
        <div className="flex items-center gap-3 rounded-xl bg-white border border-[#dde5ec] px-5 py-3">
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-white text-xs font-semibold" style={eyebrowFont}>
            {index + 1}
          </span>
          <span className="text-[15px] text-[#2a3439]" style={eyebrowFont}>{step}</span>
        </div>
        {index < steps.length - 1 && (
          <ArrowRight size={18} className="hidden md:block text-[#C5AF73] flex-shrink-0" aria-hidden="true" />
        )}
      </React.Fragment>
    ))}
  </div>
);

const FullMouth = () => {
  const language = useSelector((state) => state.language.language);
  const content = fullMouthContent[language] || fullMouthContent.english;
  const {
    hero,
    applyToYou,
    whatIs,
    whyPlanning,
    treatmentIncludes,
    journey,
    overseas,
    patientCases,
    team,
    finalCta,
  } = content;

  return (
    <main className="bg-[#f7fafc] text-[#2a3439] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
      </Helmet>

      {/* Section 1 — Hero */}
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
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#dfe7ef] bg-white">
              <img
                src={heroImage}
                alt="Patient smiling with their dentist after discussing a treatment plan"
                className="w-full h-[360px] lg:h-[520px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Could This Apply To You? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={applyToYou.eyebrow} title={applyToYou.title} />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="grid sm:grid-cols-2 gap-3">
              {applyToYou.items.map((item) => (
                <div key={item} className="flex gap-2 items-start rounded-xl bg-[#f7fafc] border border-[#dde5ec] px-4 py-3">
                  <CheckCircle size={18} className="text-[#d4af37] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-[15px] text-[#2a3439]" style={eyebrowFont}>{item}</span>
                </div>
              ))}
            </div>
            <p className={bodyClass} style={bodyFont}>{applyToYou.note}</p>
          </div>
        </div>
      </section>

      {/* Section 3 — What Is Full-Mouth Rehabilitation? */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
              <p className={sectionLabelClass} style={eyebrowFont}>{whatIs.eyebrow}</p>
              <h2 className={sectionTitleClass} style={headingFont}>{whatIs.title}</h2>
              <p className={bodyClass} style={bodyFont}>{whatIs.intro}</p>
            </div>
            <div className="rounded-2xl bg-white border border-[#dfe7ef] shadow-sm p-8">
              <div className="flex flex-wrap justify-center gap-3">
                {whatIs.conceptItems.map((item) => (
                  <span key={item} className="rounded-full bg-[#f7fafc] border border-[#dde5ec] px-5 py-2 text-sm text-[#2a3439]" style={eyebrowFont}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="my-5 flex justify-center text-[#C5AF73]">
                <ArrowRight size={22} className="rotate-90" aria-hidden="true" />
              </div>
              <div className="text-center rounded-xl bg-[#d4af37] text-white px-6 py-4 text-base font-semibold" style={eyebrowFont}>
                {whatIs.conceptResult}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Why Planning Matters */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
              <p className={sectionLabelClass} style={eyebrowFont}>{whyPlanning.eyebrow}</p>
              <h2 className={sectionTitleClass} style={headingFont}>{whyPlanning.title}</h2>
              <p className={bodyClass} style={bodyFont}>{whyPlanning.intro}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col rounded-2xl bg-[#f7fafc] border border-[#dde5ec] p-6">
                <p className="text-base font-semibold text-[#2a3439] mb-4" style={eyebrowFont}>{whyPlanning.compare.single.title}</p>
                <div className="mt-auto space-y-2">
                  {whyPlanning.compare.single.steps.map((step) => (
                    <span key={step} className="block text-sm text-gray-500" style={eyebrowFont}>{step}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col rounded-2xl bg-white border-2 border-[#d4af37] p-6">
                <p className="text-base font-semibold text-[#2a3439] mb-4" style={eyebrowFont}>{whyPlanning.compare.whole.title}</p>
                <div className="mt-auto space-y-2">
                  {whyPlanning.compare.whole.steps.map((step) => (
                    <span key={step} className="flex items-center gap-2 text-sm text-[#2a3439]" style={eyebrowFont}>
                      <CheckCircle size={15} className="text-[#d4af37] flex-shrink-0" aria-hidden="true" />
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — What Treatment May Include */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={treatmentIncludes.eyebrow} title={treatmentIncludes.title} intro={treatmentIncludes.intro} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {treatmentIncludes.cards.map((card, index) => {
              const Icon = cardIcons[index] || Sparkles;
              return (
                <div key={card.title} className="flex flex-col rounded-2xl bg-white border border-[#dfe7ef] shadow-sm p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f2e7] text-[#d4af37] mb-4">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-[#2a3439] mb-2" style={headingFont}>{card.title}</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed" style={bodyFont}>{card.text}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-[15px] text-gray-500 mt-8 max-w-3xl mx-auto" style={bodyFont}>{treatmentIncludes.note}</p>
        </div>
      </section>

      {/* Section 6 — Typical Treatment Journey */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={journey.eyebrow} title={journey.title} />
          <FlowRow steps={journey.steps} />
          <p className="text-center text-[15px] text-gray-500 mt-8 max-w-3xl mx-auto" style={bodyFont}>{journey.note}</p>
        </div>
      </section>

      {/* Section 7 — For Overseas Patients */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
              <p className={sectionLabelClass} style={eyebrowFont}>{overseas.eyebrow}</p>
              <h2 className={sectionTitleClass} style={headingFont}>{overseas.title}</h2>
              <p className={bodyClass} style={bodyFont}>{overseas.intro}</p>
              <div className="rounded-xl bg-white border border-[#dde5ec] p-5">
                <p className="text-base font-semibold text-[#2a3439] mb-2" style={eyebrowFont}>{overseas.costTitle}</p>
                <p className="text-[15px] text-gray-600 leading-relaxed" style={bodyFont}>{overseas.costText}</p>
              </div>
              <Link to={overseas.ctaPath} className={`${ctaSecondaryClass} inline-flex items-center gap-2`} style={eyebrowFont}>
                {overseas.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#dfe7ef] bg-white">
                <img
                  src={overseasImage}
                  alt="EMIS care team reviewing a patient's situation during a consultation"
                  className="w-full h-[260px] lg:h-[300px] object-cover object-center"
                />
              </div>
              <FlowRow steps={overseas.flow} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Real Patient Cases */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className={sectionLabelClass} style={eyebrowFont}>{patientCases.eyebrow}</p>
          <h2 className={sectionTitleClass + ' mt-3'} style={headingFont}>{patientCases.title}</h2>
          <p className={bodyClass + ' mt-5'} style={bodyFont}>{patientCases.intro}</p>
          <Link to={patientCases.ctaPath} className={`${ctaPrimaryClass} inline-flex items-center gap-2 mt-8`} style={eyebrowFont}>
            {patientCases.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Section 9 — The Team Behind Your Care */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#dfe7ef] bg-white">
              <img
                src={teamImage}
                alt="EMIS dental team collaborating on treatment planning"
                className="w-full h-[300px] lg:h-[360px] object-cover object-center"
              />
            </div>
            <div className="space-y-5">
              <p className={sectionLabelClass} style={eyebrowFont}>{team.eyebrow}</p>
              <h2 className={sectionTitleClass} style={headingFont}>{team.title}</h2>
              <p className={bodyClass} style={bodyFont}>{team.intro}</p>
              <Link to={team.ctaPath} className={`${ctaSecondaryClass} inline-flex items-center gap-2`} style={eyebrowFont}>
                {team.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 — Final CTA */}
      <section className="py-20 lg:py-28 bg-[#f7f2e7]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className={sectionTitleClass} style={headingFont}>{finalCta.title}</h2>
          <p className={bodyClass + ' mt-5'} style={bodyFont}>{finalCta.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-7">
            <Link to="/contact" className={ctaPrimaryClass} style={eyebrowFont}>{finalCta.primaryCta}</Link>
            <Link to="/contact" className={ctaSecondaryClass} style={eyebrowFont}>{finalCta.secondaryCta}</Link>
          </div>
          <p className="text-[13px] text-gray-500 mt-6" style={bodyFont}>{finalCta.note}</p>
        </div>
      </section>
    </main>
  );
};

export default FullMouth;
