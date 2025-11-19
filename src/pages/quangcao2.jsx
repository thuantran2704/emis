import React from "react";
import { Link } from "react-router-dom";
import adImg from "../pics/ads/ad2.jpg";
import ContactForm from "../components/ContactForm";

export default function PorcelainTeethLandingPage({ language }) {
  const text = {
    english: {
      heroTitle: "NOVEMBER OFFER: AESTHETIC PORCELAIN TEETH",
      heroPrice: "FROM ONLY 2,000,000 VND",
      heroDesc: "Create a confident smile with genuine porcelain teeth, optimized aesthetics at Emis Dental. Welcome November with our special 'Brilliant Smile - Welcome Thousands of Joy' program.",
      heroCTA: "REGISTER FOR OFFER NOW",
      benefitsTitle: "PORCELAIN TEETH - THE LEADING AESTHETIC RESTORATION SOLUTION",
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
      specialOfferTitle: "NOVEMBER SPECIAL OFFER",
      originalPrice: "Original price: 4,500,000 VND",
      offerPrice: "FROM 2,000,000 VND",
      offerCTA: "REGISTER NOW",
      specialList: [
        "FREE 1:1 consultation with aesthetic dentistry specialists",
        "FREE on-site X-ray for comprehensive oral health check",
        "FREE scaling and polishing service when making 6+ porcelain teeth",
      ],
      whyChooseTitle: "WHY CUSTOMERS CHOOSE EMIS DENTAL",
      whyChoose: [
        "Genuine material commitment with official warranty (IDPI)",
        "Expert dentists with 10+ years experience in smile aesthetics",
        "Modern CAD/CAM technology for precise, comfortable treatment",
        "Maximum tooth preservation, minimal discomfort during procedure",
      ],
    },
    vietnamese: {
      heroTitle: "ƯU ĐÃI THÁNG 11: RĂNG TOÀN SỨ THẨM MỸ",
      heroPrice: "CHỈ TỪ 2.000.000Đ",
      heroDesc: "Kiến tạo nụ cười tự tin với răng sứ chính hãng, thẩm mỹ tối ưu tại Emis Dental. Chào đón tháng 11 với chương trình 'Rạng Rỡ Nụ Cười - Đón Ngàn Niềm Vui' đặc biệt.",
      heroCTA: "ĐĂNG KÝ NHẬN ƯU ĐÃI NGAY",
      benefitsTitle: "RĂNG TOÀN SỨ - GIẢI PHÁP PHỤC HÌNH THẨM MỸ HÀNG ĐẦU",
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
      specialOfferTitle: "ƯU ĐÃI ĐẶC BIỆT THÁNG 11",
      originalPrice: "Giá gốc: 4.500.000 VNĐ",
      offerPrice: "CHỈ TỪ 2.000.000 VNĐ",
      offerCTA: "ĐĂNG KÝ NGAY",
      specialList: [
        "MIỄN PHÍ 100%: Thăm khám, tư vấn 1:1 cùng bác sĩ chuyên khoa thẩm mỹ",
        "MIỄN PHÍ 100%: Chụp phim X-quang tại chỗ kiểm tra sức khỏe răng miệng",
        "TẶNG NGAY: Dịch vụ cạo vôi răng và đánh bóng khi làm từ 6 răng sứ",
      ],
      whyChooseTitle: "TẠI SAO KHÁCH HÀNG TIN CHỌN EMIS DENTAL?",
      whyChoose: [
        "Cam kết vật liệu chính hãng với bảo hành chính thức (IDPI)",
        "Bác sĩ chuyên môn cao với 10+ năm kinh nghiệm thẩm mỹ nụ cười",
        "Công nghệ CAD/CAM hiện đại cho điều trị chính xác, thoải mái",
        "Bảo tồn răng tối đa, không gây ê buốt trong quá trình thực hiện",
      ],
    },
  };

  const t = language === "vietnamese" ? text.vietnamese : text.english;

  return (
    <div style={{ fontFamily: "'Noto Sans', sans-serif", color: "#333", backgroundColor: "#fafafa" }}>
      {/* Navbar placeholder */}
      <div style={{ height: "70px" }}></div>

      {/* Hero Section with VIBRANT Gradient Background */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(135deg, #FF006E 0%, #FF7B00 25%, #FFD000 50%, #00D4FF 75%, #5800FF 100%)",
          padding: "50px 20px",
          borderRadius: "0 0 30px 30px",
          maxWidth: "1200px",
          margin: "0 auto 40px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background elements */}
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
        }}></div>
        
        <div style={{ flex: "1 1 300px", textAlign: "center", marginBottom: "30px", position: "relative", zIndex: 2 }}>
          <img
            src={adImg}
            alt="Porcelain Teeth Promotion"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "25px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 0 4px rgba(255,255,255,0.3)",
              border: "3px solid rgba(255,255,255,0.5)",
              transform: "rotate(3deg)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "rotate(0deg) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.5), 0 0 0 4px rgba(255,255,255,0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "rotate(3deg) scale(1)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4), 0 0 0 4px rgba(255,255,255,0.3)";
            }}
          />
        </div>

        <div
          style={{
            flex: "2 1 500px",
            padding: "0 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: "12px 25px",
            borderRadius: "50px",
            marginBottom: "20px",
            fontSize: "0.9rem",
            backdropFilter: "blur(15px)",
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: "700",
            border: "2px solid rgba(255,255,255,0.5)",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}>
            🎉 {language === "vietnamese" ? "ƯU ĐÃI GIỚI HẠN - ĐĂNG KÝ NGAY!" : "LIMITED TIME OFFER - REGISTER NOW!"}
          </div>
          
          {/* FIXED TITLE - No line breaks! */}
          <h1
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.3rem)",
              marginBottom: "15px",
              fontWeight: "900",
              lineHeight: "1.1",
              textShadow: "3px 3px 6px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3)",
              fontFamily: "'Cormorant', serif",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              hyphens: "auto",
              background: "linear-gradient(45deg, #FFFFFF, #FFEC8B, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          >
            {t.heroTitle}
          </h1>
          
          <div style={{
            fontSize: "3.2rem",
            fontWeight: "900",
            marginBottom: "20px",
            background: "linear-gradient(45deg, #FFD700, #FF6B00, #FF0080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(255,215,0,0.5)",
            fontFamily: "'Roboto Mono', monospace",
            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
          }}>
            {t.heroPrice}
          </div>
          
          <p style={{ 
            fontSize: "1.3rem", 
            marginBottom: "35px", 
            opacity: 0.95,
            lineHeight: "1.6",
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: "600",
            textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
            background: "rgba(0,0,0,0.2)",
            padding: "15px 20px",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
          }}>
            {t.heroDesc}
          </p>
          
          <Link to="/contact" className="cta-button-primary">
            {t.heroCTA}
          </Link>
        </div>
      </section>

      {/* Benefits Section - MORE VIBRANT */}
      <section style={{ padding: "80px 20px", backgroundColor: "#fff", background: "linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "60px",
              background: "linear-gradient(135deg, #FF006E, #5800FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "2.5rem",
              fontWeight: "800",
              position: "relative",
              fontFamily: "'Cormorant', serif",
              textShadow: "0 5px 15px rgba(0,0,0,0.1)",
            }}
          >
            {t.benefitsTitle}
            <div style={{
              width: "100px",
              height: "5px",
              background: "linear-gradient(90deg, #FF006E, #5800FF)",
              margin: "20px auto 0",
              borderRadius: "3px",
              boxShadow: "0 2px 10px rgba(88,0,255,0.3)",
            }}></div>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {t.benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                style={{
                  background: "linear-gradient(145deg, #ffffff, #f8f9ff)",
                  padding: "40px 30px",
                  borderRadius: "25px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(255,0,110,0.1)",
                  transition: "all 0.4s ease",
                  border: "2px solid transparent",
                  backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #FF006E, #5800FF)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(255,0,110,0.2), 0 10px 30px rgba(88,0,255,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(255,0,110,0.1)";
                }}
              >
                <div style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "5px",
                  background: "linear-gradient(90deg, #FF006E, #5800FF)",
                }}></div>
                <div style={{
                  fontSize: "3rem",
                  marginBottom: "25px",
                  background: "linear-gradient(135deg, #FF006E, #5800FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))",
                }}>
                  {["💎", "✨", "🦷", "🌟"][index]}
                </div>
                <h3
                  style={{
                    background: "linear-gradient(135deg, #FF006E, #5800FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "800",
                    marginBottom: "20px",
                    fontSize: "1.5rem",
                    fontFamily: "'Noto Sans', sans-serif",
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  {benefit.title}
                </h3>
                <p style={{ 
                  color: "#444", 
                  lineHeight: "1.7", 
                  fontSize: "1.05rem",
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: "500",
                }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - ENHANCED */}
      <section style={{ 
        padding: "80px 20px", 
        backgroundColor: "#0a0a0a",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        color: "white",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px",
              color: "white",
              fontSize: "2.3rem",
              fontWeight: "800",
              fontFamily: "'Cormorant', serif",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              background: "linear-gradient(45deg, #00D4FF, #5800FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.whyChooseTitle}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
            }}
          >
            {t.whyChoose.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "25px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  fontFamily: "'Noto Sans', sans-serif",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  color: "#00D4FF",
                  fontSize: "1.5rem",
                  marginRight: "20px",
                  minWidth: "30px",
                  fontFamily: "'Noto Sans', sans-serif",
                  fontWeight: "bold",
                  textShadow: "0 0 10px rgba(0,212,255,0.5)",
                }}>✓</div>
                <span style={{ 
                  lineHeight: "1.6", 
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section - SUPER VIBRANT */}
      <section
        style={{
          background: "linear-gradient(135deg, #FF006E 0%, #FF7B00 25%, #FFD000 50%, #00D4FF 75%, #5800FF 100%)",
          padding: "70px 20px",
          textAlign: "center",
          borderRadius: "30px 30px 0 0",
          margin: "40px auto 0",
          maxWidth: "1200px",
          boxShadow: "0 -20px 50px rgba(0,0,0,0.3)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating particles */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          height: "100px",
          background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
          borderRadius: "50%",
          animation: "float 4s ease-in-out infinite",
        }}></div>
        
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h2
            style={{
              color: "white",
              marginBottom: "40px",
              fontSize: "3rem",
              fontWeight: "900",
              textShadow: "3px 3px 6px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.3)",
              fontFamily: "'Cormorant', serif",
              background: "linear-gradient(45deg, #FFFFFF, #FFEC8B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
            }}
          >
            {t.specialOfferTitle}
          </h2>
          
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            marginBottom: "40px",
            flexWrap: "wrap"
          }}>
            <div style={{
              textDecoration: "line-through",
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.5rem",
              fontFamily: "'Noto Sans', sans-serif",
              fontWeight: "600",
              textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
            }}>
              {t.originalPrice}
            </div>
            <div style={{
              fontSize: "3.5rem",
              fontWeight: "900",
              background: "linear-gradient(45deg, #FFD700, #FF6B00, #FF0080)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(255,215,0,0.6)",
              fontFamily: "'Roboto Mono', monospace",
              filter: "drop-shadow(3px 3px 6px rgba(0,0,0,0.5))",
              padding: "10px 20px",
              borderRadius: "15px",
              border: "3px solid rgba(255,255,255,0.3)",
            }}>
              {t.offerPrice}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              padding: "40px",
              borderRadius: "25px",
              marginBottom: "40px",
              backdropFilter: "blur(15px)",
              border: "2px solid rgba(255,255,255,0.2)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
            }}
          >
            <ul
              style={{
                textAlign: "left",
                display: "inline-block",
                lineHeight: "2",
                fontSize: "1.2rem",
                color: "white",
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: "600",
              }}
            >
              {t.specialList.map((item, idx) => (
                <li key={idx} style={{ 
                  marginBottom: "20px", 
                  paddingLeft: "15px",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                }}>
                  <span style={{
                    fontSize: "1.5rem",
                    marginRight: "10px",
                    filter: "drop-shadow(0 0 5px rgba(255,255,255,0.5))",
                  }}>🎁</span> 
                  <strong>{item}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.9)",
            marginBottom: "30px",
            fontStyle: "italic",
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: "600",
            textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
            backgroundColor: "rgba(0,0,0,0.2)",
            padding: "15px 25px",
            borderRadius: "50px",
            display: "inline-block",
          }}>
            {language === "vietnamese" 
              ? "🔥 SỐ LƯỢNG CÓ HẠN - ĐĂNG KÝ NGAY KẺO LỠ! 🔥"
              : "🔥 LIMITED QUANTITY - REGISTER NOW BEFORE IT'S GONE! 🔥"
            }
          </div>

          <br />

          <Link to="/contact" className="cta-button-secondary">
            {t.offerCTA}
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm language={language} />

      {/* Custom CSS with Animations */}
      <style>
        {`
          .cta-button-primary {
            background: linear-gradient(45deg, #FF006E, #FF7B00, #FFD000);
            color: white;
            padding: 20px 45px;
            font-size: 1.3rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 800;
            box-shadow: 0 15px 35px rgba(255,0,110,0.4), 0 5px 15px rgba(255,123,0,0.3);
            transition: all 0.4s ease;
            text-decoration: none;
            display: inline-block;
            font-family: 'Noto Sans', sans-serif;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
            position: relative;
            overflow: hidden;
          }
          .cta-button-primary:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 25px 50px rgba(255,0,110,0.6), 0 10px 30px rgba(255,123,0,0.5);
            background: linear-gradient(45deg, #FF007B, #FF8A00, #FFE600);
          }

          .cta-button-secondary {
            background: linear-gradient(45deg, #00D4FF, #5800FF);
            color: white;
            padding: 20px 50px;
            font-size: 1.3rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 800;
            box-shadow: 0 15px 35px rgba(0,212,255,0.4), 0 5px 15px rgba(88,0,255,0.3);
            transition: all 0.4s ease;
            text-decoration: none;
            display: inline-block;
            font-family: 'Noto Sans', sans-serif;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
          }
          .cta-button-secondary:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 25px 50px rgba(0,212,255,0.6), 0 10px 30px rgba(88,0,255,0.5);
            background: linear-gradient(45deg, #00FFE0, #8A00FF);
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }

          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }

          @media (max-width: 768px) {
            section {
              flex-direction: column !important;
              text-align: center !important;
            }
            .cta-button-primary, .cta-button-secondary {
              width: 90%;
              margin: 0 auto;
              padding: 18px 30px;
              font-size: 1.2rem;
            }
            
            h1 {
              font-size: clamp(1.6rem, 4vw, 2rem) !important;
              line-height: 1.2 !important;
            }
          }
        `}
      </style>
    </div>
  );
}