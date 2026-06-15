import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { CheckCircle } from "lucide-react";
import equipmentContent from "../Translations/equipmentContent";

import vatechImg from "../pics/vatech.jpg";
import kehongImg from "../pics/ghe-ngoi-nha-khoa-kehong.jpg";
import hyperlightImg from "../pics/hyperlight.jpg";
import uvStorageImg from "../pics/uvStorage.jpg";
import hyundaiImg from "../pics/hyundai.jpg";
import sterileRoomImg from "../pics/sterile-room-phong-khu-trung.jpg";

export default function Equipment() {
  const language = useSelector((state) => state.language.language);
  const content = equipmentContent[language] || equipmentContent.english;

  const equipmentList = [
    { key: "vatech", image: vatechImg },
    { key: "kehong", image: kehongImg },
    { key: "hyperlight", image: hyperlightImg },
    { key: "uvStorage", image: uvStorageImg },
    { key: "hyundai", image: hyundaiImg },
    { key: "sterileRoom", image: sterileRoomImg },
  ];

  return (
    <main className="bg-[#f7f2e7] pt-20">
      <Helmet>
        <title>{content.pageTitle || content.title}</title>
        <meta name="description" content={content.pageIntro} />
      </Helmet>

      <section className="min-h-[82vh] flex items-center py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-20 items-center">
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-sm h-[320px] lg:h-[360px] bg-white border border-[#eadfc9]/60 p-3">
                <img
                  src={vatechImg}
                  alt={content.vatech.title}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>

            <div className="order-2 lg:order-1 space-y-6">
              <p
                className="uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                CLINIC TECHNOLOGY
              </p>

              <h1
                className="text-4xl md:text-5xl text-[#2a3439] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {content.pageTitle || content.title}
              </h1>

              <p
                className="text-lg text-gray-500 leading-relaxed max-w-md"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                {content.pageIntro}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {language === "vietnamese" ? "Đặt Lịch Tư Vấn" : "Book Consultation"}
                </Link>
                <Link
                  to="/services"
                  className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition text-center"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {language === "vietnamese" ? "Xem Bảng Giá" : "View Price List"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              EQUIPMENT OVERVIEW
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {language === "vietnamese" ? "Hệ Thống Thiết Bị Hiện Đại" : "Modern Equipment Systems"}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {language === "vietnamese"
                ? "Mỗi thiết bị đều được lựa chọn để hỗ trợ chẩn đoán chính xác, điều trị an toàn và trải nghiệm thoải mái hơn cho bệnh nhân."
                : "Each system is selected to support accurate diagnosis, safer procedures, and a smoother patient experience."}
            </p>
          </div>

          <div className="space-y-8">
            {equipmentList.map(({ key, image }, index) => (
              <article
                key={key}
                className={`rounded-2xl p-6 md:p-8 border border-[#eadfc9]/60 ${
                  index % 2 === 0 ? "bg-[#f7f2e7]" : "bg-white"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className={`${index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}`}>
                    <div className="rounded-2xl overflow-hidden shadow-sm h-[320px] lg:h-[360px] bg-white border border-[#eadfc9]/60 p-3">
                      <img
                        src={image}
                        alt={content[key].title}
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                  </div>

                  <div className={`${index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}`}>
                    <p
                      className="uppercase tracking-[0.25em] text-[#C5AF73] text-xs font-semibold mb-4"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {language === "vietnamese" ? "Thiết Bị" : "Equipment"}
                    </p>

                    <h3
                      className="text-2xl md:text-3xl text-[#2a3439] mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {content[key].title}
                    </h3>

                    <p
                      className="text-[#2a3439] mb-4"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {content[key].equipmentIntro}
                    </p>

                    <p
                      className="text-gray-500 leading-relaxed mb-5"
                      style={{ fontFamily: "'Cormorant', serif" }}
                    >
                      {content[key].equipmentDescription}
                    </p>

                    <div className="space-y-2">
                      {content[key].features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C5AF73] mt-1 flex-shrink-0" />
                          <span
                            className="text-[#2a3439] text-sm"
                            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7f2e7]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="rounded-2xl border border-[#eadfc9] bg-white p-8 shadow-sm text-center">
            <p
              className="uppercase tracking-[0.25em] text-[#C5AF73] text-xs font-semibold mb-4"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              QUALITY STANDARDS
            </p>
            <h3
              className="text-3xl text-[#2a3439] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {language === "vietnamese" ? "An Toàn Và Chính Xác Trong Từng Điều Trị" : "Safety and Precision in Every Treatment"}
            </h3>
            <p
              className="text-gray-500 leading-relaxed mb-7"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {language === "vietnamese"
                ? "Toàn bộ hệ thống thiết bị được bảo trì định kỳ và vận hành theo quy trình kiểm soát nghiêm ngặt để đảm bảo chất lượng điều trị ổn định."
                : "All systems are maintained on schedule and operated under strict protocols to ensure consistent treatment quality."}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {language === "vietnamese" ? "Liên Hệ Tư Vấn" : "Contact for Consultation"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
