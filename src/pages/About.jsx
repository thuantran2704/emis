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

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7] pt-20">
      <Helmet>
        <title>{content.metaTitle || content.heroTitle}</title>
        <meta name="description" content={content.metaDescription || ''} />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4b4b8f] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          {content.heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-[#6b7280] mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Cormorant', serif" }}>
          {content.heroSubtitle}
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link to="/contact" className="inline-block bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-3 px-8 rounded-full transition text-lg shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
            {content.primaryCTA}
          </Link>

          <Link to="/dr-son" className="inline-block bg-white border border-[#d4af37] text-[#4b4b8f] font-semibold py-3 px-6 rounded-full shadow-sm hover:shadow-md">
            {content.secondaryCTA}
          </Link>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-6 border-b-2 border-[#d4af37] inline-block pb-2">{content.approachTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2 items-start mt-6">
            <div>
              <p className="text-base text-[#4b5563] md:text-lg" style={{ fontFamily: "'Cormorant', serif" }}>{content.approachText}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={patient2} alt="Patient care consultation" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY PLANNING MATTERS */}
      <section className="py-16 bg-[#fcfbf8]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-6 border-b-2 border-[#d4af37] inline-block pb-2">{content.planningTitle}</h2>

          <div className="grid gap-6 md:grid-cols-2 mt-6 items-start">
            <div className="grid gap-6 md:grid-cols-1">
              {content.planningBullets.map((b, i) => (
                <div key={i} className="rounded-2xl bg-white p-6 border border-[#eadfc9] shadow-sm">
                  <h3 className="text-xl font-semibold text-[#4b4b8f] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={patient1} alt="Clinical treatment planning" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & SAFETY */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-6 border-b-2 border-[#d4af37] inline-block pb-2">{content.technologyTitle}</h2>

          <div className="grid gap-6 md:grid-cols-2 mt-6 items-start">
            <div>
              <p className="text-base text-[#4b5563] md:text-lg" style={{ fontFamily: "'Cormorant', serif" }}>{content.technologyIntro}</p>

              <ul className="mt-4 space-y-2 text-[#4b5563]">
                {content.technologyBullets.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#d4af37] mt-1">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={phongkham} alt={content.technologyImageAlt || 'Clinical treatment room'} className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 bg-[#fffaf0]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-6 border-b-2 border-[#d4af37] inline-block pb-2">{content.teamTitle}</h2>
          <p className="max-w-3xl text-[#4b5563] mb-8">{content.teamIntro}</p>

          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={reception} alt="Professional clinic team environment" className="w-full h-80 object-cover" />
            </div>
            <div className="space-y-4">
              {content.teamMembers.map((m, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm text-left">
                  <h3 className="text-xl font-semibold text-[#4b4b8f]">{m.name}</h3>
                  <p className="text-sm text-[#4b5563] mb-3 font-medium">{m.role}</p>
                  <p className="text-sm text-[#4b5563]">{m.description}</p>
                  {m.cta && (
                    <div className="mt-4">
                      <Link to={m.cta.href} className="inline-block bg-[#d4af37] text-white px-4 py-2 rounded-full text-sm hover:bg-[#c19d30]">{m.cta.text}</Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT FOR OVERSEAS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-6 border-b-2 border-[#d4af37] inline-block pb-2">{content.internationalTitle}</h2>
          
          <div className="grid gap-6 md:grid-cols-2 items-start mt-6">
            <div>
              <p className="text-[#4b5563] max-w-3xl mb-6">{content.internationalIntro}</p>
              <ul className="space-y-3 text-[#4b5563]">
                {content.internationalBullets.map((b, i) => (
                  <li key={i} className="bg-[#fffaf0] p-3 rounded-lg border border-[#eadfc9]">{b}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={emishall} alt="EMIS clinic waiting room" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & TRANSPARENCY */}
      <section className="py-16 bg-[#fcfbf8]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-6 border-b-2 border-[#d4af37] inline-block pb-2">{content.trustTitle}</h2>
          
          <div className="grid gap-6 md:grid-cols-2 items-start mt-6">
            <div>
              <p className="text-[#4b5563] mb-4">{content.trustIntro || 'We believe patients should have access to clear information before making treatment decisions.'}</p>
              <ul className="space-y-2 text-[#4b5563]">
                {content.trustBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4af37] mt-1">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={seal} alt="Clinical sterilization and safety protocols" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* START STEPS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-6">{content.startTitle}</h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {content.steps.map((s, i) => (
              <div key={i} className="rounded-2xl p-6 bg-[#fffaf0] border border-[#eadfc9] shadow-sm">
                <div className="text-2xl font-bold text-[#d4af37] mb-2">{s.step}</div>
                <div className="font-semibold text-lg text-[#4b4b8f] mb-2">{s.title}</div>
                <p className="text-sm text-[#4b5563]">{s.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[#6b7280]">{content.note}</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link to="/contact" className="inline-block bg-[#d4af37] text-white px-6 py-3 rounded-full font-semibold">{content.primaryCTA}</Link>
            <Link to="/contact" className="inline-block bg-white border border-[#d4af37] px-6 py-3 rounded-full font-semibold">{content.secondaryContactCTA || 'Talk With Our Team'}</Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
