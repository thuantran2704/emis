import React from "react";
import aboutContent from "../Translations/aboutContent";
import emishall from "../pics/Emis_hall.jpg";

const About = ({ language }) => {
  const content = aboutContent[language];

  return (
    <div className="pt-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-5xl font-extrabold text-center mb-10">
        <span className="underline decoration-yellow-400 decoration-4 underline-offset-8">
          {content.title}
        </span>
      </h1>

      <p className="text-lg md:text-xl leading-relaxed text-justify whitespace-pre-line mb-12">
        {content.description}
      </p>

      {/* Image section with title and spacing */}
      <div className="my-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          {content.imageTitle || "Our Practice Hall"}
        </h2>
        <img
          src={emishall}
          alt="Facility or dental practice hall"
          className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
        />
        {content.imageCaption && (
          <p className="mt-4 text-gray-600 text-sm italic">
            {content.imageCaption}
          </p>
        )}
      </div>

      {content.mission && (
        <div className="bg-yellow-100/60 border-l-4 border-yellow-400 px-6 py-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-yellow-700">
            {content.missionTitle}
          </h2>
          <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
            {content.mission}
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
