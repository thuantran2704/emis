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
      title: isVie ? "1. Bọc Răng Sứ là Gì?" : "1. What is a Dental Crown?",
      content: isVie
        ? `Bọc răng sứ là phương pháp phục hình thẩm mỹ bằng cách bọc một mão sứ tinh xảo lên răng thật đã được mài nhỏ. Kỹ thuật này giúp khắc phục răng thưa, răng hô nhẹ, răng sứt mẻ hoặc xỉn màu, mang lại nụ cười đều và trắng sáng.`
        : `A dental crown is a cosmetic restoration that covers a prepared tooth with a custom-made porcelain crown. This technique corrects gaps, minor misalignments, chipped or discolored teeth, providing a uniform, bright smile.`
    },
    {
      id: "when",
      title: isVie ? "2. Khi Nào Nên Bọc Răng Sứ?" : "2. When Should You Get a Crown?",
      content: isVie
        ? `Các trường hợp nên bọc răng sứ:\n- Răng nhiễm màu nặng, tẩy trắng không hiệu quả.\n- Răng sứt mẻ hoặc vỡ do chấn thương.\n- Răng lệch lạc nhẹ, răng thưa.\n- Răng đã điều trị tủy hoặc sâu lớn cần bảo vệ.\n- Phục hình sau cầu răng hoặc cấy Implant.`
        : `Dental crowns are ideal for:\n- Teeth with severe staining that cannot be whitened.\n- Chipped or fractured teeth.\n- Slightly misaligned or gapped teeth.\n- Teeth that have undergone root canal treatment or have large cavities.\n- Restorations after bridges or dental implants.`
    },
    {
      id: "procedure",
      title: isVie ? "3. Quy Trình Chuẩn Y Khoa" : "3. Step-by-Step Procedure",
      content: isVie
        ? `1. Thăm khám, chụp X-quang và tư vấn.\n2. Lập kế hoạch điều trị và thiết kế nụ cười.\n3. Mài cùi răng tối thiểu, lấy dấu gửi labo.\n4. Gắn răng tạm an toàn.\n5. Thử sứ để kiểm tra màu sắc và hình dáng.\n6. Gắn sứ cố định vĩnh viễn.`
        : `1. Consultation and X-ray imaging.\n2. Treatment planning and smile design.\n3. Minimal tooth preparation and impressions sent to the lab.\n4. Temporary crown placement.\n5. Trial crown to check fit, shape, and color.\n6. Permanent crown placement after adjustments.`
    },
    {
      id: "shapes",
      title: isVie ? "4. Các Dáng Răng Phổ Biến" : "4. Popular Crown Shapes",
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
      title: isVie ? "5. Các Loại Răng Sứ Cao Cấp" : "5. Premium Crown Types",
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
      title: isVie ? "6. Lợi Ích Khi Bọc Răng Sứ" : "6. Benefits of Dental Crowns",
      content: isVie
        ? `- Cải thiện thẩm mỹ tự nhiên.\n- Ăn nhai bền vững, có thể lên tới 30 năm.\n- Bảo vệ răng thật khỏi vi khuẩn, nhiệt độ và hóa chất.\n- Giảm nguy cơ mẻ vỡ cho răng đã chữa tủy.`
        : `- Enhances natural aesthetics.\n- Durable chewing function, potentially up to 30 years.\n- Protects natural teeth from bacteria, temperature, and chemicals.\n- Reduces chipping risk for teeth that underwent root canal.`
    },
    {
      id: "why-emis",
      title: isVie ? "7. Vì Sao Nên Chọn Emis Dental?" : "7. Why Choose Emis Dental?",
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
      <div className="relative w-full overflow-hidden my-10">
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-2 rounded-full">
          &#8249;
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-2 rounded-full">
          &#8250;
        </button>

        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="px-2 flex-shrink-0" style={{ width: `${100 / visibleSlides}%` }}>
              <img src={img} className="rounded-lg shadow-md w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ---------------- RENDER ----------------
  return (
    <div className="w-full flex justify-center pt-20 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
          {isVie ? "Bọc Răng Sứ Thẩm Mỹ" : "Cosmetic Dental Crowns"}
        </h1>

        <div className="space-y-16 text-gray-800 text-[17px] leading-relaxed">
          {sections.map((sec, i) => (
            <div key={i} id={sec.id}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{sec.title}</h2>
              {sec.content && <p className="whitespace-pre-line">{sec.content}</p>}

              {sec.slider === "forms" && <ImageSlider images={formImages} />}
              {sec.slider === "crowns" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {crownImages.map((img, idx) => (
                    <img key={idx} src={img} className="rounded-lg shadow-md w-full object-cover" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
