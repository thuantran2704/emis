import React, { useState, useEffect, useRef } from "react";

// --- Section 5: Smile Design Images ---
import vie5_1 from "../pics/WEB/forms/vie/1.png";
import vie5_2 from "../pics/WEB/forms/vie/2.png";
import vie5_3 from "../pics/WEB/forms/vie/3.png";
import vie5_4 from "../pics/WEB/forms/vie/4.png";
import vie5_5 from "../pics/WEB/forms/vie/5.png";
import vie5_6 from "../pics/WEB/forms/vie/6.png";
import vie5_7 from "../pics/WEB/forms/vie/7.png";
import vie5_8 from "../pics/WEB/forms/vie/8.png";

import eng5_1 from "../pics/WEB/forms/eng/1.png";
import eng5_2 from "../pics/WEB/forms/eng/2.png";
import eng5_3 from "../pics/WEB/forms/eng/3.png";
import eng5_4 from "../pics/WEB/forms/eng/4.png";
import eng5_5 from "../pics/WEB/forms/eng/5.png";
import eng5_6 from "../pics/WEB/forms/eng/6.png";
import eng5_7 from "../pics/WEB/forms/eng/7.png";
import eng5_8 from "../pics/WEB/forms/eng/8.png";

// --- Section 7: Gallery Images ---
import vie7_1 from "../pics/WEB/veneer/vie/1.png";
import vie7_2 from "../pics/WEB/veneer/vie/2.png";
import vie7_3 from "../pics/WEB/veneer/vie/3.png";
import vie7_4 from "../pics/WEB/veneer/vie/4.png";
import vie7_5 from "../pics/WEB/veneer/vie/5.png";
import vie7_6 from "../pics/WEB/veneer/vie/6.png";
import vie7_7 from "../pics/WEB/veneer/vie/7.png";
import vie7_8 from "../pics/WEB/veneer/vie/8.png";

import eng7_1 from "../pics/WEB/veneer/eng/1.png";
import eng7_2 from "../pics/WEB/veneer/eng/2.png";
import eng7_3 from "../pics/WEB/veneer/eng/3.png";
import eng7_4 from "../pics/WEB/veneer/eng/4.png";
import eng7_5 from "../pics/WEB/veneer/eng/5.png";
import eng7_6 from "../pics/WEB/veneer/eng/6.png";
import eng7_7 from "../pics/WEB/veneer/eng/7.png";
import eng7_8 from "../pics/WEB/veneer/eng/8.png";

