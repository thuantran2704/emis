import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { 
  Sparkles, 
  Clock, 
  Shield, 
  Award, 
  CheckCircle, 
  Calendar,
  Star,
  Zap,
  Trophy,
  Users,
  Phone,
  MapPin,
  Globe,
  ChevronRight
} from "lucide-react";

// Import the images
import viImg from "../pics/tet/vie-whitening.png";
import enImg from "../pics/tet/eng-whitening.png";

const WhiteningAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  const adImage = isVI ? viImg : enImg;

  // Vietnamese content
  const viContent = {
    metaTitle: "Tẩy Trắng Răng Đón Tết 2026 - Ưu Đãi 1.5 Triệu | Emis Dental",
    metaDescription: "Tẩy trắng răng công nghệ Blue Laser giá chỉ 1.5 triệu. Ưu đãi Tết Bính Ngọ 2026, trắng sáng ngay sau 60 phút tại Emis Dental.",
    
    heroTitle: "TẨY TRẮNG RĂNG ĐÓN TẾT BÍNH NGỌ 2026",
    heroSubtitle: "GIẢM NGAY 1 TRIỆU ĐỒNG – NỤ CƯỜI RẠNG RỠ CHỈ SAU 60 PHÚT",
    heroDescription: "Tết Nguyên Đán 2026 đang đến rất gần! Đây là thời điểm chúng ta dọn dẹp nhà cửa, sắm sửa quần áo mới và đặc biệt là chăm chút cho vẻ ngoài để đón một năm mới may mắn, hanh thông.",
    intro1: "Trong những cuộc gặp gỡ đầu năm, một nụ cười trắng sáng không chỉ giúp bạn tự tin tỏa sáng trong mọi khung hình mà còn là biểu tượng của sự tươi mới và năng lượng tích cực.",
    intro2: "Nhằm giúp khách hàng sở hữu nụ cười rạng ngời với mức chi phí tối ưu nhất, Emis Dental hân hạnh mang đến chương trình ưu đãi lớn nhất năm: 'Tẩy Trắng Răng Tết 2026 – Trắng Sáng Tức Thì, Tự Tin Đón Xuân'.",
    
    sections: [
      {
        title: "TẠI SAO NÊN TẨY TRẮNG RĂNG NGAY TRƯỚC DỊP TẾT?",
        icon: <Calendar className="w-6 h-6" />,
        content: "Tết là dịp của những buổi tiệc tùng, gặp gỡ bạn bè và người thân. Việc sở hữu một hàm răng xỉn màu do thói quen uống trà, cà phê hay thực phẩm có màu sẽ khiến bạn cảm thấy e dè khi cười nói. Tẩy trắng răng chuyên nghiệp là giải pháp 'cứu cánh' hoàn hảo vì:",
        points: [
          "Thay diện mạo mới cho nụ cười: Giúp răng bật tông rõ rệt, mang lại vẻ trẻ trung và rạng rỡ",
          "Tự tin trong mọi khung hình: Chụp ảnh kỷ niệm ngày Tết không còn phải lo lắng về hàm răng kém sắc",
          "Khởi đầu năm mới thuận lợi: Theo quan niệm dân gian, diện mạo tươi sáng sẽ mang lại nhiều may mắn và tài lộc cho cả năm"
        ]
      },
      {
        title: "CÔNG NGHỆ TẨY TRẮNG RĂNG BLUE LASER TẠI EMIS DENTAL CÓ GÌ ĐẶC BIỆT?",
        icon: <Zap className="w-6 h-6" />,
        content: "Tại Emis Dental, chúng tôi không chỉ chú trọng vào kết quả làm trắng mà còn đặt sức khỏe men răng của khách hàng lên hàng đầu. Công nghệ Blue Laser kết hợp cùng thuốc tẩy trắng Pola Office (Made in Australia) cao cấp là sự lựa chọn tối ưu hiện nay.",
        points: [
          "Hiệu quả vượt trội sau 1 lần thực hiện: Khác với các phương pháp tẩy trắng tại nhà mất nhiều thời gian, công nghệ Blue Laser giúp tẩy trắng các mảng tối màu lâu ngày chỉ trong khoảng 45 - 60 phút. Bạn sẽ thấy răng trắng sáng bật tông ngay sau khi bước xuống khỏi ghế nha khoa.",
          "Sử dụng Gel Pola Office chính hãng (Úc): Chúng tôi sử dụng loại thuốc tẩy trắng Pola Office – thương hiệu danh tiếng từ Úc. Loại gel này có nồng độ an toàn, chứa các thành phần hỗ trợ bảo vệ men răng và giảm thiểu tình trạng ê buốt tối đa so với các loại thuốc thông thường trên thị trường.",
          "Công nghệ đèn chiếu Laser hiện đại, an toàn: Ánh sáng Blue Laser chỉ tác động lên các phân tử màu mà không làm ảnh hưởng đến cấu trúc răng hay nướu. Quá trình thực hiện diễn ra nhẹ nhàng, được kiểm soát chặt chẽ bởi các bác sĩ chuyên khoa giàu kinh nghiệm."
        ]
      }
    ],
    
    pricing: {
      title: "CHI TIẾT CHƯƠNG TRÌNH ƯU ĐÃI TẨY TRẮNG RĂNG TẾT 2026",
      service: "Tẩy trắng răng chiếu đèn Blue Laser",
      originalPrice: "3.000.000đ",
      discountPrice: "1.500.000đ",
      period: "Từ ngày 01/01/2026 đến hết ngày 15/02/2026",
      note: "Áp dụng cho tất cả khách hàng đăng ký lịch hẹn trực tiếp qua Website hoặc Fanpage."
    },
    
    process: {
      title: "QUY TRÌNH TẨY TRẮNG RĂNG CHUẨN Y KHOA TẠI EMIS DENTAL",
      description: "Để đảm bảo kết quả tốt nhất và sự thoải mái cho khách hàng, quy trình tại Emis Dental được thực hiện nghiêm ngặt qua các bước:",
      steps: [
        "Thăm khám và tư vấn: Bác sĩ kiểm tra tình trạng răng miệng, xác định nguyên nhân nhiễm màu và tư vấn mức độ trắng có thể đạt được.",
        "Vệ sinh răng miệng: Tiến hành lấy cao răng và đánh bóng để thuốc tẩy trắng thẩm thấu tốt nhất.",
        "Cách ly nướu: Sử dụng dụng cụ bảo vệ môi và gel cách ly nướu để đảm bảo an toàn tuyệt đối cho vùng mô mềm.",
        "Thực hiện tẩy trắng: Thoa thuốc Pola Office và chiếu đèn Blue Laser trong khoảng 20-30 phút (tùy tình trạng).",
        "Hoàn tất và hướng dẫn: Bác sĩ kiểm tra kết quả, so sánh tông màu trước - sau và hướng dẫn cách chăm sóc để giữ màu bền lâu."
      ]
    },
    
    features: {
      title: "TẠI SAO KHÁCH HÀNG TIN TƯỞNG LỰA CHỌN EMIS DENTAL?",
      items: [
        {
          title: "Đội ngũ bác sĩ chính quy",
          description: "100% bác sĩ có chứng chỉ hành nghề, tận tâm và tỉ mỉ",
          icon: <Users className="w-8 h-8" />
        },
        {
          title: "Cơ sở vật chất hiện đại",
          description: "Không gian phòng khám vô trùng, máy móc nhập khẩu hoàn toàn",
          icon: <Award className="w-8 h-8" />
        },
        {
          title: "Dịch vụ tận tâm",
          description: "Chế độ chăm sóc hậu mãi chu đáo, hỗ trợ khách hàng 24/7",
          icon: <Star className="w-8 h-8" />
        },
        {
          title: "An toàn tuyệt đối",
          description: "Sử dụng vật liệu chính hãng, đạt chuẩn quốc tế",
          icon: <Shield className="w-8 h-8" />
        }
      ]
    },
    
    cta: {
      main: "Đừng để hàm răng xỉn màu làm bạn mất tự tin trong dịp Tết này! Chỉ với một buổi hẹn ngắn, nụ cười của bạn sẽ được 'thay áo mới' rạng rỡ và cuốn hút hơn bao giờ hết.",
      question: "Bạn đã sẵn sàng để sở hữu nụ cười vạn người mê đón Tết 2026?",
      button: "ĐẶT LỊCH NGAY",
      subtext: "Hoặc liên hệ hotline để được tư vấn miễn phí!"
    }
  };

  // English content
  const enContent = {
    metaTitle: "Teeth Whitening for Lunar New Year 2026 - Special Offer 1.5 Million VND | Emis Dental",
    metaDescription: "Blue Laser teeth whitening for only 1.5 million VND. Tet 2026 promotion, brighter smile in just 60 minutes at Emis Dental.",
    
    heroTitle: "TEETH WHITENING FOR LUNAR NEW YEAR 2026",
    heroSubtitle: "SAVE 1 MILLION VND – BRIGHT SMILE IN JUST 60 MINUTES",
    heroDescription: "Lunar New Year 2026 is approaching! This is the time we clean our homes, buy new clothes, and especially take care of our appearance to welcome a new year of luck and prosperity.",
    intro1: "During New Year gatherings, a bright white smile not only helps you shine confidently in every photo but also symbolizes freshness and positive energy.",
    intro2: "To help customers achieve a radiant smile at the most optimal cost, Emis Dental proudly presents the biggest promotion of the year: 'Tet 2026 Teeth Whitening – Instant Brightness, Confidently Welcome Spring'.",
    
    sections: [
      {
        title: "WHY WHITEN YOUR TEETH BEFORE TET HOLIDAY?",
        icon: <Calendar className="w-6 h-6" />,
        content: "Tet is the season of parties and gatherings with friends and family. Having discolored teeth due to habits like drinking tea, coffee, or consuming colored foods can make you feel self-conscious when smiling and speaking. Professional teeth whitening is the perfect solution because:",
        points: [
          "Transform your smile: Noticeably whiter teeth bring a youthful and radiant appearance",
          "Confidence in every frame: No more worrying about discolored teeth in holiday photos",
          "A prosperous new start: According to tradition, a bright appearance brings luck and fortune for the whole year"
        ]
      },
      {
        title: "WHAT'S SPECIAL ABOUT BLUE LASER TEETH WHITENING AT EMIS DENTAL?",
        icon: <Zap className="w-6 h-6" />,
        content: "At Emis Dental, we focus not only on whitening results but also prioritize our customers' dental enamel health. Blue Laser technology combined with premium Pola Office whitening gel (Made in Australia) is the optimal choice today.",
        points: [
          "Outstanding results after one session: Unlike at-home whitening methods that take a long time, Blue Laser technology removes long-term stains in just 45-60 minutes. You'll see noticeably whiter teeth immediately after leaving the dental chair.",
          "Genuine Pola Office Gel (Australia): We use Pola Office whitening gel – a reputable brand from Australia. This gel has a safe concentration, containing ingredients that help protect tooth enamel and minimize sensitivity compared to ordinary products on the market.",
          "Modern, safe Laser technology: Blue Laser light only targets color molecules without affecting tooth structure or gums. The procedure is gentle and closely monitored by experienced specialist dentists."
        ]
      }
    ],
    
    pricing: {
      title: "TET 2026 TEETH WHITENING PROMOTION DETAILS",
      service: "Blue Laser teeth whitening",
      originalPrice: "3,000,000 VND",
      discountPrice: "1,500,000 VND",
      period: "From January 1, 2026 to February 15, 2026",
      note: "Applicable to all customers who book appointments directly through Website or Fanpage."
    },
    
    process: {
      title: "STANDARD MEDICAL TEETH WHITENING PROCEDURE AT EMIS DENTAL",
      description: "To ensure the best results and comfort for customers, the procedure at Emis Dental is strictly followed through these steps:",
      steps: [
        "Examination and consultation: The doctor examines oral condition, identifies causes of discoloration, and advises on achievable whitening level.",
        "Oral hygiene: Perform scaling and polishing for optimal whitening gel absorption.",
        "Gum isolation: Use lip protection tools and gum isolation gel to ensure absolute safety for soft tissues.",
        "Whitening procedure: Apply Pola Office gel and Blue Laser light for approximately 20-30 minutes (depending on condition).",
        "Completion and guidance: The doctor checks results, compares before-after color tones, and provides aftercare instructions for long-lasting color retention."
      ]
    },
    
    features: {
      title: "WHY DO CUSTOMERS TRUST AND CHOOSE EMIS DENTAL?",
      items: [
        {
          title: "Certified Dental Team",
          description: "100% licensed practicing dentists, dedicated and meticulous",
          icon: <Users className="w-8 h-8" />
        },
        {
          title: "Modern Facilities",
          description: "Sterile clinic environment, fully imported equipment",
          icon: <Award className="w-8 h-8" />
        },
        {
          title: "Dedicated Service",
          description: "Thoughtful aftercare, 24/7 customer support",
          icon: <Star className="w-8 h-8" />
        },
        {
          title: "Absolute Safety",
          description: "Genuine materials meeting international standards",
          icon: <Shield className="w-8 h-8" />
        }
      ]
    },
    
    cta: {
      main: "Don't let discolored teeth reduce your confidence this Tet holiday! With just one short appointment, your smile will get a 'new outfit' - brighter and more attractive than ever.",
      question: "Ready to have an irresistible smile for Tet 2026?",
      button: "BOOK NOW",
      subtext: "Or contact our hotline for free consultation!"
    }
  };

  const content = isVI ? viContent : enContent;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta property="og:image" content={adImage} />
      </Helmet>

      {/* Hero Banner with Ad Image */}
      <div className="relative bg-gradient-to-r from-[#2d2d5a] via-[#4b4b8f] to-[#2d2d5a] pt-24 pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 30l30 30 30-30z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-[#d4af37] to-[#ffec8b] text-[#2d2d5a] px-6 py-2 rounded-full font-bold mb-6 animate-pulse">
                <Sparkles className="w-5 h-5 mr-2" />
                {isVI ? "ƯU ĐÃI TẾT BÍNH NGỌ 2026" : "TET 2026 SPECIAL OFFER"}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {content.heroTitle}
              </h1>
              
              <p className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-6">
                {content.heroSubtitle}
              </p>
              
              <div className="mb-8">
                <p className="text-lg text-gray-200 mb-4">
                  {content.heroDescription}
                </p>
                <p className="text-gray-300">
                  {content.intro1}
                </p>
              </div>
            </div>
            
            {/* Ad Image Display */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37] via-transparent to-[#d4af37] rounded-3xl opacity-50 group-hover:opacity-70 blur-xl transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src={adImage} 
                    alt={isVI ? "Tẩy trắng răng đón Tết 2026" : "Teeth whitening for Lunar New Year 2026"}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <p className="text-gray-300 text-sm">{isVI ? "Giá gốc" : "Original Price"}</p>
                        <p className="text-gray-400 line-through text-lg">{content.pricing.originalPrice}</p>
                      </div>
                      <ChevronRight className="w-6 h-6 text-[#d4af37]" />
                      <div className="text-center">
                        <p className="text-[#d4af37] text-sm font-bold">{isVI ? "Giá ưu đãi" : "Special Price"}</p>
                        <p className="text-white text-2xl font-bold">{content.pricing.discountPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                  {isVI ? "GIẢM 50%" : "50% OFF"}
                </div>
              </div>
              
              {/* Stats under image */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Clock className="w-8 h-8 text-[#d4af37] mx-auto mb-2" />
                  <p className="text-white font-bold">60 {isVI ? "phút" : "mins"}</p>
                  <p className="text-gray-300 text-sm">{isVI ? "Thực hiện" : "Procedure"}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Shield className="w-8 h-8 text-[#d4af37] mx-auto mb-2" />
                  <p className="text-white font-bold">{isVI ? "An toàn" : "Safe"}</p>
                  <p className="text-gray-300 text-sm">{isVI ? "Tuyệt đối" : "Procedure"}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Sparkles className="w-8 h-8 text-[#d4af37] mx-auto mb-2" />
                  <p className="text-white font-bold">1 {isVI ? "lần" : "session"}</p>
                  <p className="text-gray-300 text-sm">{isVI ? "Hiệu quả" : "Effective"}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-200 mb-4">{content.intro2}</p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#d4af37] to-[#c19d30] text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {isVI ? "NHẬN TƯ VẤN MIỄN PHÍ" : "GET FREE CONSULTATION"}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Info Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#f8f5ee] to-[#fffaf0] border-2 border-[#d4af37]/20 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#4b4b8f] rounded-full flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-800">{isVI ? "Thời gian ưu đãi" : "Promotion Period"}</p>
                <p className="text-gray-600">{content.pricing.period}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-800">{isVI ? "Hotline đặt lịch" : "Booking Hotline"}</p>
                <p className="text-[#4b4b8f] font-bold">0919 100 021</p>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#4b4b8f] to-[#2d2d5a] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-shadow"
            >
              {isVI ? "ĐẶT LỊCH NGAY" : "BOOK NOW"}
            </Link>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {content.sections.map((section, idx) => (
            <section key={idx} className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4b4b8f] to-[#d4af37] rounded-xl flex items-center justify-center mr-4">
                  <div className="text-white">
                    {section.icon}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {section.title}
                </h2>
              </div>
              
              <p className="text-gray-700 text-lg mb-6">{section.content}</p>
              
              <div className="space-y-4">
                {section.points.map((point, pointIdx) => (
                  <div key={pointIdx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Pricing Section */}
          <section className="bg-gradient-to-r from-[#f8f5ee] to-[#fffaf0] border-2 border-[#d4af37]/20 rounded-3xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.pricing.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#4b4b8f] to-[#d4af37] rounded-full mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="lg:col-span-2 text-center lg:text-left">
                <p className="text-gray-600 mb-2 text-sm uppercase tracking-wider">
                  {isVI ? "Dịch vụ" : "Service"}
                </p>
                <p className="text-xl font-semibold text-gray-800">{content.pricing.service}</p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-2 text-sm uppercase tracking-wider">
                  {isVI ? "Giá gốc" : "Original Price"}
                </p>
                <div className="relative inline-block">
                  <p className="text-2xl font-bold text-gray-400 line-through">
                    {content.pricing.originalPrice}
                  </p>
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500 transform -rotate-6"></div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-2 text-sm uppercase tracking-wider">
                  {isVI ? "Giá ưu đãi" : "Special Price"}
                </p>
                <p className="text-3xl md:text-4xl font-bold text-[#d4af37]">
                  {content.pricing.discountPrice}
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center bg-red-50 text-red-700 px-4 py-2 rounded-full font-semibold">
                <Clock className="w-4 h-4 mr-2" />
                {content.pricing.period}
              </div>
              <p className="text-gray-600">{content.pricing.note}</p>
            </div>
            
            {/* Ad Image in Pricing Section */}
            <div className="mt-10 bg-white rounded-2xl p-6 shadow-inner border border-gray-200">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <img 
                    src={adImage} 
                    alt={isVI ? "Ưu đãi tẩy trắng răng Tết 2026" : "Teeth whitening Tet 2026 offer"}
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {isVI ? "Ưu đãi đặc biệt chỉ có tại Emis Dental" : "Special offer only at Emis Dental"}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {isVI 
                      ? "Chương trình ưu đãi Tết 2026 áp dụng cho tất cả khách hàng với mức giá tốt nhất trong năm. Đây là cơ hội hoàn hảo để bạn có được nụ cười trắng sáng đón Tết với chi phí tiết kiệm nhất."
                      : "Tet 2026 promotion applies to all customers with the best price of the year. This is the perfect opportunity to get a bright smile for Tet at the most affordable cost."
                    }
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">✓ {isVI ? "Không ê buốt" : "No sensitivity"}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">✓ {isVI ? "Hiệu quả ngay" : "Instant results"}</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">✓ {isVI ? "Bảo hành dài hạn" : "Long-term warranty"}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.process.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#4b4b8f] to-[#d4af37] rounded-full mx-auto"></div>
            </div>
            
            <p className="text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto">
              {content.process.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {content.process.steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 h-full hover:border-[#d4af37]/30 transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4b4b8f] to-[#d4af37] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                      {idx + 1}
                    </div>
                    <p className="font-medium text-gray-800 text-center">{step}</p>
                  </div>
                  
                  {idx < content.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ChevronRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-gradient-to-r from-[#f0f4ff] to-[#f8f5ee] rounded-3xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.features.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#4b4b8f] to-[#d4af37] rounded-full mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.features.items.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4b4b8f]/10 to-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#4b4b8f]">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-[#4b4b8f] to-[#2d2d5a] rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L0 50l50 50 50-50z' fill='%23ffffff'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <Trophy className="w-16 h-16 text-[#d4af37] mx-auto mb-6" />
              
              <p className="text-xl text-gray-200 mb-6">
                {content.cta.main}
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                {content.cta.question}
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#d4af37] to-[#c19d30] text-white font-bold text-lg py-4 px-8 rounded-full shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {content.cta.button}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                
                <a
                  href="tel:0919100021"
                  className="inline-flex items-center justify-center bg-white text-[#4b4b8f] font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0919 100 021
                </a>
              </div>
              
              <p className="text-gray-300">{content.cta.subtext}</p>
            </div>
          </section>
        </div>

        {/* Contact Footer */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {isVI ? "NHA KHOA QUỐC TẾ " : "INTERNATIONAL DENTAL CLINIC "}
              <span className="text-[#d4af37]">EMIS DENTAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4b4b8f] to-[#d4af37] rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white transition-colors">
              <div className="w-14 h-14 bg-[#4b4b8f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-[#4b4b8f]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{isVI ? "Địa chỉ" : "Address"}</h3>
              <p className="text-gray-600">62B Phạm Ngọc Thạch, District 3, HCMC</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white transition-colors">
              <div className="w-14 h-14 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Hotline</h3>
              <p className="text-lg font-bold text-[#4b4b8f]">0919 100 021</p>
              <p className="text-lg font-bold text-[#4b4b8f]">0768 117 068</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white transition-colors">
              <div className="w-14 h-14 bg-[#4b4b8f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-[#4b4b8f]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Website</h3>
              <a 
                href="https://www.emisdental.com" 
                className="text-[#d4af37] hover:underline font-medium block"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.emisdental.com
              </a>
              <p className="text-gray-600 mt-2">8:00 – 20:00 {isVI ? "(Tất cả các ngày)" : "(All days)"}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhiteningAd;