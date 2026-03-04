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
  Leaf,
  DollarSign,
} from "lucide-react";

import viImg from "../pics/qtpn/vie-implant.png";
import enImg from "../pics/qtpn/eng-implant.png";

const ImplantAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  const adImage = isVI ? viImg : enImg;

  const viContent = {
    metaTitle: "Implant Osstem Chính Hãng Trọn Gói Chỉ 7.900.000đ | Emis Dental",
    metaDescription:
      "Tháng 3 ưu đãi: Implant Osstem chính hãng (Hàn Quốc) trọn gói chỉ 7.900.000đ/răng. Phục hồi ăn nhai, thẩm mỹ gương mặt tại Emis Dental.",

    heroTitle: "IMPLANT OSSTEM CHÍNH HÃNG",
    heroSubtitle: "TRỌN GÓI CHỈ 7.900.000Đ / RĂNG",
    heroDescription:
      "Mất răng lâu ngày gây nhiều biến chứng ảnh hưởng đến chức năng ăn nhai và thẩm mỹ gương mặt của bạn. Đừng lo lắng vì cơ hội phục hồi răng với dòng Implant Osstem chính hãng đang có mức giá cực tốt tại Emis Dental.",

    dealHighlight: {
      label: "Giá gốc: 20.000.000đ",
      price: "7.900.000đ",
      unit: "/ răng",
      originalPrice: "20.000.000đ",
      badge: "TIẾT KIỆM 60%",
    },

    whyGreat: {
      title: "VÌ SAO ĐÂY LÀ MỨC GIÁ \"QUÁ LỢI\"?",
      items: [
        "Implant Osstem (xuất xứ Hàn Quốc) thuộc top thương hiệu phổ biến toàn cầu",
        "Độ tích hợp xương cao – bền chắc lâu dài",
        "Phục hồi ăn nhai gần như răng thật",
        "Thực hiện bởi bác sĩ chuyên môn có chứng chỉ hành nghề",
      ],
    },

    sections: [
      {
        title: "MẤT RĂNG LÂU NGÀY GÂY RA NHỮNG HỆ LỤY GÌ?",
        icon: <Shield className="w-6 h-6" />,
        content:
          "Nhiều người chủ quan khi mất một hoặc vài chiếc răng, nhưng đây là vấn đề cần được giải quyết sớm để tránh các biến chứng nghiêm trọng:",
        points: [
          "Tiêu xương hàm: Mất răng khiến xương hàm không được kích thích, dần bị tiêu biến theo thời gian, dẫn đến biến dạng khuôn mặt",
          "Răng kế cận bị xô lệch: Khoảng trống do mất răng khiến các răng xung quanh dần nghiêng vào, gây lệch khớp cắn và khó vệ sinh",
          "Giảm khả năng ăn nhai: Việc nhai không đều ảnh hưởng đến tiêu hóa và sức khỏe tổng thể",
          "Lão hóa sớm: Mất răng lâu ngày làm xương hàm teo lại, khiến khuôn mặt trông già và xuất hiện nếp nhăn sớm hơn",
        ],
      },
      {
        title: "TẠI SAO IMPLANT OSSTEM LÀ LỰA CHỌN THÔNG MINH?",
        icon: <Award className="w-6 h-6" />,
        content:
          "Osstem là thương hiệu Implant hàng đầu đến từ Hàn Quốc, được hàng triệu nha sĩ và bệnh nhân trên toàn thế giới tin dùng nhờ những ưu điểm nổi bật:",
        points: [
          "Thương hiệu toàn cầu: Osstem là một trong những hãng Implant được sử dụng phổ biến nhất thế giới, được phân phối tại hơn 80 quốc gia",
          "Tích hợp xương vượt trội: Bề mặt trụ được xử lý đặc biệt giúp xương hàm liên kết nhanh và chắc chắn, rút ngắn thời gian lành thương",
          "Độ bền cao: Trụ Implant Osstem được làm từ Titanium y tế cao cấp, chịu lực tốt và tương thích sinh học hoàn toàn",
          "Chi phí tối ưu: Chất lượng tương đương các thương hiệu châu Âu nhưng mức giá hợp lý hơn, phù hợp với nhiều đối tượng khách hàng",
        ],
      },
    ],

    process: {
      title: "QUY TRÌNH TRỒNG RĂNG IMPLANT AN TOÀN TẠI EMIS DENTAL",
      description:
        "Mỗi ca Implant tại Emis Dental được thực hiện theo quy trình chuẩn y khoa, đảm bảo an toàn và hiệu quả tối ưu:",
      steps: [
        "Thăm khám và chụp CT ConeBeam 3D: Khảo sát chính xác cấu trúc xương hàm, mạch máu và thần kinh để lên phác đồ đặt trụ an toàn nhất",
        "Lập phác đồ cá nhân hóa: Bác sĩ tư vấn chi tiết lộ trình điều trị phù hợp với tình trạng sức khỏe và nhu cầu của từng khách hàng",
        "Đặt trụ Implant: Tiểu phẫu nhẹ nhàng, được gây tê cục bộ, thực hiện bởi bác sĩ chuyên khoa Implant giàu kinh nghiệm",
        "Gắn phục hình: Sau khi trụ tích hợp xương hoàn toàn, bác sĩ gắn abutment và mão răng sứ, hoàn thiện nụ cười",
        "Theo dõi và bảo hành: Hẹn tái khám định kỳ, bảo hành dài hạn theo chính sách của Emis Dental",
      ],
    },

    features: {
      title: "LỢI ÍCH KHI CHỌN IMPLANT TẠI EMIS DENTAL",
      items: [
        {
          title: "Trụ Osstem chính hãng",
          description: "Trụ nhập khẩu trực tiếp, có tem chính hãng, không hàng giả",
          icon: <Shield className="w-8 h-8" />,
        },
        {
          title: "Bác sĩ chuyên khoa",
          description: "Đội ngũ bác sĩ chuyên sâu Implant, kinh nghiệm trên 10 năm",
          icon: <Users className="w-8 h-8" />,
        },
        {
          title: "Công nghệ CT 3D",
          description: "Chẩn đoán hình ảnh CT ConeBeam 3D, lập phác đồ chính xác",
          icon: <Zap className="w-8 h-8" />,
        },
        {
          title: "Bảo hành dài hạn",
          description: "Chế độ bảo hành trụ Implant lên đến 15 năm",
          icon: <Award className="w-8 h-8" />,
        },
      ],
    },

    investment: {
      title: "ĐẦU TƯ MỘT LẦN – HƯỞNG LỢI TRỌN ĐỜI",
      content:
        "Trồng răng Implant không chỉ là giải pháp thẩm mỹ mà còn là đầu tư cho sức khỏe lâu dài. Một chiếc răng Implant được chăm sóc đúng cách có thể tồn tại vĩnh viễn, giúp bạn tiết kiệm đáng kể so với các phương pháp phục hình tạm thời.",
      benefits: [
        { icon: <Leaf className="w-8 h-8" />, title: "Sức khỏe toàn diện", desc: "Cải thiện tiêu hóa, ngăn ngừa các bệnh dạ dày do nhai không đều" },
        { icon: <DollarSign className="w-8 h-8" />, title: "Tiết kiệm lâu dài", desc: "Đầu tư một lần, sử dụng suốt đời – không cần thay thế định kỳ" },
        { icon: <Heart className="w-8 h-8" />, title: "Tự tin tỏa sáng", desc: "Nụ cười hoàn chỉnh, gương mặt trẻ trung, tự tin trong mọi hoàn cảnh" },
      ],
    },

    cta: {
      title: "SỐ LƯỢNG ƯU ĐÃI CÓ HẠN – ĐẶT HẸN NGAY HÔM NAY!",
      button: "ĐĂNG KÝ TƯ VẤN MIỄN PHÍ",
      subtext: "Trồng răng Implant chất lượng – chi phí tối ưu – đảm bảo quy trình y khoa.",
    },
  };

  const enContent = {
    metaTitle: "Genuine Osstem Implant Package – Only 7,900,000 VND | Emis Dental",
    metaDescription:
      "March special: Genuine Osstem Implant (Korea) complete package only 7,900,000 VND per tooth. Restore chewing function and facial aesthetics at Emis Dental.",

    heroTitle: "GENUINE OSSTEM IMPLANT",
    heroSubtitle: "COMPLETE PACKAGE – ONLY 7,900,000 VND / TOOTH",
    heroDescription:
      "Long-term tooth loss can lead to serious complications, affecting both chewing function and facial aesthetics. Don't worry — this is your opportunity to restore your smile with a genuine Osstem Implant at an exceptional price at Emis Dental.",

    dealHighlight: {
      label: "Original price: 20,000,000 VND",
      price: "7,900,000 VND",
      unit: "per tooth",
      originalPrice: "20,000,000 VND",
      badge: "SAVE 60%",
    },

    whyGreat: {
      title: "WHY IS THIS SUCH AN INCREDIBLE OFFER?",
      items: [
        "Genuine Osstem Implant (Made in Korea) — one of the most trusted and widely used brands worldwide",
        "High bone integration rate for long-lasting stability",
        "Restores chewing function almost like natural teeth",
        "Performed by experienced and licensed specialist dentists",
      ],
    },

    sections: [
      {
        title: "WHAT COMPLICATIONS DOES LONG-TERM TOOTH LOSS CAUSE?",
        icon: <Shield className="w-6 h-6" />,
        content:
          "Many people underestimate the impact of losing one or a few teeth, but addressing this early is critical to avoiding serious complications:",
        points: [
          "Jawbone resorption: Without a tooth root to stimulate the bone, the jawbone gradually shrinks over time, leading to facial deformity",
          "Adjacent teeth shifting: The gap from a missing tooth causes neighboring teeth to tilt inward, leading to bite misalignment and difficulty cleaning",
          "Reduced chewing ability: Uneven chewing affects digestion and overall health",
          "Premature aging: Long-term tooth loss causes the jawbone to shrink, making the face appear older with earlier wrinkle formation",
        ],
      },
      {
        title: "WHY IS OSSTEM IMPLANT A SMART CHOICE?",
        icon: <Award className="w-6 h-6" />,
        content:
          "Osstem is a leading implant brand from Korea, trusted by millions of dentists and patients worldwide for its outstanding advantages:",
        points: [
          "Global brand: Osstem is one of the most widely used implant brands in the world, distributed in over 80 countries",
          "Superior bone integration: The specially treated implant surface helps the jawbone bond quickly and firmly, shortening healing time",
          "High durability: Osstem implants are made from premium medical-grade Titanium, offering excellent load-bearing capacity and full biocompatibility",
          "Optimized cost: Quality comparable to European brands at a more accessible price point, suitable for a wide range of patients",
        ],
      },
    ],

    process: {
      title: "SAFE DENTAL IMPLANT PROCEDURE AT EMIS DENTAL",
      description:
        "Every implant case at Emis Dental follows a clinically standard procedure, ensuring safety and optimal outcomes:",
      steps: [
        "Examination and CT ConeBeam 3D scan: Accurately surveys jawbone structure, blood vessels, and nerves to create the safest implant placement plan",
        "Personalized treatment planning: The doctor provides a detailed treatment roadmap tailored to each patient's health condition and needs",
        "Implant placement: A minor surgical procedure under local anesthesia, performed by an experienced implant specialist",
        "Crown placement: Once the implant fully integrates with the bone, the abutment and ceramic crown are attached to complete the smile",
        "Follow-up and warranty: Scheduled check-up appointments with long-term warranty coverage per Emis Dental policy",
      ],
    },

    features: {
      title: "BENEFITS OF CHOOSING IMPLANTS AT EMIS DENTAL",
      items: [
        {
          title: "Genuine Osstem Implants",
          description: "Directly imported with authentic certification, no counterfeit products",
          icon: <Shield className="w-8 h-8" />,
        },
        {
          title: "Specialist Dentists",
          description: "Implant-focused team with over 10 years of experience",
          icon: <Users className="w-8 h-8" />,
        },
        {
          title: "CT 3D Technology",
          description: "CT ConeBeam 3D imaging for precise diagnosis and planning",
          icon: <Zap className="w-8 h-8" />,
        },
        {
          title: "Long-term Warranty",
          description: "Implant post warranty coverage up to 15 years",
          icon: <Award className="w-8 h-8" />,
        },
      ],
    },

    investment: {
      title: "ONE-TIME INVESTMENT – LIFETIME BENEFIT",
      content:
        "Dental implants are not just an aesthetic solution but a long-term investment in your health. A properly cared-for implant can last a lifetime, saving you significantly compared to temporary restoration methods.",
      benefits: [
        { icon: <Leaf className="w-8 h-8" />, title: "Complete Health", desc: "Better digestion and prevention of stomach issues caused by uneven chewing" },
        { icon: <DollarSign className="w-8 h-8" />, title: "Long-term Savings", desc: "One-time investment, lifetime use — no periodic replacements needed" },
        { icon: <Heart className="w-8 h-8" />, title: "Confident Smile", desc: "A complete smile, youthful face, and confidence in every situation" },
      ],
    },

    cta: {
      title: "LIMITED PROMOTIONAL SLOTS — BOOK YOUR APPOINTMENT TODAY!",
      button: "REGISTER FOR FREE CONSULTATION",
      subtext: "High-quality implant treatment — optimized cost — strictly following medical standards.",
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

              <p className="text-lg text-pink-100 mb-8">
                {content.heroDescription}
              </p>

              {/* Deal Box */}
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-6 mb-8">
                <p className="text-pink-200 text-sm line-through mb-1">{content.dealHighlight.label}</p>
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-black text-white">{content.dealHighlight.price}</span>
                  <span className="text-pink-200 mb-1">{content.dealHighlight.unit}</span>
                  <span className="ml-auto bg-yellow-400 text-rose-900 font-black text-sm px-3 py-1 rounded-full">
                    {content.dealHighlight.badge}
                  </span>
                </div>
              </div>

              {/* Why great */}
              <div className="space-y-3">
                {content.whyGreat.items.map((item, idx) => (
                  <div key={idx} className="flex items-start text-white">
                    <CheckCircle className="w-4 h-4 text-yellow-300 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-pink-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-transparent to-fuchsia-400 rounded-3xl opacity-40 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
                <img
                  src={adImage}
                  alt={isVI ? "Implant Osstem tháng 3 tại Emis Dental" : "Osstem Implant March offer at Emis Dental"}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 bg-yellow-400 text-rose-800 px-4 py-2 rounded-full font-black shadow-lg text-sm animate-bounce">
                {isVI ? "CHỈ CÒN 7.9TR!" : "ONLY 7.9M VND!"}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, val: "Osstem", label: isVI ? "Hàn Quốc" : "Korea" },
                  { icon: <Award className="w-5 h-5" />, val: "15 " + (isVI ? "năm" : "yrs"), label: isVI ? "Bảo hành" : "Warranty" },
                  { icon: <Sparkles className="w-5 h-5" />, val: "100%", label: isVI ? "Chính hãng" : "Genuine" },
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

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-rose-600 font-bold text-lg py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {isVI ? "ĐẶT HẸN NGAY – SỐ LƯỢNG CÓ HẠN" : "BOOK NOW – LIMITED SLOTS AVAILABLE"}
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
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">0919 100 021</span>
            </div>
            <Link
              to="/contact"
              className="bg-white text-pink-700 font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm"
            >
              {isVI ? "ĐĂNG KÝ GIỮ CHỖ" : "SECURE YOUR SLOT"}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">

          {/* Content Sections */}
          {content.sections.map((section, idx) => (
            <section key={idx} className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-xl flex items-center justify-center mr-4 text-white">
                  {section.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{section.title}</h2>
              </div>
              <p className="text-gray-700 text-lg mb-6">{section.content}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {section.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-4 border border-pink-100">
                    <CheckCircle className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0 mt-1" />
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

          {/* Investment Section */}
          <section className="bg-gradient-to-r from-rose-600 via-pink-500 to-fuchsia-600 rounded-3xl p-8 md:p-10 text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{content.investment.title}</h2>
              <p className="text-pink-100 text-lg max-w-3xl mx-auto">{content.investment.content}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {content.investment.benefits.map((benefit, idx) => (
                <div key={idx} className="text-center p-5 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/20">
                  <div className="text-yellow-300 flex justify-center mb-3">{benefit.icon}</div>
                  <h4 className="font-bold mb-2 text-lg">{benefit.title}</h4>
                  <p className="text-pink-200 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500 rounded-3xl p-8 md:p-10 text-center shadow-xl">
            <Heart className="w-16 h-16 text-white fill-white mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{content.cta.title}</h2>
            <p className="text-pink-100 mb-8">{content.cta.subtext}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <p className="text-gray-600 text-sm">{isVI ? "P. Xuân Hòa, TP.HCM" : "Vo Thi Sau Ward, District 3, HCMC"}</p>
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

export default ImplantAd;
