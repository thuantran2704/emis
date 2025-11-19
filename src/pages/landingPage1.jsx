import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import img1 from '../pics/WEB/veneer/1.png';
import img2 from '../pics/WEB/veneer/2.png';
import img3 from '../pics/WEB/veneer/3.png';
import img4 from '../pics/WEB/veneer/4.png';
import img5 from '../pics/WEB/veneer/5.png';
import img6 from '../pics/WEB/veneer/6.png';
import img7 from '../pics/WEB/veneer/7.png';
import img8 from '../pics/WEB/veneer/8.png';

export default function LandingPage1() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="w-full flex flex-col bg-white text-black pt-24">

      {/* Intro Section (clean + premium) */}
      <section className="max-w-6xl mx-auto px-6 text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2a3439] mb-4">
          Dán Sứ Veneer Cao Cấp Tại Emis Dental
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Công nghệ Veneer mới nhất – bảo tồn răng thật tối đa, mang lại nụ cười tự nhiên, trong suốt và thẩm mỹ tuyệt đối.
        </p>
      </section>

      {/* Slider Section */}
      <section className="w-full flex justify-center py-10">
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl">

          {/* SLIDE IMAGE */}
          <motion.img
            key={index}
            src={images[index]}
            alt="Veneer Slide"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-auto object-contain bg-white"
            style={{ maxHeight: "650px" }}
          />

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* DOTS */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
                  i === index ? "bg-[#2a3439]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* After-slider info block */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2a3439] mb-6">
          Vì Sao Khách Hàng Chọn Emis Dental?
        </h2>

        <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
          Chúng tôi sử dụng vật liệu sứ cao cấp Emax và công nghệ Smile Design mới nhất.
          Đội ngũ bác sĩ chuyên môn cao, đảm bảo mang lại kết quả đẹp tự nhiên, an toàn và lâu dài.
        </p>
      </section>

    </div>
  );
}
