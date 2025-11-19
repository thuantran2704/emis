import React, { useState, useEffect, useRef } from "react";

// Section 5 – Smile Design Slider
import form1 from "../pics/WEB/forms/eng/1.png";
import form2 from "../pics/WEB/forms/eng/2.png";
import form3 from "../pics/WEB/forms/eng/3.png";
import form4 from "../pics/WEB/forms/eng/4.png";
import form5 from "../pics/WEB/forms/eng/5.png";
import form6 from "../pics/WEB/forms/eng/6.png";
import form7 from "../pics/WEB/forms/eng/7.png";
import form8 from "../pics/WEB/forms/eng/8.png";

// Section 7 – Crown Gallery (Veneer folder)
import crown1 from "../pics/WEB/veneer/eng/1.png";
import crown2 from "../pics/WEB/veneer/eng/2.png";
import crown3 from "../pics/WEB/veneer/eng/3.png";
import crown4 from "../pics/WEB/veneer/eng/4.png";
import crown5 from "../pics/WEB/veneer/eng/5.png";
import crown6 from "../pics/WEB/veneer/eng/6.png";
import crown7 from "../pics/WEB/veneer/eng/7.png";
import crown8 from "../pics/WEB/veneer/eng/8.png";

export default function CosmeticCrowns({ language = "eng" }) {
  // Language folder override
  const formImages =
    language === "vie"
      ? [
          "../pics/WEB/forms/vie/1.png",
          "../pics/WEB/forms/vie/2.png",
          "../pics/WEB/forms/vie/3.png",
          "../pics/WEB/forms/vie/4.png",
          "../pics/WEB/forms/vie/5.png",
          "../pics/WEB/forms/vie/6.png",
          "../pics/WEB/forms/vie/7.png",
          "../pics/WEB/forms/vie/8.png",
        ]
      : [form1, form2, form3, form4, form5, form6, form7, form8];

  const crownImages =
    language === "vie"
      ? [
          "../pics/WEB/veneer/vie/1.png",
          "../pics/WEB/veneer/vie/2.png",
          "../pics/WEB/veneer/vie/3.png",
          "../pics/WEB/veneer/vie/4.png",
          "../pics/WEB/veneer/vie/5.png",
          "../pics/WEB/veneer/vie/6.png",
          "../pics/WEB/veneer/vie/7.png",
          "../pics/WEB/veneer/vie/8.png",
        ]
      : [crown1, crown2, crown3, crown4, crown5, crown6, crown7, crown8];

  const sections = [
    {
      title: "1. Bọc Răng Sứ là Gì?",
      content: `Bọc răng sứ (hay Răng sứ thẩm mỹ) là phương pháp phục hình răng giả cố định, sử dụng một "mão sứ" rỗng ruột được chế tác tinh xảo để bọc chụp toàn bộ chiếc răng thật đã được mài nhỏ. Kỹ thuật này giúp khắc phục hiệu quả tình trạng răng thưa, hô, sứt mẻ hay xỉn màu, mang lại hàm răng trắng sáng, đều đẹp và bền chắc.`,
    },
    {
      title: "2. Trường Hợp Nào Nên Bọc Răng Sứ?",
      content: `Răng bị nhiễm màu kháng sinh nặng, tẩy trắng không hiệu quả.\nRăng bị sứt mẻ, vỡ lớn do chấn thương.\nRăng lệch lạc, hô móm nhẹ, răng thưa muốn cải thiện nhanh chóng.\nRăng sâu vỡ lớn, răng chết tủy hoặc đã điều trị tủy cần được bảo vệ.\nPhục hình sau khi làm cầu răng sứ hoặc cấy ghép Implant.`,
    },
    {
      title: "3. Các Loại Răng Sứ Cao Cấp Tại Emis Dental",
      content: `Sứ Kim Loại Titan: Răng sứ Titan Nhật (Bảo hành 2 năm).\nSứ Toàn Sứ EMIS: Răng sứ EMIS Zico Centonia (Bảo hành 5 năm).\nSứ Toàn Sứ Zirconia (Đức & Mỹ): Răng sứ Zirconia Mỹ (Bảo hành 10 năm), Răng sứ DD Bio Đức (Bảo hành 10 năm), Răng sứ Cercon HT Đức (Bảo hành 10 năm).\nSứ Cao Cấp Lava (Mỹ): Lava MỸ, Lava Plus Mỹ, Lava Esthetics MỸ (Bảo hành 12–20 năm).\nSứ Thẩm Mỹ Đỉnh Cao: Răng sứ Orodent ITALY (Bảo hành TRỌN ĐỜI).\nDán Sứ Veneer: Dán sứ Emax (Bảo hành 10 năm).`,
    },
    {
      title: "4. Ưu Điểm Vượt Trội Của Bọc Răng Sứ Thẩm Mỹ",
      content: `Cải Thiện Thẩm Mỹ Tinh Tế, Đảm Bảo Ăn Nhai Bền Vững, Bảo tồn răng thật.`,
    },
    {
      title: "5. Các Dáng Răng Sứ Nào Được Ưa Chuộng Trên Thị Trường?",
      content: `Quy trình Smile Design với các hình dáng răng cá nhân hóa.`,
      images: formImages, // slider
    },
    {
      title: "6. Quy Trình Bọc Răng Sứ Chuẩn Y Khoa tại Emis Dental",
      content: `Bước 1 → Bước 6: Thăm khám, lập kế hoạch, mài cùi, gắn răng tạm, thử sứ, gắn chính thức.`,
    },
    {
      title: "7. Các Loại Răng Sứ tại Emis Dental",
      content: `Các loại răng sứ toàn sứ tin tưởng từ thương hiệu lớn.`,
      images: crownImages, // gallery
    },
    {
      title: "8. Vì Sao Bạn Nên Chọn Làm Răng Sứ tại Emis Dental",
      content: `Nha khoa uy tín, vật liệu chính hãng, quy trình chuẩn y khoa, đội ngũ bác sĩ chuyên môn cao.`,
    },
  ];

  // --- Slider for Section 5 ---
  const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = images.length;

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % length);
      }, 3000);
      return () => clearInterval(interval);
    }, [length]);

    return (
      <div className="relative w-full overflow-hidden my-6">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-full">
              <img src={img} alt={`Slide ${i}`} className="w-full h-auto rounded-lg shadow-md object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- Gallery for Section 7 ---
  const ImageGallery = ({ images }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {images.map((img, i) => (
        <div key={i}>
          <img src={img} alt={`Gallery ${i}`} className="w-full h-auto rounded-lg shadow-md object-cover" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full flex justify-center pt-20 px-4">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 text-gray-800 text-[17px] leading-relaxed">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">Bọc Răng Sứ Thẩm Mỹ Tại Emis Dental</h1>
        <div className="space-y-16">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{sec.title}</h2>
              <p className="whitespace-pre-line mb-6">{sec.content}</p>
              {i === 4 && <ImageSlider images={sec.images} />}
              {i === 6 && <ImageGallery images={sec.images} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
