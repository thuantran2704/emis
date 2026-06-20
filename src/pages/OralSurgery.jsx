import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { oralSurgeryContent } from '../Translations/oralSurgeryContent';
import oralSurgeryHeroImg from '../pics/dr-at-work-surgery.jpg';
import wisdomTeethImg from '../pics/wisdom-teeth.jpg';
import evaluationProcessImg from '../pics/doctor-reviewing-x-ray-with-patient-explaining-treatment.jpg';

const OralSurgery = () => {
  const language = useSelector((state) => state.language.language);
  const content = oralSurgeryContent[language] || oralSurgeryContent.english;

  const sectionLabelClass = 'uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold';
  const titleClass = 'text-4xl md:text-5xl text-[#2a3439] leading-tight';
  const bodyClass = 'text-lg text-gray-600 leading-relaxed';
  const checklistItemClass = 'flex gap-3 items-start';
  const showSection2Eyebrow =
    (content.section2?.eyebrow || '').trim().toLowerCase() !==
    (content.section2?.title || '').trim().toLowerCase();

  return (
    <main className="bg-[#f7fafc] text-[#2a3439]">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
      </Helmet>

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center py-16 lg:py-24 pt-32">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20 items-center">
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-[16/9] lg:aspect-auto">
                <img
                  src={oralSurgeryHeroImg}
                  alt="Dentist performing oral surgery procedure in treatment room"
                  className="w-full h-full lg:h-[460px] object-cover object-center"
                />
              </div>
            </div>

            <div className="order-2 lg:order-1 space-y-6">
              <p className={sectionLabelClass} style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                {content.section1.eyebrow || 'ORAL SURGERY'}
              </p>

              <h1 className={titleClass} style={{ fontFamily: "'Playfair Display', serif" }}>
                {content.section1.title}
              </h1>

              <p className={bodyClass} style={{ fontFamily: "'Cormorant', serif" }}>
                {content.section1.intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {content.section1.primaryCta}
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-[#f1f5f9] transition text-center"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {content.section1.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COULD THIS APPLY TO YOU */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            {showSection2Eyebrow && (
              <p className={sectionLabelClass} style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                {content.section2.eyebrow}
              </p>
            )}
            <h2 className={titleClass} style={{ fontFamily: "'Playfair Display', serif" }}>
              {content.section2.title}
            </h2>
            <p className={bodyClass} style={{ fontFamily: "'Cormorant', serif" }}>
              {content.section2.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            <div className="bg-[#f7fafc] rounded-xl p-8">
              <div className="space-y-4">
                {content.section2.checklist.map((item, i) => (
                  <div key={i} className={checklistItemClass}>
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0 mt-1" />
                    <span style={{ fontFamily: "'Cormorant', serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-[#dfe7ef] bg-white min-h-[320px]">
              <img
                src={wisdomTeethImg}
                alt="Wisdom teeth X-ray style visual for oral surgery candidacy"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW DO DOCTORS DETERMINE */}
      <section className="py-20 lg:py-32 bg-[#f7fafc]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p className={sectionLabelClass} style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              {content.section3.eyebrow}
            </p>
            <h2 className={titleClass} style={{ fontFamily: "'Playfair Display', serif" }}>
              {content.section3.title}
            </h2>
            <p className={bodyClass} style={{ fontFamily: "'Cormorant', serif" }}>
              {content.section3.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            <div className="bg-white rounded-xl p-8">
              <div className="space-y-4">
                {content.section3.checklist.map((item, i) => (
                  <div key={i} className={checklistItemClass}>
                    <CheckCircle size={20} className="text-[#d4af37] flex-shrink-0 mt-1" />
                    <span style={{ fontFamily: "'Cormorant', serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-[#dfe7ef] bg-white min-h-[320px]">
              <img
                src={evaluationProcessImg}
                alt="Doctor evaluating X-ray and CBCT information with patient"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROCESS */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className={sectionLabelClass} style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              {content.section4.eyebrow}
            </p>
            <h2 className={titleClass} style={{ fontFamily: "'Playfair Display', serif" }}>
              {content.section4.title}
            </h2>
            <p className={bodyClass} style={{ fontFamily: "'Cormorant', serif" }}>
              {content.section4.intro}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-0">
              {content.section4.steps.map((step, i) => (
                <div key={i}>
                  <div className="bg-[#f7fafc] p-6 rounded-lg text-center">
                    <p
                      className="text-lg font-semibold text-[#2a3439]"
                      style={{ fontFamily: "'Cormorant', serif" }}
                    >
                      {step}
                    </p>
                  </div>
                  {i < content.section4.steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowRight size={20} className="text-[#d4af37] rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OVERSEAS PATIENTS */}
      <section className="py-20 lg:py-32 bg-[#f7fafc]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <p className={sectionLabelClass} style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              {content.section5.eyebrow}
            </p>
            <h2 className={titleClass + ' mb-6'} style={{ fontFamily: "'Playfair Display', serif" }}>
              {content.section5.title}
            </h2>
            <div className="space-y-4 mb-8">
              <p className={bodyClass} style={{ fontFamily: "'Cormorant', serif" }}>
                {content.section5.intro}
              </p>
              <p className={bodyClass} style={{ fontFamily: "'Cormorant', serif" }}>
                {content.section5.description}
              </p>
              <p className={bodyClass} style={{ fontFamily: "'Cormorant', serif" }}>
                {content.section5.additional}
              </p>
            </div>
            <Link
              to="/international-patients"
              className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#c19d30] font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.section5.cta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: REAL CASES */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto">
            <p className={sectionLabelClass} style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              {content.section6.eyebrow}
            </p>
            <h2 className={titleClass + ' mb-6'} style={{ fontFamily: "'Playfair Display', serif" }}>
              {content.section6.title}
            </h2>
            <p className={bodyClass + ' mb-8'} style={{ fontFamily: "'Cormorant', serif" }}>
              {content.section6.intro}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#c19d30] font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.section6.cta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-20 lg:py-32 bg-[#f7fafc]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className={titleClass + ' mb-6'} style={{ fontFamily: "'Playfair Display', serif" }}>
              {content.section7.title}
            </h2>
            <p className={bodyClass + ' mb-8'} style={{ fontFamily: "'Cormorant', serif" }}>
              {content.section7.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.section7.primaryCta}
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition text-center"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.section7.secondaryCta}
              </Link>
            </div>

            <p
              className="text-sm text-gray-500 italic"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.section7.note}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OralSurgery;
