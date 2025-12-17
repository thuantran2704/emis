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
      heroTitle: "CHRISTMAS SPECIAL – BRIGHT SMILE, BIG SAVINGS",
      heroDesc: "Valid from Dec 1 – Dec 31 at Emis Dental. Limited-time holiday offers.",
      heroCTA: "BOOK APPOINTMENT",
      sections: [
        {
          img: imgs.implant,
          title: "IMPLANT PROMOTION",
          badge: "LIMITED",
          items: [
            "US Implant only 8,900,000 VND",
            "FREE porcelain crown for first 10 customers",
            "Free consultation & 3D ConeBeam CT scan",
            "0% installment via credit card",
          ],
        },
        {
          img: imgs.white,
          title: "TEETH WHITENING",
          badge: "UP TO 40% OFF",
          items: ["In-chair professional whitening – save up to 40%"],
        },
        {
          img: imgs.remove,
          title: "FREE CHILD TOOTH EXTRACTION",
          badge: "FREE",
          items: ["Free baby tooth extraction for children"],
        },
      ],
      gift: "Christmas Gift for all visitors: Google review + check-in lucky draw – receive vouchers from 100,000 – 500,000 VND for your next treatment.",
    },
    vietnamese: {
      heroTitle: "ĐÓN GIÁNG SINH – RĂNG ĐẸP RẠNG RỠ, ƯU ĐÃI HẾT CỠ",
      heroDesc: "Áp dụng từ 01/12 – 31/12 tại Emis Dental. Ưu đãi số lượng có hạn.",
      heroCTA: "ĐẶT HẸN NGAY",
      sections: [
        {
          img: imgs.implant,
          title: "ƯU ĐÃI IMPLANT",
          badge: "GIỚI HẠN",
          items: [
            "Trụ Mỹ chỉ còn 8.900.000đ",
            "Tặng răng sứ cho 10 khách hàng đầu tiên",
            "Miễn phí khám & chụp phim 3D ConeBeam",
            "Hỗ trợ trả góp 0% qua thẻ tín dụng",
          ],
        },
        {
          img: imgs.white,
          title: "TẨY TRẮNG RĂNG",
          badge: "GIẢM 40%",
          items: ["Tẩy trắng răng tại ghế giảm đến 40%"],
        },
        {
          img: imgs.remove,
          title: "NHỔ RĂNG SỮA MIỄN PHÍ",
          badge: "MIỄN PHÍ",
          items: ["Miễn phí nhổ răng sữa cho trẻ em"],
        },
      ],
      gift: "Quà tặng Giáng Sinh cho tất cả khách đến khám: Đánh giá Google + check-in bốc thăm nhận voucher 100.000đ – 500.000đ cho lần điều trị tiếp theo.",
    },
  };

  const t = isVN ? text.vietnamese : text.english;

  return (
    <div style={{ fontFamily: "'Inter','Be Vietnam Pro',sans-serif" }}>
      <div style={{ height: 70 }} />

      {/* Page Title */}
      <section style={{ maxWidth: "1400px", margin: "30px auto 10px", textAlign: "center" }}>
        <h1 style={{
          fontSize: "clamp(1.8rem,4vw,2.6rem)",
          fontWeight: 900,
          color: "#d35400",
          marginBottom: 10,
        }}>
          {t.heroTitle}
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>{t.heroDesc}</p>
      </section>

      {/* Compact General Banner */}
      <section style={{
        maxWidth: "1100px",
        margin: "20px auto",
        padding: "0 16px",
      }}>
        <img
          src={imgs.gen}
          alt="Christmas promotion"
          style={{
            width: "100%",
            maxHeight: "320px",
            objectFit: "contain",
            borderRadius: 18,
            boxShadow: "0 10px 25px rgba(0,0,0,.15)",
          }}
        />
      </section>

      

      {/* Promotion Slider */}
      <section style={{ maxWidth: "1400px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{
          display: "flex",
          gap: 30,
          overflowX: "auto",
          paddingBottom: 10,
          scrollSnapType: "x mandatory",
        }}>
          {t.sections.map((s) => (
            <div key={s.title} style={{
              minWidth: 360,
              flexShrink: 0,
              scrollSnapAlign: "center",
              background: "#fff",
              borderRadius: 22,
              boxShadow: "0 15px 35px rgba(183,141,68,.22)",
              overflow: "hidden",
            }}>
              <img
                src={s.img}
                alt={s.title}
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "contain",
                  background: "#fff",
                }}
              />
              <div style={{ padding: 24 }}>
                <span style={{
                  background: "#e74c3c",
                  color: "#fff",
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: 800,
                }}>{s.badge}</span>
                <h3 style={{ margin: "18px 0 10px", color: "#a67c52", fontSize: "1.3rem" }}>
                  {s.title}
                </h3>
                <ul style={{ paddingLeft: 18, lineHeight: 1.7 }}>
                  {s.items.map((i, idx) => <li key={idx}>{i}</li>)}
                </ul>
                <div style={{ marginTop: 20 }}>
                  <Link to="/contact" className="cta-button" style={{ width: "100%", textAlign: "center" }}>
                    {t.heroCTA}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gift */}
      <section style={{
        background: "linear-gradient(135deg,#f8f1e7,#fce8d4)",
        padding: "50px 20px",
        textAlign: "center",
        borderTop: "5px solid #f7941e",
        borderBottom: "5px solid #f7941e",
      }}>
        <h2 style={{ color: "#d35400", fontWeight: 800, marginBottom: 15 }}>🎄 Christmas Gift</h2>
        <p style={{ maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>{t.gift}</p>
      </section>

      <ContactForm />
    </div>
  );
}
