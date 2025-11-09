// components/MachineBanner.jsx
import React from "react";
import equipmentContent from "../Translations/EquipmentContent";
import vatechImg from "../pics/vatech.jpg";
import kehongImg from "../pics/kehong.jpg";
import hyperlightImg from "../pics/hyperlight.jpg";
import uvImg from "../pics/uvStorage.jpg";
import hyundaiImg from "../pics/hyundai.jpg";
import sterileImg from "../pics/sterileRoom.jpg";

export default function MachineBanner({ language }) {
  const content = equipmentContent[language] || equipmentContent.vietnamese;

  // Helper array for cleaner mapping
  const machines = [
    {
      key: "vatech",
      img: vatechImg,
      alt: "Vatech 3D CBCT Smart Plus",
      defaultTitle: "3D CT Scanner",
    },
    {
      key: "kehong",
      img: kehongImg,
      alt: "Kehong A8+ Dental Chair",
      defaultTitle: "Dental Chair",
    },
    {
      key: "hyperlight",
      img: hyperlightImg,
      alt: "HyperLight-G X-ray",
      defaultTitle: "Periapical X-ray",
    },
    {
      key: "uvStorage",
      img: uvImg,
      alt: "U.V Storage Sterilizer",
      defaultTitle: "UV Sterilizer",
    },
    {
      key: "hyundai",
      img: hyundaiImg,
      alt: "Hyundai Sterilization Cabinet",
      defaultTitle: "Sterilization Cabinet",
    },
    {
      key: "sterileRoom",
      img: sterileImg,
      alt: "Sterile Room",
      defaultTitle: "Sterile Room",
    },
  ];

  return (
    <section className="py-20 bg-[#fcfbf8]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#4b4b8f] mb-10 border-b-2 border-[#d4af37] pb-2 inline-block">
          {content.title}
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          {content.introText ||
            "Equipped with cutting-edge technology for safe, precise, and comfortable dental care."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {machines.map(({ key, img, alt, defaultTitle }) => (
            <div
              key={key}
              className="relative bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Quality stamp */}
              <div className="absolute top-4 right-4 bg-[#4b4b8f] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                Quality Assured
              </div>

              <img
                src={img}
                alt={alt}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold text-[#4b4b8f] mb-2">
                {content[key].title || defaultTitle}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {content[key].equipmentIntro}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
