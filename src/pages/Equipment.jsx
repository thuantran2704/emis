import React from "react";
import equipmentContent from "../Translations/equipmentContent";

// Example image imports (replace with actual images in your project)
import vatechImg from "../pics/vatech.jpg";
import kehongImg from "../pics/kehong.jpg";
import hyperlightImg from "../pics/hyperlight.jpg";
import uvStorageImg from "../pics/uvStorage.jpg";
import hyundaiImg from "../pics/hyundai.jpg";
import sterileRoomImg from "../pics/sterileRoom.jpg";

export default function Equipment({ language }) {
  const content =
    language === "vietnamese"
      ? equipmentContent.vietnamese
      : equipmentContent.english;

  const headingFont = "'Noto Serif', serif"; // Good for Vietnamese titles
  const bodyFont = "'Noto Sans', sans-serif"; // Clean for descriptions

  const equipmentList = [
    { key: "vatech", img: vatechImg },
    { key: "kehong", img: kehongImg },
    { key: "hyperlight", img: hyperlightImg },
    { key: "uvStorage", img: uvStorageImg },
    { key: "hyundai", img: hyundaiImg },
    { key: "sterileRoom", img: sterileRoomImg },
  ];

  return (
    <main
      className="bg-gradient-to-b from-[#fffdfa] to-[#fefcf7] text-gray-800 min-h-screen px-6 sm:px-12 lg:px-24 py-24"
      style={{ fontFamily: bodyFont }}
    >
      {/* Page Header */}
      <section className="text-center mb-16">
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#3b3b6d] mb-4"
          style={{ fontFamily: headingFont }}
        >
          {content.pageTitle || content.title}
        </h1>
        <div className="w-28 h-[2px] mx-auto bg-gradient-to-r from-[#d4af37] to-[#f6e58d] mb-6"></div>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
          {content.pageIntro ||
            (language === "vietnamese"
              ? "Nha khoa của chúng tôi tự hào sở hữu hệ thống thiết bị hiện đại hàng đầu, mang lại trải nghiệm điều trị chính xác, an toàn và thoải mái tối đa cho mọi khách hàng."
              : "Our clinic proudly features cutting-edge dental equipment, ensuring precision, safety, and unmatched comfort in every procedure.")}
        </p>
      </section>

      {/* Equipment Articles */}
      {equipmentList.map(({ key, img }) => (
        <article
          key={key}
          className="mb-20 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Title */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#3b3b6d] text-center py-6 px-4"
            style={{ fontFamily: headingFont }}
          >
            {content[key].title}
          </h2>

          {/* Image */}
          <div className="w-full h-64 sm:h-96 overflow-hidden flex justify-center items-center bg-[#fefcf7] border-t border-b border-[#f0e4bc]">
            <img
              src={img}
              alt={content[key].title}
              className="object-contain h-full w-full p-4 transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Short intro */}
          <p className="text-center text-gray-700 text-lg sm:text-xl font-semibold py-4 px-6">
            {content[key].equipmentIntro}
          </p>

          {/* Full description */}
          <div className="px-6 sm:px-12 pb-8 text-gray-700 leading-relaxed text-justify">
            {content[key].equipmentDescription}
          </div>
        </article>
      ))}
    </main>
  );
}
