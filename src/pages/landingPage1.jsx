import React from "react";

// --- Section 5 Images (Smile Design Forms) ---
import form1Eng from "../pics/WEB/forms/eng/1.png";
import form2Eng from "../pics/WEB/forms/eng/2.png";
import form3Eng from "../pics/WEB/forms/eng/3.png";
import form4Eng from "../pics/WEB/forms/eng/4.png";
import form5Eng from "../pics/WEB/forms/eng/5.png";
import form6Eng from "../pics/WEB/forms/eng/6.png";
import form7Eng from "../pics/WEB/forms/eng/7.png";
import form8Eng from "../pics/WEB/forms/eng/8.png";

import form1Vie from "../pics/WEB/forms/vie/1.png";
import form2Vie from "../pics/WEB/forms/vie/2.png";
import form3Vie from "../pics/WEB/forms/vie/3.png";
import form4Vie from "../pics/WEB/forms/vie/4.png";
import form5Vie from "../pics/WEB/forms/vie/5.png";
import form6Vie from "../pics/WEB/forms/vie/6.png";
import form7Vie from "../pics/WEB/forms/vie/7.png";
import form8Vie from "../pics/WEB/forms/vie/8.png";

// --- Section 7 Images (Crown Types) ---
import crown1Eng from "../pics/WEB/veneer/eng/1.png";
import crown2Eng from "../pics/WEB/veneer/eng/2.png";
import crown3Eng from "../pics/WEB/veneer/eng/3.png";
import crown4Eng from "../pics/WEB/veneer/eng/4.png";
import crown5Eng from "../pics/WEB/veneer/eng/5.png";
import crown6Eng from "../pics/WEB/veneer/eng/6.png";
import crown7Eng from "../pics/WEB/veneer/eng/7.png";
import crown8Eng from "../pics/WEB/veneer/eng/8.png";

import crown1Vie from "../pics/WEB/veneer/vie/1.png";
import crown2Vie from "../pics/WEB/veneer/vie/2.png";
import crown3Vie from "../pics/WEB/veneer/vie/3.png";
import crown4Vie from "../pics/WEB/veneer/vie/4.png";
import crown5Vie from "../pics/WEB/veneer/vie/5.png";
import crown6Vie from "../pics/WEB/veneer/vie/6.png";
import crown7Vie from "../pics/WEB/veneer/vie/7.png";
import crown8Vie from "../pics/WEB/veneer/vie/8.png";

