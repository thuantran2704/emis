import React from "react";
import MachineBanner from "../components/MachineBanner";
import equipmentContent from "../Translations/equipmentContent";

export default function Equipment({ language }) {
  const content =
    language === "vietnamese"
      ? equipmentContent["vietnamese"]
      : equipmentContent["english"];

  return (
    <main className="bg-gradient-to-b from-[#fffdfa] to-[#fefcf7] text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff3d2]/40 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#3b3b6d] mb-6">
            {content.pageTitle || "Advanced Dental Equipment"}
          </h1>

          <div className="w-28 h-[2px] mx-auto bg-gradient-to-r from-[#d4af37] to-[#f6e58d] mb-8" />

          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {content.pageIntro ||
              (language === "vietnamese"
                ? "Nha khoa của chúng tôi tự hào sở hữu hệ thống thiết bị hiện đại hàng đầu, mang lại trải nghiệm điều trị chính xác, an toàn và thoải mái tối đa cho mọi khách hàng."
                : "Our clinic proudly features cutting-edge dental equipment, ensuring precision, safety, and unmatched comfort in every procedure.")}
          </p>
        </div>
      </section>

      {/* Machine Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <MachineBanner language={language} />
      </section>

      {/* CTA / Footer section */}
      <section className="py-20 bg-[#faf8f3] mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#3b3b6d] mb-6">
          {language === "vietnamese"
            ? "Trải nghiệm sự khác biệt đến từ công nghệ hàng đầu"
            : "Experience the difference of world-class technology"}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg mb-8 px-4">
          {language === "vietnamese"
            ? "Chúng tôi luôn không ngừng đầu tư vào thiết bị hiện đại để mang đến cho bạn kết quả điều trị tối ưu nhất."
            : "We continually invest in the latest innovations to deliver the most precise and comfortable dental care possible."}
        </p>
        <button className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white px-8 py-3 rounded-full text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform">
          {language === "vietnamese" ? "Đặt lịch ngay" : "Book an Appointment"}
        </button>
      </section>
    </main>
  );
}
