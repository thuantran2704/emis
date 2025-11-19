import React, { useState, useEffect, useRef } from "react";

// --- Section 5 Images (Forms / Smile Design) ---
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

// --- Section 7 Images (Crown / Răng Sứ Types) ---
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
  // --- Sections Content ---
  const sections = [
    {
      title: "1. Bọc Răng Sứ là Gì?",
      content: `Bọc răng sứ (hay Răng sứ thẩm mỹ) là phương pháp phục hình răng giả cố định, sử dụng một "mão sứ" rỗng ruột được chế tác tinh xảo để bọc chụp toàn bộ chiếc răng thật đã được mài nhỏ. Kỹ thuật này giúp khắc phục hiệu quả tình trạng răng thưa, hô, sứt mẻ hay xỉn màu, mang lại hàm răng trắng sáng, đều đẹp và bền chắc.`
    },
    {
      title: "2. Trường Hợp Nào Nên Bọc Răng Sứ?",
      content: `Bọc răng sứ là giải pháp lý tưởng cho những trường hợp sau:\n- Răng bị nhiễm màu kháng sinh nặng (tẩy trắng không hiệu quả).\n- Răng bị sứt mẻ, vỡ lớn do chấn thương.\n- Răng lệch lạc, hô móm nhẹ, răng thưa muốn cải thiện nhanh chóng.\n- Răng sâu vỡ lớn, răng chết tủy hoặc đã điều trị tủy cần được bảo vệ.\n- Phục hình sau khi làm cầu răng sứ hoặc cấy ghép Implant.`
    },
    {
      title: "3. Các Loại Răng Sứ Cao Cấp Tại Emis Dental",
      content: `Sứ Kim Loại Titan: Bảo hành 2 năm.\nSứ Toàn Sứ EMIS: Bảo hành 5 năm.\nSứ Toàn Sứ Zirconia (Đức & Mỹ): Bảo hành 10 năm.\nSứ Cao Cấp Lava (Mỹ): Bảo hành 12–20 năm.\nSứ Thẩm Mỹ Đỉnh Cao: Orodent ITALY (Bảo hành trọn đời).\nDán Sứ Veneer: Emax (Bảo hành 10 năm).`
    },
    {
      title: "4. Ưu Điểm Vượt Trội Của Bọc Răng Sứ Thẩm Mỹ",
      content: `- Cải Thiện Thẩm Mỹ Tinh Tế\n- Đảm Bảo Ăn Nhai Bền Vững\n- Bảo tồn răng thật\n- Bảo vệ răng đã chữa tủy`
    },
    {
      title: "5. Các Dáng Răng Sứ Nào Được Ưa Chuộng Trên Thị Trường?",
      content: `Quy trình Smile Design giúp phân tích khuôn mặt, mô phỏng nụ cười và lựa chọn dáng răng phù hợp nhất.`
    },
    {
      title: "6. Quy Trình Bọc Răng Sứ Chuẩn Y Khoa",
      content: `Bước 1: Thăm khám & Tư vấn\nBước 2: Lập kế hoạch điều trị\nBước 3: Mài cùi răng (tối thiểu)\nBước 4: Gắn răng tạm\nBước 5: Thử sứ\nBước 6: Gắn sứ chính thức`
    },
    {
      title: "7. Các Loại Răng Sứ tại Emis Dental",
      content: `Các loại răng sứ toàn sứ được bác sĩ và khách hàng tin tưởng lựa chọn từ các thương hiệu lớn trên thế giới.`
    },
    {
      title: "8. Vì Sao Bạn Nên Chọn Làm Răng Sứ tại Emis Dental",
      content: `- Nha khoa uy tín\n- Vật liệu chính hãng\n- Quy trình chuẩn y khoa\n- Đội ngũ bác sĩ chuyên môn cao`
    }
  ];

  // --- Section 5 / Smile Design Slider ---
  const formImages = language === "vie"
    ? [form1Vie, form2Vie, form3Vie, form4Vie, form5Vie, form6Vie, form7Vie, form8Vie]
    : [form1Eng, form2Eng, form3Eng, form4Eng, form5Eng, form6Eng, form7Eng, form8Eng];

  // --- Section 7 / Crown Gallery ---
  const crownImages = language === "vie"
    ? [crown1Vie, crown2Vie, crown3Vie, crown4Vie, crown5Vie, crown6Vie, crown7Vie, crown8Vie]
    : [crown1Eng, crown2Eng, crown3Eng, crown4Eng, crown5Eng, crown6Eng, crown7Eng, crown8Eng];

  // --- Slider Component for Section 5 ---
  const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    const getTransformValue = () => {
      if (!sliderRef.current) return 0;
      const width = sliderRef.current.offsetWidth;
      return -currentIndex * (width * 0.8); // show 80% per slide
    };

    return (
      <div className="relative w-full overflow-hidden my-10">
        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-2 rounded-full">&#8249;</button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-2 rounded-full">&#8250;</button>

        <div ref={sliderRef} className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${getTransformValue()}px)` }}>
          {images.map((img, idx) => (
            <div key={idx} className="px-2 flex-shrink-0 w-4/5">
              <img src={img} alt={`Slide ${idx}`} className="rounded-lg shadow-md w-full object-cover"/>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center pt-20 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">Bọc Răng Sứ Thẩm Mỹ</h1>

        <div className="space-y-16 text-gray-800 text-[17px] leading-relaxed">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{sec.title}</h2>
              <p className="whitespace-pre-line mb-6">{sec.content}</p>

              {/* Section 5 Slider */}
              {i === 4 && <ImageSlider images={formImages} />}

              {/* Section 7 Gallery */}
              {i === 6 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {crownImages.map((img, idx) => (
                    <img key={idx} src={img} alt={`Crown ${idx}`} className="rounded-lg shadow-md w-full object-cover"/>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
