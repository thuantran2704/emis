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
  TrendingUp
} from "lucide-react";

// Import images
import viImg from "../pics/tet/vie-general.png";
import enImg from "../pics/tet/eng-general.png";

const GenAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  const adImage = isVI ? viImg : enImg;

  // Vietnamese content
  const viContent = {
    metaTitle: "Ưu Đãi Tết 2026 - Tổng Hợp Khuyến Mãi | Emis Dental",
    metaDescription: "Tổng hợp tất cả ưu đãi dịp Tết 2026 tại Emis Dental: Niềng răng, trồng răng Implant, tẩy trắng răng, bọc răng sứ. Giảm giá lên đến 50%",
    
    heroTitle: "CHÀO XUÂN 2026 - RẠNG NGỜI NỤ CƯỜI VIỆT",
    heroDescription: "Năm mới, nụ cười mới! Emis Dental triển khai chương trình ưu đãi đặc biệt dịp Tết Nguyên Đán 2026 với nhiều quà tặng hấp dẫn.",
    intro: "Khởi đầu năm mới bằng một nụ cười tự tin và tỏa sáng. Cùng Emis Dental đón Tết với hàng loạt ưu đãi chưa từng có!",
    
    promoTitle: "TỔNG HỢP ƯU ĐÃI NỔI BẬT TẾT 2026",
    promoSubtitle: "Chương trình áp dụng từ 01/01/2026 đến 15/02/2026",
    
    offers: [
      {
        title: "NIỀNG RĂNG CHỈNH NHA",
        discount: "3.000.000 VNĐ",
        description: "Ưu đãi đặc biệt cho dịch vụ niềng răng mắc cài kim loại và mắc cài sứ",
        features: [
          "Miễn phí thăm khám & tư vấn",
          "Giảm ngay 3 triệu đồng",
          "Trả góp 0% lãi suất"
        ],
        icon: <Smile className="w-8 h-8" />,
        link: "/orthoAd",
        color: "from-red-600 to-amber-500"
      },
      {
        title: "TRỒNG RĂNG IMPLANT",
        discount: "50%",
        description: "Giảm giá 50% cho trụ Implant và khuyến mãi đặc biệt cho răng sứ",
        features: [
          "Bảo hành trọn đời",
          "Ghép xương miễn phí",
          "Không đau, an toàn"
        ],
        icon: <Shield className="w-8 h-8" />,
        link: "/implantAd",
        color: "from-amber-600 to-yellow-500"
      },
      {
        title: "TẨY TRẮNG RĂNG",
        discount: "2.500.000 VNĐ",
        description: "Tẩy trắng răng công nghệ Laser hiện đại, an toàn tuyệt đối",
        features: [
          "Trắng sáng ngay lập tức",
          "Không ê buốt",
          "Hiệu quả lâu dài"
        ],
        icon: <Sparkles className="w-8 h-8" />,
        link: "/whiteningAd",
        color: "from-red-500 to-pink-500"
      },
      {
        title: "BỌC RĂNG SỨ",
        discount: "30%",
        description: "Bọc răng sứ thẩm mỹ cao cấp, phục hình răng hư tổn",
        features: [
          "Sứ cao cấp từ Đức, Mỹ",
          "Bảo hành 10 năm",
          "Màu sắc tự nhiên"
        ],
        icon: <Award className="w-8 h-8" />,
        link: "/crownAd",
        color: "from-amber-700 to-orange-500"
      }
    ],
    
    whyChoose: {
      title: "TẠI SAO CHỌN EMIS DENTAL?",
      points: [
        {
          title: "Đội ngũ chuyên gia",
          description: "Bác sĩ có chứng chỉ quốc tế, kinh nghiệm trên 10 năm",
          icon: <Users className="w-6 h-6" />
        },
        {
          title: "Công nghệ hiện đại",
          description: "Trang thiết bị nhập khẩu từ Châu Âu, Mỹ",
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: "Bảo hành dài hạn",
          description: "Chính sách bảo hành lên đến trọn đời",
          icon: <Shield className="w-6 h-6" />
        },
        {
          title: "Thanh toán linh hoạt",
          description: "Trả góp 0% lãi suất, hỗ trợ tài chính",
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
    },
    
    timeline: {
      title: "LỘ TRÌNH ƯU ĐÃI",
      steps: [
        {
          period: "1-15/1/2026",
          title: "Đăng ký sớm",
          description: "Nhận thêm 5% giảm giá"
        },
        {
          period: "16-31/1/2026",
          title: "Giai đoạn vàng",
          description: "Ưu đãi tốt nhất"
        },
        {
          period: "1-15/2/2026",
          title: "Cuối chương trình",
          description: "Đăng ký trước Tết"
        }
      ]
    },
    
    cta: {
      title: "ĐĂNG KÝ NGAY - NHẬN QUÀ TẾT",
      description: "Liên hệ ngay để được tư vấn MIỄN PHÍ và nhận ưu đãi đặc biệt",
      button: "ĐẶT LỊCH TƯ VẤN MIỄN PHÍ",
      hotline: "0919 100 021"
    }
  };

  // English content
  const enContent = {
    metaTitle: "Tet 2026 Promotions - All Offers Summary | Emis Dental",
    metaDescription: "All Tet 2026 promotions at Emis Dental: Braces, Implant, Teeth Whitening, Dental Crowns. Up to 50% discount",
    
    heroTitle: "WELCOME SPRING 2026 - SHINING VIETNAMESE SMILE",
    heroDescription: "New year, new smile! Emis Dental launches special Tet 2026 promotion program with many attractive gifts.",
    intro: "Start the new year with a confident and radiant smile. Celebrate Tet with Emis Dental with unprecedented offers!",
    
    promoTitle: "TET 2026 PROMOTION SUMMARY",
    promoSubtitle: "Program valid from January 1, 2026 to February 15, 2026",
    
    offers: [
      {
        title: "BRACES TREATMENT",
        discount: "3,000,000 VND",
        description: "Special offer for metal braces and ceramic braces",
        features: [
          "Free consultation & examination",
          "Instant 3 million VND discount",
          "0% interest installment"
        ],
        icon: <Smile className="w-8 h-8" />,
        link: "/orthoAd",
        color: "from-red-600 to-amber-500"
      },
      {
        title: "DENTAL IMPLANT",
        discount: "50% OFF",
        description: "50% discount on Implant posts and special offer for crowns",
        features: [
          "Lifetime warranty",
          "Free bone grafting",
          "Painless, safe procedure"
        ],
        icon: <Shield className="w-8 h-8" />,
        link: "/implantAd",
        color: "from-amber-600 to-yellow-500"
      },
      {
        title: "TEETH WHITENING",
        discount: "2,500,000 VND",
        description: "Laser teeth whitening technology, absolutely safe",
        features: [
          "Instant whiteness",
          "No sensitivity",
          "Long-lasting effect"
        ],
        icon: <Sparkles className="w-8 h-8" />,
        link: "/whiteningAd",
        color: "from-red-500 to-pink-500"
      },
      {
        title: "DENTAL CROWNS",
        discount: "30% OFF",
        description: "High-end aesthetic dental crowns, restore damaged teeth",
        features: [
          "Premium crowns from Germany, USA",
          "10-year warranty",
          "Natural color matching"
        ],
        icon: <Award className="w-8 h-8" />,
        link: "/crownAd",
        color: "from-amber-700 to-orange-500"
      }
    ],
    
    whyChoose: {
      title: "WHY CHOOSE EMIS DENTAL?",
      points: [
        {
          title: "Expert Team",
          description: "Internationally certified doctors, over 10 years experience",
          icon: <Users className="w-6 h-6" />
        },
        {
          title: "Modern Technology",
          description: "Equipment imported from Europe, USA",
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: "Long-term Warranty",
          description: "Warranty policy up to lifetime",
          icon: <Shield className="w-6 h-6" />
        },
        {
          title: "Flexible Payment",
          description: "0% interest installment, financial support",
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]
    },
    
    timeline: {
      title: "PROMOTION TIMELINE",
      steps: [
        {
          period: "Jan 1-15, 2026",
          title: "Early Registration",
          description: "Get extra 5% discount"
        },
        {
          period: "Jan 16-31, 2026",
          title: "Golden Period",
          description: "Best offers available"
        },
        {
          period: "Feb 1-15, 2026",
          title: "Final Stage",
          description: "Register before Tet"
        }
      ]
    },
    
    cta: {
      title: "REGISTER NOW - RECEIVE TET GIFTS",
      description: "Contact now for FREE consultation and receive special offers",
      button: "BOOK FREE CONSULTATION",
      hotline: "0919 100 021"
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
                {isVI ? "TỔNG HỢP ƯU ĐÃI TẾT 2026" : "TET 2026 PROMOTIONS SUMMARY"}
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {content.heroTitle}
              </h1>
              
              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg text-red-100">
                  {content.heroDescription}
                </p>
                <p className="text-lg text-red-100 font-semibold">
                  {content.intro}
                </p>
              </div>

              {/* Quick Info */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{content.promoSubtitle}</span>
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                  <Trophy className="w-4 h-4 mr-2" />
                  <span>{isVI ? "4 Dịch vụ chính" : "4 Main Services"}</span>
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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Promotion Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {content.promoTitle}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content.promoSubtitle}
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
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
                    <div className="text-sm opacity-90">{isVI ? "GIẢM GIÁ" : "DISCOUNT"}</div>
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
                  {isVI ? "XEM CHI TIẾT" : "VIEW DETAILS"}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border-2 border-amber-100">
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
                className="text-center p-6 bg-gradient-to-br from-red-50 to-amber-50 rounded-xl border border-red-100 hover:border-red-300 transition-colors"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {point.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-3xl p-8 mb-16 border-2 border-red-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {content.timeline.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {content.timeline.steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                    <span className="text-white font-bold text-xl">{idx + 1}</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100">
                    <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-amber-500 text-white px-4 py-1 rounded-full font-bold mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span className="text-sm">{step.period}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
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
              {isVI ? "Ưu đãi có hạn - Đăng ký ngay hôm nay!" : "Limited offers - Register today!"}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 border-2 border-amber-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              <span className="text-red-600">EMIS DENTAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-r from-red-50 to-amber-50 rounded-xl hover:bg-white transition-colors border border-red-100">
              <div className="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{isVI ? "Giờ làm việc" : "Working Hours"}</h3>
              <p className="text-gray-600">8:00 – 20:00</p>
              <p className="text-gray-600">{isVI ? "(Tất cả các ngày)" : "(All days)"}</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-red-50 to-amber-50 rounded-xl hover:bg-white transition-colors border border-red-100">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Hotline</h3>
              <p className="text-lg font-bold text-red-600">0919 100 021</p>
              <p className="text-lg font-bold text-red-600">0768 117 068</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-red-50 to-amber-50 rounded-xl hover:bg-white transition-colors border border-red-100">
              <div className="w-14 h-14 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{isVI ? "Địa chỉ" : "Address"}</h3>
              <p className="text-gray-600">62B Phạm Ngọc Thạch</p>
              <p className="text-gray-600">District 3, HCMC</p>
            </div>
          </div>

          {/* Service Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-center font-bold text-gray-800 mb-6">
              {isVI ? "DỊCH VỤ NHA KHOA" : "DENTAL SERVICES"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/orthoAd"
                className="text-center p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200"
              >
                <div className="font-medium text-red-700">
                  {isVI ? "Niềng răng" : "Braces"}
                </div>
              </Link>
              <Link
                to="/implantAd"
                className="text-center p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
              >
                <div className="font-medium text-amber-700">
                  {isVI ? "Implant" : "Implant"}
                </div>
              </Link>
              <Link
                to="/whiteningAd"
                className="text-center p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200"
              >
                <div className="font-medium text-red-700">
                  {isVI ? "Tẩy trắng" : "Whitening"}
                </div>
              </Link>
              <Link
                to="/crownAd"
                className="text-center p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200"
              >
                <div className="font-medium text-amber-700">
                  {isVI ? "Bọc sứ" : "Crowns"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GenAd;