import React from 'react';
import typesVie from '../pics/WEB/typesTeeth/vie.png';
import typesEng from '../pics/WEB/typesTeeth/eng.png';

export default function LandingPage1({ language = "vietnamese" }) {
  const sections = [
    {
      title: "1. Dán Sứ Veneer là Gì?",
      content: `Dán sứ Veneer là kỹ thuật thẩm mỹ nha khoa hiện đại sử dụng lớp sứ mỏng 
(0.2–0.6mm) dán lên bề mặt răng. Giải pháp này giúp bảo tồn răng thật tối đa, 
mang lại tính thẩm mỹ tự nhiên hơn so với bọc răng sứ thông thường.`
    },
    {
      title: "2. Trường Hợp Nên Dán Sứ Veneer",
      content: `Phù hợp cho răng nhiễm màu, sứt mẻ nhẹ, hình dáng không đều, răng thưa 
kẽ nhẹ hoặc khách hàng muốn cải thiện thẩm mỹ nhưng vẫn muốn giữ tối đa răng thật.`
    },
    {
      title: "3. Veneer Cao Cấp Tại Emis Dental",
      content: `Emis Dental sử dụng các dòng Veneer chất lượng cao như Emax (Đức), 
nổi tiếng về độ bền, độ trong suốt và khả năng mô phỏng quang học như răng tự nhiên.`,
      image: language === "vietnamese" ? typesVie : typesEng
    },
    {
      title: "4. Vì Sao Veneer Được Ưa Chuộng?",
      content: `Bảo tồn răng tối đa, thẩm mỹ tự nhiên, độ bền cao và thời gian thực hiện nhanh 
chóng chỉ trong 2–3 buổi.`
    },
    {
      title: "5. Thiết Kế Nụ Cười Cá Nhân Hóa",
      content: `Quy trình Smile Design giúp phân tích khuôn mặt, mô phỏng nụ cười và lựa chọn 
dáng răng phù hợp nhất với từng khách hàng.`
    },
    {
      title: "6. Quy Trình Dán Sứ Veneer",
      content: `Thăm khám – Chụp phim – Smile Design – Mô phỏng – Mài răng tối thiểu – 
Chế tác Veneer – Thử và gắn cố định.`
    },
    {
      title: "7. Bảng Giá Veneer",
      content: `Emax Veneer: Bảo hành 10 năm.  
Các dòng khác tùy theo vật liệu và cấu trúc răng của khách hàng.`
    },
    {
      title: "8. Vì Sao Chọn Emis Dental?",
      content: `Chuyên môn sâu về bảo tồn răng – Trang thiết bị hiện đại – 
Vật liệu sứ chính hãng – Đảm bảo độ bền & tự nhiên tối ưu.`
    }
  ];

  return (
    <div className="w-full flex justify-center pt-20 px-4">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12">

        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Dán Sứ Veneer Tại Emis Dental
        </h1>

        <div className="space-y-16 text-gray-800 text-[17px] leading-relaxed">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{sec.title}</h2>
              <p className="whitespace-pre-line mb-4">{sec.content}</p>

              {/* Include image for third section */}
              {i === 2 && sec.image && (
                <img
                  src={sec.image}
                  alt="Veneer Types"
                  className="w-full h-auto rounded-lg shadow-md mt-4"
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

