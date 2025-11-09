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
  const content = language === "vietnamese" ? equipmentContent["vietnamese"] : equipmentContent["english"];
  const qualityStamp = language === "vietnamese" ? "CHẤT LƯỢNG ĐẢM BẢO" : "PREMIUM QUALITY";

  const machines = [
    { key: "vatech", img: vatechImg },
    { key: "kehong", img: kehongImg },
    { key: "hyperlight", img: hyperlightImg },
    { key: "uvStorage", img: uvStorageImg },
    { key: "hyundai", img: hyundaiImg },
    { key: "sterileRoom", img: sterileRoomImg },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#fdfbf7] to-[#fffdf8] relative overflow-hidden">
      {/* Subtle gold shimmer background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#fff3d2]/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <h2 className="text-4xl font-serif font-bold text-[#3b3b6d] mb-4">
          {content.title}
        </h2>
        <div className="w-28 h-[2px] mx-auto bg-gradient-to-r from-[#d4af37] to-[#f6e58d] mb-8"></div>

        {/* Intro */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          {content.introText ||
            (isVN
              ? "Trang bị công nghệ hiện đại, khẳng định đẳng cấp và sự an tâm trong từng chi tiết điều trị."
              : "Equipped with state-of-the-art technology to ensure comfort, precision, and luxury in every treatment.")}
        </p>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {machines.map(({ key, img }) => (
            <motion.div
              key={key}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white border border-[#e5d6a2] rounded-3xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500"
            >
              {/* Gold seal */}
              <div className="absolute top-4 right-4 z-10">
                <div className="rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-white text-[10px] px-3 py-1 font-semibold shadow-md uppercase tracking-widest">
                  {qualityStamp}
                </div>
              </div>

              {/* Image with perfect fit */}
              <div className="bg-[#fefcf7] h-60 flex items-center justify-center border-b border-[#f0e4bc]">
                <img
                  src={img}
                  alt={content[key].title || ""}
                  className="h-full w-full object-contain p-3 transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text content */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-serif font-semibold text-[#3b3b6d] mb-3">
                  {content[key].title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-1">
                  {content[key].equipmentIntro}
                </p>
              </div>

              {/* Gold glow bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f9e79f] via-[#d4af37] to-[#f9e79f]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
