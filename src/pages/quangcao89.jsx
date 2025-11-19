import React from "react";
import adImg from "../pics/ads/ad1.jpg";
import ContactForm from "../components/ContactForm";

export default function ImplantLandingPage({ language = "english" }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Navbar placeholder */}
      <div style={{ height: "70px" }}></div>

      {/* Ad Section */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={adImg}
          alt="Promotional Ad"
          style={{
            maxWidth: "100%",
            width: "300px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
      </section>

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#f8f1e7",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#b78d44" }}>
          TRỒNG RĂNG IMPLANT HIOSSEN (HÀN QUỐC) <br /> CHỈ 8.900.000Đ
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "20px", maxWidth: "600px", margin: "0 auto" }}>
          Phục hồi răng mất an toàn - thẩm mỹ tự nhiên. Nhận tư vấn miễn phí và ưu đãi đặc biệt từ Emis Dental.
        </p>
        <button
          style={{
            backgroundColor: "#f7941e",
            color: "#fff",
            padding: "12px 25px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ĐẶT HẸN TƯ VẤN NGAY
        </button>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "50px 20px", backgroundColor: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#b78d44" }}>
          LÝ DO CHỌN TRỤ IMPLANT HIOSSEN
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Tích Hợp Xương Vượt Trội",
              desc: "Trụ làm từ 100% Titanium tinh khiết với công nghệ SA tiên tiến, giúp tích hợp xương nhanh và ổn định.",
            },
            {
              title: "Thiết Kế Tối Ưu",
              desc: "Ren xoắn tăng độ ổn định ban đầu ngay cả trong xương xốp, đảm bảo trụ vững chắc sau cấy.",
            },
            {
              title: "Tuổi Thọ Cao",
              desc: "Trụ Implant Hiossen tồn tại bền lâu trọn đời nếu cấy đúng kỹ thuật và chăm sóc tốt.",
            },
            {
              title: "An Toàn & Thẩm Mỹ",
              desc: "Phục hồi chức năng ăn nhai và mang lại nụ cười tự nhiên, thẩm mỹ.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              style={{ flex: "1 1 300px", border: "1px solid #e0d6c1", padding: "20px", borderRadius: "10px" }}
            >
              <h3 style={{ color: "#b78d44" }}>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer Section */}
      <section style={{ backgroundColor: "#f8f1e7", padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ color: "#b78d44", marginBottom: "30px" }}>CHI TIẾT GÓI ƯU ĐÃI ĐẶC BIỆT</h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
          Giá gốc: <s>22.000.000 VNĐ</s>
        </p>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#f7941e", marginBottom: "20px" }}>
          Giá ưu đãi: Chỉ còn 8.900.000 VNĐ
        </p>
        <ul style={{ textAlign: "left", display: "inline-block", marginBottom: "30px", lineHeight: "1.6" }}>
          <li>Miễn phí thăm khám và tư vấn 1:1 cùng bác sĩ chuyên khoa Implant</li>
          <li>Miễn phí chụp phim CT Cone Beam 3D</li>
          <li>Ưu đãi có số lượng giới hạn, đăng ký sớm để giữ suất</li>
        </ul>
        <button
          style={{
            backgroundColor: "#f7941e",
            color: "#fff",
            padding: "12px 25px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ĐẶT HẸN TƯ VẤN NGAY
        </button>
      </section>

      {/* Contact Form Section */}
      <ContactForm language={language} />

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "30px 20px", backgroundColor: "#f8f1e7" }}>
        <p>CÔNG TY TNHH NHA KHOA QUỐC TẾ EMIS</p>
        <p>Hotline: 0919 100 021 – 0768 117 068</p>
        <p>Email: emisdentalclinic@gmail.com</p>
        <p>Địa chỉ: 62B Phạm Ngọc Thạch, Phường Xuân Hòa, TP.HCM</p>
      </footer>
    </div>
  );
}
