import React from 'react';
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
      textFirst: true,
      img: img1,
      title: "1. Dán Sứ Veneer là Gì?",
      content: `Dán sứ Veneer là kỹ thuật thẩm mỹ nha khoa hiện đại sử dụng lớp sứ mỏng 
      (0.2–0.6mm) dán lên bề mặt răng. Giải pháp này giúp bảo tồn răng thật tối đa, 
      mang lại tính thẩm mỹ tự nhiên hơn so với bọc răng sứ thông thường.`
    },
    {
      textFirst: false,
      img: img2,
      title: "2. Trường Hợp Nên Dán Sứ Veneer",
      content: `Phù hợp cho răng nhiễm màu, sứt mẻ nhẹ, hình dáng không đều, răng thưa 
      kẽ nhẹ hoặc khách hàng muốn cải thiện thẩm mỹ nhưng vẫn muốn giữ tối đa răng thật.`
    },
    {
      textFirst: true,
      img: img3,
      title: "3. Veneer Cao Cấp Tại Emis Dental",
      content: `Emis Dental sử dụng các dòng Veneer chất lượng cao như Emax (Đức), 
      nổi tiếng về độ bền, độ trong suốt và khả năng mô phỏng quang học như răng tự nhiên.`
    },
    {
      textFirst: false,
      img: img4,
      title: "4. Vì Sao Veneer Được Ưa Chuộng?",
      content: `Bảo tồn răng tối đa, thẩm mỹ tự nhiên, độ bền cao và thời gian thực hiện nhanh 
      chóng chỉ trong 2–3 buổi.`
    },
    {
      textFirst: true,
      img: img5,
      title: "5. Thiết Kế Nụ Cười Cá Nhân Hóa",
      content: `Quy trình Smile Design giúp phân tích khuôn mặt, mô phỏng nụ cười và lựa chọn 
      dáng răng phù hợp nhất với từng khách hàng.`
    },
    {
      textFirst: false,
      img: img6,
      title: "6. Quy Trình Dán Sứ Veneer",
      content: `Thăm khám – Chụp phim – Smile Design – Mô phỏng – Mài răng tối thiểu – 
      Chế tác Veneer – Thử và gắn cố định.`
    },
    {
      textFirst: true,
      img: img7,
      title: "7. Bảng Giá Veneer",
      content: `Emax Veneer: Bảo hành 10 năm.  
      Các dòng khác tùy theo vật liệu và cấu trúc răng của khách hàng.`
    },
    {
      textFirst: false,
      img: img8,
      title: "8. Vì Sao Chọn Emis Dental?",
      content: `Chuyên môn sâu về bảo tồn răng – Trang thiết bị hiện đại – 
      Vật liệu sứ chính hãng – Đảm bảo độ bền & tự nhiên tối ưu.`
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white text-black pt-20">
      {sections.map((section, index) => (
        <section
          key={index}
          className={`max-w-6xl w-full px-4 py-12 flex flex-col md:flex-row items-start gap-8 
          ${section.textFirst ? "" : "md:flex-row-reverse"}`}
        >
          {/* Text */}
          <div className="flex-1 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {section.content}
            </p>
          </div>

          {/* Image */}
          <img
            src={section.img}
            alt={section.title}
            className="flex-1 w-full rounded-xl object-contain shadow-lg"
            style={{ maxHeight: "50vh" }}
          />
        </section>
      ))}
    </div>
  );
}
