import React from 'react';
import { useSelector } from 'react-redux';
import sonContent from '../Translations/bacSonContent';
import bs0 from '../pics/bs/bs0.png';
import bs1 from '../pics/bs/bs1.png';
import bs2 from '../pics/bs/bs2.png';
import bs3 from '../pics/bs/bs3.png';
import bs4 from '../pics/bs/bs4.png';

export default function SonPage() {
  const language = useSelector((state) => state.language) || 'english';
  const content = sonContent[language];

  const images = [bs0, bs1, bs2, bs3, bs4];

  return (
    <main className="bg-gray-50">
      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title & Subtitle */}
        <header className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a3439]">
            {content.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">{content.subtitle}</p>
        </header>

        {/* Intro Paragraph */}
        <section className="prose prose-lg mx-auto text-gray-700">
          <p>{content.introParagraph}</p>
        </section>

        {/* Image Gallery */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img}
                alt={`Dr. Son ${idx}`}
                className="w-full h-64 object-cover sm:h-48 md:h-56 lg:h-64"
              />
            </div>
          ))}
        </section>

        {/* Professional Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#2a3439]">
            {content.professionalInfo.title}
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {content.professionalInfo.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Education & Training */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#2a3439]">
            {content.education.title}
          </h2>
          <p className="text-gray-700">{content.education.formalEducation}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {content.education.advancedTraining.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Clinical Experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#2a3439]">
            {content.clinicalExperience.title}
          </h2>
          <p className="text-gray-700">{content.clinicalExperience.content}</p>
        </section>

        {/* Philosophy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#2a3439]">
            {content.philosophy.title}
          </h2>
          <blockquote className="border-l-4 border-[#d4af37] pl-4 italic text-gray-700">
            {content.philosophy.quote}
          </blockquote>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {content.philosophy.values.map((val, idx) => (
              <li key={idx}>{val}</li>
            ))}
          </ul>
        </section>

        {/* Testimonials */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#2a3439]">
            {content.testimonials.title}
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="italic">"{content.testimonials.patientReview}"</p>
            <p className="italic">"{content.testimonials.colleagueReview}"</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#d4af37]/20 rounded-lg p-6 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-[#2a3439]">{content.cta.title}</h2>
          <p className="text-gray-700">{content.cta.content}</p>
          <p className="font-medium text-gray-800">{content.cta.question}</p>
        </section>
      </div>
    </main>
  );
}