export default function CrownLanding({ language }) {
  const isVie = language === "vietnamese";

  // Image arrays
  const formImages = isVie
    ? [form1Vie, form2Vie, form3Vie, form4Vie, form5Vie, form6Vie, form7Vie, form8Vie]
    : [form1Eng, form2Eng, form3Eng, form4Eng, form5Eng, form6Eng, form7Eng, form8Eng];

  const crownImages = isVie
    ? [crown1Vie, crown2Vie, crown3Vie, crown4Vie, crown5Vie, crown6Vie, crown7Vie, crown8Vie]
    : [crown1Eng, crown2Eng, crown3Eng, crown4Eng, crown5Eng, crown6Eng, crown7Eng, crown8Eng];

  // Gallery Component
  const ImageGallery = ({ images, title }) => (
    <div className="my-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img 
              src={img} 
              alt={`${isVie ? 'Thiết kế' : 'Design'} ${index + 1}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 text-center">
              <span className="text-sm text-gray-600">
                {isVie ? `Mẫu ${index + 1}` : `Sample ${index + 1}`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            {isVie ? "Nha Khoa Thẩm Mỹ" : "Cosmetic Dentistry"}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {isVie ? "Bọc Răng Sứ Thẩm Mỹ" : "Aesthetic Dental Crowns"}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {isVie 
              ? "Khám phá giải pháp phục hình răng toàn diện mang lại nụ cười hoàn hảo"
              : "Discover comprehensive dental restoration solutions for your perfect smile"}
          </p>
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-amber-400 rounded-full mr-3"></span>
                {isVie ? "Giới Thiệu" : "Introduction"}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  {isVie
                    ? "Bọc răng sứ là phương pháp thẩm mỹ nha khoa tiên tiến, sử dụng mão răng bằng sứ cao cấp bọc lên răng thật đã được mài nhỏ. Kỹ thuật này không chỉ khắc phục các khuyết điểm về hình dáng, màu sắc răng mà còn bảo vệ răng thật và phục hồi chức năng ăn nhai."
                    : "Dental crowns are an advanced cosmetic dentistry procedure that uses high-quality porcelain crowns placed over prepared natural teeth. This technique not only corrects shape and color imperfections but also protects natural teeth and restores chewing function."}
                </p>
              </div>
            </section>

            {/* What are Dental Crowns */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-amber-400 rounded-full mr-3"></span>
                {isVie ? "Bọc Răng Sứ Là Gì?" : "What Are Dental Crowns?"}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isVie
                    ? "Bọc răng sứ là quy trình phục hình thẩm mỹ trong đó một mão răng bằng sứ được chế tác tinh xảo sẽ bọc lên răng thật. Phương pháp này giúp:"
                    : "Dental crowning is a cosmetic restoration procedure where a meticulously crafted porcelain crown covers your natural tooth. This method helps:"}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  {isVie ? [
                    "Khắc phục răng thưa, hô, móm nhẹ",
                    "Phục hồi răng sứt mẻ, vỡ lớn",
                    "Cải thiện răng nhiễm màu kháng trị",
                    "Bảo vệ răng sau điều trị tủy",
                    "Phục hình trên implant hoặc cầu răng"
                  ] : [
                    "Correct gaps, minor protrusions or misalignments",
                    "Restore chipped or broken teeth",
                    "Improve severely stained teeth",
                    "Protect teeth after root canal treatment",
                    "Restore dental implants or bridges"
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* When to Get Crowns */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-amber-400 rounded-full mr-3"></span>
                {isVie ? "Khi Nào Cần Bọc Răng Sứ?" : "When Do You Need Dental Crowns?"}
              </h2>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <div className="grid md:grid-cols-2 gap-4">
                  {isVie ? [
                    "Răng nhiễm màu nặng không thể tẩy trắng",
                    "Răng sứt mẻ, vỡ do chấn thương",
                    "Răng thưa, hô nhẹ cần thẩm mỹ",
                    "Răng sau điều trị tủy cần bảo vệ",
                    "Răng sâu lớn, mất nhiều mô răng",
                    "Phục hình thay thế răng mất"
                  ] : [
                    "Severely stained teeth that cannot be whitened",
                    "Chipped or fractured teeth from trauma",
                    "Gapped or slightly protruded teeth",
                    "Teeth needing protection after root canal",
                    "Teeth with large cavities or significant tissue loss",
                    "Replacement of missing teeth"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Smile Design Gallery */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-amber-400 rounded-full mr-3"></span>
                {isVie ? "Thiết Kế Nụ Cười" : "Smile Design"}
              </h2>
              <p className="text-gray-600 mb-6">
                {isVie
                  ? "Khám phá các mẫu thiết kế nụ cười phù hợp với từng khuôn mặt và sở thích cá nhân"
                  : "Explore smile designs tailored to different facial features and personal preferences"}
              </p>
              <ImageGallery 
                images={formImages} 
                title={isVie ? "Các Mẫu Thiết Kế Nụ Cười" : "Smile Design Examples"} 
              />
            </section>

            {/* Crown Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-amber-400 rounded-full mr-3"></span>
                {isVie ? "Các Loại Răng Sứ" : "Crown Types"}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
                <div className="space-y-4">
                  {isVie ? [
                    { type: "Sứ Titan", warranty: "Bảo hành 2 năm" },
                    { type: "Sứ Toàn Sứ EMIS", warranty: "Bảo hành 5 năm" },
                    { type: "Zirconia Mỹ/Đức", warranty: "Bảo hành 10 năm" },
                    { type: "Lava Mỹ", warranty: "Bảo hành 12-20 năm" },
                    { type: "Orodent Italy", warranty: "Bảo hành trọn đời" },
                    { type: "Veneer Emax", warranty: "Bảo hành 10 năm" }
                  ] : [
                    { type: "Titan Crowns", warranty: "2-year warranty" },
                    { type: "EMIS All-Ceramic", warranty: "5-year warranty" },
                    { type: "Zirconia (US/Germany)", warranty: "10-year warranty" },
                    { type: "Lava (USA)", warranty: "12-20 years warranty" },
                    { type: "Orodent (Italy)", warranty: "Lifetime warranty" },
                    { type: "Emax Veneers", warranty: "10-year warranty" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-800">{item.type}</span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        {item.warranty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <ImageGallery 
                images={crownImages} 
                title={isVie ? "Mẫu Răng Sứ Thực Tế" : "Actual Crown Examples"} 
              />
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-amber-400 rounded-full mr-3"></span>
                {isVie ? "Lợi Ích" : "Benefits"}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {isVie ? [
                  "Thẩm mỹ tự nhiên như răng thật",
                  "Độ bền cao, sử dụng lên đến 30 năm",
                  "Bảo vệ răng thật toàn diện",
                  "Khôi phục chức năng ăn nhai",
                  "Dễ dàng vệ sinh và bảo quản",
                  "Màu sắc ổn định, không bị xỉn theo thời gian"
                ] : [
                  "Natural aesthetics matching real teeth",
                  "High durability, lasting up to 30 years",
                  "Comprehensive protection for natural teeth",
                  "Restored chewing function",
                  "Easy cleaning and maintenance",
                  "Stable color, resistant to staining over time"
                ].map((benefit, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✓</span>
                      </span>
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-amber-400 rounded-full mr-3"></span>
                {isVie ? "Tại Sao Chọn Emis Dental?" : "Why Choose Emis Dental?"}
              </h2>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="space-y-4">
                  {isVie ? [
                    "Phòng khám đạt tiêu chuẩn quốc tế với trang thiết bị hiện đại",
                    "Đội ngũ bác sĩ giàu kinh nghiệm, chuyên môn cao",
                    "Vật liệu chính hãng từ các thương hiệu uy tín toàn cầu",
                    "Quy trình vô trùng tuyệt đối, an toàn tối đa",
                    "Bảo hành minh bạch, chính sách rõ ràng",
                    "Tư vấn tận tâm, thiết kế nụ cười cá nhân hóa"
                  ] : [
                    "International standard clinic with modern equipment",
                    "Experienced, highly specialized dental team",
                    "Genuine materials from reputable global brands",
                    "Absolute sterilization procedures, maximum safety",
                    "Transparent warranty, clear policies",
                    "Dedicated consultation, personalized smile design"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* CTA Footer */}
          <footer className="bg-gradient-to-r from-amber-500 to-amber-400 text-white py-12 px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {isVie ? "Bắt Đầu Hành Trình Nụ Cười Mới" : "Start Your Smile Journey Today"}
            </h3>
            <p className="mb-6 text-amber-100 max-w-2xl mx-auto">
              {isVie
                ? "Liên hệ ngay với chúng tôi để được tư vấn miễn phí và thiết kế nụ cười hoàn hảo nhất cho bạn"
                : "Contact us today for a free consultation and design the perfect smile just for you"}
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {isVie ? "Đặt Lịch Tư Vấn Miễn Phí" : "Schedule Free Consultation"}
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
}