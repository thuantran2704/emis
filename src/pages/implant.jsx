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
  Award as AwardIcon,
  Leaf,
  DollarSign,
  Stethoscope
} from "lucide-react";

// Import images - you'll need to add these to your project
import viImg from "../pics/tet/vie-implant.png";
import enImg from "../pics/tet/eng-implant.png";

const ImplantAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  // const adImage = isVI ? viImg : enImg; // Uncomment when you add images

  // Vietnamese content
  const viContent = {
    metaTitle: "Trồng Răng Implant Tết 2026 - Ưu Đãi 60% | Emis Dental",
    metaDescription: "Trồng răng Implant giảm đến 60% dịp Tết 2026. Phục hồi chức năng ăn nhai, ăn ngon đón xuân tại Emis Dental.",
    
    heroTitle: "ƯU ĐÃI TRỒNG RĂNG IMPLANT TẾT 2026",
    heroSubtitle: "ĂN NGON ĐÓN XUÂN – GIẢM ĐẾN 60%",
    heroDescription: "Mùa Xuân là mùa của đoàn viên, của những bữa cơm tất niên ấm cúng bên gia đình. Tuy nhiên, việc mất răng không chỉ gây ảnh hưởng đến thẩm mỹ mà còn khiến những bữa tiệc ngày Tết trở nên kém trọn vẹn vì cảm giác ăn nhai khó khăn.",
    intro1: "Với mong muốn giúp quý khách hàng lấy lại nụ cười chắc khỏe và khả năng ăn nhai như răng thật, Emis Dental mang đến chương trình: 'Ưu Đãi Trồng Răng Implant Tết 2026 – Đầu Tư Một Lần, Bền Vững Dài Lâu'.",
    intro2: "Đây là cơ hội vàng để bạn tân trang nụ cười với công nghệ hiện đại và mức chi phí tối ưu nhất.",
    
    sections: [
      {
        title: "TẠI SAO IMPLANT LÀ 'TIÊU CHUẨN VÀNG' ĐỂ PHỤC HỒI RĂNG MẤT?",
        icon: <AwardIcon className="w-6 h-6" />,
        content: "So với hàm giả tháo lắp hay cầu răng sứ, trồng răng Implant được các chuyên gia nha khoa đánh giá là giải pháp tối ưu nhất hiện nay nhờ những ưu điểm vượt trội:",
        points: [
          "Khôi phục 100% chức năng ăn nhai: Chân răng Implant tích hợp chắc chắn vào xương hàm, giúp bạn thoải mái thưởng thức mọi món ngon ngày Tết từ bánh chưng, thịt gà đến các loại hạt.",
          "Thẩm mỹ tự nhiên: Thân răng sứ được chế tác tinh xảo, màu sắc và hình dáng hài hòa hoàn toàn với răng thật.",
          "Ngăn ngừa tiêu xương hàm: Đây là giải pháp duy nhất hiện nay giúp kích thích xương hàm phát triển, tránh tình trạng móm mém, lão hóa sớm do mất răng lâu ngày.",
          "Tuổi thọ bền lâu: Nếu được chăm sóc đúng cách, răng Implant có thể tồn tại vĩnh viễn, giúp bạn tiết kiệm chi phí về lâu dài."
        ]
      }
    ],
    
    pricing: {
      title: "CHI TIẾT CHƯƠNG TRÌNH ƯU ĐÃI IMPLANT TẾT 2026 TẠI EMIS DENTAL",
      singleTitle: "Ưu đãi Implant đơn lẻ",
      singleItems: [
        {
          name: "Trụ Implant Hiossen (Mỹ)",
          price: "8.900.000đ/trụ"
        }
      ],
      discountNote: "Giảm ngay 2.000.000đ cho các dòng trụ chính hãng từ châu Âu và Hàn Quốc như:",
      premiumBrands: [
        "Straumann (Thụy Sĩ): Đỉnh cao về tốc độ tích hợp xương.",
        "ETK (Pháp): Thiết kế tối ưu cho sự ổn định.",
        "Biotem (Hàn Quốc): Sự lựa chọn kinh tế và hiệu quả."
      ],
      fullArchTitle: "Ưu đãi Implant toàn hàm All-on-4",
      fullArchDesc: "Dành cho khách hàng mất răng toàn bộ hoặc mất nhiều răng, giải pháp All-on-4 giúp phục hồi nụ cười nhanh chóng:",
      fullArchBenefits: [
        "Giảm ngay 20% tổng chi phí thực hiện.",
        "Áp dụng cho các dòng trụ danh tiếng: Straumann, Hiossen, ETK, Osstem…"
      ],
      period: "Chương trình áp dụng đến hết ngày 15/02/2026",
      note: "Chương trình ưu đãi có số lượng giới hạn để đảm bảo chất lượng phục vụ tốt nhất."
    },
    
    process: {
      title: "QUY TRÌNH TRỒNG RĂNG IMPLANT AN TOÀN TẠI EMIS DENTAL",
      description: "Tại Emis Dental, chúng tôi thấu hiểu sự lo lắng của khách hàng khi thực hiện tiểu phẫu. Vì vậy, quy trình Implant luôn được thực hiện trong điều kiện vô trùng tuyệt đối với sự hỗ trợ của công nghệ cao:",
      points: [
        "Chẩn đoán hình ảnh CT ConeBeam 3D: Giúp bác sĩ khảo sát chính xác cấu trúc xương hàm, mạch máu và thần kinh để lập phác đồ đặt trụ an toàn nhất.",
        "Phác đồ cá nhân hóa: Mỗi khách hàng được thiết kế một lộ trình điều trị riêng biệt, phù hợp với tình trạng sức khỏe và khả năng tài chính.",
        "Thực hiện bởi bác sĩ chuyên gia: Đội ngũ bác sĩ tại Emis Dental dày dặn kinh nghiệm, thực hiện thao tác nhẹ nhàng, chính xác, hạn chế xâm lấn và rút ngắn thời gian lành thương.",
        "Hệ thống vô trùng đạt chuẩn: Đảm bảo an toàn tuyệt đối, loại bỏ nguy cơ nhiễm trùng chéo."
      ]
    },
    
    features: {
      title: "LỢI ÍCH VƯỢT TRỘI KHI CHỌN IMPLANT TẠI EMIS DENTAL",
      items: [
        {
          title: "Trụ Implant chính hãng",
          description: "Sử dụng trụ Implant từ các thương hiệu hàng đầu thế giới",
          icon: <Shield className="w-8 h-8" />
        },
        {
          title: "Bác sĩ chuyên gia",
          description: "Đội ngũ bác sĩ chuyên sâu về Implant, kinh nghiệm 10+ năm",
          icon: <Users className="w-8 h-8" />
        },
        {
          title: "Công nghệ hiện đại",
          description: "Máy CT ConeBeam 3D, phần mềm lập phác đồ số hóa",
          icon: <Zap className="w-8 h-8" />
        },
        {
          title: "Bảo hành dài hạn",
          description: "Chế độ bảo hành lên đến 15 năm cho trụ Implant",
          icon: <Award className="w-8 h-8" />
        }
      ]
    },
    
    investment: {
      title: "ĐẦU TƯ CHO SỨC KHỎE – MÓN QUÀ Ý NGHĨA NHẤT DỊP TẾT 2026",
      content: "Tết là dịp để chúng ta tri ân cha mẹ và chăm sóc bản thân sau một năm làm việc vất vả. Một nụ cười chắc khỏe chính là tấm 'thẻ bảo hiểm' cho sức khỏe tổng thể. Đừng để mất răng trở thành rào cản ngăn bạn tận hưởng những khoảnh khắc hạnh phúc bên người thân.",
      conclusion: "Chỉ cần một buổi hẹn tư vấn, bạn sẽ có cái nhìn rõ nét nhất về tình trạng của mình và lộ trình sở hữu nụ cười mới rạng rỡ trước khi mùa Xuân gõ cửa."
    },
    
    cta: {
      button: "ĐĂNG KÝ TƯ VẤN & NHẬN ƯU ĐÃI",
      subtext: "Quý khách vui lòng đăng ký sớm để giữ chỗ!"
    }
  };

  // English content
  const enContent = {
    metaTitle: "Dental Implants Tet 2026 - Up to 60% Discount | Emis Dental",
    metaDescription: "Dental implants up to 60% off for Tet 2026. Restore chewing function, enjoy delicious meals this spring at Emis Dental.",
    
    heroTitle: "DENTAL IMPLANTS TET 2026 PROMOTION",
    heroSubtitle: "ENJOY DELICIOUS MEALS THIS SPRING – UP TO 60% OFF",
    heroDescription: "Spring is the season of reunion, of warm family year-end meals. However, tooth loss not only affects aesthetics but also makes Tet holiday feasts less perfect due to difficult chewing sensations.",
    intro1: "With the desire to help customers regain healthy smiles and natural chewing ability, Emis Dental presents the program: 'Tet 2026 Dental Implant Promotion – One-time Investment, Long-term Sustainability'.",
    intro2: "This is a golden opportunity to renovate your smile with modern technology and the most optimal cost.",
    
    sections: [
      {
        title: "WHY ARE IMPLANTS THE 'GOLD STANDARD' FOR TOOTH REPLACEMENT?",
        icon: <AwardIcon className="w-6 h-6" />,
        content: "Compared to removable dentures or dental bridges, dental implants are considered the optimal solution today thanks to these outstanding advantages:",
        points: [
          "Restore 100% chewing function: Implant posts integrate firmly into the jawbone, allowing you to comfortably enjoy all Tet delicacies from banh chung, chicken to various nuts.",
          "Natural aesthetics: The porcelain crown is meticulously crafted, with color and shape completely harmonizing with natural teeth.",
          "Prevent jawbone resorption: This is the only current solution that stimulates jawbone development, avoiding sagging face and premature aging due to long-term tooth loss.",
          "Long-lasting durability: With proper care, dental implants can last a lifetime, helping you save costs in the long run."
        ]
      }
    ],
    
    pricing: {
      title: "TET 2026 DENTAL IMPLANT PROMOTION DETAILS AT EMIS DENTAL",
      singleTitle: "Single Implant Promotion",
      singleItems: [
        {
          name: "Hiossen Implant (USA)",
          price: "8,900,000 VND/implant"
        }
      ],
      discountNote: "Instant 2,000,000 VND discount for premium implant brands from Europe and Korea such as:",
      premiumBrands: [
        "Straumann (Switzerland): The pinnacle of osseointegration speed.",
        "ETK (France): Optimized design for stability.",
        "Biotem (Korea): Economical and effective choice."
      ],
      fullArchTitle: "All-on-4 Full Arch Implant Promotion",
      fullArchDesc: "For customers with complete tooth loss or multiple missing teeth, the All-on-4 solution helps restore smiles quickly:",
      fullArchBenefits: [
        "Instant 20% discount on total treatment cost.",
        "Applicable to prestigious brands: Straumann, Hiossen, ETK, Osstem…"
      ],
      period: "Promotion valid until February 15, 2026",
      note: "Promotional program has limited slots to ensure best service quality."
    },
    
    process: {
      title: "SAFE DENTAL IMPLANT PROCEDURE AT EMIS DENTAL",
      description: "At Emis Dental, we understand customers' concerns about minor surgery. Therefore, the implant procedure is always performed under absolute sterile conditions with high-tech support:",
      points: [
        "CT ConeBeam 3D imaging: Helps doctors accurately survey jawbone structure, blood vessels, and nerves to create the safest implant placement plan.",
        "Personalized treatment plan: Each customer receives a customized treatment journey suitable for their health condition and financial capability.",
        "Performed by expert dentists: Emis Dental's team of experienced dentists perform gentle, precise procedures, minimizing invasiveness and shortening healing time.",
        "Standard sterilization system: Ensures absolute safety, eliminating cross-infection risks."
      ]
    },
    
    features: {
      title: "OUTSTANDING BENEFITS WHEN CHOOSING IMPLANTS AT EMIS DENTAL",
      items: [
        {
          title: "Genuine Implant Posts",
          description: "Using implant posts from world-leading brands",
          icon: <Shield className="w-8 h-8" />
        },
        {
          title: "Expert Dentists",
          description: "Team of implant specialists with 10+ years experience",
          icon: <Users className="w-8 h-8" />
        },
        {
          title: "Modern Technology",
          description: "CT ConeBeam 3D machine, digital treatment planning software",
          icon: <Zap className="w-8 h-8" />
        },
        {
          title: "Long-term Warranty",
          description: "Warranty up to 15 years for implant posts",
          icon: <Award className="w-8 h-8" />
        }
      ]
    },
    
    investment: {
      title: "INVEST IN HEALTH – THE MOST MEANINGFUL GIFT FOR TET 2026",
      content: "Tet is the time to express gratitude to parents and take care of ourselves after a year of hard work. A healthy smile is the best 'insurance' for overall health. Don't let tooth loss become a barrier preventing you from enjoying happy moments with loved ones.",
      conclusion: "Just one consultation appointment will give you the clearest view of your condition and the journey to owning a new radiant smile before Spring arrives."
    },
    
    cta: {
      button: "REGISTER FOR CONSULTATION & RECEIVE PROMOTION",
      subtext: "Please register early to reserve your slot!"
    }
  };

  const content = isVI ? viContent : enContent;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-[#1a365d] via-[#2d4a8c] to-[#1a365d] pt-24 pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 30l30 30 30-30z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-[#38b2ac] to-[#81e6d9] text-[#1a365d] px-6 py-2 rounded-full font-bold mb-6 animate-pulse">
              <Sparkles className="w-5 h-5 mr-2" />
              {isVI ? "ƯU ĐÃI ĐẶC BIỆT TẾT 2026" : "SPECIAL TET 2026 OFFER"}
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {content.heroTitle}
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl md:text-3xl font-bold text-[#38b2ac] mb-8">
              {content.heroSubtitle}
            </p>
            
            {/* Description */}
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-200 mb-4">
                {content.heroDescription}
              </p>
              <p className="text-lg text-gray-300">
                {content.intro1} {content.intro2}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-gradient-to-r from-[#38b2ac] to-[#4fd1c7] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-white">
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-semibold">{content.pricing.period}</span>
            </div>
            <div className="flex items-center text-white">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-semibold">{isVI ? "Bảo hành lên đến 15 năm" : "Warranty up to 15 years"}</span>
            </div>
            <Link
              to="/contact"
              className="bg-white text-[#1a365d] font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isVI ? "ĐẶT LỊCH NGAY" : "BOOK NOW"}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Why Implant Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a365d] to-[#38b2ac] rounded-xl flex items-center justify-center mr-4">
                <AwardIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {content.sections[0].title}
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg mb-6">{content.sections[0].content}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.sections[0].points.map((point, idx) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="bg-gradient-to-r from-[#f0fff4] to-[#e6fffa] border-2 border-[#38b2ac]/20 rounded-3xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.pricing.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#1a365d] to-[#38b2ac] rounded-full mx-auto"></div>
            </div>
            
            {/* Single Implant Offers */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                {content.pricing.singleTitle}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {content.pricing.singleItems.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <div className="text-center mb-4">
                      <Heart className="w-12 h-12 text-red-400 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-800 text-lg">{item.name}</h4>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-[#38b2ac]">{item.price}</p>
                      <p className="text-gray-600 text-sm mt-2">{isVI ? "Bao gồm trụ + Abutment + Mão sứ" : "Includes post + Abutment + Crown"}</p>
                    </div>
                  </div>
                ))}
                
                {/* Discount Card */}
                <div className="md:col-span-2 bg-gradient-to-r from-[#1a365d] to-[#2d4a8c] rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-xl mb-4">{content.pricing.discountNote}</h4>
                  <ul className="space-y-2">
                    {content.pricing.premiumBrands.map((brand, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" />
                        <span>{brand}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* All-on-4 Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Trophy className="w-5 h-5 text-[#d4af37] mr-2" />
                {content.pricing.fullArchTitle}
              </h3>
              
              <p className="text-gray-700 mb-6">{content.pricing.fullArchDesc}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {content.pricing.fullArchBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center bg-gray-50 rounded-xl p-4">
                    <div className="w-10 h-10 bg-[#38b2ac] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
              
              {/* Before-After Comparison */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-4 text-center">
                  {isVI ? "SO SÁNH CHI PHÍ IMPLANT" : "IMPLANT COST COMPARISON"}
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{isVI ? "Trước Ưu Đãi" : "Before Discount"}</p>
                    <p className="text-2xl font-bold text-gray-400 line-through">15-25tr</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[#38b2ac] text-sm mb-1 font-bold">{isVI ? "Sau Ưu Đãi" : "After Discount"}</p>
                    <p className="text-3xl font-bold text-[#1a365d]">8.9tr</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Note */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                {content.pricing.period}
              </div>
              <p className="text-gray-600 mt-3">{content.pricing.note}</p>
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.process.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#1a365d] to-[#38b2ac] rounded-full mx-auto"></div>
            </div>
            
            <p className="text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto">
              {content.process.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.process.points.map((point, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1a365d] to-[#38b2ac] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>
                    <h3 className="font-bold text-gray-800">
                      {idx === 0 ? (isVI ? "Chẩn đoán 3D" : "3D Diagnosis") :
                       idx === 1 ? (isVI ? "Phác đồ cá nhân" : "Personalized Plan") :
                       idx === 2 ? (isVI ? "Bác sĩ chuyên gia" : "Expert Dentists") :
                       (isVI ? "Vô trùng tuyệt đối" : "Absolute Sterilization")}
                    </h3>
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-gradient-to-r from-[#f0fff4] to-[#e6fffa] rounded-3xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.features.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#1a365d] to-[#38b2ac] rounded-full mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.features.items.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1a365d]/10 to-[#38b2ac]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#1a365d]">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Investment Section */}
          <section className="bg-gradient-to-r from-[#1a365d] to-[#2d4a8c] rounded-3xl p-8 md:p-10 text-white">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-[#38b2ac] mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {content.investment.title}
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-200 mb-6 text-center">
                {content.investment.content}
              </p>
              <p className="text-lg text-gray-200 text-center">
                {content.investment.conclusion}
              </p>
              
              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="text-center p-4">
                  <Leaf className="w-10 h-10 text-[#38b2ac] mx-auto mb-3" />
                  <h4 className="font-bold mb-2">{isVI ? "Sức khỏe toàn diện" : "Complete Health"}</h4>
                  <p className="text-gray-300 text-sm">{isVI ? "Cải thiện tiêu hóa, ngăn ngừa bệnh dạ dày" : "Improve digestion, prevent stomach issues"}</p>
                </div>
                <div className="text-center p-4">
                  <DollarSign className="w-10 h-10 text-[#38b2ac] mx-auto mb-3" />
                  <h4 className="font-bold mb-2">{isVI ? "Tiết kiệm lâu dài" : "Long-term Savings"}</h4>
                  <p className="text-gray-300 text-sm">{isVI ? "Đầu tư một lần, sử dụng suốt đời" : "One-time investment, lifetime use"}</p>
                </div>
                <div className="text-center p-4">
                  <Stethoscope className="w-10 h-10 text-[#38b2ac] mx-auto mb-3" />
                  <h4 className="font-bold mb-2">{isVI ? "Phòng ngừa bệnh" : "Disease Prevention"}</h4>
                  <p className="text-gray-300 text-sm">{isVI ? "Ngăn tiêu xương, bảo vệ răng kế cận" : "Prevent bone loss, protect adjacent teeth"}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#38b2ac] to-[#4fd1c7] rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {isVI ? "SẴN SÀNG ĐỂ CÓ NỤ CƯỜI HOÀN HẢO ĐÓN TẾT?" : "READY FOR A PERFECT SMILE THIS TET?"}
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#1a365d] font-bold text-lg py-4 px-8 rounded-full shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {content.cta.button}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                
                <a
                  href="tel:0919100021"
                  className="inline-flex items-center justify-center bg-[#1a365d] text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-[#2d4a8c] transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0919 100 021
                </a>
              </div>
              
              <p className="text-white/80">{content.cta.subtext}</p>
            </div>
          </section>
        </div>

        {/* Contact Footer */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {isVI ? "NHA KHOA QUỐC TẾ " : "INTERNATIONAL DENTAL CLINIC "}
              <span className="text-[#38b2ac]">EMIS DENTAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a365d] to-[#38b2ac] rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white transition-colors">
              <div className="w-14 h-14 bg-[#1a365d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-[#1a365d]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{isVI ? "Địa chỉ" : "Address"}</h3>
              <p className="text-gray-600">62B Phạm Ngọc Thạch, District 3, HCMC</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white transition-colors">
              <div className="w-14 h-14 bg-[#38b2ac]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[#38b2ac]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Hotline</h3>
              <p className="text-lg font-bold text-[#1a365d]">0919 100 021</p>
              <p className="text-lg font-bold text-[#1a365d]">0768 117 068</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white transition-colors">
              <div className="w-14 h-14 bg-[#1a365d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-[#1a365d]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Website</h3>
              <a 
                href="https://www.emisdental.com" 
                className="text-[#38b2ac] hover:underline font-medium block"
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

export default ImplantAd;