import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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

export default function CrownLanding() {
  const language = useSelector((state) => state.language.language);

  // --- Sections Content (Bilingual) ---
  const sections = [
    {
      title: {
        vietnamese: "1. Bọc Răng Sứ là Gì?",
        english: "1. What is a Dental Crown?"
      },
      content: {
        vietnamese: `Bọc răng sứ (hay Răng sứ thẩm mỹ) là phương pháp phục hình răng giả cố định, sử dụng một "mão sứ" rỗng ruột được chế tác tinh xảo để bọc chụp toàn bộ chiếc răng thật đã được mài nhỏ. Kỹ thuật này giúp khắc phục hiệu quả tình trạng răng thưa, hô, sứt mẻ hay xỉn màu, mang lại hàm răng trắng sáng, đều đẹp và bền chắc.`,
        english: `A dental crown (or cosmetic crown) is a fixed prosthetic method using a hollow, finely crafted "crown" to cover a natural tooth that has been shaped down. This technique effectively corrects issues such as gaps, misalignment, chipped or discolored teeth, providing a bright, even, and durable smile.`
      }
    },
    {
      title: {
        vietnamese: "2. Trường Hợp Nào Nên Bọc Răng Sứ?",
        english: "2. When Should You Get a Dental Crown?"
      },
      content: {
        vietnamese: `Bọc răng sứ là giải pháp lý tưởng cho những trường hợp sau:
- Răng bị nhiễm màu kháng sinh nặng (răng nhiễm tetracycline), tẩy trắng không hiệu quả.
- Răng bị sứt mẻ, vỡ lớn do chấn thương.
- Răng lệch lạc, hô móm nhẹ, răng thưa muốn cải thiện nhanh chóng.
- Răng sâu vỡ lớn, răng chết tủy hoặc đã điều trị tủy cần được bảo vệ.
- Phục hình sau khi làm cầu răng sứ hoặc cấy ghép Implant.`,
        english: `Dental crowns are ideal for the following cases:
- Teeth heavily stained by antibiotics (tetracycline), not responding to whitening.
- Teeth chipped or severely broken due to trauma.
- Misaligned, slightly protruding or spaced teeth needing fast improvement.
- Large cavities, dead teeth, or teeth that have had root canal treatment needing protection.
- Restoration after a dental bridge or implant.`
      }
    },
    {
      title: {
        vietnamese: "3. Các Loại Răng Sứ Cao Cấp Tại Emis Dental",
        english: "3. Premium Dental Crowns at Emis Dental"
      },
      content: {
        vietnamese: `Tại Emis Dental, chúng tôi cam kết sử dụng các dòng sứ chính hãng, có bảo hành minh bạch theo thời gian hãng quy định. Minh bạch về xuất xứ từ các thương hiệu hàng đầu thế giới:
- Sứ Kim Loại Titan: Răng sứ Titan Nhật (Bảo hành 2 năm).
- Sứ Toàn Sứ EMIS: Răng sứ EMIS Zico Centonia (Bảo hành 5 năm).
- Sứ Toàn Sứ Zirconia (Đức & Mỹ):
  + Răng sứ Zirconia Mỹ (Bảo hành 10 năm).
  + Răng sứ DD Bio Đức (Bảo hành 10 năm).
  + Răng sứ Cercon HT Đức (Bảo hành 10 năm).
- Sứ Cao Cấp Lava (Mỹ): Răng sứ Lava MỸ, Lava Plus Mỹ, Lava Esthetics MỸ (Bảo hành 12–20 năm).
- Sứ Thẩm Mỹ Đỉnh Cao: Răng sứ Orodent ITALY (Bảo hành TRỌN ĐỜI).
- Dán Sứ Veneer: Dán sứ Emax (Bảo hành 10 năm), giúp bảo tồn răng thật tối đa.`,
        english: `At Emis Dental, we are committed to using genuine, premium crowns with transparent warranties as per manufacturer guidelines:
- Titanium Metal Crowns: Japanese Titan Crowns (2-year warranty)
- Full Ceramic EMIS Crowns: EMIS Zico Centonia (5-year warranty)
- Full Zirconia Crowns (Germany & USA):
  + US Zirconia (10-year warranty)
  + DD Bio Germany (10-year warranty)
  + Cercon HT Germany (10-year warranty)
- Premium Lava Crowns (USA): Lava, Lava Plus, Lava Esthetics (12–20 years)
- High-End Cosmetic Crowns: Orodent ITALY (Lifetime warranty)
- Veneers: Emax Veneers (10-year warranty), preserving natural teeth as much as possible.`
      }
    },
    {
      title: {
        vietnamese: "4. Ưu Điểm Vượt Trội Của Bọc Răng Sứ Thẩm Mỹ",
        english: "4. Advantages of Cosmetic Dental Crowns"
      },
      content: {
        vietnamese: `Bọc răng sứ được ưa chuộng nhờ những ưu điểm nổi bật:
- Cải Thiện Thẩm Mỹ Tinh Tế: Giúp phục hồi hình dáng, màu sắc răng về màu tự nhiên, hài hòa với khuôn mặt.
- Đảm Bảo Ăn Nhai Bền Vững: Răng sứ có thể bảo vệ mô răng tự nhiên khỏi tổn thương và khôi phục chức năng ăn nhai thoải mái như răng thật, bền đến 30 năm.
- Bảo tồn răng thật: Mão sứ bao bọc, bảo vệ răng thật khỏi tác động của vi khuẩn, hóa chất, nhiệt độ.
- Bảo vệ răng đã chữa tủy: Răng dễ vỡ sau khi chữa tủy, bọc sứ giúp bảo vệ hiệu quả.`,
        english: `Dental crowns are popular due to their outstanding benefits:
- Enhance Aesthetics: Restore natural shape and color, harmonizing with the face.
- Durable Functionality: Protect natural teeth from damage and restore chewing comfort, lasting up to 30 years.
- Preserve Natural Teeth: Crowns cover and protect teeth from bacteria, chemicals, and temperature.
- Protect Treated Teeth: Crowns reinforce teeth after root canal therapy, preventing breakage.`
      }
    },
    {
      title: {
        vietnamese: "5. Các Dáng Răng Sứ Nào Được Ưa Chuộng Trên Thị Trường?",
        english: "5. Popular Crown Shapes on the Market"
      },
      content: {
        vietnamese: `Tùy vào mong muốn và khuôn mặt, các dáng răng sứ thường được khách hàng lựa chọn. (File hình chị gửi DÁNG RĂNG)`,
        english: `Depending on personal preference and facial features, various crown shapes are popular among clients. (Images for reference)`
      }
    },
    {
      title: {
        vietnamese: "6. Quy Trình Bọc Răng Sứ Chuẩn Y Khoa tại Emis Dental",
        english: "6. Step-by-Step Dental Crown Procedure at Emis Dental"
      },
      content: {
        vietnamese: `Bước 1: Thăm khám & Tư vấn: Bác sĩ kiểm tra tổng quát, chụp phim X-quang.
Bước 2: Lập kế hoạch điều trị: Lấy dấu răng, thiết kế nụ cười và chọn dáng răng, màu răng phù hợp.
Bước 3: Mài Cùi Răng (tối thiểu): Mài cùi răng theo tỉ lệ chuẩn, hạn chế xâm lấn răng thật, lấy dấu hàm gửi Labo chế tác sứ.
Bước 4: Gắn răng tạm: Làm bộ răng tạm để ăn nhai trong quá trình chờ răng sứ.
Bước 5: Thử sứ: Kiểm tra độ khít sát, màu sắc, hình dáng, khớp cắn và cảm giác ăn nhai.
Bước 6: Gắn Sứ Chính Thức: Kiểm tra và gắn sứ cố định vĩnh viễn.`,
        english: `Step 1: Consultation & Examination: Comprehensive check-up and X-rays.
Step 2: Treatment Planning: Take dental impressions, design smile, choose crown shape and color.
Step 3: Tooth Preparation: Minimize tooth reduction, take impressions, send to lab for crown fabrication.
Step 4: Temporary Crowns: Place temporary crowns for chewing during fabrication.
Step 5: Crown Try-In: Check fit, color, shape, bite, and comfort.
Step 6: Final Crown Placement: Place permanent crowns after final checks.`
      }
    },
    {
      title: {
        vietnamese: "7. Các Loại Răng Sứ tại Emis Dental",
        english: "7. Types of Dental Crowns at Emis Dental"
      },
      content: {
        vietnamese: `Răng sứ có 2 dòng: răng sứ kim loại và răng sứ toàn sứ, chia thành nhiều loại: kim loại thường, Titan, Chrom-Cobalt, kim loại quý và toàn sứ. Mỗi loại phù hợp với nhu cầu bọc răng sứ thẩm mỹ khác nhau. (Folder chị gửi LOẠI RĂNG)`,
        english: `There are two main types of crowns: metal and full-ceramic, including various subtypes such as regular metal, Titanium, Chrome-Cobalt, precious metals, and full ceramic. Each type suits different aesthetic dental crown needs. (Folder reference for crown types)`
      }
    },
    {
      title: {
        vietnamese: "8. Vì Sao Bạn Nên Chọn Làm Răng Sứ tại Emis Dental?",
        english: "8. Why Choose Emis Dental for Your Crowns?"
      },
      content: {
        vietnamese: `- Nha khoa uy tín: Niềm tin của khách hàng là tài sản quý giá.
- Vật Liệu Chính Hãng: 100% sứ cao cấp chính hãng, có thẻ bảo hành uy tín.
- Quy Trình Chuẩn Y Khoa: Vô trùng, an toàn, bảo tồn răng thật tối đa.
- Đội Ngũ Bác Sĩ Chuyên Môn Cao: Kinh nghiệm, chuyên sâu trong thiết kế nụ cười và phục hình thẩm mỹ.`,
        english: `- Reputable Clinic: Customers’ trust is a valuable asset.
- Genuine Materials: 100% premium, certified materials with valid warranties.
- Standard Medical Procedure: Sterile, safe, preserving natural teeth.
- Highly Skilled Dentists: Experienced in smile design and aesthetic restorations.`
      }
    }
  ];

  // --- Section 5 / Smile Design Slider Images ---
  const formImages = language === "vietnamese"
    ? [form1Vie, form2Vie, form3Vie, form4Vie, form5Vie, form6Vie, form7Vie, form8Vie]
    : [form1Eng, form2Eng, form3Eng, form4Eng, form5Eng, form6Eng, form7Eng, form8Eng];

  // --- Section 7 / Crown Gallery Images ---
  const crownImages = language === "vietnamese"
    ? [crown1Vie, crown2Vie, crown3Vie, crown4Vie, crown5Vie, crown6Vie, crown7Vie, crown8Vie]
    : [crown1Eng, crown2Eng, crown3Eng, crown4Eng, crown5Eng, crown6Eng, crown7Eng, crown8Eng];

  // --- Responsive Slider Component ---
  const ImageSlider = ({ images }) => {
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
      <div className="relative w-full overflow-hidden my-10">
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

        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${getTransformValue()}%)` }}>
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
    <div className="w-full flex justify-center pt-20 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
          {language === "vietnamese" ? "Bọc Răng Sứ Thẩm Mỹ" : "Cosmetic Dental Crowns"}
        </h1>

        <div className="space-y-16 text-gray-800 text-[17px] leading-relaxed">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {language === "vietnamese" ? sec.title.vietnamese : sec.title.english}
              </h2>
              <p className="whitespace-pre-line mb-6">
                {language === "vietnamese" ? sec.content.vietnamese : sec.content.english}
              </p>

              {/* Section 5 Slider */}
              {i === 4 && <ImageSlider images={formImages}/>}

              {/* Section 7 Gallery */}
              {i === 6 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {crownImages.map((img, idx) => (
                    <img key={idx} src={img} alt={`Crown ${idx}`} className="rounded-lg shadow-md w-full object-cover" />
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
