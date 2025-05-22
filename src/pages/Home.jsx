import { Link } from 'react-router-dom';
import { useState } from 'react';
import generalDentistry from '../pics/general.jpg';
import implant from '../pics/implant.jpg';
import crown from '../pics/crown.jpg';
import invisalign from '../pics/invisalign.jpg';
import { Helmet } from 'react-helmet';
import ServicesSlider from '../components/ServicesSlider';

export default function Home({ language }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // English content
  const englishContent = {
    heroTitle: "Premium Dental Care",
    heroHighlight: "Dental",
    heroSubtitle: "Experience comprehensive dental services with our expert team.",
    servicesTitle: "ORAL HEALTH SERVICES",
    bookButton: "Book Consultation",
    bookNow: "Book Now",
    services: [
      { 
        name: "General Dentistry", 
        desc: "Routine check-ups and cleanings",
        details: "During your appointment, we utilize advanced digital X-rays to examine your teeth for decay, fractures, or infections.",
      },
      { 
        name: "Dental Implants", 
        desc: "Solution for missing teeth",
        details: "Titanium implants inserted into your jawbone to substitute lost tooth roots and prevent bone deterioration.",
      },
      { 
        name: "Dental Crowns", 
        desc: "Porcelain tooth coverings",
        details: "Helps relieve dental pain from affected teeth and improves your smile's appearance.",
      },
      { 
        name: "Invisalign", 
        desc: "Clear teeth aligners",
        details: "Transparent plastic aligners gradually move teeth into proper alignment, removable for eating and cleaning.",
      }
    ],
    locationTitle: "Our Location",
    address: "62B Phạm Ngọc Thạch, Ward 6, District 3, Ho Chi Minh City",
    metaTitle: "Premium Dental Care in Ho Chi Minh City | General & Cosmetic Dentistry",
    metaDescription: "Expert dental services including implants, crowns, Invisalign in Ho Chi Minh City. Book your appointment today for quality dental care.",
  };

  // Vietnamese content
  const vietnameseContent = {
    heroTitle: "Dịch Vụ Nha Khoa Chất Lượng Cao",
    heroHighlight: "Nha Khoa",
    heroSubtitle: "Trải nghiệm dịch vụ nha khoa toàn diện với đội ngũ chuyên gia của chúng tôi.",
    servicesTitle: "DỊCH VỤ CHĂM SÓC RĂNG MIỆNG",
    bookButton: "Đặt Lịch Khám",
    bookNow: "Đặt Ngay",
    services: [
      { 
        name: "Nha Khoa Tổng Quát", 
        desc: "Khám và làm sạch răng định kỳ",
        details: "Trong quá trình khám, chúng tôi sử dụng X-quang kỹ thuật số hiện đại để kiểm tra răng của bạn về sâu răng, gãy xương hoặc nhiễm trùng.",
      },
      { 
        name: "Cấy Ghép Implant", 
        desc: "Giải pháp cho răng bị mất",
        details: "Implant titan được cấy vào xương hàm để thay thế chân răng đã mất và ngăn ngừa tiêu xương.",
      },
      { 
        name: "Mão Răng Sứ", 
        desc: "Bọc răng bằng sứ",
        details: "Giúp giảm đau răng từ các răng bị ảnh hưởng và cải thiện vẻ ngoài của nụ cười.",
      },
      { 
        name: "Invisalign", 
        desc: "Khay niềng răng trong suốt",
        details: "Khay niềng nhựa trong suốt dần dần di chuyển răng vào đúng vị trí, có thể tháo ra khi ăn uống và vệ sinh.",
      }
    ],
    locationTitle: "Vị Trí Của Chúng Tôi",
    address: "62B Phạm Ngọc Thạch, Phường 6, Quận 3, Thành phố Hồ Chí Minh",
    metaTitle: "Dịch Vụ Nha Khoa Chất Lượng Tại TP.HCM | Nha Khoa Tổng Quát & Thẩm Mỹ",
    metaDescription: "Dịch vụ nha khoa chuyên nghiệp bao gồm cấy ghép implant, mão sứ, Invisalign tại TP.HCM. Đặt lịch hẹn ngay hôm nay để chăm sóc răng miệng chất lượng.",
  };

  // Simplified Chinese content
  const simplifiedContent = {
    heroTitle: "优质牙科护理服务",
    heroHighlight: "牙科",
    heroSubtitle: "体验我们专家团队提供的全面牙科服务。",
    servicesTitle: "口腔健康服务",
    bookButton: "预约咨询",
    bookNow: "立即预约",
    services: [
      { 
        name: "普通牙科", 
        desc: "常规检查和清洁",
        details: "在您的预约期间，我们使用先进的数字X光检查您的牙齿是否有蛀牙、断裂或感染。",
      },
      { 
        name: "牙科种植", 
        desc: "缺失牙齿解决方案",
        details: "将钛植入物插入颌骨以替代失去的牙根并防止骨质恶化。",
      },
      { 
        name: "牙冠", 
        desc: "瓷牙覆盖",
        details: "帮助缓解受影响牙齿的牙痛并改善您微笑的外观。",
      },
      { 
        name: "隐适美", 
        desc: "透明牙齿矫正器",
        details: "透明塑料矫正器逐渐将牙齿移动到正确位置，可拆卸以便进食和清洁。",
      }
    ],
    locationTitle: "我们的位置",
    address: "越南胡志明市第三郡第六坊范玉石街62B号",
    metaTitle: "胡志明市优质牙科服务 | 普通牙科与美容牙科",
    metaDescription: "专业牙科服务包括种植牙、牙冠、隐适美矫正等。立即预约，享受优质牙科护理。",
  };

  const frenchContent = {
    heroTitle: "Soins Dentaires Premium",
    heroHighlight: "Dentaires",
    heroSubtitle: "Découvrez des services dentaires complets avec notre équipe d'experts.",
    servicesTitle: "SERVICES DE SANTÉ BUCCO-DENTAIRE",
    bookButton: "Prendre Rendez-vous",
    bookNow: "Réserver",
    services: [
      { 
        name: "Dentisterie Générale", 
        desc: "Examens et nettoyages de routine",
        details: "Lors de votre rendez-vous, nous utilisons des radiographies numériques avancées pour examiner vos dents contre les caries, fractures ou infections.",
      },
      { 
        name: "Implants Dentaires", 
        desc: "Solution pour dents manquantes",
        details: "Implants en titane insérés dans votre mâchoire pour remplacer les racines dentaires perdues et prévenir la détérioration osseuse.",
      },
      { 
        name: "Couronnes Dentaires", 
        desc: "Revêtements en porcelaine",
        details: "Aide à soulager la douleur dentaire des dents affectées et améliore l'apparence de votre sourire.",
      },
      { 
        name: "Invisalign", 
        desc: "Aligneurs dentaires transparents",
        details: "Des aligneurs en plastique transparent déplacent progressivement les dents dans le bon alignement, amovibles pour manger et nettoyer.",
      }
    ],
    locationTitle: "Notre Emplacement",
    address: "62B Phạm Ngọc Thạch, Ward 6, District 3, Ho Chi Minh City",
    metaTitle: "Soins Dentaires Premium à Ho Chi Minh Ville | Dentisterie Générale & Esthétique",
    metaDescription: "Services dentaires experts incluant implants, couronnes, Invisalign à Ho Chi Minh Ville. Prenez rendez-vous dès aujourd'hui pour des soins dentaires de qualité.",
  };

  // Korean content
  const koreanContent = {
    heroTitle: "프리미엄 치과 서비스",
    heroHighlight: "치과",
    heroSubtitle: "저희 전문가 팀과 함께 포괄적인 치과 서비스를 경험해보세요.",
    servicesTitle: "구강 건강 서비스",
    bookButton: "상담 예약",
    bookNow: "예약하기",
    services: [
      { 
        name: "일반 치과", 
        desc: "정기 검진 및 청소",
        details: "진료 시 고급 디지털 X-레이를 사용하여 치아의 충치, 균열 또는 감염을 검사합니다.",
      },
      { 
        name: "치과 임플란트", 
        desc: "빠진 치아 솔루션",
        details: "잃어버린 치아 뿌리를 대체하고 뼈 손상을 방지하기 위해 턱뼈에 티타늄 임플란트를 삽입합니다.",
      },
      { 
        name: "치과 크라운", 
        desc: "도자기 치아 덮개",
        details: "영향을 받은 치아의 치통을 완화하고 미소의 외관을 개선합니다.",
      },
      { 
        name: "인비절라인", 
        desc: "투명 치아 정렬기",
        details: "투명 플라스틱 정렬기가 치아를 점차적으로 올바른 위치로 이동시켜 먹고 청소할 때 제거할 수 있습니다.",
      }
    ],
    locationTitle: "우리 위치",
    address: "베트남 호치민시 3군 6동 Phạm Ngọc Thạch 62B",
    metaTitle: "호치민시 프리미엄 치과 서비스 | 일반 및 미용 치과",
    metaDescription: "임플란트, 크라운, 인비절라인 등 전문 치과 서비스. 오늘 예약하고 품질 있는 치과 치료를 받으세요.",
  };

  // Traditional Chinese content
  const traditionalContent = {
    heroTitle: "優質牙科護理服務",
    heroHighlight: "牙科",
    heroSubtitle: "體驗我們專家團隊提供的全面牙科服務。",
    servicesTitle: "口腔健康服務",
    bookButton: "預約諮詢",
    bookNow: "立即預約",
    services: [
      { 
        name: "普通牙科", 
        desc: "常規檢查和清潔",
        details: "在您的預約期間，我們使用先進的數位X光檢查您的牙齒是否有蛀牙、斷裂或感染。",
      },
      { 
        name: "牙科種植", 
        desc: "缺失牙齒解決方案",
        details: "將鈦植入物插入頜骨以替代失去的牙根並防止骨質惡化。",
      },
      { 
        name: "牙冠", 
        desc: "瓷牙覆蓋",
        details: "幫助緩解受影響牙齒的牙痛並改善您微笑的外觀。",
      },
      { 
        name: "隱適美", 
        desc: "透明牙齒矯正器",
        details: "透明塑料矯正器逐漸將牙齒移動到正確位置，可拆卸以便進食和清潔。",
      }
    ],
    locationTitle: "我們的位置",
    address: "越南胡志明市第三郡第六坊范玉石街62B號",
    metaTitle: "胡志明市優質牙科服務 | 普通牙科與美容牙科",
    metaDescription: "專業牙科服務包括種植牙、牙冠、隱適美矯正等。立即預約，享受優質牙科護理。",
  };

  const content = 
    language === 'english' ? englishContent :
    language === 'french' ? frenchContent :
    language === 'korean' ? koreanContent :
    language === 'vietnamese' ? vietnameseContent :
    language === 'simplified' ? simplifiedContent :
    traditionalContent;

  const serviceImages = [generalDentistry, implant, crown, invisalign];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (content.services.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (content.services.length - 2)) % (content.services.length - 2));
  };

  // Schema.org markup for Dental Clinic
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Premium Dental Care",
    "image": "https://yourclinic.com/logo.jpg",
    "@id": "https://yourclinic.com",
    "url": "https://yourclinic.com",
    "telephone": "+84123456789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "62B Phạm Ngọc Thạch",
      "addressLocality": "Ho Chi Minh City",
      "addressRegion": "District 3",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.783092789410368,
      "longitude": 106.69290884019306
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/yourclinic",
      "https://www.instagram.com/yourclinic"
    ]
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7]">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content="dental, dentist, dental clinic, implants, crowns, Invisalign, Ho Chi Minh City" />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourclinic.com" />
        <meta property="og:image" content="https://yourclinic.com/og-image.jpg" />
        <meta property="og:locale" content={language === 'vietnamese' ? 'vi_VN' : language === 'french' ? 'fr_FR' : language === 'korean' ? 'ko_KR' : language === 'simplified' ? 'zh_CN' : language === 'traditional' ? 'zh_TW' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourclinic.com" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-28 px-4 max-w-6xl mx-auto text-center">
        <h1 
          className="text-5xl font-bold text-[#1f2937] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          itemProp="name"
        >
          {content.heroTitle.split(content.heroHighlight)[0]} 
          <span className="text-[#d4af37]" itemProp="makesOffer"> {content.heroHighlight} </span>
          {content.heroTitle.split(content.heroHighlight)[1]}
        </h1>
        <p 
          className="text-xl text-[#6b7280] mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Cormorant', serif" }}
          itemProp="description"
        >
          {content.heroSubtitle}
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-4 px-10 rounded-full transition-all text-lg shadow-md hover:shadow-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
          aria-label={`${content.bookButton} for dental services`}
        >
          {content.bookButton}
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#fffaf0]">
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 
            className="text-3xl font-bold text-[#1f2937] mb-12 text-center border-b-2 border-[#d4af37] pb-2 inline-block"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.servicesTitle}
          </h2>
          
          <ServicesSlider 
            services={content.services}
            serviceImages={serviceImages}
            bookNowText={content.bookNow}
            language={language}
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-[#f7f2e7]" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            className="text-3xl font-bold text-[#1f2937] mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.locationTitle}
          </h2>
          
          <div className="relative overflow-hidden rounded-xl border-4 border-[#1f2937] shadow-xl">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.736219916501!2d106.69290884019306!3d10.783092789410368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f36962c096f%3A0x8a34a0035dd5f6c8!2zNjJiIFBo4bqhbSBOZ-G7jWMgVGjhuqFjaCwgUGjGsOG7nW5nIDYsIFF14bqtbiAzLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1747347945896!5m2!1sen!2sus"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental Clinic Location"
                aria-label="Google Maps location of our dental clinic"
                itemProp="hasMap"
              />
            </div>
          </div>

          <p 
            className="text-center text-gray-600 mt-4"
            style={{ fontFamily: "'Cormorant', serif" }}
            itemProp="address"
          >
            {content.address}
          </p>
        </div>
      </section>
    </main>
  );
}