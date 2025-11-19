import React, { useState } from "react";
import { Helmet } from "react-helmet";

import typesVie from "../pics/WEB/typesTeeth/vie.png";
import typesEng from "../pics/WEB/typesTeeth/eng.png";

import hiossenImg from "../pics/hiossen.jpg";
import osstemImg from "../pics/osstem.jpg";
import straumannImg from "../pics/straumann.jpg";

export default function ImplantInfo({ language }) {
  const isViet = language === "vietnamese";
  const typesImage = isViet ? typesVie : typesEng;

  const [tocOpen, setTocOpen] = useState(false);

  // ---------------- TEXT BLOCKS (REWRITTEN + EXPANDED) ---------------- //

  const pageTitle = isViet
    ? "Trồng Răng Implant – Thông Tin Chuyên Sâu, Quy Trình, Chi Phí Và Lưu Ý"
    : "Dental Implants – Complete Guide, Procedure, Cost, and Aftercare";

  const sections = [
    { id: "section1", number: "1", title: isViet ? "Trồng Răng Implant Là Gì?" : "What Are Dental Implants?" },
    { id: "section2", number: "2", title: isViet ? "Khi Nào Nên Trồng Răng Implant" : "When Dental Implants Are Recommended" },
    { id: "section3", number: "3", title: isViet ? "Quy Trình Trồng Răng Implant Chuẩn Y Khoa" : "Standard Implant Procedure" },
    { id: "section4", number: "4", title: isViet ? "Các Loại Trụ Implant Phổ Biến" : "Common Implant Brands" },
    { id: "section5", number: "5", title: isViet ? "Lưu Ý Trước Khi Cấy Implant" : "Important Notes Before Implant Surgery" },
    { id: "section6", number: "6", title: isViet ? "Lưu Ý Sau Khi Cấy Implant" : "Important Notes After Implant Surgery" },
    { id: "section7", number: "7", title: isViet ? "Lý Do Nên Chọn Emis Dental" : "Why Choose Emis Dental" },
  ];

  const brandData = [
    { name: isViet ? "Osstem (Hàn Quốc) — tuổi thọ trung bình ~10 năm" : "Osstem (Korea) — approx. 10-year lifespan", img: osstemImg },
    { name: isViet ? "Hiossen (Mỹ) — tuổi thọ trung bình ~13 năm" : "Hiossen (USA) — approx. 13-year lifespan", img: hiossenImg },
    { name: isViet ? "Straumann (Thụy Sĩ) — tuổi thọ trung bình ~20 năm" : "Straumann (Switzerland) — approx. 20-year lifespan", img: straumannImg },
  ];

  // ---------------- UI COMPONENTS ---------------- //

  const SectionHeading = ({ number, title }) => (
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 scroll-mt-32 flex items-center gap-3">
      <span className="text-yellow-600 font-bold text-xl">{number}</span>
      <span>{title}</span>
    </h2>
  );

  // ---------------- PAGE LAYOUT ---------------- //

  return (
    <main className="min-h-screen bg-[#f7f4ec] pt-20">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={
            isViet
              ? "Bài viết chuyên sâu về trồng răng Implant gồm khái niệm, chỉ định, quy trình, chi phí và lưu ý quan trọng."
              : "A complete guide on dental implants including indications, steps, costs, and important aftercare."
          }
        />
      </Helmet>

      {/* WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-10 leading-tight">
          {pageTitle}
        </h1>

        <div className="flex gap-10 relative">

          {/* ---------------- TOC (SIDEBAR) ---------------- */}
          <aside className="hidden lg:block w-64 sticky top-28 h-max bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {isViet ? "Nội Dung Chính" : "Table of Contents"}
            </h3>
            <ul className="space-y-3 text-gray-700 text-[15px]">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    href={`#${sec.id}`}
                    className="hover:text-yellow-600 transition"
                  >
                    {sec.number}. {sec.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* MOBILE TOC BUTTON */}
          <button
            className="lg:hidden fixed bottom-6 right-6 bg-yellow-600 text-white px-4 py-3 rounded-full shadow-xl text-sm font-semibold"
            onClick={() => setTocOpen(true)}
          >
            {isViet ? "Mục lục" : "Contents"}
          </button>

          {/* MOBILE TOC POPUP */}
          {tocOpen && (
            <div className="fixed inset-0 bg-black/40 z-50 flex">
              <div className="bg-white w-72 p-6 shadow-xl">
                <h3 className="text-xl font-semibold mb-4">
                  {isViet ? "Nội Dung Chính" : "Table of Contents"}
                </h3>
                <ul className="space-y-3 text-gray-700 text-[15px]">
                  {sections.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        onClick={() => setTocOpen(false)}
                        className="block py-1 hover:text-yellow-600"
                      >
                        {sec.number}. {sec.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setTocOpen(false)}
                  className="mt-6 bg-gray-200 w-full py-2 rounded-lg"
                >
                  {isViet ? "Đóng" : "Close"}
                </button>
              </div>
            </div>
          )}

          {/* ---------------- ARTICLE CONTENT ---------------- */}
          <article className="flex-1 text-gray-800 text-lg leading-relaxed space-y-14">

            {/* SECTION 1 */}
            <section id="section1">
              <SectionHeading {...sections[0]} />
              <p className="mb-4">
                {isViet
                  ? "Trồng răng Implant là giải pháp phục hình răng tiên tiến..."
                  : "A dental implant is a modern technique used to restore missing teeth..."}
              </p>
              <p>
                {isViet
                  ? "Implant được xem là tiêu chuẩn vàng..."
                  : "Implants are considered the gold standard..."}
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="section2">
              <SectionHeading {...sections[1]} />

              <img
                src={typesImage}
                alt="implant types"
                className="w-full rounded-xl shadow-lg my-6"
              />

              <p className="mb-4">
                {isViet
                  ? "Implant phù hợp cho nhiều trường hợp mất răng..."
                  : "Implants are recommended for various tooth-loss scenarios..."}
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>{isViet ? "Mất một hoặc nhiều răng" : "Missing one or multiple teeth"}</li>
                <li>{isViet ? "Tiêu xương hàm lâu năm" : "Long-term bone loss"}</li>
                <li>{isViet ? "Mất răng toàn hàm" : "Full arch tooth loss"}</li>
                <li>{isViet ? "Không muốn đeo hàm giả" : "Cannot wear removable dentures"}</li>
                <li>{isViet ? "Cầu răng cũ gây hại" : "Old bridges damaging natural teeth"}</li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="section3">
              <SectionHeading {...sections[2]} />
              <p className="mb-4">
                {isViet
                  ? "Quy trình Implant tiêu chuẩn gồm 5 bước..."
                  : "The standard implant process includes 5 major steps..."}
              </p>

              <ol className="list-decimal ml-6 space-y-2">
                <li>{isViet ? "Khám & chụp CT" : "Exam & CT scan"}</li>
                <li>{isViet ? "Lập kế hoạch" : "Treatment planning"}</li>
                <li>{isViet ? "Cấy trụ Implant" : "Implant placement"}</li>
                <li>{isViet ? "Chờ tích hợp xương" : "Bone integration"}</li>
                <li>{isViet ? "Lắp răng sứ" : "Crown placement"}</li>
              </ol>
            </section>

            {/* SECTION 4 */}
            <section id="section4">
              <SectionHeading {...sections[3]} />
              <p className="mb-6">
                {isViet
                  ? "Dưới đây là 3 thương hiệu Implant phổ biến..."
                  : "Below are 3 of the most popular implant brands..."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandData.map((brand, idx) => (
                  <div key={idx} className="bg-white shadow-md rounded-xl p-4 text-center">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="mx-auto w-32 h-32 object-contain mb-3"
                    />
                    <p className="font-semibold text-gray-800">{brand.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="section5">
              <SectionHeading {...sections[4]} />
              <ul className="list-disc ml-6 space-y-2">
                <li>{isViet ? "Chụp CT đánh giá xương" : "CT scan to evaluate bone"}</li>
                <li>{isViet ? "Thông báo bệnh lý" : "Inform your dentist of medical history"}</li>
                <li>{isViet ? "Tránh rượu, thuốc lá" : "Avoid alcohol and tobacco"}</li>
                <li>{isViet ? "Vệ sinh răng miệng" : "Maintain good oral hygiene"}</li>
              </ul>
            </section>

            {/* SECTION 6 */}
            <section id="section6">
              <SectionHeading {...sections[5]} />
              <ul className="list-disc ml-6 space-y-2">
                <li>{isViet ? "Chườm lạnh 24 giờ đầu" : "Apply ice during first 24 hours"}</li>
                <li>{isViet ? "Ăn mềm" : "Eat soft foods"}</li>
                <li>{isViet ? "Không hút thuốc" : "Avoid smoking"}</li>
                <li>{isViet ? "Dùng thuốc theo toa" : "Take medications as prescribed"}</li>
              </ul>
            </section>

            {/* SECTION 7 */}
            <section id="section7">
              <SectionHeading {...sections[6]} />
              <ul className="list-disc ml-6 space-y-2">
                <li>{isViet ? "Trang thiết bị hiện đại" : "Advanced equipment"}</li>
                <li>{isViet ? "Bác sĩ kinh nghiệm" : "Experienced doctors"}</li>
                <li>{isViet ? "Trụ Implant chính hãng" : "Certified implant systems"}</li>
              </ul>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
}
