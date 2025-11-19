import React from "react";
import { Link } from "react-router-dom";
import adImg from "../pics/ads/ad3.jpg";
import ContactForm from "../components/ContactForm";

export default function TeethWhiteningLandingPage({ language }) {
  const text = {
    english: {
      heroTitle: "HIGH-TECH TEETH WHITENING - NOVEMBER OFFER",
      heroPrice: "50% OFF ONLY 1,500,000 VND",
      heroSubtitle: "Safe & Radiant Smile (Original Price: 3,000,000 VND)",
      heroDesc: "Dreaming of a radiant white smile but concerned about costs? This November, Emis International Dentistry brings you the opportunity to 'upgrade' your smile at an unprecedented price. With just 60 minutes at our clinic, advanced whitening technology will effectively remove yellow stains and discoloration from food, tea, coffee... bringing instant confidence.",
      heroCTA: "REGISTER FOR FREE CONSULTATION",
      offerTitle: "🌟 SPECIAL OFFER DETAILS (November Only)",
      offerDesc: "Experience international standard teeth whitening service at the best price:",
      originalPrice: "Original price: 3,000,000 VND",
      offerPrice: "SPECIAL OFFER: ONLY 1,500,000 VND",
      packageIncludes: "🎁 The 1,500,000 VND package includes:",
      specialList: [
        "FREE 100%: 1:1 examination and consultation with specialist dentist",
        "FREE 100%: Scaling and polishing, comprehensive teeth surface cleaning before whitening for optimal results",
        "01 session: High-tech teeth whitening at the clinic (60 minutes)",
      ],
      note: "Note: Promotion only applies to customers who register and successfully book appointments in November.",
      whyChooseTitle: "WHY CHOOSE TEETH WHITENING AT EMIS DENTAL?",
      whyChooseDesc: "Different from home methods, teeth whitening at Emis Dental ensures 3 factors: Effectiveness - Safety - Speed under the supervision of professional dentists.",
      whyChoose: [
        {
          title: "Modern Whitening Technology",
          desc: "We use advanced Blue Laser light technology to activate whitening gel, helping teeth whiten quickly and evenly.",
        },
        {
          title: "Absolutely Safe for Tooth Enamel",
          desc: "Emis Dental commits to using premium Pola Office whitening gel with controlled concentration, FDA certified for oral health safety. The gel doesn't erode enamel or affect tooth structure.",
        },
        {
          title: "Visible Results After 1 Session",
          desc: "After just 60-90 minutes, your teeth can brighten by 2-4 shades (depending on original tooth condition), bringing clear aesthetic results.",
        },
        {
          title: "Minimized Sensitivity",
          desc: "The procedure follows medical standards, including gum protection and desensitizing gel application. Emis Dental uses Pola Office whitening gel (Australian origin) for maximum comfort during and after treatment.",
        },
        {
          title: "Direct Doctor Performance",
          desc: "The entire process from examination, color assessment to whitening is performed by specialist dentists, ensuring safety and desired results.",
        },
      ],
      finalCTA: "REGISTER FOR FREE CONSULTATION NOW!",
      finalDesc: "Don't let yellow teeth diminish your confidence. Just 1,500,000 VND for a radiant smile to welcome year-end festivities. Contact Emis Dental today!",
    },
    vietnamese: {
      heroTitle: "TẨY TRẮNG RĂNG CÔNG NGHỆ CAO - ƯU ĐÃI THÁNG 11",
      heroPrice: "GIẢM 50% CHỈ CÒN 1.500.000Đ",
      heroSubtitle: "Nụ Cười Trắng Sáng An Toàn (Giá Gốc 3.000.000đ)",
      heroDesc: "Bạn mong muốn sở hữu nụ cười trắng sáng rạng rỡ nhưng còn e ngại chi phí? Trong tháng 11 này, Nha khoa Quốc tế Emis mang đến cơ hội 'nâng cấp' nụ cười với chi phí ưu đãi chưa từng có. Chỉ với 60 phút tại phòng khám, công nghệ tẩy trắng tiên tiến sẽ giúp bạn loại bỏ hiệu quả các mảng bám ố vàng, xỉn màu do thực phẩm, trà, cà phê... mang lại sự tự tin tức thì.",
      heroCTA: "ĐĂNG KÝ TƯ VẤN MIỄN PHÍ",
      offerTitle: "🌟 CHI TIẾT GÓI ƯU ĐÃI ĐẶC BIỆT (Chỉ trong tháng 11)",
      offerDesc: "Tận hưởng dịch vụ tẩy trắng răng tiêu chuẩn quốc tế với mức giá tốt nhất:",
      originalPrice: "Giá gốc: 3.000.000 VNĐ",
      offerPrice: "GIÁ ƯU ĐÃI: CHỈ CÒN 1.500.000 VNĐ",
      packageIncludes: "🎁 Gói ưu đãi 1.500.000 VNĐ đã bao gồm trọn gói:",
      specialList: [
        "MIỄN PHÍ 100%: Thăm khám và tư vấn 1:1 cùng bác sĩ chuyên khoa",
        "MIỄN PHÍ 100%: Cạo vôi răng và đánh bóng, làm sạch bề mặt răng toàn diện trước khi tẩy trắng để đảm bảo hiệu quả tối ưu",
        "01 liệu trình: Tẩy trắng răng công nghệ cao tại phòng khám (60 phút)",
      ],
      note: "Lưu ý: Chương trình ưu đãi chỉ áp dụng cho khách hàng đăng ký và đặt lịch hẹn thành công trong tháng 11.",
      whyChooseTitle: "TẠI SAO NÊN CHỌN TẨY TRẮNG RĂNG TẠI EMIS DENTAL?",
      whyChooseDesc: "Khác biệt với các phương pháp tại nhà, tẩy trắng răng tại Emis Dental đảm bảo 3 yếu tố: Hiệu Quả - An Toàn - Nhanh Chóng dưới sự giám sát của bác sĩ chuyên môn.",
      whyChoose: [
        {
          title: "Công Nghệ Tẩy Trắng Hiện Đại",
          desc: "Chúng tôi sử dụng công nghệ đèn chiếu Blue Laser hiện đại kích hoạt thuốc tẩy trắng, giúp răng bật tone nhanh chóng và đồng đều.",
        },
        {
          title: "An Toàn Tuyệt Đối Cho Men Răng",
          desc: "Emis Dental cam kết sử dụng thuốc tẩy trắng Pola Office cao cấp, có nồng độ được kiểm soát, được FDA (Hoa Kỳ) chứng nhận an toàn cho sức khỏe răng miệng. Thuốc không gây mài mòn men răng, không ảnh hưởng đến cấu trúc răng.",
        },
        {
          title: "Hiệu Quả Thấy Rõ Sau 1 Lần Hẹn",
          desc: "Chỉ sau 60-90 phút, hàm răng của bạn có thể bật sáng từ 2 đến 4 tone (tùy thuộc vào tình trạng răng gốc), mang lại hiệu quả thẩm mỹ rõ rệt.",
        },
        {
          title: "Giảm Thiểu Ê Buốt Tối Đa",
          desc: "Quy trình được thực hiện chuẩn y khoa, bao gồm bước che nướu và bôi gel chống ê buốt, và Emis Dental sử dụng thuốc tẩy trắng răng Pola Office (Xuất xứ Úc) giúp khách hàng cảm thấy thoải mái tối đa trong và sau khi điều trị.",
        },
        {
          title: "Trực Tiếp Bác Sĩ Thực Hiện",
          desc: "Toàn bộ quá trình từ thăm khám, đánh giá màu răng đến thực hiện tẩy trắng đều do bác sĩ chuyên khoa phụ trách, đảm bảo quy trình an toàn và kết quả như ý.",
        },
      ],
      finalCTA: "ĐĂNG KÝ TƯ VẤN MIỄN PHÍ NGAY!",
      finalDesc: "Đừng để hàm răng ố vàng làm bạn mất tự tin. Chỉ 1.500.000đ cho một nụ cười rạng rỡ đón lễ hội cuối năm. Hãy liên hệ Emis Dental ngay hôm nay!",
    },
  };

  const t = language === "vietnamese" ? text.vietnamese : text.english;

  return (
    <div style={{ fontFamily: "'Noto Sans', sans-serif", color: "#333", backgroundColor: "#fafafa" }}>
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
          background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
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
            alt="Teeth Whitening Promotion"
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
            backgroundColor: "rgba(255,255,255,0.15)",
            padding: "10px 20px",
            borderRadius: "30px",
            marginBottom: "15px",
            fontSize: "0.9rem",
            backdropFilter: "blur(10px)",
          }}>
            ✨ LIMITED TIME OFFER
          </div>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
              marginBottom: "10px",
              fontWeight: "800",
              lineHeight: "1.1",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              fontFamily: "'Cormorant', serif",
            }}
          >
            {t.heroTitle}
          </h1>
          <div style={{
            fontSize: "2.2rem",
            fontWeight: "900",
            marginBottom: "5px",
            background: "linear-gradient(45deg, #FFFFFF, #E0F7FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 20px rgba(255,255,255,0.3)",
          }}>
            {t.heroPrice}
          </div>
          <div style={{
            fontSize: "1.2rem",
            marginBottom: "20px",
            opacity: 0.9,
            fontWeight: "600"
          }}>
            {t.heroSubtitle}
          </div>
          <p style={{ 
            fontSize: "1.1rem", 
            marginBottom: "30px", 
            opacity: 0.9,
            lineHeight: "1.4"
          }}>
            {t.heroDesc}
          </p>
          <Link to="/contact" className="cta-button-primary">
            {t.heroCTA}
          </Link>
        </div>
      </section>

      {/* Special Offer Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#4facfe",
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            {t.offerTitle}
          </h2>
          
          <p style={{
            textAlign: "center",
            fontSize: "1.1rem",
            marginBottom: "30px",
            color: "#555",
            lineHeight: "1.6"
          }}>
            {t.offerDesc}
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            marginBottom: "40px",
            flexWrap: "wrap"
          }}>
            <div style={{
              textDecoration: "line-through",
              color: "#888",
              fontSize: "1.3rem"
            }}>
              {t.originalPrice}
            </div>
            <div style={{
              fontSize: "2.2rem",
              fontWeight: "900",
              color: "#4facfe",
              textShadow: "2px 2px 8px rgba(79,172,254,0.3)"
            }}>
              {t.offerPrice}
            </div>
          </div>

          <div style={{
            backgroundColor: "#f8f9fa",
            padding: "30px",
            borderRadius: "20px",
            marginBottom: "30px",
            border: "2px dashed #4facfe"
          }}>
            <h3 style={{
              color: "#4facfe",
              marginBottom: "20px",
              fontSize: "1.3rem",
              textAlign: "center"
            }}>
              {t.packageIncludes}
            </h3>
            <ul
              style={{
                textAlign: "left",
                display: "inline-block",
                lineHeight: "1.8",
                fontSize: "1.1rem",
                color: "#333",
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
            fontSize: "0.9rem",
            color: "#666",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: "30px"
          }}>
            {t.note}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/contact" className="cta-button-secondary">
              {t.heroCTA}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#4facfe",
              fontSize: "2.2rem",
              fontWeight: "700",
            }}
          >
            {t.whyChooseTitle}
          </h2>
          
          <p style={{
            textAlign: "center",
            fontSize: "1.1rem",
            marginBottom: "50px",
            color: "#555",
            lineHeight: "1.6",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            {t.whyChooseDesc}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {t.whyChoose.map((benefit, index) => (
              <div
                key={benefit.title}
                style={{
                  background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
                  padding: "35px 25px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.4s ease",
                  border: "1px solid #f0f0f0",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(79,172,254,0.15)";
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
                  background: "linear-gradient(90deg, #4facfe, #00f2fe)",
                }}></div>
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "20px",
                  color: "#4facfe"
                }}>
                  {["💎", "✨", "🦷", "🌟", "👨‍⚕️"][index]}
                </div>
                <h3
                  style={{
                    color: "#4facfe",
                    fontWeight: "700",
                    marginBottom: "15px",
                    fontSize: "1.3rem",
                  }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: "#555", lineHeight: "1.6", fontSize: "1rem" }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "60px 20px",
          textAlign: "center",
          borderRadius: "30px 30px 0 0",
          margin: "40px auto 0",
          maxWidth: "1200px",
          boxShadow: "0 -10px 30px rgba(0,0,0,0.1)",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "2.2rem",
              fontWeight: "800",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            {t.finalCTA}
          </h2>
          
          <p style={{
            fontSize: "1.2rem",
            marginBottom: "35px",
            opacity: 0.9,
            lineHeight: "1.5"
          }}>
            {t.finalDesc}
          </p>

          <Link to="/contact" className="cta-button-primary">
            {t.heroCTA}
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm language={language} />

      {/* Custom CSS */}
      <style>
        {`
          .cta-button-primary {
            background: linear-gradient(45deg, #4facfe, #00f2fe);
            color: white;
            padding: 16px 35px;
            font-size: 1.2rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 700;
            box-shadow: 0 10px 25px rgba(79,172,254,0.3);
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
          }
          .cta-button-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(79,172,254,0.4);
          }

          .cta-button-secondary {
            background: white;
            color: #4facfe;
            padding: 16px 40px;
            font-size: 1.2rem;
            border: 2px solid #4facfe;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 700;
            boxShadow: 0 10px 25px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
          }
          .cta-button-secondary:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(79,172,254,0.3);
            background: #4facfe;
            color: white;
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