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
    { textFirst: true, img: img1, title: "1. Dán Sứ Veneer là Gì?", content: `Dán sứ Veneer là kỹ thuật thẩm mỹ nha khoa hiện đại, trong đó bác sĩ sẽ sử dụng một lớp sứ mỏng, được chế tác cá nhân hóa, có độ dày chỉ từ 0.2 – 0.6mm (tương đương với kính áp tròng), để dán cố định lên bề mặt ngoài của răng. Khác với bọc răng sứ (cần mài mô răng thật nhiều hơn), dán sứ Veneer giúp bảo tồn răng thật tối đa, chỉ mài một lượng rất nhỏ ở bề mặt hoặc thậm chí không cần mài (tùy tình trạng răng), mang lại tính thẩm mỹ cao và sự tự nhiên tuyệt đối.` },
    { textFirst: false, img: img2, title: "2. Trường Hợp Nào Nên Dán Sứ Veneer?", content: `Dán sứ Veneer là giải pháp lý tưởng cho các trường hợp răng có khuyết điểm nhẹ, không quá nghiêm trọng về khớp cắn: Răng bị nhiễm màu, răng sứt mẻ nhẹ, răng có hình dáng không đẹp, răng thưa kẽ nhẹ, hoặc khách hàng ưu tiên bảo tồn răng thật.` },
    { textFirst: true, img: img3, title: "3. Các Loại Veneer Cao Cấp Tại Emis Dental", content: `Tại Emis Dental, chúng tôi lựa chọn các dòng sứ Veneer chất lượng hàng đầu, cam kết độ bền, độ mỏng và tính thẩm mỹ: Dán Sứ Emax Veneer (Xuất xứ Đức): Đây là dòng sứ cao cấp được chế tác từ Lithium Disilicate, nổi tiếng với độ mỏng, độ trong suốt và khả năng mô phỏng quang học hoàn hảo của răng tự nhiên. Sứ Emax có độ bền cao, chống mài mòn tốt.` },
    { textFirst: false, img: img4, title: "4. Vì Sao Khách Hàng Ưu Chuộng Dán Sứ Veneer?", content: `Bảo Tồn Răng Thật Tối Đa, Thẩm Mỹ Hoàn Hảo, Độ Bền Cao, Thời Gian Thực Hiện Nhanh Chóng.` },
    { textFirst: true, img: img5, title: "5. Cá Nhân Hóa Nụ Cười Khách Hàng (Smile Design)", content: `Phân Tích Khuôn Mặt, Công Nghệ Mô Phỏng (Mock-up), Lựa Chọn Dáng Răng.` },
    { textFirst: false, img: img6, title: "6. Quy Trình Dán Sứ Veneer Tiêu Chuẩn", content: `Thăm khám, Chụp phim & Thiết kế Nụ cười (Smile Design), Mô phỏng & Mài răng (tối thiểu), Chế tác Veneer, Thử và Gắn Veneer.` },
    { textFirst: true, img: img7, title: "7. Bảng Giá Dán Sứ Veneer và Vật Liệu Cốt Lõi", content: `Dán Sứ Emax Veneer: Bảo hành 10 NĂM. Phân loại khác: Tùy theo yêu cầu và cấu trúc răng.` },
    { textFirst: false, img: img8, title: "8. Vì Sao Bạn Nên Chọn Dán Sứ Veneer tại Emis Dental?", content: `Chuyên Môn Sâu về Bảo Tồn, Trang Thiết Bị Hiện Đại, Vật Liệu Sứ Emax Chính Hãng.` },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white text-black">
      {sections.map((section, index) => (
        <section
          key={index}
          className={`max-w-6xl w-full px-4 py-12 flex flex-col md:flex-row items-start gap-8
            ${section.textFirst ? '' : 'md:flex-row-reverse'}`}
        >
          <div className="flex-1 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p>{section.content}</p>
          </div>
          <img
            src={section.img}
            alt={section.title}
            className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-2xl rounded-xl object-contain shadow-lg"
            style={{ maxHeight: '500px' }}
          />
        </section>
      ))}
    </div>
  );
}
