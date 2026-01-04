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
  Calendar as CalendarIcon,
  Target,
  TrendingUp,
  Award as AwardIcon,
  ArrowRight
} from "lucide-react";

// Import images - add these to your project
import viImg from "../pics/tet/vie-ortho.png";
import enImg from "../pics/tet/eng-ortho.png";

const OrthoAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";
  // const adImage = isVI ? viImg : enImg; // Uncomment when you add images

  // Vietnamese content
  const viContent = {
    metaTitle: "Niềng Răng Tết 2026 - Ưu Đãi 3 Triệu | Emis Dental",
    metaDescription: "Niềng răng giảm ngay 3 triệu dịp Tết 2026. Chỉnh nha sớm, nhận ưu đãi hấp dẫn tại Emis Dental.",
    
    heroTitle: "NIỀNG RĂNG SỚM NHẬN NGAY ƯU ĐÃI HẤP DẪN TẠI EMIS DENTAL",
    heroDescription: "Mùa Xuân là biểu tượng của sự khởi đầu mới và những hy vọng mới. Đây cũng là thời điểm lý tưởng để chúng ta bắt đầu những dự định thay đổi bản thân, giúp mình trở nên tự tin và hoàn hảo hơn.",
    intro1: "Trong số đó, chỉnh nha (niềng răng) là một trong những quyết định đầu tư đúng đắn nhất cho tương lai.",
    intro2: "Nhân dịp Tết Nguyên Đán 2026, Emis Dental mang đến chương trình ưu đãi đặc biệt: 'Niềng Răng Đúng Lúc – Giá Tốt Hơn'. Chúng tôi mong muốn hỗ trợ bạn bắt đầu hành trình tìm lại nụ cười đều đẹp với mức chi phí nhẹ nhàng và tiết kiệm nhất.",
    
    sections: [
      {
        title: "TẠI SAO NÊN BẮT ĐẦU HÀNH TRÌNH NIỀNG RĂNG NGAY DỊP TẾT?",
        icon: <CalendarIcon className="w-6 h-6" />,
        content: "Nhiều người thường trì hoãn việc niềng răng vì ngại thời gian kéo dài. Tuy nhiên, niềng răng là một hành trình, và nếu bạn bắt đầu ngay hôm nay, bạn sẽ gặt hái được kết quả ngọt ngào sớm hơn mong đợi:",
        points: [
          "Cải thiện thẩm mỹ vượt trội: Khắc phục hoàn toàn tình trạng răng hô, móm, thưa, khấp khểnh, giúp khuôn mặt trở nên hài hòa, thanh thoát.",
          "Khôi phục khớp cắn chuẩn: Chỉnh nha không chỉ làm đẹp mà còn giúp cải thiện chức năng ăn nhai, giảm áp lực cho khớp thái dương hàm và hạn chế các bệnh lý tiêu hóa.",
          "Vệ sinh răng miệng dễ dàng: Răng đều đặn giúp việc chải răng và dùng chỉ nha khoa hiệu quả hơn, ngăn ngừa sâu răng và viêm lợi.",
          "Tự tin đón những mùa Tết sau: Niềng răng sớm giúp bạn sớm sở hữu nụ cười rạng rỡ. 'Niềng răng sớm – đón Tết năm nay, đẹp dần mỗi năm sau'."
        ]
      }
    ],
    
    pricing: {
      title: "CHI TIẾT CHƯƠNG TRÌNH ƯU ĐÃI CHỈNH NHA TẾT 2026",
      description: "Hiểu được vấn đề chi phí luôn là rào cản khiến nhiều bạn đắn đo, Emis Dental triển khai gói quà tặng thiết thực nhất dành cho các 'đồng niềng':",
      discount: "3.000.000 VNĐ",
      methods: [
        {
          name: "Niềng răng mắc cài kim loại truyền thống",
          description: "Giải pháp tiết kiệm, hiệu quả cao, rút ngắn thời gian điều trị tối đa",
          features: [
            "Hiệu quả nhanh chóng",
            "Chi phí tiết kiệm",
            "Phù hợp mọi độ tuổi"
          ],
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "Niềng răng mắc cài sứ thẩm mỹ",
          description: "Lựa chọn hoàn hảo cho những ai yêu cầu tính thẩm mỹ cao",
          features: [
            "Mắc cài trong suốt",
            "Thẩm mỹ tối đa",
            "Tự tin giao tiếp"
          ],
          color: "from-emerald-500 to-teal-500"
        }
      ],
      period: "Chương trình diễn ra từ 01/01/2026 – 15/02/2026",
      note: "Áp dụng cho tất cả các gói niềng răng tại Emis Dental"
    },
    
    benefits: {
      title: "LỢI ÍCH KHI LỰA CHỌN CHỈNH NHA TẠI EMIS DENTAL",
      description: "Niềng răng là kỹ thuật nha khoa phức tạp, đòi hỏi tay nghề bác sĩ cao và sự hỗ trợ của công nghệ hiện đại. Tại Emis Dental, chúng tôi cam kết mang lại trải nghiệm chỉnh nha an toàn và hiệu quả nhất:",
      points: [
        "Đội ngũ bác sĩ chính quy, giàu kinh nghiệm: Tại Emis Dental, bạn sẽ được thăm khám và điều trị trực tiếp bởi các bác sĩ chuyên khoa chỉnh nha có chứng chỉ hành nghề.",
        "Phác đồ cá nhân hóa rõ ràng: Mỗi khách hàng sẽ có một kế hoạch điều trị (Clinical Plan) riêng biệt dựa trên kết quả chụp phim X-quang và lấy dấu hàm.",
        "Kiểm soát lực kéo an toàn, hiệu quả: Chúng tôi sử dụng hệ thống mắc cài và dây cung chính hãng, giúp kiểm soát lực kéo ổn định.",
        "Hỗ trợ tư vấn và chăm sóc tận tâm: Đội ngũ tư vấn viên của Emis Dental luôn sẵn sàng giải đáp mọi thắc mắc và hỗ trợ bạn trong việc chăm sóc răng miệng."
      ]
    },
    
    timeline: {
      title: "HÀNH TRÌNH NIỀNG RĂNG TẠI EMIS DENTAL",
      steps: [
        {
          period: "Tháng 1-3",
          title: "Sắp xếp răng",
          description: "Răng bắt đầu di chuyển về vị trí đúng"
        },
        {
          period: "Tháng 4-9",
          title: "Chỉnh khớp cắn",
          description: "Điều chỉnh khớp cắn về vị trí chuẩn"
        },
        {
          period: "Tháng 10-18",
          title: "Tinh chỉnh",
          description: "Hoàn thiện chi tiết và thẩm mỹ"
        },
        {
          period: "Tháng 19-24",
          title: "Duy trì",
          description: "Đeo hàm duy trì, ổn định kết quả"
        }
      ]
    },
    
    investment: {
      title: "NIỀNG RĂNG SỚM – ĐẦU TƯ XỨNG ĐÁNG CHO TƯƠNG LAI",
      content: "Đừng để những mặc cảm về hàm răng khuyết điểm làm bạn bỏ lỡ những cơ hội trong cuộc sống. Tết 2026 này, hãy tặng cho bản thân món quà ý nghĩa nhất – đó chính là một nụ cười mới, một sự tự tin mới.",
      conclusion: "Với mức giảm giá lên đến 3.000.000 VNĐ, đây là cơ hội tốt nhất để bạn bắt đầu hành trình thay đổi diện mạo mà không phải quá lo lắng về áp lực tài chính."
    },
    
    cta: {
      button: "ĐẶT LỊCH THĂM KHÁM VÀ NHẬN ƯU ĐÃI 3 TRIỆU ĐỒNG",
      subtext: "Nụ cười đẹp là chìa khóa của thành công! Đừng chần chừ, hãy liên hệ ngay với Emis Dental để được bác sĩ tư vấn hoàn toàn miễn phí."
    }
  };

  // English content
  const enContent = {
    metaTitle: "Braces Treatment Tet 2026 - 3 Million VND Discount | Emis Dental",
    metaDescription: "Braces treatment with 3 million VND discount for Tet 2026. Early orthodontic treatment, receive attractive offers at Emis Dental.",
    
    heroTitle: "EARLY BRACES TREATMENT - GET ATTRACTIVE OFFERS AT EMIS DENTAL",
    heroDescription: "Spring is a symbol of new beginnings and new hopes. This is also the ideal time for us to start plans to change ourselves, helping us become more confident and perfect.",
    intro1: "Among these, orthodontic treatment (braces) is one of the most correct investment decisions for the future.",
    intro2: "On the occasion of Lunar New Year 2026, Emis Dental brings a special promotion program: 'Braces at the Right Time – Better Price'. We wish to support you in starting your journey to find an even, beautiful smile with the most gentle and economical cost.",
    
    sections: [
      {
        title: "WHY START YOUR BRACES JOURNEY RIGHT DURING TET?",
        icon: <CalendarIcon className="w-6 h-6" />,
        content: "Many people often delay getting braces because they're concerned about the long duration. However, braces treatment is a journey, and if you start today, you'll reap sweet results sooner than expected:",
        points: [
          "Outstanding aesthetic improvement: Completely corrects overbite, underbite, gaps, crooked teeth, helping the face become harmonious and graceful.",
          "Restore standard bite: Orthodontics not only beautifies but also improves chewing function, reduces pressure on the temporomandibular joint, and limits digestive diseases.",
          "Easy oral hygiene: Even teeth make brushing and flossing more effective, preventing cavities and gingivitis.",
          "Confidence for future Tet seasons: Early braces treatment helps you soon own a radiant smile. 'Braces early – welcome Tet this year, become more beautiful each following year'."
        ]
      }
    ],
    
    pricing: {
      title: "TET 2026 ORTHODONTIC PROMOTION DETAILS",
      description: "Understanding that cost is always a barrier causing many people to hesitate, Emis Dental implements the most practical gift package for 'fellow braces-wearers':",
      discount: "3,000,000 VND",
      methods: [
        {
          name: "Traditional metal braces",
          description: "Economical solution, high effectiveness, maximizes treatment time reduction",
          features: [
            "Quick results",
            "Cost-effective",
            "Suitable for all ages"
          ],
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "Ceramic aesthetic braces",
          description: "Perfect choice for those requiring high aesthetics",
          features: [
            "Clear brackets",
            "Maximum aesthetics",
            "Confident communication"
          ],
          color: "from-emerald-500 to-teal-500"
        }
      ],
      period: "Program runs from January 1, 2026 – February 15, 2026",
      note: "Applicable to all braces packages at Emis Dental"
    },
    
    benefits: {
      title: "BENEFITS OF CHOOSING ORTHODONTICS AT EMIS DENTAL",
      description: "Braces treatment is a complex dental technique requiring high doctor skill and support from modern technology. At Emis Dental, we commit to providing the safest and most effective orthodontic experience:",
      points: [
        "Certified, experienced dental team: At Emis Dental, you will be examined and treated directly by licensed orthodontic specialists.",
        "Clear personalized treatment plan: Each customer will have a separate Clinical Plan based on X-ray results and dental impressions.",
        "Safe, effective force control: We use genuine bracket and wire systems, helping maintain stable force control.",
        "Dedicated consultation and care support: Emis Dental's consultants are always ready to answer all questions and support you in daily oral care."
      ]
    },
    
    timeline: {
      title: "BRACES JOURNEY AT EMIS DENTAL",
      steps: [
        {
          period: "Month 1-3",
          title: "Teeth Alignment",
          description: "Teeth begin moving to correct positions"
        },
        {
          period: "Month 4-9",
          title: "Bite Correction",
          description: "Adjust bite to standard position"
        },
        {
          period: "Month 10-18",
          title: "Fine-tuning",
          description: "Complete details and aesthetics"
        },
        {
          period: "Month 19-24",
          title: "Retention",
          description: "Wear retainers, stabilize results"
        }
      ]
    },
    
    investment: {
      title: "EARLY BRACES – WORTHY INVESTMENT FOR THE FUTURE",
      content: "Don't let complexes about imperfect teeth make you miss opportunities in life. This Tet 2026, give yourself the most meaningful gift – that is a new smile, new confidence.",
      conclusion: "With discounts up to 3,000,000 VND, this is the best opportunity for you to start your appearance transformation journey without worrying too much about financial pressure."
    },
    
    cta: {
      button: "BOOK APPOINTMENT & RECEIVE 3 MILLION VND DISCOUNT",
      subtext: "A beautiful smile is the key to success! Don't hesitate, contact Emis Dental immediately for completely free doctor consultation."
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
      <div className="relative bg-gradient-to-r from-[#059669] via-[#10b981] to-[#059669] pt-24 pb-12 overflow-hidden">
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
            <div className="inline-flex items-center bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#065f46] px-6 py-2 rounded-full font-bold mb-6 animate-pulse">
              <Sparkles className="w-5 h-5 mr-2" />
              {isVI ? "ƯU ĐÃI ĐẶC BIỆT TẾT 2026" : "SPECIAL TET 2026 OFFER"}
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {content.heroTitle}
            </h1>
            
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
      <div className="bg-gradient-to-r from-[#10b981] to-[#34d399] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-white">
              <Target className="w-5 h-5 mr-2" />
              <span className="font-semibold">{content.pricing.discount} {isVI ? "GIẢM NGAY" : "INSTANT DISCOUNT"}</span>
            </div>
            <div className="flex items-center text-white">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="font-semibold">{content.pricing.period}</span>
            </div>
            <Link
              to="/contact"
              className="bg-white text-[#065f46] font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isVI ? "ĐẶT LỊCH NGAY" : "BOOK NOW"}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Why Braces Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#059669] to-[#fbbf24] rounded-xl flex items-center justify-center mr-4">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {content.sections[0].title}
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg mb-6">{content.sections[0].content}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.sections[0].points.map((point, idx) => (
                <div key={idx} className="flex items-start p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#fbbf24] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5] border-2 border-[#10b981]/20 rounded-3xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.pricing.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#059669] to-[#fbbf24] rounded-full mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                {content.pricing.description}
              </p>
            </div>
            
            {/* Discount Banner */}
            <div className="bg-gradient-to-r from-[#059669] to-[#10b981] rounded-2xl p-8 text-center text-white mb-10 shadow-lg">
              <div className="flex flex-col items-center">
                <Trophy className="w-16 h-16 text-[#fbbf24] mb-4" />
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {content.pricing.discount}
                </h3>
                <p className="text-xl">{isVI ? "GIẢM NGAY" : "INSTANT DISCOUNT"}</p>
                <p className="text-emerald-100 mt-2">{content.pricing.note}</p>
              </div>
            </div>
            
            {/* Methods Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {content.pricing.methods.map((method, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${method.color} rounded-2xl p-6 text-white shadow-lg transform hover:-translate-y-2 transition-transform duration-300`}>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AwardIcon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{method.name}</h3>
                    <p className="text-white/90 mb-4">{method.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {method.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{isVI ? "Thời gian: 18-24 tháng" : "Duration: 18-24 months"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Period */}
            <div className="text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[#065f46] px-6 py-3 rounded-full font-bold">
                <Calendar className="w-5 h-5 mr-2" />
                {content.pricing.period}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.benefits.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#059669] to-[#fbbf24] rounded-full mx-auto"></div>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                {content.benefits.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content.benefits.points.map((point, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:border-[#10b981]/30 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#fbbf24] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>
                    <h3 className="font-bold text-gray-800">
                      {idx === 0 ? (isVI ? "Bác sĩ chuyên gia" : "Expert Doctors") :
                       idx === 1 ? (isVI ? "Phác đồ cá nhân" : "Personalized Plan") :
                       idx === 2 ? (isVI ? "An toàn tuyệt đối" : "Absolute Safety") :
                       (isVI ? "Hỗ trợ 24/7" : "24/7 Support")}
                    </h3>
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="bg-gradient-to-r from-[#f0fdf4] to-[#ecfdf5] rounded-3xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {content.timeline.title}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#059669] to-[#fbbf24] rounded-full mx-auto"></div>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#059669] via-[#10b981] to-[#059669] hidden lg:block"></div>
              
              <div className="space-y-12">
                {content.timeline.steps.map((step, idx) => (
                  <div key={idx} className={`flex flex-col lg:flex-row items-center ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''} gap-8`}>
                    {/* Content */}
                    <div className={`lg:w-5/12 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="inline-flex items-center bg-gradient-to-r from-[#059669] to-[#10b981] text-white px-4 py-2 rounded-full font-bold mb-3">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          {step.period}
                        </div>
                        <h3 className="font-bold text-gray-800 text-xl mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Circle */}
                    <div className="relative lg:w-2/12 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#059669] to-[#fbbf24] rounded-full flex items-center justify-center text-white font-bold text-2xl z-10">
                        {idx + 1}
                      </div>
                    </div>
                    
                    {/* Empty Space for Alignment */}
                    <div className="lg:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Before-After Gallery */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {isVI ? "KẾT QUẢ NIỀNG RĂNG TẠI EMIS DENTAL" : "BRACES RESULTS AT EMIS DENTAL"}
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#059669] to-[#fbbf24] rounded-full mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl">
                <div className="w-20 h-20 bg-[#059669] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-3">{isVI ? "TRƯỚC KHI NIỀNG" : "BEFORE BRACES"}</h3>
                <ul className="space-y-2 text-gray-700 text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>{isVI ? "Răng hô, móm, khấp khểnh" : "Overbite, underbite, crooked teeth"}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>{isVI ? "Khớp cắn không chuẩn" : "Incorrect bite alignment"}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                    <span>{isVI ? "Vệ sinh răng miệng khó khăn" : "Difficult oral hygiene"}</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl">
                <div className="w-20 h-20 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-3">{isVI ? "SAU KHI NIỀNG" : "AFTER BRACES"}</h3>
                <ul className="space-y-2 text-gray-700 text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <span>{isVI ? "Răng đều đẹp, thẳng hàng" : "Even, beautiful aligned teeth"}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <span>{isVI ? "Khớp cắn chuẩn, ăn nhai tốt" : "Standard bite, good chewing"}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                    <span>{isVI ? "Tự tin với nụ cười rạng rỡ" : "Confident with radiant smile"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Investment Section */}
          <section className="bg-gradient-to-r from-[#059669] to-[#10b981] rounded-3xl p-8 md:p-10 text-white">
            <div className="text-center mb-8">
              <Trophy className="w-16 h-16 text-[#fbbf24] mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {content.investment.title}
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-200 mb-6 text-center">
                {content.investment.content}
              </p>
              <p className="text-lg text-gray-200 text-center font-semibold">
                {content.investment.conclusion}
              </p>
              
              {/* Investment Grid */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-[#fbbf24]">18</span>
                  </div>
                  <h4 className="font-bold mb-2">{isVI ? "Tháng" : "Months"}</h4>
                  <p className="text-gray-300 text-sm">{isVI ? "Trung bình niềng răng" : "Average braces duration"}</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-[#fbbf24]">24</span>
                  </div>
                  <h4 className="font-bold mb-2">{isVI ? "Lần tái khám" : "Check-ups"}</h4>
                  <p className="text-gray-300 text-sm">{isVI ? "Trong suốt quá trình" : "Throughout the process"}</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ArrowRight className="w-6 h-6 text-[#fbbf24]" />
                  </div>
                  <h4 className="font-bold mb-2">{isVI ? "Lộ trình rõ ràng" : "Clear Journey"}</h4>
                  <p className="text-gray-300 text-sm">{isVI ? "Biết trước kết quả" : "Know results beforehand"}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#065f46] mb-6">
                {isVI ? "SẴN SÀNG ĐỂ BẮT ĐẦU HÀNH TRÌNH NIỀNG RĂNG?" : "READY TO START YOUR BRACES JOURNEY?"}
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#065f46] text-white font-bold text-lg py-4 px-8 rounded-full shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {content.cta.button}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                
                <a
                  href="tel:0919100021"
                  className="inline-flex items-center justify-center bg-white text-[#065f46] font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0919 100 021
                </a>
              </div>
              
              <p className="text-[#065f46] font-semibold">{content.cta.subtext}</p>
            </div>
          </section>
        </div>

        {/* Contact Footer */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {isVI ? "NHA KHOA QUỐC TẾ " : "INTERNATIONAL DENTAL CLINIC "}
              <span className="text-[#059669]">EMIS DENTAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#059669] to-[#fbbf24] rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white transition-colors">
              <div className="w-14 h-14 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-[#059669]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{isVI ? "Địa chỉ" : "Address"}</h3>
              <p className="text-gray-600">62B Phạm Ngọc Thạch, District 3, HCMC</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white transition-colors">
              <div className="w-14 h-14 bg-[#fbbf24]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[#fbbf24]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Hotline</h3>
              <p className="text-lg font-bold text-[#059669]">0919 100 021</p>
              <p className="text-lg font-bold text-[#059669]">0768 117 068</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white transition-colors">
              <div className="w-14 h-14 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-[#059669]" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Website</h3>
              <a 
                href="https://www.emisdental.com" 
                className="text-[#fbbf24] hover:underline font-medium block"
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

export default OrthoAd;