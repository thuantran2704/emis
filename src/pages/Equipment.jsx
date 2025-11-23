import React from "react";
import equipmentContent from "../Translations/equipmentContent";

// Example image imports (replace with actual images)
import vatechImg from "../pics/vatech.jpg";
import kehongImg from "../pics/kehong.jpg";
import hyperlightImg from "../pics/hyperlight.jpg";
import uvStorageImg from "../pics/uvStorage.jpg";
import hyundaiImg from "../pics/hyundai.jpg";
import sterileRoomImg from "../pics/sterileRoom.jpg";
import { useSelector } from 'react-redux';
export default function Equipment() {
  const language = useSelector((state) => state.language.language);
  const content =
    language === "vietnamese"
      ? equipmentContent.vietnamese
      : equipmentContent.english;

  const headingFont = "'Noto Serif', serif"; // For titles
  const bodyFont = "'Noto Sans', sans-serif"; // For description & intro

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
      <header className="text-center mb-16">
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
      </header>

      {/* Equipment Articles - Flowing like an article */}
      <article className="prose prose-lg sm:prose-xl max-w-none mx-auto">
        {equipmentList.map(({ key, img }) => (
          <section key={key} className="mb-16">
            {/* Title */}
            <h2
              className="text-3xl font-bold text-[#3b3b6d] mb-4"
              style={{ fontFamily: headingFont }}
            >
              {content[key].title}
            </h2>

            {/* Image */}
            <figure className="mb-4">
              <img
                src={img}
                alt={content[key].title}
                className="w-full h-auto object-contain rounded-lg"
              />
              {/* Short intro as caption */}
              <figcaption className="text-center text-gray-700 mt-2 font-semibold">
                {content[key].equipmentIntro}
              </figcaption>
            </figure>

            {/* Full description */}
            <p className="text-gray-700 leading-relaxed">
              {content[key].equipmentDescription}
            </p>
          </section>
        ))}
      </article>
    </main>
  );
}

