import React from "react";
import { Link } from "react-router-dom";
import adImg4 from "../pics/ads/ad4.jpg";
import adImg5 from "../pics/ads/ad5.jpg";
import ContactForm from "../components/ContactForm";

export default function NovemberSpecialLandingPage({ language }) {
  const adImage = language === "vietnamese" ? adImg4 : adImg5;
  
  const text = {
    english: {
      heroTitle: "NOVEMBER SPECIAL: RECEIVE THOUSANDS OF GIFTS & PERFECT SMILE AT EMIS DENTAL!",
      heroDesc: "Looking for high-quality dental solutions at affordable prices? This November, Emis Dental brings the biggest promotion of the year, helping you achieve your dream radiant and healthy smile!",
      heroCTA: "REGISTER FOR FREE CONSULTATION",
      
      // Section I
      section1Title: "GRATITUDE MONTH - RECEIVE ENDLESS GIFTS",
      section1Desc: "Golden opportunity to refresh your smile with Up To 50% OFF premium dental services:",
      
      implantTitle: "Dental Implants",
      implantDiscount: "SHOCKING DISCOUNT Up To 60% on Implant costs",
      implantPrice: "Genuine Hiossen Implant (Original 22 Million) NOW ONLY 8.9 Million/Post",
      implantBenefits: [
        "FREE X-Ray and direct consultation with specialist dentists",
        "Quality guaranteed, durable restoration"
      ],
      
      porcelainTitle: "Aesthetic Porcelain Teeth",
      porcelainPrice: "Korean Porcelain Teeth - Natural beauty, durable strength - FROM ONLY 2 Million/Tooth",
      
      whiteningTitle: "Teeth Whitening",
      whiteningDiscount: "50% OFF premium Teeth Whitening service",
      whiteningPrice: "ONLY 1.5 Million for instantly white, confident teeth",
      
      teacherTitle: "SPECIAL 20/11 TEACHER'S DAY GRATITUDE",
      teacherDesc: "On the occasion of Vietnamese Teachers' Day 20/11, Emis Dental sends deep gratitude to silent educators",
      teacherDiscount: "INSTANT 40% OFF General Dental Services (scaling, fillings, extractions...) for Teachers",
      teacherNote: "Our wish for your health and confidence on the teaching platform!",
      
      // Section II
      section2Title: "WHY EMIS DENTAL IS YOUR BEST CHOICE?",
      section2Desc: "Reasons customers prefer and trust Emis Dental for these 3 factors:",
      
      reasons: [
        {
          title: "Highly Qualified, Experienced Doctor Team",
          desc: "At Emis Dental, all services are performed by formally trained dentists with many years of practical experience, especially in Implants and Aesthetic Porcelain Teeth. Dedication, professionalism and skilled hands ensure optimal and safest treatment results."
        },
        {
          title: "Modern Technology, Standard Facilities",
          desc: "Emis Dental always pioneers in applying the world's most advanced dental technologies (Digital X-Ray machines, smile design technology,...). All dental materials are genuine with clear origins, ensuring superior quality and durability."
        },
        {
          title: "Personalized Treatment Plans, Wholehearted Care",
          desc: "Every customer is special. At Emis Dental, you'll receive thorough examination and establish individual treatment plans suitable for your health condition and aesthetic desires, helping you feel comfortable and secure throughout the treatment process."
        }
      ],
      
      // Call to action
      urgencyTitle: "📢 LIMITED TIME OFFER! BOOK APPOINTMENT TODAY!",
      urgencyDesc: "Promotion only happens in November with limited offer slots. Don't miss the opportunity to care for your oral health and own a new smile at the best price!",
      finalCTA: "Register For Free Consultation Now!"
    },
    vietnamese: {
      heroTitle: "ƯU ĐÃI ĐẶC BIỆT THÁNG 11: NHẬN NGÀN QUÀ TẶNG & NỤ CƯỜI HOÀN HẢO TẠI EMIS DENTAL!",
      heroDesc: "Bạn đang tìm kiếm giải pháp nha khoa chất lượng cao với chi phí phải chăng? Tháng 11 này, Emis Dental mang đến chương trình khuyến mãi lớn nhất trong năm, giúp bạn sở hữu nụ cười rạng rỡ và khỏe mạnh mơ ước!",
      heroCTA: "ĐĂNG KÝ TƯ VẤN MIỄN PHÍ NGAY",
      
      // Section I
      section1Title: "THÁNG TRI ÂN- NHẬN NGÀN QUÀ BẤT TẬN",
      section1Desc: "Cơ hội vàng để tân trang nụ cười với mức Ưu Đãi Lên Đến 50% các dịch vụ nha khoa cao cấp:",
      
      implantTitle: "Cấy Ghép Implant (Trồng Răng Giả)",
      implantDiscount: "Giảm SỐC Lên Đến 60% chi phí Implant",
      implantPrice: "Implant Hiossen Chính Hãng (Giá gốc 22 Triệu) CHỈ CÒN 8.9 Triệu/Trụ",
      implantBenefits: [
        "MIỄN PHÍ chụp X-Quang và tư vấn trực tiếp với Bác sĩ chuyên môn cao",
        "Cam kết chất lượng cao, phục hình bền vững"
      ],
      
      porcelainTitle: "Răng Sứ Thẩm Mỹ",
      porcelainPrice: "Răng sứ toàn sứ Hàn Quốc – Đẹp tự nhiên, bền chắc – CHỈ TỪ 2 Triệu/Răng",
      
      whiteningTitle: "Tẩy Trắng Răng",
      whiteningDiscount: "Giảm 50% dịch vụ Tẩy Trắng Răng cao cấp",
      whiteningPrice: "CHỈ CÒN 1.5 Triệu để sở hữu hàm răng trắng sáng, tự tin tức thì",
      
      teacherTitle: "TRI ÂN ĐẶC BIỆT CHÀO MỪNG NGÀY 20/11",
      teacherDesc: "Nhân dịp Ngày Nhà giáo Việt Nam 20/11, Emis Dental xin gửi lời tri ân sâu sắc đến những người lái đò thầm lặng",
      teacherDiscount: "GIẢM NGAY 40% các Dịch Vụ Nha Khoa Tổng Quát (lấy cao răng, trám răng, nhổ răng...) dành cho Quý Thầy Cô Giáo",
      teacherNote: "Thay lời chúc sức khỏe và tự tin trên bục giảng!",
      
      // Section II
      section2Title: "VÌ SAO EMIS DENTAL LÀ LỰA CHỌN TỐT NHẤT CỦA BẠN?",
      section2Desc: "Lý do khách hàng ưa chuộng và tin tưởng lựa chọn Emis Dental vì 3 yếu tố dưới đây:",
      
      reasons: [
        {
          title: "Đội Ngũ Bác Sĩ Chuyên Môn Cao, Giàu Kinh Nghiệm",
          desc: "Tại Emis Dental tất cả các dịch vụ đều được thực hiện bởi bác sĩ được đào tạo chính quy, có nhiều năm kinh nghiệm thực tiễn, đặc biệt là trong lĩnh vực Implant và Răng Sứ Thẩm Mỹ. Sự tận tâm, chuyên nghiệp và tay nghề khéo léo đảm bảo mang lại kết quả điều trị tối ưu và an toàn nhất."
        },
        {
          title: "Công Nghệ Hiện Đại, Cơ Sở Vật Chất Tiêu Chuẩn",
          desc: "Emis Dental luôn tiên phong ứng dụng các công nghệ nha khoa tiên tiến nhất trên thế giới (máy X-Quang Kỹ Thuật Số, công nghệ thiết kế nụ cười,...). Toàn bộ vật liệu nha khoa đều là hàng chính hãng, có nguồn gốc rõ ràng, đảm bảo chất lượng và độ bền vượt trội."
        },
        {
          title: "Phác Đồ Điều Trị Cá Nhân Hóa, Tận Tâm",
          desc: "Mỗi khách hàng là một trường hợp đặc biệt. Tại Emis Dental, bạn sẽ được thăm khám kỹ lưỡng và thiết lập phác đồ điều trị riêng biệt, phù hợp với tình trạng sức khỏe và mong muốn thẩm mỹ của bản thân, giúp bạn cảm thấy thoải mái và an tâm trong suốt quá trình điều trị."
        }
      ],
      
      // Call to action
      urgencyTitle: "📢 ƯU ĐÃI CÓ HẠN! ĐẶT LỊCH NGAY HÔM NAY!",
      urgencyDesc: "Chương trình khuyến mãi chỉ diễn ra trong tháng 11 với số lượng suất ưu đãi có hạn. Đừng bỏ lỡ cơ hội chăm sóc sức khỏe răng miệng và sở hữu nụ cười mới với mức giá tốt nhất!",
      finalCTA: "Đăng Ký Tư Vấn Miễn Phí Ngay!"
    }
  };

  const t = language === "vietnamese" ? text.vietnamese : text.english;

  return (
    <div style={{ fontFamily: "'Inter', 'Be Vietnam Pro', 'Segoe UI', sans-serif", color: "#333", backgroundColor: "#fafafa" }}>
      {/* Navbar placeholder */}
      <div style={{ height: "70px" }}></div>

      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)",
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
            src={adImage}
            alt="November Special Promotion"
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
            🎊 NOVEMBER SPECIAL
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
              marginBottom: "15px",
              fontWeight: "800",
              lineHeight: "1.1",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
              color: "white",
            }}
          >
            {t.heroTitle}
          </h1>
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

      {/* Section I: Gratitude Month */}
      <section style={{ padding: "60px 20px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#1e3a8a",
              fontSize: "2.2rem",
              fontWeight: "700",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}
          >
            {t.section1Title}
          </h2>
          <p style={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "#4b5563",
            marginBottom: "50px",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}>
            {t.section1Desc}
          </p>

          {/* Implant Service */}
          <div style={{
            backgroundColor: "#f0f9ff",
            padding: "40px",
            borderRadius: "20px",
            marginBottom: "30px",
            border: "2px solid #e0f2fe",
          }}>
            <h3 style={{
              color: "#0369a1",
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "20px",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}>
              {t.implantTitle}
            </h3>
            <div style={{
              backgroundColor: "#dc2626",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              display: "inline-block",
              fontWeight: "700",
              marginBottom: "15px",
              fontSize: "1.1rem",
            }}>
              {t.implantDiscount}
            </div>
            <div style={{
              fontSize: "1.5rem",
              fontWeight: "800",
              color: "#dc2626",
              marginBottom: "15px",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}>
              {t.implantPrice}
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {t.implantBenefits.map((benefit, index) => (
                <li key={index} style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "flex-start",
                  fontFamily: "'Inter', 'Segoe UI', sans-serif",
                }}>
                  <span style={{ color: "#059669", marginRight: "10px", fontWeight: "bold" }}>✓</span>
                  <span style={{ color: "#374151", fontWeight: "500" }}>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Porcelain Teeth */}
          <div style={{
            backgroundColor: "#fef7ed",
            padding: "30px",
            borderRadius: "15px",
            marginBottom: "30px",
            border: "2px solid #fed7aa",
          }}>
            <h3 style={{
              color: "#ea580c",
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "15px",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}>
              {t.porcelainTitle}
            </h3>
            <div style={{
              fontSize: "1.3rem",
              fontWeight: "800",
              color: "#ea580c",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}>
              {t.porcelainPrice}
            </div>
          </div>

          {/* Teeth Whitening */}
          <div style={{
            backgroundColor: "#faf5ff",
            padding: "30px",
            borderRadius: "15px",
            marginBottom: "30px",
            border: "2px solid #e9d5ff",
          }}>
            <h3 style={{
              color: "#7c3aed",
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "15px",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}>
              {t.whiteningTitle}
            </h3>
            <div style={{
              backgroundColor: "#7c3aed",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              display: "inline-block",
              fontWeight: "700",
              marginBottom: "10px",
              fontSize: "1rem",
            }}>
              {t.whiteningDiscount}
            </div>
            <div style={{
              fontSize: "1.3rem",
              fontWeight: "800",
              color: "#7c3aed",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}>
              {t.whiteningPrice}
            </div>
          </div>

          {/* Teacher Special */}
          <div style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            padding: "40px",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
          }}>
            <h3 style={{
              fontSize: "1.8rem",
              fontWeight: "800",
              marginBottom: "15px",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}>
              {t.teacherTitle}
            </h3>
            <p style={{
              fontSize: "1.1rem",
              marginBottom: "20px",
              opacity: 0.95,
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
            }}>
              {t.teacherDesc}
            </p>
            <div style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "15px",
              backdropFilter: "blur(10px)",
            }}>
              <div style={{
                fontSize: "1.5rem",
                fontWeight: "800",
                marginBottom: "10px",
                fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
              }}>
                {t.teacherDiscount}
              </div>
            </div>
            <div style={{
              fontStyle: "italic",
              fontWeight: "600",
              fontFamily: "'Inter', 'Segoe UI', sans-serif",
            }}>
              {t.teacherNote}
            </div>
          </div>
        </div>
      </section>

      {/* Section II: Why Choose Us */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#1e3a8a",
              fontSize: "2.2rem",
              fontWeight: "700",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}
          >
            {t.section2Title}
          </h2>
          <p style={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "#4b5563",
            marginBottom: "50px",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}>
            {t.section2Desc}
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}>
            {t.reasons.map((reason, index) => (
              <div
                key={index}
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
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(30,58,138,0.15)";
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
                  background: "linear-gradient(90deg, #1e3a8a, #3730a3)",
                }}></div>
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "20px",
                  color: "#1e3a8a"
                }}>
                  {["👨‍⚕️", "💻", "📋"][index]}
                </div>
                <h3
                  style={{
                    color: "#1e3a8a",
                    fontWeight: "700",
                    marginBottom: "15px",
                    fontSize: "1.3rem",
                    fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
                  }}
                >
                  {reason.title}
                </h3>
                <p style={{ 
                  color: "#4b5563", 
                  lineHeight: "1.6", 
                  fontSize: "1rem",
                  fontFamily: "'Inter', 'Segoe UI', sans-serif",
                }}>
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
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
              marginBottom: "20px",
              fontSize: "2.2rem",
              fontWeight: "800",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              fontFamily: "'Be Vietnam Pro', 'Inter', sans-serif",
            }}
          >
            {t.urgencyTitle}
          </h2>
          
          <p style={{
            fontSize: "1.2rem",
            color: "rgba(255,255,255,0.95)",
            marginBottom: "35px",
            lineHeight: "1.5",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: "500",
          }}>
            {t.urgencyDesc}
          </p>

          <Link to="/contact" className="cta-button-secondary">
            {t.finalCTA}
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm language={language} />

      {/* Custom CSS */}
      <style>
        {`
          .cta-button-primary {
            background: linear-gradient(45deg, #f59e0b, #d97706);
            color: white;
            padding: 16px 35px;
            font-size: 1.2rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 700;
            box-shadow: 0 10px 25px rgba(245,158,11,0.4);
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
          }
          .cta-button-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(245,158,11,0.5);
            color: white;
          }

          .cta-button-secondary {
            background: white;
            color: #dc2626;
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
            color: #dc2626;
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
            
            h1, h2 {
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