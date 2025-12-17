import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm";

// Images
import implantImg from "../pics/ads/implant.jpg";
import whiteningImg from "../pics/ads/whitening.jpg";
import crownImg from "../pics/ads/crown.jpg";
import kidsImg from "../pics/ads/kids.jpg";

export default function ChristmasAdsLandingPage() {
  const language = useSelector((state) => state.language.language);

  const text = {
    english: {
      heroTitle: "CHRISTMAS SPECIAL – BRIGHT SMILE, BIG SAVINGS",
      heroDesc: "Valid from Dec 1 – Dec 31 at Emis Dental. Limited-time offers for the holiday season.",
      heroCTA: "BOOK APPOINTMENT",
      sections: [
        {
          img: implantImg,
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
          img: whiteningImg,
          title: "TEETH WHITENING",
          badge: "UP TO 40% OFF",
          items: ["In-chair professional whitening – save up to 40%"],
        },
        {
          img: crownImg,
          title: "PORCELAIN CROWNS",
          badge: "UP TO 40% OFF",
          items: [
            "Up to 40% off Zirconia & Cercon HT",
            "Extra 5% off for 10 teeth or more",
          ],
        },
        {
          img: kidsImg,
          title: "FREE CHILD TOOTH EXTRACTION",
          badge: "FREE",
          items: ["Free baby tooth extraction for children"],
        },
      ],
      gift: "Christmas Gift for all visitors: Google review + check-in lucky draw – receive vouchers from 100,000 – 500,000 VND for your next treatment.",
    },
    vietnamese: {
      heroTitle: "ĐÓN GIÁNG SINH – RĂNG ĐẸP RẠNG RỠ, ƯU ĐÃI HẾT CỠ",
      heroDesc: "Áp dụng từ 01/12 – 31/12 tại Emis Dental. Ưu đãi số lượng có hạn trong mùa lễ hội.",
      heroCTA: "ĐẶT HẸN NGAY",
      sections: [
        {
          img: implantImg,
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
          img: whiteningImg,
          title: "TẨY TRẮNG RĂNG",
          badge: "GIẢM 40%",
          items: ["Tẩy trắng răng tại ghế giảm đến 40%"],
        },
        {
          img: crownImg,
          title: "BỌC RĂNG SỨ",
          badge: "GIẢM 40%",
          items: [
            "Giảm đến 40% các dòng Zirconia, Cercon HT",
            "Giảm thêm 5% khi làm từ 10 răng trở lên",
          ],
        },
        {
          img: kidsImg,
          title: "NHỔ RĂNG SỮA MIỄN PHÍ",
          badge: "MIỄN PHÍ",
          items: ["Miễn phí nhổ răng sữa cho trẻ em"],
        },
      ],
      gift: "Quà tặng Giáng Sinh cho tất cả khách đến khám: Đánh giá Google + check-in bốc thăm nhận voucher 100.000đ – 500.000đ cho lần điều trị tiếp theo.",
    },
  };

  const t = language === "vietnamese" ? text.vietnamese : text.english;

  return (
    <div style={{ fontFamily: "'Inter','Be Vietnam Pro',sans-serif" }}>
      <div style={{ height: 70 }} />

      {/* Hero */}
      <section style={{
        maxWidth: 1100,
        margin: "20px auto",
        padding: "50px 25px",
        textAlign: "center",
        background: "linear-gradient(135deg,#fce8d4,#f8d4b5)",
        borderRadius: 24,
        boxShadow: "0 15px 35px rgba(247,148,30,.25)",
        border: "2px solid #f7941e",
      }}>
        <h1 style={{ fontWeight: 900, color: "#d35400", marginBottom: 15 }}>
          {t.heroTitle}
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: 25 }}>{t.heroDesc}</p>
        <Link to="/contact" className="cta-button pulse-animation">{t.heroCTA}</Link>
      </section>

      {/* Ads summary */}
      <section style={{ maxWidth: 1100, margin: "60px auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 25, justifyContent: "center" }}>
          {t.sections.map((s) => (
            <div key={s.title} style={{
              flex: "1 1 240px",
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 10px 30px rgba(183,141,68,.18)",
              overflow: "hidden",
              transition: "transform .3s",
            }}>
              <img src={s.img} alt={s.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div style={{ padding: 20 }}>
                <span style={{
                  background: "#e74c3c",
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 700,
                }}>{s.badge}</span>
                <h3 style={{ margin: "15px 0", color: "#a67c52" }}>{s.title}</h3>
                <ul style={{ paddingLeft: 18, lineHeight: 1.6 }}>
                  {s.items.map((i, idx) => <li key={idx}>{i}</li>)}
                </ul>
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
