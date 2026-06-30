import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { restorativeContent } from '../Translations/restorativeContent';
import { SectionHeading } from '../components/Section';
import ContactCtas from '../components/ContactCtas';
import { sectionLabelClass, ctaPrimaryClass } from '../styles/ui';
import heroImg from '../pics/doctor-reviewing-x-ray-with-patient-explaining-treatment.jpg';
import xrayImg from '../pics/dr-x-ray-consultation.jpg';

const bodyClass = 'text-lg text-gray-600 leading-relaxed';

export default function RestorativeDentistry() {
  const language = useSelector((state) => state.language.language);
  const c = restorativeContent[language] || restorativeContent.english;

  return (
    <main className="bg-[#f7fafc] text-[#2a3439]">
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDescription} />
      </Helmet>

      {/* S1 — HERO */}
      <section className="min-h-[85vh] flex items-center py-16 lg:py-24 pt-32 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <p className={sectionLabelClass}>{c.section1.eyebrow}</p>
              <h1 className="text-4xl md:text-5xl text-[#2a3439] leading-tight">{c.section1.title}</h1>
              <p className={bodyClass}>{c.section1.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <ContactCtas primaryLabel={c.section1.primaryCta} secondaryLabel={c.section1.secondaryCta} />
              </div>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-lg aspect-[16/9] lg:aspect-auto">
              <img src={heroImg} alt="Dentist reviewing X-ray with patient" className="w-full h-full lg:h-[460px] object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* S2 — DOES THIS SOUND FAMILIAR */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={c.section2.eyebrow} title={c.section2.title} intro={c.section2.intro} />
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {c.section2.checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-[#e4ebf1] bg-[#f7fafc] px-5 py-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C5AF73]" />
                <span className="text-sm text-[#2a3439] leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3 — WHY KEEP NATURAL TEETH */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={c.section3.eyebrow} title={c.section3.title} intro={c.section3.intro} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {c.section3.benefits.map((benefit) => (
              <div key={benefit} className="flex flex-col items-center text-center rounded-2xl border border-[#e4ebf1] bg-white p-6 shadow-sm">
                <span className="mb-3 block h-1 w-8 rounded-full bg-[#C5AF73]" />
                <p className="text-sm font-medium text-[#2a3439] leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S4 — TREATMENT OPTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={c.section4.eyebrow} title={c.section4.title} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.section4.treatments.map((t, i) => (
              <article key={t.name} className="group rounded-2xl border border-[#e4ebf1] bg-[#f7fafc] p-6 hover:border-[#C5AF73] hover:shadow-sm transition">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5AF73]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="text-base font-semibold text-[#2a3439]">{t.name}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* S5 — WHEN MAY NOT BE SAVABLE */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className={sectionLabelClass}>{c.section5.eyebrow}</p>
              <h2 className="mt-4 text-[1.8rem] md:text-[2.4rem] text-[#2a3439] leading-tight">{c.section5.title}</h2>
              <p className="mt-5 text-lg text-gray-600 leading-relaxed">{c.section5.intro}</p>
              <p className="mt-6 text-sm font-semibold text-[#2a3439]">{c.section5.label}</p>
              <ul className="mt-3 space-y-3">
                {c.section5.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#2a3439]">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#C5AF73]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 leading-relaxed">{c.section5.outro}</p>
            </div>
            <div className="hidden lg:block overflow-hidden rounded-2xl shadow-md">
              <img src={xrayImg} alt="X-ray review consultation" className="h-[380px] w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* S6 — REAL PATIENT CASES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <SectionHeading eyebrow={c.section6.eyebrow} title={c.section6.title} intro={c.section6.intro} />
          <Link to="/contact" className={ctaPrimaryClass}>
            {c.section6.cta}
            <ArrowRight className="ml-2 inline h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* S7 — FINAL CTA */}
      <section className="py-20 bg-[#2a3439] text-white">
        <div className="max-w-3xl mx-auto px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">{c.section7.title}</h2>
          <p className="text-lg text-[#d6e2ed] leading-relaxed">{c.section7.intro}</p>

          {/* Mini process */}
          <div className="flex flex-wrap justify-center items-center gap-3 py-2">
            {c.section7.steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-[#C5AF73] px-4 py-1.5 text-xs font-semibold text-[#C5AF73]">{step}</span>
                {i < c.section7.steps.length - 1 && <ArrowRight className="h-4 w-4 text-[#C5AF73]" />}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <ContactCtas primaryLabel={c.section7.primaryCta} secondaryLabel={c.section7.secondaryCta} />
          </div>
          <p className="text-xs text-[#8aa0b5] leading-relaxed max-w-xl mx-auto">{c.section7.note}</p>
        </div>
      </section>
    </main>
  );
}
