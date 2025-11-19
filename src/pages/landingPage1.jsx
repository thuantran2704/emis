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
  // ---------------- CONTENT ----------------
  const sections = [
    {
      title: "1. Bọc Răng Sứ là Gì?",
      content: `Bọc răng sứ là phương pháp phục hình răng thẩm mỹ bằng cách sử dụng một mão sứ rỗng được chế tác tinh xảo để chụp lên toàn bộ chiếc răng thật đã được mài nhỏ. Kỹ thuật này giúp khắc phục hiệu quả các tình trạng răng thưa, hô nhẹ, sứt mẻ, vỡ hoặc xỉn màu. Sau khi bọc sứ, hàm răng trở nên trắng sáng, đều đẹp và bền chắc, mang lại sự hài hòa tự nhiên khi cười và nói.`
    },
    {
      title: "2. Trường Hợp Nào Nên Bọc Răng Sứ?",
      content: `Bọc răng sứ là lựa chọn lý tưởng cho các trường hợp sau:
Răng nhiễm màu kháng sinh tetracycline, tẩy trắng không còn hiệu quả.
Răng sứt mẻ hoặc vỡ lớn do chấn thương.
Răng lệch lạc nhẹ, hô móm nhẹ, răng thưa và muốn cải thiện nhanh chóng.
Răng sâu vỡ lớn, răng chết tủy hoặc đã điều trị tủy và cần được bảo vệ.
Răng cần phục hình sau khi làm cầu răng hoặc cấy ghép Implant.`
    },
    {
      title: "3. Các Loại Răng Sứ Cao Cấp Tại Emis Dental",
      content: `Tại Emis Dental, chúng tôi cam kết sử dụng các dòng sứ chính hãng và có bảo hành minh bạch theo thời gian hãng quy định. Các loại răng sứ phổ biến gồm:
Sứ Kim Loại Titan: Răng sứ Titan Nhật, bảo hành 2 năm.
Sứ Toàn Sứ EMIS: Răng sứ EMIS Zico Centonia, bảo hành 5 năm.
Sứ Toàn Sứ Zirconia Đức và Mỹ:
Răng sứ Zirconia Mỹ, bảo hành 10 năm.
Răng sứ DD Bio Đức, bảo hành 10 năm.
Răng sứ Cercon HT Đức, bảo hành 10 năm.
Sứ Lava Mỹ: Lava, Lava Plus và Lava Esthetics, bảo hành từ 12 đến 20 năm.
Sứ Orodent Italy: Bảo hành trọn đời.
Dán Sứ Veneer Emax: Bảo hành 10 năm, giúp bảo tồn răng thật tối đa.`
    },
    {
      title: "4. Ưu Điểm Vượt Trội Của Bọc Răng Sứ Thẩm Mỹ",
      content: `Bọc răng sứ mang lại nhiều ưu điểm nổi bật:
Cải thiện thẩm mỹ tinh tế với hình dáng và màu sắc tự nhiên.
Đảm bảo ăn nhai bền vững với độ bền lên đến 30 năm nếu chăm sóc tốt.
Bảo tồn răng thật nhờ khả năng bao bọc và bảo vệ trước vi khuẩn, nhiệt độ và hóa chất.
Đối với răng đã chữa tủy, bọc sứ giúp hạn chế nguy cơ mẻ vỡ hiệu quả.`
    },
    {
      title: "5. Các Dáng Răng Sứ Nào Được Ưa Chuộng Trên Thị Trường?",
      content: `Tùy vào mong muốn và khuôn mặt, các dáng răng sứ thường được khách hàng lựa chọn. Một số dáng thông dụng bao gồm tự nhiên, siêu trắng trẻ trung, thanh lịch hoặc sang trọng. (File hình chị gửi DÁNG RĂNG)`
    },
    {
      title: "6. Quy Trình Bọc Răng Sứ Chuẩn Y Khoa tại Emis Dental",
      content: `Quy trình bọc răng sứ được thực hiện bởi đội ngũ bác sĩ chính quy, đảm bảo chính xác và an toàn:
Bước 1: Thăm khám và tư vấn cùng chụp X-quang.
Bước 2: Lập kế hoạch điều trị, lấy dấu răng và thiết kế nụ cười dựa trên tính cách, màu da, màu tóc và sở thích.
Bước 3: Mài cùi răng tối thiểu và lấy dấu gửi Labo.
Bước 4: Gắn răng tạm bằng vật liệu an toàn như acrylic hoặc composite.
Bước 5: Thử sứ để kiểm tra độ khít sát, màu sắc, hình dáng và cảm giác ăn nhai.
Bước 6: Gắn sứ cố định vĩnh viễn sau khi tinh chỉnh hoàn tất.`
    },
    {
      title: "7. Các Loại Răng Sứ tại Emis Dental",
      content: `Răng sứ mô phỏng hình dáng, kích thước và màu sắc tương tự răng thật. Hiện nay có hai dòng chính là răng sứ kim loại và răng sứ toàn sứ. Chúng gồm năm loại: kim loại thường, Titan, Chrom Cobalt, kim loại quý và toàn sứ. Mỗi loại phù hợp với nhu cầu bọc răng khác nhau.
Tại Emis Dental, các loại răng sứ toàn sứ được nhập từ những thương hiệu lớn trên thế giới. (Folder chị gửi LOẠI RĂNG)`
    },
    {
      title: "8. Vì Sao Bạn Nên Chọn Làm Răng Sứ tại Emis Dental?",
      content: `Nha khoa uy tín với cam kết chất lượng xây dựng qua từng ca điều trị.
Vật liệu chính hãng 100 phần trăm từ các thương hiệu lớn như Lava, Orodent, Zirconia và Emax cùng thẻ bảo hành từ hãng.
Quy trình chuẩn y khoa đảm bảo vô trùng và an toàn.
Đội ngũ bác sĩ chuyên môn cao với kinh nghiệm dày dạn trong thiết kế nụ cười và phục hình thẩm mỹ.`
    }
  ];

  // ---------------- IMAGES ----------------
  const formImages = language === "vietnamese"
    ? [form1Vie, form2Vie, form3Vie, form4Vie, form5Vie, form6Vie, form7Vie, form8Vie]
    : [form1Eng, form2Eng, form3Eng, form4Eng, form5Eng, form6Eng, form7Eng, form8Eng];

  const crownImages = language === "vietnamese"
    ? [crown1Vie, crown2Vie, crown3Vie, crown4Vie, crown5Vie, crown6Vie, crown7Vie, crown8Vie]
    : [crown1Eng, crown2Eng, crown3Eng, crown4Eng, crown5Eng, crown6Eng, crown7Eng, crown8Eng];

  // ---------------- SLIDER ----------------
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
          Bọc Răng Sứ Thẩm Mỹ
        </h1>

        <div className="space-y-16 text-gray-800 text-[17px] leading-relaxed">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{sec.title}</h2>

              <p className="whitespace-pre-line">{sec.content}</p>

              {/* Section 5 Slider */}
              {i === 4 && <ImageSlider images={formImages} />}

              {/* Section 7 Gallery */}
              {i === 6 && (
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
