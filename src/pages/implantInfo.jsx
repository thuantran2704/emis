import React from "react";
import { Helmet } from "react-helmet";
import typesVie from "../pics/WEB/typesTeeth/vie.png";
import typesEng from "../pics/WEB/typesTeeth/eng.png";
import hiossenImg from "../pics/hiossen.jpg";
import osstemImg from "../pics/osstem.jpg";
import straumannImg from "../pics/straumann.jpg";

export default function ImplantInfo({ language }) {
  const isViet = language === "vietnamese";
  const typesImage = isViet ? typesVie : typesEng;

  const title = isViet
    ? "Trồng Răng Implant – Thông Tin Chi Tiết Và Quy Trình"
    : "Dental Implants – Full Information And Procedure";

  const brandData = [
    { name: isViet ? "Osstem (Hàn Quốc) 10 Năm" : "Osstem Korea 10 Years", img: osstemImg },
    { name: isViet ? "Hiossen Mỹ 13 Năm" : "Hiossen USA 13 Years", img: hiossenImg },
    { name: isViet ? "Straumann Thụy Sĩ 20 Năm" : "Straumann Switzerland 20 Years", img: straumannImg }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {/* Main Container */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h1 className="text-4xl font-bold text-[#1f2937] mb-10 text-left border-l-4 border-[#d4af37] pl-4">
          {title}
        </h1>

        <article className="text-[17px] text-gray-700 leading-[1.75] space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#374151] mb-3">
              {isViet ? "1 Trồng Răng Implant Là Gì" : "1 What Is Dental Implant"}
            </h2>
            <p>
              {isViet
                ? "Trồng răng Implant là phương pháp phục hình răng đã mất bằng cách cấy một trụ Titanium vào xương hàm đóng vai trò như chân răng thật. Khi trụ đã tích hợp vào xương hàm bác sĩ sẽ gắn khớp nối và mão sứ lên trên."
                : "Dental implant is a method to restore missing teeth by placing a titanium post into the jawbone acting like a natural root. Once integrated the abutment and crown are placed on top."}
            </p>
            <p>
              {isViet
                ? "Có ba dạng chính gồm Implant đơn lẻ dùng cho một răng mất Cầu răng sứ trên Implant dùng cho nhiều răng liên tiếp và Implant toàn hàm với kỹ thuật ALL ON 4 ALL ON 5 hoặc ALL ON 6."
                : "There are three main types including Single implant used for one missing tooth Implant bridge for multiple adjacent teeth and Full arch implant using techniques such as ALL ON 4 ALL ON 5 or ALL ON 6."}
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#374151] mb-4">
              {isViet ? "2 Khi Nào Nên Trồng Răng Implant" : "2 When To Choose Dental Implant"}
            </h2>
            <img src={typesImage} alt="types of implants" className="w-full max-w-3xl mx-auto my-4 rounded-xl shadow" />
            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Mất một hoặc nhiều răng" : "Missing one or multiple teeth"}</li>
              <li>{isViet ? "Tiêu xương hàm do mất răng lâu ngày" : "Bone loss after long term missing teeth"}</li>
              <li>{isViet ? "Mất toàn bộ răng một hoặc hai hàm" : "Loss of all teeth in one or both jaws"}</li>
              <li>{isViet ? "Không phù hợp với răng giả tháo lắp" : "Not suitable for removable dentures"}</li>
              <li>{isViet ? "Không muốn làm cầu răng" : "Do not want dental bridges"}</li>
              <li>{isViet ? "Cầu răng xuống cấp" : "Old bridges wearing out"}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl text-[#374151] font-semibold mb-4">
              {isViet
                ? "3 Quy Trình Trồng Răng Implant Chuẩn"
                : "3 Standard Implant Procedure"}
            </h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>{isViet ? "Thăm khám và chụp CT đánh giá xương" : "Consultation and CT scan to assess the bone"}</li>
              <li>{isViet ? "Lập kế hoạch cấy ghép" : "Implant planning"}</li>
              <li>{isViet ? "Cấy trụ Titanium trong phòng vô trùng" : "Placing titanium post in sterile environment"}</li>
              <li>{isViet ? "Chờ trụ tích hợp" : "Healing and bone integration"}</li>
              <li>{isViet ? "Gắn khớp nối và mão sứ" : "Placing abutment and crown"}</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#374151] mb-4">
              {isViet ? "4 Các Loại Trụ Implant" : "4 Implant Types"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandData.map((brand index) => (
                <div key={index} className="text-center bg-gray-50 rounded-xl shadow p-4">
                  <img src={brand.img} alt={brand.name} className="mx-auto w-28 h-28 object-contain mb-2 rounded" />
                  <p className="text-[#374151] font-medium">{brand.name}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              {isViet
                ? "Dịch vụ hỗ trợ gồm ghép xương ghép màng nâng xoang kín và nâng xoang hở"
                : "Support services include bone graft membrane graft closed sinus lift and open sinus lift"}
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#374151] mb-4">
              {isViet ? "5 Lưu Ý Trước Khi Trồng Implant" : "5 Notes Before Implant"}
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Chụp CT kiểm tra xương" : "CT scan to check bone"}</li>
              <li>{isViet ? "Thông báo bệnh lý đang có" : "Inform medical conditions"}</li>
              <li>{isViet ? "Không dùng rượu bia và thuốc lá" : "Avoid alcohol and cigarettes"}</li>
              <li>{isViet ? "Vệ sinh răng miệng sạch" : "Maintain oral hygiene"}</li>
              <li>{isViet ? "Chuẩn bị tâm lý thoải mái" : "Stay mentally prepared"}</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#374151] mb-4">
              {isViet ? "6 Lưu Ý Sau Khi Trồng Implant" : "6 Notes After Implant"}
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Chườm lạnh 24 giờ đầu" : "Ice pack for first 24 hours"}</li>
              <li>{isViet ? "Ăn mềm tránh nhai tại vị trí cấy" : "Soft diet avoid chewing on implant area"}</li>
              <li>{isViet ? "Không hút thuốc và không uống cồn" : "No smoking or alcohol"}</li>
              <li>{isViet ? "Uống thuốc đúng hướng dẫn" : "Take medications as instructed"}</li>
              <li>{isViet ? "Tái khám định kỳ" : "Attend follow up appointments"}</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#374151] mb-4">
              {isViet ? "7 Vì Sao Chọn Emis Dental" : "7 Why Choose Emis Dental"}
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Trụ chính hãng đa dạng" : "Wide range of genuine implant brands"}</li>
              <li>{isViet ? "Trang thiết bị hiện đại" : "Modern equipment with CT scan"}</li>
              <li>{isViet ? "Kinh nghiệm nhiều ca đơn lẻ và toàn hàm" : "Experienced in single and full arch cases"}</li>
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}
