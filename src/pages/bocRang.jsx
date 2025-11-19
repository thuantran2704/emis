import React, { useState, useEffect, useRef } from "react";

export default function CrownPage({ language = "vietnamese" }) {
  const isViet = language === "vietnamese";

  const sections = [
    {
      title: "1. Bọc Răng Sứ là Gì?",
      content: `Bọc răng sứ (hay Răng sứ thẩm mỹ) là phương pháp phục hình răng giả cố định, 
sử dụng một "mão sứ" rỗng ruột được chế tác tinh xảo để bọc chụp toàn bộ chiếc răng thật đã được mài nhỏ. 
Kỹ thuật này giúp khắc phục hiệu quả tình trạng răng thưa, hô, sứt mẻ hay xỉn màu, mang lại hàm răng trắng sáng, đều đẹp và bền chắc.`
    },
    {
      title: "2. Trường Hợp Nào Nên Bọc Răng Sứ?",
      content: `Bọc răng sứ là giải pháp lý tưởng cho những trường hợp sau:
- Răng bị nhiễm màu kháng sinh nặng, tẩy trắng không hiệu quả.
- Răng bị sứt mẻ, vỡ lớn do chấn thương.
- Răng lệch lạc, hô móm nhẹ, răng thưa muốn cải thiện nhanh chóng.
- Răng sâu vỡ lớn, răng chết tủy hoặc đã điều trị tủy cần được bảo vệ.
- Phục hình sau khi làm cầu răng sứ hoặc cấy ghép Implant.`
    },
    {
      title: "3. Các Loại Răng Sứ Cao Cấp Tại Emis Dental",
      content: `Tại Emis Dental, chúng tôi cam kết sử dụng các dòng sứ chính hãng, có bảo hành minh bạch:
- Sứ Kim Loại Titan: Răng sứ Titan Nhật (Bảo hành 2 năm).
- Sứ Toàn Sứ EMIS: Răng sứ EMIS Zico Centonia (Bảo hành 5 năm).
- Sứ Toàn Sứ Zirconia (Đức & Mỹ): Răng sứ Zirconia Mỹ, DD Bio Đức, Cercon HT Đức (Bảo hành 10 năm).
- Sứ Cao Cấp Lava (Mỹ): Lava Mỹ, Lava Plus Mỹ, Lava Esthetics Mỹ (Bảo hành 12-20 năm).
- Sứ Thẩm Mỹ Đỉnh Cao: Orodent ITALY (Bảo hành trọn đời).
- Dán Sứ Veneer: Emax (Bảo hành 10 năm).`
    },
    {
      title: "4. Ưu Điểm Vượt Trội Của Bọc Răng Sứ Thẩm Mỹ",
      content: `- Cải thiện thẩm mỹ tinh tế: Hình dáng, màu sắc tự nhiên, hài hòa với khuôn mặt.
- Đảm bảo ăn nhai bền vững: Bảo vệ mô răng, bền đến 30 năm nếu chăm sóc tốt.
- Bảo tồn răng thật: Mão sứ bảo vệ răng khỏi vi khuẩn, ngăn ngừa sâu răng, mòn cổ chân răng, viêm tủy.
- Răng đã chữa tủy dễ vỡ, mẻ; bọc sứ giúp bảo vệ hiệu quả.`
    },
    {
      title: "5. Các Dáng Răng Sứ Nào Được Ưa Chuộng Trên Thị Trường?",
      content: `Tùy vào mong muốn và khuôn mặt, khách hàng lựa chọn các dáng răng sứ khác nhau.`,
      imagesPath: isViet ? "../pics/WEB/forms/vie/" : "../pics/WEB/forms/eng/",
      imageCount: 8
    },
    {
      title: "6. Quy Trình Bọc Răng Sứ Chuẩn Y Khoa tại Emis Dental",
      content: `Bước 1: Thăm khám & tư vấn.
Bước 2: Lập kế hoạch điều trị.
Bước 3: Mài cùi răng tối thiểu.
Bước 4: Gắn răng tạm.
Bước 5: Thử sứ.
Bước 6: Gắn sứ chính thức.`
    },
    {
      title: "7. Các Loại Răng Sứ tại Emis Dental",
      content: `Răng sứ giả lập tương tự răng thật, gồm 2 dòng: kim loại và toàn sứ, mỗi loại có ưu nhược điểm riêng.`,
      imagesPath: isViet ? "../pics/WEB/veneer/vie/" : "../pics/WEB/veneer/eng/",
      imageCount: 8
    },
    {
      title: "8. Vì Sao Bạn Nên Chọn Làm Răng Sứ tại Emis Dental?",
      content: `- Nha khoa uy tín, đội ngũ bác sĩ chuyên môn cao.
- Vật liệu chính hãng, bảo hành uy tín.
- Quy trình chuẩn y khoa, vô trùng và an toàn.`
    }
  ];

  // --- Slider for Section 5 ---
  const ImageSlider = ({ path, count }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % count);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + count) % count);

    const getTransform = () => {
      if (!sliderRef.current) return 0;
      const width = sliderRef.current.offsetWidth;
      return -currentIndex * width;
    };

    const images = Array.from({ length: count }, (_, i) =>
      require(`${path}${i + 1}.png`)
    );

    return (
      <div className="relative w-full overflow-hidden my-8">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-2 rounded-full shadow-md hover:bg-[#c19d30] transition"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-2 rounded-full shadow-md hover:bg-[#c19d30] transition"
        >
          &#8250;
        </button>
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${getTransform()}px)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-full px-2">
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center pt-20 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
          {isViet ? "Bọc Răng Sứ Thẩm Mỹ" : "Cosmetic Dental Crowns"}
        </h1>

        <div className="space-y-16 text-gray-800 text-[17px] leading-relaxed">
          {sections.map((sec, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{sec.title}</h2>
              <p className="whitespace-pre-line mb-6">{sec.content}</p>

              {/* Section 5 Slider */}
              {idx === 4 && sec.imagesPath && (
                <ImageSlider path={sec.imagesPath} count={sec.imageCount} />
              )}

              {/* Section 7 Gallery */}
              {idx === 6 && sec.imagesPath && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {Array.from({ length: sec.imageCount }, (_, i) => {
                    const img = require(`${sec.imagesPath}${i + 1}.png`);
                    return (
                      <div key={i} className="overflow-hidden rounded-lg shadow-md">
                        <img
                          src={img}
                          alt={`Crown ${i + 1}`}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
