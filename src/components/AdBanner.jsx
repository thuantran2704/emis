// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import ad1 from "../pics/ads/ad1.jpg";
// import ad2 from "../pics/ads/ad2.jpg";
// import ad3 from "../pics/ads/ad3.jpg";

// const adImages = [ad1, ad2, ad3, ];

// export default function AdBanner() {
//   const [current, setCurrent] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % adImages.length);
//     }, 15000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden flex justify-center items-center">
//       {/* Background: blurred + darkened version of current ad */}
//       <div
//         className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105 blur-xl brightness-[0.45] transition-all duration-700"
//         style={{
//           backgroundImage: `url(${adImages[current]})`,
//         }}
//       />

//       {/* Foreground content */}
//       <div
//         className="relative w-full flex justify-center items-center cursor-pointer
//                    h-[38vh] sm:h-[44vh] md:h-[50vh] lg:h-[56vh] xl:h-[60vh]
//                    max-w-[1400px] mx-auto px-4"
//         onClick={() => navigate("/contact")}
//       >
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={current}
//             src={adImages[current]}
//             alt={`Ad ${current + 1}`}
//             className="max-h-full max-w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]
//                        w-[85%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%]
//                        transition-all duration-700"
//             initial={{ opacity: 0, scale: 1.03 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.97 }}
//             transition={{ duration: 0.7, ease: 'easeInOut' }}
//           />
//         </AnimatePresence>
//       </div>

//       {/* Navigation dots */}
//       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//         {adImages.map((_, idx) => (
//           <div
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
//               idx === current
//                 ? "bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)] scale-110"
//                 : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaTree, FaGift, FaStar, FaSnowflake } from "react-icons/fa";

// Import all ad images
import engGen from "../pics/ads/eng-genad.png";
import vieGen from "../pics/ads/vie-genad.png";
import engImplant from "../pics/ads/eng-implant9tr.png";
import vieImplant from "../pics/ads/vie-implant9tr.png";
import engWhite from "../pics/ads/eng-teethwhite.png";
import vieWhite from "../pics/ads/vie-teethwhite.png";
import engRemove from "../pics/ads/eng-teethremove.png";
import vieRemove from "../pics/ads/vie-teethremove.png";

// Christmas decorative elements
import snowflake1 from "../pics/decorations/snowflake1.svg";
import snowflake2 from "../pics/decorations/snowflake2.svg";
import ornament from "../pics/decorations/ornament.svg";

