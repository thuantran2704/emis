import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import drTuPortrait from '../pics/dr-tu-potrait.jpg';
import doctorsContent from '../Translations/doctorsContent';
import patient2 from '../pics/patient2.jpg';
import ContactForm from '../components/ContactForm.jsx';
import consultationImage from '../pics/dr-x-ray-consultation.jpg';
import drVanPortrait from '../pics/dr-van-potrait.jpg';

const Doctors = () => {
  const language = useSelector((state) => state.language.language);
  const content = doctorsContent[language] || doctorsContent.english;
  const doctorImages = [drTuPortrait, drVanPortrait];

  return (
    <main className="bg-[#f7f2e7] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center py-24">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={patient2}
                  alt="EMIS Clinical Team"
                  className="w-full h-[460px] object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="order-2 lg:order-1 space-y-6">
              <p
                className="uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.hero.eyebrow}
              </p>

              <h1
                className="text-4xl md:text-5xl text-[#2a3439] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {content.hero.title}
              </h1>

              <p
                className="text-lg text-gray-500 leading-relaxed max-w-md"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {content.hero.subtitle}
              </p>

              <div className="space-y-2.5 py-2">
                {content.hero.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
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
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {content.hero.primaryCTA}
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition text-center"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
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
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.journeySection.eyebrow}
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.journeySection.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.journeySection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.journeyCards.map((card, index) => (
              <div key={index} className="bg-[#f7f2e7] rounded-2xl p-8">
                <p
                  className="text-[#C5AF73] text-xs tracking-[0.25em] mb-5 font-semibold"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {card.number}
                </p>
                <h3
                  className="text-xl text-[#2a3439] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {card.title}
                </h3>
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

      {/* DOCTOR SECTION */}
      <section className="py-32 bg-[#f7f2e7]">
        <div className="max-w-6xl mx-auto px-8">

          <div className="max-w-2xl mx-auto text-center mb-24">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.doctorSection.eyebrow}
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.doctorSection.title}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.doctorSection.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {content.doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col"
              >
                <img
                  src={doctorImages[index]}
                  alt={doctor.name}
                  className="w-full h-[380px] object-cover object-[center_20%]"
                />
                <div className="p-9 flex flex-col flex-grow">
                  <h3
                    className="text-2xl text-[#2a3439] mb-1.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {doctor.name}
                  </h3>
                  <p
                    className="text-[#C5AF73] text-sm font-semibold mb-2"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {doctor.role}
                  </p>
                  <p
                    className="text-xs uppercase tracking-widest text-gray-400 mb-7"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {doctor.specialties}
                  </p>
                  <p
                    className="text-sm text-gray-500 leading-relaxed mb-3"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {doctor.descriptionOne}
                  </p>
                  <p
                    className="text-sm text-gray-500 leading-relaxed mb-8"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {doctor.descriptionTwo}
                  </p>
                  <div className="space-y-2.5 mb-8">
                    {doctor.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-[#C5AF73] text-xs">●</span>
                        <span
                          className="text-[#2a3439] text-sm"
                          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                        >
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link
                      to="/contact"
                      className="inline-flex px-6 py-3 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-[#d4af37] hover:text-white transition"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {doctor.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DECISION SECTION */}
      <section className="relative py-32 overflow-hidden bg-white">

        {/* Background image: blurred at edges, sharp and visible in the center */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-y-0 left-0 right-0 lg:right-[42%]">
            <img
              src={consultationImage}
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
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-start">

            {/* LEFT */}
            <div className="space-y-6">
              <p
                className="uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.decisionSection.eyebrow}
              </p>

              <h2
                className="text-4xl text-[#2a3439] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {content.decisionSection.title}
              </h2>

              <p
                className="text-lg text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {content.decisionSection.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {content.decisionSection.primaryCTA}
                </Link>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition text-center"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {content.decisionSection.secondaryCTA}
                </Link>
              </div>

              <div className="pt-4">
                <p
                  className="uppercase tracking-[0.25em] text-[#C5AF73] mb-5 text-xs font-semibold"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {content.decisionSection.stepsTitle}
                </p>

                <div className="grid md:grid-cols-3 gap-3">
                  {content.decisionSection.steps.map((step, index) => (
                    <div key={index} className="bg-[#f7f2e7] rounded-2xl p-5">
                      <p
                        className="text-[#C5AF73] text-xs tracking-[0.2em] mb-3 font-semibold"
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                      >
                        {step.number}
                      </p>
                      <h3
                        className="text-base text-[#2a3439]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              <p
                className="text-xs text-gray-400 leading-relaxed pt-1"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.decisionSection.note}
              </p>
            </div>

            {/* RIGHT — contact form sits on top of everything */}
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-2">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Doctors;
