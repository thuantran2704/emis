import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { 
  Sparkles, 
  Star,
  Trophy,
  Gift,
  Calendar,
  Award,
  CheckCircle,
  Phone,
  ChevronRight,
  ArrowRight,
  Users,
  Shield,
  Clock,
  Heart,
  Smile,
  Zap,
  TrendingUp,
  Sun,
  Activity,
  Gem
} from "lucide-react";

// Import images
import viImg from "../pics/tet/vie-general.png";
import enImg from "../pics/tet/eng-general.png";

const GenAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  const adImage = isVI ? viImg : enImg;

  // Vietnamese content - CORRECTED based on provided info
  const viContent = {
    metaTitle: "Ưu Đãi Tết Bính Ngọ 2026 - Tổng Hợp 4 Dịch Vụ | Emis Dental",
    metaDescription: "Tổng hợp ưu đãi Tết 2026: Tẩy trắng giảm 1.5 triệu, Implant giảm đến 60%, Bọc sứ giảm 40%, Niềng răng giảm 3 triệu tại Emis Dental",
    
    heroTitle: "CHÀO XUÂN BÍNH NGỌ 2026 - RẠNG NGỜI NỤ CƯỜI VIỆT",
    heroDescription: "Năm mới, nụ cười mới! Emis Dental triển khai chương trình ưu đãi đặc biệt Tết Nguyên Đán 2026 với 4 dịch vụ chính giảm sâu chưa từng có.",
    intro: "Khởi đầu năm mới bằng một nụ cười tự tin và tỏa sáng. Chỉ với một buổi hẹn, nụ cười của bạn sẽ được 'thay áo mới' rạng rỡ đón Tết!",
    
    promoTitle: "TỔNG HỢP ƯU ĐÃI ĐẶC BIỆT TẾT BÍNH NGỌ 2026",
    promoSubtitle: "Chương trình áp dụng từ 01/01/2026 đến 15/02/2026",
    promoNote: "Ưu đãi có số lượng giới hạn - Đăng ký sớm để giữ chỗ!",
    
    offers: [
      {
        title: "TẨY TRẮNG RĂNG BLUE LASER",
        discount: "GIẢM 1.5 TRIỆU",
        originalPrice: "3.000.000đ",
        finalPrice: "1.500.000đ",
        description: "Công nghệ Blue Laser + Gel Pola Office (Úc). Trắng sáng sau 45-60 phút",
        features: [
          "Hiệu quả ngay sau 1 lần",
          "Sử dụng Gel Pola Office chính hãng",
          "Không ê buốt, an toàn tuyệt đối"
        ],
        icon: <Sun className="w-8 h-8" />,
        link: "/whiteningAd",
        color: "from-cyan-500 to-blue-500",
        highlight: true
      },
      {
        title: "TRỒNG RĂNG IMPLANT",
        discount: "GIẢM ĐẾN 60%",
        originalPrice: "Giá gốc",
        finalPrice: "Từ 8.900.000đ/trụ",
        description: "Hiossen (Mỹ), Straumann (Thụy Sĩ), ETK (Pháp), Biotem (Hàn Quốc)",
        features: [
          "Trụ Hiossen Mỹ: 8.900.000đ/trụ",
          "Giảm 2tr cho dòng cao cấp",
          "All-on-4 giảm 20%"
        ],
        icon: <Shield className="w-8 h-8" />,
        link: "/implantAd",
        color: "from-amber-600 to-orange-500",
        highlight: true
      },
      {
        title: "BỌC RĂNG SỨ CAO CẤP",
        discount: "GIẢM ĐẾN 40%",
        originalPrice: "Giá gốc",
        finalPrice: "Ưu đãi đặc biệt",
        description: "Veneer IPS e.max, Zirconia Đức, Cercon HT Mỹ",
        features: [
          "Veneer IPS e.max: Giảm 30%",
          "Zirconia Đức: Giảm 40%",
          "Combo 5 răng: Giảm thêm 5%"
        ],
        icon: <Gem className="w-8 h-8" />,
        link: "/crownAd",
        color: "from-purple-500 to-pink-500",
        highlight: true
      },
      {
        title: "NIỀNG RĂNG CHỈNH NHA",
        discount: "GIẢM 3 TRIỆU",
        originalPrice: "Giá gốc",
        finalPrice: "Ưu đãi đặc biệt",
        description: "Mắc cài kim loại & mắc cài sứ thẩm mỹ",
        features: [
          "Áp dụng cả 2 phương pháp",
          "Bác sĩ chuyên khoa chỉnh nha",
          "Phác đồ cá nhân hóa"
        ],
        icon: <Smile className="w-8 h-8" />,
        link: "/orthoAd",
        color: "from-emerald-500 to-green-500",
        highlight: true
      }
    ],
    
    highlights: {
      title: "ĐIỂM NỔI BẬT CỦA TỪNG DỊCH VỤ",
      services: [
        {
          name: "Tẩy Trắng",
          points: [
            "Công nghệ Blue Laser hiện đại",
            "Gel Pola Office nhập từ Úc",
            "Trắng sáng tức thì sau 60 phút"
          ]
        },
        {
          name: "Implant",
          points: [
            "Trụ chính hãng từ Mỹ, châu Âu",
            "CT ConeBeam 3D chẩn đoán chính xác",
            "Bảo hành lâu dài"
          ]
        },
        {
          name: "Bọc Sứ",
          points: [
            "Sứ cao cấp Đức, Mỹ, Thụy Sĩ",
            "Thiết kế nụ cười 3D",
            "Bảo tồn răng thật tối đa"
          ]
        },
        {
          name: "Niềng Răng",
          points: [
            "Bác sĩ chuyên khoa chỉnh nha",
            "Mắc cài chính hãng",
            "Lộ trình rõ ràng từng giai đoạn"
          ]
        }
      ]
    },
    
    whyChoose: {
      title: "TẠI SAO HÀNG NGÀN KHÁCH HÀNG TIN CHỌN EMIS DENTAL?",
      points: [
        {
          title: "Đội ngũ bác sĩ chính quy",
          description: "100% bác sĩ có chứng chỉ hành nghề, kinh nghiệm trên 10 năm",
          icon: <Users className="w-6 h-6" />,
          stat: "100%"
        },
        {
          title: "Công nghệ hiện đại",
          description: "Trang thiết bị nhập khẩu từ Châu Âu, Mỹ, Hàn Quốc",
          icon: <Zap className="w-6 h-6" />,
          stat: "Nhập khẩu"
        },
        {
          title: "Vật liệu chính hãng",
          description: "Sử dụng vật liệu cao cấp từ các thương hiệu danh tiếng thế giới",
          icon: <Award className="w-6 h-6" />,
          stat: "Chính hãng"
        },
        {
          title: "Bảo hành dài hạn",
          description: "Chính sách bảo hành từ 5 năm đến trọn đời tùy dịch vụ",
          icon: <Shield className="w-6 h-6" />,
          stat: "Trọn đời"
        }
      ]
    },
    
    timeline: {
      title: "LỘ TRÌNH ƯU ĐÃI TẾT 2026",
      description: "Đăng ký càng sớm, ưu đãi càng lớn",
      steps: [
        {
          period: "1-15/1/2026",
          title: "Đăng ký sớm",
          description: "Nhận ưu đãi tốt nhất + quà tặng đặc biệt",
          badge: "TỐT NHẤT"
        },
        {
          period: "16-31/1/2026",
          title: "Giai đoạn vàng",
          description: "Ưu đãi hấp dẫn, số lượng còn nhiều",
          badge: "NÊN ĐĂNG KÝ"
        },
        {
          period: "1-15/2/2026",
          title: "Cuối chương trình",
          description: "Đăng ký trước Tết, ưu đãi có hạn",
          badge: "SẮP KẾT THÚC"
        }
      ]
    },
    
    process: {
      title: "QUY TRÌNH ĐƠN GIẢN - HIỆU QUẢ CAO",
      steps: [
        { number: "01", title: "Đăng ký tư vấn", description: "Qua Website, Fanpage hoặc Hotline" },
        { number: "02", title: "Thăm khám miễn phí", description: "Bác sĩ chuyên khoa tư vấn" },
        { number: "03", title: "Lên kế hoạch điều trị", description: "Phác đồ cá nhân hóa" },
        { number: "04", title: "Thực hiện điều trị", description: "Bởi đội ngũ chuyên gia" },
        { number: "05", title: "Chăm sóc hậu mãi", description: "Theo dõi & bảo hành dài hạn" }
      ]
    },
    
    cta: {
      title: "ĐĂNG KÝ NGAY - TẶNG QUÀ ĐẦU XUÂN",
      description: "Liên hệ ngay để được tư vấn MIỄN PHÍ và nhận ưu đãi đặc biệt cùng quà tặng hấp dẫn",
      button: "ĐẶT LỊCH TƯ VẤN MIỄN PHÍ NGAY",
      hotline: "0919 100 021",
      subtext: "Ưu đãi có số lượng giới hạn - Đừng bỏ lỡ cơ hội vàng!"
    }
  };

  // English content - CORRECTED based on provided info
  const enContent = {
    metaTitle: "Tet Binh Ngo 2026 Promotions - All 4 Services Summary | Emis Dental",
    metaDescription: "Tet 2026 promotions summary: Teeth whitening 1.5M discount, Implant up to 60% off, Dental crowns 40% off, Braces 3M discount at Emis Dental",
    
    heroTitle: "WELCOME SPRING BINH NGO 2026 - SHINING VIETNAMESE SMILE",
    heroDescription: "New year, new smile! Emis Dental launches special Tet 2026 promotion program with deep discounts on 4 main services.",
    intro: "Start the new year with a confident and radiant smile. With just one appointment, your smile will get a 'new outfit' to welcome Tet!",
    
    promoTitle: "SPECIAL TET BINH NGO 2026 PROMOTIONS SUMMARY",
    promoSubtitle: "Program valid from January 1, 2026 to February 15, 2026",
    promoNote: "Limited offers - Register early to secure your spot!",
    
    offers: [
      {
        title: "BLUE LASER TEETH WHITENING",
        discount: "1.5M DISCOUNT",
        originalPrice: "3,000,000đ",
        finalPrice: "1,500,000đ",
        description: "Blue Laser technology + Pola Office Gel (Australia). Whiten in 45-60 minutes",
        features: [
          "Effective after 1 session",
          "Genuine Pola Office Gel",
          "No sensitivity, absolutely safe"
        ],
        icon: <Sun className="w-8 h-8" />,
        link: "/whiteningAd",
        color: "from-cyan-500 to-blue-500",
        highlight: true
      },
      {
        title: "DENTAL IMPLANT",
        discount: "UP TO 60% OFF",
        originalPrice: "Original price",
        finalPrice: "From 8,900,000đ/implant",
        description: "Hiossen (USA), Straumann (Switzerland), ETK (France), Biotem (Korea)",
        features: [
          "Hiossen USA: 8,900,000đ/implant",
          "2M discount for premium brands",
          "All-on-4: 20% off"
        ],
        icon: <Shield className="w-8 h-8" />,
        link: "/implantAd",
        color: "from-amber-600 to-orange-500",
        highlight: true
      },
      {
        title: "PREMIUM DENTAL CROWNS",
        discount: "UP TO 40% OFF",
        originalPrice: "Original price",
        finalPrice: "Special offer",
        description: "IPS e.max Veneer, German Zirconia, Cercon HT USA",
        features: [
          "IPS e.max Veneer: 30% off",
          "German Zirconia: 40% off",
          "5+ teeth combo: Extra 5% off"
        ],
        icon: <Gem className="w-8 h-8" />,
        link: "/crownAd",
        color: "from-purple-500 to-pink-500",
        highlight: true
      },
      {
        title: "BRACES TREATMENT",
        discount: "3M DISCOUNT",
        originalPrice: "Original price",
        finalPrice: "Special offer",
        description: "Metal braces & ceramic aesthetic braces",
        features: [
          "Applies to both methods",
          "Orthodontic specialists",
          "Personalized treatment plan"
        ],
        icon: <Smile className="w-8 h-8" />,
        link: "/orthoAd",
        color: "from-emerald-500 to-green-500",
        highlight: true
      }
    ],
    
    highlights: {
      title: "HIGHLIGHTS OF EACH SERVICE",
      services: [
        {
          name: "Teeth Whitening",
          points: [
            "Modern Blue Laser technology",
            "Pola Office Gel imported from Australia",
            "Instant whitening after 60 minutes"
          ]
        },
        {
          name: "Implant",
          points: [
            "Genuine implants from USA, Europe",
            "CT ConeBeam 3D accurate diagnosis",
            "Long-term warranty"
          ]
        },
        {
          name: "Dental Crowns",
          points: [
            "Premium crowns from Germany, USA, Switzerland",
            "3D smile design",
            "Maximum tooth preservation"
          ]
        },
        {
          name: "Braces",
          points: [
            "Orthodontic specialists",
            "Genuine brackets",
            "Clear stage-by-stage plan"
          ]
        }
      ]
    },
    
    whyChoose: {
      title: "WHY THOUSANDS OF CUSTOMERS TRUST EMIS DENTAL?",
      points: [
        {
          title: "Certified Dental Team",
          description: "100% licensed doctors, over 10 years experience",
          icon: <Users className="w-6 h-6" />,
          stat: "100%"
        },
        {
          title: "Modern Technology",
          description: "Equipment imported from Europe, USA, Korea",
          icon: <Zap className="w-6 h-6" />,
          stat: "Imported"
        },
        {
          title: "Genuine Materials",
          description: "Using premium materials from world-renowned brands",
          icon: <Award className="w-6 h-6" />,
          stat: "Genuine"
        },
        {
          title: "Long-term Warranty",
          description: "Warranty policy from 5 years to lifetime depending on service",
          icon: <Shield className="w-6 h-6" />,
          stat: "Lifetime"
        }
      ]
    },
    
    timeline: {
      title: "TET 2026 PROMOTION TIMELINE",
      description: "The earlier you register, the better the offer",
      steps: [
        {
          period: "Jan 1-15, 2026",
          title: "Early Registration",
          description: "Get best offers + special gifts",
          badge: "BEST"
        },
        {
          period: "Jan 16-31, 2026",
          title: "Golden Period",
          description: "Attractive offers, many spots available",
          badge: "RECOMMENDED"
        },
        {
          period: "Feb 1-15, 2026",
          title: "Final Stage",
          description: "Register before Tet, limited offers",
          badge: "ENDING SOON"
        }
      ]
    },
    
    process: {
      title: "SIMPLE PROCESS - HIGH EFFECTIVENESS",
      steps: [
        { number: "01", title: "Register for consultation", description: "Via Website, Fanpage or Hotline" },
        { number: "02", title: "Free examination", description: "Specialist doctor consultation" },
        { number: "03", title: "Treatment planning", description: "Personalized treatment plan" },
        { number: "04", title: "Treatment execution", description: "By expert team" },
        { number: "05", title: "Aftercare service", description: "Follow-up & long-term warranty" }
      ]
    },
    
    cta: {
      title: "REGISTER NOW - GET NEW YEAR GIFTS",
      description: "Contact now for FREE consultation and receive special offers with attractive gifts",
      button: "BOOK FREE CONSULTATION NOW",
      hotline: "0919 100 021",
      subtext: "Limited offers - Don't miss this golden opportunity!"
    }
  };

  const content = isVI ? viContent : enContent;

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-amber-50">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-red-600 pt-24 pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-400 text-red-800 px-6 py-2 rounded-full font-bold mb-6 animate-pulse">
                <Gift className="w-5 h-5 mr-2" />
                {isVI ? "ƯU ĐÃI ĐẶC BIỆT TẾT BÍNH NGỌ" : "SPECIAL TET BINH NGO OFFERS"}
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {content.heroTitle}
              </h1>
              
              {/* Description */}
              <div className="space-y-4 mb-6">
                <p className="text-lg text-red-100">
                  {content.heroDescription}
                </p>
                <p className="text-lg text-red-100 font-semibold">
                  {content.intro}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm">{isVI ? "Dịch vụ" : "Services"}</div>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-sm">{isVI ? "Giảm tối đa" : "Max discount"}</div>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-sm">{isVI ? "Ngày áp dụng" : "Days valid"}</div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-300">
                <img 
                  src={adImage} 
                  alt={isVI ? "Tổng hợp ưu đãi Tết 2026" : "Tet 2026 Promotions Summary"} 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-500 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center text-white">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="font-semibold">{content.promoSubtitle}</span>
            </div>
            <div className="flex items-center text-white">
              <Trophy className="w-4 h-4 mr-2" />
              <span className="font-semibold">{content.promoNote}</span>
            </div>
            <Link
              to="/contact"
              className="bg-white text-red-700 font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              {isVI ? "ĐĂNG KÝ NGAY" : "REGISTER NOW"}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Offers Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {content.promoTitle}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isVI ? "Tổng hợp 4 dịch vụ chính với ưu đãi sâu nhất trong năm" : "Summary of 4 main services with deepest discounts of the year"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {content.offers.map((offer, idx) => (
              <div 
                key={idx} 
                className={`bg-gradient-to-br ${offer.color} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        {offer.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{offer.title}</h3>
                        <p className="text-white/90 text-sm mt-1">{offer.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-300">{offer.discount}</div>
                      {offer.originalPrice && (
                        <div className="text-sm opacity-90 line-through">{offer.originalPrice}</div>
                      )}
                      {offer.finalPrice && (
                        <div className="text-lg font-bold">{offer.finalPrice}</div>
                      )}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    {offer.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center mb-2 last:mb-0">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Button */}
                  <Link
                    to={offer.link}
                    className="block w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 rounded-lg text-center transition-colors flex items-center justify-center"
                  >
                    {isVI ? "XEM CHI TIẾT ƯU ĐÃI" : "VIEW OFFER DETAILS"}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border-2 border-amber-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {content.highlights.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.highlights.services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl border border-red-100 hover:border-red-300 transition-colors p-6"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-4 text-center">
                  {service.name}
                </h3>
                <ul className="space-y-3">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-3xl p-8 mb-16 border-2 border-red-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {content.whyChoose.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whyChoose.points.map((point, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-6 text-center border border-red-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl font-bold">{point.stat}</div>
                </div>
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 -mt-8 relative z-10">
                  {point.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline & Process Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Timeline */}
          <div className="bg-white rounded-3xl p-8 border-2 border-amber-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {content.timeline.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mx-auto mb-3"></div>
              <p className="text-gray-600 text-sm">{content.timeline.description}</p>
            </div>
            
            <div className="space-y-6">
              {content.timeline.steps.map((step, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {idx + 1}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-1">
                      <h3 className="font-bold text-gray-800">{step.title}</h3>
                      <span className="ml-2 bg-gradient-to-r from-red-100 to-amber-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{step.period}</p>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-3xl p-8 border-2 border-red-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {content.process.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="space-y-4">
              {content.process.steps.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  {idx < content.process.steps.length - 1 && (
                    <div className="ml-4 flex-grow h-px bg-gradient-to-r from-red-200 to-amber-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl p-8 md:p-10 shadow-xl">
            <Trophy className="w-16 h-16 text-red-700 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
              {content.cta.title}
            </h3>
            <p className="text-red-800 text-lg mb-8 max-w-2xl mx-auto">
              {content.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-red-700 to-red-600 text-white font-bold text-lg py-4 px-8 rounded-full shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {content.cta.button}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <a
                href={`tel:${content.cta.hotline}`}
                className="inline-flex items-center justify-center bg-white text-red-700 font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {content.cta.hotline}
              </a>
            </div>
            
            <p className="text-red-800 font-semibold text-sm">
              {content.cta.subtext}
            </p>
          </div>
        </div>

        {/* Contact & Service Links */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-amber-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              <span className="text-red-600">NHA KHOA QUỐC TẾ EMIS DENTAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mx-auto" />
          </div>

          {/* Service Links */}
          <div className="mb-10">
            <h3 className="text-center font-bold text-gray-800 mb-6 text-lg">
              {isVI ? "4 DỊCH VỤ CHÍNH ĐANG ƯU ĐÃI" : "4 MAIN SERVICES ON PROMOTION"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/whiteningAd"
                className="text-center p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg transition-all hover:shadow-md border border-cyan-200"
              >
                <Sun className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <div className="font-bold text-cyan-700">
                  {isVI ? "Tẩy trắng" : "Whitening"}
                </div>
                <div className="text-sm text-cyan-600">1.5M {isVI ? "giảm" : "off"}</div>
              </Link>
              <Link
                to="/implantAd"
                className="text-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg transition-all hover:shadow-md border border-amber-200"
              >
                <Shield className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="font-bold text-amber-700">
                  {isVI ? "Implant" : "Implant"}
                </div>
                <div className="text-sm text-amber-600">60% {isVI ? "giảm" : "off"}</div>
              </Link>
              <Link
                to="/crownAd"
                className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg transition-all hover:shadow-md border border-purple-200"
              >
                <Gem className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="font-bold text-purple-700">
                  {isVI ? "Bọc sứ" : "Crowns"}
                </div>
                <div className="text-sm text-purple-600">40% {isVI ? "giảm" : "off"}</div>
              </Link>
              <Link
                to="/orthoAd"
                className="text-center p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg transition-all hover:shadow-md border border-emerald-200"
              >
                <Smile className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <div className="font-bold text-emerald-700">
                  {isVI ? "Niềng răng" : "Braces"}
                </div>
                <div className="text-sm text-emerald-600">3M {isVI ? "giảm" : "off"}</div>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 border-t border-gray-200 pt-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{isVI ? "Giờ làm việc" : "Working Hours"}</h3>
              <p className="text-gray-600 text-sm">8:00 – 20:00</p>
              <p className="text-gray-600 text-sm">{isVI ? "(Tất cả các ngày)" : "(All days)"}</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Hotline</h3>
              <p className="text-lg font-bold text-red-600">0919 100 021</p>
              <p className="text-lg font-bold text-red-600">0768 117 068</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{isVI ? "Địa chỉ" : "Address"}</h3>
              <p className="text-gray-600 text-sm">62B Phạm Ngọc Thạch</p>
              <p className="text-gray-600 text-sm">District 3, HCMC</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GenAd;