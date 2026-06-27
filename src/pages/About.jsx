import React from 'react';
import { Link } from 'react-router-dom';
import aboutContent from '../Translations/aboutContent';
import consultationImage from '../pics/doctor-explaining-procedure-to-patient.jpg';
import planningImage from '../pics/dr-x-ray-consultation.jpg';
import technologyImage from '../pics/measuring-result-cbct-x-ray-patient-smiling.jpg';
import teamImage from '../pics/healthcare-team.jpg';
import internationalImage from '../pics/Better_emis_hall.jpeg';
import safetyImage from '../pics/sterile-room-phong-khu-trung.jpg';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const About = () => {
  const language = useSelector((state) => state.language.language);
  const content = aboutContent[language];

  const SectionLabel = ({ children }) => (
    <p
      className="uppercase tracking-[0.3em] text-[#C5AF73] mb-6 text-[10px] font-semibold"
    >
      {children}
    </p>
  );

  const SectionTitle = ({ children }) => (
    <h2
      className="text-[1.75rem] md:text-[2.1rem] text-[#2a3439] mb-8"
    >
      {children}
    </h2>
  );

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7fafc] pt-20">
      <Helmet>
        <title>{content.metaTitle || content.heroTitle}</title>
        <meta name="description" content={content.metaDescription || ''} />
      </Helmet>

      {/* HERO */}
      <section className="py-36 px-8 max-w-4xl mx-auto text-center">
        <p
          className="uppercase tracking-[0.3em] text-[#C5AF73] mb-7 text-[10px] font-semibold"
        >
          Who We Are
        </p>
        <h1
          className="text-3xl md:text-4xl text-[#2a3439] mb-10 leading-tight"
        >
          {content.heroTitle}
        </h1>
        <p
          className="text-[15px] md:text-[17px] text-gray-500 mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          {content.heroSubtitle}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
          >
            {content.heroPrimaryCTA}
          </Link>
          <Link
            to="/dr-son"
            className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-white transition"
          >
            {content.heroSecondaryCTA}
          </Link>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-32 max-md:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-8 space-y-12">
          <div>
            <SectionLabel>Our Approach</SectionLabel>
            <SectionTitle>{content.approachTitle}</SectionTitle>
            <p
              className="text-gray-500 leading-relaxed text-[15px]"
            >
              {content.approachText}
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[420px]">
            <img
              src={consultationImage}
              alt="Patient care consultation"
              className="w-full h-full object-cover object-[center_58%] md:object-center"
            />
          </div>
        </div>
      </section>

      {/* WHY PLANNING MATTERS */}
      <section className="py-32 max-md:py-36 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto px-8 space-y-12">
          <div>
            <SectionLabel>Planning</SectionLabel>
            <SectionTitle>{content.planningTitle}</SectionTitle>
            <div className="space-y-5">
              {content.planningBullets.map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-[#dbe4ec]">
                  <h3
                    className="text-[1.05rem] text-[#2a3439] mb-2.5"
                  >
                    {b.title}
                  </h3>
                  <p
                    className="text-[13px] text-gray-500 leading-relaxed"
                  >
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[480px]">
            <img
              src={planningImage}
              alt="Clinical treatment planning"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & SAFETY */}
      <section className="py-32 max-md:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-8 space-y-12">
          <div>
            <SectionLabel>Technology</SectionLabel>
            <SectionTitle>{content.technologyTitle}</SectionTitle>
            <p
              className="text-gray-500 leading-relaxed text-[15px] mb-10"
            >
              {content.technologyIntro}
            </p>
            <div className="space-y-4">
              {content.technologyBullets.map((t, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <span className="text-[#C5AF73] text-xs">●</span>
                  <span
                    className="text-[13px] text-[#2a3439]"
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[460px]">
            <img
              src={technologyImage}
              alt={content.technologyImageAlt || 'Clinical treatment room'}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-32 max-md:py-36 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto px-8 space-y-12">
          <div>
            <SectionLabel>Our Team</SectionLabel>
            <SectionTitle>{content.teamTitle}</SectionTitle>
            <p
              className="text-gray-500 leading-relaxed text-[15px] mb-12"
            >
              {content.teamIntro}
            </p>
            <div className="space-y-6">
              {content.teamMembers.map((m, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3
                    className="text-[1.2rem] text-[#2a3439] mb-1.5"
                  >
                    {m.name}
                  </h3>
                  <p
                    className="text-xs text-[#C5AF73] font-semibold mb-3 uppercase tracking-widest"
                  >
                    {m.role}
                  </p>
                  <p
                    className="text-[13px] text-gray-500 leading-relaxed"
                  >
                    {m.description}
                  </p>
                  {m.cta && (
                    <div className="mt-5">
                      <Link
                        to="/contact"
                        className="inline-flex px-5 py-2.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-[#d4af37] hover:text-white transition"
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
              src={teamImage}
              alt="Professional clinic team environment"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* SUPPORT FOR OVERSEAS */}
      <section className="py-32 max-md:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-8 space-y-12">
          <div>
            <SectionLabel>International Patients</SectionLabel>
            <SectionTitle>{content.internationalTitle}</SectionTitle>
            <p
              className="text-gray-500 leading-relaxed text-[15px] mb-10"
            >
              {content.internationalIntro}
            </p>
            <div className="space-y-4">
              {content.internationalBullets.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#eef3f7] rounded-xl px-5 py-4 border border-[#dbe4ec]"
                >
                  <span className="text-[#C5AF73] text-xs">●</span>
                  <span className="text-[13px] text-[#2a3439]">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[220px] md:h-[420px]">
            <img
              src={internationalImage}
              alt="EMIS clinic waiting room"
              className="block w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* TRUST & TRANSPARENCY */}
      <section className="py-32 max-md:py-36 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto px-8 space-y-12">
          <div>
            <SectionLabel>Trust & Transparency</SectionLabel>
            <SectionTitle>{content.trustTitle}</SectionTitle>
            <p
              className="text-gray-500 leading-relaxed text-[15px] mb-10"
            >
              {content.trustIntro || 'We believe patients should have access to clear information before making treatment decisions.'}
            </p>
            <div className="space-y-4">
              {content.trustBullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#C5AF73] mt-0.5">✓</span>
                  <span
                    className="text-[13px] text-[#2a3439] leading-relaxed"
                  >
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm h-[420px]">
            <img
              src={safetyImage}
              alt="Clinical sterilization and safety protocols"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* START STEPS */}
      <section className="py-32 max-md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <SectionLabel>Getting Started</SectionLabel>
          <SectionTitle>{content.startTitle}</SectionTitle>

          <div className="mt-16 grid md:grid-cols-3 gap-7">
            {content.steps.map((s, i) => (
              <div key={i} className="rounded-2xl p-9 bg-[#eef3f7] border border-[#dbe4ec]">
                <p
                  className="text-[#C5AF73] text-xs tracking-[0.25em] mb-4 font-semibold"
                >
                  {s.step}
                </p>
                <h3
                  className="text-[1.2rem] text-[#2a3439] mb-3.5"
                >
                  {s.title}
                </h3>
                <p
                  className="text-[13px] text-gray-500 leading-relaxed"
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-10 text-[13px] text-gray-400"
          >
            {content.note}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
            >
              {content.startPrimaryCTA}
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-[#eef3f7] transition"
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
