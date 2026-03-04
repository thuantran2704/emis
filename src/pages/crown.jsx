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
  Smile,
  Palette,
  Gem,
  Camera,
} from "lucide-react";

import viImg from "../pics/qtpn/vie-ceramic.png";
import enImg from "../pics/qtpn/eng-ceramic.png";

const CrownAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  const adImage = isVI ? viImg : enImg;

  const viContent = {
    metaTitle: "Răng Sứ Thẩm Mỹ Giảm Đến 60% - Tháng 3 Ưu Đãi | Emis Dental",
    metaDescription:
      "Tháng 3 ưu đãi: Giảm đến 60% tất cả dòng răng toàn sứ chính hãng Zirconia (Mỹ), DD Bio (Đức), Cercon HT (Mỹ), Lava (Mỹ) tại Emis Dental.",

    heroTitle: "RĂNG SỨ THẨM MỸ",
    heroSubtitle: "GIẢM ĐẾN 60% – ƯU ĐÃI TỐT NHẤT TRONG NĂM",
    heroDescription:
      "Cơ hội nâng cấp nụ cười với mức ưu đãi tốt nhất trong năm. Giảm đến 60% tất cả các dòng răng toàn sứ chính hãng tại Emis Dental.",

    brands: {
      title: "CÁC DÒNG RĂNG SỨ ĐANG ƯU ĐÃI",
      items: [
        { name: "Zirconia", origin: "Mỹ", discount: "Giảm đến 60%" },
        { name: "DD Bio", origin: "Đức", discount: "Giảm đến 60%" },
        { name: "Cercon HT", origin: "Mỹ", discount: "Giảm đến 60%" },
        { name: "Lava", origin: "Mỹ", discount: "Giảm đến 60%" },
      ],
    },

    suitableFor: {
      title: "PHÙ HỢP CHO KHÁCH HÀNG MUỐN:",
      items: [
        "Cải thiện răng xỉn màu, nhiễm màu nặng",
        "Khắc phục răng thưa, mẻ, lệch nhẹ, lệch khớp cắn nhẹ",
        "Tái tạo form răng hài hòa gương mặt",
        "Sở hữu nụ cười sáng và tự tin hơn",
      ],
    },

    guarantees: {
      title: "TẤT CẢ DÒNG RĂNG TOÀN SỨ TẠI EMIS DENTAL ĐỀU ĐẢM BẢO:",
      items: [
        "Vật liệu sứ chính hãng, có tem nhập khẩu rõ ràng",
        "Độ bền cao, màu sắc tự nhiên, không thâm viền nướu",
        "Thực hiện bởi bác sĩ chính quy có chuyên môn",
        "Bảo hành dài hạn từ 5 đến 10 năm",
      ],
    },

    sections: [
      {
        title: "TẠI SAO NÊN CHỌN THẨM MỸ RĂNG SỨ TẠI EMIS DENTAL?",
        icon: <Star className="w-6 h-6" />,
        content:
          "Thẩm mỹ răng sứ không chỉ là một dịch vụ nha khoa, mà là nghệ thuật thay đổi thần thái khuôn mặt. Tại Emis Dental, chúng tôi cam kết mang lại nụ cười đạt tỉ lệ vàng nhờ:",
        points: [
          "Bảo tồn răng thật tối đa: Ưu tiên kỹ thuật ít xâm lấn, mài răng tối thiểu để bảo vệ cấu trúc và tủy răng tự nhiên",
          "Thiết kế nụ cười cá nhân hóa: Bác sĩ tư vấn dáng răng phù hợp với khuôn mặt và phong cách của từng khách hàng thông qua Smile Design 3D",
          "Chất liệu sứ cao cấp chính hãng: 100% vật liệu có nguồn gốc rõ ràng từ Đức, Mỹ với độ bền cao và tính thấu quang tốt",
        ],
      },
    ],

    process: {
      title: "QUY TRÌNH KIẾN TẠO NỤ CƯỜI TẠI EMIS DENTAL",
      description:
        "Ứng dụng quy trình kỹ thuật số hiện đại, đảm bảo độ chính xác tuyệt đối:",
      steps: [
        "Chụp phim và Thiết kế nụ cười 3D: Xem trước kết quả nụ cười tương lai qua phần mềm Smile Design",
        "Vệ sinh và xử lý bề mặt: Đảm bảo môi trường vô trùng và bảo tồn men răng tối ưu",
        "Chế tác răng sứ tại Labo riêng: Công nghệ CAD/CAM hiện đại, độ tinh xảo từng milimet",
        "Lắp răng sứ và hiệu chỉnh: Điều chỉnh khớp cắn kỹ lưỡng, đảm bảo cảm giác thoải mái",
        "Chăm sóc và bảo hành: Cấp thẻ bảo hành chính hãng, hướng dẫn chăm sóc bền lâu",
      ],
    },

    features: {
      title: "LỢI ÍCH KHI CHỌN RĂNG SỨ TẠI EMIS DENTAL",
      items: [
        {
          title: "Bảo tồn răng thật",
          description: "Mài răng tối thiểu, bảo vệ cấu trúc tự nhiên",
          icon: <Shield className="w-8 h-8" />,
        },
        {
          title: "Thiết kế cá nhân hóa",
          description: "Smile Design 3D, phù hợp khuôn mặt và phong cách",
          icon: <Palette className="w-8 h-8" />,
        },
        {
          title: "Chất liệu cao cấp",
          description: "Sứ nhập khẩu chính hãng Đức, Mỹ",
          icon: <Gem className="w-8 h-8" />,
        },
        {
          title: "Đội ngũ chuyên gia",
          description: "Bác sĩ kinh nghiệm, tay nghề cao",
          icon: <Users className="w-8 h-8" />,
        },
      ],
    },

    finalMessage: {
      title: "ĐỪNG BỎ LỠ CƠ HỘI LÀM RĂNG SỨ TIẾT KIỆM HƠN BAO GIỜ HẾT!",
      content:
        "Một nụ cười mới không chỉ giúp bạn tự tin hơn trong mọi tình huống mà còn mang lại nguồn năng lượng tích cực cho cả năm. Với trang thiết bị hiện đại và đội ngũ bác sĩ tận tâm, Emis Dental tự hào là địa chỉ uy tín được nhiều khách hàng tin tưởng lựa chọn.",
    },

    cta: {
      title: "SẴN SÀNG ĐỂ CÓ NỤ CƯỜI HOÀN HẢO?",
      button: "NHẬN TƯ VẤN VÀ BÁO GIÁ MIỄN PHÍ",
      subtext: "Số lượng ưu đãi có hạn – Đừng bỏ lỡ!",
    },
  };

  const enContent = {
    metaTitle: "Cosmetic Porcelain Crowns Up to 60% Off – March Special | Emis Dental",
    metaDescription:
      "March special: Up to 60% off all genuine all-ceramic crowns including Zirconia (USA), DD Bio (Germany), Cercon HT (USA), Lava (USA) at Emis Dental.",

    heroTitle: "COSMETIC PORCELAIN CROWNS",
    heroSubtitle: "UP TO 60% OFF – BEST DEAL OF THE YEAR",
    heroDescription:
      "Upgrade your smile with the best promotion of the year. Enjoy up to 60% off all genuine all-ceramic crown lines at Emis Dental.",

    brands: {
      title: "CROWN LINES ON PROMOTION",
      items: [
        { name: "Zirconia", origin: "USA", discount: "Up to 60% off" },
        { name: "DD Bio", origin: "Germany", discount: "Up to 60% off" },
        { name: "Cercon HT", origin: "USA", discount: "Up to 60% off" },
        { name: "Lava", origin: "USA", discount: "Up to 60% off" },
      ],
    },

    suitableFor: {
      title: "IDEAL FOR PATIENTS WHO WANT TO:",
      items: [
        "Improve discolored or severely stained teeth",
        "Correct gaps, chipped teeth, mild misalignment, or minor bite issues",
        "Enhance tooth shape for better facial harmony",
        "Achieve a brighter, more confident smile",
      ],
    },

    guarantees: {
      title: "ALL CERAMIC CROWNS AT EMIS DENTAL ARE GUARANTEED WITH:",
      items: [
        "Genuine certified porcelain materials with clear import documentation",
        "High durability, natural color, and no gum line darkening over time",
        "Treatment performed by licensed and experienced specialist dentists",
        "Long-term warranty from 5 to 10 years",
      ],
    },

    sections: [
      {
        title: "WHY CHOOSE COSMETIC CROWNS AT EMIS DENTAL?",
        icon: <Star className="w-6 h-6" />,
        content:
          "Cosmetic crowns are not just a dental service but an art that transforms your facial appearance. At Emis Dental, we are committed to delivering smiles with the perfect golden ratio through:",
        points: [
          "Maximum natural tooth preservation: We prioritize minimally invasive techniques with minimal tooth reduction to protect natural tooth structure and pulp",
          "Personalized smile design: Doctors advise on tooth shapes suited to each patient's face and style using 3D Smile Design software",
          "Genuine premium crown materials: 100% of materials have clear origins from Germany and the USA, offering high durability and excellent translucency",
        ],
      },
    ],

    process: {
      title: "SMILE CREATION PROCESS AT EMIS DENTAL",
      description:
        "We apply modern digital processes to ensure absolute accuracy and efficiency:",
      steps: [
        "Imaging and 3D Smile Design: Preview your future smile results through Smile Design software",
        "Cleaning and surface treatment: Ensure sterile environment and optimal enamel preservation",
        "Crown fabrication in dedicated Lab: Modern CAD/CAM technology for millimeter-perfect precision",
        "Crown installation and adjustment: Thorough bite adjustment for comfortable chewing with no roughness",
        "Care and warranty: Issue genuine warranty card and provide aftercare guidance",
      ],
    },

    features: {
      title: "BENEFITS OF CHOOSING CROWNS AT EMIS DENTAL",
      items: [
        {
          title: "Natural Tooth Preservation",
          description: "Minimal tooth reduction, protect natural structure",
          icon: <Shield className="w-8 h-8" />,
        },
        {
          title: "Personalized Design",
          description: "3D Smile Design suited to your face and style",
          icon: <Palette className="w-8 h-8" />,
        },
        {
          title: "Premium Materials",
          description: "Genuine imported porcelain from Germany and the USA",
          icon: <Gem className="w-8 h-8" />,
        },
        {
          title: "Expert Team",
          description: "Experienced, highly skilled specialist dentists",
          icon: <Users className="w-8 h-8" />,
        },
      ],
    },

    finalMessage: {
      title: "DON'T MISS THIS CHANCE TO TRANSFORM YOUR SMILE AT EXCEPTIONAL VALUE!",
      content:
        "A new smile not only gives you greater confidence in every situation but also brings positive energy throughout the year. With modern equipment and a dedicated dental team, Emis Dental is proud to be a trusted clinic chosen by numerous satisfied customers.",
    },

    cta: {
      title: "READY FOR YOUR PERFECT SMILE?",
      button: "GET FREE CONSULTATION AND QUOTE",
      subtext: "Limited promotional slots available — don't miss out!",
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
            {/* Text */}
            <div>
              <div className="inline-flex items-center bg-white/20 text-white px-5 py-2 rounded-full font-bold mb-6 text-sm">
                <Heart className="w-4 h-4 mr-2 fill-white" />
                {isVI ? "THÁNG 3 YÊU THƯƠNG – ƯU ĐÃI ĐẶC BIỆT" : "MARCH SPECIAL OFFER"}
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
                {content.heroTitle}
              </h1>

              <p className="text-2xl font-bold text-yellow-300 mb-6">
                {content.heroSubtitle}
              </p>

              <p className="text-lg text-pink-100 mb-8">{content.heroDescription}</p>

              {/* Brand pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {content.brands.items.map((brand, idx) => (
                  <div key={idx} className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white text-sm">
                    <span className="font-bold">{brand.name}</span>
                    <span className="text-pink-200 ml-1">({brand.origin})</span>
                  </div>
                ))}
              </div>

              {/* Discount badge */}
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-5 inline-block">
                <p className="text-pink-200 text-sm mb-1">{isVI ? "Ưu đãi lên đến" : "Discount up to"}</p>
                <p className="text-6xl font-black text-yellow-300">60%</p>
                <p className="text-pink-100 text-sm mt-1">{isVI ? "tất cả dòng răng toàn sứ" : "all ceramic crown lines"}</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-transparent to-fuchsia-400 rounded-3xl opacity-40 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
                <img
                  src={adImage}
                  alt={isVI ? "Răng sứ thẩm mỹ tháng 3 tại Emis Dental" : "Cosmetic crowns March offer at Emis Dental"}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-rose-800 px-4 py-2 rounded-full font-black shadow-lg text-sm animate-bounce">
                {isVI ? "GIẢM 60%!" : "60% OFF!"}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, val: isVI ? "Chính hãng" : "Genuine", label: isVI ? "Vật liệu" : "Materials" },
                  { icon: <Award className="w-5 h-5" />, val: "5-10 " + (isVI ? "năm" : "yrs"), label: isVI ? "Bảo hành" : "Warranty" },
                  { icon: <Sparkles className="w-5 h-5" />, val: "CAD/CAM", label: isVI ? "Công nghệ" : "Technology" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center text-white">
                    <div className="text-yellow-300 flex justify-center mb-1">{stat.icon}</div>
                    <div className="font-bold text-xs">{stat.val}</div>
                    <div className="text-pink-200 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-rose-600 font-bold text-lg py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {isVI ? "ĐẶT LỊCH TƯ VẤN MIỄN PHÍ" : "BOOK FREE CONSULTATION"}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-fuchsia-500 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center text-white">
              <Clock className="w-4 h-4 mr-2" />
              <span className="font-semibold">{isVI ? "Ưu đãi áp dụng trong tháng 3/2026" : "Offer valid throughout March 2026"}</span>
            </div>
            <div className="flex items-center text-white">
              <Shield className="w-4 h-4 mr-2" />
              <span className="font-semibold">{isVI ? "Bảo hành 5-10 năm" : "5-10 Years Warranty"}</span>
            </div>
            <Link
              to="/contact"
              className="bg-white text-pink-700 font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm"
            >
              {isVI ? "ĐĂNG KÝ NGAY" : "REGISTER NOW"}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">

          {/* Suitable For + Guarantees */}
          <div className="grid md:grid-cols-2 gap-6">
            <section className="bg-white rounded-3xl shadow-xl p-8 border border-pink-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-lg flex items-center justify-center mr-3 text-white">
                  <Smile className="w-4 h-4" />
                </div>
                {content.suitableFor.title}
              </h2>
              <ul className="space-y-4">
                {content.suitableFor.items.map((item, idx) => (
                  <li key={idx} className="flex items-start bg-rose-50 rounded-xl p-3 border border-pink-100">
                    <CheckCircle className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-8 border border-pink-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-lg flex items-center justify-center mr-3 text-white">
                  <Shield className="w-4 h-4" />
                </div>
                {content.guarantees.title}
              </h2>
              <ul className="space-y-4">
                {content.guarantees.items.map((item, idx) => (
                  <li key={idx} className="flex items-start bg-fuchsia-50 rounded-xl p-3 border border-fuchsia-100">
                    <CheckCircle className="w-5 h-5 text-fuchsia-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Brands Grid */}
          <section className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 border-2 border-pink-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{content.brands.title}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {content.brands.items.map((brand, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 text-center shadow-lg border border-pink-100 hover:border-rose-300 hover:shadow-xl transition-all">
                  <Gem className="w-10 h-10 text-rose-500 mx-auto mb-3" />
                  <h3 className="font-black text-gray-800 text-lg">{brand.name}</h3>
                  <p className="text-fuchsia-600 text-sm font-semibold mb-2">{brand.origin}</p>
                  <span className="inline-block bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {brand.discount}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Section */}
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
                  <div key={pIdx} className="flex items-start bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-5 border border-pink-100">
                    <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold text-sm">
                      {pIdx + 1}
                    </div>
                    <p className="text-gray-700">{point}</p>
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

            {/* Smile Design callout */}
            <div className="mt-8 bg-gradient-to-r from-rose-50 to-fuchsia-50 rounded-2xl p-6 border border-pink-100 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white rounded-xl p-5 shadow-md border border-pink-100 flex-shrink-0 text-center w-40">
                <Camera className="w-12 h-12 text-rose-500 mx-auto mb-2" />
                <p className="font-bold text-gray-800 text-sm">3D SMILE DESIGN</p>
                <p className="text-gray-500 text-xs">{isVI ? "Xem trước kết quả" : "Preview results"}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {isVI ? "Công nghệ thiết kế nụ cười 3D tiên tiến" : "Advanced 3D Smile Design Technology"}
                </h3>
                <p className="text-gray-600 mb-3">
                  {isVI
                    ? "Tại Emis Dental, bạn có thể xem trước kết quả nụ cười tương lai qua phần mềm Smile Design 3D trước khi bắt đầu điều trị. Không bất ngờ, không lo lắng."
                    : "At Emis Dental, you can preview your future smile result through 3D Smile Design software before starting treatment. No surprises, no uncertainty."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-semibold border border-rose-200">
                    {isVI ? "Hình ảnh 3D thực tế" : "Realistic 3D Preview"}
                  </span>
                  <span className="bg-fuchsia-100 text-fuchsia-700 px-3 py-1 rounded-full text-xs font-semibold border border-fuchsia-200">
                    {isVI ? "Chỉnh sửa trực tiếp" : "Live Editing"}
                  </span>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold border border-pink-200">
                    {isVI ? "Phù hợp khuôn mặt" : "Face Matching"}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
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
          <section className="bg-gradient-to-r from-rose-600 via-pink-500 to-fuchsia-600 rounded-3xl p-8 md:p-10 text-center shadow-xl">
            <Heart className="w-16 h-16 text-white fill-white mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{content.cta.title}</h2>
            <p className="text-pink-100 mb-8 max-w-2xl mx-auto">{content.finalMessage.content}</p>
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
            <p className="text-pink-200 text-sm font-semibold">{content.cta.subtext}</p>
          </section>
        </div>

        {/* Contact Footer */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-pink-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {isVI ? "NHA KHOA QUỐC TẾ " : ""}
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
              <p className="text-gray-600 text-sm">
                {isVI ? "P. Xuân Hòa, TP.HCM" : "Vo Thi Sau Ward, District 3, HCMC"}
              </p>
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

export default CrownAd;