// --- Image Slider Component ---
const ImageSlider = ({ images }) => {
  const [cardsPerView, setCardsPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCardsPerView(4);
      else if (width >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const getTransformValue = () => {
    if (!sliderRef.current) return 0;
    const slideWidth = sliderRef.current.offsetWidth / cardsPerView;
    return -currentIndex * slideWidth;
  };

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
        style={{ transform: `translateX(${getTransformValue()}px)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="px-2"
            style={{ flex: `0 0 ${100 / cardsPerView}%` }}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Component ---
export default function CrownPage({ language }) {
  const isViet = language === "vietnamese";

  const sections = [
    {
      title: "1. Bọc Răng Sứ là Gì?",
      content: `Bọc răng sứ (hay Răng sứ thẩm mỹ) là phương pháp phục hình răng giả cố định, sử dụng một "mão sứ" rỗng ruột được chế tác tinh xảo để bọc chụp toàn bộ chiếc răng thật đã được mài nhỏ. Kỹ thuật này giúp khắc phục hiệu quả tình trạng răng thưa, hô, sứt mẻ hay xỉn màu, mang lại hàm răng trắng sáng, đều đẹp và bền chắc.`,
    },
    {
      title: "2. Trường Hợp Nào Nên Bọc Răng Sứ?",
      content: `Bọc răng sứ là giải pháp lý tưởng cho những trường hợp sau:
Răng bị nhiễm màu kháng sinh nặng (răng nhiễm tetracycline), tẩy trắng không hiệu quả.
Răng bị sứt mẻ, vỡ lớn do chấn thương.
Răng lệch lạc, hô móm nhẹ, răng thưa muốn cải thiện nhanh chóng.
Răng sâu vỡ lớn, răng chết tủy hoặc đã điều trị tủy cần được bảo vệ.
Phục hình sau khi làm cầu răng sứ hoặc cấy ghép Implant.`,
    },
    {
      title: "3. Các Loại Răng Sứ Cao Cấp Tại Emis Dental",
      content: `Tại Emis Dental, chúng tôi cam kết sử dụng các dòng sứ chính hãng, có bảo hành minh bạch theo thời gian hãng quy định. Minh bạch về xuất xứ từ các thương hiệu hàng đầu thế giới:
Sứ Kim Loại Titan: Răng sứ Titan Nhật (Bảo hành 2 năm).
Sứ Toàn Sứ EMIS: Răng sứ EMIS Zico Centonia (Bảo hành 5 năm).
Sứ Toàn Sứ Zirconia (Đức & Mỹ):
Răng sứ Zirconia Mỹ (Bảo hành 10 năm).
Răng sứ DD Bio Đức (Bảo hành 10 năm).
Răng sứ Cercon HT Đức (Bảo hành 10 năm).
Sứ Cao Cấp Lava (Mỹ): Răng sứ Lava MỸ, Lava Plus Mỹ, Lava Esthetics MỸ (Bảo hành từ 12 năm đến 20 năm).
Sứ Thẩm Mỹ Đỉnh Cao: Răng sứ Orodent ITALY (Bảo hành TRỌN ĐỜI).
Dán Sứ Veneer: Dán sứ Emax (Bảo hành 10 năm), giúp bảo tồn răng thật tối đa.`,
    },
    {
      title: "4. Ưu Điểm Vượt Trội Của Bọc Răng Sứ Thẩm Mỹ",
      content: `Bọc răng sứ được ưa chuộng nhờ những ưu điểm nổi bật:
Cải Thiện Thẩm Mỹ Tinh Tế: Giúp phục hồi hình dáng, màu sắc răng về màu tự nhiên, hài hòa với khuôn mặt.
Đảm Bảo Ăn Nhai Bền Vững: Với độ bền cao, răng sứ có thể bảo vệ mô răng tự nhiên khỏi tổn thương và khôi phục chức năng ăn nhai thoải mái như răng thật, bền đến 30 năm, thậm chí lâu hơn nếu được chăm sóc tốt.
Bảo tồn răng thật: Mão sứ bao bọc, bảo vệ răng thật khỏi tác động của vi khuẩn, hóa chất, nhiệt độ. Ngăn ngừa tình trạng sâu răng, mòn cổ chân răng, viêm tủy trở lại.
Đối với những chiếc răng đã chữa tủy thì rất dễ vỡ, mẻ do không còn được nuôi dưỡng bởi tủy tăng vì thế bọc răng sứ giúp bảo vệ răng thật hiệu quả.`,
    },
    {
      title: "5. Các Dáng Răng Sứ Nào Được Ưa Chuộng Trên Thị Trường?",
      content: `Tùy vào mong muốn và khuôn mặt, các dáng răng sứ thường được khách hàng lựa chọn:`,
      images: isViet
        ? [vie5_1, vie5_2, vie5_3, vie5_4, vie5_5, vie5_6, vie5_7, vie5_8]
        : [eng5_1, eng5_2, eng5_3, eng5_4, eng5_5, eng5_6, eng5_7, eng5_8],
    },
    {
      title: "6. Quy Trình Bọc Răng Sứ Chuẩn Y Khoa tại Emis Dental",
      content: `Quy trình bọc răng sứ được thực hiện bởi đội ngũ bác sĩ chính quy, đảm bảo chính xác và an toàn:
Bước 1: Thăm khám & Tư vấn.
Bước 2: Lập kế hoạch điều trị.
Bước 3: Mài Cùi Răng (tối thiểu).
Bước 4: Gắn răng tạm.
Bước 5: Thử sứ.
Bước 6: Gắn Sứ Chính Thức.`,
    },
    {
      title: "7. Các Loại Răng Sứ tại Emis Dental",
      content: `Các loại răng sứ toàn sứ tại Emis Dental được bác sĩ và khách hàng tin tưởng lựa chọn đến từ các thương hiệu lớn trên thế giới.`,
      images: isViet
        ? [vie7_1, vie7_2, vie7_3, vie7_4, vie7_5, vie7_6, vie7_7, vie7_8]
        : [eng7_1, eng7_2, eng7_3, eng7_4, eng7_5, eng7_6, eng7_7, eng7_8],
    },
    {
      title: "8. Vì Sao Bạn Nên Chọn Làm Răng Sứ tại Emis Dental?",
      content: `Nha khoa uy tín, vật liệu chính hãng, quy trình chuẩn y khoa, đội ngũ bác sĩ chuyên môn cao.`,
    },
  ];

  return (
    <div className="w-full flex justify-center pt-20 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Bọc Răng Sứ Thẩm Mỹ Tại Emis Dental
        </h1>

        <div className="space-y-16 text-gray-800 text-[17px] leading-relaxed">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {sec.title}
              </h2>
              <p className="whitespace-pre-line mb-6">{sec.content}</p>
              {sec.images && <ImageSlider images={sec.images} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
