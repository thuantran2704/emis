import React from "react";
import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import CustomerReactionsBanner from "../components/CustomerReactionBanner";
import MachineBanner from "../components/MachineBanner";
import ImplantCards from "../components/implants_banner";
import MapSection from "../components/MapSection";

import typesVie from "../pics/WEB/typesTeeth/vie.png";
import typesEng from "../pics/WEB/typesTeeth/eng.png";

import hiossenImg from "../pics/hiossen.jpg";
import osstemImg from "../pics/osstem.jpg";
import straumannImg from "../pics/straumann.jpg";

export default function ImplantInfo({ language }) {
  const isViet = language === "vietnamese";
  const typesImage = isViet ? typesVie : typesEng;

  const title = isViet
    ? "Trồng Răng Implant – Thông Tin Chi Tiết và Quy Trình Thực Hiện"
    : "Dental Implant Treatment – Complete Information and Procedure";

  const brandData = [
    { name: "Osstem (Hàn Quốc) tuổi thọ khoảng 10 năm", img: osstemImg },
    { name: "Hiossen (Hoa Kỳ) tuổi thọ khoảng 13 năm", img: hiossenImg },
    { name: "Straumann (Thụy Sĩ) tuổi thọ khoảng 20 năm", img: straumannImg }
  ];

  const SectionHeading = ({ number, title }) => (
    <h3 className="text-2xl font-semibold text-[#374151] mb-5 flex items-center gap-3">
      <span className="text-[#d4af37] font-bold text-lg">{number}</span>
      <span>{title}</span>
    </h3>
  );

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7] pt-20">
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={
            isViet
              ? "Bài viết cung cấp thông tin đầy đủ về trồng răng Implant gồm khái niệm, chỉ định, quy trình, chi phí và lưu ý trước và sau phẫu thuật."
              : "A complete article about dental implants including definition, indications, procedure, cost and essential pre and post care."
          }
        />
      </Helmet>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#4b4b8f] mb-12 text-center border-b-2 border-[#d4af37] pb-2 inline-block">
          {title}
        </h1>

        {/* ARTICLE CONTENT */}
        <article className="space-y-12 text-gray-700 text-lg leading-relaxed">

          {/* SECTION 1 */}
          <section>
            <SectionHeading
              number="1"
              title={
                isViet ? "Trồng Răng Implant Là Gì" : "What Are Dental Implants"
              }
            />
            <p className="mb-4">
              {isViet
                ? "Trồng răng Implant là phương pháp phục hình răng tiên tiến được sử dụng để thay thế răng đã mất. Một trụ Titanium được đặt vào xương hàm để hoạt động như một chân răng tự nhiên. Khi trụ tích hợp vững chắc trong xương, bác sĩ sẽ gắn khớp nối và mão sứ ở phía trên để tạo thành chiếc răng hoàn chỉnh."
                : "A dental implant is an advanced restorative method used to replace missing teeth. A titanium post is inserted into the jawbone where it functions as a natural tooth root. After the post fully integrates with the bone, the abutment and ceramic crown are attached on top to create a complete replacement tooth."}
            </p>

            <p>
              {isViet
                ? "Trồng răng Implant được xem là phương pháp tối ưu vì mang lại chức năng ăn nhai tự nhiên, độ bền cao và hạn chế tối đa ảnh hưởng đến các răng khỏe mạnh bên cạnh."
                : "Implants are widely considered the most effective long term option because they offer natural chewing function, high durability and do not negatively affect the healthy adjacent teeth."}
            </p>
          </section>

          {/* SECTION 2 */}
          <section>
            <SectionHeading
              number="2"
              title={
                isViet
                  ? "Khi Nào Nên Trồng Răng Implant"
                  : "When Dental Implants Are Recommended"
              }
            />

            <img
              src={typesImage}
              alt="implant types"
              className="w-full max-w-3xl mx-auto my-6 rounded-xl shadow-lg"
            />

            <p className="mb-4">
              {isViet
                ? "Bác sĩ thường chỉ định trồng răng Implant cho các trường hợp mất răng từ đơn lẻ đến toàn hàm. Điều này giúp cải thiện thẩm mỹ, chức năng ăn nhai và ngăn ngừa tiêu xương hàm lâu dài."
                : "Dentists typically recommend implants for cases of single tooth loss, multiple missing teeth or complete arch restoration. This helps improve aesthetics, chewing function and prevent long term bone loss."}
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Mất một hoặc nhiều răng" : "Missing one or multiple teeth"}</li>
              <li>{isViet ? "Tiêu xương hàm do mất răng lâu ngày" : "Bone loss due to long term tooth loss"}</li>
              <li>{isViet ? "Mất toàn bộ răng trên hàm" : "Complete tooth loss in one jaw"}</li>
              <li>{isViet ? "Không muốn dùng răng giả tháo lắp" : "Unable or unwilling to use removable dentures"}</li>
              <li>{isViet ? "Cầu răng cũ gây ảnh hưởng răng thật" : "Old bridges affecting natural teeth"}</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section>
            <SectionHeading
              number="3"
              title={
                isViet
                  ? "Quy Trình Trồng Răng Implant Chuẩn"
                  : "Standard Implant Procedure"
              }
            />

            <p className="mb-4">
              {isViet
                ? "Quy trình trồng implant được thực hiện theo từng bước rõ ràng để đảm bảo sự an toàn và chính xác. Dưới đây là các bước thường gặp trong một ca điều trị implant tiêu chuẩn."
                : "Implant treatment involves several structured steps to ensure safety and precision. Below are the typical stages of a standard implant procedure."}
            </p>

            <ul className="list-decimal ml-6 space-y-2">
              <li>{isViet ? "Khám tổng quát và chụp CT để đánh giá xương hàm" : "Full examination with CT scan to evaluate bone quality"}</li>
              <li>{isViet ? "Lên kế hoạch điều trị cá nhân hóa" : "Creation of a personalized treatment plan"}</li>
              <li>{isViet ? "Cấy trụ Titanium trong môi trường vô trùng" : "Placement of titanium post in sterile conditions"}</li>
              <li>{isViet ? "Giai đoạn lành thương và tích hợp xương" : "Healing phase for osseointegration"}</li>
              <li>{isViet ? "Lắp khớp nối và răng sứ để hoàn thành" : "Attachment of abutment and ceramic crown"}</li>
            </ul>
          </section>

          {/* SECTION 4 */}
          <section>
            <SectionHeading
              number="4"
              title={
                isViet
                  ? "Các Loại Trụ Implant Phổ Biến"
                  : "Common Implant Brands"
              }
            />

            <p className="mb-5">
              {isViet
                ? "Trên thị trường hiện nay có nhiều dòng trụ Implant với độ bền, thiết kế và xuất xứ khác nhau. Dưới đây là các thương hiệu được sử dụng phổ biến trong nha khoa."
                : "There are various implant systems available today, each offering different durability, design and origin. Below are some of the most commonly used brands in dentistry."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandData.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-4 text-center"
                >
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="mx-auto w-32 h-32 object-contain mb-3 rounded-xl"
                  />
                  <p className="text-[#4b4b8f] font-semibold">{brand.name}</p>
                </div>
              ))}
            </div>

            <p className="mt-4">
              {isViet
                ? "Tùy vào tình trạng xương hàm và nhu cầu của mỗi bệnh nhân, bác sĩ sẽ tư vấn loại trụ phù hợp nhất."
                : "Depending on bone condition and individual needs, the dentist will recommend the most suitable implant system."}
            </p>
          </section>

          {/* SECTION 5 */}
          <section>
            <SectionHeading
              number="5"
              title={
                isViet
                  ? "Lưu Ý Trước Khi Trồng Implant"
                  : "Important Notes Before Implant Surgery"
              }
            />

            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Chụp CT để kiểm tra mật độ xương" : "CT scan to assess bone density"}</li>
              <li>{isViet ? "Thông báo bệnh lý và thuốc đang sử dụng" : "Inform dentist about medical history and medications"}</li>
              <li>{isViet ? "Tránh sử dụng rượu bia và thuốc lá" : "Avoid tobacco and alcohol"}</li>
              <li>{isViet ? "Giữ vệ sinh răng miệng sạch sẽ" : "Maintain good oral hygiene"}</li>
              <li>{isViet ? "Chuẩn bị tâm lý thoải mái" : "Maintain a calm and comfortable mindset"}</li>
            </ul>
          </section>

          {/* SECTION 6 */}
          <section>
            <SectionHeading
              number="6"
              title={
                isViet
                  ? "Lưu Ý Sau Khi Trồng Implant"
                  : "Important Notes After Implant Surgery"
              }
            />

            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Chườm lạnh trong 24 giờ đầu" : "Use ice packs during first 24 hours"}</li>
              <li>{isViet ? "Ăn đồ mềm và tránh nhai nơi phẫu thuật" : "Eat soft foods and avoid chewing on implant site"}</li>
              <li>{isViet ? "Không hút thuốc trong hai tuần" : "Avoid smoking for at least two weeks"}</li>
              <li>{isViet ? "Dùng thuốc theo chỉ định" : "Take prescribed medications as directed"}</li>
              <li>{isViet ? "Tái khám đúng hẹn" : "Attend all follow up appointments"}</li>
            </ul>
          </section>

          {/* SECTION 7 */}
          <section>
            <SectionHeading
              number="7"
              title={
                isViet ? "Lý Do Nên Chọn Emis Dental" :
                "Why Choose Emis Dental"
              }
            />

            <ul className="list-disc ml-6 space-y-2">
              <li>{isViet ? "Trụ Implant chính hãng và đa dạng" : "Wide range of certified implant brands"}</li>
              <li>{isViet ? "Trang thiết bị hiện đại, có CT Scan" : "Advanced equipment including CT scan"}</li>
              <li>{isViet ? "Kinh nghiệm phục hình đơn lẻ và toàn hàm" : "Experienced in single and full arch restoration"}</li>
            </ul>
          </section>

        </article>
      </section>
    </main>
  );
}
