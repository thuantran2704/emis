import React from 'react';
import { useSelector } from 'react-redux';
import sonContent from '../Translations/bacSonContent';
import bs0 from '../pics/bs/bs0.png';
import bs1 from '../pics/bs/bs1.png';
import bs2 from '../pics/bs/bs2.png';
import bs3 from '../pics/bs/bs3.png';
import bs4 from '../pics/bs/bs4.png';
import sonPapers from '../pics/bs/sonPapers.jpg';

export default function SonPage() {
  const language = useSelector((state) => state.language.language);
  const content = sonContent[language];

  const images = [bs0, bs1, bs2, bs3, bs4];

  return (
    <main className="bg-white">
      {/* Navbar spacer */}
      <div className="h-20 md:h-24"></div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="text-center py-12 border-b border-gray-200">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Be_Vietnam_Pro'] font-bold text-gray-900 mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-xl sm:text-2xl font-['Be_Vietnam_Pro'] text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-8"></div>
        </header>

        {/* Featured Image */}
        <div className="my-12 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={images[0]}
            alt={content.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="font-['Be_Vietnam_Pro'] prose prose-lg max-w-none">

          {/* Intro */}
          <section className="mb-16">
            <p className="text-xl leading-relaxed text-gray-700 font-light mb-8">
              {content.introParagraph}
            </p>
          </section>

          {/* Professional Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {content.professionalInfo.title}
            </h2>
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#d4af37]">
              <ul className="space-y-3">
                {content.professionalInfo.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#d4af37] mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {content.education.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Formal Education */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {content.education.formalEducationTitle}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {content.education.formalEducation}
                </p>
              </div>

              {/* Advanced Training */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {content.education.advancedTrainingTitle}
                </h3>
                <ul className="space-y-3">
                  {content.education.advancedTraining.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#d4af37] mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.slice(1).map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={img}
                    alt={`${content.title} ${idx + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Clinical Experience */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {content.clinicalExperience.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 bg-blue-50 rounded-xl p-8 border border-blue-100">
              {content.clinicalExperience.content}
            </p>
          </section>

          {/* Philosophy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {content.philosophy.title}
            </h2>

            <blockquote className="text-2xl italic text-gray-700 text-center border-y border-gray-200 py-8 my-8">
              {content.philosophy.quote}
            </blockquote>

            <div className="bg-amber-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                {content.philosophy.coreValuesTitle}
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {content.philosophy.values.map((val, idx) => (
                  <li key={idx} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                    <span className="text-[#d4af37] font-bold mr-3">{idx + 1}.</span>
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {content.testimonials.title}
            </h2>

            <div className="space-y-6">
              {/* Patient */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <p className="text-lg italic text-gray-700 mb-4">
                  {content.testimonials.patientReview}
                </p>
                <p className="text-gray-600 font-medium">
                  — {content.testimonials.patientLabel}
                </p>
              </div>

              {/* Colleague */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <p className="text-lg italic text-gray-700 mb-4">
                  {content.testimonials.colleagueReview}
                </p>
                <p className="text-gray-600 font-medium">
                  — {content.testimonials.colleagueLabel}
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          {/* Call to Action */}
          <section className="bg-gradient-to-r from-[#d4af37] to-amber-600 rounded-2xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-['Be_Vietnam_Pro'] font-bold mb-4">
              {content.cta.title}
            </h2>

            <p className="text-xl mb-6 opacity-95 font-['Be_Vietnam_Pro']">
              {content.cta.content}
            </p>

            <p className="text-lg font-semibold opacity-90 font-['Be_Vietnam_Pro']">
              {content.cta.question}
            </p>

            <a
              href="/contact"
              className="mt-8 inline-block bg-white text-[#d4af37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 font-['Be_Vietnam_Pro']"
            >
              {content.cta.button}
            </a>
          </section>

{/* 
          Certification
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              {content.certification.title}
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={sonPapers}
                alt={content.certification.title}
                className="w-full object-cover"
              />
            </div>

            <p className="mt-4 text-gray-600 text-center italic">
              {content.certification.description}
            </p>
          </section> */}

        </div>
      </article>
    </main>
  );
}
