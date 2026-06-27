import React from 'react';
import { useSelector } from 'react-redux';
import sonContent from '../Translations/bacSonContent';
import bs0 from '../pics/bs/bs00-drson-surgery-implant.png';
import bs1 from '../pics/bs/bs01-operation-implant-big.png';
import bs2 from '../pics/bs/bs02-multiple-qualified-doctor-surgery.png';
import bs3 from '../pics/bs/bs03-care-from-doctors-dedicated-physicians.png';
import bs4 from '../pics/bs/bs04-beautiful-smile-fulfilled-doctors.png';
import sonPapers from '../pics/bs/sonPapers.jpg';

export default function SonPage() {
  const language = useSelector((state) => state.language.language);
  const content = sonContent[language];

  const images = [
    { src: bs0, alt: 'Dr. Son performing dental implant surgery in a modern clinic' },
    { src: bs1, alt: 'Oral surgeon conducting a precision dental implant operation' },
    { src: bs2, alt: 'Qualified dental team collaborating during implant treatment' },
    { src: bs3, alt: 'Dedicated doctors providing caring dental service and patient support' },
    { src: bs4, alt: 'Patient smiling after successful dental treatment and implant restoration' },
  ];

  const SectionLabel = ({ children }) => (
    <p
      className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
    >
      {children}
    </p>
  );

  return (
    <main className="bg-[#f7f2e7]">
      <div className="h-20 md:h-24" />

      {/* HERO HEADER */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <SectionLabel>Meet the Doctor</SectionLabel>
          <h1
            className="text-4xl md:text-5xl text-[#2a3439] mb-8 leading-tight"
          >
            {content.title}
          </h1>
          <p
            className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
          >
            {content.subtitle}
          </p>
          <div className="w-12 h-px bg-[#d4af37] mx-auto mt-10" />
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="bg-white pb-24">
        <div className="max-w-4xl mx-auto px-8">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-[480px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 bg-[#f7f2e7]">
        <div className="max-w-3xl mx-auto px-8">
          <p
            className="text-xl text-gray-500 leading-relaxed"
          >
            {content.introParagraph}
          </p>
        </div>
      </section>

      {/* PROFESSIONAL OVERVIEW */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <SectionLabel>Overview</SectionLabel>
          <h2
            className="text-3xl text-[#2a3439] mb-10"
          >
            {content.professionalInfo.title}
          </h2>
          <div className="space-y-3">
            {content.professionalInfo.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#C5AF73] text-xs mt-1">●</span>
                <span
                  className="text-sm text-[#2a3439] leading-relaxed"
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-28 bg-[#f7f2e7]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Education</SectionLabel>
            <h2
              className="text-3xl text-[#2a3439]"
            >
              {content.education.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-full bg-white rounded-2xl p-8 shadow-sm">
              <h3
                className="text-lg text-[#2a3439] mb-5"
              >
                {content.education.formalEducationTitle}
              </h3>
              <p
                className="text-sm text-gray-500 leading-relaxed"
              >
                {content.education.formalEducation}
              </p>
            </div>

            <div className="h-full bg-white rounded-2xl p-8 shadow-sm">
              <h3
                className="text-lg text-[#2a3439] mb-5"
              >
                {content.education.advancedTrainingTitle}
              </h3>
              <div className="space-y-3">
                {content.education.advancedTraining.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#C5AF73] text-xs mt-1">●</span>
                    <span
                      className="text-sm text-gray-500 leading-relaxed"
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {images.slice(1).map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL EXPERIENCE */}
      <section className="py-28 bg-[#f7f2e7]">
        <div className="max-w-3xl mx-auto px-8">
          <SectionLabel>Experience</SectionLabel>
          <h2
            className="text-3xl text-[#2a3439] mb-10"
          >
            {content.clinicalExperience.title}
          </h2>
          <p
            className="text-lg text-gray-500 leading-relaxed"
          >
            {content.clinicalExperience.content}
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <SectionLabel>Philosophy</SectionLabel>
          <h2
            className="text-3xl text-[#2a3439] mb-12"
          >
            {content.philosophy.title}
          </h2>

          <blockquote
            className="text-2xl text-gray-400 italic text-center border-y border-[#d4af37]/20 py-10 mb-14 leading-relaxed"
          >
            {content.philosophy.quote}
          </blockquote>

          <h3
            className="text-lg text-[#2a3439] mb-8"
          >
            {content.philosophy.coreValuesTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {content.philosophy.values.map((val, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-[#f7f2e7] rounded-2xl p-6"
              >
                <span
                  className="text-[#C5AF73] text-xs font-semibold tracking-widest mt-0.5 shrink-0"
                >
                  0{idx + 1}
                </span>
                <span
                  className="text-sm text-[#2a3439] leading-relaxed"
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-[#f7f2e7]">
        <div className="max-w-3xl mx-auto px-8">
          <SectionLabel>Testimonials</SectionLabel>
          <h2
            className="text-3xl text-[#2a3439] mb-12"
          >
            {content.testimonials.title}
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p
                className="text-lg text-gray-500 italic leading-relaxed mb-6"
              >
                {content.testimonials.patientReview}
              </p>
              <p
                className="text-xs text-[#C5AF73] font-semibold uppercase tracking-widest"
              >
                — {content.testimonials.patientLabel}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p
                className="text-lg text-gray-500 italic leading-relaxed mb-6"
              >
                {content.testimonials.colleagueReview}
              </p>
              <p
                className="text-xs text-[#C5AF73] font-semibold uppercase tracking-widest"
              >
                — {content.testimonials.colleagueLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <SectionLabel>Book a Consultation</SectionLabel>
          <h2
            className="text-3xl text-[#2a3439] mb-6"
          >
            {content.cta.title}
          </h2>
          <p
            className="text-lg text-gray-500 leading-relaxed mb-4"
          >
            {content.cta.content}
          </p>
          <p
            className="text-sm text-gray-400 mb-12"
          >
            {content.cta.question}
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
          >
            {content.cta.button}
          </a>
        </div>
      </section>

      {/*
      <section className="py-28 bg-[#f7f2e7]">
        <div className="max-w-3xl mx-auto px-8">
          <SectionLabel>Certifications</SectionLabel>
          <h2 className="text-3xl text-[#2a3439] mb-10">
            {content.certification.title}
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img src={sonPapers} alt={content.certification.title} className="w-full object-cover" />
          </div>
          <p className="mt-5 text-sm text-gray-400 text-center italic">
            {content.certification.description}
          </p>
        </div>
      </section>
      */}

    </main>
  );
}
