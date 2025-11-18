import Image from "next/image";

export default function VeneerPage() {
  return (
    <div className="w-full flex flex-col gap-10 py-10">
      {/* SECTION 1 — TITLE */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Dán Sứ Veneer Thẩm Mỹ Cao Cấp</h1>
        <p className="text-lg text-gray-600">Giải pháp thẩm mỹ răng tối ưu – bảo tồn răng thật tối đa</p>
      </section>

      {/* SECTION 2 — PARAGRAPH + IMAGE */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold">1. Dán Sứ Veneer là Gì?</h2>
          <p>
            Dán sứ Veneer là kỹ thuật thẩm mỹ hiện đại, sử dụng một lớp sứ mỏng từ 0.2 – 0.6mm để 
            dán lên mặt ngoài của răng. Khác với bọc răng sứ, phương pháp này chỉ mài rất ít hoặc 
            thậm chí không mài răng, giúp bảo tồn mô răng thật tối đa.
          </p>
        </div>
        <Image
          src="/pics/WEB/veneer/1.png"
          alt="Dán sứ veneer là gì"
          width={600}
          height={400}
          className="rounded-2xl shadow"
        />
      </section>

      {/* SECTION 3 — IMAGE + PARAGRAPH */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <Image
          src="/pics/WEB/veneer/2.png"
          alt="Trường hợp nên dán sứ veneer"
          width={600}
          height={400}
          className="rounded-2xl shadow order-2 md:order-1"
        />
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed order-1 md:order-2">
          <h2 className="text-2xl font-semibold">2. Trường Hợp Nào Nên Dán Sứ Veneer?</h2>
          <p>Dán sứ Veneer phù hợp khi bạn có:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Răng nhiễm màu nhẹ, không thể tẩy trắng.</li>
            <li>Răng sứt mẻ nhẹ, mẻ cạnh.</li>
            <li>Răng ngắn, nhỏ, hình dáng không đẹp.</li>
            <li>Răng thưa kẽ nhẹ.</li>
            <li>Người muốn cải thiện nụ cười nhưng không muốn mài răng nhiều.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 — PARAGRAPH ONLY */}
      <section className="max-w-6xl mx-auto space-y-4 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-semibold">3. Các Loại Veneer Cao Cấp tại Emis Dental</h2>
        <p>
          Tại Emis Dental, chúng tôi sử dụng các dòng sứ cao cấp như Emax Veneer (Đức) – vật liệu 
          Lithium Disilicate nổi tiếng với độ mỏng, độ trong và khả năng mô phỏng răng tự nhiên xuất sắc.
        </p>
      </section>

      {/* SECTION 5 — IMAGE */}
      <section className="max-w-6xl mx-auto">
        <Image
          src="/pics/WEB/veneer/3.png"
          alt="Emax Veneer"
          width={1200}
          height={600}
          className="rounded-2xl shadow"
        />
      </section>

      {/* SECTION 6 — PARAGRAPH */}
      <section className="max-w-6xl mx-auto space-y-4 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-semibold">4. Vì Sao Khách Hàng Ưu Chuộng Veneer?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bảo tồn răng thật tối đa, hầu như không mài răng.</li>
          <li>Thẩm mỹ tự nhiên, không đổi màu theo thời gian.</li>
          <li>Bền chắc, ăn nhai thoải mái.</li>
          <li>Thời gian thực hiện nhanh – hiệu quả gần như tức thì.</li>
        </ul>
      </section>

      {/* SECTION 7 — PARAGRAPH + IMAGE */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold">5. Cá Nhân Hóa Nụ Cười – Smile Design</h2>
          <p>
            Emis Dental thiết kế nụ cười dựa trên khuôn mặt, đường cười, màu da và tính cách của từng khách hàng. 
            Công nghệ mock-up cho phép bạn xem trước nụ cười mới trước khi làm.
          </p>
        </div>
        <Image
          src="/pics/WEB/veneer/4.png"
          alt="Smile Design"
          width={600}
          height={400}
          className="rounded-2xl shadow"
        />
      </section>

      {/* SECTION 8 — PARAGRAPH ONLY */}
      <section className="max-w-6xl mx-auto space-y-4 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-semibold">6. Quy Trình Dán Sứ Veneer</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Thăm khám, chụp phim, thiết kế nụ cười.</li>
          <li>Mô phỏng & mài răng tối thiểu (nếu cần).</li>
          <li>Chế tác veneer tại Labo.</li>
          <li>Thử và gắn veneer cố định.</li>
        </ol>
      </section>

      {/* SECTION 9 — PARAGRAPH */}
      <section className="max-w-6xl mx-auto space-y-4 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-semibold">7. Bảng Giá Dán Sứ Veneer</h2>
        <p>
          Dòng sứ Emax Veneer được bảo hành 10 năm – phù hợp cho khách hàng yêu cầu thẩm mỹ cao. 
          Bác sĩ sẽ tư vấn loại Veneer tối ưu nhất dựa trên cấu trúc răng của bạn.
        </p>
      </section>

      {/* SECTION 10 — PARAGRAPH + IMAGE */}
      <section className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <Image
          src="/pics/WEB/veneer/5.png"
          alt="Vì sao chọn Emis Dental"
          width={600}
          height={400}
          className="rounded-2xl shadow order-2 md:order-1"
        />
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed order-1 md:order-2">
          <h2 className="text-2xl font-semibold">8. Vì Sao Chọn Emis Dental?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bác sĩ chuyên sâu, mài răng tối thiểu.</li>
            <li>Trang thiết bị hiện đại: Cone Beam CT, máy Scan răng…</li>
            <li>Sử dụng sứ Emax chính hãng, bảo hành dài hạn.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
