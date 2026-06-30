import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Sparkles, Layers, Brush, Smile, Wrench, Plus, ArrowRight } from 'lucide-react';
import smileAestheticsContent from '../Translations/smileAestheticsContent';
import heroImage from '../pics/khach_cuoi_chup_hinh_voi_bs.jpg';
import sectionThreeImage from '../pics/confident-smile-social.jpeg';
import orthoImage from '../pics/elder-person-socializing.jpeg';
import whiteningCase from '../pics/eating-casually.jpeg';
import veneerCase from '../pics/measuring-result-cbct-x-ray-patient-smiling.jpg';
import orthoCase from '../pics/doctor-explaining-procedure-to-patient.jpg';
import ProcessSteps from '../components/ProcessSteps';

const SectionLabel = ({ children }) => (
  <p
    className="mb-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C5AF73] lg:mb-6 lg:text-[10px] lg:tracking-[0.34em]"
  >
    {children}
  </p>
);

const SectionTitle = ({ children }) => (
  <h2
    className="mb-5 text-[1.45rem] leading-[1.1] text-[#2a3439] lg:mb-8 lg:text-[2.1rem]"
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
  const optionIcons = [Sparkles, Layers, Brush, Smile, Wrench, Plus];

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
            >
              {content.hero?.title}
            </h1>
            <div className="mb-10 space-y-3 text-[14px] leading-7 text-gray-600 lg:mb-12 lg:text-[16px] lg:leading-8">
              {(content.hero?.lines || []).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-[#d4af37] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c19d30] lg:px-6 lg:py-3 lg:text-[11px]"
              >
                {content.hero?.primaryCta}
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-[#d4af37] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2a3439] transition hover:bg-white lg:px-6 lg:py-3 lg:text-[11px]"
              >
                {content.hero?.secondaryCta}
              </Link>
            </div>
          </div>

          {heroImage ? (
            <div className="overflow-hidden rounded-2xl border border-[#dbe4ec] bg-white shadow-sm h-56 lg:h-[28rem]">
              <img
                src={heroImage}
                alt={content.hero?.imageAlt || 'Smile aesthetics consultation'}
                className="w-full h-full object-cover object-top lg:scale-125"
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
          <h2 className="mb-8 text-[1.45rem] leading-[1.1] text-white lg:mb-12 lg:text-[2.1rem]">
            {content.improve?.title}
          </h2>
          <ol className="flex flex-col">
            {improveItems.map((item, index) => (
              <li
                key={item}
                className="group flex items-center gap-5 border-b border-white/10 py-5 transition-colors hover:bg-white/[0.03] lg:gap-8 lg:py-6"
              >
                <span
                  className="text-[1.1rem] font-semibold tabular-nums text-[#d4af37]/60 transition-colors group-hover:text-[#d4af37] lg:text-[1.35rem]"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#d4af37]/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#d4af37] group-hover:shadow-[0_0_12px_2px_rgba(212,175,55,0.5)]" />
                <p className="flex-1 text-[14px] font-medium uppercase tracking-[0.12em] text-white/85 transition-colors group-hover:text-white lg:text-[16px]">
                  {item}
                </p>
                <span className="translate-x-[-6px] text-[#d4af37] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-5 w-5" strokeWidth={1.6} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-12 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div>
            <SectionTitle>{content.unique?.title}</SectionTitle>
            <p className="mb-5 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#2a3439] lg:text-[15px]">
              {content.unique?.introTitle}
            </p>
            <p className="text-[14px] leading-7 text-gray-600 lg:text-[16px] lg:leading-8">
              {content.unique?.note}
            </p>

            {sectionThreeImage ? (
              <div className="mt-6 hidden overflow-hidden rounded-2xl border border-[#dbe4ec] bg-white shadow-sm lg:block">
                <img src={sectionThreeImage} alt="Doctor discussing smile planning with patient" className="h-56 w-full object-cover" />
              </div>
            ) : null}
          </div>
          <div className="flex h-full flex-col gap-3">
            {factors.map((factor) => (
              <div key={factor} className="flex flex-1 items-center gap-3 rounded-xl border border-[#dbe4ec] bg-white p-4">
                <span className="text-[#d4af37]">✓</span>
                <p className="text-[13px] leading-6 text-[#2a3439] lg:text-[14px]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mb-8 lg:mb-10">
            <SectionTitle>{content.options?.title}</SectionTitle>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {options.map((option, index) => {
              const Icon = optionIcons[index % optionIcons.length];
              return (
                <article key={option.name} className="flex gap-4 rounded-xl border border-[#dbe4ec] bg-[#f7fafc] p-5">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#eadfc9] bg-white text-[#d4af37]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-[1.02rem] text-[#2a3439]">
                      {option.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-6 text-gray-600 lg:text-[14px]">{option.description}</p>
                  </div>
                </article>
              );
            })}
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
            <div className="space-y-3 text-[14px] leading-7 text-gray-600 lg:text-[16px] lg:leading-8">
              {(content.orthodontics?.paragraphs || []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              to="/restorative-dentistry"              className="mt-7 inline-block rounded-full bg-[#d4af37] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c19d30] lg:px-6 lg:py-3 lg:text-[11px]"
            >
              {content.orthodontics?.cta}
            </Link>
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
        <p className="mb-8 max-w-3xl text-[14px] leading-7 text-gray-600 lg:text-[16px] lg:leading-8">
          {content.cases?.intro}
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {caseCards.map((card, index) => (
            <article key={card.title} className="overflow-hidden rounded-xl border border-[#dbe4ec] bg-white">
              {caseImages[index] ? (
                <img src={caseImages[index]} alt={card.imageAlt} className="h-44 w-full object-cover" />
              ) : null}
              <div className="p-5">
                <h3 className="text-[1.02rem] text-[#2a3439]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-gray-600 lg:text-[14px]">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/restorative-dentistry"
            className="inline-block rounded-full border border-[#d4af37] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2a3439] transition hover:bg-white lg:px-6 lg:py-3 lg:text-[11px]"
          >
            {content.cases?.cta}
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-28">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] px-6 py-10 text-center lg:px-10 lg:py-14">
          <h2
            className="mb-4 text-[1.5rem] leading-[1.15] text-[#2a3439] lg:text-[2.2rem]"
          >
            {content.finalCta?.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[14px] leading-7 text-gray-600 lg:text-[16px] lg:leading-8">
            {content.finalCta?.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[#d4af37] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c19d30] lg:px-6 lg:py-3 lg:text-[11px]"
            >
              {content.finalCta?.primaryCta}
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-[#d4af37] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2a3439] transition hover:bg-white lg:px-6 lg:py-3 lg:text-[11px]"
            >
              {content.finalCta?.secondaryCta}
            </Link>
          </div>
          <p className="mt-6 text-[11px] leading-6 text-gray-500 lg:text-[12px]">{content.finalCta?.note}</p>
        </div>
      </section>
    </main>
  );
}
