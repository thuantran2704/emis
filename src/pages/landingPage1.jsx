import React from 'react';
import typesVie from '../pics/WEB/typesTeeth/vie.png';
import typesEng from '../pics/WEB/typesTeeth/eng.png';

export default function LandingPage1({ language = "vietnamese" }) {
  // Full content in both languages
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
Răng bị nhiễm màu: Răng bị ố vàng, xỉn màu nhẹ không thể tẩy trắng được (nhiễm màu kháng sinh nhẹ).
Răng sứt mẻ nhẹ: Các trường hợp răng bị mẻ nhỏ ở cạnh cắn.
Răng có hình dáng không đẹp: Răng quá ngắn, quá nhỏ hoặc hình dáng không đều.
Răng thưa kẽ nhẹ: Các khoảng trống nhỏ giữa các răng có thể được che phủ.
Khách hàng ưu tiên bảo tồn: Những người mong muốn cải thiện nụ cười nhưng muốn can thiệp tối thiểu lên răng thật.`
      },
      {
        title: "3. Các Loại Veneer Cao Cấp Tại Emis Dental",
        content: `Tại Emis Dental, chúng tôi lựa chọn các dòng sứ Veneer chất lượng hàng đầu, cam kết độ bền, độ mỏng và tính thẩm mỹ:
Dán Sứ Emax Veneer (Xuất xứ Đức): Đây là dòng sứ cao cấp được chế tác từ Lithium Disilicate, nổi tiếng với độ mỏng, độ trong suốt và khả năng mô phỏng quang học hoàn hảo của răng tự nhiên. Sứ Emax có độ bền cao, chống mài mòn tốt.`,
        image: typesVie
      },
      {
        title: "4. Vì Sao Khách Hàng Ưu Chuộng Dán Sứ Veneer?",
        content: `Dán sứ Veneer được xem là xu hướng thẩm mỹ "xâm lấn tối thiểu" và được yêu thích nhờ các ưu điểm vượt trội:
Bảo Tồn Răng Thật Tối Đa: Đây là ưu điểm lớn nhất. Việc mài răng rất ít hoặc không mài giúp bảo vệ mô răng thật, không gây ảnh hưởng đến tủy răng.
Thẩm Mỹ Hoàn Hảo: Veneer có độ trong và màu sắc tự nhiên, không bị đổi màu theo thời gian, giúp nụ cười rạng rỡ, tự nhiên.
Độ Bền Cao: Mặc dù mỏng, Veneer được dán bằng keo dán chuyên dụng và công nghệ hiện đại, đảm bảo độ bám dính và bền bỉ khi ăn nhai bình thường.
Thời Gian Thực Hiện Nhanh Chóng: So với chỉnh nha, Veneer mang lại kết quả thẩm mỹ gần như tức thì.`
      },
      {
        title: "5. Cá Nhân Hóa Nụ Cười Khách Hàng (Smile Design) tại Emis Dental",
        content: `Tại Emis Dental, chúng tôi không chỉ làm răng sứ, chúng tôi kiến tạo nụ cười phù hợp nhất với từng cá nhân thông qua quy trình Thiết kế Nụ cười (Smile Design):
Phân Tích Khuôn Mặt: Bác sĩ phân tích tỉ lệ răng, khuôn miệng, đường cười, màu da và tính cách của khách hàng.
Công Nghệ Mô Phỏng (Mock-up): Khách hàng được xem trước hình dáng nụ cười của mình trên mô hình hoặc trên máy tính trước khi tiến hành dán sứ.
Lựa Chọn Dáng Răng: Tư vấn các dáng răng được ưa chuộng như Dáng Tự Nhiên, Dáng Cá Tính hay Dáng Hollywood, đảm bảo sự hài hòa và độc đáo.`
      },
      {
        title: "6. Quy Trình Dán Sứ Veneer Tiêu Chuẩn tại Emis Dental",
        content: `Quy trình dán sứ Veneer được thực hiện tỉ mỉ và chính xác, thường chỉ qua 2-3 lần hẹn:
Thăm khám, Chụp phim & Thiết kế Nụ cười (Smile Design): Bác sĩ kiểm tra răng miệng, chụp X-quang và lấy thông số nụ cười chi tiết.
Mô phỏng & Mài răng (tối thiểu): Khách hàng duyệt mẫu thiết kế. Bác sĩ tiến hành mài một lớp mỏng bề mặt răng (nếu cần) và lấy dấu chính xác gửi Labo.
Chế tác Veneer: Các kỹ thuật viên tại Labo chế tác veneer mỏng và chính xác theo thiết kế đã duyệt.
Thử và Gắn Veneer: Thử veneer, kiểm tra độ khít sát, màu sắc. Sau khi khách hàng hoàn toàn hài lòng, veneer được dán cố định bằng keo dán nha khoa chuyên dụng.`
      },
      {
        title: "7. Bảng Giá Dán Sứ Veneer và Vật Liệu Cốt Lõi tại Emis Dental",
        content: `Chi phí dán sứ Veneer tại Emis Dental phụ thuộc vào loại sứ Veneer được lựa chọn:
Dán Sứ Emax Veneer: Đây là dòng sứ Veneer cao cấp được bảo hành 10 NĂM, là lựa chọn phổ biến nhất cho những người yêu cầu thẩm mỹ cao.
Phân loại khác: Tùy thuộc vào yêu cầu và độ phức tạp, bác sĩ sẽ tư vấn loại sứ Veneer phù hợp nhất với cấu trúc răng của bạn.`
      },
      {
        title: "8. Vì Sao Bạn Nên Chọn Dán Sứ Veneer tại Emis Dental?",
        content: `Chuyên Môn Sâu về Bảo Tồn: Đội ngũ bác sĩ giàu kinh nghiệm, chuyên về phục hình thẩm mỹ, cam kết mài răng tối thiểu (nhiều trường hợp bác sĩ chỉ xử lý vệ sinh bề mặt răng và hoàn toàn không mài), tối đa hóa sự bảo tồn răng thật.
Trang Thiết Bị Hiện Đại: Sử dụng máy chụp Cone Beam CT, máy Scan răng, ghế nha chính hãng đảm bảo tỷ lệ thành công tối đa.
Vật Liệu Sứ Emax Chính Hãng: Cam kết sử dụng sứ Emax chất lượng cao, chế độ bảo hành lâu dài và quy định bởi hãng, đảm bảo độ bền và tính thẩm mỹ vượt trội.`
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
Discolored teeth: Teeth with slight yellowing or stains that cannot be whitened (mild antibiotic discoloration).
Slightly chipped teeth: Small chips on biting edges.
Irregular shaped teeth: Teeth that are too short, too small, or uneven.
Slight gaps: Small spaces between teeth can be covered.
Clients prioritizing preservation: Those who want to improve their smile with minimal intervention.`
      },
      {
        title: "3. Premium Veneers at Emis Dental",
        content: `At Emis Dental, we select top-quality Veneer lines, ensuring durability, thinness, and aesthetics:
Emax Veneer (Germany): Premium porcelain made from Lithium Disilicate, known for thinness, transparency, and optical simulation like natural teeth. Emax is highly durable and resistant to wear.`,
        image: typesEng
      },
      {
        title: "4. Why Veneer is Preferred?",
        content: `Veneer is considered a "minimally invasive" cosmetic trend and is favored for its advantages:
Maximum Tooth Preservation: Minimal or no tooth reduction protects natural tissue and pulp.
Perfect Aesthetics: Veneers are transparent, natural-colored, and resist discoloration over time.
High Durability: Bonded with specialized adhesive and modern technology to withstand normal chewing.
Fast Procedure: Compared to orthodontics, Veneers deliver near-instant cosmetic results.`
      },
      {
        title: "5. Personalized Smile Design at Emis Dental",
        content: `At Emis Dental, we don't just make teeth, we craft smiles suited for each individual:
Face Analysis: Doctor evaluates tooth proportion, mouth, smile line, skin color, and personality.
Mock-up Simulation: Client previews their smile on a model or computer before Veneer placement.
Smile Shape Selection: Advice on popular shapes like Natural, Individual, or Hollywood, ensuring harmony and uniqueness.`
      },
      {
        title: "6. Standard Veneer Procedure at Emis Dental",
        content: `Veneer procedure is meticulous, typically in 2-3 appointments:
Examination, X-rays & Smile Design: Doctor checks oral health, takes X-rays, and records smile details.
Simulation & Minimal Tooth Prep: Client approves design; minimal surface preparation done if needed, and precise impressions sent to lab.
Veneer Fabrication: Lab technicians craft thin, precise veneers according to approved design.
Trial & Bonding: Veneer trial, check fit and color, then bonded with specialized dental adhesive after client approval.`
      },
      {
        title: "7. Veneer Prices & Core Materials at Emis Dental",
        content: `Cost depends on selected Veneer type:
Emax Veneer: Premium line with 10-YEAR warranty, most popular for high-aesthetic needs.
Other types: Doctor will advise based on client requirements and tooth structure.`
      },
      {
        title: "8. Why Choose Veneer at Emis Dental?",
        content: `Expert in Tooth Preservation: Experienced team specializes in cosmetic restorations, minimizing tooth reduction (often just cleaning surface, no shaving), maximizing preservation.
Modern Equipment: Cone Beam CT, dental scanner, certified dental chairs ensure maximum success.
Genuine Emax Porcelain: High-quality Emax with long-term warranty as per manufacturer, ensuring durability and superior aesthetics.`
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

              {/* Include image for third section */}
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
