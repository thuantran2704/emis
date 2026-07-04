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
import Text from '../components/Text';
import ContactCtas from '../components/ContactCtas';
import MediaFrame from '../components/MediaFrame';
import ProcessSteps from '../components/ProcessSteps';

const Solutions = () => {
  const language = useSelector((state) => state.language.language);
  const content = solutionsContent[language] || solutionsContent.english;

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
              <Text variant="eyebrow">
                {content.hero.eyebrow}
              </Text>

              <Text as="h1" variant="title" weight="normal" size="hero">
                {content.hero.title}
              </Text>

              <Text variant="description" size="p17" tone="body">
                {content.hero.intro}
              </Text>

              <div className="grid sm:grid-cols-2 gap-3">
                {content.hero.highlights.map((item) => (
                  <div key={item} className="flex gap-2 items-start rounded-xl bg-white/80 border border-[#dde5ec] px-4 py-3">
                    <CheckCircle size={18} className="text-[#d4af37] mt-0.5 flex-shrink-0" />
                    <Text as="span" variant="description" size="sm" tone="heading">
                      {item}
                    </Text>
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

            <div className="rounded-2xl overflow-hidden shadow-md border border-[#dfe7ef] bg-[#f7fafc]">
              <img
                src={heroImage}
                alt="Doctor reviewing dental X-ray with patient while discussing treatment options"
                className="w-full object-contain lg:h-[520px] lg:object-cover lg:object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Text variant="eyebrow">
              {content.situations.eyebrow}
            </Text>
            <Text variant="title" weight="normal" size="sectionTitle">
              {content.situations.title}
            </Text>
            <Text variant="description" size="p17" tone="body" className="mt-5">
              {content.situations.intro}
            </Text>
          </div>

          <div className={situationsImage ? 'grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start' : 'max-w-4xl mx-auto'}>
            <div className="grid sm:grid-cols-2 gap-5">
              {content.situations.cards.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] p-5">
                  <Text variant="cardTitle" weight="normal" size="card115" className="mb-2">
                    {item.title}
                  </Text>
                  <Text variant="description" size="p15" tone="body">
                    {item.text}
                  </Text>
                </article>
              ))}
            </div>

            {situationsImage && (
              <div className="rounded-2xl overflow-hidden border border-[#dfe7ef] shadow-sm bg-[#f7fafc] lg:sticky lg:top-28">
                <img
                  src={situationsImage}
                  alt="Visual illustration of missing teeth and alignment concerns"
                  className="w-full object-contain lg:h-[540px] lg:object-cover lg:object-center"
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
            <Text variant="eyebrow">
              {content.pathways.eyebrow}
            </Text>
            <Text variant="title" weight="normal" size="sectionTitle">
              {content.pathways.title}
            </Text>
            <Text variant="description" size="p17" tone="body" className="mt-5">
              {content.pathways.intro}
            </Text>
          </div>

          <div className={pathwaysImage ? 'grid lg:grid-cols-[1fr_1fr] gap-8 items-start' : 'max-w-4xl mx-auto text-center'}>
            <div className="space-y-4">
              {content.pathways.cards.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#dbe4ec] bg-white p-6">
                  <Text variant="cardTitle" weight="normal" size="card125" className="mb-2">
                    {item.title}
                  </Text>
                  <Text variant="description" size="p16" tone="body" className="mb-4">
                    {item.text}
                  </Text>
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
            <Text variant="eyebrow">
              {content.assessment.eyebrow}
            </Text>
            <Text variant="title" weight="normal" size="sectionTitle" className="mt-3">
              {content.assessment.title}
            </Text>
            <Text variant="description" size="p17" tone="body" className="mt-5">
              {content.assessment.intro}
            </Text>
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
                  <Text variant="cardTitle" as="p" size="base">
                    {factor.title}
                  </Text>
                  <Text variant="description" size="p15" tone="body" className="mt-1.5">
                    {factor.text}
                  </Text>
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
            <Text variant="eyebrow">
              {content.team.eyebrow}
            </Text>
            <Text variant="title" weight="normal" size="sectionTitle" className="mt-3">
              {content.team.title}
            </Text>
            <Text variant="description" size="p17" tone="body" className="mt-5">
              {content.team.intro}
            </Text>

            <div className="mt-7 space-y-4">
              {content.team.doctors.map((doctor) => (
                <article key={doctor.name} className="rounded-xl border border-[#e2e8ef] bg-[#f7fafc] p-4">
                  <Text variant="cardTitle" weight="normal" size="card115">
                    {doctor.name}
                  </Text>
                  <Text variant="description" size="p13" tone="body" className="mt-2">
                    {doctor.focus}
                  </Text>
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
              <Text variant="eyebrow">
                {content.overseas.eyebrow}
              </Text>
              <Text variant="title" weight="normal" size="sectionTitle" className="mt-3">
                {content.overseas.title}
              </Text>
              <Text variant="description" size="p17" tone="body" className="mt-5">
                {content.overseas.intro}
              </Text>

              <div className="mt-7 space-y-4">
                {content.overseas.timeline.map((item, index) => (
                  <article key={item.step} className="rounded-xl border border-[#e2e8ef] bg-white p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5AF73]">
                      {index + 1}
                    </p>
                    <Text as="h3" variant="cardTitle" weight="normal" size="bullet" className="mt-1">
                      {item.step}
                    </Text>
                    <Text variant="description" size="p15" tone="body" className="mt-1">
                      {item.text}
                    </Text>
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
          <Text variant="title" weight="normal" size="sectionTitle">
            {content.finalCta.title}
          </Text>
          <Text variant="description" size="p17" tone="body" className="mt-5">
            {content.finalCta.intro}
          </Text>

          <Text as="h3" variant="cardTitle" weight="normal" size="cardLg" className="mt-10">
            {content.finalCta.processTitle}
          </Text>

          <ProcessSteps steps={content.finalCta.steps} className="mt-6" />

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ContactCtas
              primaryLabel={content.finalCta.primaryCta}
              secondaryLabel={content.finalCta.secondaryCta}
            />
          </div>

          <Text variant="description" size="sm" tone="muted" className="mt-7 italic">
            {content.finalCta.note}
          </Text>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
