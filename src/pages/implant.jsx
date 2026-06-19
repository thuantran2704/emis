import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle } from 'lucide-react';
import implantContent from '../Translations/implantContent';
import xrayImg from '../pics/anh_chup_xquang_implant.jpg';
import patient1 from '../pics/patient1.jpg';
import patient2 from '../pics/patient2.jpg';
import implantIllustration from '../pics/implant-illustration.jpg';
import straumannImg from '../pics/straumann-implant.jpg';
import hiossenImg from '../pics/hiossen-implant.jpg';
import osstemImg from '../pics/osstem-implant.jpg';
import etkImg from '../pics/etk-implant.jpg';
import biotemImg from '../pics/biotem-implant.jpg';

const systemCards = [
  { name: 'Straumann', image: straumannImg },
  { name: 'Hiossen', image: hiossenImg },
  { name: 'Osstem', image: osstemImg },
  { name: 'ETK', image: etkImg },
  { name: 'Biotem', image: biotemImg },
];

const ImplantGuide = () => {
  const language = useSelector((state) => state.language.language);
  const content = implantContent[language];

  return (
    <main className="bg-[#f7f2e7] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20 items-center">
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-[16/9] lg:aspect-auto">
                <img
                  src={xrayImg}
                  alt="Dental implant X-ray review"
                  className="w-full h-full lg:h-[460px] object-cover object-center"
                />
              </div>
            </div>

            <div className="order-2 lg:order-1 space-y-6">
              <p
                className="uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                IMPLANT SOLUTIONS
              </p>

              <h1
                className="text-4xl md:text-5xl text-[#2a3439] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {content.section1.title}
              </h1>

              <p
                className="text-lg text-gray-500 leading-relaxed max-w-md"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
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
                  className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition text-center"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {content.section1.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              IMPLANT SUITABILITY
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.section2.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.section2.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f7f2e7] rounded-2xl p-8">
              <div className="space-y-3">
                {content.section2.checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C5AF73] mt-1 flex-shrink-0" />
                    <span
                      className="text-[#2a3439] text-sm lg:text-base"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eadfc9]/50">
              <h3
                className="text-2xl text-[#2a3439] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {content.section2.whyMatters}
              </h3>
              <p
                className="text-gray-500 leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {content.section2.whyContent}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-32 bg-[#f7f2e7]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              TREATMENT JOURNEY
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.section3.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.section3.intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl overflow-hidden shadow-sm h-[460px] bg-white">
              <img
                src={implantIllustration}
                alt="Implant illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eadfc9]/50 h-full flex flex-col justify-center">
              <p
                className="uppercase tracking-[0.25em] text-[#C5AF73] text-xs font-semibold mb-4"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.section3.summaryEyebrow}
              </p>
              <h3
                className="text-2xl text-[#2a3439] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {content.section3.summaryTitle}
              </h3>
              <p
                className="text-gray-500 leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {content.section3.summaryText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              TREATMENT OPTIONS
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.section4.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.section4.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.section4.options.map((option, index) => (
              <div key={index} className="bg-[#f7f2e7] rounded-2xl p-8 border border-[#eadfc9]/50">
                <h3
                  className="text-2xl text-[#2a3439] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {option.title}
                </h3>
                <p
                  className="text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {option.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="py-32 bg-[#f7f2e7]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              TREATMENT PLANNING
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.section5.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.section5.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {content.section5.evaluations.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-2xl p-6 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#C5AF73] mt-1 flex-shrink-0" />
                <span
                  className="text-[#2a3439] text-sm"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-base lg:text-lg text-gray-500 leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-[#eadfc9]/50"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {content.section5.note}
          </p>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              IMPLANT SYSTEMS
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.section6.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.section6.intro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {systemCards.map((system) => (
              <div key={system.name} className="bg-[#f7f2e7] rounded-2xl overflow-hidden shadow-sm border border-[#eadfc9]/50">
                <div className="h-40 overflow-hidden">
                  <img
                    src={system.image}
                    alt={system.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <p
                    className="text-[#2a3439] text-sm font-semibold text-center"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {system.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-base lg:text-lg text-gray-500 leading-relaxed bg-[#f7f2e7] p-6 rounded-2xl border border-[#eadfc9]/50"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {content.section6.note}
          </p>
        </div>
      </section>

      {/* SECTION 7 */}
      <section className="py-32 bg-[#f7f2e7]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              OVERSEAS PATIENTS
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.section7.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.section7.intro}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-sm h-[460px]">
              <img
                src={patient2}
                alt="Patient consultation and travel planning"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eadfc9]/50">
              <h3
                className="text-2xl text-[#2a3439] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {content.section7.costSection}
              </h3>
              <p
                className="text-gray-500 leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {content.section7.costContent}
              </p>
              <div className="mt-6">
                <Link
                  to="/visitor-program"
                  className="inline-flex px-6 py-3 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {content.section7.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              REAL PATIENT CASES
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.section8.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.section8.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm h-[360px]">
              <img
                src={patient1}
                alt="Implant patient case"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm h-[360px]">
              <img
                src={implantIllustration}
                alt="Implant case illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/doctors"
              className="inline-flex px-6 py-3 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-[#d4af37] hover:text-white transition"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.section8.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 */}
      <section className="py-32 bg-[#f7f2e7]">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p
            className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            FINAL CTA
          </p>
          <h2
            className="text-4xl text-[#2a3439] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.section9.title}
          </h2>
          <p
            className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {content.section9.intro}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.section9.primaryCta}
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-white transition"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.section9.secondaryCta}
            </Link>
          </div>

          <p
            className="mt-8 text-sm text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            {content.section9.note}
          </p>
        </div>
      </section>
    </main>
  );
};

export default ImplantGuide;
