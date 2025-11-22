import React from "react";
import sonContent from "../Translations/bacSonContent";
import bs0 from "../pics/bs/bs0.png";
import bs1 from "../pics/bs/bs1.png";
import bs2 from "../pics/bs/bs2.png";
import bs3 from "../pics/bs/bs3.png";
import bs4 from "../pics/bs/bs4.png";

export default function SonPage({ language = "english" }) {
  const content = sonContent[language];

  const bsImages = [bs0, bs1, bs2, bs3, bs4];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center flex-wrap gap-4 mb-4">
            {bsImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${content.title} ${idx + 1}`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md"
              />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            {content.title}
          </h1>
          <h2 className="text-lg md:text-xl text-gray-700 mb-4">{content.subtitle}</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">{content.introParagraph}</p>
        </header>

        {/* Professional Info */}
        <section className="mb-12 bg-white rounded-2xl shadow-md p-6 md:p-10 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {content.professionalInfo.title}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {content.professionalInfo.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Education & Advanced Training */}
        <section className="mb-12 bg-blue-50 rounded-2xl shadow-md p-6 md:p-10 border border-blue-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content.education.title}</h3>
          <p className="text-gray-700 mb-4 font-medium">{content.education.formalEducation}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {content.education.advancedTraining.map((training, idx) => (
              <li key={idx}>{training}</li>
            ))}
          </ul>
        </section>

        {/* Clinical Experience */}
        <section className="mb-12 bg-white rounded-2xl shadow-md p-6 md:p-10 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content.clinicalExperience.title}</h3>
          <p className="text-gray-700">{content.clinicalExperience.content}</p>
        </section>

        {/* Philosophy */}
        <section className="mb-12 bg-green-50 rounded-2xl shadow-md p-6 md:p-10 border border-green-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content.philosophy.title}</h3>
          <blockquote className="text-gray-800 italic mb-4">{content.philosophy.quote}</blockquote>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {content.philosophy.values.map((value, idx) => (
              <li key={idx}>{value}</li>
            ))}
          </ul>
        </section>

        {/* Testimonials */}
        <section className="mb-12 bg-white rounded-2xl shadow-md p-6 md:p-10 border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content.testimonials.title}</h3>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="italic text-gray-700">{content.testimonials.patientReview}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="italic text-gray-700">{content.testimonials.colleagueReview}</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-6 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{content.cta.title}</h3>
          <p className="mb-4">{content.cta.content}</p>
          <p className="mb-6 font-medium">{content.cta.question}</p>
          <button className="bg-white text-blue-600 px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            {language === "vietnamese" ? "Đặt Lịch Tư Vấn" : "Schedule Consultation"}
          </button>
        </section>
      </div>
    </div>
  );
}
