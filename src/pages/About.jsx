import React from 'react';
import { Link } from 'react-router-dom';
import aboutContent from '../Translations/aboutContent';
import emishall from '../pics/Phong-cho-waiting-room-Emis.jpg';
import patient1 from '../pics/patient1.jpg';
import patient2 from '../pics/patient2.jpg';
import seal from '../pics/sealer.jpg';
import phongkham from '../pics/phong-kham.jpg';
import reception from '../pics/reception.jpg';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const About = () => {
  const language = useSelector((state) => state.language.language);
  const content = aboutContent[language] || aboutContent.vietnamese;

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

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7fafc] dark:bg-[#0f1419] pt-20">
      <Helmet>
        <title>{content.metaTitle || content.heroTitle}</title>
        <meta name="description" content={content.metaDescription || ''} />
      </Helmet>

      {/* HERO */}
      <section className="py-32 px-8 max-w-4xl mx-auto text-center">
        <p
          className="uppercase tracking-[0.3em] text-[#C5AF73] mb-6 text-xs font-semibold"
          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
          Who We Are
        </p>
        <h1
          className="text-4xl md:text-5xl text-[#2a3439] mb-8 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {content.heroTitle}
        </h1>
        <p
          className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Cormorant', serif" }}
        >
          {content.heroSubtitle}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            {content.heroPrimaryCTA}
          </Link>
          <Link
            to="/dr-son"
            className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-white transition"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            {content.heroSecondaryCTA}
          </Link>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-28 max-md:py-36 bg-white dark:bg-[#1a2332]">
        <div className="max-w-4xl mx-auto px-8 space-y-10">
          <div>
            <SectionLabel>Our Approach</SectionLabel>
            <SectionTitle>{content.approachTitle}</SectionTitle>
            <p
              className="text-gray-500 leading-relaxed text-lg"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.approachText}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[420px]">
            <img
              src={patient2}
              alt="Patient care consultation"
              className="w-full h-full object-cover object-[center_58%] md:object-center"
            />
          </div>
        </div>
      </section>

      {/* WHY PLANNING MATTERS */}
      <section className="py-28 max-md:py-36 bg-[#f1f5f9] dark:bg-[#0f1419]">
        <div className="max-w-4xl mx-auto px-8 space-y-10">
          <div>
            <SectionLabel>Planning</SectionLabel>
            <SectionTitle>{content.planningTitle}</SectionTitle>
            <div className="space-y-5">
              {content.planningBullets.map((b, i) => (
                <div key={i} className="bg-white dark:bg-[#2d3e52] rounded-2xl p-6 shadow-sm border border-[#dbe4ec] dark:border-[#4a5f7a]">
                  <h3
                    className="text-lg text-[#2a3439] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[480px]">
            <img
              src={patient1}
              alt="Clinical treatment planning"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & SAFETY */}
      <section className="py-28 max-md:py-36 bg-white dark:bg-[#1a2332]">
        <div className="max-w-4xl mx-auto px-8 space-y-10">
          <div>
            <SectionLabel>Technology</SectionLabel>
            <SectionTitle>{content.technologyTitle}</SectionTitle>
            <p
              className="text-gray-500 leading-relaxed text-lg mb-8"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.technologyIntro}
            </p>
            <div className="space-y-3">
              {content.technologyBullets.map((t, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-[#C5AF73] text-xs">●</span>
                  <span
                    className="text-sm text-[#2a3439]"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[460px]">
            <img
              src={phongkham}
              alt={content.technologyImageAlt || 'Clinical treatment room'}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 max-md:py-36 bg-[#f1f5f9] dark:bg-[#0f1419]">
        <div className="max-w-4xl mx-auto px-8 space-y-10">
          <div>
            <SectionLabel>Our Team</SectionLabel>
            <SectionTitle>{content.teamTitle}</SectionTitle>
            <p
              className="text-gray-500 leading-relaxed mb-10"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.teamIntro}
            </p>
            <div className="space-y-5">
              {content.teamMembers.map((m, idx) => (
                <div key={idx} className="bg-white dark:bg-[#2d3e52] rounded-2xl p-7 shadow-sm">
                  <h3
                    className="text-xl text-[#2a3439] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {m.name}
                  </h3>
                  <p
                    className="text-xs text-[#C5AF73] font-semibold mb-3 uppercase tracking-widest"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {m.role}
                  </p>
                  <p
                    className="text-sm text-gray-500 leading-relaxed"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {m.description}
                  </p>
                  {m.cta && (
                    <div className="mt-5">
                      <Link
                        to="/contact"
                        className="inline-flex px-5 py-2.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-[#d4af37] hover:text-white transition"
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                      >
                        {m.cta}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[500px]">
            <img
              src={reception}
              alt="Professional clinic team environment"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* SUPPORT FOR OVERSEAS */}
      <section className="py-28 max-md:py-36 bg-white dark:bg-[#1a2332]">
        <div className="max-w-4xl mx-auto px-8 space-y-10">
          <div>
            <SectionLabel>International Patients</SectionLabel>
            <SectionTitle>{content.internationalTitle}</SectionTitle>
            <p
              className="text-gray-500 leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.internationalIntro}
            </p>
            <div className="space-y-3">
              {content.internationalBullets.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#eef3f7] dark:bg-[#2d3e52] rounded-xl px-5 py-3.5 border border-[#dbe4ec] dark:border-[#4a5f7a]"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  <span className="text-[#C5AF73] text-xs">●</span>
                  <span className="text-sm text-[#2a3439]">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[420px]">
            <img
              src={emishall}
              alt="EMIS clinic waiting room"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* TRUST & TRANSPARENCY */}
      <section className="py-28 max-md:py-36 bg-[#f1f5f9] dark:bg-[#0f1419]">
        <div className="max-w-4xl mx-auto px-8 space-y-10">
          <div>
            <SectionLabel>Trust & Transparency</SectionLabel>
            <SectionTitle>{content.trustTitle}</SectionTitle>
            <p
              className="text-gray-500 leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.trustIntro || 'We believe patients should have access to clear information before making treatment decisions.'}
            </p>
            <div className="space-y-3">
              {content.trustBullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#C5AF73] mt-0.5">✓</span>
                  <span
                    className="text-sm text-[#2a3439] leading-relaxed"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[420px]">
            <img
              src={seal}
              alt="Clinical sterilization and safety protocols"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* START STEPS */}
      <section className="py-28 max-md:py-36 bg-white dark:bg-[#1a2332]">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <SectionLabel>Getting Started</SectionLabel>
          <SectionTitle>{content.startTitle}</SectionTitle>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {content.steps.map((s, i) => (
              <div key={i} className="rounded-2xl p-8 bg-[#eef3f7] dark:bg-[#2d3e52] border border-[#dbe4ec] dark:border-[#4a5f7a]">
                <p
                  className="text-[#C5AF73] text-xs tracking-[0.25em] mb-4 font-semibold"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {s.step}
                </p>
                <h3
                  className="text-xl text-[#2a3439] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-sm text-gray-400"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            {content.note}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.startPrimaryCTA}
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] dark:text-white text-sm font-semibold hover:bg-[#eef3f7] dark:hover:bg-[#2d3e52] transition"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.startSecondaryCTA || 'Talk With Our Team'}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
