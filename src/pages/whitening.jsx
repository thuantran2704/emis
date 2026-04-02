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
  ChevronRight,
  Heart,
  Sun,
} from "lucide-react";

import viImg from "../pics/april_disc/vie-whitening.png";
import enImg from "../pics/april_disc/eng-whitening.png";

const WhiteningAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  const adImage = isVI ? viImg : enImg;

  const viContent = {
    metaTitle: "Tẩy Trắng Răng Giảm 50% - Chỉ 1.500.000Đ | Emis Dental",
    metaDescription:
      "Ưu đãi mùa đại lễ: Giảm 50% tẩy trắng răng tại Emis Dental – trọn gói chỉ 1.500.000đ. Gel Pola Office chính hãng Úc, an toàn, không ê buốt, trắng sáng sau 1 buổi.",

    heroTitle: "GIẢM 50%",
    heroSubtitle: "TẨY TRẮNG RĂNG ĐÓN MÙA ĐẠI LỄ",
    heroDescription:
      "Đón lễ rực rỡ cùng nụ cười tỏa nắng — ưu đãi có hạn từ Emis Dental. Trọn gói tẩy trắng răng chuẩn quốc tế, an toàn, không ê buốt, hiệu quả rõ rệt chỉ sau 1 buổi.",

    dealHighlight: {
      label: "ĐẶC BIỆT: Tiết kiệm đến 50%",
      price: "1.500.000đ",
      unit: "/ người",
      originalPrice: "3.000.000đ",
      note: "Ưu đãi có hạn – inbox ngay để giữ suất!",
    },

    perks: [
      "An toàn – Không ê buốt – Hiệu quả rõ rệt sau 1 buổi",
      "Gel tẩy trắng Pola Office 35% chính hãng từ Úc",
      "Trang thiết bị hiện đại, quy trình chuẩn quốc tế",
      "Thực hiện bởi bác sĩ chính quy giàu kinh nghiệm",
    ],

    sections: [
      {
        title: "TẠI SAO NÊN TẨY TRẮNG RĂNG DỊP NÀY?",
        icon: <Sun className="w-6 h-6" />,
        content:
          "Mùa đại lễ là thời điểm tuyệt vời để làm mới bản thân và tỏa sáng trong mọi khoảnh khắc. Với ưu đãi 50%, bạn có thể sở hữu nụ cười trắng sáng chuẩn y khoa với mức giá cực kỳ hấp dẫn.",
        points: [
          "Tiết kiệm tối đa: Chỉ còn 1.500.000đ thay vì 3.000.000đ như giá gốc – tiết kiệm ngay 1.500.000đ",
          "Hiệu quả tức thì: Răng trắng bật tông rõ rệt chỉ sau 1 buổi, kịp thời đón lễ với nụ cười rạng rỡ",
          "An tâm tuyệt đối: Quy trình chuẩn y khoa, bác sĩ chính quy trực tiếp thực hiện từ đầu đến cuối",
        ],
      },
      {
        title: "CÔNG NGHỆ TẨY TRẮNG BLUE LASER TẠI EMIS DENTAL",
        icon: <Zap className="w-6 h-6" />,
        content:
          "Tại Emis Dental, chúng tôi sử dụng công nghệ Blue Laser hiện đại kết hợp gel tẩy trắng Pola Office 35% chính hãng từ Úc – sự lựa chọn tối ưu về cả hiệu quả lẫn an toàn.",
        points: [
          "Hiệu quả sau 1 lần thực hiện: Răng trắng bật tông rõ rệt chỉ trong khoảng 45 đến 60 phút, không cần nhiều buổi như tẩy trắng tại nhà",
          "Gel Pola Office 35% chính hãng từ Úc: Nồng độ an toàn, chứa thành phần bảo vệ men răng và hạn chế ê buốt tối đa so với các sản phẩm thông thường",
          "Ánh sáng Blue Laser chỉ tác động lên các phân tử màu, không ảnh hưởng đến cấu trúc răng hay nướu – được kiểm soát chặt chẽ bởi bác sĩ chuyên khoa",
        ],
      },
    ],

    pricing: {
      title: "CHI TIẾT ƯU ĐÃI",
      service: "Tẩy trắng răng chiếu đèn Blue Laser",
      originalPrice: "3.000.000đ",
      discountPrice: "1.500.000đ",
      period: "Ưu đãi mùa đại lễ tháng 4/2026",
      note: "Áp dụng cho khách hàng đặt lịch trong thời gian khuyến mãi. Chưa bao gồm cạo vôi răng.",
    },

    process: {
      title: "QUY TRÌNH TẨY TRẮNG CHUẨN Y KHOA TẠI EMIS DENTAL",
      description:
        "Mỗi khách hàng đều được thực hiện đầy đủ các bước sau để đảm bảo an toàn và hiệu quả tốt nhất:",
      steps: [
        "Thăm khám và tư vấn: Bác sĩ kiểm tra tình trạng răng miệng và tư vấn mức độ trắng có thể đạt được",
        "Vệ sinh răng miệng: Lấy cao răng và đánh bóng để thuốc tẩy trắng thẩm thấu tốt hơn",
        "Cách ly nướu: Dùng gel cách ly và dụng cụ bảo vệ môi để bảo vệ mô mềm tuyệt đối",
        "Thực hiện tẩy trắng: Thoa gel Pola Office và chiếu đèn Blue Laser khoảng 20 đến 30 phút",
        "Hoàn tất và hướng dẫn: Bác sĩ kiểm tra kết quả và hướng dẫn chăm sóc để giữ màu bền lâu",
      ],
    },

    features: {
      title: "TẠI SAO KHÁCH HÀNG TIN TƯỞNG EMIS DENTAL?",
      items: [
        {
          title: "Đội ngũ bác sĩ chính quy",
          description: "100% bác sĩ có chứng chỉ hành nghề, tận tâm và tỉ mỉ",
          icon: <Users className="w-8 h-8" />,
        },
        {
          title: "Cơ sở vật chất hiện đại",
          description: "Không gian phòng khám vô trùng, máy móc nhập khẩu hoàn toàn",
          icon: <Award className="w-8 h-8" />,
        },
        {
          title: "Dịch vụ tận tâm",
          description: "Chế độ chăm sóc hậu mãi chu đáo, hỗ trợ khách hàng 24/7",
          icon: <Star className="w-8 h-8" />,
        },
        {
          title: "An toàn tuyệt đối",
          description: "Sử dụng vật liệu chính hãng, đạt chuẩn quốc tế",
          icon: <Shield className="w-8 h-8" />,
        },
      ],
    },

    cta: {
      main: "Ưu đãi có hạn – inbox ngay hôm nay để được tư vấn & giữ suất!",
      question: "Bạn đã sẵn sàng đón lễ với nụ cười tỏa nắng chưa?",
      button: "ĐẶT LỊCH NGAY",
      subtext: "Hoặc liên hệ hotline để được tư vấn miễn phí!",
    },
  };

  const enContent = {
    metaTitle: "50% Off Teeth Whitening - Only 1,500,000 VND | Emis Dental",
    metaDescription:
      "Holiday season deal: 50% off teeth whitening at Emis Dental – full package for just 1,500,000 VND. Genuine Pola Office 35% gel from Australia, safe, no sensitivity, visibly whiter after one session.",

    heroTitle: "50% OFF",
    heroSubtitle: "TEETH WHITENING THIS HOLIDAY SEASON",
    heroDescription:
      "Celebrate the holidays with a radiant, confident smile — a limited-time offer from Emis Dental. Full international-standard whitening package: safe, no sensitivity, and visibly whiter after just one session.",

    dealHighlight: {
      label: "SPECIAL: Save up to 50%",
      price: "1,500,000 VND",
      unit: "per person",
      originalPrice: "3,000,000 VND",
      note: "Limited offer – message us now to secure your spot!",
    },

    perks: [
      "Safe – No sensitivity – Visible results after one session",
      "Authentic Pola Office 35% whitening gel from Australia",
      "Modern equipment & international-standard procedure",
      "Performed by experienced, certified dentists",
    ],

    sections: [
      {
        title: "WHY WHITEN YOUR TEETH THIS HOLIDAY SEASON?",
        icon: <Sun className="w-6 h-6" />,
        content:
          "The holiday season is the perfect time to refresh your look and shine in every moment. With 50% off, you can achieve a clinically-bright smile at an incredibly attractive price.",
        points: [
          "Maximum savings: Only 1,500,000 VND instead of the original 3,000,000 VND – save 1,500,000 VND instantly",
          "Immediate results: Noticeably whiter teeth after just one session, ready to celebrate the holidays with a radiant smile",
          "Complete peace of mind: Clinically-standard procedure performed by certified specialist doctors from start to finish",
        ],
      },
      {
        title: "BLUE LASER WHITENING TECHNOLOGY AT EMIS DENTAL",
        icon: <Zap className="w-6 h-6" />,
        content:
          "At Emis Dental, we combine modern Blue Laser technology with genuine Pola Office 35% whitening gel from Australia for the best balance of results and safety.",
        points: [
          "Results after just one session: Teeth whiten noticeably in 45 to 60 minutes, no need for multiple sessions like at-home kits",
          "Genuine Pola Office 35% Gel from Australia: Safe concentration with enamel-protecting ingredients that minimize sensitivity compared to standard products",
          "Blue Laser light only targets color molecules without affecting tooth structure or gum tissue, closely monitored by specialist doctors throughout the session",
        ],
      },
    ],

    pricing: {
      title: "PROMOTION DETAILS",
      service: "Blue Laser Teeth Whitening",
      originalPrice: "3,000,000 VND",
      discountPrice: "1,500,000 VND",
      period: "Holiday season offer – April 2026",
      note: "Valid for customers who book during the promotional period. Scaling not included.",
    },

    process: {
      title: "CLINICALLY STANDARD WHITENING PROCEDURE AT EMIS DENTAL",
      description:
        "Every customer goes through the full procedure below to ensure the safest and most effective outcome:",
      steps: [
        "Examination and consultation: Doctor checks oral condition and advises on the achievable level of whitening",
        "Oral hygiene: Scaling and polishing to allow optimal gel absorption",
        "Gum isolation: Protective gel and lip guard applied to protect all soft tissue",
        "Whitening session: Pola Office gel applied and Blue Laser light activated for 20 to 30 minutes",
        "Completion and guidance: Doctor reviews results and provides aftercare instructions for long-lasting color",
      ],
    },

    features: {
      title: "WHY CUSTOMERS TRUST EMIS DENTAL",
      items: [
        {
          title: "Certified Dental Team",
          description: "100% licensed practicing doctors, dedicated and precise",
          icon: <Users className="w-8 h-8" />,
        },
        {
          title: "Modern Facilities",
          description: "Sterile clinic environment with fully imported equipment",
          icon: <Award className="w-8 h-8" />,
        },
        {
          title: "Dedicated Service",
          description: "Thorough aftercare and 24/7 customer support",
          icon: <Star className="w-8 h-8" />,
        },
        {
          title: "Absolute Safety",
          description: "Genuine materials meeting international standards",
          icon: <Shield className="w-8 h-8" />,
        },
      ],
    },

    cta: {
      main: "Limited-time offer – message us today to get your consultation and secure your spot!",
      question: "Ready to celebrate the holidays with a brighter smile?",
      button: "BOOK NOW",
      subtext: "Or call our hotline for a free consultation!",
    },
  };

  const content = isVI ? viContent : enContent;

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-600 via-pink-500 to-fuchsia-600 pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "52px 26px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              <div className="inline-flex items-center bg-white/20 text-white px-5 py-2 rounded-full font-bold mb-6 text-sm">
                <Heart className="w-4 h-4 mr-2 fill-white" />
                {isVI ? "ƯU ĐÃI MÙA ĐẠI LỄ THÁNG 4" : "APRIL HOLIDAY SEASON OFFER"}
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-white mb-3 leading-tight">
                {content.heroTitle}
              </h1>

              <p className="text-2xl font-bold text-yellow-300 mb-6">
                {content.heroSubtitle}
              </p>

              <p className="text-lg text-pink-100 mb-8">
                {content.heroDescription}
              </p>

              {/* Deal Box */}
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-6 mb-8">
                <p className="text-yellow-300 font-bold text-sm mb-2 uppercase tracking-wide">
                  {content.dealHighlight.label}
                </p>
                <div className="flex items-end gap-4">
                  <div>
                    <span className="text-5xl font-black text-white">{content.dealHighlight.price}</span>
                    <span className="text-pink-200 ml-2">{content.dealHighlight.unit}</span>
                  </div>
                  <div className="mb-1">
                    <span className="text-pink-300 line-through text-lg">{content.dealHighlight.originalPrice}</span>
                  </div>
                </div>
                <p className="text-pink-200 text-sm mt-2">{content.dealHighlight.note}</p>
              </div>

              {/* Perks */}
              <div className="space-y-3">
                {content.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start text-white">
                    <Sparkles className="w-4 h-4 text-yellow-300 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-pink-100">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ad Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-transparent to-fuchsia-400 rounded-3xl opacity-40 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
                <img
                  src={adImage}
                  alt={isVI ? "Tẩy trắng răng giảm 50% tại Emis Dental" : "50% off teeth whitening at Emis Dental"}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-rose-800 px-4 py-2 rounded-full font-black shadow-lg text-sm animate-bounce">
                {isVI ? "GIẢM 50%!" : "SAVE 50%!"}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: <Clock className="w-6 h-6" />, val: "60 " + (isVI ? "phút" : "mins"), label: isVI ? "Thực hiện" : "Procedure" },
                  { icon: <Shield className="w-6 h-6" />, val: isVI ? "An toàn" : "Safe", label: isVI ? "Tuyệt đối" : "Clinically" },
                  { icon: <Sparkles className="w-6 h-6" />, val: "1 " + (isVI ? "lần" : "session"), label: isVI ? "Hiệu quả" : "Results" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center text-white">
                    <div className="text-yellow-300 flex justify-center mb-1">{stat.icon}</div>
                    <div className="font-bold text-sm">{stat.val}</div>
                    <div className="text-pink-200 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-rose-600 font-bold text-lg py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {isVI ? "ĐẶT LỊCH NGAY – GIỮ SUẤT ƯU ĐÃI" : "BOOK NOW AND SECURE YOUR SPOT"}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-fuchsia-500 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center text-white">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="font-semibold">{content.pricing.period}</span>
            </div>
            <div className="flex items-center text-white">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">0919 100 021</span>
            </div>
            <Link
              to="/contact"
              className="bg-white text-pink-700 font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm"
            >
              {isVI ? "INBOX GIỮ SUẤT NGAY" : "SECURE YOUR SPOT NOW"}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Pricing Card */}
        <div className="mb-12 bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-pink-200 rounded-3xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{content.pricing.title}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">{isVI ? "Dịch vụ" : "Service"}</p>
              <p className="font-bold text-gray-800 text-lg">{content.pricing.service}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">{isVI ? "Giá gốc" : "Original Price"}</p>
              <p className="text-2xl font-bold text-gray-400 line-through">{content.pricing.originalPrice}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">{isVI ? "Giá ưu đãi" : "Deal Price"}</p>
              <p className="text-4xl font-black text-rose-600">{content.pricing.discountPrice}</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <span className="inline-flex items-center bg-rose-100 text-rose-700 px-4 py-2 rounded-full font-semibold text-sm">
              <Clock className="w-4 h-4 mr-2" />
              {content.pricing.period}
            </span>
            <p className="text-gray-500 text-sm mt-3">{content.pricing.note}</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {content.sections.map((section, idx) => (
            <section key={idx} className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-xl flex items-center justify-center mr-4 text-white">
                  {section.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{section.title}</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">{section.content}</p>
              <div className="space-y-4">
                {section.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-rose-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Process Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{content.process.title}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">{content.process.description}</p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {content.process.steps.map((step, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-pink-100 rounded-2xl p-5 h-full hover:border-rose-300 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 text-sm">{step}</p>
                  </div>
                  {idx < content.process.steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <ChevronRight className="w-6 h-6 text-pink-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 md:p-10 border-2 border-pink-100">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{content.features.title}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.features.items.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-rose-600 via-pink-500 to-fuchsia-600 rounded-3xl p-8 md:p-10 text-center">
            <Heart className="w-16 h-16 text-white fill-white mx-auto mb-6" />
            <p className="text-xl text-pink-100 mb-4">{content.cta.main}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{content.cta.question}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-rose-600 font-bold text-lg py-4 px-8 rounded-full shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {content.cta.button}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:0919100021"
                className="inline-flex items-center justify-center bg-rose-800 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-rose-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                0919 100 021
              </a>
            </div>
            <p className="text-pink-200 text-sm">{content.cta.subtext}</p>
          </section>
        </div>

        {/* Contact Footer */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-pink-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {isVI ? "NHA KHOA QUỐC TẾ " : "EMIS "}
              <span className="text-rose-600">EMIS DENTAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-5 bg-rose-50 rounded-xl">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{isVI ? "Địa chỉ" : "Address"}</h3>
              <p className="text-gray-600 text-sm">62B Phạm Ngọc Thạch</p>
              <p className="text-gray-600 text-sm">{isVI ? "P. Xuân Hòa, TP.HCM" : "District 3, HCMC"}</p>
            </div>

            <div className="text-center p-5 bg-pink-50 rounded-xl">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Hotline</h3>
              <p className="text-lg font-bold text-rose-600">0919 100 021</p>
              <p className="text-lg font-bold text-rose-600">0768 117 068</p>
            </div>

            <div className="text-center p-5 bg-fuchsia-50 rounded-xl">
              <div className="w-12 h-12 bg-fuchsia-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-fuchsia-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Website</h3>
              <a
                href="https://www.emisdental.com"
                className="text-rose-600 hover:underline font-medium block"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.emisdental.com
              </a>
              <p className="text-gray-500 text-sm mt-1">
                8:00 – 20:00 {isVI ? "(Tất cả các ngày)" : "(All days)"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhiteningAd;
