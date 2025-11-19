import React, { useState, useEffect, useRef } from 'react';

import img1 from '../pics/WEB/veneer/1.png';
import img2 from '../pics/WEB/veneer/2.png';
import img3 from '../pics/WEB/veneer/3.png';
import img4 from '../pics/WEB/veneer/4.png';
import img5 from '../pics/WEB/veneer/5.png';
import img6 from '../pics/WEB/veneer/6.png';
import img7 from '../pics/WEB/veneer/7.png';
import img8 from '../pics/WEB/veneer/8.png';

export default function LandingPage1() {
  const sections = [
    {
      title: "1. Dán Sứ Veneer là Gì?",
      content: `Dán sứ Veneer là kỹ thuật thẩm mỹ nha khoa hiện đại sử dụng lớp sứ mỏng 
(0.2–0.6mm) dán lên bề mặt răng. Giải pháp này giúp bảo tồn răng thật tối đa, 
mang lại tính thẩm mỹ tự nhiên hơn so với bọc răng sứ thông thường.`
    },
    {
      title: "2. Trường Hợp Nên Dán Sứ Veneer",
      content: `Phù hợp cho răng nhiễm màu, sứt mẻ nhẹ, hình dáng không đều, răng thưa 
kẽ nhẹ hoặc khách hàng muốn cải thiện thẩm mỹ nhưng vẫn muốn giữ tối đa răng thật.`
    },
    {
      title: "3. Veneer Cao Cấp Tại Emis Dental",
      content: `Emis Dental sử dụng các dòng Veneer chất lượng cao như Emax (Đức), 
nổi tiếng về độ bền, độ trong suốt và khả năng mô phỏng quang học như răng tự nhiên.`
    },
    {
      title: "4. Vì Sao Veneer Được Ưa Chuộng?",
      content: `Bảo tồn răng tối đa, thẩm mỹ tự nhiên, độ bền cao và thời gian thực hiện nhanh 
chóng chỉ trong 2–3 buổi.`
    },
    {
      title: "5. Thiết Kế Nụ Cười Cá Nhân Hóa",
      content: `Quy trình Smile Design giúp phân tích khuôn mặt, mô phỏng nụ cười và lựa chọn 
dáng răng phù hợp nhất với từng khách hàng.`
    },
    {
      title: "6. Quy Trình Dán Sứ Veneer",
      content: `Thăm khám – Chụp phim – Smile Design – Mô phỏng – Mài răng tối thiểu – 
Chế tác Veneer – Thử và gắn cố định.`
    },
    {
      title: "7. Bảng Giá Veneer",
      content: `Emax Veneer: Bảo hành 10 năm.  
Các dòng khác tùy theo vật liệu và cấu trúc răng của khách hàng.`
    },
    {
      title: "8. Vì Sao Chọn Emis Dental?",
      content: `Chuyên môn sâu về bảo tồn răng – Trang thiết bị hiện đại – 
Vật liệu sứ chính hãng – Đảm bảo độ bền & tự nhiên tối ưu.`
    }
  ];

  const sliderImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  // --- Custom Image Slider Component ---
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
      window.addEventListener('resize', updateCardsPerView);
      return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    const getTransformValue = () => {
      if (!sliderRef.current) return 0;
      const slideWidth = sliderRef.current.offsetWidth / cardsPerView;
      return -currentIndex * slideWidth;
    };

    // Duplicate images for smoother looping
    const extendedImages = [...images, ...images, ...images];

    return (
      <div className="relative w-full overflow-hidden my-10">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-2 rounded-full shadow-md hover:bg-[#c19d30] transition"
          aria-label="Previous"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-2 rounded-full shadow-md hover:bg-[#c19d30] transition"
          aria-label="Next"
        >
          &#8250;
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${getTransformValue()}px)` }}
        >
          {extendedImages.map((img, index) => (
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

  return (
    <div className="w-full flex justify-center pt-20 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12">

        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Dán Sứ Veneer Tại Emis Dental
        </h1>

        <div className="space-y-16 text-gray-800 text-[17px] leading-relaxed">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{sec.title}</h2>
              <p className="whitespace-pre-line mb-6">{sec.content}</p>

              {/* Custom slider under section 3 */}
              {i === 2 && <ImageSlider images={sliderImages} />}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
