import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import drTuPortrait from '../pics/dr-tu-potrait.jpg';
import patient2 from '../pics/patient2.jpg';
import consultationImage from '../pics/dr-x-ray-consultation.jpg';

import doctorsContent from '../Translations/doctorsContent';
import ContactForm from '../components/ContactForm.jsx';

const Doctors = () => {
  const language = useSelector((state) => state.language.language);
  const content = doctorsContent[language] || doctorsContent.english;

  const doctorImages = [drTuPortrait, drTuPortrait];

  return (
    <main className="bg-[#FCFBF8] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
      </Helmet>

      {/* ===================================== */}
      {/* HERO */}
      {/* ===================================== */}

      <section className="pt-24 lg:pt-40 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">

            <p
              className="uppercase tracking-[0.35em] text-[#C5AF73] text-sm font-semibold mb-8"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.hero.eyebrow}
            </p>

            <h1
              className="text-[3rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] text-[#1F2933] mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.hero.title}
            </h1>

            <p
              className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-600 leading-relaxed mb-14"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.hero.subtitle}
            </p>

            <div className="flex justify-center mb-20">
              <Link
                to="/contact"
                className="px-10 py-5 rounded-full bg-[#C5AF73] text-white font-medium hover:opacity-90 transition"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.hero.primaryCTA}
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.08)]">
            <img
              src={patient2}
              alt="EMIS Clinical Team"
              className="w-full h-[420px] md:h-[650px] object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid md:grid-cols-3 gap-6">
              {content.hero.highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[28px] p-8 border border-[#F1ECE2]"
                >
                  <div className="w-10 h-px bg-[#C5AF73] mb-6" />

                  <p
                    className="text-[#2a3439] leading-relaxed"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* JOURNEY */}
      {/* ===================================== */}

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center mb-24">

            <p
              className="uppercase tracking-[0.35em] text-[#C5AF73] text-sm font-semibold mb-6"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.journeySection.eyebrow}
            </p>

            <h2
              className="text-5xl md:text-6xl text-[#1F2933] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.journeySection.title}
            </h2>

            <p
              className="text-xl text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.journeySection.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {content.journeyCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#FCFBF8] rounded-[32px] p-10 border border-[#F2EEE7]"
              >
                <p
                  className="text-[#C5AF73] text-sm tracking-[0.3em] mb-10"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {card.number}
                </p>

                <h3
                  className="text-3xl text-[#1F2933] mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {card.title}
                </h3>

                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* DOCTORS */}
      {/* ===================================== */}

      <section className="py-32 bg-[#FCFBF8]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center mb-24">

            <p
              className="uppercase tracking-[0.35em] text-[#C5AF73] text-sm font-semibold mb-6"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.doctorSection.eyebrow}
            </p>

            <h2
              className="text-5xl md:text-6xl text-[#1F2933] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.doctorSection.title}
            </h2>

            <p
              className="text-xl text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.doctorSection.subtitle}
            </p>
          </div>

          <div className="space-y-24">
            {content.doctors.map((doctor, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <div className="overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                    <img
                      src={doctorImages[index]}
                      alt={doctor.name}
                      className="w-full h-[650px] object-cover"
                    />
                  </div>
                </div>

                <div>
                  <p
                    className="uppercase tracking-[0.25em] text-[#C5AF73] text-sm mb-4"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {doctor.role}
                  </p>

                  <h3
                    className="text-5xl text-[#1F2933] mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {doctor.name}
                  </h3>

                  <p
                    className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-10"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {doctor.specialties}
                  </p>

                  <div
                    className="space-y-6 text-gray-600 leading-relaxed mb-10"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    <p>{doctor.descriptionOne}</p>
                    <p>{doctor.descriptionTwo}</p>
                  </div>

                  <div className="space-y-4 mb-10">
                    {doctor.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-4">
                        <span className="text-[#C5AF73]">—</span>
                        <span
                          className="text-[#2a3439]"
                          style={{
                            fontFamily: "'Be Vietnam Pro', sans-serif",
                          }}
                        >
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex px-8 py-4 rounded-full border border-[#C5AF73] text-[#2a3439] hover:bg-[#C5AF73] hover:text-white transition"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {doctor.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================== */}
      {/* CONSULTATION / DECISION */}
      {/* ===================================== */}

      <section className="py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center mb-24">

            <p
              className="uppercase tracking-[0.35em] text-[#C5AF73] text-sm font-semibold mb-6"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.decisionSection.eyebrow}
            </p>

            <h2
              className="text-5xl md:text-7xl text-[#1F2933] leading-[1.05] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.decisionSection.title}
            </h2>

            <p
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.decisionSection.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">

            <div>
              <div className="overflow-hidden rounded-[40px] mb-12">
                <img
                  src={consultationImage}
                  alt=""
                  className="w-full h-[750px] object-cover"
                />
              </div>

              <div className="w-24 h-px bg-[#C5AF73] mb-12" />

              <p
                className="uppercase tracking-[0.25em] text-[#C5AF73] text-sm font-semibold mb-10"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.decisionSection.stepsTitle}
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {content.decisionSection.steps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-[#FCFBF8] rounded-[28px] p-8 border border-[#F1ECE2]"
                  >
                    <p
                      className="text-[#C5AF73] tracking-[0.25em] text-sm mb-6"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {step.number}
                    </p>

                    <h3
                      className="text-2xl text-[#1F2933]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>

              <p
                className="mt-12 text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.decisionSection.note}
              </p>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-[40px] border border-[#F1ECE2] shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-4">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Doctors;