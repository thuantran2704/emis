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
  Gem,
  Sun,
} from "lucide-react";

import viImg from "../pics/qtpn/vie-whitening.png";
import enImg from "../pics/qtpn/eng-whitening.png";

const WhiteningAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  const adImage = isVI ? viImg : enImg;

  const viContent = {
    metaTitle: "Tẩy Trắng Răng Đi 2 Tính 1 - Chỉ 1 Triệu/Khách | Emis Dental",
    metaDescription:
      "Rủ bạn cùng tẩy trắng răng – đi 2 chỉ tính tiền 1, chỉ còn 1.000.000đ/khách. Công nghệ Blue Laser, gel Pola Office chính hãng Úc, trắng sáng sau 60 phút.",

    heroTitle: "ĐI 2 TÍNH TIỀN 1",
    heroSubtitle: "TRẮNG RĂNG AN TOÀN VỚI DEAL CỰC HỜI",
    heroDescription:
      "Bạn muốn thay đổi nụ cười trắng sáng? Hãy đến Emis Dental và rủ 1 người bạn đi cùng — 2 bạn cùng REFRESH nụ cười nhưng chỉ cần thanh toán 1 suất.",

    dealHighlight: {
      label: "ĐẶC BIỆT: Tiết kiệm đến 70%",
      price: "1.000.000đ",
      unit: "/ khách",
      originalPrice: "3.000.000đ",
      note: "Áp dụng khi đến cùng 1 người bạn",
    },

    perks: [
      "Trắng bật tông sau 60 phút",
      "An toàn – chuẩn y khoa",
      "Bác sĩ chính quy trực tiếp thực hiện",
      "Gel tẩy trắng Pola Office chính hãng (xuất xứ Úc) – hạn chế đau ê tối đa",
    ],

    sections: [
      {
        title: "TẠI SAO NÊN RỦ BẠN ĐI CÙNG?",
        icon: <Users className="w-6 h-6" />,
        content:
          "Đây là chương trình dành cho những ai muốn nâng cấp nụ cười cùng người thân hoặc bạn bè. Hai người đến, hai người được hưởng, nhưng chỉ trả tiền cho một người.",
        points: [
          "Tiết kiệm tối đa: Mỗi người chỉ trả 1.000.000đ thay vì 3.000.000đ như giá gốc",
          "Cùng nhau tự tin hơn: Bạn bè hay người thân sẽ cùng có nụ cười trắng sáng sau một buổi hẹn",
          "Trải nghiệm thoải mái hơn: Đi cùng người quen giúp bạn thoải mái và bớt lo lắng hơn khi làm nha khoa",
        ],
      },
      {
        title: "CÔNG NGHỆ TẨY TRẮNG BLUE LASER TẠI EMIS DENTAL",
        icon: <Zap className="w-6 h-6" />,
        content:
          "Tại Emis Dental, chúng tôi sử dụng công nghệ Blue Laser hiện đại kết hợp gel tẩy trắng Pola Office chính hãng từ Úc – sự lựa chọn tối ưu về cả hiệu quả lẫn an toàn.",
        points: [
          "Hiệu quả sau 1 lần thực hiện: Răng trắng bật tông rõ rệt chỉ trong khoảng 45 đến 60 phút, không cần nhiều buổi như tẩy trắng tại nhà",
          "Gel Pola Office chính hãng từ Úc: Nồng độ an toàn, chứa thành phần bảo vệ men răng và hạn chế ê buốt tối đa so với các sản phẩm thông thường",
          "Ánh sáng Blue Laser chỉ tác động lên các phân tử màu, không ảnh hưởng đến cấu trúc răng hay nướu – được kiểm soát chặt chẽ bởi bác sĩ chuyên khoa",
        ],
      },
    ],

    crownSection: {
      title: "RĂNG SỨ THẨM MỸ – GIẢM ĐẾN 60%",
      subtitle: "Cơ hội nâng cấp nụ cười với mức ưu đãi tốt nhất trong năm",
      badge: "GIẢM ĐẾN 60%",
      description:
        "Áp dụng cho tất cả các dòng răng toàn sứ chính hãng: Zirconia (Mỹ), DD Bio (Đức), Cercon HT (Mỹ), Lava (Mỹ) và nhiều dòng khác.",
      suitableFor: {
        title: "Phù hợp cho khách hàng muốn:",
        items: [
          "Cải thiện răng xỉn màu, nhiễm màu nặng",
          "Khắc phục răng thưa, mẻ, lệch nhẹ, lệch khớp cắn nhẹ",
          "Tái tạo form răng hài hòa gương mặt",
          "Sở hữu nụ cười sáng và tự tin hơn",
        ],
      },
      guarantees: {
        title: "Tất cả dòng răng toàn sứ tại Emis Dental đều đảm bảo:",
        items: [
          "Vật liệu sứ chính hãng",
          "Độ bền cao",
          "Màu sắc tự nhiên",
          "Thực hiện bởi bác sĩ chính quy có chuyên môn",
        ],
      },
      link: "/crownAd",
    },

    pricing: {
      title: "CHI TIẾT ƯU ĐÃI",
      service: "Tẩy trắng răng chiếu đèn Blue Laser",
      originalPrice: "3.000.000đ",
      discountPrice: "1.000.000đ",
      period: "Áp dụng trong tháng 3/2026",
      note: "Áp dụng khi đăng ký theo cặp (2 người). Chưa bao gồm cạo vôi răng.",
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
      main: "Đừng bỏ lỡ cơ hội nhận ưu đãi quá hời này – inbox giữ suất ngay hôm nay!",
      question: "Bạn đã sẵn sàng rủ bạn đi làm trắng răng chưa?",
      button: "ĐẶT LỊCH NGAY",
      subtext: "Hoặc liên hệ hotline để được tư vấn miễn phí!",
    },
  };

  const enContent = {
    metaTitle: "Teeth Whitening 2-for-1 Deal - Only 1M VND per person | Emis Dental",
    metaDescription:
      "Bring a friend and only pay for one! Teeth whitening for just 1,000,000 VND per person. Blue Laser technology, genuine Pola Office gel from Australia, whiter in 60 minutes.",

    heroTitle: "BRING A FRIEND, PAY FOR ONE",
    heroSubtitle: "SAFE TEETH WHITENING WITH AN UNBEATABLE DEAL",
    heroDescription:
      "Want a brighter, whiter smile? Come to Emis Dental and bring a friend along — 2 of you REFRESH your smiles, but only pay for 1 person.",

    dealHighlight: {
      label: "SPECIAL: Save up to 70%",
      price: "1,000,000 VND",
      unit: "per person",
      originalPrice: "3,000,000 VND",
      note: "Valid when visiting with 1 friend",
    },

    perks: [
      "Noticeably whiter in 60 minutes",
      "Safe and clinically approved",
      "Performed directly by certified specialist doctors",
      "Genuine Pola Office whitening gel (Australia) for minimal sensitivity",
    ],

    sections: [
      {
        title: "WHY BRING A FRIEND?",
        icon: <Users className="w-6 h-6" />,
        content:
          "This promotion is designed for those who want to upgrade their smile together with a friend or loved one. Two people come, two people benefit, but only one person pays.",
        points: [
          "Maximum savings: Each person pays only 1,000,000 VND instead of the original 3,000,000 VND",
          "Boost confidence together: Both you and your friend walk out with a brighter, whiter smile from a single appointment",
          "A more comfortable experience: Coming with someone familiar makes the whole dental visit feel easier and more relaxed",
        ],
      },
      {
        title: "BLUE LASER WHITENING TECHNOLOGY AT EMIS DENTAL",
        icon: <Zap className="w-6 h-6" />,
        content:
          "At Emis Dental, we combine modern Blue Laser technology with genuine Pola Office whitening gel from Australia for the best balance of results and safety.",
        points: [
          "Results after just one session: Teeth whiten noticeably in 45 to 60 minutes, no need for multiple sessions like at-home kits",
          "Genuine Pola Office Gel from Australia: Safe concentration with enamel-protecting ingredients that minimize sensitivity compared to standard products",
          "Blue Laser light only targets color molecules without affecting tooth structure or gum tissue, closely monitored by specialist doctors throughout the session",
        ],
      },
    ],

    crownSection: {
      title: "PREMIUM DENTAL CROWNS UP TO 60% OFF",
      subtitle: "The best opportunity of the year to upgrade your smile",
      badge: "UP TO 60% OFF",
      description:
        "Applies to all genuine all-ceramic crown brands: Zirconia (USA), DD Bio (Germany), Cercon HT (USA), Lava (USA) and more.",
      suitableFor: {
        title: "Ideal for patients who want to:",
        items: [
          "Correct heavily stained or discolored teeth",
          "Fix gaps, chips, mild misalignment, or minor bite issues",
          "Reshape teeth to better harmonize with facial features",
          "Achieve a brighter, more confident smile",
        ],
      },
      guarantees: {
        title: "All ceramic crowns at Emis Dental come with:",
        items: [
          "Genuine certified ceramic materials",
          "High durability",
          "Natural-looking color",
          "Performed by qualified specialist doctors",
        ],
      },
      link: "/crownAd",
    },

    pricing: {
      title: "PROMOTION DETAILS",
      service: "Blue Laser Teeth Whitening",
      originalPrice: "3,000,000 VND",
      discountPrice: "1,000,000 VND",
      period: "Valid throughout March 2026",
      note: "Applied when booking as a pair (2 people). Scaling not included.",
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
      main: "Don't miss out on this incredible deal. Send us a message today to secure your spot!",
      question: "Ready to bring a friend and refresh your smiles together?",
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
                {isVI ? "CHƯƠNG TRÌNH THÁNG 3 – 8/3 YÊU THƯƠNG" : "MARCH SPECIAL – WOMEN'S DAY OFFER"}
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
                  alt={isVI ? "Tẩy trắng răng đi 2 tính 1 tại Emis Dental" : "2-for-1 teeth whitening at Emis Dental"}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-rose-800 px-4 py-2 rounded-full font-black shadow-lg text-sm animate-bounce">
                {isVI ? "TIẾT KIỆM 70%!" : "SAVE 70%!"}
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

          {/* Crown Upsell Section */}
          <section className="bg-gradient-to-br from-rose-600 to-fuchsia-700 rounded-3xl p-8 md:p-10 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                <div>
                  <span className="inline-block bg-yellow-400 text-rose-900 text-sm font-black px-4 py-1 rounded-full mb-3">
                    {content.crownSection.badge}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold">{content.crownSection.title}</h2>
                  <p className="text-pink-200 mt-1">{content.crownSection.subtitle}</p>
                </div>
                <Gem className="w-12 h-12 text-yellow-300 flex-shrink-0" />
              </div>

              <p className="text-pink-100 mb-8">{content.crownSection.description}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-yellow-300 mb-4">{content.crownSection.suitableFor.title}</h3>
                  <ul className="space-y-3">
                    {content.crownSection.suitableFor.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-yellow-300 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-pink-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-yellow-300 mb-4">{content.crownSection.guarantees.title}</h3>
                  <ul className="space-y-3">
                    {content.crownSection.guarantees.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-yellow-300 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-pink-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                to={content.crownSection.link}
                className="inline-flex items-center bg-white text-rose-700 font-bold py-3 px-8 rounded-full hover:bg-yellow-50 transition-colors shadow-lg"
              >
                {isVI ? "XEM CHI TIẾT ƯU ĐÃI RĂNG SỨ" : "VIEW CROWN PROMOTION DETAILS"}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </section>

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
