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
} from "lucide-react";

// Import images - update these to March 8 images when available
import viImg from "../pics/tet/vie-general.png";
import enImg from "../pics/tet/eng-general.png";

const GenAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  const adImage = isVI ? viImg : enImg;

  const viContent = {
    metaTitle: "Ưu Đãi 8/3 - Trao Nụ Cười Trao Yêu Thương | Emis Dental",
    metaDescription:
      "Ưu đãi tháng 3: Răng sứ giảm đến 60%, Tẩy trắng đi 2 tính 1 chỉ 2 triệu, Implant Osstem chỉ 7.900.000đ/trụ tại Emis Dental",

    heroTitle: "8/3 TRAO NỤ CƯỜI – TRAO YÊU THƯƠNG",
    heroDescription:
      "Nhân ngày Quốc tế Phụ nữ 8/3, Emis Dental dành tặng những ưu đãi đặc biệt để mỗi nụ cười phụ nữ Việt thêm tỏa sáng và tự tin.",
    intro:
      "Vì mỗi người phụ nữ đều xứng đáng có một nụ cười rạng rỡ – hãy để Emis Dental chăm sóc nụ cười của bạn trong tháng 3 yêu thương này!",

    promoTitle: "ƯU ĐÃI ĐẶC BIỆT MỪNG 8/3",
    promoSubtitle: "Chương trình áp dụng trong tháng 3/2026",
    promoNote: "Ưu đãi có số lượng giới hạn – Đặt lịch sớm để không bỏ lỡ!",

    offers: [
      {
        title: "RĂNG SỨ TOÀN SỨ CAO CẤP",
        discount: "GIẢM ĐẾN 60%",
        originalPrice: "Giá gốc",
        finalPrice: "Ưu đãi đặc biệt",
        description: "Veneer, Zirconia, e.max – Nụ cười hoàn hảo đón 8/3",
        features: [
          "Sứ cao cấp từ Đức, Mỹ, Thụy Sĩ",
          "Thiết kế nụ cười 3D cá nhân hóa",
          "Bảo tồn răng thật tối đa",
        ],
        icon: <Gem className="w-8 h-8" />,
        link: "/crownAd",
        color: "from-rose-500 to-pink-500",
        highlight: true,
      },
      {
        title: "TẨY TRẮNG RĂNG – ĐI 2 TÍNH 1",
        discount: "CHỈ CÒN 2.000.000Đ",
        originalPrice: "Mua 1 tặng 1",
        finalPrice: "2.000.000đ / 2 người",
        description:
          "Rủ bạn gái cùng đi – chỉ trả tiền 1 người! (Chưa bao gồm cạo vôi răng)",
        features: [
          "Công nghệ Blue Laser hiện đại",
          "Đi 2 người chỉ tính tiền 1",
          "Trắng sáng sau 45–60 phút",
        ],
        icon: <Sun className="w-8 h-8" />,
        link: "/whiteningAd",
        color: "from-fuchsia-500 to-violet-500",
        highlight: true,
      },
      {
        title: "TRỒNG RĂNG IMPLANT OSSTEM",
        discount: "CHỈ CÒN 7.900.000Đ",
        originalPrice: "Giá gốc",
        finalPrice: "7.900.000đ / trụ",
        description:
          "Implant Osstem (Hàn Quốc) – Thương hiệu hàng đầu thế giới (Chưa bao gồm abutment)",
        features: [
          "Osstem – Top 3 thương hiệu implant thế giới",
          "Bác sĩ chuyên khoa implant",
          "Bảo hành dài hạn",
        ],
        icon: <Shield className="w-8 h-8" />,
        link: "/implantAd",
        color: "from-pink-600 to-rose-400",
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
            "Công nghệ Blue Laser hiện đại",
            "Gel Pola Office nhập từ Úc",
            "Đi 2 tính 1 – Rủ bạn ngay!",
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
      title: "TẠI SAO HÀNG NGÀN PHỤ NỮ TIN CHỌN EMIS DENTAL?",
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
      title: "TẶNG NỤ CƯỜI – TẶNG YÊU THƯƠNG NHÂN 8/3",
      description:
        "Liên hệ ngay để được tư vấn MIỄN PHÍ và nhận ưu đãi đặc biệt mừng ngày Quốc tế Phụ nữ",
      button: "ĐẶT LỊCH TƯ VẤN MIỄN PHÍ NGAY",
      hotline: "0919 100 021",
      subtext: "Ưu đãi có số lượng giới hạn – Đừng bỏ lỡ cơ hội vàng tháng 3!",
    },
  };

  const enContent = {
    metaTitle: "March 8th Women's Day Offers - Gift a Smile, Gift Love | Emis Dental",
    metaDescription:
      "March promotions: Dental crowns up to 60% off, Teeth whitening 2-for-1 only 2,000,000đ, Osstem implant only 7,900,000đ/implant at Emis Dental",

    heroTitle: "MARCH 8 – GIFT A SMILE, GIFT LOVE",
    heroDescription:
      "On International Women's Day, Emis Dental presents special offers to help every woman shine with a confident, radiant smile.",
    intro:
      "Because every woman deserves a beautiful smile – let Emis Dental take care of yours this Women's Day!",

    promoTitle: "SPECIAL WOMEN'S DAY OFFERS – MARCH 8",
    promoSubtitle: "Program valid throughout March 2026",
    promoNote: "Limited availability – Book early to secure your spot!",

    offers: [
      {
        title: "PREMIUM ALL-CERAMIC CROWNS",
        discount: "UP TO 60% OFF",
        originalPrice: "Original price",
        finalPrice: "Special offer",
        description: "Veneer, Zirconia, e.max – Perfect smile for Women's Day",
        features: [
          "Premium ceramics from Germany, USA, Switzerland",
          "Personalized 3D smile design",
          "Maximum natural tooth preservation",
        ],
        icon: <Gem className="w-8 h-8" />,
        link: "/crownAd",
        color: "from-rose-500 to-pink-500",
        highlight: true,
      },
      {
        title: "TEETH WHITENING – BUY 1 GET 1 FREE",
        discount: "ONLY 2,000,000Đ",
        originalPrice: "2-for-1 deal",
        finalPrice: "2,000,000đ / 2 people",
        description:
          "Bring a friend – only pay for one! (Scaling not included)",
        features: [
          "Modern Blue Laser technology",
          "2 people, price of 1",
          "Whitened in 45–60 minutes",
        ],
        icon: <Sun className="w-8 h-8" />,
        link: "/whiteningAd",
        color: "from-fuchsia-500 to-violet-500",
        highlight: true,
      },
      {
        title: "OSSTEM DENTAL IMPLANT",
        discount: "ONLY 7,900,000Đ",
        originalPrice: "Original price",
        finalPrice: "7,900,000đ / implant",
        description:
          "Osstem Implant (Korea) – World-leading implant brand (Abutment not included)",
        features: [
          "Osstem – Top 3 implant brands worldwide",
          "Specialist implant doctors",
          "Long-term warranty",
        ],
        icon: <Shield className="w-8 h-8" />,
        link: "/implantAd",
        color: "from-pink-600 to-rose-400",
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
            "Modern Blue Laser technology",
            "Pola Office Gel from Australia",
            "2-for-1 – Bring your friend!",
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
      title: "WHY THOUSANDS OF WOMEN TRUST EMIS DENTAL?",
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
          stat: "Genuine",
        },
        {
          title: "Long-term Warranty",
          description: "Warranty from 5 years to lifetime depending on service",
          icon: <Shield className="w-6 h-6" />,
          stat: "Lifetime",
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
      title: "CELEBRATE WOMEN'S DAY WITH A BEAUTIFUL SMILE",
      description:
        "Contact us for FREE consultation and receive special Women's Day offers",
      button: "BOOK FREE CONSULTATION NOW",
      hotline: "0919 100 021",
      subtext: "Limited offers – Don't miss this March opportunity!",
    },
  };

  const content = isVI ? viContent : enContent;

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-600 via-pink-500 to-fuchsia-600 pt-24 pb-12 overflow-hidden">
        {/* Background Pattern - floral dots */}
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
              <div className="inline-flex items-center bg-gradient-to-r from-pink-200 to-rose-200 text-rose-800 px-6 py-2 rounded-full font-bold mb-6 animate-pulse">
                <Heart className="w-5 h-5 mr-2 fill-rose-600 text-rose-600" />
                {isVI ? "CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 3" : "MARCH SPECIAL PROMOTION"}
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {content.heroTitle}
              </h1>

              {/* Description */}
              <div className="space-y-4 mb-6">
                <p className="text-lg text-pink-100">{content.heroDescription}</p>
                <p className="text-lg text-pink-100 font-semibold">{content.intro}</p>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm">{isVI ? "Dịch vụ" : "Services"}</div>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-sm">{isVI ? "Giảm tối đa" : "Max discount"}</div>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">8/3</div>
                  <div className="text-sm">{isVI ? "Ngày yêu thương" : "Love Day"}</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-300">
                <img
                  src={adImage}
                  alt={isVI ? "Ưu đãi 8/3 tại Emis Dental" : "Women's Day Offers at Emis Dental"}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-40"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-pink-500 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-fuchsia-500 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center text-white">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="font-semibold">{content.promoSubtitle}</span>
            </div>
            <div className="flex items-center text-white">
              <Heart className="w-4 h-4 mr-2 fill-white" />
              <span className="font-semibold">{content.promoNote}</span>
            </div>
            <Link
              to="/contact"
              className="bg-white text-pink-700 font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5"
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
            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isVI
                ? "3 dịch vụ chính với ưu đãi đặc biệt mừng ngày Quốc tế Phụ nữ 8/3"
                : "3 main services with special discounts celebrating International Women's Day"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.offers.map((offer, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${offer.color} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
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
                  <div className="bg-white/20 rounded-xl p-3 mb-4 text-center">
                    <div className="text-2xl font-bold text-yellow-300">{offer.discount}</div>
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
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
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
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 border-2 border-pink-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {content.highlights.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.highlights.services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-pink-100 hover:border-pink-300 transition-colors p-6"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-4 text-center">
                  {service.name}
                </h3>
                <ul className="space-y-3">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 mb-16 border-2 border-pink-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {content.whyChoose.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whyChoose.points.map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center border border-pink-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="text-white text-sm font-bold px-1">{point.stat}</div>
                </div>
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 -mt-6 relative z-10 text-rose-600">
                  {point.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-pink-50 to-fuchsia-50 rounded-3xl p-8 mb-16 border-2 border-pink-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {content.process.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {content.process.steps.map((step, idx) => (
              <div key={idx} className="flex md:flex-col items-center md:items-center flex-1">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 md:mr-0 md:mb-3">
                  {step.number}
                </div>
                <div className="md:text-center">
                  <h3 className="font-bold text-gray-800 text-sm">{step.title}</h3>
                  <p className="text-gray-600 text-xs">{step.description}</p>
                </div>
                {idx < content.process.steps.length - 1 && (
                  <ArrowRight className="hidden md:block text-pink-300 mx-2 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500 rounded-3xl p-8 md:p-10 shadow-xl">
            <Heart className="w-16 h-16 text-white mx-auto mb-6 fill-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {content.cta.title}
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {content.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-rose-600 font-bold text-lg py-4 px-8 rounded-full shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {content.cta.button}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <a
                href={`tel:${content.cta.hotline}`}
                className="inline-flex items-center justify-center bg-rose-700 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-rose-800 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {content.cta.hotline}
              </a>
            </div>

            <p className="text-white font-semibold text-sm">{content.cta.subtext}</p>
          </div>
        </div>

        {/* Contact & Service Links */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-pink-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              <span className="text-rose-600">NHA KHOA QUỐC TẾ EMIS DENTAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full mx-auto" />
          </div>

          {/* Service Links */}
          <div className="mb-10">
            <h3 className="text-center font-bold text-gray-800 mb-6 text-lg">
              {isVI ? "3 DỊCH VỤ ĐANG ƯU ĐÃI" : "3 SERVICES ON PROMOTION"}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <Link
                to="/crownAd"
                className="text-center p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg transition-all hover:shadow-md border border-rose-200"
              >
                <Gem className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                <div className="font-bold text-rose-700">
                  {isVI ? "Răng Sứ" : "Crowns"}
                </div>
                <div className="text-sm text-rose-600">60% {isVI ? "giảm" : "off"}</div>
              </Link>
              <Link
                to="/whiteningAd"
                className="text-center p-4 bg-gradient-to-r from-fuchsia-50 to-violet-50 rounded-lg transition-all hover:shadow-md border border-fuchsia-200"
              >
                <Sun className="w-8 h-8 text-fuchsia-600 mx-auto mb-2" />
                <div className="font-bold text-fuchsia-700">
                  {isVI ? "Tẩy Trắng" : "Whitening"}
                </div>
                <div className="text-sm text-fuchsia-600">{isVI ? "Đi 2 tính 1" : "2-for-1"}</div>
              </Link>
              <Link
                to="/implantAd"
                className="text-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg transition-all hover:shadow-md border border-pink-200"
              >
                <Shield className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <div className="font-bold text-pink-700">Implant</div>
                <div className="text-sm text-pink-600">7.9M/trụ</div>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 border-t border-gray-200 pt-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">
                {isVI ? "Giờ làm việc" : "Working Hours"}
              </h3>
              <p className="text-gray-600 text-sm">8:00 – 20:00</p>
              <p className="text-gray-600 text-sm">
                {isVI ? "(Tất cả các ngày)" : "(All days)"}
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Hotline</h3>
              <p className="text-lg font-bold text-rose-600">0919 100 021</p>
              <p className="text-lg font-bold text-rose-600">0768 117 068</p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">
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
