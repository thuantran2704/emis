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
  Brush,
  Camera,
  Gift,
  Flame
} from "lucide-react";

// Import images
import viImg from "../pics/tet/vie-crown.png";
import enImg from "../pics/tet/eng-crown.png";

const CrownAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  const adImage = isVI ? viImg : enImg;

  // Vietnamese content
  const viContent = {
    metaTitle: "Thẩm Mỹ Răng Sứ Tết 2026 - Ưu Đãi 40% | Emis Dental",
    metaDescription: "Thẩm mỹ răng sứ cao cấp giảm đến 40% dịp Tết 2026. Nâng tầm nụ cười, rạng rỡ đón xuân tại Emis Dental.",
    
    heroTitle: "THẨM MỸ RĂNG SỨ CAO CẤP: ƯU ĐÃI TỚI 40%",
    heroSubtitle: "NÂNG TẦM NỤ CƯỜI, ĐÓN TẾT SANG TẠI EMIS DENTAL",
    heroDescription: "Một nụ cười hoàn hảo không chỉ dừng lại ở màu sắc trắng sáng, mà còn nằm ở sự hài hòa giữa form răng với khuôn mặt và sự tự nhiên trong từng nhịp giao tiếp.",
    intro1: "Tết 2026 đang gõ cửa, đây là 'thời điểm vàng' để bạn khắc phục những khuyết điểm như răng thưa, khấp khểnh, nhiễm màu kháng sinh hay răng vỡ mẻ.",
    intro2: "Đồng hành cùng bạn trên hành trình tân trang diện mạo, Emis Dental ra mắt chương trình ưu đãi đặc biệt: 'Nâng Tầm Nụ Cười – Rạng Rỡ Đón Xuân' với những đặc quyền chưa từng có.",
    
    sections: [
      {
        title: "TẠI SAO NÊN CHỌN THẨM MỸ RĂNG SỨ TẠI EMIS DENTAL DỊP TẾT NÀY?",
        icon: <Star className="w-6 h-6" />,
        content: "Thẩm mỹ răng sứ không chỉ là một dịch vụ nha khoa, mà là một nghệ thuật giúp thay đổi thần thái khuôn mặt. Tại Emis Dental, chúng tôi cam kết mang lại nụ cười chuẩn 'tỉ lệ vàng' nhờ:",
        points: [
          "Bảo tồn răng thật tối đa: Chúng tôi ưu tiên các kỹ thuật ít xâm lấn. Đặc biệt với mặt dán sứ Veneer, tỉ lệ mài răng cực kỳ thấp (hoặc không mài), giúp bảo vệ cấu trúc răng thật và tủy răng, đảm bảo ăn nhai chắc khỏe như răng tự nhiên.",
          "Thiết kế nụ cười cá nhân hóa: Mỗi khách hàng là một bản thể duy nhất. Bác sĩ tại Emis Dental sẽ tư vấn dáng răng (dáng tự nhiên, dáng thỏ, dáng celeb...) sao cho phù hợp nhất với phong cách, khuôn mặt và cả yếu tố phong thủy để mang lại may mắn cho năm mới 2026.",
          "Chất liệu sứ cao cấp, chính hãng: 100% dòng sứ được sử dụng tại Emis Dental đều có nguồn gốc rõ ràng từ Đức, Mỹ, Thụy Sĩ... với độ bền cao, tính thấu quang tốt và không bị thâm đen viền nướu sau thời gian dài sử dụng."
        ]
      }
    ],
    
    pricing: {
      title: "BẢNG ƯU ĐÃI THẨM MỸ RĂNG SỨ TẾT 2026 TẠI EMIS DENTAL",
      description: "Để mọi khách hàng đều có cơ hội sở hữu nụ cười mơ ước, Emis Dental áp dụng mức giảm giá sâu nhất trong năm:",
      services: [
        {
          name: "Mặt dán sứ Veneer IPS e.max",
          discount: "Giảm 30%",
          description: "Dòng sứ siêu mỏng, siêu tự nhiên từ Thụy Sĩ",
          color: "from-red-600 to-yellow-500"
        },
        {
          name: "Răng toàn sứ Zirconia (Đức)",
          discount: "Giảm 40%",
          description: "Độ cứng cao, chịu lực cực tốt",
          color: "from-red-700 to-yellow-600"
        },
        {
          name: "Răng toàn sứ Cercon HT (Mỹ)",
          discount: "Giảm 40%",
          description: "Đỉnh cao thẩm mỹ, độ bền vĩnh viễn",
          color: "from-red-800 to-yellow-700"
        }
      ],
      specialOffer: "ĐẶC BIỆT: Giảm thêm 5% tổng hóa đơn cho khách hàng thực hiện combo từ 5 răng trở lên.",
      period: "Chương trình diễn ra từ 01/01/2026 – 15/02/2026.",
      note: "Số lượng ưu đãi có hạn!"
    },
    
    process: {
      title: "QUY TRÌNH KIẾT TẠO NỤ CƯỜI TẠI EMIS DENTAL",
      description: "Chúng tôi ứng dụng quy trình kỹ thuật số hiện đại để đảm bảo độ chính xác tuyệt đối và rút ngắn thời gian cho khách hàng bận rộn dịp cuối năm:",
      steps: [
        "Chụp phim & Thiết kế nụ cười (Smile Design): Khách hàng có thể xem trước kết quả nụ cười tương lai thông qua phần mềm thiết kế 3D.",
        "Vệ sinh & Xử lý bề mặt: Đảm bảo môi trường thực hiện vô trùng và bảo tồn men răng tối ưu.",
        "Chế tác răng sứ tại Labo riêng: Sử dụng công nghệ CAD/CAM hiện đại giúp răng sứ đạt độ tinh xảo, sát khít hoàn hảo từng milimet.",
        "Lắp răng sứ & Hiệu chỉnh: Bác sĩ điều chỉnh khớp cắn kỹ lưỡng, đảm bảo cảm giác ăn nhai thoải mái, không cộm cấn.",
        "Chăm sóc & Bảo hành: Cấp thẻ bảo hành chính hãng và hướng dẫn chăm sóc để nụ cười luôn bền đẹp."
      ]
    },
    
    features: {
      title: "LỢI ÍCH KHI CHỌN THẨM MỸ RĂNG SỨ TẠI EMIS DENTAL",
      items: [
        {
          title: "Bảo tồn răng thật",
          description: "Mài răng tối thiểu, bảo vệ cấu trúc tự nhiên",
          icon: <Shield className="w-8 h-8" />
        },
        {
          title: "Thiết kế cá nhân hóa",
          description: "Smile Design 3D, phù hợp khuôn mặt & phong cách",
          icon: <Palette className="w-8 h-8" />
        },
        {
          title: "Chất liệu cao cấp",
          description: "Sứ nhập khẩu chính hãng Đức, Mỹ, Thụy Sĩ",
          icon: <Gem className="w-8 h-8" />
        },
        {
          title: "Đội ngũ chuyên gia",
          description: "Bác sĩ kinh nghiệm, tay nghề cao",
          icon: <Users className="w-8 h-8" />
        }
      ]
    },
    
    finalMessage: {
      title: "TẾT LÀ DỊP ĐỂ LÀM MỚI BẢN THÂN – ĐỪNG BỎ LỠ NỤ CƯỜI ĐẾP!",
      content: "Người ta thường nói 'Cái răng cái tóc là góc con người'. Một nụ cười mới không chỉ giúp bạn tự tin hơn khi chụp hình kỷ niệm cùng gia đình, gặp gỡ đối tác đầu năm mà còn mang lại sự khởi đầu mới tràn đầy năng lượng và hy vọng.",
      conclusion: "Với trang thiết bị hiện đại và đội ngũ bác sĩ tận tâm, Emis Dental tự hào là địa chỉ uy tín được hàng ngàn khách hàng tin tưởng lựa chọn để gửi gắm nụ cười mỗi dịp Tết đến Xuân về."
    },
    
    cta: {
      button: "NHẬN TƯ VẤN DÁNG RĂNG PHÙ HỢP VÀ BÁO GIÁ CHI TIẾT",
      subtext: "Hãy để Emis Dental giúp bạn sở hữu nụ cười rạng ngời nhất đón chào năm mới 2026."
    }
  };

  // English content
  const enContent = {
    metaTitle: "Dental Crown Aesthetics Tet 2026 - Up to 40% Discount | Emis Dental",
    metaDescription: "Premium dental crown aesthetics up to 40% off for Tet 2026. Elevate your smile, radiantly welcome spring at Emis Dental.",
    
    heroTitle: "PREMIUM DENTAL CROWN AESTHETICS: UP TO 40% OFF",
    heroSubtitle: "ELEVATE YOUR SMILE, WELCOME TET IN STYLE AT EMIS DENTAL",
    heroDescription: "A perfect smile doesn't just stop at bright color, but also lies in the harmony between tooth form and facial features, and naturalness in every interaction.",
    intro1: "Tet 2026 is knocking at the door, this is the 'golden opportunity' for you to fix imperfections like gapped teeth, crooked teeth, antibiotic staining, or chipped teeth.",
    intro2: "Accompanying you on your appearance renovation journey, Emis Dental launches a special promotion program: 'Elevate Your Smile – Radiantly Welcome Spring' with unprecedented privileges.",
    
    sections: [
      {
        title: "WHY CHOOSE DENTAL CROWN AESTHETICS AT EMIS DENTAL THIS TET?",
        icon: <Star className="w-6 h-6" />,
        content: "Dental crown aesthetics isn't just a dental service, but an art that helps change facial demeanor. At Emis Dental, we commit to delivering smiles with the perfect 'golden ratio' thanks to:",
        points: [
          "Maximum natural tooth preservation: We prioritize minimally invasive techniques. Especially with Veneer porcelain veneers, tooth reduction is extremely minimal (or none), helping protect natural tooth structure and pulp, ensuring chewing strength like natural teeth.",
          "Personalized smile design: Each customer is a unique entity. Emis Dental doctors will advise tooth shapes (natural shape, bunny shape, celeb shape...) that best suit your style, face shape, and even feng shui elements to bring luck for the new year 2026.",
          "Premium, genuine crown materials: 100% of crown materials used at Emis Dental have clear origins from Germany, USA, Switzerland... with high durability, good translucency, and no gum line darkening after long-term use."
        ]
      }
    ],
    
    pricing: {
      title: "TET 2026 DENTAL CROWN AESTHETICS PROMOTION TABLE AT EMIS DENTAL",
      description: "To give every customer the opportunity to own their dream smile, Emis Dental applies the deepest discounts of the year:",
      services: [
        {
          name: "Veneer IPS e.max",
          discount: "30% OFF",
          description: "Ultra-thin, ultra-natural porcelain from Switzerland",
          color: "from-red-600 to-yellow-500"
        },
        {
          name: "Zirconia Crown (USA)",
          discount: "40% OFF",
          description: "High hardness, excellent durability",
          color: "from-red-700 to-yellow-600"
        },
        {
          name: "Cercon HT Crown (GERMANY)",
          discount: "40% OFF",
          description: "The pinnacle of aesthetics, permanent durability",
          color: "from-red-800 to-yellow-700"
        }
      ],
      specialOffer: "SPECIAL: Additional 5% discount on total bill for customers doing combos of 5 teeth or more.",
      period: "Program runs from January 1, 2026 – February 15, 2026.",
      note: "Limited promotion slots available!"
    },
    
    process: {
      title: "SMILE CREATION PROCESS AT EMIS DENTAL",
      description: "We apply modern digital processes to ensure absolute accuracy and shorten time for busy customers during year-end:",
      steps: [
        "Imaging & Smile Design: Customers can preview future smile results through 3D design software.",
        "Cleaning & Surface Treatment: Ensure sterile environment and optimal enamel preservation.",
        "Crown fabrication in dedicated Lab: Using modern CAD/CAM technology helps crowns achieve exquisite precision, perfect fit to every millimeter.",
        "Crown Installation & Adjustment: Doctor thoroughly adjusts bite, ensuring comfortable chewing sensation without roughness.",
        "Care & Warranty: Issue genuine warranty card and provide care guidance to keep smile always beautiful."
      ]
    },
    
    features: {
      title: "BENEFITS OF CHOOSING DENTAL CROWN AESTHETICS AT EMIS DENTAL",
      items: [
        {
          title: "Natural Tooth Preservation",
          description: "Minimal tooth reduction, protect natural structure",
          icon: <Shield className="w-8 h-8" />
        },
        {
          title: "Personalized Design",
          description: "3D Smile Design, suits face shape & style",
          icon: <Palette className="w-8 h-8" />
        },
        {
          title: "Premium Materials",
          description: "Genuine imported porcelain from Germany, USA, Switzerland",
          icon: <Gem className="w-8 h-8" />
        },
        {
          title: "Expert Team",
          description: "Experienced, highly skilled dentists",
          icon: <Users className="w-8 h-8" />
        }
      ]
    },
    
    finalMessage: {
      title: "TET IS TIME TO RENEW YOURSELF – DON'T MISS THE BEAUTIFUL SMILE!",
      content: "People often say 'Teeth and hair are human beauty corners'. A new smile not only helps you be more confident when taking family photos, meeting partners at year-start, but also brings a new beginning full of energy and hope.",
      conclusion: "With modern equipment and dedicated dental team, Emis Dental proudly serves as a trusted address chosen by thousands of customers to entrust their smiles every Tet season."
    },
    
    cta: {
      button: "GET PERSONALIZED TOOTH SHAPE CONSULTATION & DETAILED QUOTE",
      subtext: "Let Emis Dental help you own the most radiant smile to welcome the new year 2026."
    }
  };

  const content = isVI ? viContent : enContent;

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* Hero Banner with Image */}
      <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-600 pt-24 pb-12 overflow-hidden">
        {/* Tet Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 30l30 30 30-30z' fill='%23fbbf24'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Tet Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 px-6 py-2 rounded-full font-bold mb-6 animate-pulse">
                <Gift className="w-5 h-5 mr-2" />
                {isVI ? "ƯU ĐÃI ĐẶC BIỆT TẾT 2026" : "SPECIAL TET 2026 OFFER"}
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {content.heroTitle}
              </h1>
              
              {/* Subtitle */}
              <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-8">
                {content.heroSubtitle}
              </p>
              
              {/* Description */}
              <div className="mb-8">
                <p className="text-xl text-gray-200 mb-4">
                  {content.heroDescription}
                </p>
                <p className="text-lg text-gray-300">
                  {content.intro1} {content.intro2}
                </p>
              </div>
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {isVI ? "ĐẶT LỊCH NGAY" : "BOOK NOW"}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                <img 
                  src={adImage} 
                  alt={isVI ? "Thẩm mỹ răng sứ Tết 2026" : "Dental Crown Aesthetics Tet 2026"}
                  className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-yellow-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-white">
              <Flame className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-semibold">{content.pricing.period}</span>
            </div>
            <div className="flex items-center text-white">
              <Shield className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-semibold">{isVI ? "Bảo hành 5-10 năm" : "5-10 Years Warranty"}</span>
            </div>
            <div className="flex items-center text-white">
              <Award className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-semibold">{isVI ? "Chất lượng hàng đầu" : "Premium Quality"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Why Crown Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-red-100">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {content.sections[0].title}
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg mb-6">{content.sections[0].content}</p>
            
            <div className="space-y-6">
              {content.sections[0].points.map((point, idx) => (
                <div key={idx} className="flex items-start p-6 bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl hover:shadow-md transition-shadow border border-red-100">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <p className="text-gray-700 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="bg-gradient-to-r from-red-50 to-yellow-50 border-2 border-red-200 rounded-3xl p-8 md:p-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center mb-4">
                <div className="w-2 h-8 bg-red-600 rounded-full mr-2"></div>
                <div className="w-2 h-10 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-2 h-8 bg-red-600 rounded-full"></div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.pricing.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                {content.pricing.description}
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {content.pricing.services.map((service, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${service.color} rounded-2xl p-6 text-white shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-yellow-400`}>
                  <div className="text-center mb-6">
                    <Gem className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                    <div className="inline-block bg-yellow-400/30 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-lg mb-3 border border-yellow-300">
                      {service.discount}
                    </div>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <CheckCircle className="w-5 h-5 text-yellow-300 mr-2" />
                      <span className="text-sm">{isVI ? "Bảo hành 5-10 năm" : "5-10 Years Warranty"}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-yellow-300 mr-2" />
                      <span className="text-sm">{isVI ? "Không ê buốt" : "No Sensitivity"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Special Offer */}
            <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-6 text-white mb-8 border border-yellow-500">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-300 mr-3" />
                <h3 className="text-xl font-bold">{isVI ? "ƯU ĐÃI ĐẶC BIỆT" : "SPECIAL OFFER"}</h3>
              </div>
              <p className="text-center text-lg font-semibold">{content.pricing.specialOffer}</p>
            </div>
            
            {/* Period & Note */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 px-6 py-3 rounded-full font-bold shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                {content.pricing.period}
              </div>
              <p className="text-red-700 font-semibold animate-pulse bg-yellow-50 inline-block px-4 py-2 rounded-full border border-red-200">
                ⚠️ {content.pricing.note}
              </p>
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-red-100">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.process.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                {content.process.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {content.process.steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-gradient-to-br from-red-50 to-yellow-50 border border-red-200 rounded-2xl p-6 h-full hover:border-red-300 transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg">
                      {idx + 1}
                    </div>
                    <p className="font-medium text-gray-800 text-center">{step}</p>
                  </div>
                  
                  {idx < content.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ChevronRight className="w-8 h-8 text-red-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Smile Design Feature */}
            <div className="mt-12 bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8 border border-red-200">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-red-200">
                    <Camera className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-800 text-center mb-2">{isVI ? "SMILEDESIGN 3D" : "3D SMILE DESIGN"}</h3>
                    <p className="text-gray-600 text-center text-sm">
                      {isVI ? "Xem trước nụ cười tương lai" : "Preview your future smile"}
                    </p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {isVI ? "Công nghệ thiết kế nụ cười 3D tiên tiến" : "Advanced 3D Smile Design Technology"}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {isVI 
                      ? "Tại Emis Dental, chúng tôi sử dụng phần mềm Smile Design 3D hiện đại giúp bạn hình dung trước kết quả cuối cùng. Bạn có thể thấy được sự thay đổi rõ rệt của nụ cười trước khi bắt đầu điều trị."
                      : "At Emis Dental, we use modern 3D Smile Design software to help you visualize the final result beforehand. You can see the clear transformation of your smile before starting treatment."
                    }
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm border border-red-200">✓ {isVI ? "Hình ảnh 3D thực tế" : "Realistic 3D Images"}</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm border border-yellow-200">✓ {isVI ? "Chỉnh sửa trực tiếp" : "Live Editing"}</span>
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm border border-red-200">✓ {isVI ? "Phù hợp khuôn mặt" : "Face Matching"}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-3xl p-8 md:p-10 border-2 border-red-200">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.features.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.features.items.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-red-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200">
                    <div className="text-red-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final Message Section */}
          <section className="bg-gradient-to-r from-red-700 to-red-800 rounded-3xl p-8 md:p-10 text-white border-2 border-yellow-500">
            <div className="text-center mb-8">
              <Smile className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {content.finalMessage.title}
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-red-100 mb-6 text-center">
                {content.finalMessage.content}
              </p>
              <p className="text-lg text-red-100 text-center">
                {content.finalMessage.conclusion}
              </p>
              
              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="text-center p-4">
                  <Brush className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">{isVI ? "Thay đổi diện mạo" : "Transform Appearance"}</h4>
                  <p className="text-red-200 text-sm">{isVI ? "Nâng tầm nhan sắc chỉ sau 1 tuần" : "Elevate beauty in just 1 week"}</p>
                </div>
                <div className="text-center p-4">
                  <Heart className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">{isVI ? "Tự tin giao tiếp" : "Confident Communication"}</h4>
                  <p className="text-red-200 text-sm">{isVI ? "Tự tin trong mọi tình huống" : "Confidence in every situation"}</p>
                </div>
                <div className="text-center p-4">
                  <Trophy className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">{isVI ? "Khởi đầu năm mới" : "New Year Start"}</h4>
                  <p className="text-red-200 text-sm">{isVI ? "Năng lượng tích cực cả năm" : "Positive energy all year"}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-10 border-4 border-red-600 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">
                {isVI ? "SẴN SÀNG ĐỂ CÓ NỤ CƯỜI HOÀN HẢO ĐÓN TẾT?" : "READY FOR THE PERFECT SMILE THIS TET?"}
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-red-700 text-white font-bold text-lg py-4 px-8 rounded-full shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-yellow-400"
                >
                  {content.cta.button}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                
                <a
                  href="tel:0919100021"
                  className="inline-flex items-center justify-center bg-white text-red-700 font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 border-2 border-red-600"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0919 100 021
                </a>
              </div>
              
              <p className="text-red-700 font-semibold">{content.cta.subtext}</p>
            </div>
          </section>
        </div>

        {/* Contact Footer */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 border-2 border-red-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {isVI ? "NHA KHOA QUỐC TẾ " : "INTERNATIONAL DENTAL CLINIC "}
              <span className="text-red-600">EMIS DENTAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-xl hover:bg-white transition-colors border border-red-200">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-300">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{isVI ? "Địa chỉ" : "Address"}</h3>
              <p className="text-gray-600">62B Phạm Ngọc Thạch, District 3, HCMC</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-xl hover:bg-white transition-colors border border-yellow-200">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-300">
                <Phone className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Hotline</h3>
              <p className="text-lg font-bold text-red-600">0919 100 021</p>
              <p className="text-lg font-bold text-red-600">0768 117 068</p>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-xl hover:bg-white transition-colors border border-red-200">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-300">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Website</h3>
              <a 
                href="https://www.emisdental.com" 
                className="text-yellow-600 hover:underline font-medium block"
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

export default CrownAd;