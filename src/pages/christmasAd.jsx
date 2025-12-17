import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Import your existing ad images
import engImplant from "../pics/ads/eng-implant9tr.png";
import vieImplant from "../pics/ads/vie-implant9tr.png";
import engWhite from "../pics/ads/eng-teethwhite.png";
import vieWhite from "../pics/ads/vie-teethwhite.png";
import engRemove from "../pics/ads/eng-teethremove.png";
import vieRemove from "../pics/ads/vie-teethremove.png";

export default function ChristmasAdBanner() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const language = useSelector((state) => state.language.language);
  const isVN = language === "vietnamese";

  // Language-specific ad sets (excluding genad)
  const adImages = {
    vietnamese: [vieImplant, vieWhite, vieRemove],
    english: [engImplant, engWhite, engRemove]
  };

  const currentAds = adImages[language] || adImages.english;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % currentAds.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [currentAds.length]);

  return (
    <section className="relative w-full overflow-hidden flex justify-center items-center 
                       my-8 px-4">
      
      {/* Christmas-themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-green-900/30 to-red-900/20">
        {/* Subtle background blur of current ad */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 blur-2xl scale-105 transition-all duration-700"
          style={{
            backgroundImage: `url(${currentAds[current]})`,
          }}
        />
        
        {/* Simple Christmas pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D35400 2px, transparent 3px),
                             radial-gradient(circle at 75% 75%, #1E6F5C 2px, transparent 3px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        
        {/* Simple Christmas header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
              {isVN ? "🎄 ƯU ĐÃI GIÁNG SINH 🎄" : "🎄 CHRISTMAS SPECIALS 🎄"}
            </span>
          </h2>
          <p className="text-white/90 mt-2 font-medium">
            {isVN ? "Áp dụng đến 31/12/2024 • Số lượng có hạn" : 
                   "Valid until Dec 31, 2024 • Limited availability"}
          </p>
        </div>

        {/* Ad Display Area */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl 
                       overflow-hidden p-4 sm:p-6 border-4 border-gradient-to-r 
                       from-red-500 via-green-500 to-red-500">
          
          <div
            className="relative cursor-pointer group"
            onClick={() => navigate("/contact")}
          >
            <div className="pt-8 pb-8 px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  {/* Christmas frame effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-400/20 via-green-400/20 to-red-400/20 
                                rounded-2xl blur-md group-hover:blur-lg transition-all duration-500" />
                  
                  <div className="relative bg-white p-4 rounded-xl shadow-lg">
                    <motion.img
                      src={currentAds[current]}
                      alt={`Christmas Ad ${current + 1}`}
                      className="max-h-[50vh] w-auto mx-auto object-contain 
                               transition-transform duration-500 group-hover:scale-[1.02]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Simple click prompt */}
            <div className="text-center mt-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-block bg-gradient-to-r from-red-600 to-green-600 
                         text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg
                         hover:scale-105 transition-transform duration-300"
              >
                {isVN ? "🎁 NHẤN ĐỂ ĐẶT HẸN NGAY! 🎁" : "🎁 CLICK TO BOOK NOW! 🎁"}
              </motion.div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                        flex gap-3 z-10">
            {currentAds.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className="relative"
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current
                      ? "bg-gradient-to-r from-red-500 to-green-500 shadow-[0_0_10px_rgba(220,38,38,0.6)] scale-125"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Manual Navigation Buttons */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + currentAds.length) % currentAds.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 
                     bg-white/80 backdrop-blur-sm hover:bg-white 
                     w-10 h-10 rounded-full flex items-center justify-center 
                     text-gray-800 text-xl font-bold transition-all duration-300
                     border-2 border-red-400 shadow-lg"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % currentAds.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 
                     bg-white/80 backdrop-blur-sm hover:bg-white 
                     w-10 h-10 rounded-full flex items-center justify-center 
                     text-gray-800 text-xl font-bold transition-all duration-300
                     border-2 border-green-400 shadow-lg"
          >
            ›
          </button>
        </div>

        {/* Simple Christmas offer banner */}
        <div className="mt-6 bg-gradient-to-r from-red-600 to-green-600 
                      rounded-lg py-4 px-6 text-center shadow-lg">
          <div className="text-white font-bold text-lg">
            {isVN ? "🎅 Ưu đãi kết thúc ngày 31/12/2024" : 
                   "🎅 Offer ends December 31, 2024"}
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="mt-3 bg-white text-red-700 font-bold px-6 py-2 rounded-full 
                     hover:bg-gray-100 transition-colors duration-300 shadow-md"
          >
            {isVN ? "Đặt hẹn ngay" : "Book Appointment"}
          </button>
        </div>
      </div>

      {/* Simple CSS for gradient borders */}
      <style jsx>{`
        .border-gradient-to-r {
          border: 4px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(to right, #ef4444, #16a34a, #ef4444) border-box;
        }
      `}</style>
    </section>
  );
}