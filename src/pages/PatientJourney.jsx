import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import patientJourneyContent from '../Translations/patientJourneyContent';
import CtaButton from '../components/CtaButton';
import timelineChat from '../pics/patient-case1-timeline-chat.png';
import airportPickup from '../pics/patient-case1-airport-pickup.png';
import prescriptionChat from '../pics/patient-case1-prescription-chat.png';
import beforeCT from '../pics/patient-case1-before-CT.png';
import afterCT from '../pics/patient-case1-after-CT.png';
import thankYouChat from '../pics/patient-case1-thank-you-followup-chat.png';

// Screenshots mapped by journey step index. Index 1 (medical readiness) stays a
// text card — the blood-test screenshot is not shown publicly for privacy.
const stepImages = [timelineChat, null, airportPickup, prescriptionChat];

function StepLabel({ children }) {
  return (
    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C5AF73]">
      {children}
    </p>
  );
}

export default function PatientJourney() {
  const language = useSelector((state) => state.language.language);
  const content = patientJourneyContent[language] || patientJourneyContent.english;

  return (
    <main className="bg-[#f7fafc] text-[#2a3439] min-h-[calc(100vh-4rem)] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-12 lg:py-32">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5AF73] lg:mb-6">
          {content.heroEyebrow}
        </p>
        <h1 className="mb-7 max-w-3xl text-[1.55rem] leading-[1.1] text-[#2a3439] lg:mb-9 lg:text-[2.6rem]">
          {content.heroTitle}
        </h1>
        <p className="mb-10 max-w-2xl text-[13px] leading-6 text-gray-600 lg:text-[1rem] lg:leading-8">
          {content.heroSubtitle}
        </p>
        <div className="flex flex-wrap gap-4">
          <CtaButton to="/contact" variant="primary" size="chip">
            {content.heroPrimaryCTA}
          </CtaButton>
          <CtaButton to="/international-patients" variant="outlineGold" size="chip">
            {content.heroSecondaryCTA}
          </CtaButton>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-white py-16 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5AF73] lg:mb-6">
            {content.journeyEyebrow}
          </p>
          <h2 className="mb-12 max-w-2xl text-[1.45rem] leading-[1.1] text-[#2a3439] lg:mb-16 lg:text-[2.1rem]">
            {content.journeyTitle}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {content.steps.map((step, i) => (
              <article
                key={step.title}
                className="rounded-2xl border border-[#e6ecf1] bg-[#f7fafc] p-6 lg:p-8"
              >
                <StepLabel>{step.label}</StepLabel>
                <h3 className="mb-5 text-lg text-[#2a3439] lg:text-xl">{step.title}</h3>

                {step.media === 'screenshot' ? (
                  <div className="mb-5 max-w-sm overflow-hidden rounded-2xl border border-[#e6ecf1] bg-white">
                    <img
                      src={stepImages[i]}
                      alt={step.mediaAlt}
                      loading="lazy"
                      className="w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="mb-5 flex items-center gap-4 rounded-2xl border border-[#e6ecf1] bg-white p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7f2e7] text-xl text-[#d4af37]">
                      ✓
                    </span>
                    <p className="text-[13px] leading-6 text-gray-600">{step.mediaAlt}</p>
                  </div>
                )}

                <p className="text-[13px] leading-6 text-gray-600 lg:text-sm lg:leading-7">
                  {step.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL BEFORE / AFTER */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-12 lg:py-28">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5AF73] lg:mb-6">
          {content.clinicalEyebrow}
        </p>
        <h2 className="mb-12 text-[1.45rem] leading-[1.1] text-[#2a3439] lg:mb-14 lg:text-[2.1rem]">
          {content.clinicalTitle}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <figure>
            <StepLabel>{content.clinicalBeforeLabel}</StepLabel>
            <div className="overflow-hidden rounded-2xl border border-[#e6ecf1] bg-white">
              <img
                src={beforeCT}
                alt={content.clinicalBeforeCaption}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-[13px] leading-6 text-gray-600">
              {content.clinicalBeforeCaption}
            </figcaption>
          </figure>
          <figure>
            <StepLabel>{content.clinicalAfterLabel}</StepLabel>
            <div className="overflow-hidden rounded-2xl border border-[#e6ecf1] bg-white">
              <img
                src={afterCT}
                alt={content.clinicalAfterCaption}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-[13px] leading-6 text-gray-600">
              {content.clinicalAfterCaption}
            </figcaption>
          </figure>
        </div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.14em] text-gray-400">
          {content.clinicalConsent}
        </p>
      </section>

      {/* PATIENT EXPERIENCE */}
      <section className="bg-white py-16 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5AF73]">
            {content.experienceEyebrow}
          </p>
          <blockquote className="text-[1.4rem] font-medium leading-snug text-[#2a3439] lg:text-[2rem]">
            <span className="text-[#d4af37]">“</span>
            {content.experienceQuote}
            <span className="text-[#d4af37]">”</span>
          </blockquote>
          <div className="mx-auto mt-10 max-w-sm overflow-hidden rounded-2xl border border-[#e6ecf1] bg-white">
            <img
              src={thankYouChat}
              alt={content.experienceImageAlt}
              loading="lazy"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-24">
        <h2 className="mb-5 text-[1.4rem] leading-[1.15] text-[#2a3439] lg:text-[2rem]">
          {content.ctaTitle}
        </h2>
        <p className="mx-auto mb-9 max-w-2xl text-[13px] leading-6 text-gray-600 lg:text-base lg:leading-8">
          {content.ctaText}
        </p>
        <CtaButton to="/contact" variant="primary" size="chip">
          {content.ctaPrimary}
        </CtaButton>

        <p className="mx-auto mt-12 max-w-xl text-[11px] leading-5 text-gray-400">
          {content.privacyNote}
        </p>
      </section>
    </main>
  );
}
