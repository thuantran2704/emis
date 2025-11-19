import React from "react";
import adImg from "../pics/ads/ad1.jpg";
import ContactForm from "../components/ContactForm";

export default function ImplantLandingPage({ language = "english" }) {
  return (
    <div style={{ fontFamily: "'Arial', sans-serif", color: "#333" }}>
      {/* Navbar placeholder */}
      <div style={{ height: "70px" }}></div>

      {/* Hero / Advertisement Banner */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fce8d4",
          padding: "40px 30px",
          borderRadius: "20px",
          maxWidth: "1100px",
          margin: "20px auto",
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        }}
      >
        {/* Image */}
        <div style={{ flex: "1 1 250px", textAlign: "center", marginBottom: "20px" }}>
          <img
            src={adImg}
            alt="Promotional Ad"
            style={{
              width: "220px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Text & CTA */}
        <div style={{ flex: "2 1 450px", padding: "0 20px" }}>
          <h1
            style={{
              fontSize: "2.2rem",
              color: "#b85c1e",
              marginBottom: "15px",
              fontWeight: "800",
              lineHeight: "1.2",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            TRỒNG RĂNG IMPLANT HIOSSEN (HÀN QUỐC) <br /> CHỈ 8.900.000Đ
          </h1>
          <p style={{ fontSize: "1.15rem", marginBottom: "25px", color: "#4b4b4b" }}>
            Phục hồi răng mất an toàn – thẩm mỹ tự nhiên. Nhận tư vấn miễn phí và ưu đãi đặc biệt từ Emis Dental.
          </p>
          <button
            style={{
              backgroundColor: "#f7941e",
              color: "#fff",
              padding: "14px 30px",
              fontSize: "1.1rem",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "700",
              boxShadow: "0 5px 12px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e18312")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f7941e")}
          >
            ĐẶT HẸN TƯ VẤN NGAY
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "#fff" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            color: "#b78d44",
            fontSize: "2rem",
            fontWeight: "700",
          }}
        >
          LÝ DO CHỌN TRỤ IMPLANT HIOSSEN
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
            maxWidth: "1100px",
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
              style={{
                flex: "1 1 260px",
                border: "1px solid #e0d6c1",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <h3 style={{ color: "#b78d44", fontWeight: "700", marginBottom: "10px", fontSize: "1.25rem" }}>
                {benefit.title}
              </h3>
              <p style={{ color: "#555", lineHeight: "1.5" }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer Section */}
      <section
        style={{
          backgroundColor: "#f8f1e7",
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "5px solid #f7941e",
        }}
      >
        <h2 style={{ color: "#b78d44", marginBottom: "30px", fontSize: "2rem", fontWeight: "700" }}>
          ƯU ĐÃI ĐẶC BIỆT
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
          Giá gốc: <s>22.000.000 VNĐ</s>
        </p>
        <p style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#f7941e", marginBottom: "25px" }}>
          Chỉ còn 8.900.000 VNĐ
        </p>
        <ul style={{ textAlign: "left", display: "inline-block", marginBottom: "35px", lineHeight: "1.7" }}>
          <li>Miễn phí thăm khám và tư vấn 1:1 cùng bác sĩ chuyên khoa Implant</li>
          <li>Miễn phí chụp phim CT Cone Beam 3D</li>
          <li>Ưu đãi có số lượng giới hạn, đăng ký sớm để giữ suất</li>
        </ul>
        <button
          style={{
            backgroundColor: "#f7941e",
            color: "#fff",
            padding: "14px 30px",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "700",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e18312")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f7941e")}
        >
          ĐẶT HẸN NGAY
        </button>
      </section>

      {/* Contact Form */}
      <ContactForm language={language} />

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 20px",
          backgroundColor: "#f8f1e7",
          marginTop: "30px",
        }}
      >
        <p style={{ marginBottom: "5px", fontWeight: "600" }}>CÔNG TY TNHH NHA KHOA QUỐC TẾ EMIS</p>
        <p style={{ marginBottom: "5px" }}>Hotline: 0919 100 021 – 0768 117 068</p>
        <p style={{ marginBottom: "5px" }}>Email: emisdentalclinic@gmail.com</p>
        <p>Địa chỉ: 62B Phạm Ngọc Thạch, Phường Xuân Hòa, TP.HCM</p>
      </footer>
    </div>
  );
}
