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
      <section style={{
        maxWidth: "1100px",
        margin: "40px auto 20px",
        padding: "0 20px",
        textAlign: "center",
      }}>
        <h1 style={{ fontWeight: 900, color: "#d35400", marginBottom: 10 }}>
          {t.heroTitle}
        </h1>
        <p style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: 18 }}>
          {t.heroDesc}
        </p>
        <p style={{ maxWidth: 900, margin: "0 auto", lineHeight: 1.7, color: "#555" }}>
          {isVN
            ? "Giáng Sinh này, Emis Dental mang đến những ưu đãi đặc biệt giúp bạn và gia đình chăm sóc răng miệng toàn diện với chi phí tiết kiệm nhất. Số lượng ưu đãi có hạn – áp dụng trong thời gian ngắn."
            : "This Christmas, Emis Dental brings exclusive offers designed to help you and your family achieve healthy, confident smiles at exceptional value. Limited quantities available during the holiday season."}
        </p>
        <div style={{ marginTop: 25 }}>
          <Link to="/contact" className="cta-button pulse-animation">{t.heroCTA}</Link>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
