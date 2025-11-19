import React from "react";
import { Link } from "react-router-dom";
import adImg from "../pics/ads/ad2.jpg";
import ContactForm from "../components/ContactForm";

export default function PorcelainTeethLandingPage({ language }) {
  const text = {
    english: {
      heroTitle: "NOVEMBER OFFER: AESTHETIC PORCELAIN TEETH",
      heroPrice: "FROM ONLY 2,000,000 VND",
      heroDesc: "Create a confident smile with genuine porcelain teeth, optimized aesthetics at Emis Dental. Welcome November with our special offer.",
      heroCTA: "BOOK CONSULTATION NOW",
      benefitsTitle: "WHY CHOOSE PORCELAIN TEETH",
      benefits: [
        {
          title: "Absolute Aesthetics",
          desc: "Natural translucent color and light reflection identical to real teeth. No gum discoloration over time like metal-ceramic teeth.",
        },
        {
          title: "Safe & Biocompatible",
          desc: "Porcelain material has high biological compatibility, completely safe for oral environment, causing no gum irritation.",
        },
        {
          title: "Outstanding Durability",
          desc: "High hardness porcelain, excellent chewing function, lasting 15-20 years or even longer with proper care.",
        },
        {
          title: "Metal-Free Structure",
          desc: "Made entirely from monolithic ceramic, no metal content, ensuring natural light transmission and gum health.",
        },
      ],
      specialOfferTitle: "SPECIAL OFFER",
      originalPrice: "Original price: 4,500,000 VND",
      offerCTA: "BOOK NOW",
      specialList: [
        "Free 1:1 consultation with aesthetic dentistry specialists",
        "Free on-site X-ray for comprehensive oral health check",
        "Free scaling and polishing service when making 6+ porcelain teeth",
      ],
    },
    vietnamese: {
      heroTitle: "ƯU ĐÃI THÁNG 11: RĂNG TOÀN SỨ THẨM MỸ",
      heroPrice: "CHỈ TỪ 2.000.000Đ",
      heroDesc: "Kiến tạo nụ cười tự tin với răng sứ chính hãng, thẩm mỹ tối ưu tại Emis Dental. Chào đón tháng 11 với ưu đãi đặc biệt.",
      heroCTA: "ĐẶT HẸN TƯ VẤN NGAY",
      benefitsTitle: "LÝ DO CHỌN RĂNG TOÀN SỨ",
      benefits: [
        {
          title: "Thẩm Mỹ Tuyệt Đối",
          desc: "Màu sắc trong, mờ và độ phản quang y hệt răng thật. Không gây đen viền nướu sau thời gian dài sử dụng.",
        },
        {
          title: "An Toàn & Lành Tính",
          desc: "Vật liệu sứ có tính tương hợp sinh học cao, hoàn toàn an toàn với khoang miệng, không gây kích ứng nướu.",
        },
        {
          title: "Độ Bền Vượt Trội",
          desc: "Độ cứng cao, chịu lực ăn nhai tốt, tuổi thọ lên đến 15-20 năm hoặc lâu hơn nếu chăm sóc tốt.",
        },
        {
          title: "Cấu Trúc Không Kim Loại",
          desc: "Chế tác hoàn toàn từ sứ nguyên khối, không chứa kim loại, đảm bảo truyền sáng tự nhiên và sức khỏe nướu.",
        },
      ],
      specialOfferTitle: "ƯU ĐÃI ĐẶC BIỆT",
      originalPrice: "Giá gốc: 4.500.000 VNĐ",
      offerCTA: "ĐẶT HẸN NGAY",
      specialList: [
        "Miễn phí thăm khám và tư vấn 1:1 cùng bác sĩ chuyên khoa thẩm mỹ",
        "Miễn phí chụp phim X-quang tại chỗ kiểm tra sức khỏe răng miệng",
        "Tặng ngay dịch vụ cạo vôi răng và đánh bóng khi làm từ 6 răng sứ",
      ],
    },
  };

  // Default to English if language is not Vietnamese
  const t = language === "vietnamese" ? text.vietnamese : text.english;

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
            alt="Porcelain Teeth Promotion"
            style={{
              width: "220px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        <div
          style={{
            flex: "2 1 450px",
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2rem)",
              color: "#f7941e",
              marginBottom: "20px",
              fontWeight: "800",
              lineHeight: "1.2",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              fontFamily: "'Cormorant', serif",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {t.heroTitle}
          </h1>
          <span
            className="neon-flicker"
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "2.4rem",
              fontWeight: "900",
              display: "block",
              marginBottom: "15px",
            }}
          >
            {t.heroPrice}
          </span>
          <p style={{ fontSize: "1.15rem", marginBottom: "25px", color: "#4b4b4b" }}>
            {t.heroDesc}
          </p>
          <Link to="/contact" className="cta-button">
            {t.heroCTA}
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
          {t.benefitsTitle}
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
          {t.benefits.map((benefit) => (
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
          {t.specialOfferTitle}
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>{t.originalPrice}</p>
        <p
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            marginBottom: "25px",
            color: "#f7941e",
            fontFamily: "'Roboto Mono', monospace",
          }}
        >
          <span className="neon-flicker">{t.heroPrice}</span>
        </p>
        <ul
          style={{
            textAlign: "left",
            display: "inline-block",
            marginBottom: "35px",
            lineHeight: "1.7",
          }}
        >
          {t.specialList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <Link to="/contact" className="cta-button">
          {t.offerCTA}
        </Link>
      </section>

      {/* Contact Form */}
      <ContactForm language={language} />

      {/* Neon Flicker & CTA CSS */}
      <style>
        {`
          .neon-flicker {
            color: #f7941e;
            text-shadow:
              0 0 5px #fff56d,
              0 0 10px #fff56d,
              0 0 15px #fff56d,
              0 0 20px #fff56d;
            animation: glowPulse 2.5s infinite alternate;
            display: inline-block;
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
            display: block;   /* center the button */
            margin: 0 auto;   /* center the button */
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