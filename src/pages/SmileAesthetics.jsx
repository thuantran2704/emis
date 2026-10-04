import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import smileAestheticsContent from '../Translations/smileAestheticsContent';
import heroImage from '../pics/doctor-smiling-with-patient.jpg';
import sectionThreeImage from '../pics/confident-smile-social.jpeg';
import orthoImage from '../pics/three-women-smiling-fitness-outdoors.jpeg';
import whiteningCase from '../pics/elder-couple-smiling-outdoors-healthy-walking.jpeg';
import veneerCase from '../pics/confident-smile-social.jpeg';
import orthoCase from '../pics/doctor-smiling-with-patient.jpg';
import improveCardImage1 from '../pics/three-women-smiling-fitness-outdoors.jpeg';
import improveCardImage2 from '../pics/elder-couple-smiling-outdoors-healthy-walking.jpeg';
import improveCardImage3 from '../pics/elder-person-socializing.jpeg';
import improveCardImage4 from '../pics/confident-smile-social.jpeg';
import improveCardImage5 from '../pics/doctor-smiling-with-patient.jpg';
import improveCardImage6 from '../pics/khach_cuoi_chup_hinh_voi_bs.jpg';
import optionCardImage1 from '../pics/doctor-smiling-with-patient.jpg';
import optionCardImage2 from '../pics/elder-person-socializing.jpeg';
import optionCardImage3 from '../pics/three-women-smiling-fitness-outdoors.jpeg';
import optionCardImage4 from '../pics/confident-smile-social.jpeg';
import optionCardImage5 from '../pics/elder-couple-smiling-outdoors-healthy-walking.jpeg';
import optionCardImage6 from '../pics/khach_cuoi_chup_hinh_voi_bs.jpg';
import ProcessSteps from '../components/ProcessSteps';
import NumberedList from '../components/NumberedList';
import CtaButton from '../components/CtaButton';

const SectionLabel = ({ children }) => (
  <p
    className="mb-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C5AF73] lg:mb-6 lg:text-[10px] lg:tracking-[0.34em]"
    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
  >
    {children}
  </p>
);

const SectionTitle = ({ children }) => (
  <h2
    className="mb-5 text-[1.45rem] leading-[1.1] text-[#2a3439] lg:mb-8 lg:text-[2.1rem]"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    {children}
  </h2>
);

