import React from "react";
import { Helmet } from "react-helmet";
import hiossenImg from "../pics/hiossen.jpg";
import osstemImg from "../pics/osstem.jpg";
import straumannImg from "../pics/straumann.jpg";
import etkImg from "../pics/etk.jpg";
import biotemImg from "../pics/biotem.jpg";

export default function ImplantInfo({ language }) {
  const isViet = language === "vietnamese";

  const pageTitle = isViet
    ? "Trồng Răng Implant - Thông Tin Chuyên Sâu, Quy Trình, Chi Phí Và Lưu Ý"
    : "Dental Implants - Complete Guide, Procedure, Cost, and Aftercare";

  const sections = [
    { id: "section1", number: "1", title: isViet ? "Trồng Răng Implant Là Gì?" : "What Are Dental Implants?" },
    { id: "section2", number: "2", title: isViet ? "Khi Nào Nên Trồng Răng Implant?" : "When Should You Get Dental Implants?" },
    { id: "section3", number: "3", title: isViet ? "Quy Trình Trồng Răng Implant Chuẩn" : "Standard Implant Procedure" },
    { id: "section4", number: "4", title: isViet ? "Các Loại Trụ Implant & Dịch Vụ Hỗ Trợ" : "Implant Brands & Supporting Services" },
    { id: "section5", number: "5", title: isViet ? "Lưu Ý Trước Khi Trồng Implant" : "Important Notes Before Implant Surgery" },
    { id: "section6", number: "6", title: isViet ? "Lưu Ý Sau Khi Trồng Implant" : "Important Notes After Implant Surgery" },
    { id: "section7", number: "7", title: isViet ? "Vì Sao Chọn Emis Dental?" : "Why Choose Emis Dental?" },
  ];

  const brandData = [
    { 
      name: isViet 
        ? "Implant Biotem (Hàn Quốc) - 7 NĂM" 
        : "Biotem Implant (South Korea) – 7 YEARS", 
      img: biotemImg 
    },
    { 
      name: isViet 
        ? "Implant ETK (Pháp) - 15 NĂM" 
        : "ETK Implant (France) – 15 YEARS", 
      img: etkImg 
    },
    { 
      name: isViet 
        ? "Implant Osstem (Hàn Quốc) - 10 NĂM" 
        : "Osstem Implant (South Korea) – 10 YEARS", 
      img: osstemImg 
    },
    { 
      name: isViet 
        ? "Implant Hiossen (Mỹ) - 13 NĂM" 
        : "Hiossen Implant (USA) – 13 YEARS", 
      img: hiossenImg 
    },
    { 
      name: isViet 
        ? "Implant Straumann (Thụy Sĩ) - 20 NĂM" 
        : "Straumann Implant (Switzerland) – 20 YEARS", 
      img: straumannImg 
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
              : "A complete guide on dental implants including indications, procedures, cost, and essential aftercare."
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
                // --------------------------------------------------
                // 1. TRỒNG RĂNG IMPLANT LÀ GÌ?
                // --------------------------------------------------
                case "section1":
                  content = (
                    <>
                      <p className="mb-4">
                        {isViet
                          ? "Trồng răng Implant là phương pháp phục hình răng đã mất bằng cách cấy một trụ Titanium vào xương hàm, đóng vai trò như chân răng thật. Sau khi trụ tích hợp vào xương hàm, bác sĩ sẽ gắn khớp nối (Abutment) và mão răng sứ lên trên."
                          : "A dental implant is a tooth-replacement solution where a titanium post is placed into the jawbone to act as an artificial root. After the implant integrates with the bone, an abutment and porcelain crown are attached."}
                      </p>

                      <p className="font-semibold mt-4">
                        {isViet ? "Có Mấy Loại Trồng Răng Implant?" : "Types of Dental Implant Treatments:"}
                      </p>

                      <ul className="list-disc ml-6 space-y-2 mt-2">
                        <li>
                          {isViet
                            ? "Implant Đơn Lẻ: Cấy 1 trụ Implant cho 1 răng bị mất."
                            : "Single Implant: One implant for one missing tooth."}
                        </li>
                        <li>
                          {isViet
                            ? "Cầu Răng Sứ Trên Implant: Phục hình nhiều răng mất liên tiếp."
                            : "Implant Bridge: Used when several consecutive teeth are missing."}
                        </li>
                        <li>
                          {isViet
                            ? "Implant Toàn Hàm: Kỹ thuật ALL-ON-4/5/6 dùng 4–6 trụ để phục hình toàn hàm."
                            : "Full-Arch Implant (ALL-ON-4/5/6): Uses 4–6 implants to restore a full arch."}
                        </li>
                      </ul>
                    </>
                  );
                  break;

                // --------------------------------------------------
                // 2. TRƯỜNG HỢP NÊN TRỒNG IMPLANT
                // --------------------------------------------------
                case "section2":
                  content = (
                    <>
                      <p className="mb-4">
                        {isViet
                          ? "Trồng răng Implant là giải pháp tối ưu cho hầu hết các trường hợp mất răng."
                          : "Dental implants are an optimal solution for most cases of tooth loss."}
                      </p>

                      <ul className="list-disc ml-6 space-y-2">
                        <li>{isViet ? "Mất một hoặc nhiều răng độc lập." : "Missing one or several teeth."}</li>
                        <li>{isViet ? "Mất răng lâu ngày gây tiêu xương hàm." : "Long-term missing teeth causing bone loss."}</li>
                        <li>{isViet ? "Mất toàn bộ răng trên một hoặc hai hàm." : "Complete tooth loss in one or both arches."}</li>
                        <li>{isViet ? "Không phù hợp với răng giả tháo lắp." : "Cannot tolerate removable dentures."}</li>
                        <li>
                          {isViet
                            ? "Không muốn làm cầu răng vì gây hại răng thật."
                            : "Do not want bridges that damage the adjacent natural teeth."}
                        </li>
                      </ul>
                    </>
                  );
                  break;

                // --------------------------------------------------
                // 3. QUY TRÌNH IMPLANT
                // --------------------------------------------------
                case "section3":
                  content = (
                    <>
                      <p className="mb-4">
                        {isViet
                          ? "Quy trình trồng răng Implant tại Emis Dental được thực hiện theo tiêu chuẩn Quốc Tế, đảm bảo vô trùng tuyệt đối."
                          : "The implant procedure at Emis Dental follows international standards and strict sterilization protocols."}
                      </p>

                      <ol className="list-decimal ml-6 space-y-2">
                        <li>
                          {isViet
                            ? "Thăm khám & Chụp Cone Beam CT để đánh giá xương và dây thần kinh."
                            : "Examination & Cone Beam CT to assess bone structure and nerve positioning."}
                        </li>
                        <li>
                          {isViet
                            ? "Lập phác đồ điều trị chi tiết dựa trên kết quả CT."
                            : "Detailed treatment planning based on CT results."}
                        </li>
                        <li>
                          {isViet
                            ? "Phẫu thuật cấy trụ Titanium trong phòng vô trùng."
                            : "Surgical placement of the titanium implant."}
                        </li>
                        <li>
                          {isViet
                            ? "Giai đoạn chờ tích hợp xương (vài tuần đến vài tháng)."
                            : "Bone integration phase (several weeks to a few months)."}
                        </li>
                        <li>
                          {isViet
                            ? "Lắp khớp nối (Abutment) và mão sứ hoàn tất phục hình."
                            : "Abutment placement and porcelain crown restoration."}
                        </li>
                      </ol>
                    </>
                  );
                  break;

                // --------------------------------------------------
                // 4. CÁC LOẠI TRỤ + DỊCH VỤ HỖ TRỢ
                // --------------------------------------------------
                case "section4":
                  content = (
                    <>
                      <p className="mb-4">
                        {isViet
                          ? "Chi phí trồng răng Implant phụ thuộc vào loại trụ và các dịch vụ hỗ trợ đi kèm."
                          : "The cost of dental implants depends on the implant brand and additional supporting procedures."}
                      </p>

                      <p className="font-semibold mb-4">
                        {isViet ? "Các Dòng Trụ Implant:" : "Implant Brands:"}
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

                      <p className="font-semibold mt-6">
                        {isViet ? "Dịch Vụ Hỗ Trợ:" : "Supporting Procedures:"}
                      </p>

                      <ul className="list-disc ml-6 space-y-2 mt-2">
                        <li>{isViet ? "Ghép xương nhân tạo" : "Bone grafting"}</li>
                        <li>{isViet ? "Ghép màng sinh học" : "Membrane grafting"}</li>
                        <li>{isViet ? "Nâng xoang kín" : "Closed sinus lift"}</li>
                        <li>{isViet ? "Nâng xoang hở" : "Open sinus lift"}</li>
                      </ul>
                    </>
                  );
                  break;

                // --------------------------------------------------
                // 5. LƯU Ý TRƯỚC KHI TRỒNG
                // --------------------------------------------------
                case "section5":
                  content = (
                    <ul className="list-disc ml-6 space-y-2">
                      <li>{isViet ? "Chụp phim CT kiểm tra mật độ xương trước điều trị." : "Take a CT scan to assess bone condition."}</li>
                      <li>{isViet ? "Thông báo lịch sử bệnh lý và thuốc đang dùng." : "Inform dentist about medical history and medications."}</li>
                      <li>{isViet ? "Không dùng rượu bia, thuốc lá trong thời gian điều trị." : "Avoid alcohol and smoking during treatment period."}</li>
                      <li>{isViet ? "Giữ vệ sinh răng miệng sạch sẽ." : "Maintain proper oral hygiene."}</li>
                      <li>{isViet ? "Mặc trang phục thoải mái và giữ tâm lý ổn định." : "Wear comfortable clothing and stay relaxed."}</li>
                    </ul>
                  );
                  break;

                // --------------------------------------------------
                // 6. LƯU Ý SAU KHI TRỒNG
                // --------------------------------------------------
                case "section6":
                  content = (
                    <ul className="list-disc ml-6 space-y-2">
                      <li>{isViet ? "Chườm đá 24 giờ đầu để giảm sưng." : "Apply ice for the first 24 hours."}</li>
                      <li>{isViet ? "Ăn thức ăn mềm và tránh nhai tại vị trí cấy ghép." : "Eat soft foods and avoid chewing on the implant area."}</li>
                      <li>{isViet ? "Không hút thuốc hoặc uống rượu ít nhất 2 tuần." : "No smoking or alcohol for at least 2 weeks."}</li>
                      <li>{isViet ? "Uống thuốc đúng chỉ dẫn của bác sĩ." : "Take prescribed medication as directed."}</li>
                      <li>{isViet ? "Tái khám đúng hẹn." : "Attend follow-up appointments."}</li>
                    </ul>
                  );
                  break;

                // --------------------------------------------------
                // 7. LÝ DO CHỌN EMIS
                // --------------------------------------------------
                case "section7":
                  content = (
                    <ul className="list-disc ml-6 space-y-2">
                      <li>
                        {isViet
                          ? "Trụ Implant đa dạng & chính hãng, bảo hành theo quy định của hãng."
                          : "Wide selection of authentic implant brands with official warranty."}
                      </li>
                      <li>
                        {isViet
                          ? "Trang thiết bị hiện đại như máy chụp Cone Beam CT cho kết quả chính xác."
                          : "Modern equipment including Cone Beam CT for precise planning."}
                      </li>
                      <li>
                        {isViet
                          ? "Kinh nghiệm phục hình đơn lẻ và toàn hàm, bao gồm ALL-ON-4/5/6."
                          : "Experienced in single-tooth and full-arch restorations including ALL-ON-4/5/6."}
                      </li>
                      <li>
                        {isViet
                          ? "Thành thạo các kỹ thuật nâng xoang và ghép xương phức tạp."
                          : "Highly skilled in sinus lifting and complex bone grafting procedures."}
                      </li>
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
                  className={`p-8 rounded-2xl shadow-lg mb-10 ${idx % 2 === 0 ? "bg-[#f9f7f2]" : "bg-white"}`}
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
