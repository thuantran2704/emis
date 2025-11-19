import React, { useState, useEffect } from "react";

// --- Section 5 Images (Smile Design Forms) ---
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

// --- Section 7 Images (Crown Types) ---
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
  const isVie = language === "vietnamese";

  // ---------------- CONTENT ----------------
  const sections = [
    {
      id: "intro",
      title: isVie ? "Giới Thiệu Bọc Răng Sứ" : "Introduction to Dental Crowns",
      content: isVie
        ? `Bọc răng sứ là phương pháp thẩm mỹ nha khoa phổ biến, giúp cải thiện hình dáng, màu sắc và chức năng của răng. Kỹ thuật này sử dụng mão răng sứ bọc lên răng thật đã được mài nhỏ, vừa bảo vệ răng, vừa mang lại nụ cười trắng sáng và tự nhiên.`
        : `Dental crowns are a popular cosmetic dentistry procedure that enhances the shape, color, and function of teeth. This technique uses a hollow porcelain crown placed over a prepared tooth, protecting it while delivering a natural, bright smile.`
    },
    {
      id: "toc",
      title: isVie ? "Mục Lục" : "Table of Contents",
      content: isVie
        ? `1. Bọc Răng Sứ là Gì?\n2. Khi Nào Nên Bọc Răng Sứ?\n3. Quy Trình Chuẩn Y Khoa\n4. Các Dáng Răng Phổ Biến\n5. Các Loại Răng Sứ Cao Cấp\n6. Lợi Ích Khi Bọc Răng Sứ\n7. Vì Sao Chọn Emis Dental?`
        : `1. What is a Dental Crown?\n2. When Should You Get a Crown?\n3. Step-by-Step Procedure\n4. Popular Crown Shapes\n5. Premium Crown Types\n6. Benefits of Dental Crowns\n7. Why Choose Emis Dental?`
    },
    {
      id: "what",
      title: isVie ? "Bọc Răng Sứ là Gì?" : "What is a Dental Crown?",
      content: isVie
        ? `Bọc răng sứ là phương pháp phục hình thẩm mỹ bằng cách bọc một mão sứ tinh xảo lên răng thật đã được mài nhỏ. Kỹ thuật này giúp khắc phục răng thưa, răng hô nhẹ, răng sứt mẻ hoặc xỉn màu, mang lại nụ cười đều và trắng sáng.`
        : `A dental crown is a cosmetic restoration that covers a prepared tooth with a custom-made porcelain crown. This technique corrects gaps, minor misalignments, chipped or discolored teeth, providing a uniform, bright smile.`
    },
    {
      id: "when",
      title: isVie ? "Khi Nào Nên Bọc Răng Sứ?" : "When Should You Get a Crown?",
      content: isVie
        ? `Các trường hợp nên bọc răng sứ:\n- Răng nhiễm màu nặng, tẩy trắng không hiệu quả.\n- Răng sứt mẻ hoặc vỡ do chấn thương.\n- Răng lệch lạc nhẹ, răng thưa.\n- Răng đã điều trị tủy hoặc sâu lớn cần bảo vệ.\n- Phục hình sau cầu răng hoặc cấy Implant.`
        : `Dental crowns are ideal for:\n- Teeth with severe staining that cannot be whitened.\n- Chipped or fractured teeth.\n- Slightly misaligned or gapped teeth.\n- Teeth that have undergone root canal treatment or have large cavities.\n- Restorations after bridges or dental implants.`
    },
    {
      id: "procedure",
      title: isVie ? "Quy Trình Chuẩn Y Khoa" : "Step-by-Step Procedure",
      content: isVie
        ? `1. Thăm khám, chụp X-quang và tư vấn.\n2. Lập kế hoạch điều trị và thiết kế nụ cười.\n3. Mài cùi răng tối thiểu, lấy dấu gửi labo.\n4. Gắn răng tạm an toàn.\n5. Thử sứ để kiểm tra màu sắc và hình dáng.\n6. Gắn sứ cố định vĩnh viễn.`
        : `1. Consultation and X-ray imaging.\n2. Treatment planning and smile design.\n3. Minimal tooth preparation and impressions sent to the lab.\n4. Temporary crown placement.\n5. Trial crown to check fit, shape, and color.\n6. Permanent crown placement after adjustments.`
    },
    {
      id: "shapes",
      title: isVie ? "Các Dáng Răng Phổ Biến" : "Popular Crown Shapes",
      content: isVie
        ? `Tùy theo khuôn mặt và sở thích, các dáng răng phổ biến gồm: tự nhiên, siêu trắng trẻ trung, thanh lịch hoặc sang trọng.`
        : `Depending on facial features and preferences, popular crown shapes include: natural, ultra-white youthful, elegant, or luxurious.`
    },
    {
      id: "shapes-slider",
      title: isVie ? "Ví Dụ Dáng Răng" : "Example Smile Designs",
      slider: "forms"
    },
    {
      id: "types",
      title: isVie ? "Các Loại Răng Sứ Cao Cấp" : "Premium Crown Types",
      content: isVie
        ? `Tại Emis Dental, chúng tôi sử dụng các dòng sứ chính hãng với bảo hành minh bạch:\n- Sứ Titan: bảo hành 2 năm.\n- Sứ Toàn Sứ EMIS: bảo hành 5 năm.\n- Zirconia Mỹ/Đức: bảo hành 10 năm.\n- Lava Mỹ: bảo hành 12–20 năm.\n- Orodent Italy: bảo hành trọn đời.\n- Veneer Emax: bảo hành 10 năm.`
        : `At Emis Dental, we use genuine crowns with transparent warranties:\n- Titan Crowns: 2-year warranty.\n- EMIS All-Ceramic: 5-year warranty.\n- Zirconia (US/Germany): 10-year warranty.\n- Lava (USA): 12–20 years.\n- Orodent (Italy): Lifetime warranty.\n- Emax Veneers: 10-year warranty.`
    },
    {
      id: "crown-gallery",
      title: isVie ? "Ví Dụ Các Loại Răng Sứ" : "Example Crown Types",
      slider: "crowns"
    },
    {
      id: "benefits",
      title: isVie ? "Lợi Ích Khi Bọc Răng Sứ" : "Benefits of Dental Crowns",
      content: isVie
        ? `- Cải thiện thẩm mỹ tự nhiên.\n- Ăn nhai bền vững, có thể lên tới 30 năm.\n- Bảo vệ răng thật khỏi vi khuẩn, nhiệt độ và hóa chất.\n- Giảm nguy cơ mẻ vỡ cho răng đã chữa tủy.`
        : `- Enhances natural aesthetics.\n- Durable chewing function, potentially up to 30 years.\n- Protects natural teeth from bacteria, temperature, and chemicals.\n- Reduces chipping risk for teeth that underwent root canal.`
    },
    {
      id: "why-emis",
      title: isVie ? "Vì Sao Nên Chọn Emis Dental?" : "Why Choose Emis Dental?",
      content: isVie
        ? `- Nha khoa uy tín, cam kết chất lượng.\n- Vật liệu chính hãng từ Lava, Orodent, Zirconia, Emax.\n- Quy trình chuẩn y khoa, vô trùng và an toàn.\n- Đội ngũ bác sĩ giàu kinh nghiệm trong thiết kế nụ cười và phục hình thẩm mỹ.`
        : `- Reputable dental clinic with proven quality.\n- Genuine materials from Lava, Orodent, Zirconia, and Emax.\n- Standard medical procedures, sterile and safe.\n- Experienced dentists in smile design and cosmetic restoration.`
    }
  ];

  // ---------------- IMAGES ----------------
  const formImages = isVie
    ? [form1Vie, form2Vie, form3Vie, form4Vie, form5Vie, form6Vie, form7Vie, form8Vie]
    : [form1Eng, form2Eng, form3Eng, form4Eng, form5Eng, form6Eng, form7Eng, form8Eng];

  const crownImages = isVie
    ? [crown1Vie, crown2Vie, crown3Vie, crown4Vie, crown5Vie, crown6Vie, crown7Vie, crown8Vie]
    : [crown1Eng, crown2Eng, crown3Eng, crown4Eng, crown5Eng, crown6Eng, crown7Eng, crown8Eng];

  // ---------------- SLIDER COMPONENT ----------------
  const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(4);

    useEffect(() => {
      const updateSlides = () => {
        if (window.innerWidth >= 1024) setVisibleSlides(4);
        else if (window.innerWidth >= 640) setVisibleSlides(2);
        else setVisibleSlides(1);
      };
      updateSlides();
      window.addEventListener("resize", updateSlides);
      return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const next = () => setCurrentIndex(prev => (prev + 1) % images.length);
    const prev = () => setCurrentIndex(prev => (prev - 1 + images.length) % images.length);

    return (
      <div className="relative w-full overflow-hidden my-12">
        <div className="flex items-center justify-between mb-6">
          <div className="w-4 h-1 bg-gradient-to-r from-[#d4af37] to-amber-200 rounded-full"></div>
          <div className="flex space-x-2 mx-4">
            <button onClick={prev} className="p-2 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={next} className="p-2 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="w-4 h-1 bg-gradient-to-l from-[#d4af37] to-amber-200 rounded-full"></div>
        </div>

        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="px-3 flex-shrink-0" style={{ width: `${100 / visibleSlides}%` }}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <img src={img} className="w-full h-48 object-cover" alt={`Example ${i + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ---------------- RENDER ----------------
  return (
    <div className="w-full flex justify-center pt-20 px-4 bg-gradient-to-br from-amber-50 to-white min-h-screen">
      <div className="max-w-4xl w-full">
        {/* Article Header */}
        <header className="text-center mb-16 pt-8">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
            {isVie ? "Nha Khoa Thẩm Mỹ" : "Cosmetic Dentistry"}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {isVie ? "Bọc Răng Sứ Thẩm Mỹ" : "Cosmetic Dental Crowns"}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-amber-300 mx-auto rounded-full"></div>
        </header>

        {/* Article Content */}
        <article className="bg-white shadow-2xl rounded-3xl overflow-hidden mb-16">
          <div className="p-10 md:p-14">
            <div className="prose prose-lg max-w-none">
              {sections.map((sec, i) => (
                <section key={i} id={sec.id} className="mb-16 last:mb-0">
                  {/* Section Header */}
                  <div className="flex items-start mb-8">
                    <div className="flex-shrink-0 w-2 h-12 bg-gradient-to-b from-[#d4af37] to-amber-300 rounded-full mr-4 mt-1"></div>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">{sec.title}</h2>
                  </div>

                  {/* Content */}
                  {sec.content && (
                    <div className="ml-6">
                      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <p className="text-gray-700 leading-8 text-lg whitespace-pre-line">
                          {sec.content}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Sliders and Galleries */}
                  {sec.slider === "forms" && <ImageSlider images={formImages} />}
                  
                  {sec.slider === "crowns" && (
                    <div className="ml-6 mt-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {crownImages.map((img, idx) => (
                          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <img src={img} className="w-full h-48 object-cover" alt={`Crown type ${idx + 1}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="bg-gradient-to-r from-amber-50 to-yellow-50 border-t border-amber-200 p-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {isVie ? "Bắt Đầu Hành Trình Nụ Cười Mới" : "Start Your Smile Journey Today"}
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                {isVie 
                  ? "Liên hệ với chúng tôi để được tư vấn miễn phí và thiết kế nụ cười hoàn hảo."
                  : "Contact us for a free consultation and design your perfect smile."}
              </p>
              <button className="bg-gradient-to-r from-[#d4af37] to-amber-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {isVie ? "Đặt Lịch Tư Vấn" : "Schedule Consultation"}
              </button>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
