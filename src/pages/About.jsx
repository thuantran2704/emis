import React from "react";
import aboutContent from "../Translations/aboutContent";
import emishall from "../pics/Emis_hall.jpg";
import patient1 from "../pics/patient1.jpg";
import patient2 from "../pics/patient2.jpg";
import seal from "../pics/sealer.jpg";
import phongkham from "../pics/phongkham.jpg";
import reception from "../pics/reception.jpg";

const About = ({ language }) => {
  const content = aboutContent[language];

  return (
    <div
      className="pt-28 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto text-gray-800"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <h1 className="text-5xl font-extrabold text-center mb-14 tracking-tight leading-tight">
        <span className="underline decoration-yellow-300 decoration-[3px] underline-offset-[10px]">
          {content.title}
        </span>
      </h1>

      {/* Section 1: Introduction */}
      <p className="text-lg md:text-xl leading-relaxed text-justify whitespace-pre-line mb-10 text-gray-700">
        {content.introParagraph}
      </p>

      <div className="my-12">
        <img
          src={reception}
          alt="Reception"
          className="rounded-2xl shadow-lg mx-auto max-w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
        />
        <h2 className="text-xl md:text-2xl font-semibold text-center mt-4 text-gray-600">
          {content.receptionSubtitle}
        </h2>
      </div>

      {/* Section 2: Philosophy */}
      <p className="text-lg md:text-xl leading-relaxed text-justify whitespace-pre-line mb-10 text-gray-700">
        {content.philosophy}
      </p>

      <div className="my-12">
        <img
          src={phongkham}
          alt="Clinic interior"
          className="rounded-2xl shadow-lg mx-auto max-w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
        />
        <h2 className="text-xl md:text-2xl font-semibold text-center mt-4 text-gray-600">
          {content.clinicSubtitle}
        </h2>
      </div>

      {/* Section 3: Care & Comfort */}
      <p className="text-lg md:text-xl leading-relaxed text-justify whitespace-pre-line mb-10 text-gray-700">
        {content.careSection}
      </p>

      <div className="my-12">
        <img
          src={patient1}
          alt="Patient interaction"
          className="rounded-2xl shadow-lg mx-auto max-w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
        />
        <h2 className="text-xl md:text-2xl font-semibold text-center mt-4 text-gray-600">
          {content.patientSubtitle1}
        </h2>
      </div>

      {/* Section 4: Modern Treatment */}
      <p className="text-lg md:text-xl leading-relaxed text-justify whitespace-pre-line mb-10 text-gray-700">
        {content.techSection}
      </p>

      <div className="my-12">
        <img
          src={seal}
          alt="Dental tools or sealant"
          className="rounded-2xl shadow-lg mx-auto max-w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
        />
        <h2 className="text-xl md:text-2xl font-semibold text-center mt-4 text-gray-600">
          {content.techSubtitle}
        </h2>
      </div>

      {/* Section 5: Patient Experience */}
      <p className="text-lg md:text-xl leading-relaxed text-justify whitespace-pre-line mb-10 text-gray-700">
        {content.experienceSection}
      </p>

      <div className="my-12">
        <img
          src={patient2}
          alt="Happy patient"
          className="rounded-2xl shadow-lg mx-auto max-w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
        />
        <h2 className="text-xl md:text-2xl font-semibold text-center mt-4 text-gray-600">
          {content.patientSubtitle2}
        </h2>
      </div>

      {/* Section 6: Hall Image (optional/extra) */}
      <div className="my-20 bg-gray-50/60 rounded-2xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700 tracking-wide">
          {content.imageTitle || "Our Practice Hall"}
        </h2>
        <img
          src={emishall}
          alt="Facility or dental practice hall"
          className="mx-auto rounded-2xl shadow-lg max-w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
        />
        {content.imageCaption && (
          <p className="mt-4 text-gray-500 text-sm text-center italic">
            {content.imageCaption}
          </p>
        )}
      </div>

      {/* Mission Section */}
      {content.mission && (
        <div className="bg-yellow-50 border border-yellow-200 px-8 py-8 rounded-2xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-700 tracking-wide">
            {content.missionTitle}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
            {content.mission}
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
