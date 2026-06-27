import { Fragment } from "react";
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
  Gem,
  Flower2,
  Flower,
  Flag,
} from "lucide-react";

const GenAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";

  const viContent = {
    metaTitle: "Ưu Đãi Tháng 6 - Rạng Rỡ Nụ Cười Mùa Hè | Emis Dental",
    metaDescription:
      "Ưu đãi tháng 6: Răng sứ giảm đến 60%, Tẩy trắng giảm 50% chỉ 1.500.000đ, Implant Osstem chỉ 7.900.000đ/trụ tại Emis Dental",

    heroTitle: "ƯU ĐÃI THÁNG 6 - NỤ CƯỜI RẠNG RỠ",
    heroDescription:
      "Tháng 6 này, Emis Dental dành tặng ưu đãi đặc biệt để bạn tỏa sáng với nụ cười tự tin suốt mùa hè.",
    intro:
      "Bắt đầu mùa hè bằng nụ cười hoàn hảo – hãy để Emis Dental chăm sóc nụ cười của bạn ngay hôm nay!",

    promoTitle: "ƯU ĐÃI ĐẶC BIỆT THÁNG 6",
    promoSubtitle: "Chương trình áp dụng trong tháng 6/2026",
    promoNote: "Ưu đãi có số lượng giới hạn – Đặt lịch sớm để không bỏ lỡ!",

    offers: [
      {
        title: "RĂNG SỨ TOÀN SỨ CAO CẤP",
        discount: "GIẢM ĐẾN 60%",
        originalPrice: "Giá gốc",
        finalPrice: "Ưu đãi đặc biệt",
        description: "Veneer, Zirconia, e.max – Nụ cười hoàn hảo cho mùa hè",
        features: [
          "Sứ cao cấp từ Đức, Mỹ, Thụy Sĩ",
          "Thiết kế nụ cười 3D cá nhân hóa",
          "Bảo tồn răng thật tối đa",
        ],
        icon: <Gem className="w-8 h-8" />,
        link: "/crownAd",
        color: "from-[#16324a] to-[#24405a]",
        highlight: true,
      },
      {
        title: "TẨY TRẮNG RĂNG – GIẢM 50%",
        discount: "CHỈ CÒN 1.500.000Đ",
        originalPrice: "Giá gốc: 3.000.000đ",
        finalPrice: "1.500.000đ / người",
        description:
          "Trắng sáng rạng rỡ đón lễ chỉ sau 1 buổi! (Chưa bao gồm cạo vôi răng)",
        features: [
          "Gel Pola Office 35% chính hãng từ Úc",
          "An toàn – Không ê buốt",
          "Trắng sáng sau 45–60 phút",
        ],
        icon: <Sun className="w-8 h-8" />,
        link: "/whiteningAd",
        color: "from-[#1f3b57] to-[#2a3439]",
        highlight: true,
      },
      {
        title: "TRỒNG RĂNG IMPLANT OSSTEM",
        discount: "GIẢM 20%",
        originalPrice: "Giá gốc: 9.900.000đ",
        finalPrice: "7.900.000đ / trụ",
        description:
          "Implant Osstem (Hàn Quốc) – Thương hiệu hàng đầu thế giới (Chưa bao gồm abutment)",
        features: [
          "Osstem – Top 3 thương hiệu implant thế giới",
          "Thực hiện chỉ trong 20 phút",
          "Bảo hành dài hạn",
        ],
        icon: <Shield className="w-8 h-8" />,
        link: "/implantAd",
        color: "from-[#2a3439] to-[#16324a]",
        highlight: true,
      },
    ],

    highlights: {
      title: "ĐIỂM NỔI BẬT CỦA TỪNG DỊCH VỤ",
      services: [
        {
          name: "Răng Sứ Toàn Sứ",
          points: [
            "Sứ cao cấp Đức, Mỹ, Thụy Sĩ",
            "Thiết kế nụ cười 3D",
            "Bảo tồn răng thật tối đa",
          ],
        },
        {
          name: "Tẩy Trắng",
          points: [
            "Gel Pola Office 35% chính hãng từ Úc",
            "Công nghệ hiện đại, chuẩn quốc tế",
            "Giảm 50% – Chỉ còn 1.500.000đ!",
          ],
        },
        {
          name: "Implant Osstem",
          points: [
            "Top 3 thương hiệu implant thế giới",
            "CT ConeBeam 3D chẩn đoán chính xác",
            "Phục hồi răng vĩnh viễn",
          ],
        },
      ],
    },

    whyChoose: {
      title: "TẠI SAO NHIỀU KHÁCH HÀNG TIN CHỌN EMIS DENTAL?",
      points: [
        {
          title: "Đội ngũ bác sĩ chính quy",
          description: "100% bác sĩ có chứng chỉ hành nghề, kinh nghiệm trên 10 năm",
          icon: <Users className="w-6 h-6" />,
          stat: "100%",
        },
        {
          title: "Công nghệ hiện đại",
          description: "Trang thiết bị nhập khẩu từ Châu Âu, Mỹ, Hàn Quốc",
          icon: <Zap className="w-6 h-6" />,
          stat: "EU/US",
        },
        {
          title: "Vật liệu chính hãng",
          description: "Sử dụng vật liệu cao cấp từ các thương hiệu danh tiếng thế giới",
          icon: <Award className="w-6 h-6" />,
          stat: "Chính hãng",
        },
        {
          title: "Bảo hành dài hạn",
          description: "Chính sách bảo hành từ 5 năm đến trọn đời tùy dịch vụ",
          icon: <Shield className="w-6 h-6" />,
          stat: "Trọn đời",
        },
      ],
    },

    process: {
      title: "QUY TRÌNH ĐƠN GIẢN – HIỆU QUẢ CAO",
      steps: [
        { number: "01", title: "Đăng ký tư vấn", description: "Qua Website, Fanpage hoặc Hotline" },
        { number: "02", title: "Thăm khám miễn phí", description: "Bác sĩ chuyên khoa tư vấn" },
        { number: "03", title: "Lên kế hoạch điều trị", description: "Phác đồ cá nhân hóa" },
        { number: "04", title: "Thực hiện điều trị", description: "Bởi đội ngũ chuyên gia" },
        { number: "05", title: "Chăm sóc hậu mãi", description: "Theo dõi & bảo hành dài hạn" },
      ],
    },

    cta: {
      title: "BẮT ĐẦU MÙA HÈ VỚI NỤ CƯỜI RẠNG RỞ",
      description:
        "Liên hệ ngay để được tư vấn MIỄN PHÍ và nhận ưu đãi đặc biệt trong tháng 6",
      button: "ĐẶT LỊCH TƯ VẤN MIỄN PHÍ NGAY",
      hotline: "+84 919 100 021",
      subtext: "Ưu đãi có số lượng giới hạn – Đừng bỏ lỡ cơ hội vàng mùa hè!",
    },
  };

  const enContent = {
    metaTitle: "June Offers - Shine All Month | Emis Dental",
    metaDescription:
      "June promotions: Dental crowns up to 60% off, Teeth whitening 50% off only 1,500,000đ, Osstem implant only 7,900,000đ/implant at Emis Dental",

    heroTitle: "JUNE SMILE SPECIAL",
    heroDescription:
      "This June, Emis Dental offers all-month specials to keep your smile confident and radiant.",
    intro:
      "Start summer with a perfect smile – let Emis Dental take care of yours today!",

    promoTitle: "SPECIAL JUNE OFFERS",
    promoSubtitle: "Program valid June 2026",
    promoNote: "Limited availability – Book early to secure your spot!",

    offers: [
      {
        title: "PREMIUM ALL-CERAMIC CROWNS",
        discount: "UP TO 60% OFF",
        originalPrice: "Original price",
        finalPrice: "Special offer",
        description: "Veneer, Zirconia, e.max – Perfect summer smile",
        features: [
          "Premium ceramics from Germany, USA, Switzerland",
          "Personalized 3D smile design",
          "Maximum natural tooth preservation",
        ],
        icon: <Gem className="w-8 h-8" />,
        link: "/crownAd",
        color: "from-[#16324a] to-[#24405a]",
        highlight: true,
      },
      {
        title: "TEETH WHITENING – 50% OFF",
        discount: "ONLY 1,500,000Đ",
        originalPrice: "Original: 3,000,000đ",
        finalPrice: "1,500,000đ / person",
        description:
          "Shine bright this June – visible results in one session! (Scaling not included)",
        features: [
          "Authentic Pola Office 35% gel from Australia",
          "Safe – No sensitivity",
          "Whitened in 45–60 minutes",
        ],
        icon: <Sun className="w-8 h-8" />,
        link: "/whiteningAd",
        color: "from-[#1f3b57] to-[#2a3439]",
        highlight: true,
      },
      {
        title: "OSSTEM DENTAL IMPLANT",
        discount: "20% OFF",
        originalPrice: "Original: 9,900,000đ",
        finalPrice: "7,900,000đ / implant",
        description:
          "Osstem Implant (Korea) – World-leading implant brand (Abutment not included)",
        features: [
          "Osstem – Top 3 implant brands worldwide",
          "Procedure takes only 20 minutes",
          "Long-term warranty",
        ],
        icon: <Shield className="w-8 h-8" />,
        link: "/implantAd",
        color: "from-[#2a3439] to-[#16324a]",
        highlight: true,
      },
    ],

    highlights: {
      title: "HIGHLIGHTS OF EACH SERVICE",
      services: [
        {
          name: "All-Ceramic Crowns",
          points: [
            "Premium ceramics from Germany, USA, Switzerland",
            "3D smile design",
            "Maximum tooth preservation",
          ],
        },
        {
          name: "Teeth Whitening",
          points: [
            "Authentic Pola Office 35% gel from Australia",
            "International-standard procedure",
            "50% off – Only 1,500,000đ!",
          ],
        },
        {
          name: "Osstem Implant",
          points: [
            "Top 3 implant brands worldwide",
            "CT ConeBeam 3D accurate diagnosis",
            "Permanent tooth restoration",
          ],
        },
      ],
    },

    whyChoose: {
      title: "WHY NUMEROUS CUSTOMERS TRUST EMIS DENTAL?",
      points: [
        {
          title: "Certified Dental Team",
          description: "100% licensed doctors, over 10 years experience",
          icon: <Users className="w-6 h-6" />,
          stat: "100%",
        },
        {
          title: "Modern Technology",
          description: "Equipment imported from Europe, USA, Korea",
          icon: <Zap className="w-6 h-6" />,
          stat: "EU/US",
        },
        {
          title: "Genuine Materials",
          description: "Premium materials from world-renowned brands",
          icon: <Award className="w-6 h-6" />,
          stat: "Auth.",
        },
        {
          title: "Long-term Warranty",
          description: "Warranty from 5 years to lifetime depending on service",
          icon: <Shield className="w-6 h-6" />,
          stat: "Life",
        },
      ],
    },

    process: {
      title: "SIMPLE PROCESS – HIGH EFFECTIVENESS",
      steps: [
        { number: "01", title: "Register for consultation", description: "Via Website, Fanpage or Hotline" },
        { number: "02", title: "Free examination", description: "Specialist doctor consultation" },
        { number: "03", title: "Treatment planning", description: "Personalized treatment plan" },
        { number: "04", title: "Treatment execution", description: "By expert team" },
        { number: "05", title: "Aftercare service", description: "Follow-up & long-term warranty" },
      ],
    },

    cta: {
      title: "START SUMMER WITH A DAZZLING SMILE",
      description:
        "Contact us for FREE consultation and receive special June offers",
      button: "BOOK FREE CONSULTATION NOW",
      hotline: "+84 919 100 021",
      subtext: "Limited offers – Don't miss this summer opportunity!",
    },
  };

  const content = isVI ? viContent : enContent;

  return (
    <main className="min-h-screen bg-[#f7fafc] text-[#2a3439]">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#16324a] via-[#1d3953] to-[#2a3439] pt-24 pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "52px 26px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center bg-[#C5AF73] text-[#16324a] px-6 py-2 rounded-full font-semibold mb-6 text-xs uppercase tracking-[0.2em]">
                <Flag className="w-4 h-4 mr-2" />
                {isVI ? "CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 6" : "JUNE SPECIAL DISCOUNT"}
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {content.heroTitle}
              </h1>

              {/* Description */}
              <div className="space-y-4 mb-6">
                <p className="text-lg text-[#d6e2ed]">{content.heroDescription}</p>
                <p className="text-lg text-white font-semibold">{content.intro}</p>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold text-[#d4af37]">3</div>
                  <div className="text-sm">{isVI ? "Dịch vụ" : "Services"}</div>
                </div>
                <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold text-[#d4af37]">60%</div>
                  <div className="text-sm">{isVI ? "Giảm tối đa" : "Max discount"}</div>
                </div>
                <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold text-[#d4af37]">JUNE</div>
                  <div className="text-sm">{isVI ? "Tháng 6" : "June"}</div>
                </div>
              </div>
            </div>

            {/* Decorative Offer Cards */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
                <Gem className="w-10 h-10 text-[#d4af37] mx-auto mb-2" />
                <div className="text-[#d4af37] font-bold text-xl">60%</div>
                <div className="text-white text-sm font-semibold">{isVI ? "Răng Sứ" : "Crowns"}</div>
                <div className="text-[#c2d2df] text-xs mt-1">{isVI ? "Giảm đến" : "Up to off"}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 mt-6">
                <Sun className="w-10 h-10 text-[#d4af37] mx-auto mb-2" />
                <div className="text-[#d4af37] font-bold text-xl">{isVI ? "Giảm 50%" : "50% off"}</div>
                <div className="text-white text-sm font-semibold">{isVI ? "Tẩy Trắng" : "Whitening"}</div>
                <div className="text-[#c2d2df] text-xs mt-1">1.500.000đ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 col-span-2">
                <Shield className="w-10 h-10 text-[#d4af37] mx-auto mb-2" />
                <div className="text-[#d4af37] font-bold text-xl">7.900.000đ</div>
                <div className="text-white text-sm font-semibold">Implant Osstem</div>
                <div className="text-[#c2d2df] text-xs mt-1">{isVI ? "Giá / trụ" : "Per implant"}</div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-[#16324a] py-3 border-y border-[#C5AF73]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center text-white">
              <Calendar className="w-4 h-4 mr-2 text-[#d4af37]" />
              <span className="font-semibold">{content.promoSubtitle}</span>
            </div>
            <div className="flex items-center text-white">
              <Flag className="w-4 h-4 mr-2 text-[#d4af37]" />
              <span className="font-semibold">{content.promoNote}</span>
            </div>
            <Link
              to="/contact"
              className="bg-[#C5AF73] text-[#16324a] font-semibold py-2 px-6 rounded-full hover:bg-[#d4af37] transition-all hover:-translate-y-0.5"
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C5AF73]">
              {isVI ? "ƯU ĐÃI THÁNG 6" : "JUNE OFFERS"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16324a] mb-3">
              {content.promoTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C5AF73] to-[#d4af37] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {isVI
                ? "3 dịch vụ chính với ưu đãi đặc biệt trong tháng 6"
                : "3 main services with special discounts throughout June"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.offers.map((offer, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${offer.color} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="p-6 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {offer.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{offer.title}</h3>
                      <p className="text-white/90 text-xs mt-1">{offer.description}</p>
                    </div>
                  </div>

                  {/* Discount highlight */}
                  <div className="bg-white/10 border border-white/15 rounded-xl p-3 mb-4 text-center">
                    <div className="text-2xl font-bold text-[#d4af37]">{offer.discount}</div>
                    {offer.originalPrice && (
                      <div className="text-sm opacity-80 line-through">{offer.originalPrice}</div>
                    )}
                    {offer.finalPrice && (
                      <div className="text-base font-bold mt-1">{offer.finalPrice}</div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    {offer.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center mb-2 last:mb-0">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 text-[#d4af37]" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Link
                    to={offer.link}
                    className="block w-full bg-[#C5AF73] hover:bg-[#d4af37] text-[#16324a] font-semibold py-3 rounded-lg text-center transition-colors flex items-center justify-center"
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
        <div className="bg-white rounded-3xl shadow-sm p-8 mb-16 border border-[#e6ddc8]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16324a] mb-2">
              {content.highlights.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C5AF73] to-[#d4af37] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.highlights.services.map((service, idx) => (
              <div
                key={idx}
                className="bg-[#f7fafc] rounded-xl border border-[#dbe4ec] hover:border-[#C5AF73] transition-colors p-6"
              >
                <h3 className="font-bold text-[#16324a] text-lg mb-4 text-center">
                  {service.name}
                </h3>
                <ul className="space-y-3">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start">
                      <div className="w-2 h-2 bg-[#C5AF73] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-[#f1f5f9] rounded-3xl p-8 mb-16 border border-[#dbe4ec]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#16324a] mb-2">
              {content.whyChoose.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C5AF73] to-[#d4af37] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whyChoose.points.map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center border border-[#dbe4ec] hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#16324a] to-[#2a3439] rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="text-[#d4af37] text-sm font-bold px-1">{point.stat}</div>
                </div>
                <div className="w-10 h-10 bg-[#f1e9d4] rounded-full flex items-center justify-center mx-auto mb-3 -mt-6 relative z-10 text-[#16324a]">
                  {point.icon}
                </div>
                <h3 className="font-bold text-[#16324a] text-lg mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-[#f1f5f9] rounded-3xl p-8 mb-16 border border-[#dbe4ec]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#16324a] mb-2">
              {content.process.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C5AF73] to-[#d4af37] rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {content.process.steps.map((step, idx) => (
              <Fragment key={idx}>
                <div className="flex flex-1 min-w-0 items-center md:flex-col md:items-center text-left md:text-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#16324a] to-[#2a3439] rounded-full flex items-center justify-center text-[#d4af37] font-bold text-sm mr-4 md:mr-0 md:mb-3">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#16324a] text-sm">{step.title}</h3>
                    <p className="text-gray-600 text-xs">{step.description}</p>
                  </div>
                </div>
                {idx < content.process.steps.length - 1 && (
                  <ArrowRight className="hidden md:block text-[#C5AF73] flex-shrink-0" />
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-[#16324a] via-[#1d3953] to-[#2a3439] rounded-3xl p-8 md:p-10 shadow-lg">
            <Flag className="w-14 h-14 text-[#d4af37] mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {content.cta.title}
            </h3>
            <p className="text-[#d6e2ed] text-lg mb-8 max-w-2xl mx-auto">
              {content.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#C5AF73] text-[#16324a] font-semibold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-[#d4af37] hover:-translate-y-1 transition-all duration-300"
              >
                {content.cta.button}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <a
                href={`tel:${content.cta.hotline}`}
                className="inline-flex items-center justify-center bg-white/10 border border-white/25 text-white font-semibold text-lg py-4 px-8 rounded-full hover:bg-white/15 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2 text-[#d4af37]" />
                {content.cta.hotline}
              </a>
            </div>

            <p className="text-white font-semibold text-sm">{content.cta.subtext}</p>
          </div>
        </div>

        {/* Contact & Service Links */}
        <div className="bg-white rounded-3xl shadow-sm p-8 border border-[#e6ddc8]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#16324a] mb-4">
              {isVI ? "NHA KHOA QUỐC TẾ EMIS DENTAL" : "EMIS INTERNATIONAL DENTAL CLINIC"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C5AF73] to-[#d4af37] rounded-full mx-auto" />
          </div>

          {/* Service Links */}
          <div className="mb-10">
            <h3 className="text-center font-bold text-[#16324a] mb-6 text-lg">
              {isVI ? "3 DỊCH VỤ ĐANG ƯU ĐÃI" : "3 SERVICES ON PROMOTION"}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <Link
                to="/crownAd"
                className="text-center p-4 bg-[#f7fafc] rounded-lg transition-all hover:shadow-md border border-[#dbe4ec] hover:border-[#C5AF73]"
              >
                <Gem className="w-8 h-8 text-[#C5AF73] mx-auto mb-2" />
                <div className="font-bold text-[#16324a]">
                  {isVI ? "Răng Sứ" : "Crowns"}
                </div>
                <div className="text-sm text-[#9a8649]">60% {isVI ? "giảm" : "off"}</div>
              </Link>
              <Link
                to="/whiteningAd"
                className="text-center p-4 bg-[#f7fafc] rounded-lg transition-all hover:shadow-md border border-[#dbe4ec] hover:border-[#C5AF73]"
              >
                <Sun className="w-8 h-8 text-[#C5AF73] mx-auto mb-2" />
                <div className="font-bold text-[#16324a]">
                  {isVI ? "Tẩy Trắng" : "Whitening"}
                </div>
                <div className="text-sm text-[#9a8649]">{isVI ? "Giảm 50%" : "50% off"}</div>
              </Link>
              <Link
                to="/implantAd"
                className="text-center p-4 bg-[#f7fafc] rounded-lg transition-all hover:shadow-md border border-[#dbe4ec] hover:border-[#C5AF73]"
              >
                <Shield className="w-8 h-8 text-[#C5AF73] mx-auto mb-2" />
                <div className="font-bold text-[#16324a]">Implant</div>
                <div className="text-sm text-[#9a8649]">{isVI ? "7.9M/trụ" : "7.9M/implant"}</div>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 border-t border-[#e6ddc8] pt-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#f1e9d4] rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-[#C5AF73]" />
              </div>
              <h3 className="font-bold text-[#16324a] mb-1">
                {isVI ? "Giờ làm việc" : "Working Hours"}
              </h3>
              <p className="text-gray-600 text-sm">
                {isVI ? "Thứ 2 – Thứ 7: 8:00 – 19:00" : "Mon – Sat: 8:00 AM – 7:00 PM"}
              </p>
              <p className="text-gray-600 text-sm">
                {isVI ? "Chủ nhật: 8:00 – 17:00" : "Sun: 8:00 AM – 5:00 PM"}
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#f1e9d4] rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-[#C5AF73]" />
              </div>
              <h3 className="font-bold text-[#16324a] mb-1">Hotline</h3>
              <p className="text-lg font-bold text-[#16324a]">+84 919 100 021</p>
              <p className="text-lg font-bold text-[#16324a]">+84 768 117 068</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#f1e9d4] rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-[#C5AF73]" />
              </div>
              <h3 className="font-bold text-[#16324a] mb-1">
                {isVI ? "Địa chỉ" : "Address"}
              </h3>
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
