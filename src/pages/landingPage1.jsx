import { useState, useEffect } from 'react';
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

export default function VeneerLanding({ language = "vietnamese" }) {
  const [isVie, setIsVie] = useState(language === "vietnamese");

  useEffect(() => {
    setIsVie(language === "vietnamese");
  }, [language]);

  // Image arrays for smile design gallery
  const smileDesignImages = isVie
    ? [form1Vie, form2Vie, form3Vie, form4Vie, form5Vie, form6Vie, form7Vie, form8Vie]
    : [form1Eng, form2Eng, form3Eng, form4Eng, form5Eng, form6Eng, form7Eng, form8Eng];

  // Gallery Component
  const ImageGallery = ({ images, title }) => (
    <div className="my-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <img 
              src={img} 
              alt={`${isVie ? 'Thiết kế' : 'Design'} ${index + 1}`}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
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

  // Benefits data for Section 4
  const benefitsData = isVie ? [
    {
      title: "Bảo Tồn Răng Thật Tối Đa",
      desc: "Mài răng rất ít hoặc không mài, bảo vệ mô răng thật, không ảnh hưởng tủy răng"
    },
    {
      title: "Thẩm Mỹ Hoàn Hảo",
      desc: "Độ trong và màu sắc tự nhiên, không đổi màu theo thời gian, nụ cười rạng rỡ"
    },
    {
      title: "Độ Bền Cao",
      desc: "Mỏng nhưng bền bỉ với keo dán chuyên dụng, chịu lực ăn nhai bình thường"
    },
    {
      title: "Thời Gian Nhanh Chóng",
      desc: "Kết quả thẩm mỹ gần như tức thì so với chỉnh nha truyền thống"
    }
  ] : [
    {
      title: "Maximum Tooth Preservation",
      desc: "Minimal or no tooth reduction, protects natural tooth structure, no pulp affect"
    },
    {
      title: "Perfect Aesthetics",
      desc: "Natural transparency and color, no discoloration over time, radiant smile"
    },
    {
      title: "High Durability",
      desc: "Thin yet durable with specialized bonding, withstands normal chewing forces"
    },
    {
      title: "Quick Results",
      desc: "Almost instant aesthetic results compared to traditional orthodontics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            {isVie ? "Nha Khoa Thẩm Mỹ" : "Cosmetic Dentistry"}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {isVie ? "Dán Sứ Veneer Thẩm Mỹ Cao Cấp" : "Premium Porcelain Veneers"}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {isVie 
              ? "Giải pháp thẩm mỹ bảo tồn tối đa - Nụ cười hoàn hảo chỉ sau 2-3 lần hẹn"
              : "Maximum preservation cosmetic solution - Perfect smile in just 2-3 appointments"}
          </p>
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            {/* Section 1: What are Veneers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-blue-400 rounded-full mr-3"></span>
                {isVie ? "1. Dán Sứ Veneer Là Gì?" : "1. What Are Porcelain Veneers?"}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isVie
                    ? "Dán sứ Veneer là kỹ thuật thẩm mỹ nha khoa hiện đại, trong đó bác sĩ sẽ sử dụng một lớp sứ mỏng, được chế tác cá nhân hóa, có độ dày chỉ từ 0.2 – 0.6mm (tương đương với kính áp tròng), để dán cố định lên bề mặt ngoài của răng."
                    : "Porcelain veneers are a modern cosmetic dental technique where the dentist uses a thin, custom-made porcelain layer, only 0.2-0.6mm thick (equivalent to contact lenses), permanently bonded to the front surface of teeth."}
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-blue-800 font-medium">
                    {isVie
                      ? "Khác với bọc răng sứ (cần mài mô răng thật nhiều hơn), dán sứ Veneer giúp bảo tồn răng thật tối đa, chỉ mài một lượng rất nhỏ ở bề mặt hoặc thậm chí không cần mài (tùy tình trạng răng), mang lại tính thẩm mỹ cao và sự tự nhiên tuyệt đối."
                      : "Unlike dental crowns (which require more tooth reduction), porcelain veneers maximize natural tooth preservation, requiring minimal or no tooth preparation (depending on tooth condition), delivering high aesthetics and absolute natural appearance."}
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: When to Choose Veneers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-blue-400 rounded-full mr-3"></span>
                {isVie ? "2. Trường Hợp Nào Nên Dán Sứ Veneer?" : "2. When Should You Choose Veneers?"}
              </h2>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <p className="text-gray-700 mb-4 font-medium">
                  {isVie
                    ? "Dán sứ Veneer là giải pháp lý tưởng cho các trường hợp răng có khuyết điểm nhẹ, không quá nghiêm trọng về khớp cắn:"
                    : "Porcelain veneers are ideal for teeth with minor imperfections, without severe bite issues:"}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {isVie ? [
                    "Răng bị nhiễm màu nhẹ không thể tẩy trắng",
                    "Răng sứt mẻ nhẹ ở cạnh cắn",
                    "Răng có hình dáng không đẹp, quá ngắn hoặc nhỏ",
                    "Răng thưa kẽ nhẹ cần che phủ",
                    "Khách hàng ưu tiên bảo tồn răng thật"
                  ] : [
                    "Mildly stained teeth that cannot be whitened",
                    "Slightly chipped teeth at biting edges",
                    "Teeth with unattractive shape, too short or small",
                    "Minor gaps between teeth needing coverage",
                    "Patients prioritizing natural tooth preservation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: Premium Veneer Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-blue-400 rounded-full mr-3"></span>
                {isVie ? "3. Các Loại Veneer Cao Cấp Tại Emis Dental" : "3. Premium Veneer Types at Emis Dental"}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
                  <h4 className="text-xl font-bold text-blue-800 mb-3">
                    {isVie ? "Dán Sứ Emax Veneer (Xuất xứ Đức)" : "Emax Veneers (German Origin)"}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isVie
                      ? "Đây là dòng sứ cao cấp được chế tác từ Lithium Disilicate, nổi tiếng với độ mỏng, độ trong suốt và khả năng mô phỏng quang học hoàn hảo của răng tự nhiên. Sứ Emax có độ bền cao, chống mài mòn tốt."
                      : "This premium porcelain line is crafted from Lithium Disilicate, renowned for its thinness, transparency, and perfect optical simulation of natural teeth. Emax porcelain offers high durability and excellent wear resistance."}
                  </p>
                  <div className="mt-4 bg-green-50 rounded-lg p-3 border border-green-200">
                    <span className="text-green-800 font-semibold">
                      {isVie ? "BẢO HÀNH 10 NĂM" : "10-YEAR WARRANTY"}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Why Customers Prefer Veneers - FIXED */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-blue-400 rounded-full mr-3"></span>
                {isVie ? "4. Vì Sao Khách Hàng Ưu Chuộng Dán Sứ Veneer?" : "4. Why Customers Prefer Porcelain Veneers?"}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefitsData.map((benefit, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <h4 className="font-bold text-green-800 mb-2">{benefit.title}</h4>
                    <p className="text-gray-700 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Rest of your sections remain the same... */}
            {/* Section 5: Smile Design Personalization */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-8 bg-blue-400 rounded-full mr-3"></span>
                {isVie ? "5. Cá Nhân Hóa Nụ Cười Tại Emis Dental" : "5. Smile Personalization at Emis Dental"}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
                <div className="space-y-4">
                  {isVie ? [
                    "Phân Tích Khuôn Mặt: Tỉ lệ răng, khuôn miệng, đường cười, màu da và tính cách",
                    "Công Nghệ Mô Phỏng (Mock-up): Xem trước nụ cười trên mô hình hoặc máy tính",
                    "Lựa Chọn Dáng Răng: Dáng Tự Nhiên, Dáng Cá Tính hay Dáng Hollywood",
                    "Thiết Kế Hài Hòa: Đảm bảo sự cân đối và độc đáo cho từng cá nhân"
                  ] : [
                    "Facial Analysis: Tooth proportions, mouth shape, smile line, skin tone and personality",
                    "Simulation Technology (Mock-up): Preview your smile on models or computer",
                    "Tooth Shape Selection: Natural, Personality, or Hollywood styles",
                    "Harmonious Design: Ensuring balance and uniqueness for each individual"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <ImageGallery 
                images={smileDesignImages} 
                title={isVie ? "Các Mẫu Thiết Kế Nụ Cười" : "Smile Design Examples"} 
              />
            </section>

            {/* Continue with other sections... */}

          </div>

          {/* CTA Footer */}
          <footer className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12 px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {isVie ? "Bắt Đầu Hành Trình Nụ Cười Mới" : "Start Your New Smile Journey"}
            </h3>
            <p className="mb-6 text-blue-100 max-w-2xl mx-auto text-lg">
              {isVie
                ? "Liên hệ ngay với Emis Dental để được tư vấn miễn phí và trải nghiệm dịch vụ dán sứ Veneer cao cấp"
                : "Contact Emis Dental today for free consultation and experience our premium veneer services"}
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {isVie ? "Đặt Lịch Tư Vấn Miễn Phí" : "Schedule Free Consultation"}
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
}