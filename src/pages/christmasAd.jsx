import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm";

// Language-specific images
import engGen from "../pics/ads/eng-genad.png";
import vieGen from "../pics/ads/vie-genad.png";
import engImplant from "../pics/ads/eng-implant9tr.png";
import vieImplant from "../pics/ads/vie-implant9tr.png";
import engWhite from "../pics/ads/eng-teethwhite.png";
import vieWhite from "../pics/ads/vie-teethwhite.png";
import engRemove from "../pics/ads/eng-teethremove.png";
import vieRemove from "../pics/ads/vie-teethremove.png";

// Festive icons
import { FaGift, FaSnowflake, FaStar, FaTree } from "react-icons/fa";

export default function ChristmasAdsLandingPage() {
  const language = useSelector((state) => state.language.language);
  const isVN = language === "vietnamese";

  const imgs = {
    gen: isVN ? vieGen : engGen,
    implant: isVN ? vieImplant : engImplant,
    white: isVN ? vieWhite : engWhite,
    remove: isVN ? vieRemove : engRemove,
  };

  const text = {
    english: {
      heroTitle: "🎄 CHRISTMAS SMILE SPECIAL 🎄",
      heroSubtitle: "Spread Joy with a Healthy, Beautiful Smile",
      heroDesc: "Celebrate this festive season with special dental offers at Emis Dental. Valid from December 1st to December 31st.",
      heroCTA: "BOOK YOUR CHRISTMAS SMILE",
      sections: [
        {
          img: imgs.implant,
          title: "IMPLANT CHRISTMAS PACKAGE",
          badge: "LIMITED OFFER",
          icon: <FaStar style={{ color: "#FFD700" }} />,
          items: [
            "Premium US Implant: 8,900,000 VND",
            "Free porcelain crown for first 10 Christmas bookings",
            "Complimentary consultation & 3D ConeBeam CT scan",
            "0% interest installment via credit card",
            "Free post-treatment Christmas care kit"
          ],
          color: "#1E6F5C",
          ribbon: "MOST POPULAR"
        },
        {
          img: imgs.white,
          title: "HOLIDAY BRIGHT SMILE",
          badge: "40% OFF",
          icon: <FaSnowflake style={{ color: "#4FC3F7" }} />,
          items: [
            "Professional in-chair teeth whitening",
            "Includes protective gel and sensitivity prevention",
            "Perfect for Christmas photos and gatherings",
            "Results last through the holiday season"
          ],
          color: "#0D47A1",
          ribbon: "FESTIVE SPECIAL"
        },
        {
          img: imgs.remove,
          title: "CHRISTMAS GIFT FOR KIDS",
          badge: "FREE SERVICE",
          icon: <FaGift style={{ color: "#E91E63" }} />,
          items: [
            "Free baby tooth extraction for children",
            "Gentle, pain-free procedure",
            "Child-friendly environment with Christmas theme",
            "Special gift for brave little patients"
          ],
          color: "#C2185B",
          ribbon: "SANTA'S GIFT"
        },
      ],
      giftTitle: "🎁 Christmas Bonus for All Visitors",
      giftItems: [
        "Google review + check-in: Receive vouchers from 100,000 – 500,000 VND",
        "Free dental check-up and oral health assessment",
        "Christmas goodie bag with dental care products",
        "Entry into our Christmas lucky draw for premium gifts"
      ],
      footerNote: "Limited slots available. Early booking recommended to secure your Christmas appointment."
    },
    vietnamese: {
      heroTitle: "🎄 ƯU ĐÃI GIÁNG SINH RẠNG NGỜI 🎄",
      heroSubtitle: "Lan Tỏa Niềm Vui Với Nụ Cười Khỏe Đẹp",
      heroDesc: "Đón mùa lễ hội với ưu đãi chăm sóc răng miệng đặc biệt tại Emis Dental. Áp dụng từ 01/12 đến 31/12.",
      heroCTA: "ĐẶT LỊCH NGAY",
      sections: [
        {
          img: imgs.implant,
          title: "GÓI IMPLANT GIÁNG SINH",
          badge: "ƯU ĐÃI GIỚI HẠN",
          icon: <FaStar style={{ color: "#FFD700" }} />,
          items: [
            "Trụ Implant Mỹ cao cấp: 8.900.000đ",
            "Tặng răng sứ cho 10 khách đặt lịch đầu tiên",
            "Miễn phí khám & chụp phim 3D ConeBeam",
            "Trả góp 0% lãi suất qua thẻ tín dụng",
            "Tặng bộ chăm sóc hậu phẫu Giáng Sinh"
          ],
          color: "#1E6F5C",
          ribbon: "ĐƯỢC YÊU THÍCH"
        },
        {
          img: imgs.white,
          title: "NỤ CƯỜI TRẮNG SÁNG NGÀY LỄ",
          badge: "GIẢM 40%",
          icon: <FaSnowflake style={{ color: "#4FC3F7" }} />,
          items: [
            "Tẩy trắng răng chuyên nghiệp tại ghế",
            "Bao gồm gel bảo vệ và ngừa ê buốt",
            "Hoàn hảo cho ảnh Giáng Sinh và tiệc tùng",
            "Kết quả bền đẹp suốt mùa lễ hội"
          ],
          color: "#0D47A1",
          ribbon: "ĐẶC BIỆT"
        },
        {
          img: imgs.remove,
          title: "QUÀ GIÁNG SINH CHO BÉ",
          badge: "MIỄN PHÍ",
          icon: <FaGift style={{ color: "#E91E63" }} />,
          items: [
            "Miễn phí nhổ răng sữa cho trẻ em",
            "Quy trình nhẹ nhàng, không đau",
            "Không gian thân thiện chủ đề Giáng Sinh",
            "Quà tặng đặc biệt cho các bé dũng cảm"
          ],
          color: "#C2185B",
          ribbon: "QUÀ TẶNG"
        },
      ],
      giftTitle: "🎁 Quà Tặng Giáng Sinh Cho Mọi Khách Hàng",
      giftItems: [
        "Đánh giá Google + check-in: Nhận voucher 100.000đ – 500.000đ",
        "Khám răng miễn phí và đánh giá sức khỏe răng miệng",
        "Túi quà Giáng Sinh với sản phẩm chăm sóc răng",
        "Tham gia bốc thăm trúng thưởng quà hấp dẫn"
      ],
      footerNote: "Số lượng ưu đãi có hạn. Đặt lịch sớm để giữ chỗ trong mùa Giáng Sinh."
    },
  };

  const t = isVN ? text.vietnamese : text.english;

  return (
    <div style={{
      fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
      background: "linear-gradient(180deg, #0F2F23 0%, #1B5E20 30%, #f8f9fa 100%)",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden"
    }}>
      
      {/* Animated Snowflakes */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 0
      }}>
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "10px",
            height: "10px",
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "50%",
            animation: `fall ${3 + Math.random() * 5}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`
          }} />
        ))}
      </div>

      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(211, 84, 0, 0.5); }
          50% { box-shadow: 0 0 30px rgba(211, 84, 0, 0.8); }
        }
      `}</style>

      <div style={{ height: 70 }} />

      {/* Hero Section */}
      <section style={{
        maxWidth: "1200px",
        margin: "40px auto 60px",
        padding: "50px 30px",
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: "30px",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
        position: "relative",
        zIndex: 1,
        border: "3px solid #D35400",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          background: "#D35400",
          borderRadius: "50%",
          opacity: 0.1
        }} />
        <div style={{
          position: "absolute",
          bottom: "-30px",
          left: "-30px",
          width: "150px",
          height: "150px",
          background: "#1E6F5C",
          borderRadius: "50%",
          opacity: 0.1
        }} />
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
          fontSize: "3rem"
        }}>
          <FaTree style={{ color: "#1E6F5C" }} />
          <FaTree style={{ color: "#D35400" }} />
          <FaTree style={{ color: "#1E6F5C" }} />
        </div>
        
        <h1 style={{
          fontWeight: 900,
          fontSize: "3rem",
          background: "linear-gradient(45deg, #D35400, #1E6F5C)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "15px",
          animation: "float 3s ease-in-out infinite"
        }}>
          {t.heroTitle}
        </h1>
        
        <h2 style={{
          color: "#1E6F5C",
          fontWeight: 600,
          fontSize: "1.5rem",
          marginBottom: "25px"
        }}>
          {t.heroSubtitle}
        </h2>
        
        <p style={{
          fontSize: "1.2rem",
          lineHeight: 1.8,
          marginBottom: "30px",
          color: "#333",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 20px"
        }}>
          {t.heroDesc}
        </p>
        
        <Link 
          to="/contact" 
          style={{
            display: "inline-block",
            padding: "18px 50px",
            background: "linear-gradient(45deg, #D35400, #FF8C00)",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.2rem",
            borderRadius: "50px",
            transition: "all 0.3s ease",
            animation: "glow 2s infinite",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(211, 84, 0, 0.3)"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 15px 35px rgba(211, 84, 0, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 10px 30px rgba(211, 84, 0, 0.3)";
          }}
        >
          {t.heroCTA}
        </Link>
      </section>

      {/* Main Banner */}
      <section style={{
        maxWidth: "1400px",
        margin: "60px auto",
        padding: "0 20px",
        position: "relative",
        zIndex: 1
      }}>
        <div style={{
          position: "relative",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
        }}>
          <img
            src={imgs.gen}
            alt="Christmas General Promotion"
            onClick={() => window.open(imgs.gen, "_blank")}
            style={{
              width: "100%",
              height: "auto",
              minHeight: "400px",
              objectFit: "cover",
              cursor: "pointer",
              transition: "transform 0.5s ease"
            }}
            onMouseOver={(e) => e.target.style.transform = "scale(1.02)"}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          />
          <div style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(211, 84, 0, 0.9)",
            color: "white",
            padding: "10px 25px",
            borderRadius: "50px",
            fontWeight: "bold",
            fontSize: "1.1rem"
          }}>
            {isVN ? "ƯU ĐÃI GIỚI HẠN" : "LIMITED TIME"}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        maxWidth: "1400px",
        margin: "80px auto",
        padding: "0 20px",
        position: "relative",
        zIndex: 1
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
          marginBottom: "60px"
        }}>
          {t.sections.map((service, index) => (
            <div 
              key={service.title}
              style={{
                background: "white",
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                position: "relative",
                border: `3px solid ${service.color}`,
                animation: `float ${3 + index}s ease-in-out infinite`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Ribbon */}
              {service.ribbon && (
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "-35px",
                  background: service.color,
                  color: "white",
                  padding: "8px 40px",
                  transform: "rotate(45deg)",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  zIndex: 2,
                  boxShadow: "0 3px 10px rgba(0,0,0,0.2)"
                }}>
                  {service.ribbon}
                </div>
              )}
              
              {/* Badge */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                background: service.color,
                color: "white",
                padding: "8px 20px",
                borderRadius: "50px",
                fontWeight: "bold",
                fontSize: "0.9rem",
                zIndex: 2
              }}>
                {service.badge}
              </div>

              {/* Image */}
              <div style={{
                height: "250px",
                overflow: "hidden",
                position: "relative"
              }}>
                <img
                  src={service.img}
                  alt={service.title}
                  onClick={() => window.open(service.img, "_blank")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "zoom-in",
                    transition: "transform 0.5s ease"
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  fontSize: "2rem"
                }}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "30px" }}>
                <h3 style={{
                  color: service.color,
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                  textAlign: "center"
                }}>
                  {service.title}
                </h3>
                
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0
                }}>
                  {service.items.map((item, idx) => (
                    <li key={idx} style={{
                      padding: "10px 0",
                      borderBottom: "1px solid #eee",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}>
                      <span style={{
                        color: service.color,
                        fontWeight: "bold",
                        minWidth: "20px"
                      }}>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{
                  marginTop: "25px",
                  textAlign: "center"
                }}>
                  <Link 
                    to="/contact" 
                    style={{
                      display: "inline-block",
                      padding: "12px 35px",
                      background: `linear-gradient(45deg, ${service.color}, #D35400)`,
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                  >
                    {isVN ? "ĐẶT LỊCH NGAY" : "BOOK NOW"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Christmas Gifts Section */}
      <section style={{
        background: "linear-gradient(135deg, #1E6F5C 0%, #0F2F23 100%)",
        padding: "70px 20px",
        position: "relative",
        zIndex: 1,
        margin: "60px 0"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "30px",
          padding: "50px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: "40px"
          }}>
            <div style={{
              fontSize: "4rem",
              marginBottom: "20px",
              color: "#D35400"
            }}>
              <FaGift />
            </div>
            <h2 style={{
              color: "#1E6F5C",
              fontWeight: 900,
              fontSize: "2.5rem",
              marginBottom: "15px"
            }}>
              {t.giftTitle}
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginBottom: "40px"
          }}>
            {t.giftItems.map((item, index) => (
              <div key={index} style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                padding: "25px",
                borderRadius: "20px",
                border: "2px solid #D35400",
                textAlign: "center",
                transition: "all 0.3s ease"
              }}>
                <div style={{
                  fontSize: "2rem",
                  color: "#D35400",
                  marginBottom: "15px"
                }}>
                  {index === 0 && "🎟️"}
                  {index === 1 && "🦷"}
                  {index === 2 && "🎁"}
                  {index === 3 && "🎰"}
                </div>
                <p style={{
                  color: "#333",
                  lineHeight: 1.6,
                  fontWeight: 500
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: "center",
            padding: "25px",
            background: "linear-gradient(45deg, #D35400, #FF8C00)",
            borderRadius: "20px",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.1rem"
          }}>
            ⭐ {t.footerNote}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}