import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { solutionsContent } from '../Translations/solutionsContent';
import heroImage from '../pics/doctor-reviewing-x-ray-with-patient-explaining-treatment.jpg';
import situationsImage from '../pics/elder-person-teeth-uncomfortable.jpeg';
import pathwaysImage from '../pics/denture.jpeg';
import teamImage from '../pics/healthcare-team.jpg';
import { sectionLabelClass, titleClass, sectionTitleClass } from '../styles/ui';
import ContactCtas from '../components/ContactCtas';
import MediaFrame from '../components/MediaFrame';
import ProcessSteps from '../components/ProcessSteps';

const Solutions = () => {
  const language = useSelector((state) => state.language.language);
  const content = solutionsContent[language] || solutionsContent.english;

  const bodyClass = 'text-[17px] md:text-[19px] text-gray-600 leading-relaxed';

  return (
    <main className="bg-[#f7fafc] text-[#2a3439] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
      </Helmet>

      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className={sectionLabelClass}>
                {content.hero.eyebrow}
              </p>

              <h1 className={titleClass}>
                {content.hero.title}
              </h1>

              <p className={bodyClass}>
                {content.hero.intro}
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {content.hero.highlights.map((item) => (
                  <div key={item} className="flex gap-2 items-start rounded-xl bg-white/80 border border-[#dde5ec] px-4 py-3">
                    <CheckCircle size={18} className="text-[#d4af37] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#2a3439]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <ContactCtas
                  primaryLabel={content.hero.primaryCta}
                  secondaryLabel={content.hero.secondaryCta}
                />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-[#dfe7ef] bg-white">
              <img
                src={heroImage}
                alt="Doctor reviewing dental X-ray with patient while discussing treatment options"
                className="w-full h-[360px] lg:h-[520px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className={sectionLabelClass}>
              {content.situations.eyebrow}
            </p>
            <h2 className={sectionTitleClass}>
              {content.situations.title}
            </h2>
            <p className={bodyClass + ' mt-5'}>
              {content.situations.intro}
            </p>
          </div>

          <div className={situationsImage ? 'grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start' : 'max-w-4xl mx-auto'}>
            <div className="grid sm:grid-cols-2 gap-5">
              {content.situations.cards.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] p-5">
                  <h3 className="text-[1.15rem] text-[#2a3439] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            {situationsImage && (
              <div className="rounded-2xl overflow-hidden border border-[#dfe7ef] shadow-sm bg-white lg:sticky lg:top-28">
                <img
                  src={situationsImage}
                  alt="Visual illustration of missing teeth and alignment concerns"
                  className="w-full h-[300px] lg:h-[540px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className={sectionLabelClass}>
              {content.pathways.eyebrow}
            </p>
            <h2 className={sectionTitleClass}>
              {content.pathways.title}
            </h2>
            <p className={bodyClass + ' mt-5'}>
              {content.pathways.intro}
            </p>
          </div>

          <div className={pathwaysImage ? 'grid lg:grid-cols-[1fr_1fr] gap-8 items-start' : 'max-w-4xl mx-auto text-center'}>
            <div className="space-y-4">
              {content.pathways.cards.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#dbe4ec] bg-white p-6">
                  <h3 className="text-[1.25rem] text-[#2a3439] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-gray-600 leading-relaxed mb-4">
                    {item.text}
                  </p>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 text-sm text-[#2a3439] hover:text-[#c19d30] font-semibold"
                  >
                    {item.cta}
                    <ArrowRight size={15} className="text-[#d4af37]" />
                  </Link>
                </article>
              ))}
            </div>

            {pathwaysImage && (
              <div className="rounded-2xl overflow-hidden border border-[#dfe7ef] shadow-sm bg-white lg:sticky lg:top-28">
                <img
                  src={pathwaysImage}
                  alt="Patient with denture treatment context for fixed and full-mouth pathways"
                  className="w-full h-[320px] md:h-[420px] lg:h-[620px] object-cover object-center lg:object-left lg:scale-110 lg:origin-left"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className={sectionLabelClass}>
              {content.assessment.eyebrow}
            </p>
            <h2 className={sectionTitleClass + ' mt-3'}>
              {content.assessment.title}
            </h2>
            <p className={bodyClass + ' mt-5'}>
              {content.assessment.intro}
            </p>
          </div>

          <h3 className="mt-12 mb-6 text-center text-[1.05rem] uppercase tracking-[0.18em] text-[#a8842a] font-semibold">
            {content.assessment.factorsTitle}
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {content.assessment.factors.map((factor, index) => (
              <div
                key={factor.title}
                className="flex gap-4 rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] p-5 lg:p-6"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-white text-sm font-semibold">
                  {index + 1}
                </span>
                <div>
                  <p className="text-[#2a3439] font-semibold">
                    {factor.title}
                  </p>
                  <p className="text-[15px] text-gray-600 mt-1.5 leading-relaxed">
                    {factor.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-28 bg-[#f7fafc]">
        {teamImage && (
          <div className="absolute inset-0" aria-hidden="true">
            <MediaFrame image={teamImage} alt="" settings={{ blur: true, scale: 1.1, position: 'center 35%', rounded: 'rounded-none', className: 'h-full' }} />
            <div className="absolute inset-0 bg-[#f7fafc]/70" />
          </div>
        )}
        <div className="relative max-w-3xl mx-auto px-8">
          <div className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg p-7 lg:p-8">
            <p className={sectionLabelClass}>
              {content.team.eyebrow}
            </p>
            <h2 className={sectionTitleClass + ' mt-3'}>
              {content.team.title}
            </h2>
            <p className={bodyClass + ' mt-5'}>
              {content.team.intro}
            </p>

            <div className="mt-7 space-y-4">
              {content.team.doctors.map((doctor) => (
                <article key={doctor.name} className="rounded-xl border border-[#e2e8ef] bg-[#f7fafc] p-4">
                  <h3 className="text-[1.15rem] text-[#2a3439]">
                    {doctor.name}
                  </h3>
                  <p className="text-[13px] text-gray-600 mt-2">
                    {doctor.focus}
                  </p>
                </article>
              ))}
            </div>

            <Link
              to={content.team.ctaPath}
              className="mt-7 inline-flex items-center gap-2 text-sm text-[#2a3439] hover:text-[#c19d30] font-semibold"
            >
              {content.team.cta}
              <ArrowRight size={15} className="text-[#d4af37]" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] p-7 lg:p-8">
              <p className={sectionLabelClass}>
                {content.overseas.eyebrow}
              </p>
              <h2 className={sectionTitleClass + ' mt-3'}>
                {content.overseas.title}
              </h2>
              <p className={bodyClass + ' mt-5'}>
                {content.overseas.intro}
              </p>

              <div className="mt-7 space-y-4">
                {content.overseas.timeline.map((item, index) => (
                  <article key={item.step} className="rounded-xl border border-[#e2e8ef] bg-white p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5AF73]">
                      {index + 1}
                    </p>
                    <h3 className="text-[1.05rem] text-[#2a3439] mt-1">
                      {item.step}
                    </h3>
                    <p className="text-[15px] text-gray-600 mt-1">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>

              <Link
                to={content.overseas.ctaPath}
                className="mt-7 inline-flex items-center gap-2 text-sm text-[#2a3439] hover:text-[#c19d30] font-semibold"
              >
                {content.overseas.cta}
                <ArrowRight size={15} className="text-[#d4af37]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={sectionTitleClass}>
            {content.finalCta.title}
          </h2>
          <p className={bodyClass + ' mt-5'}>
            {content.finalCta.intro}
          </p>

          <h3 className="mt-10 text-[1.2rem] text-[#2a3439]">
            {content.finalCta.processTitle}
          </h3>

          <ProcessSteps steps={content.finalCta.steps} className="mt-6" />

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ContactCtas
              primaryLabel={content.finalCta.primaryCta}
              secondaryLabel={content.finalCta.secondaryCta}
            />
          </div>

          <p className="text-sm text-gray-500 mt-7 italic">
            {content.finalCta.note}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
