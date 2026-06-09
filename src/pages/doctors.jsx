import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import drTuPortrait from '../pics/dr-tu-potrait.jpg';
import doctorsContent from '../Translations/doctorsContent';
import patient2 from '../pics/patient2.jpg';

const Doctors = () => {
  const language = useSelector((state) => state.language.language);
  const content = doctorsContent[language] || doctorsContent.english;
    const doctorImages = [drTuPortrait, drTuPortrait]; // Replace with actual doctor images when available
  return (
    <main className="bg-[#f7f2e7] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
      </Helmet>

      <section className="min-h-[80vh] flex items-center py-16">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={patient2}
                  alt="EMIS Clinical Team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="order-2 lg:order-1">

              <p
                className="uppercase tracking-[0.25em] text-[#C5AF73] mb-4 text-sm font-semibold"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.hero.eyebrow}
              </p>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-[#2a3439] leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {content.hero.title}
              </h1>

              <p
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {content.hero.subtitle}
              </p>

              <div className="grid gap-3 mb-10">
                {content.hero.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    <span className="text-[#C5AF73] text-lg">●</span>
                    <span className="text-[#2a3439] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">

                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full bg-[#d4af37] text-white font-semibold hover:bg-[#c19d30] transition text-center"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {content.hero.primaryCTA}
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full border border-[#d4af37] text-[#2a3439] hover:bg-white transition text-center"
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
        <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

            <div className="max-w-4xl mx-auto text-center mb-20">

            <p
                className="uppercase tracking-[0.25em] text-[#C5AF73] mb-4 text-sm font-semibold"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
                {content.journeySection.eyebrow}
            </p>

            <h2
                className="text-4xl md:text-5xl text-[#2a3439] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                {content.journeySection.title}
            </h2>

            <p
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: "'Cormorant', serif" }}
            >
                {content.journeySection.subtitle}
            </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

            {content.journeyCards.map((card, index) => (
                <div
                key={index}
                className="bg-[#f7f2e7] rounded-3xl p-8"
                >
                <p
                    className="text-[#C5AF73] text-sm tracking-[0.2em] mb-6 font-semibold"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                    {card.number}
                </p>

                <h3
                    className="text-2xl text-[#2a3439] mb-4"
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
        {/* DOCTOR SECTION */}
    <section className="py-24 bg-[#f7f2e7]">
    <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center mb-20">

        <p
            className="uppercase tracking-[0.25em] text-[#C5AF73] mb-4 text-sm font-semibold"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
            {content.doctorSection.eyebrow}
        </p>

        <h2
            className="text-4xl md:text-5xl text-[#2a3439] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
        >
            {content.doctorSection.title}
        </h2>

        <p
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            style={{ fontFamily: "'Cormorant', serif" }}
        >
            {content.doctorSection.subtitle}
        </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

        {content.doctors.map((doctor, index) => (
            <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col"
            >
            <img
                src={doctorImages[index]}
                alt={doctor.name}
                className="w-full h-[420px] object-cover"
            />

            <div className="p-8 flex flex-col flex-grow">

                <h3
                className="text-3xl text-[#2a3439] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
                >
                {doctor.name}
                </h3>

                <p
                className="text-[#C5AF73] font-semibold mb-3"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                {doctor.role}
                </p>

                <p
                className="text-sm uppercase tracking-wide text-gray-500 mb-6"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                {doctor.specialties}
                </p>

                <p
                className="text-gray-600 leading-relaxed mb-4"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                {doctor.descriptionOne}
                </p>

                <p
                className="text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                {doctor.descriptionTwo}
                </p>

                <div className="space-y-3 mb-8">
                {doctor.highlights.map((highlight, idx) => (
                    <div
                    key={idx}
                    className="flex items-center gap-3"
                    >
                    <span className="text-[#C5AF73]">●</span>
                    <span
                        className="text-[#2a3439]"
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
                    className="inline-flex px-6 py-3 rounded-full border border-[#d4af37] text-[#2a3439] hover:bg-[#d4af37] hover:text-white transition"
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
    </main>
  );
};

export default Doctors;