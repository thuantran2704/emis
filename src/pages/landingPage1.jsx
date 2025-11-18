import React from 'react';
import img1 from '/pics/WEB/veneer/1.png';
import img2 from '/pics/WEB/veneer/2.png';
import img3 from '/pics/WEB/veneer/3.png';
import img4 from '/pics/WEB/veneer/4.png';
import img5 from '/pics/WEB/veneer/5.png';
import img6 from '/pics/WEB/veneer/6.png';
import img7 from '/pics/WEB/veneer/7.png';
import img8 from '/pics/WEB/veneer/8.png';

export default function LandingPage1() {
  return (
    <div className="w-full flex flex-col items-center bg-white text-black">

      {/* Section 1 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">1. Dán Sứ Veneer là Gì?</h2>
          <p>
            Dán sứ Veneer là kỹ thuật thẩm mỹ nha khoa hiện đại, trong đó bác sĩ sẽ sử dụng
            một lớp sứ mỏng, được chế tác cá nhân hóa, có độ dày chỉ từ 0.2 – 0.6mm, để dán
            cố định lên bề mặt ngoài của răng. Khác với bọc răng sứ, dán sứ Veneer giúp
            bảo tồn răng thật tối đa, mang lại tính thẩm mỹ cao và sự tự nhiên tuyệt đối.
          </p>
        </div>
        <img 
          src={img1} 
          alt="Veneer image" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
      </section>

      {/* Section 2 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img 
          src={img2} 
          alt="Veneer image" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">2. Trường Hợp Nào Nên Dán Sứ Veneer?</h2>
          <p>
            Dán sứ Veneer là giải pháp lý tưởng cho các trường hợp răng có khuyết điểm nhẹ:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Răng bị nhiễm màu, không thể tẩy trắng.</li>
            <li>Răng sứt mẻ nhẹ.</li>
            <li>Răng hình dáng không đều, quá ngắn hoặc quá nhỏ.</li>
            <li>Răng thưa kẽ nhẹ.</li>
            <li>Khách hàng ưu tiên bảo tồn răng thật.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">3. Các Loại Veneer Cao Cấp Tại Emis Dental</h2>
          <p>
            Tại Emis Dental, chúng tôi lựa chọn các dòng sứ Veneer chất lượng hàng đầu:
          </p>
          <p className="mt-2">
            Dán Sứ Emax Veneer (Xuất xứ Đức): Chế tác từ Lithium Disilicate, độ mỏng, trong
            suốt, mô phỏng răng tự nhiên, độ bền cao và chống mài mòn tốt.
          </p>
        </div>
        <img 
          src={img3} 
          alt="Veneer image" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
      </section>

      {/* Section 4 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img 
          src={img4} 
          alt="Veneer image" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">4. Vì Sao Khách Hàng Ưu Chuộng Dán Sứ Veneer?</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Bảo Tồn Răng Thật Tối Đa.</li>
            <li>Thẩm Mỹ Hoàn Hảo.</li>
            <li>Độ Bền Cao.</li>
            <li>Thời Gian Thực Hiện Nhanh Chóng.</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">5. Cá Nhân Hóa Nụ Cười Khách Hàng (Smile Design)</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Phân Tích Khuôn Mặt.</li>
            <li>Công Nghệ Mô Phỏng (Mock-up).</li>
            <li>Lựa Chọn Dáng Răng.</li>
          </ul>
        </div>
        <img 
          src={img5} 
          alt="Veneer image" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
      </section>

      {/* Section 6 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img 
          src={img6} 
          alt="Veneer image" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">6. Quy Trình Dán Sứ Veneer Tiêu Chuẩn</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Thăm khám, Chụp phim & Smile Design.</li>
            <li>Mô phỏng & Mài răng (tối thiểu).</li>
            <li>Chế tác Veneer.</li>
            <li>Thử và Gắn Veneer.</li>
          </ul>
        </div>
      </section>

      {/* Section 7 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">7. Bảng Giá Dán Sứ Veneer và Vật Liệu Cốt Lõi</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Dán Sứ Emax Veneer: Bảo hành 10 năm.</li>
            <li>Phân loại khác: Tư vấn theo cấu trúc răng và yêu cầu.</li>
          </ul>
        </div>
        <img 
          src={img7} 
          alt="Veneer image" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
      </section>

      {/* Section 8 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img 
          src={img8} 
          alt="Veneer image" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">8. Vì Sao Bạn Nên Chọn Dán Sứ Veneer tại Emis Dental?</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Chuyên Môn Sâu về Bảo Tồn.</li>
            <li>Trang Thiết Bị Hiện Đại.</li>
            <li>Vật Liệu Sứ Emax Chính Hãng.</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
