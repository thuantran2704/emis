import React from "react";
import equipmentContent from "../Translations/equipmentContent";
import vatechImg from "../pics/vatech.jpg";
import kehongImg from "../pics/kehong.jpg";
import hyperlightImg from "../pics/hyperlight.jpg";
import uvStorageImg from "../pics/uvStorage.jpg";
import hyundaiImg from "../pics/hyundai.jpg";
import sterileRoomImg from "../pics/sterileRoom.jpg";
import { useSelector } from 'react-redux';

export default function Equipment() {
  const language = useSelector((state) => state.language.language);
  const content = language === "vietnamese" 
    ? equipmentContent.vietnamese 
    : equipmentContent.english;

  const headingFont = "'Noto Serif', serif";
  const bodyFont = "'Noto Sans', sans-serif";

  const equipmentList = [
    { key: "vatech", img: vatechImg },
    { key: "kehong", img: kehongImg },
    { key: "hyperlight", img: hyperlightImg },
    { key: "uvStorage", img: uvStorageImg },
    { key: "hyundai", img: hyundaiImg },
    { key: "sterileRoom", img: sterileRoomImg },
  ];

  return (
    <main 
      className="bg-gradient-to-b from-white to-gray-50 text-gray-800 min-h-screen px-4 sm:px-6 lg:px-8 py-16"
      style={{ fontFamily: bodyFont }}
    >
      {/* Page Header */}
      <header className="text-center mb-16 max-w-4xl mx-auto">
        <div className="inline-block mb-6">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-gold-500 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-gold-500 to-blue-400 rounded-full"></div>
          </div>
        </div>
        
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#2d3748] via-[#3b3b6d] to-[#4a5568] bg-clip-text text-transparent mb-6"
          style={{ fontFamily: headingFont }}
        >
          {content.pageTitle || content.title}
        </h1>
        
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-gold-50 rounded-full blur opacity-75"></div>
          <div className="relative">
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-gold-500 to-blue-500 rounded-full"></div>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600 px-4">
          {content.pageIntro || 
            (language === "vietnamese" 
              ? "Nha khoa của chúng tôi tự hào sở hữu hệ thống thiết bị hiện đại hàng đầu, mang lại trải nghiệm điều trị chính xác, an toàn và thoải mái tối đa cho mọi khách hàng."
              : "Our clinic proudly features cutting-edge dental equipment, ensuring precision, safety, and unmatched comfort in every procedure.")}
        </p>
      </header>

      {/* Equipment Articles - Enhanced Layout */}
      <div className="max-w-6xl mx-auto">
        {equipmentList.map(({ key, img }, index) => (
          <section 
            key={key} 
            className={`mb-24 scroll-mt-20 ${index % 2 === 0 ? '' : ''}`}
            id={`equipment-${index + 1}`}
          >
            <div className={`
              relative overflow-hidden rounded-2xl
              ${index % 2 === 0 
                ? 'bg-gradient-to-br from-white to-blue-50 border border-blue-100' 
                : 'bg-gradient-to-br from-white to-gold-50 border border-gold-100'
              }
              shadow-lg hover:shadow-2xl transition-all duration-300
              transform hover:-translate-y-1
            `}>
              {/* Decorative corner accent */}
              <div className={`
                absolute top-0 right-0 w-24 h-24 
                ${index % 2 === 0 
                  ? 'bg-gradient-to-br from-blue-500/10 to-transparent' 
                  : 'bg-gradient-to-br from-gold-500/10 to-transparent'
                }
                rounded-bl-full
              `}></div>
              
              <div className="p-8 md:p-10">
                {/* Title with icon */}
                <div className="flex items-center mb-6">
                  <div className={`
                    mr-4 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                    ${index % 2 === 0 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
                      : 'bg-gradient-to-br from-gold-500 to-gold-600 text-white'
                    }
                    shadow-md
                  `}>
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <h2 
                    className="text-2xl md:text-3xl font-bold text-gray-800"
                    style={{ fontFamily: headingFont }}
                  >
                    {content[key].title}
                  </h2>
                </div>

                {/* Image Container with enhanced styling */}
                <figure className="mb-8 relative group">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    
                    {/* Image */}
                    <img
                      src={img}
                      alt={content[key].title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Image border effect */}
                    <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none"></div>
                  </div>
                  
                  {/* Caption with enhanced styling */}
                  <figcaption className={`
                    text-center mt-4 px-4 py-3 rounded-lg font-semibold text-sm md:text-base
                    ${index % 2 === 0 
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                      : 'bg-gold-50 text-gold-700 border-l-4 border-gold-500'
                    }
                    shadow-sm
                  `}>
                    {content[key].equipmentIntro}
                  </figcaption>
                </figure>

                {/* Description with enhanced typography */}
                <div className="relative">
                  {/* Decorative quote mark for first paragraph */}
                  {index === 0 && (
                    <div className="absolute -left-4 -top-2 text-6xl text-blue-200 font-serif leading-none">"</div>
                  )}
                  
                  <p className={`
                    text-gray-700 leading-relaxed text-lg relative z-10
                    ${index % 2 === 0 ? 'pl-6 border-l-4 border-blue-200' : 'pl-6 border-l-4 border-gold-200'}
                    pb-2
                  `}>
                    {content[key].equipmentDescription}
                  </p>
                  
                  {/* Bottom separator */}
                  <div className={`
                    mt-6 pt-6 border-t 
                    ${index % 2 === 0 ? 'border-blue-100' : 'border-gold-100'}
                  `}>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className={`
                        px-3 py-1 rounded-full
                        ${index % 2 === 0 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gold-100 text-gold-600'
                        }
                      `}>
                        {index % 2 === 0 
                          ? (language === "vietnamese" ? "Thiết bị Chẩn đoán" : "Diagnostic Equipment")
                          : (language === "vietnamese" ? "Thiết bị Điều trị" : "Treatment Equipment")
                        }
                      </span>
                      <span>✓ {language === "vietnamese" ? "Công nghệ Tiên tiến" : "Advanced Technology"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Final Call to Action */}
      <footer className="text-center mt-20 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-gold-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: headingFont }}>
            {language === "vietnamese" 
              ? "Trải nghiệm Công nghệ Nha khoa Hiện đại" 
              : "Experience Modern Dental Technology"}
          </h3>
          <p className="text-gray-600 mb-6">
            {language === "vietnamese"
              ? "Tất cả thiết bị được bảo trì định kỳ và vận hành bởi đội ngũ chuyên gia lành nghề"
              : "All equipment is regularly maintained and operated by our team of skilled professionals"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-white rounded-full shadow-sm border">
              <span className="text-blue-600 font-medium">
                ✓ {language === "vietnamese" ? "Tiêu chuẩn Quốc tế" : "International Standards"}
              </span>
            </div>
            <div className="px-4 py-2 bg-white rounded-full shadow-sm border">
              <span className="text-blue-600 font-medium">
                ✓ {language === "vietnamese" ? "An toàn Tối đa" : "Maximum Safety"}
              </span>
            </div>
            <div className="px-4 py-2 bg-white rounded-full shadow-sm border">
              <span className="text-blue-600 font-medium">
                ✓ {language === "vietnamese" ? "Hiệu quả Cao" : "High Efficiency"}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}