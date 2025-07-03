import React from "react";
import aboutContent from "../Translations/aboutContent";

const About = ({ language = "english" }) => {
  const content = aboutContent[language];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">
        {content.title}
      </h1>
      <p className="text-lg leading-relaxed text-justify whitespace-pre-line">
        {content.description}
      </p>
      {content.mission && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">{content.missionTitle}</h2>
          <p className="text-base leading-relaxed whitespace-pre-line">
            {content.mission}
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
