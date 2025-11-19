import React from "react";
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
    { 
      name: isViet 
        ? "Osstem (Hàn Quốc), tuổi thọ trung bình khoảng 10 năm" 
        : "Osstem (South Korea), average lifespan around 10 years", 
      img: osstemImg 
    },
    { 
      name: isViet 
        ? "Hiossen (Hoa Kỳ), tuổi thọ trung bình khoảng 13 năm" 
        : "Hiossen (United States), average lifespan around 13 years", 
      img: hiossenImg 
    },
    { 
      name: isViet 
        ? "Straumann (Thụy Sĩ), tuổi thọ trung bình khoảng 20 năm" 
        : "Straumann (Switzerland), average lifespan around 20 years", 
      img: straumannImg 
    },
    { 
      name: isViet 
        ? "Biotem (Hàn Quốc), tuổi thọ trung bình khoảng 7 năm" 
        : "Biotem (South Korea), average lifespan around 7 years", 
      img: biotemImg 
    },
    { 
      name: isViet 
        ? "ETK (Pháp), tuổi thọ trung bình khoảng 15 năm" 
        : "ETK (France), average lifespan around 15 years", 
      img: etkImg 
    },
  ];

  const SectionHeading = ({ number, title }) => (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-yellow-600 text-white font-bold rounded-full text-lg">
        {number}
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">{title}</h2>
    </div>
  );

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

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-10 leading-tight">
          {pageTitle}
        </h1>

        <div className="flex gap-10 relative">
          {/* Table of Contents */}
          <aside className="hidden lg:block w-64 sticky top-28 h-max bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {isViet ? "Nội Dung Chính" : "Table of Contents"}
            </h3>
            <ul className="space-y-3 text-gray-700 text-[15px]">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a href={`#${sec.id}`} className="hover:text-yellow-600 transition">
                    {sec.number}. {sec.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Article Content */}
          <article className="flex-1 space-y-10">
            {sections.map((sec, idx) => {
              let content;
              switch (sec.id) {
                case "section1":
                  content = (
                    <>
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
                    </>
                  );
                  break;
                case "section2":
                  content = (
                    <>
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
                    </>
                  );
                  break;
                case "section3":
                  content = (
                    <ol className="list-decimal ml-6 space-y-2">
                      <li>{isViet ? "Khám và chụp CT 3D" : "Examination & 3D CT scan"}</li>
                      <li>{isViet ? "Lập kế hoạch điều trị" : "Treatment planning"}</li>
                      <li>{isViet ? "Cấy trụ Implant vào xương hàm" : "Implant placement"}</li>
                      <li>{isViet ? "Chờ tích hợp xương (2–4 tháng)" : "Bone integration (2–4 months)"}</li>
                      <li>{isViet ? "Gắn abutment & mão sứ" : "Abutment & crown placement"}</li>
                    </ol>
                  );
                  break;
                case "section4":
                  content = (
                    <>
                      <p className="mb-6">
                        {isViet
                          ? "Dưới đây là 5 thương hiệu Implant phổ biến:"
                          : "Here are five widely trusted implant manufacturers:"}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {brandData.map((brand, idx) => (
                          <div key={idx} className="bg-white shadow-md rounded-xl p-4 text-center hover:scale-105 transition-transform">
                            <img
                              src={brand.img}
                              alt={brand.name}
                              className="mx-auto w-32 h-32 object-contain mb-3"
                            />
                            <p className="font-semibold text-gray-800">{brand.name}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                  break;
                case "section5":
                  content = (
                    <ul className="list-disc ml-6 space-y-2">
                      <li>{isViet ? "Kiểm tra sức khỏe & chụp CT" : "Health check + CT scan"}</li>
                      <li>{isViet ? "Thông báo bệnh lý toàn thân" : "Inform dentist of medical conditions"}</li>
                      <li>{isViet ? "Không uống rượu, hút thuốc" : "Avoid alcohol & smoking"}</li>
                      <li>{isViet ? "Vệ sinh răng miệng tốt" : "Maintain proper oral hygiene"}</li>
                    </ul>
                  );
                  break;
                case "section6":
                  content = (
                    <ul className="list-disc ml-6 space-y-2">
                      <li>{isViet ? "Chườm lạnh 24 giờ đầu" : "Ice pack for first 24 hours"}</li>
                      <li>{isViet ? "Ăn thức ăn mềm" : "Stick to soft foods"}</li>
                      <li>{isViet ? "Tránh hút thuốc" : "Avoid smoking"}</li>
                      <li>{isViet ? "Uống thuốc đúng chỉ định" : "Take medication as prescribed"}</li>
                    </ul>
                  );
                  break;
                case "section7":
                  content = (
                    <ul className="list-disc ml-6 space-y-2">
                      <li>{isViet ? "Công nghệ hiện đại, máy móc đạt chuẩn" : "Modern dental equipment & technology"}</li>
                      <li>{isViet ? "Bác sĩ chuyên môn cao" : "Highly experienced implantologists"}</li>
                      <li>{isViet ? "Sử dụng trụ Implant chính hãng" : "Certified genuine implant systems"}</li>
                    </ul>
                  );
                  break;
                default:
                  content = null;
              }

              return (
                <section
                  key={sec.id}
                  id={sec.id}
                  className={`p-8 rounded-2xl shadow-lg mb-10 ${
                    idx % 2 === 0 ? "bg-[#f9f7f2]" : "bg-white"
                  }`}
                >
                  <SectionHeading number={sec.number} title={sec.title} />
                  {content}
                </section>
              );
            })}
          </article>
        </div>
      </div>
    </main>
  );
}
