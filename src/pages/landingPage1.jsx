import React from "react";

export default function CrownLanding({ language }) {
  const isVN = language === "vietnamese";

  const content = {
    title: isVN ? "BỌC RĂNG SỨ THẨM MỸ" : "AESTHETIC DENTAL CROWNS",

    section1Title: isVN ? "1. Bọc Răng Sứ Là Gì?" : "1. What Is a Dental Crown?",
    section1Text: isVN
      ? "Bọc răng sứ là phương pháp phục hình thẩm mỹ sử dụng mão sứ được chế tác chính xác để bao phủ phần răng thật đã được mài tối thiểu. Kỹ thuật này giúp cải thiện các tình trạng như thưa răng, hô nhẹ, mẻ, vỡ, nhiễm màu nặng. Sau khi bọc sứ, răng sáng hơn, đều hơn và bền chắc hơn, mang lại nụ cười tự nhiên và tự tin."
      : "A dental crown is an aesthetic restoration method using a precisely fabricated porcelain cap to cover a minimally reduced natural tooth. This technique effectively corrects gaps, mild protrusion, chips, fractures, and intrinsic discoloration. After placement, the teeth appear brighter, more uniform, and structurally stronger, providing a natural and confident smile.",

    section2Title: isVN ? "2. Khi Nào Nên Bọc Răng Sứ?" : "2. When Should You Consider a Dental Crown?",
    section2List: isVN
      ? [
          "Răng nhiễm màu nặng, không thể cải thiện bằng tẩy trắng.",
          "Răng mẻ, vỡ, nứt.",
          "Răng hô nhẹ, lệch nhẹ hoặc thưa cần phục hình nhanh.",
          "Răng sâu lớn, răng sứt mẻ, răng đã lấy tủy.",
          "Răng cần bảo vệ khi làm cầu răng hoặc phục hình trên Implant.",
        ]
      : [
          "Teeth with severe intrinsic discoloration unresponsive to whitening.",
          "Chipped or fractured teeth.",
          "Mildly misaligned, slightly protruded, or gapped teeth requiring quick correction.",
          "Teeth with large cavities, fractures, or root canal–treated teeth.",
          "Teeth requiring protection after bridge placement or Implant restoration.",
        ],

    section3Title: isVN ? "3. Các Loại Sứ Cao Cấp Tại Emis Dental" : "3. High-Quality Crown Materials at Emis Dental",
    section3List: isVN
      ? [
          "Sứ Titan Nhật – bảo hành 2 năm.",
          "Sứ toàn sứ EMIS Zico Centonia – bảo hành 5 năm.",
          "Sứ Zirconia Mỹ và Đức – bảo hành 10 năm.",
          "Lava Mỹ: Lava, Lava Plus, Lava Esthetics – bảo hành 12–20 năm.",
          "Orodent Ý – bảo hành trọn đời.",
          "Emax Veneer – bảo hành 10 năm, bảo tồn răng tối đa.",
        ]
      : [
          "Titanium Metal-Ceramic (Japan) – 2-year warranty.",
          "EMIS Zico Centonia All-Ceramic – 5-year warranty.",
          "U.S. & German Zirconia – 10-year warranty.",
          "Lava USA: Lava, Lava Plus, Lava Esthetics – 12–20-year warranty.",
          "Orodent Italy – Lifetime warranty.",
          "Emax Veneer – 10-year warranty; maximizes natural tooth preservation.",
        ],

    section4Title: isVN ? "4. Ưu Điểm Của Bọc Răng Sứ" : "4. Advantages of Aesthetic Dental Crowns",
    section4List: isVN
      ? [
          "Thẩm mỹ tự nhiên, trắng sáng và đồng đều.",
          "Chức năng ăn nhai bền chắc, tuổi thọ lên đến 30 năm.",
          "Bảo vệ răng thật khỏi vi khuẩn, nhiệt và hóa chất.",
          "Hạn chế gãy vỡ cho răng đã lấy tủy.",
        ]
      : [
          "Natural aesthetics with brightness and uniformity.",
          "Strong chewing function; lifespan up to 30 years with proper care.",
          "Protects natural teeth from bacteria, temperature, and chemicals.",
          "Reduces fracture risk for root canal–treated teeth.",
        ],

    section5Title: isVN ? "5. Các Dáng Răng Được Yêu Thích" : "5. Popular Crown Shapes and Styles",
    section5Text: isVN
      ? "Tùy theo khuôn mặt và sở thích, khách hàng có thể lựa chọn các kiểu dáng răng tự nhiên, trẻ trung, trắng sáng hoặc sang trọng."
      : "Depending on facial structure and preference, patients may choose natural, bright-white, youthful, or premium aesthetic crown designs.",

    section6Title: isVN ? "6. Quy Trình Bọc Răng Sứ Tại Emis Dental" : "6. Clinical Workflow for Crown Treatment at Emis Dental",
    section6List: isVN
      ? [
          "Thăm khám – tư vấn dáng răng.",
          "Chụp X-quang kiểm tra cấu trúc răng.",
          "Gây tê – mài răng tối thiểu.",
          "Lấy dấu kỹ thuật số.",
          "Đắp răng tạm.",
          "Lắp răng sứ – kiểm tra khớp cắn.",
        ]
      : [
          "Clinical examination – crown design consultation.",
          "X-ray imaging to assess tooth structure.",
          "Local anesthesia – minimal tooth reduction.",
          "Digital impression scanning.",
          "Temporary crown placement.",
          "Final crown placement – occlusion check.",
        ],

    section7Title: isVN ? "7. Chăm Sóc Sau Khi Bọc Sứ" : "7. Post-Crown Care Instructions",
    section7List: isVN
      ? [
          "Đánh răng 2–3 lần/ngày bằng bàn chải lông mềm.",
          "Dùng chỉ nha khoa và nước súc miệng hằng ngày.",
          "Tránh cắn đồ quá cứng ở răng mới bọc.",
          "Tái khám định kỳ 6 tháng/lần.",
        ]
      : [
          "Brush 2–3 times daily with a soft-bristle toothbrush.",
          "Use dental floss and mouthwash daily.",
          "Avoid biting excessively hard foods.",
          "Schedule routine check-ups every 6 months.",
        ],

    section8Title: isVN ? "8. Bảng Giá Dịch Vụ" : "8. Service Price List",
    section8Text: isVN
      ? "Emis Dental cam kết minh bạch chi phí – đúng giá – đúng chất lượng. Giá có thể thay đổi tùy tình trạng răng và vật liệu khách hàng chọn."
      : "Emis Dental guarantees transparent pricing and high-quality materials. Final cost may vary depending on tooth condition and material selection.",
  };

  return (
    <div className="w-full bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">{content.title}</h1>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">{content.section1Title}</h2>
        <p className="leading-relaxed">{content.section1Text}</p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">{content.section2Title}</h2>
        <ul className="list-disc ml-6 space-y-1">
          {content.section2List.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">{content.section3Title}</h2>
        <ul className="list-disc ml-6 space-y-1">
          {content.section3List.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">{content.section4Title}</h2>
        <ul className="list-disc ml-6 space-y-1">
          {content.section4List.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">{content.section5Title}</h2>
        <p className="leading-relaxed mb-4">{content.section5Text}</p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">{content.section6Title}</h2>
        <ul className="list-disc ml-6 space-y-1">
          {content.section6List.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">{content.section7Title}</h2>
        <ul className="list-disc ml-6 space-y-1">
          {content.section7List.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">{content.section8Title}</h2>
        <p className="leading-relaxed">{content.section8Text}</p>
      </div>
    </div>
  );
}
