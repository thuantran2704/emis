import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import patientJourneyContent from '../Translations/patientJourneyContent';
import CtaButton from '../components/CtaButton';

// NOTE: Images are intentionally placeholders for review before real assets are
// added. Replace each <MediaPlaceholder> with an <img> once anonymized, cropped
// case screenshots and CT scans are ready. See .github/content.md for the asset
// spec (which screenshots to use, privacy masking, and consent watermark).

function MediaPlaceholder({ label, note, className = '', ratio = 'aspect-[4/3]' }) {
  return (
    <div
      className={`flex ${ratio} w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#d4af37]/50 bg-[#f7f2e7] p-6 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="text-3xl text-[#d4af37]">◺</span>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b6923a]">
        {note}
      </p>
      <p className="mt-2 max-w-xs text-xs leading-5 text-gray-500">{label}</p>
    </div>
  );
}

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
            {content.steps.map((step) => (
              <article
                key={step.title}
                className="rounded-2xl border border-[#e6ecf1] bg-[#f7fafc] p-6 lg:p-8"
              >
                <StepLabel>{step.label}</StepLabel>
                <h3 className="mb-5 text-lg text-[#2a3439] lg:text-xl">{step.title}</h3>

                {step.media === 'screenshot' ? (
                  <MediaPlaceholder
                    note={content.placeholderNote}
                    label={step.mediaAlt}
                    ratio="aspect-[3/4] sm:aspect-[4/3]"
                    className="mb-5 max-w-sm"
                  />
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
            <MediaPlaceholder
              note={content.placeholderNote}
              label={content.clinicalBeforeCaption}
              ratio="aspect-[4/3]"
            />
            <figcaption className="mt-4 text-[13px] leading-6 text-gray-600">
              {content.clinicalBeforeCaption}
            </figcaption>
          </figure>
          <figure>
            <StepLabel>{content.clinicalAfterLabel}</StepLabel>
            <MediaPlaceholder
              note={content.placeholderNote}
              label={content.clinicalAfterCaption}
              ratio="aspect-[4/3]"
            />
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
