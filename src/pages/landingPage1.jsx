import img1 from '../pics/WEB/veneer/1.png';
import img2 from '../pics/WEB/veneer/2.png';
import img3 from '../pics/WEB/veneer/3.png';
import img4 from '../pics/WEB/veneer/4.png';
import img5 from '../pics/WEB/veneer/5.png';
import img6 from '../pics/WEB/veneer/6.png';
import img7 from '../pics/WEB/veneer/7.png';
import img8 from '../pics/WEB/veneer/8.png';

export default function LandingPage1() {
  return (
    <div className="w-full flex flex-col items-center bg-white text-black">

      {/* Section 1 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">1. Dán Sứ Veneer là Gì?</h2>
          <p>
            Dán sứ Veneer là kỹ thuật thẩm mỹ nha khoa hiện đại, trong đó bác sĩ sẽ sử dụng một lớp sứ mỏng, được chế tác cá nhân hóa, có độ dày chỉ từ 0.2 – 0.6mm (tương đương với kính áp tròng), để dán cố định lên bề mặt ngoài của răng. Khác với bọc răng sứ (cần mài mô răng thật nhiều hơn), dán sứ Veneer giúp bảo tồn răng thật tối đa, chỉ mài một lượng rất nhỏ ở bề mặt hoặc thậm chí không cần mài (tùy tình trạng răng), mang lại tính thẩm mỹ cao và sự tự nhiên tuyệt đối.
          </p>
        </div>
        <img 
          src={img1} 
          alt="Dán Sứ Veneer" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
      </section>

      {/* Section 2 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img 
          src={img2} 
          alt="Trường hợp nên dán sứ Veneer" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">2. Trường Hợp Nào Nên Dán Sứ Veneer?</h2>
          <p>Dán sứ Veneer là giải pháp lý tưởng cho các trường hợp răng có khuyết điểm nhẹ, không quá nghiêm trọng về khớp cắn:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Răng bị nhiễm màu: Răng bị ố vàng, xỉn màu nhẹ không thể tẩy trắng được (nhiễm màu kháng sinh nhẹ).</li>
            <li>Răng sứt mẻ nhẹ: Các trường hợp răng bị mẻ nhỏ ở cạnh cắn.</li>
            <li>Răng có hình dáng không đẹp: Răng quá ngắn, quá nhỏ hoặc hình dáng không đều.</li>
            <li>Răng thưa kẽ nhẹ: Các khoảng trống nhỏ giữa các răng có thể được che phủ.</li>
            <li>Khách hàng ưu tiên bảo tồn: Những người mong muốn cải thiện nụ cười nhưng muốn can thiệp tối thiểu lên răng thật.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">3. Các Loại Veneer Cao Cấp Tại Emis Dental</h2>
          <p>
            Tại Emis Dental, chúng tôi lựa chọn các dòng sứ Veneer chất lượng hàng đầu, cam kết độ bền, độ mỏng và tính thẩm mỹ:
          </p>
          <p className="mt-2">
            Dán Sứ Emax Veneer (Xuất xứ Đức): Đây là dòng sứ cao cấp được chế tác từ Lithium Disilicate, nổi tiếng với độ mỏng, độ trong suốt và khả năng mô phỏng quang học hoàn hảo của răng tự nhiên. Sứ Emax có độ bền cao, chống mài mòn tốt.
          </p>
        </div>
        <img 
          src={img3} 
          alt="Các loại Veneer cao cấp" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
      </section>

      {/* Section 4 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img 
          src={img4} 
          alt="Ưu điểm dán sứ Veneer" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">4. Vì Sao Khách Hàng Ưu Chuộng Dán Sứ Veneer?</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Bảo Tồn Răng Thật Tối Đa</li>
            <li>Thẩm Mỹ Hoàn Hảo</li>
            <li>Độ Bền Cao</li>
            <li>Thời Gian Thực Hiện Nhanh Chóng</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">5. Cá Nhân Hóa Nụ Cười Khách Hàng (Smile Design)</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Phân Tích Khuôn Mặt</li>
            <li>Công Nghệ Mô Phỏng (Mock-up)</li>
            <li>Lựa Chọn Dáng Răng</li>
          </ul>
        </div>
        <img 
          src={img5} 
          alt="Smile Design" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
      </section>

      {/* Section 6 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img 
          src={img6} 
          alt="Quy trình dán sứ Veneer" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">6. Quy Trình Dán Sứ Veneer Tiêu Chuẩn</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Thăm khám, Chụp phim & Thiết kế Nụ cười (Smile Design)</li>
            <li>Mô phỏng & Mài răng (tối thiểu)</li>
            <li>Chế tác Veneer</li>
            <li>Thử và Gắn Veneer</li>
          </ul>
        </div>
      </section>

      {/* Section 7 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">7. Bảng Giá Dán Sứ Veneer và Vật Liệu Cốt Lõi</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Dán Sứ Emax Veneer: Bảo hành 10 NĂM</li>
            <li>Phân loại khác: Tùy theo yêu cầu và cấu trúc răng</li>
          </ul>
        </div>
        <img 
          src={img7} 
          alt="Bảng giá dán sứ Veneer" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
      </section>

      {/* Section 8 */}
      <section className="max-w-6xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img 
          src={img8} 
          alt="Chọn dán sứ Veneer tại Emis Dental" 
          className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain" 
        />
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">8. Vì Sao Bạn Nên Chọn Dán Sứ Veneer tại Emis Dental?</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Chuyên Môn Sâu về Bảo Tồn</li>
            <li>Trang Thiết Bị Hiện Đại</li>
            <li>Vật Liệu Sứ Emax Chính Hãng</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