export default function ChristmasAdBanner() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const language = useSelector((state) => state.language.language);
  const isVN = language === "vietnamese";

  // Define ad sets based on language
  const adImages = {
    vietnamese: [
      vieImplant,
      vieWhite,
      vieRemove,
    ],
    english: [
      engImplant,
      engWhite,
      engRemove,
    ]
  };

  const adTitles = {
    vietnamese: [
      "🎁 IMPLANT GIÁNG SINH - ƯU ĐÃI ĐẶC BIỆT",
      "✨ TẨY TRẮNG RĂNG MỪNG LỄ HỘI",
      "🎄 QUÀ TẶNG CHO BÉ - NHỔ RĂNG MIỄN PHÍ"
    ],
    english: [
      "🎁 CHRISTMAS IMPLANT SPECIAL OFFER",
      "✨ HOLIDAY TEETH WHITENING DEAL",
      "🎄 FREE CHILD TOOTH EXTRACTION GIFT"
    ]
  };

  const currentAds = adImages[language] || adImages.english;
  const currentTitles = adTitles[language] || adTitles.english;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % currentAds.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [currentAds.length]);

  const handleAdClick = (index) => {
    // Navigate to contact page for appointment
    navigate("/contact", { 
      state: { 
        service: isVN ? 
          ["Implant", "Tẩy trắng", "Nhổ răng trẻ em"][index] :
          ["Implant", "Teeth Whitening", "Child Tooth Extraction"][index]
      } 
    });
  };

  return (
    <section className="relative w-full overflow-hidden flex justify-center items-center 
                       mt-4 mb-8 px-4">
      
      {/* Christmas Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-900 to-emerald-800">
        {/* Christmas Ornament Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: "30px",
                height: "30px",
                background: i % 3 === 0 ? "#D35400" : 
                           i % 3 === 1 ? "#FFD700" : "#C2185B",
                borderRadius: i % 2 === 0 ? "50%" : "0%",
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Christmas Lights */}
        <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute h-3 w-3 rounded-full"
              style={{
                left: `${(i / 30) * 100}%`,
                background: i % 4 === 0 ? "#ff0000" :
                           i % 4 === 1 ? "#00ff00" :
                           i % 4 === 2 ? "#ffff00" : "#ff00ff",
                boxShadow: `0 0 10px ${i % 4 === 0 ? '#ff0000' :
                           i % 4 === 1 ? '#00ff00' :
                           i % 4 === 2 ? '#ffff00' : '#ff00ff'}`,
                animation: `twinkle ${1 + Math.random() * 2}s infinite alternate`,
                animationDelay: `${Math.random() * 1}s`
              }}
            />
          ))}
        </div>

        {/* Background Blur for current ad */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-2xl scale-110 transition-all duration-700"
          style={{
            backgroundImage: `url(${currentAds[current]})`,
          }}
        />
      </div>

      {/* Animated Snowflakes Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/30"
            style={{
              top: "-20px",
              left: `${(i * 100) / 15}%`,
              fontSize: `${10 + Math.random() * 20}px`,
              animation: `snowfall ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Christmas Ribbon Header */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-green-600 to-red-600 
                         rounded-t-lg h-12 transform -skew-x-6 shadow-lg" />
          <div className="relative px-8 py-3 text-center">
            <h2 className="text-white text-xl md:text-2xl font-bold tracking-wider 
                          drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center gap-3">
              <FaTree className="text-yellow-300 animate-pulse" />
              {isVN ? "ƯU ĐÃI ĐẶC BIỆT MÙA GIÁNG SINH" : "CHRISTMAS SPECIAL OFFERS"}
              <FaGift className="text-red-400 animate-bounce" />
            </h2>
            <p className="text-yellow-100 text-sm mt-1 font-medium">
              {isVN ? "🎁 Áp dụng đến hết 31/12 • Số lượng có hạn 🎁" : 
                     "🎁 Valid until Dec 31st • Limited availability 🎁"}
            </p>
          </div>
        </div>

        {/* Ad Display Area */}
        <div className="relative bg-gradient-to-br from-white/95 to-emerald-50/95 
                       backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden
                       border-4 border-gradient-to-r from-red-500 via-green-500 to-red-500
                       p-4 sm:p-6">
          
          {/* Christmas Corner Decorations */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-red-500 rounded-full 
                         opacity-20 -rotate-12" />
          <div className="absolute top-4 right-4 w-12 h-12 bg-green-500 rounded-full 
                         opacity-20 rotate-12" />
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-500 rounded-full 
                         opacity-20 rotate-12" />
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-red-500 rounded-full 
                         opacity-20 -rotate-12" />

          <div
            className="relative cursor-pointer group"
            onClick={() => handleAdClick(current)}
          >
            {/* Ad Title */}
            <div className="absolute top-0 left-0 right-0 z-20 pt-6 px-6 text-center">
              <motion.h3
                key={`title-${current}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-green-600 
                         text-white font-bold text-lg md:text-xl rounded-full shadow-xl
                         backdrop-blur-sm bg-white/10 border-2 border-white/30"
              >
                {currentTitles[current]}
              </motion.h3>
            </div>

            {/* Ad Image */}
            <div className="pt-20 pb-10 px-4 sm:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  {/* Christmas Frame */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-400/20 via-green-400/20 to-red-400/20 
                                rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  
                  <div className="relative bg-gradient-to-br from-white to-emerald-50 
                                p-4 rounded-2xl shadow-xl border-2 border-emerald-200">
                    <motion.img
                      src={currentAds[current]}
                      alt={`Christmas Ad ${current + 1}`}
                      className="max-h-[45vh] w-auto mx-auto object-contain drop-shadow-2xl
                               transition-transform duration-500 group-hover:scale-[1.02]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </div>

                  {/* Click Prompt */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                             bg-gradient-to-r from-red-500 to-green-500 text-white 
                             px-6 py-2 rounded-full text-sm font-semibold shadow-lg
                             flex items-center gap-2 whitespace-nowrap"
                  >
                    <FaStar className="animate-spin-slow" />
                    {isVN ? "NHẤN ĐỂ ĐẶT HẸN NGAY!" : "CLICK TO BOOK APPOINTMENT!"}
                    <FaStar className="animate-spin-slow" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Dots with Christmas Theme */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                        flex gap-2 z-10">
            {currentAds.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrent(idx)}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer 
                            flex items-center justify-center ${
                    idx === current
                      ? "bg-gradient-to-r from-red-500 to-green-500 shadow-[0_0_15px_rgba(220,38,38,0.7)] scale-125"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                >
                  {idx === current && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </div>
                {/* Christmas decoration for active dot */}
                {idx === current && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-red-500"
                  >
                    <FaSnowflake className="text-xs" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Manual Navigation Buttons */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + currentAds.length) % currentAds.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 
                     bg-white/20 backdrop-blur-sm hover:bg-white/40 
                     w-10 h-10 rounded-full flex items-center justify-center 
                     text-white text-xl font-bold transition-all duration-300
                     border-2 border-white/30 hover:border-white/60"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % currentAds.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 
                     bg-white/20 backdrop-blur-sm hover:bg-white/40 
                     w-10 h-10 rounded-full flex items-center justify-center 
                     text-white text-xl font-bold transition-all duration-300
                     border-2 border-white/30 hover:border-white/60"
          >
            ›
          </button>
        </div>

        {/* Christmas Countdown Banner */}
        <div className="mt-6 bg-gradient-to-r from-red-600/90 via-green-600/90 to-red-600/90 
                      rounded-lg py-3 px-6 backdrop-blur-sm shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
              <FaGift className="animate-bounce" />
              {isVN ? "ƯU ĐÃI KẾT THÚC SAU:" : "OFFER ENDS IN:"}
            </div>
            <div className="flex gap-4">
              {["31", "12", "2024"].map((num, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded px-3 py-1 
                                min-w-[50px] text-white font-bold text-lg">
                    {num}
                  </div>
                  <div className="text-yellow-100 text-xs mt-1">
                    {isVN ? ["Ngày", "Tháng", "Năm"][idx] : ["Day", "Month", "Year"][idx]}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 
                       text-red-900 font-bold px-6 py-2 rounded-full text-sm 
                       transition-all duration-300 hover:scale-105 shadow-lg
                       flex items-center gap-2"
            >
              <FaGift />
              {isVN ? "ĐẶT HẸN NGAY" : "BOOK NOW"}
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-20px) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .border-gradient-to-r {
          border-image: linear-gradient(to right, #ef4444, #16a34a, #ef4444) 1;
        }
      `}</style>
    </section>
  );
}