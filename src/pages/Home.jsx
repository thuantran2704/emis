import { Link } from 'react-router-dom';
import { useState } from 'react';
import generalDentistry from '../pics/general.jpg';
import implant from '../pics/implant.jpg';
import crown from '../pics/crown.jpg';
import invisalign from '../pics/invisalign.jpg';

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
    testimonialsTitle: "Patient Testimonials",
    testimonials: [
      {
        quote: "The best dental care I've ever experienced. Professional and painless!",
        author: "Michael Johnson"
      },
      {
        quote: "My smile has never looked better. Thank you for your excellent work!",
        author: "Sarah Williams"
      }
    ]
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
    testimonialsTitle: "Đánh Giá Từ Bệnh Nhân",
    testimonials: [
      {
        quote: "Dịch vụ nha khoa tốt nhất tôi từng trải nghiệm. Chuyên nghiệp và không đau đớn!",
        author: "Nguyễn Văn A"
      },
      {
        quote: "Nụ cười của tôi chưa bao giờ đẹp như thế này. Cảm ơn các bạn!",
        author: "Trần Thị B"
      }
    ]
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
    testimonialsTitle: "患者评价",
    testimonials: [
      {
        quote: "这是我经历过最好的牙科护理。专业且无痛！",
        author: "张伟"
      },
      {
        quote: "我的笑容从未如此美好。感谢你们的出色工作！",
        author: "李娜"
      }
    ]
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
    testimonialsTitle: "患者評價",
    testimonials: [
      {
        quote: "這是我經歷過最好的牙科護理。專業且無痛！",
        author: "張偉"
      },
      {
        quote: "我的笑容從未如此美好。感謝你們的出色工作！",
        author: "李娜"
      }
    ]
  };

  const content = 
    language === 'english' ? englishContent :
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

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7]">
      {/* Hero Section */}
      <section className="py-28 px-4 max-w-6xl mx-auto text-center">
        <h1 
          className="text-5xl font-bold text-[#1f2937] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {content.heroTitle.split(content.heroHighlight)[0]} 
          <span className="text-[#d4af37]"> {content.heroHighlight} </span>
          {content.heroTitle.split(content.heroHighlight)[1]}
        </h1>
        <p 
          className="text-xl text-[#6b7280] mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Cormorant', serif" }}
        >
          {content.heroSubtitle}
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-4 px-10 rounded-full transition-all text-lg shadow-md hover:shadow-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
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
          
          <div className="relative overflow-hidden">
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-3 rounded-full shadow-md hover:bg-[#c19d30] transition"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-3 rounded-full shadow-md hover:bg-[#c19d30] transition"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider Container */}
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${currentIndex * (100/3)}%))` }}>
              {content.services.map((service, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="group h-96 [perspective:1000px]">
                    <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      {/* Front of Card */}
                      <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col">
                        <div className="h-3/4 overflow-hidden">
                          <img 
                            src={serviceImages[index]} 
                            alt={service.name}
                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="h-1/4 bg-[#f7f2e7] p-3 flex flex-col items-center justify-center">
                          <h3 
                            className="text-lg font-bold text-[#1f2937] text-center"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {service.name}
                          </h3>
                          <p 
                            className="text-[#6b7280] text-sm text-center"
                            style={{ fontFamily: "'Cormorant', serif" }}
                          >
                            {service.desc}
                          </p>
                        </div>
                      </div>
                      
                      {/* Back of Card */}
                      <div className="absolute inset-0 bg-[#d4af37] p-4 rounded-lg flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
                        <h3 
                          className="text-lg font-bold text-[#1f2937] mb-2 text-center"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {service.name}
                        </h3>
                        <p 
                          className="text-[#1f2937] text-sm text-center mb-4"
                          style={{ fontFamily: "'Cormorant', serif" }}
                        >
                          {service.details}
                        </p>
                        <Link 
                          to="/contact" 
                          className="bg-[#1f2937] text-[#f7f2e7] px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {content.bookNow}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({length: content.services.length - 2}).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#d4af37]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            className="text-3xl font-bold text-[#1f2937] mb-12 text-center border-b-2 border-[#d4af37] pb-2 inline-block"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.testimonialsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#fffaf0] p-8 rounded-lg shadow-md">
                <p 
                  className="text-[#1f2937] italic mb-4"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  "{testimonial.quote}"
                </p>
                <p 
                  className="text-[#d4af37] font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-[#f7f2e7]">
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
              />
            </div>
          </div>

          <p 
            className="text-center text-gray-600 mt-4"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {content.address}
          </p>
        </div>
      </section>
    </main>
  );
}