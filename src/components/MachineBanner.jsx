import React from "react";
import equipmentContent from "../Translations/equipmentContent";
import vatechImg from "../pics/vatech.jpg";
import kehongImg from "../pics/kehong.jpg";
import hyperlightImg from "../pics/hyperlight.jpg";
import uvStorageImg from "../pics/uvStorage.jpg";
import hyundaiImg from "../pics/hyundai.jpg";
import sterileRoomImg from "../pics/sterileRoom.jpg";

export default function EquipmentBanner({ language }) {
  const isVN = language === "vietnamese";
  const content = isVN ? equipmentContent.vietnamese : equipmentContent.english;
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
    <section className="py-24 bg-gradient-to-b from-[#fff9f3] to-[#fdfdfd] relative overflow-hidden">
      {/* Gold shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#fff2cc]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl font-serif font-bold text-[#4b4b8f] mb-6 tracking-wide">
          {content.title}
        </h2>
        <div className="w-32 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f6e58d] mx-auto mb-10" />

        {/* Intro Text */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-14 leading-relaxed">
          {content.introText ||
            (isVN
              ? "Trang bị công nghệ hiện đại, đảm bảo an toàn và chính xác trong từng chi tiết điều trị."
              : "Equipped with cutting-edge technology to ensure precision, safety, and comfort in every treatment.")}
        </p>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {machines.map(({ key, img }) => (
            <motion.div
              key={key}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative border border-[#f1e4c3] hover:shadow-2xl hover:border-[#d4af37] transition-all duration-500"
            >
              {/* Quality Seal */}
              <div className="absolute top-4 right-4 bg-gradient-to-br from-[#d4af37] to-[#b8860b] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {qualityStamp}
              </div>

              {/* Image */}
              <img
                src={img}
                alt={content[key].title || ""}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#4b4b8f] mb-2 font-serif">
                  {content[key].title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  {content[key].equipmentIntro}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
