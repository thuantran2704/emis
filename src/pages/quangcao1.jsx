import { Link } from "react-router-dom";
import adImg from "../pics/ads/ad1.jpg";
import ContactForm from "../components/ContactForm";
import { useSelector } from 'react-redux';
export default function ImplantLandingPage() {
  const language = useSelector((state) => state.language.language);
  const text = {
    english: {
      heroTitle: "HIOSSEN DENTAL IMPLANT (KOREA)",
      heroPrice: "ONLY 8,900,000 VND",
      heroDesc:
        "Safe tooth restoration – natural aesthetics. Get free consultation and special offers from Emis Dental.",
      heroCTA: "BOOK CONSULTATION NOW",
      benefitsTitle: "WHY CHOOSE HIOSSEN IMPLANT",
      benefits: [
        {
          title: "Excellent Osseointegration",
          desc: "Made of 100% pure Titanium with advanced SA technology, ensuring fast and stable bone integration.",
        },
        {
          title: "Optimized Design",
          desc: "Threaded design increases initial stability even in soft bone, ensuring strong implant support.",
        },
        {
          title: "Long Lifespan",
          desc: "Lasts a lifetime if properly implanted and maintained.",
        },
        {
          title: "Safe & Aesthetic",
          desc: "Restores chewing function and delivers a natural, aesthetic smile.",
        },
      ],
      specialOfferTitle: "SPECIAL OFFER",
      originalPrice: "Original price: 22,000,000 VND",
      offerCTA: "BOOK NOW",
      specialList: [
        "Free 1:1 consultation with Implant specialist",
        "Free CT Cone Beam 3D scan",
        "Limited offer – register early to secure your spot",
      ],
    },
    vietnamese: {
      heroTitle: "TRỒNG RĂNG IMPLANT HIOSSEN (HÀN QUỐC)",
      heroPrice: "CHỈ 8.900.000Đ",
      heroDesc:
        "Phục hồi răng mất an toàn – thẩm mỹ tự nhiên. Nhận tư vấn miễn phí và ưu đãi đặc biệt từ Emis Dental.",
      heroCTA: "ĐẶT HẸN TƯ VẤN NGAY",
      benefitsTitle: "LÝ DO CHỌN TRỤ IMPLANT HIOSSEN",
      benefits: [
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
      ],
      specialOfferTitle: "ƯU ĐÃI ĐẶC BIỆT",
      originalPrice: "Giá gốc: 22.000.000 VNĐ",
      offerCTA: "ĐẶT HẸN NGAY",
      specialList: [
        "Miễn phí thăm khám và tư vấn 1:1 cùng bác sĩ chuyên khoa Implant",
        "Miễn phí chụp phim CT Cone Beam 3D",
        "Ưu đãi có số lượng giới hạn, đăng ký sớm để giữ suất",
      ],
    },
  };

  // Default to English if language is not Vietnamese
  const t = language === "vietnamese" ? text.vietnamese : text.english;

  return (
    <div style={{ fontFamily: "'Inter', 'Noto Sans Vietnamese', 'Be Vietnam Pro', sans-serif", color: "#333", background: "linear-gradient(135deg, #fefaf7 0%, #f8f1e7 100%)" }}>
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
          background: "linear-gradient(135deg, #fce8d4 0%, #f8d4b5 100%)",
          padding: "40px 20px",
          borderRadius: "20px",
          maxWidth: "1100px",
          margin: "20px auto",
          boxShadow: "0 15px 35px rgba(247, 148, 30, 0.25)",
          border: "2px solid #f7941e",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "150px",
          height: "150px",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
        }}></div>
        
        <div style={{ flex: "1 1 250px", textAlign: "center", marginBottom: "20px" }}>
          <img
            src={adImg}
            alt="Promotional Ad"
            style={{
              width: "220px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              border: "3px solid white",
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
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: "#d35400",
              marginBottom: "15px",
              fontWeight: "900",
              lineHeight: "1.2",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              width: "100%",
              letterSpacing: "-0.5px",
            }}
          >
            {t.heroTitle}
          </h1>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "15px",
            flexWrap: "wrap"
          }}>
            <span
              className="neon-flicker"
              style={{
                fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
                fontSize: "2.2rem",
                fontWeight: "900",
                display: "block",
                lineHeight: "1.2",
              }}
            >
              {t.heroPrice}
            </span>
            <span style={{
              backgroundColor: "#e74c3c",
              color: "white",
              padding: "5px 12px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "700",
              boxShadow: "0 3px 8px rgba(231, 76, 60, 0.4)"
            }}>
              {language === "vietnamese" ? "GIẢM SỐC" : "HOT DEAL"}
            </span>
          </div>
          
          <p style={{ 
            fontSize: "1.15rem", 
            marginBottom: "25px", 
            color: "#4b4b4b",
            lineHeight: "1.5",
            fontWeight: "500"
          }}>
            {t.heroDesc}
          </p>
          
          <Link to="/contact" className="cta-button pulse-animation">
            {t.heroCTA}
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "transparent" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            color: "#a67c52",
            fontSize: "2.2rem",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
            lineHeight: "1.3",
            padding: "0 10px",
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
          {t.benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              style={{
                flex: "1 1 260px",
                background: "white",
                padding: "30px 25px",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(183, 141, 68, 0.15)",
                transition: "all 0.4s ease",
                border: "1px solid #f0e6d6",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(183, 141, 68, 0.25)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(183, 141, 68, 0.15)";
              }}
            >
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "4px",
                background: "linear-gradient(90deg, #f7941e, #b78d44)"
              }}></div>
              
              <h3
                style={{
                  color: "#a67c52",
                  fontWeight: "800",
                  marginBottom: "15px",
                  fontSize: "1.3rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
                  lineHeight: "1.4",
                }}
              >
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  backgroundColor: "#f7941e",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  flexShrink: 0,
                  marginTop: "2px",
                }}>
                  {index + 1}
                </span>
                {benefit.title}
              </h3>
              <p style={{ 
                color: "#555", 
                lineHeight: "1.6", 
                fontSize: "1rem",
                fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
              }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8f1e7 0%, #fce8d4 100%)",
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "5px solid #f7941e",
          borderBottom: "5px solid #f7941e",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "5px",
          background: "linear-gradient(90deg, #f7941e, #b78d44, #f7941e)",
        }}></div>
        
        <h2
          style={{
            color: "#d35400",
            marginBottom: "30px",
            fontSize: "2.2rem",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
            lineHeight: "1.3",
            padding: "0 10px",
          }}
        >
          {t.specialOfferTitle}
        </h2>
        
        <div style={{
          display: "inline-block",
          backgroundColor: "white",
          padding: "25px 35px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          border: "2px dashed #f7941e",
          maxWidth: "90%",
        }}>
          <p style={{ 
            fontSize: "1.1rem", 
            marginBottom: "10px", 
            textDecoration: "line-through", 
            color: "#888",
            fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
          }}>{t.originalPrice}</p>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#e74c3c",
              fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
              lineHeight: "1.2",
            }}
          >
            <span className="neon-flicker">{t.heroPrice}</span>
          </p>
          <p style={{
            color: "#e74c3c",
            fontWeight: "700",
            fontSize: "1.1rem",
            marginBottom: "20px",
            fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
          }}>
            {language === "vietnamese" ? "TIẾT KIỆM 60%" : "SAVE 60%"}
          </p>
          
          <ul
            style={{
              textAlign: "left",
              display: "inline-block",
              marginBottom: "25px",
              lineHeight: "1.7",
            }}
          >
            {t.specialList.map((item, idx) => (
              <li key={idx} style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
              }}>
                <span style={{
                  color: "#f7941e",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                  marginTop: "2px",
                }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <Link to="/contact" className="cta-button pulse-animation" style={{
            fontSize: "1.2rem",
            padding: "16px 40px",
            fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
          }}>
            {t.offerCTA}
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm/>

      {/* Neon Flicker & CTA CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700;800;900&display=swap');
          
          .neon-flicker {
            color: #e74c3c;
            text-shadow:
              0 0 5px #ff9f43,
              0 0 10px #ff9f43,
              0 0 15px #ff9f43,
              0 0 20px #ff9f43;
            animation: glowPulse 2s infinite alternate;
            display: inline-block;
            font-family: 'Inter', 'Be Vietnam Pro', sans-serif;
          }

          @keyframes glowPulse {
            0% {
              text-shadow: 0 0 3px #ff9f43, 0 0 6px #ff9f43, 0 0 9px #ff9f43, 0 0 12px #ff9f43;
              transform: scale(1);
            }
            50% {
              text-shadow: 0 0 6px #ff9f43, 0 0 12px #ff9f43, 0 0 18px #ff9f43, 0 0 24px #ff9f43;
              transform: scale(1.02);
            }
            100% {
              text-shadow: 0 0 3px #ff9f43, 0 0 6px #ff9f43, 0 0 9px #ff9f43, 0 0 12px #ff9f43;
              transform: scale(1);
            }
          }

          .cta-button {
            background: linear-gradient(135deg, #f7941e 0%, #e67e22 100%);
            color: #fff;
            padding: 14px 30px;
            font-size: 1.1rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 800;
            box-shadow: 0 8px 20px rgba(247, 148, 30, 0.4);
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-family: 'Inter', 'Be Vietnam Pro', sans-serif;
            line-height: 1.2;
          }
          
          .cta-button:hover {
            background: linear-gradient(135deg, #e67e22 0%, #d35400 100%);
            transform: translateY(-3px);
            box-shadow: 0 12px 25px rgba(247, 148, 30, 0.5);
          }
          
          .pulse-animation {
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0% {
              box-shadow: 0 8px 20px rgba(247, 148, 30, 0.4);
            }
            50% {
              box-shadow: 0 8px 25px rgba(247, 148, 30, 0.7);
            }
            100% {
              box-shadow: 0 8px 20px rgba(247, 148, 30, 0.4);
            }
          }

          /* Ensure proper text rendering for Vietnamese characters */
          * {
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          @media (max-width: 768px) {
            section {
              flex-direction: column !important;
              text-align: center !important;
            }
            .cta-button {
              width: 90%;
              margin: 0 auto;
            }
            
            h1 {
              font-size: 1.6rem !important;
              white-space: normal !important;
              line-height: 1.3 !important;
            }
            
            h2 {
              font-size: 1.8rem !important;
              line-height: 1.3 !important;
            }
          }
        `}
      </style>
    </div>
  );
}