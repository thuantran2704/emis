import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import CustomerReactionsBanner from "../components/CustomerReactionBanner";
import MachineBanner from "../components/MachineBanner";
import ImplantCards from "../components/implants_banner";
import MapSection from "../components/MapSection";

import typesVie from "../pics/WEB/typesTeeth/vie.png";
import typesEng from "../pics/WEB/typesTeeth/eng.png";

import hiossenImg from "../pics/hiossen.jpg";
import osstemImg from "../pics/osstem.jpg";
import straumannImg from "../pics/straumann.jpg";
// import etkImg from "../pics/etk.jpg";
// import biotemImg from "../pics/biotem.jpg";

export default function ImplantInfo({ language }) {
  const isViet = language === "vietnamese";
  const typesImage = isViet ? typesVie : typesEng;

  const title = isViet
    ? "Trồng Răng Implant – Thông Tin Chi Tiết Và Quy Trình"
    : "Dental Implants – Full Information And Procedure";

  const brandData = [
    // { name: "Biotem (Hàn Quốc) 7 Năm", img: biotemImg },
    { name: "Osstem (Hàn Quốc) 10 Năm", img: osstemImg },
    { name: "Hiossen (Mỹ) 13 Năm", img: hiossenImg },
    // { name: "ETK (Pháp) 15 Năm", img: etkImg },
    { name: "Straumann (Thụy Sĩ) 20 Năm", img: straumannImg }
  ];

  const SectionHeading = ({ number, title }) => (
    <h3 className="text-2xl font-semibold text-[#374151] mb-4 flex items-center gap-4">
      <span className="text-[#d4af37] font-bold text-lg">{number}.</span>
      <span>{title}</span>
    </h3>
  );

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7] pt-20">
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={
            isViet
              ? "Tìm hiểu chi tiết về trồng răng Implant: quy trình, loại trụ, ưu điểm, chỉ định, lưu ý trước và sau khi cấy ghép tại Emis Dental"
              : "Learn everything about dental implants including procedure, implant types, benefits, indications and care before and after surgery at Emis Dental"
          }
        />
      </Helmet>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#4b4b8f] mb-12 text-center border-b-2 border-[#d4af37] pb-2 inline-block">
          {title}
        </h1>

        <article className="space-y-10 text-gray-700 text-lg leading-relaxed">
          <section>
            <SectionHeading number="1" title={isViet ? "Trồng Răng Implant Là Gì" : "What Is Dental Implant"} />
            <p>
              {isViet
                ? "Trồng răng Implant là phương pháp phục hình răng đã mất bằng cách cấy một trụ Titanium vào xương hàm, đóng vai trò như chân răng thật. Sau khi trụ tích hợp vào xương hàm, bác sĩ sẽ gắn khớp nối và mão răng sứ lên trên."
                : "Dental implant is a method to replace missing teeth by inserting a titanium post into the jawbone acting like a natural tooth root. After integration, the abutment and crown are placed on top."}
            </p>
            <p>
              {isViet
                ? "Có Mấy Loại Trồng Răng Implant: Implant Đơn Lẻ: Cấy 1 trụ cho 1 răng bị mất. Cầu Răng Sứ Trên Implant: Phục hình nhiều răng liên tiếp cần 2-3 trụ. Implant Toàn Hàm: Sử dụng kỹ thuật ALL ON 4, ALL ON 5 hoặc ALL ON 6 để phục hồi toàn bộ hàm răng."
                : "Types of implants include: Single Implant: one post for one missing tooth. Implant Bridge: multiple consecutive teeth restored using 2-3 posts. Full Jaw Implant: ALL ON 4, ALL ON 5 or ALL ON 6 technique to restore the entire jaw."}
            </p>
          </section>

          <section>
            <SectionHeading number="2" title={isViet ? "Trường Hợp Nào Nên Trồng Răng Implant" : "When To Choose Dental Implant"} />
            <img src={typesImage} alt="types of teeth implants" className="w-full max-w-3xl mx-auto my-4 rounded-xl shadow-lg" />
            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Mất một hoặc nhiều răng độc lập" : "Missing one or more individual teeth"}</li>
              <li>{isViet ? "Mất răng lâu ngày dẫn đến tiêu xương hàm" : "Long-term tooth loss causing jawbone resorption"}</li>
              <li>{isViet ? "Mất toàn bộ răng trên một hoặc hai hàm" : "Loss of all teeth in one or both jaws"}</li>
              <li>{isViet ? "Không muốn sử dụng hoặc không phù hợp với răng giả tháo lắp" : "Do not want or cannot use removable dentures"}</li>
              <li>{isViet ? "Không muốn sử dụng cầu răng sứ sau khi mất răng" : "Do not want dental bridges after tooth loss"}</li>
              <li>{isViet ? "Cầu răng sứ xuống cấp ảnh hưởng đến răng thật" : "Worn out bridges affecting natural teeth"}</li>
            </ul>
          </section>

          <section>
            <SectionHeading number="3" title={isViet ? "Quy Trình Trồng Răng Implant Chuẩn tại Emis Dental" : "Standard Implant Procedure at Emis Dental"} />
            <ul className="list-decimal ml-6 space-y-2">
              <li>{isViet ? "Thăm khám và chẩn đoán chuyên sâu với CT scan để đánh giá xương và cấu trúc giải phẫu" : "Comprehensive examination and CT scan to evaluate bone and anatomy"}</li>
              <li>{isViet ? "Lập phác đồ cấy ghép chi tiết bao gồm loại trụ và vị trí" : "Create detailed implant plan including post type and location"}</li>
              <li>{isViet ? "Phẫu thuật cấy trụ Titanium trong phòng vô trùng" : "Surgical insertion of titanium post in sterile room"}</li>
              <li>{isViet ? "Chờ trụ tích hợp ổn định với xương hàm vài tuần đến vài tháng" : "Wait for the post to integrate with jawbone for several weeks to months"}</li>
              <li>{isViet ? "Phục hình sứ với khớp nối và mão răng" : "Place abutment and crown to complete restoration"}</li>
            </ul>
          </section>

          <section>
            <SectionHeading number="4" title={isViet ? "Các Loại Trụ Implant Và Dịch Vụ Hỗ Trợ" : "Implant Types And Support Services"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {brandData.map((brand, index) => (
                <div key={index} className="text-center bg-white rounded-2xl shadow-md p-4">
                  <img src={brand.img} alt={brand.name} className="mx-auto w-32 h-32 object-contain mb-2 rounded-xl" />
                  <p className="text-[#4b4b8f] font-semibold">{brand.name}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">{isViet ? "Dịch vụ hỗ trợ gồm ghép xương nhân tạo, ghép màng, nâng xoang kín và nâng xoang hở" : "Support services include artificial bone graft, membrane graft, closed sinus lift and open sinus lift"}</p>
          </section>

          <section>
            <SectionHeading number="5" title={isViet ? "Những Lưu Ý Trước Khi Trồng Implant" : "Important Notes Before Implant"} />
            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Chụp phim CT kiểm tra tình trạng xương và răng" : "Take CT scan to check bone and teeth condition"}</li>
              <li>{isViet ? "Thông báo tiền sử bệnh lý và thuốc đang sử dụng" : "Inform your doctor about medical history and medications"}</li>
              <li>{isViet ? "Không dùng rượu bia, thuốc lá, chất kích thích" : "Avoid alcohol, cigarettes and stimulants"}</li>
              <li>{isViet ? "Vệ sinh răng miệng sạch sẽ và điều trị bệnh lý nha chu nếu có" : "Maintain oral hygiene and treat gum disease if any"}</li>
              <li>{isViet ? "Mặc trang phục thoải mái và chuẩn bị tâm lý" : "Wear comfortable clothes and prepare mentally"}</li>
            </ul>
          </section>

          <section>
            <SectionHeading number="6" title={isViet ? "Những Lưu Ý Sau Khi Trồng Implant" : "Important Notes After Implant"} />
            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Chườm đá lạnh trong 24 giờ đầu để giảm sưng" : "Apply ice for first 24 hours to reduce swelling"}</li>
              <li>{isViet ? "Ăn thức ăn mềm, tránh nhai tại vị trí cấy ghép" : "Eat soft food and avoid chewing at implant site"}</li>
              <li>{isViet ? "Không hút thuốc hoặc uống đồ có cồn trong 2 tuần" : "Do not smoke or drink alcohol for 2 weeks"}</li>
              <li>{isViet ? "Uống thuốc theo chỉ dẫn bác sĩ" : "Take medications as prescribed by your doctor"}</li>
              <li>{isViet ? "Tái khám đúng hẹn để kiểm tra tích hợp trụ" : "Attend follow-up appointments to check implant integration"}</li>
            </ul>
          </section>

          <section>
            <SectionHeading number="7" title={isViet ? "Vì Sao Chọn Emis Dental" : "Why Choose Emis Dental"} />
            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Trụ Implant đa dạng và chính hãng, bảo hành theo hãng" : "Wide range of authentic implant brands with official warranty"}</li>
              <li>{isViet ? "Trang thiết bị hiện đại với CT scan xác định vị trí trụ chính xác" : "Modern equipment with CT scan ensures accurate placement"}</li>
              <li>{isViet ? "Kinh nghiệm phục hình đơn lẻ và toàn hàm từ đơn giản đến phức tạp" : "Experienced in single and full jaw implants from simple to complex cases"}</li>
            </ul>
          </section>
        </article>
      </section>

      <ContactForm language={language} />
      <ImplantCards language={language} />
      <MachineBanner language={language} />
      <CustomerReactionsBanner language={language} />
      <MapSection content={{ language }} />
    </main>
  );
}
