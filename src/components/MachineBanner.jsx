import React from "react";
import { motion } from "framer-motion";
import equipmentContent from "../Translations/equipmentContent";
import vatechImg from "../pics/vatech.jpg";
import kehongImg from "../pics/kehong.jpg";
import hyperlightImg from "../pics/hyperlight.jpg";
import uvStorageImg from "../pics/uvStorage.jpg";
import hyundaiImg from "../pics/hyundai.jpg";
import sterileRoomImg from "../pics/sterileRoom.jpg";

export default function MachineBanner({ language }) {
  const isVN = language === "vietnamese";
  const content = equipmentContent[language];
  const qualityStamp = isVN ? "CHẤT LƯỢNG ĐẢM BẢO" : "PREMIUM QUALITY";

  const machines = [
    { key: "vatech", img: vatechImg },
    { key: "kehong", img: kehongImg },
    { key: "hyperlight", img: hyperlightImg },
    { key: "uvStorage", img: uvStorageImg },
    { key: "hyundai", img: hyundaiImg },
    { key: "sterileRoom", img: sterileRoomImg },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#faf7f2] to-[#fffdfa] relative overflow-hidden">
      {/* Subtle gold shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#fff3d2]/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <h2
          className="text-4xl font-bold text-[#3b3b6d] mb-4 drop-shadow-sm"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {content.title}
        </h2>
        <div className="w-28 h-[2px] mx-auto bg-gradient-to-r from-[#d4af37] to-[#f6e58d] mb-10"></div>

        {/* Intro */}
        <p
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed"
          style={{ fontFamily: "'Noto Serif', serif" }}
        >
          {content.introText ||
            (isVN
              ? "Trang bị công nghệ hiện đại, khẳng định đẳng cấp và sự an tâm trong từng chi tiết điều trị."
              : "Equipped with state-of-the-art technology ensuring precision, comfort, and luxury in every treatment.")}
        </p>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {machines.map(({ key, img }) => (
            <motion.div
              key={key}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white border border-[#e5d6a2]/70 rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
            >
              {/* Gold Seal */}
              <div className="absolute top-4 right-4 z-10">
                <div className="rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-white text-[10px] px-3 py-1 font-semibold shadow-md uppercase tracking-widest">
                  {qualityStamp}
                </div>
              </div>

              {/* Image */}
              <div className="bg-[#fdfcf7] h-56 flex items-center justify-center border-b border-[#f0e4bc] overflow-hidden">
                <img
                  src={img}
                  alt={content[key]?.title || ""}
                  className="max-h-full max-w-full object-contain p-4 transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 text-left">
                <h3
                  className="text-2xl font-semibold text-[#3b3b6d] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {content[key]?.title}
                </h3>
                <p
                  className="text-gray-700 text-sm leading-relaxed mb-1"
                  style={{ fontFamily: "'Noto Serif', serif" }}
                >
                  {content[key]?.equipmentIntro}
                </p>
              </div>

              {/* Gold Glow Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f9e79f] via-[#d4af37] to-[#f9e79f]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
