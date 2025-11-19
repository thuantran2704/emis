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
    <div className="w-full flex flex-col bg-white text-black pt-24 pb-20">

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 text-center py-6">
        <h1 className="text-3xl md:text-5xl font-bold text-[#2a3439] mb-3">
          Dán Sứ Veneer Cao Cấp
        </h1>
        <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Công nghệ Veneer hiện đại – bảo tồn răng thật tối đa và tạo nụ cười tự nhiên.
        </p>
      </section>

      {/* Slider */}
      <section className="w-full flex justify-center px-4">
        <div className="
          relative w-full 
          max-w-4xl md:max-w-5xl 
          mx-auto rounded-2xl overflow-hidden
          shadow-[0_8px_30px_rgba(0,0,0,0.15)]
          bg-white">

          {/* Image Container */}
          <div className="w-full flex justify-center items-center bg-white">
            <motion.img
              key={index}
              src={images[index]}
              alt="Veneer Slide"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="object-contain w-full mx-auto"
              style={{
                maxHeight: "50vh",      // never more than half the screen
                minHeight: "250px",
              }}
            />
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="
              absolute top-1/2 -translate-y-1/2 left-3
              bg-black/30 hover:bg-black/50 
              text-white p-3 rounded-full 
              transition
            ">
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
              stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="
              absolute top-1/2 -translate-y-1/2 right-3
              bg-black/30 hover:bg-black/50 
              text-white p-3 rounded-full 
              transition
            ">
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
              stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  h-3 w-3 rounded-full cursor-pointer transition-all
                  ${i === index ? "bg-[#2a3439]" : "bg-gray-300"}
                `}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Info Section */}
      <section className="px-6 py-12 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#2a3439] mb-4">
          Vật Liệu Cao Cấp – Kết Quả Tự Nhiên
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Hình ảnh dưới đây thể hiện các loại Veneer, vật liệu sử dụng,
          quy trình và kết quả thực tế tại Emis Dental.  
          Mỗi hình đều đã được thiết kế kèm nội dung mô tả.
        </p>
      </section>

    </div>
  );
}
