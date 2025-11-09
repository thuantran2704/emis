import React from "react";
import equipmentContent from "../Translations/equipmentContent";

export default function Equipment({ language }) {
  const content =
    language === "vietnamese"
      ? equipmentContent.vietnamese
      : equipmentContent.english;

  // Use consistent fonts for all languages
  const headingFont = "'Noto Serif', serif";
  const bodyFont = "'Noto Sans', sans-serif";

  // Get all equipment keys
  const equipmentKeys = Object.keys(content).filter(
    (key) => key !== "title" && key !== "pageTitle" && key !== "pageIntro"
  );

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

      {/* Equipment Cards */}
      <section className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {equipmentKeys.map((key) => (
          <div
            key={key}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-transform duration-300 flex flex-col"
          >
            {/* Equipment Intro */}
            <div className="p-6 flex-1">
              <h2
                className="text-2xl font-semibold text-[#3b3b6d] mb-2"
                style={{ fontFamily: headingFont }}
              >
                {content[key].title}
              </h2>
              <p className="text-gray-700 mb-4 font-medium">
                {content[key].equipmentIntro}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {content[key].equipmentDescription}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2
          className="text-2xl sm:text-3xl font-semibold text-[#3b3b6d] mb-6"
          style={{ fontFamily: headingFont }}
        >
          {language === "vietnamese"
            ? "Trải nghiệm sự khác biệt từ công nghệ hàng đầu"
            : "Experience the difference of world-class technology"}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg mb-8 px-4">
          {language === "vietnamese"
            ? "Chúng tôi liên tục đầu tư vào thiết bị hiện đại để mang đến kết quả điều trị tối ưu nhất."
            : "We continually invest in the latest innovations to deliver the most precise and comfortable dental care possible."}
        </p>
        <button className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white px-8 py-3 rounded-full text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform">
          {language === "vietnamese" ? "Đặt lịch ngay" : "Book an Appointment"}
        </button>
      </section>
    </main>
  );
}
