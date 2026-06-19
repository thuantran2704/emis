import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import drTuContent from '../Translations/drTuContent';
import doctorPortrait from '../pics/dr-tu-potrait.jpg';
import consultImage from '../pics/doctor-reviewing-x-ray-with-patient-explaining-treatment.jpg';
import teamImage from '../pics/doctor-discussing-case-with-each-other-at-work-desk.jpg';
import planningImage from '../pics/dr-tu-working.jpg';

const SectionLabel = ({ children }) => (
  <p
    className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
  >
    {children}
  </p>
);

const SectionTitle = ({ children }) => (
  <h2
    className="text-3xl md:text-4xl text-[#2a3439] mb-6"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    {children}
  </h2>
);

export default function DrTuPage() {
  const language = useSelector((state) => state.language.language);
  const content = drTuContent[language] || drTuContent.english;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7fafc] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-[45%_55%] gap-10 items-center">
          <div className="order-2 lg:order-1">
            <SectionLabel>{content.hero.sectionLabel}</SectionLabel>
            <h1
              className="text-4xl md:text-5xl text-[#2a3439] mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.hero.name}
            </h1>
            <p
              className="text-lg text-[#C5AF73] mb-2"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.hero.professionalTitle}
            </p>
            <p
              className="text-sm text-[#2a3439] mb-6"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.hero.specialties}
            </p>
            <p
              className="text-lg text-gray-500 leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.hero.summary}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {content.hero.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f1f5f9] rounded-xl px-4 py-3 border border-[#dbe4ec]"
                >
                  <p
                    className="text-sm text-[#2a3439]"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.hero.primaryCta}
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-[#eef3f7] transition"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-sm h-[480px] md:h-[560px]">
              <img
                src={doctorPortrait}
                alt="Dr. Tran Minh Tu portrait"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f1f5f9]">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionLabel>{content.background.sectionLabel}</SectionLabel>
            <SectionTitle>{content.background.title}</SectionTitle>
            <p
              className="text-lg text-gray-500 leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.background.intro}
            </p>

            <h3
              className="text-xl text-[#2a3439] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.background.educationTitle}
            </h3>
            <div className="space-y-3 mb-8">
              {content.background.education.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-[#C5AF73] mt-0.5">●</span>
                  <span
                    className="text-sm text-[#2a3439]"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <h3
              className="text-xl text-[#2a3439] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.background.developmentTitle}
            </h3>
            <div className="space-y-3">
              {content.background.development.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-[#C5AF73] mt-0.5">●</span>
                  <span
                    className="text-sm text-[#2a3439]"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden shadow-sm h-[250px]">
              <img
                src={consultImage}
                alt="Doctor consultation with treatment explanation"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm h-[250px]">
              <img
                src={teamImage}
                alt="Clinical team discussion and planning"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionLabel>{content.practice.sectionLabel}</SectionLabel>
          <SectionTitle>{content.practice.title}</SectionTitle>
          <p
            className="text-lg text-gray-500 leading-relaxed mb-8 max-w-3xl"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {content.practice.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {content.practice.locations.map((loc, idx) => (
              <div key={idx} className="rounded-2xl p-7 bg-[#f1f5f9] border border-[#dbe4ec]">
                <h3
                  className="text-xl text-[#2a3439] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {loc.name}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {loc.description}
                </p>
              </div>
            ))}
          </div>

          <h3
            className="text-2xl text-[#2a3439] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.practice.focusTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.practice.focusCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-[#f7fafc] border border-[#dbe4ec]"
              >
                <h4
                  className="text-lg text-[#2a3439] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {card.title}
                </h4>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f1f5f9]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-3xl mb-10">
            <SectionLabel>{content.philosophy.sectionLabel}</SectionLabel>
            <SectionTitle>{content.philosophy.title}</SectionTitle>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.philosophy.intro}
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm h-[300px] md:h-[360px] mb-10">
            <img
              src={planningImage}
              alt="Dr. Tu reviewing CBCT and treatment planning"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {content.philosophy.principles.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-white border border-[#dbe4ec]"
              >
                <h3
                  className="text-lg text-[#2a3439] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionLabel>{content.international.sectionLabel}</SectionLabel>
            <SectionTitle>{content.international.title}</SectionTitle>
            <p
              className="text-lg text-gray-500 leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.international.intro}
            </p>

            <h3
              className="text-xl text-[#2a3439] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.international.languagesTitle}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {content.international.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#f1f5f9] border border-[#dbe4ec] px-4 py-3"
                >
                  <span
                    className="text-sm text-[#2a3439]"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {lang}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm h-[420px]">
            <img
              src={consultImage}
              alt="Remote treatment planning consultation"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <SectionLabel>{content.decision.sectionLabel}</SectionLabel>
          <SectionTitle>{content.decision.title}</SectionTitle>
          <p
            className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-4"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {content.decision.intro}
          </p>
          <p
            className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {content.decision.support}
          </p>

          <h3
            className="text-2xl text-[#2a3439] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.decision.stepsTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {content.decision.steps.map((step, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-white border border-[#dbe4ec]">
                <p
                  className="text-[#C5AF73] text-xs tracking-[0.25em] mb-3 font-semibold"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  STEP {idx + 1}
                </p>
                <p
                  className="text-sm text-[#2a3439]"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-5">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.decision.primaryCta}
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-[#eef3f7] transition"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.decision.secondaryCta}
            </Link>
          </div>

          <p
            className="text-sm text-gray-400"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            {content.decision.note}
          </p>
        </div>
      </section>
    </main>
  );
}
