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
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="w-full bg-white text-black mt-20">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-b from-white to-[#F7F4EC] py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2a3439]"
          style={{ fontFamily: "'Cormorant', serif" }}
        >
          Dán Sứ Veneer – Nụ Cười Tự Nhiên, Sang Trọng & Hoàn Hảo
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-90">
          Công nghệ thẩm mỹ nha khoa hiện đại giúp bảo tồn răng thật tối đa, mang lại vẻ đẹp tự nhiên tuyệt đối.
          Tại Emis Dental, chúng tôi sử dụng dòng sứ cao cấp Emax – nổi tiếng về độ bền, độ mỏng và độ trong suốt vượt trội.
        </p>

        <div className="mt-8">
          <a 
            href="/contact"
            className="px-8 py-3 bg-[#2a3439] text-[#C5AF73] rounded-xl shadow-md hover:bg-[#1f2937] transition"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Đặt Lịch Tư Vấn Ngay
          </a>
        </div>
      </section>

      {/* IMAGE GALLERY - INFORMATIVE AD STYLE */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2a3439]"
          style={{ fontFamily: "'Cormorant', serif" }}
        >
          Quy Trình – Chất Liệu – Ưu Điểm – Kết Quả
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {images.map((img, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200"
            >
              <img
                src={img}
                alt={`Veneer Step ${index}`}
                className="w-full object-contain"
                style={{ maxHeight: "45vh" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* INFORMATION SECTIONS */}
      <section className="w-full max-w-5xl mx-auto px-6 py-12 space-y-12">

        {/* What is Veneer */}
        <div className="bg-white shadow-md rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#2a3439]"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Dán Sứ Veneer Là Gì?
          </h3>
          <p className="leading-relaxed text-lg opacity-90">
            Dán sứ Veneer sử dụng lớp sứ siêu mỏng 0.2–0.6mm để dán lên bề mặt răng.
            Giúp bảo tồn răng thật tối đa, không cần mài nhiều như bọc sứ truyền thống.
            Màu sắc và độ trong suốt tự nhiên như răng thật.
          </p>
        </div>

        {/* Who Should Get Veneers */}
        <div className="bg-white shadow-md rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#2a3439]"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Ai Phù Hợp Với Veneer?
          </h3>
          <p className="leading-relaxed text-lg opacity-90">
            Răng nhiễm màu nhẹ, răng thưa, răng sứt mẻ, răng không đều,
            hoặc khách hàng mong muốn thẩm mỹ cao nhưng vẫn giữ tối đa răng thật.
          </p>
        </div>

        {/* Why People Love Veneers */}
        <div className="bg-white shadow-md rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#2a3439]"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Vì Sao Nhiều Khách Hàng Chọn Veneer?
          </h3>
          <p className="leading-relaxed text-lg opacity-90">
            Tính thẩm mỹ cao, độ bền lớn, màu sắc tự nhiên, thời gian thực hiện nhanh chóng,
            đặc biệt là bảo tồn mô răng thật tối đa.
          </p>
        </div>

        {/* Smile Design */}
        <div className="bg-white shadow-md rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#2a3439]"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Cá Nhân Hóa Nụ Cười – Smile Design
          </h3>
          <p className="leading-relaxed text-lg opacity-90">
            Ứng dụng công nghệ mô phỏng để cho bạn xem trước nụ cười mới.
            Phân tích khuôn mặt, dáng môi, dáng răng để tạo nụ cười hài hòa.
          </p>
        </div>

        {/* Process */}
        <div className="bg-white shadow-md rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#2a3439]"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Quy Trình Thực Hiện
          </h3>
          <p className="leading-relaxed text-lg opacity-90">
            Thăm khám – Chụp phim – Smile Design – Mài răng tối thiểu – Chế tác – Thử – Gắn Veneer.
          </p>
        </div>

        {/* Materials */}
        <div className="bg-white shadow-md rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-[#2a3439]"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Vật Liệu Sử Dụng – Emax Veneer
          </h3>
          <p className="leading-relaxed text-lg opacity-90">
            Sứ Emax Lithium Disilicate – độ bền cao, độ mỏng tuyệt vời, khả năng tương thích sinh học tốt,
            độ tự nhiên đạt chuẩn quốc tế.
          </p>
        </div>

      </section>

      {/* FINAL CTA */}
      <section className="text-center py-16 bg-[#F7F4EC]">
        <h3 
          className="text-3xl font-bold mb-6 text-[#2a3439]"
          style={{ fontFamily: "'Cormorant', serif" }}
        >
          Sẵn Sàng Cho Nụ Cười Mới?
        </h3>
        <a 
          href="/contact"
          className="px-10 py-3 bg-[#2a3439] text-[#C5AF73] rounded-xl shadow-md hover:bg-[#1f2937] transition text-lg"
          style={{ fontFamily: "'Cormorant', serif" }}
        >
          Đặt Lịch Tư Vấn
        </a>
      </section>

    </div>
  );
}
