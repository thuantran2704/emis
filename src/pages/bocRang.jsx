import React, { useState, useEffect } from "react";

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
  const formImages = language === "vie"
    ? [form1Vie, form2Vie, form3Vie, form4Vie, form5Vie, form6Vie, form7Vie, form8Vie]
    : [form1Eng, form2Eng, form3Eng, form4Eng, form5Eng, form6Eng, form7Eng, form8Eng];

  const crownImages = language === "vie"
    ? [crown1Vie, crown2Vie, crown3Vie, crown4Vie, crown5Vie, crown6Vie, crown7Vie, crown8Vie]
    : [crown1Eng, crown2Eng, crown3Eng, crown4Eng, crown5Eng, crown6Eng, crown7Eng, crown8Eng];

  const ImageSlider = ({ images, language }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(4);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) setVisibleSlides(4);
        else if (window.innerWidth >= 640) setVisibleSlides(2);
        else setVisibleSlides(1);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      setCurrentIndex(0);
    }, [language]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    const getTransformValue = () => {
      const width = 100 / visibleSlides;
      return -currentIndex * width;
    };

    return (
      <div className="relative w-full overflow-hidden my-8">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-2 rounded-full"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-2 rounded-full"
        >
          &#8250;
        </button>

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${getTransformValue()}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="px-2 flex-shrink-0" style={{ width: `${100 / visibleSlides}%` }}>
              <img src={img} alt={`Slide ${idx}`} className="rounded-lg shadow-md w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <article className="w-full flex justify-center py-20 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 prose prose-lg prose-headings:font-bold prose-headings:text-gray-900">
        {/* MAIN TITLE */}
        <h1 className="text-center text-5xl font-extrabold mb-12">BỌC RĂNG SỨ THẨM MỸ</h1>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Bọc Răng Sứ là Gì?</h2>
          <p>
            Bọc răng sứ (hay răng sứ thẩm mỹ) là phương pháp phục hình răng giả cố định. Một <strong>mão sứ</strong> rỗng ruột được chế tác tinh xảo sẽ bọc chụp toàn bộ chiếc răng thật đã được mài nhỏ. 
            Kỹ thuật này giúp khắc phục hiệu quả các vấn đề như răng thưa, hô, sứt mẻ hay xỉn màu, mang lại hàm răng trắng sáng, đều đẹp và bền chắc.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Trường Hợp Nào Nên Bọc Răng Sứ?</h2>
          <p>Bọc răng sứ là giải pháp lý tưởng trong những trường hợp sau:</p>
          <ul className="list-disc ml-6">
            <li>Răng nhiễm màu kháng sinh nặng, tẩy trắng không hiệu quả.</li>
            <li>Răng bị sứt mẻ hoặc vỡ lớn do chấn thương.</li>
            <li>Răng lệch lạc, hô móm nhẹ, răng thưa muốn cải thiện nhanh chóng.</li>
            <li>Răng sâu vỡ lớn, răng chết tủy hoặc đã điều trị tủy cần được bảo vệ.</li>
            <li>Phục hình sau khi làm cầu răng sứ hoặc cấy ghép Implant.</li>
          </ul>
        </section>

        {/* Section 5 Slider */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Các Dáng Răng Sứ Nào Được Ưa Chuộng?</h2>
          <p>Tùy vào mong muốn và khuôn mặt, các dáng răng sứ thường được khách hàng lựa chọn. Dưới đây là một số dáng răng phổ biến:</p>
          <ImageSlider images={formImages} language={language} />
        </section>

        {/* Section 7 Crown Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. Các Loại Răng Sứ tại Emis Dental</h2>
          <p>
            Răng sứ là loại răng giả mô phỏng răng thật, chia thành 2 dòng: kim loại và toàn sứ. Mỗi loại có ưu nhược điểm riêng, phù hợp nhu cầu bọc răng thẩm mỹ. (folder chị gửi LOẠI RĂNG)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {crownImages.map((img, idx) => (
              <img key={idx} src={img} alt={`Crown ${idx}`} className="rounded-lg shadow-md w-full object-cover" />
            ))}
          </div>
        </section>

        {/* You can continue formatting other sections similarly */}
      </div>
    </article>
  );
}
