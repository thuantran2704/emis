import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import doctorsContent from '../Translations/doctorsContent';
import patient2 from '../pics/patient2.jpg';

const Doctors = () => {
  const language = useSelector((state) => state.language.language);
  const content = doctorsContent[language] || doctorsContent.english;

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
    </main>
  );
};

export default Doctors;