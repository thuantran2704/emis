import React from "react";
import { Link } from "react-router-dom";
import adImg from "../pics/ads/ad1.jpg";
import ContactForm from "../components/ContactForm";

export default function ImplantLandingPage({ language = "english" }) {
  return (
    <div style={{ fontFamily: "'Noto Sans', sans-serif", color: "#333" }}>
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
          padding: "40px 20px",
          borderRadius: "20px",
          maxWidth: "1100px",
          margin: "20px auto",
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
        }}
      >
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

        <div style={{ flex: "2 1 450px", padding: "0 20px" }}>
          <h1
            style={{
              fontSize: "2.2rem",
              color: "#f7941e",
              marginBottom: "15px",
              fontWeight: "800",
              lineHeight: "1.2",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              fontFamily: "'Cormorant', serif",
            }}
          >
            TRỒNG RĂNG IMPLANT HIOSSEN (HÀN QUỐC) <br />
            <span className="neon-flicker" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              CHỈ 8.900.000Đ
            </span>
          </h1>
          <p style={{ fontSize: "1.15rem", marginBottom: "25px", color: "#4b4b4b" }}>
            Phục hồi răng mất an toàn – thẩm mỹ tự nhiên. Nhận tư vấn miễn phí và ưu đãi đặc biệt từ Emis Dental.
          </p>
          <Link to="/contact" className="cta-button">
            ĐẶT HẸN TƯ VẤN NGAY
          </Link>
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
              <h3
                style={{
                  color: "#b78d44",
                  fontWeight: "700",
                  marginBottom: "10px",
                  fontSize: "1.25rem",
                }}
              >
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
        <h2
          style={{
            color: "#b78d44",
            marginBottom: "30px",
            fontSize: "2rem",
            fontWeight: "700",
          }}
        >
          ƯU ĐÃI ĐẶC BIỆT
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
          Giá gốc: <s style={{ fontFamily: "'Roboto Mono', monospace" }}>22.000.000 VNĐ</s>
        </p>
        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            marginBottom: "25px",
            color: "#f7941e",
            fontFamily: "'Roboto Mono', monospace",
          }}
        >
          <span className="neon-flicker">Chỉ còn 8.900.000 VNĐ</span>
        </p>
        <ul
          style={{
            textAlign: "left",
            display: "inline-block",
            marginBottom: "35px",
            lineHeight: "1.7",
          }}
        >
          <li>Miễn phí thăm khám và tư vấn 1:1 cùng bác sĩ chuyên khoa Implant</li>
          <li>Miễn phí chụp phim CT Cone Beam 3D</li>
          <li>Ưu đãi có số lượng giới hạn, đăng ký sớm để giữ suất</li>
        </ul>
        <Link to="/contact" className="cta-button">
          ĐẶT HẸN NGAY
        </Link>
      </section>

      {/* Contact Form */}
      <ContactForm language={language} />

      {/* Neon Flicker & CTA CSS */}
      <style>
        {`
          .neon-flicker {
            color: #f7941e; /* main text */
            text-shadow:
              0 0 5px #fff56d,
              0 0 10px #fff56d,
              0 0 15px #fff56d,
              0 0 20px #fff56d;
            animation: glowPulse 2.5s infinite alternate;
          }

          @keyframes glowPulse {
            0% {
              text-shadow: 0 0 3px #fff56d, 0 0 6px #fff56d, 0 0 9px #fff56d, 0 0 12px #fff56d;
            }
            50% {
              text-shadow: 0 0 6px #fff56d, 0 0 12px #fff56d, 0 0 18px #fff56d, 0 0 24px #fff56d;
            }
            100% {
              text-shadow: 0 0 3px #fff56d, 0 0 6px #fff56d, 0 0 9px #fff56d, 0 0 12px #fff56d;
            }
          }

          .cta-button {
            background-color: #f7941e;
            color: #fff;
            padding: 14px 30px;
            font-size: 1.1rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 700;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
          }
          .cta-button:hover {
            background-color: #e18312;
          }

          @media (max-width: 768px) {
            section {
              flex-direction: column !important;
              text-align: center !important;
            }
            .cta-button {
              width: 80%;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
}