export default function SmileAesthetics() {
  const language = useSelector((state) => state.language.language);
  const content = smileAestheticsContent[language] || smileAestheticsContent.english;

  const improveItems = content.improve?.items || [];
  const factors = content.unique?.factors || [];
  const options = content.options?.items || [];
  const processSteps = content.process?.steps || [];
  const orthoFlow = content.orthodontics?.flow || [];
  const caseCards = content.cases?.cards || [];

  const caseImages = [whiteningCase, veneerCase, orthoCase];
  const improveImages = [
    improveCardImage1,
    improveCardImage2,
    improveCardImage3,
    improveCardImage4,
    improveCardImage5,
    improveCardImage6,
  ];
  const optionImages = [
    optionCardImage1,
    optionCardImage2,
    optionCardImage3,
    optionCardImage4,
    optionCardImage5,
    optionCardImage6,
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7fafc] pt-20 text-[#2a3439]">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Smile Aesthetics</SectionLabel>
            <h1
              className="mb-7 max-w-2xl text-[1.6rem] leading-[1.08] text-[#2a3439] lg:mb-10 lg:text-[2.8rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.hero?.title}
            </h1>
            <div className="mb-10 space-y-3 text-[14px] leading-7 text-gray-600 lg:mb-12 lg:text-[16px] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
              {(content.hero?.lines || []).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <CtaButton to="/contact" variant="primary" size="chip">
                {content.hero?.primaryCta}
              </CtaButton>
              <CtaButton to="/contact" variant="outlineGold" size="chip">
                {content.hero?.secondaryCta}
              </CtaButton>
            </div>
          </div>

          {heroImage ? (
            <div className="aspect-square overflow-hidden rounded-2xl border border-[#dbe4ec] bg-white shadow-sm lg:aspect-auto lg:h-[28rem]">
              <img
                src={heroImage}
                alt={content.hero?.imageAlt || 'Smile aesthetics consultation'}
                className="h-full w-full object-cover object-center lg:scale-[1.02]"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f1f2e] py-16 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#d4af37]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#1d3953]/40 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
          <NumberedList title={content.improve?.title} items={improveItems} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div>
            <SectionTitle>{content.unique?.title}</SectionTitle>
            <p className="mb-5 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#2a3439] lg:text-[15px]">
              {content.unique?.introTitle}
            </p>
            <p className="text-[14px] leading-7 text-gray-600 lg:text-[16px] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
              {content.unique?.note}
            </p>

            {sectionThreeImage ? (
              <div className="mt-6 hidden overflow-hidden rounded-2xl border border-[#dbe4ec] bg-white shadow-sm lg:block">
                <img src={sectionThreeImage} alt="Doctor discussing smile planning with patient" className="h-56 w-full object-cover" />
              </div>
            ) : null}
          </div>
          <div className="space-y-3">
            {factors.map((factor) => (
              <div key={factor} className="flex items-start gap-3 rounded-xl border border-[#dbe4ec] bg-white p-4">
                <span className="mt-0.5 text-[#d4af37]">✓</span>
                <p className="text-[13px] leading-6 text-[#2a3439] lg:text-[14px]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <SectionTitle>{content.options?.title}</SectionTitle>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {options.map((option, index) => (
              <article key={option.name} className="rounded-xl border border-[#dbe4ec] bg-[#f7fafc] p-5">
                <div className="overflow-hidden rounded-lg border border-[#dbe4ec] bg-white">
                  <img
                    src={optionImages[index % optionImages.length]}
                    alt={option.name}
                    className="h-28 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 text-[1.02rem] text-[#2a3439]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {option.name}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-gray-600 lg:text-[14px]">{option.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-12 lg:py-28">
        <SectionTitle>{content.process?.title}</SectionTitle>
        <ProcessSteps steps={processSteps} note={content.process?.note} />
      </section>

      <section className="bg-white py-16 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <SectionTitle>{content.orthodontics?.title}</SectionTitle>
            <div className="space-y-3 text-[14px] leading-7 text-gray-600 lg:text-[16px] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
              {(content.orthodontics?.paragraphs || []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <CtaButton to="/restorative-dentistry" variant="primary" size="chip" className="mt-7">
              {content.orthodontics?.cta}
            </CtaButton>
          </div>

          {orthoImage ? (
            <div className="rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] p-5">
              <div className="mb-5 overflow-hidden rounded-xl border border-[#dbe4ec] bg-white">
                <img src={orthoImage} alt="Orthodontic aligner planning" className="h-44 w-full object-cover" />
              </div>
              <div className="space-y-2">
                {orthoFlow.map((step, index) => (
                  <div key={step} className="rounded-lg border border-[#dbe4ec] bg-white px-3 py-2.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#2a3439] lg:text-[12px]">
                      {index + 1}. {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] p-5 text-center">
              <div className="space-y-2">
                {orthoFlow.map((step, index) => (
                  <p key={step} className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#2a3439] lg:text-[13px]">
                    {index + 1}. {step}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-12 lg:py-28">
        <SectionTitle>{content.cases?.title}</SectionTitle>
        <p className="mb-8 max-w-3xl text-[14px] leading-7 text-gray-600 lg:text-[16px] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
          {content.cases?.intro}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {caseCards.map((card, index) => (
            <article key={card.title} className="overflow-hidden rounded-xl border border-[#dbe4ec] bg-white">
              {caseImages[index] ? (
                <img src={caseImages[index]} alt={card.imageAlt} className="h-44 w-full object-cover" />
              ) : null}
              <div className="p-5">
                <h3 className="text-[1.02rem] text-[#2a3439]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {card.title}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-gray-600 lg:text-[14px]">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <CtaButton to="/restorative-dentistry" variant="outlineGold" size="chip">
            {content.cases?.cta}
          </CtaButton>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] px-6 py-10 text-center lg:px-10 lg:py-14">
          <h2
            className="mb-4 text-[1.5rem] leading-[1.15] text-[#2a3439] lg:text-[2.2rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.finalCta?.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[14px] leading-7 text-gray-600 lg:text-[16px] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
            {content.finalCta?.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CtaButton to="/contact" variant="primary" size="chip">
              {content.finalCta?.primaryCta}
            </CtaButton>
            <CtaButton to="/contact" variant="outlineGold" size="chip">
              {content.finalCta?.secondaryCta}
            </CtaButton>
          </div>
          <p className="mt-6 text-[11px] leading-6 text-gray-500 lg:text-[12px]">{content.finalCta?.note}</p>
        </div>
      </section>
    </main>
  );
}
