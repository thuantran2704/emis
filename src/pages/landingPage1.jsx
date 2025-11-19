import React from 'react';
import typesVie from '../pics/WEB/typesTeeth/vie.png';
import typesEng from '../pics/WEB/typesTeeth/eng.png';

export default function LandingPage1({ language = "vietnamese" }) {
  // Define content in both languages
  const content = {
    vietnamese: [
      {
        title: "1. Dán Sứ Veneer là Gì?",
        content: `Dán sứ Veneer là kỹ thuật thẩm mỹ nha khoa hiện đại, trong đó bác sĩ sẽ sử dụng một lớp sứ mỏng, được chế tác cá nhân hóa, có độ dày chỉ từ 0.2 – 0.6mm (tương đương với kính áp tròng), để dán cố định lên bề mặt ngoài của răng.
Khác với bọc răng sứ (cần mài mô răng thật nhiều hơn), dán sứ Veneer giúp bảo tồn răng thật tối đa, chỉ mài một lượng rất nhỏ ở bề mặt hoặc thậm chí không cần mài (tùy tình trạng răng), mang lại tính thẩm mỹ cao và sự tự nhiên tuyệt đối.`
      },
      {
        title: "2. Trường Hợp Nào Nên Dán Sứ Veneer?",
        content: `Dán sứ Veneer là giải pháp lý tưởng cho các trường hợp răng có khuyết điểm nhẹ, không quá nghiêm trọng về khớp cắn:
- Răng bị nhiễm màu
- Răng sứt mẻ nhẹ
- Răng có hình dáng không đẹp
- Răng thưa kẽ nhẹ
- Khách hàng ưu tiên bảo tồn`
      },
      {
        title: "3. Các Loại Veneer Cao Cấp Tại Emis Dental",
        content: `Tại Emis Dental, chúng tôi lựa chọn các dòng sứ Veneer chất lượng hàng đầu, cam kết độ bền, độ mỏng và tính thẩm mỹ:
Dán Sứ Emax Veneer (Xuất xứ Đức): Đây là dòng sứ cao cấp được chế tác từ Lithium Disilicate, nổi tiếng với độ mỏng, độ trong suốt và khả năng mô phỏng quang học hoàn hảo của răng tự nhiên. Sứ Emax có độ bền cao, chống mài mòn tốt.`,
        image: typesVie
      },
      {
        title: "4. Vì Sao Khách Hàng Ưu Chuộng Dán Sứ Veneer?",
        content: `- Bảo Tồn Răng Thật Tối Đa
- Thẩm Mỹ Hoàn Hảo
- Độ Bền Cao
- Thời Gian Thực Hiện Nhanh Chóng`
      },
      {
        title: "5. Cá Nhân Hóa Nụ Cười Khách Hàng (Smile Design) tại Emis Dental",
        content: `- Phân Tích Khuôn Mặt
- Công Nghệ Mô Phỏng (Mock-up)
- Lựa Chọn Dáng Răng`
      },
      {
        title: "6. Quy Trình Dán Sứ Veneer Tiêu Chuẩn tại Emis Dental",
        content: `- Thăm khám, Chụp phim & Smile Design
- Mô phỏng & Mài răng (tối thiểu)
- Chế tác Veneer
- Thử và Gắn Veneer`
      },
      {
        title: "7. Bảng Giá Dán Sứ Veneer và Vật Liệu Cốt Lõi tại Emis Dental",
        content: `- Dán Sứ Emax Veneer: Bảo hành 10 NĂM
- Phân loại khác: Tùy theo yêu cầu và độ phức tạp`
      },
      {
        title: "8. Vì Sao Bạn Nên Chọn Dán Sứ Veneer tại Emis Dental?",
        content: `- Chuyên Môn Sâu về Bảo Tồn
- Trang Thiết Bị Hiện Đại
- Vật Liệu Sứ Emax Chính Hãng`
      }
    ],

    english: [
      {
        title: "1. What is Veneer?",
        content: `Veneer is a modern dental cosmetic technique where a thin, personalized porcelain layer (0.2–0.6mm, similar to a contact lens) is fixed on the front surface of the teeth.
Unlike traditional crowns (which require more tooth reduction), Veneer preserves natural teeth, requiring minimal or no shaving depending on the condition, delivering high aesthetics and natural appearance.`
      },
      {
        title: "2. When to Use Veneer?",
        content: `Veneer is ideal for teeth with minor imperfections:
- Discolored teeth
- Slightly chipped teeth
- Irregular shape
- Slight gaps between teeth
- Clients prioritizing tooth preservation`
      },
      {
        title: "3. Premium Veneers at Emis Dental",
        content: `At Emis Dental, we select top-quality Veneer lines, ensuring durability, thinness, and aesthetics:
Emax Veneer (Germany): Premium porcelain made from Lithium Disilicate, known for thinness, transparency, and optical simulation like natural teeth. Emax is highly durable and resistant to wear.`,
        image: typesEng
      },
      {
        title: "4. Why Veneer is Preferred?",
        content: `- Maximum Tooth Preservation
- Perfect Aesthetics
- High Durability
- Fast Procedure`
      },
      {
        title: "5. Personalized Smile Design at Emis Dental",
        content: `- Face Analysis
- Mock-up Simulation
- Smile Shape Selection`
      },
      {
        title: "6. Standard Veneer Procedure at Emis Dental",
        content: `- Examination, X-rays & Smile Design
- Simulation & Minimal Tooth Preparation
- Veneer Fabrication
- Trial & Bonding`
      },
      {
        title: "7. Veneer Prices & Core Materials at Emis Dental",
        content: `- Emax Veneer: 10-YEAR warranty
- Others: Depending on requirements and complexity`
      },
      {
        title: "8. Why Choose Veneer at Emis Dental?",
        content: `- Expert in Tooth Preservation
- Modern Equipment
- Genuine Emax Porcelain`
      }
    ]
  };

  const sections = language === "vietnamese" ? content.vietnamese : content.english;

  return (
    <div className="w-full flex justify-center pt-20 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
          {language === "vietnamese" ? "DÁN SỨ VENEER THẨM MỸ CAO CẤP" : "PREMIUM COSMETIC VENEER"}
        </h1>

        <div className="space-y-16 text-gray-800 text-[17px] leading-relaxed">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{sec.title}</h2>
              <p className="whitespace-pre-line mb-4">{sec.content}</p>

              {i === 2 && sec.image && (
                <img
                  src={sec.image}
                  alt="Veneer Types"
                  className="w-full h-auto rounded-lg shadow-md mt-4"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
