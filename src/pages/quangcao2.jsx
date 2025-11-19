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
    <div style={{ fontFamily: "'Inter', 'Be Vietnam Pro', 'Segoe UI', sans-serif", color: "#333", backgroundColor: "#fafafa" }}>
      {/* Navbar placeholder */}
      <div style={{ height: "70px" }}></div>

      {/* Hero Section with Gradient Background */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(135deg, #4a5568 0%, #2d3748 100%)",
          padding: "50px 20px",
          borderRadius: "0 0 30px 30px",
          maxWidth: "1200px",
          margin: "0 auto 40px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
          color: "white",
        }}
      >
        <div style={{ flex: "1 1 300px", textAlign: "center", marginBottom: "30px" }}>
          <img
            src={adImg}
            alt="Porcelain Teeth Promotion"
            style={{
              width: "280px",
              height: "280px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              border: "3px solid rgba(255,255,255,0.3)",
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
          }}
        >
          <div style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            padding: "10px 20px",
            borderRadius: "30px",
            marginBottom: "15px",
            fontSize: "0.9rem",
            backdropFilter: "blur(10px)",
            color: "white",
            fontWeight: "600",
          }}>
            🎉 LIMITED TIME OFFER
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
              marginBottom: "15px",
              fontWeight: "800",
              lineHeight: "1.1",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
              width: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "white",
            }}
          >
            {t.heroTitle}
          </h1>
          <div style={{
            fontSize: "2.5rem",
            fontWeight: "900",
            marginBottom: "15px",
            background: "linear-gradient(45deg, #FFD700, #FFEC8B)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 20px rgba(255,215,0,0.3)",
            fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
          }}>
            {t.heroPrice}
          </div>
          <p style={{ 
            fontSize: "1.1rem", 
            marginBottom: "30px", 
            opacity: 0.95,
            lineHeight: "1.4",
            color: "white",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}>
            {t.heroDesc}
          </p>
          <Link to="/contact" className="cta-button-primary">
            {t.heroCTA}
          </Link>
        </div>
      </section>

      {/* Benefits Section with Card Layout */}
      <section style={{ padding: "60px 20px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "50px",
              color: "#2d3748",
              fontSize: "2.2rem",
              fontWeight: "700",
              position: "relative",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}
          >
            {t.benefitsTitle}
            <div style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #4a5568, #2d3748)",
              margin: "15px auto 0",
              borderRadius: "2px"
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
                  background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                  padding: "35px 25px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.4s ease",
                  border: "1px solid #e2e8f0",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(45,55,72,0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "4px",
                  background: "linear-gradient(90deg, #4a5568, #2d3748)",
                }}></div>
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "20px",
                  color: "#2d3748"
                }}>
                  {["💎", "✨", "🦷", "🌟"][index]}
                </div>
                <h3
                  style={{
                    color: "#2d3748",
                    fontWeight: "700",
                    marginBottom: "15px",
                    fontSize: "1.3rem",
                    fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
                  }}
                >
                  {benefit.title}
                </h3>
                <p style={{ 
                  color: "#4a5568", 
                  lineHeight: "1.6", 
                  fontSize: "1rem",
                  fontFamily: "'Inter', 'Segoe UI', sans-serif",
                }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
              color: "#2d3748",
              fontSize: "2rem",
              fontWeight: "700",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}
          >
            {t.whyChooseTitle}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {t.whyChoose.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "20px",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{
                  color: "#2d3748",
                  fontSize: "1.2rem",
                  marginRight: "15px",
                  minWidth: "25px",
                  fontWeight: "bold"
                }}>✓</div>
                <span style={{ 
                  lineHeight: "1.5", 
                  color: "#4a5568", 
                  fontWeight: "500",
                  fontFamily: "'Inter', 'Segoe UI', sans-serif",
                }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section - Improved Contrast */}
      <section
        style={{
          background: "linear-gradient(135deg, #d84315 0%, #bf360c 100%)",
          padding: "60px 20px",
          textAlign: "center",
          borderRadius: "30px 30px 0 0",
          margin: "40px auto 0",
          maxWidth: "1200px",
          boxShadow: "0 -10px 30px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              color: "white",
              marginBottom: "30px",
              fontSize: "2.5rem",
              fontWeight: "800",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}
          >
            {t.specialOfferTitle}
          </h2>
          
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            marginBottom: "30px",
            flexWrap: "wrap"
          }}>
            <div style={{
              textDecoration: "line-through",
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.3rem",
              fontWeight: "600",
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
            }}>
              {t.originalPrice}
            </div>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "900",
              color: "white",
              textShadow: "2px 2px 8px rgba(0,0,0,0.4)",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}>
              {t.offerPrice}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              padding: "30px",
              borderRadius: "20px",
              marginBottom: "35px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <ul
              style={{
                textAlign: "left",
                display: "inline-block",
                lineHeight: "1.8",
                fontSize: "1.1rem",
                color: "white",
                fontWeight: "600",
                fontFamily: "'Inter', 'Segoe UI', sans-serif",
              }}
            >
              {t.specialList.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "15px", paddingLeft: "10px" }}>
                  <strong>🎁 {item}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.95)",
            marginBottom: "25px",
            fontStyle: "italic",
            fontWeight: "500",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}>
            {language === "vietnamese" 
              ? "Lưu ý: Số lượng suất ưu đãi có hạn. Chương trình chỉ áp dụng cho khách hàng đăng ký hẹn trong tháng 11."
              : "Note: Limited number of offers. Program only applies to customers who register in November."
            }
          </div>

          <Link to="/contact" className="cta-button-secondary">
            {t.offerCTA}
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm language={language} />

      {/* Custom CSS */}
      <style>
        {`
          .cta-button-primary {
            background: linear-gradient(45deg, #FFD700, #FFA500);
            color: #2d3748;
            padding: 16px 35px;
            font-size: 1.2rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 700;
            box-shadow: 0 10px 25px rgba(255,165,0,0.4);
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
          }
          .cta-button-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(255,165,0,0.5);
            color: #2d3748;
          }

          .cta-button-secondary {
            background: white;
            color: #d84315;
            padding: 16px 40px;
            font-size: 1.2rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 700;
            boxShadow: 0 10px 25px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
          }
          .cta-button-secondary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.4);
            background: #f8f9fa;
            color: #d84315;
          }

          @media (max-width: 768px) {
            section {
              flex-direction: column !important;
              text-align: center !important;
            }
            .cta-button-primary, .cta-button-secondary {
              width: 90%;
              margin: 0 auto;
            }
            
            /* Adjust title for mobile to prevent overflow */
            h1 {
              white-space: normal !important;
              font-size: clamp(1.5rem, 4vw, 1.8rem) !important;
              line-height: 1.2 !important;
            }
          }
        `}
      </style>
    </div>
  );
}