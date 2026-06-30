import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import doctorsContent from '../Translations/doctorsContent';
import patient2 from '../pics/patient2.jpg';
import ContactForm from '../components/ContactForm.jsx';
import consultationImage from '../pics/dr-x-ray-consultation.jpg';
import { DOCTORS, getDoctorTranslation } from '../data/doctors';

const Doctors = () => {
  const language = useSelector((state) => state.language.language);
  const content = doctorsContent[language] || doctorsContent.english;

  return (
    <main className="bg-[#f7f2e7] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20 items-center">

            {/* IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-[16/9] lg:aspect-auto">
                <img
                  src={consultationImage}
                  alt="EMIS Clinical Team"
                  className="w-full h-full lg:h-[460px] object-cover object-center"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="order-2 lg:order-1 space-y-6">
              <p
                className="uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold"
              >
                {content.hero.eyebrow}
              </p>

              <h1
                className="text-4xl md:text-5xl text-[#2a3439] leading-tight"
              >
                {content.hero.title}
              </h1>

              <p
                className="text-lg text-gray-500 leading-relaxed max-w-md"
              >
                {content.hero.subtitle}
              </p>

              <div className="space-y-2.5 py-2">
                {content.hero.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[#C5AF73] text-xs">●</span>
                    <span className="text-[#2a3439] text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
                >
                  {content.hero.primaryCTA}
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition text-center"
                >
                  {content.hero.secondaryCTA}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">

          <div className="max-w-2xl mx-auto text-center mb-24">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
            >
              {content.journeySection.eyebrow}
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
            >
              {content.journeySection.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
            >
              {content.journeySection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.journeyCards.map((card, index) => (
              <div key={index} className="bg-[#f7f2e7] rounded-2xl p-8">
                <p
                  className="text-[#C5AF73] text-xs tracking-[0.25em] mb-5 font-semibold"
                >
                  {card.number}
                </p>
                <h3
                  className="text-xl text-[#2a3439] mb-4"
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DOCTOR SECTION */}
      <section className="py-32 bg-[#f7f2e7]">
        <div className="max-w-5xl mx-auto px-8">

          <div className="max-w-2xl mx-auto text-center mb-24">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
            >
              {content.doctorSection.eyebrow}
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
            >
              {content.doctorSection.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
            >
              {content.doctorSection.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {DOCTORS.map((doctor) => {
              const t = getDoctorTranslation(doctor, language);
              return (
              <div
                key={doctor.id}
                className="h-full bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col max-w-xl mx-auto"
              >
                <img
                  src={doctor.portrait}
                  alt={t.name}
                  className="w-full h-[320px] lg:h-[300px] object-cover object-[center_20%]"
                />
                <div className="p-7 lg:p-8 flex flex-col flex-grow">
                  <h3
                    className="text-xl lg:text-2xl text-[#2a3439] mb-1.5"
                  >
                    {t.name}
                  </h3>
                  <p
                    className="text-[#C5AF73] text-sm font-semibold mb-2"
                  >
                    {t.role}
                  </p>
                  <p
                    className="text-[10px] lg:text-xs uppercase tracking-widest text-gray-400 mb-5 lg:mb-6"
                  >
                    {t.specialties}
                  </p>
                  <p
                    className="text-sm text-gray-500 leading-relaxed mb-3"
                  >
                    {t.descriptionOne}
                  </p>
                  <p
                    className="text-sm text-gray-500 leading-relaxed mb-6 lg:mb-7"
                  >
                    {t.descriptionTwo}
                  </p>
                  <div className="space-y-2 mb-6 lg:mb-7">
                    {t.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-[#C5AF73] text-xs">●</span>
                        <span
                          className="text-[#2a3439] text-sm"
                        >
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    {doctor.slug && (
                      <Link
                        to={doctor.slug}
                        className="inline-flex px-5 py-2.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-[#d4af37] hover:text-white transition"
                      >
                        {t.cta}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DECISION SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">

        {/* Background image: blurred at edges, sharp and visible in the center */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
          <div className="absolute inset-y-0 left-0 right-0 lg:right-[42%]">
            <img
              src={patient2}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
              style={{ opacity: 0.45 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 62% 58% at 50% 50%, transparent 0%, transparent 34%, rgba(255,255,255,0.52) 62%, rgba(255,255,255,0.9) 82%, #ffffff 100%)',
              }}
            />
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-start justify-items-center lg:justify-items-stretch">

            {/* LEFT */}
            <div className="w-full max-w-2xl space-y-5 lg:space-y-6 text-center lg:text-left">
              <p
                className="uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold"
              >
                {content.decisionSection.eyebrow}
              </p>

              <h2
                className="text-4xl text-[#2a3439] leading-tight"
              >
                {content.decisionSection.title}
              </h2>

              <p
                className="text-lg text-gray-500 leading-relaxed"
              >
                {content.decisionSection.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
                >
                  {content.decisionSection.primaryCTA}
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition text-center"
                >
                  {content.decisionSection.secondaryCTA}
                </Link>
              </div>

              <div className="pt-4">
                <p
                  className="uppercase tracking-[0.25em] text-[#C5AF73] mb-5 text-xs font-semibold"
                >
                  {content.decisionSection.stepsTitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {content.decisionSection.steps.map((step, index) => (
                    <div key={index} className="bg-[#f7f2e7] rounded-2xl p-4 sm:p-5">
                      <p
                        className="text-[#C5AF73] text-xs tracking-[0.2em] mb-3 font-semibold"
                      >
                        {step.number}
                      </p>
                      <h3
                        className="text-base text-[#2a3439]"
                      >
                        {step.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              <p
                className="text-xs text-gray-400 leading-relaxed pt-1"
              >
                {content.decisionSection.note}
              </p>
            </div>

            {/* RIGHT — contact form sits on top of everything */}
            <div className="relative z-10 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0">
              <ContactForm embedded />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Doctors;
