import React, { useState } from "react";
import { Helmet } from "react-helmet";

import typesVie from "../pics/WEB/typesTeeth/vie.png";
import typesEng from "../pics/WEB/typesTeeth/eng.png";

import hiossenImg from "../pics/hiossen.jpg";
import osstemImg from "../pics/osstem.jpg";
import straumannImg from "../pics/straumann.jpg";
import etkImg from "../pics/etk.jpg";
import biotemImg from "../pics/biotem.jpg";

export default function ImplantInfo({ language }) {
  const isViet = language === "vietnamese";
  const typesImage = isViet ? typesVie : typesEng;

  // ---------------- TEXT BLOCKS ---------------- //

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
     { name: isViet ? "Biotem (Hàn Quốc) — tuổi thọ trung bình ~7 năm" : "Biotem (Korea) — approx. 7-year lifespan", img: biotemImg },
      { name: isViet ? "ETK (Pháp) — tuổi thọ trung bình ~15 năm" : "ETK (France) — approx. 15-year lifespan", img: etkImg },
  ];

  // ---------------- UI COMPONENT ---------------- //

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

          {/* ------------------------------------ */}
          {/*    TABLE OF CONTENTS (Desktop Only)   */}
          {/* ------------------------------------ */}
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

          {/* ------------------------------------ */}
          {/*        ARTICLE CONTENT BOX            */}
          {/* ------------------------------------ */}
          <article className="flex-1 bg-white shadow-xl rounded-2xl p-8 md:p-10 lg:p-12 text-gray-800 text-lg leading-relaxed space-y-14">

            {/* SECTION 1 */}
            <section id="section1">
              <SectionHeading {...sections[0]} />
              <p className="mb-4">
                {isViet
                  ? "Trồng răng Implant là giải pháp phục hình răng tiên tiến, thay thế chân răng thật bằng một trụ titanium cấy trực tiếp vào xương hàm."
                  : "A dental implant is a modern tooth-replacement solution where a titanium post is placed into your jawbone to act as an artificial tooth root."}
              </p>
              <p>
                {isViet
                  ? "Đây là phương pháp duy nhất ngăn ngừa tiêu xương hàm, mang lại khả năng ăn nhai gần như răng tự nhiên."
                  : "It is the only treatment that prevents jawbone loss and restores chewing strength close to natural teeth."}
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
                  ? "Implant được chỉ định cho hầu hết các trường hợp mất răng từ đơn lẻ đến toàn hàm."
                  : "Implants are recommended for almost every type of tooth loss, from single missing teeth to full arch restoration."}
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>{isViet ? "Mất 1 răng hoặc nhiều răng" : "Missing one or multiple teeth"}</li>
                <li>{isViet ? "Mất răng lâu năm gây tiêu xương" : "Long-term missing teeth with bone loss"}</li>
                <li>{isViet ? "Mất răng toàn hàm" : "Full arch missing teeth"}</li>
                <li>{isViet ? "Không muốn đeo hàm giả" : "Cannot tolerate removable dentures"}</li>
                <li>{isViet ? "Cầu răng gây hại răng thật" : "Bridge work damaging natural teeth"}</li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section id="section3">
              <SectionHeading {...sections[2]} />
              <p className="mb-4">
                {isViet
                  ? "Quy trình trồng răng Implant chuẩn y khoa gồm các bước sau:"
                  : "The standardized implant treatment process follows these steps:"}
              </p>

              <ol className="list-decimal ml-6 space-y-2">
                <li>{isViet ? "Khám và chụp CT 3D" : "Examination & 3D CT scan"}</li>
                <li>{isViet ? "Lập kế hoạch điều trị" : "Treatment planning"}</li>
                <li>{isViet ? "Cấy trụ Implant vào xương hàm" : "Implant placement"}</li>
                <li>{isViet ? "Chờ tích hợp xương (2–4 tháng)" : "Bone integration (2–4 months)"}</li>
                <li>{isViet ? "Gắn abutment & mão sứ" : "Abutment & crown placement"}</li>
              </ol>
            </section>

            {/* SECTION 4 */}
            <section id="section4">
              <SectionHeading {...sections[3]} />
              <p className="mb-6">
                {isViet
                  ? "Dưới đây là 3 thương hiệu Implant được sử dụng phổ biến:"
                  : "Here are three widely trusted implant manufacturers:"}
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
                <li>{isViet ? "Kiểm tra sức khỏe & chụp CT" : "Health check + CT scan"}</li>
                <li>{isViet ? "Thông báo bệnh lý toàn thân" : "Inform dentist of medical conditions"}</li>
                <li>{isViet ? "Không uống rượu, hút thuốc" : "Avoid alcohol & smoking"}</li>
                <li>{isViet ? "Vệ sinh răng miệng tốt" : "Maintain proper oral hygiene"}</li>
              </ul>
            </section>

            {/* SECTION 6 */}
            <section id="section6">
              <SectionHeading {...sections[5]} />
              <ul className="list-disc ml-6 space-y-2">
                <li>{isViet ? "Chườm lạnh 24 giờ đầu" : "Ice pack for first 24 hours"}</li>
                <li>{isViet ? "Ăn thức ăn mềm" : "Stick to soft foods"}</li>
                <li>{isViet ? "Tránh hút thuốc" : "Avoid smoking"}</li>
                <li>{isViet ? "Uống thuốc đúng chỉ định" : "Take medication as prescribed"}</li>
              </ul>
            </section>

            {/* SECTION 7 */}
            <section id="section7">
              <SectionHeading {...sections[6]} />
              <ul className="list-disc ml-6 space-y-2">
                <li>{isViet ? "Công nghệ hiện đại, máy móc đạt chuẩn" : "Modern dental equipment & technology"}</li>
                <li>{isViet ? "Bác sĩ chuyên môn cao" : "Highly experienced implantologists"}</li>
                <li>{isViet ? "Sử dụng trụ Implant chính hãng" : "Certified genuine implant systems"}</li>
              </ul>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
}
