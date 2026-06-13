import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CheckCircle,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  ArrowRight,
  Users,
  Eye,
  Zap,
  Heart,
} from "lucide-react";

// Assets
import heroImg from "../pics/khach_cuoi_chup_hinh_voi_bs.jpg";
import implantDiagramImg from "../pics/implant-illustration.jpg";
import xrayImg from "../pics/anh_chup_xquang_implant.jpg";
import implantIrlImg from "../pics/implant_irl.jpg";
import allon4CardImg from "../pics/allon4.png";
import bridgeCardImg from "../pics/bridge.png";
import implantCardImg from "../pics/implant.png";
import veneercardImg from "../pics/veneer.png";
import straumannImg from "../pics/straumann-implant.jpg";
import hiossenImg from "../pics/hiossen-implant.jpg";
import osstemImg from "../pics/osstem-implant.jpg";
import etkImg from "../pics/etk-implant.jpg";
import biotemImg from "../pics/biotem-implant.jpg";
import drSonImg from "../pics/bs/bs00-drson-surgery-implant.png";

const ImplantGuide = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";

  const viContent = {
    metaTitle: "Giải Pháp Trồng Răng Implant | EMIS Dental",
    metaDescription:
      "Hiểu về cấy ghép implant: từ đánh giá tình trạng đến phục hồi toàn diện. Khám phá các giải pháp phù hợp cho mất răng của bạn tại EMIS Dental.",

    section1: {
      title: "Khôi Phục Răng Mất Với Sự Tự Tin",
      intro: "Mất răng có thể ảnh hưởng đến việc ăn nhai, giao tiếp và sự tự tin trong cuộc sống hằng ngày.\n\nTrồng răng Implant là một trong những giải pháp thay thế răng đã mất. Hướng điều trị phù hợp sẽ phụ thuộc vào tình trạng răng miệng, nhu cầu và mục tiêu lâu dài của mỗi người.",
      primaryCta: "Gửi X-ray Của Bạn",
      secondaryCta: "Trao Đổi Về Trường Hợp Của Bạn",
    },

    section2: {
      title: "Implant Có Phù Hợp Với Bạn Không?",
      intro: "Implant có thể là một lựa chọn nếu bạn:",
      checklist: [
        "Đã mất một hoặc nhiều răng",
        "Muốn có giải pháp cố định thay thế răng mất",
        "Muốn ăn nhai thoải mái hơn",
        "Muốn thay thế hàm giả tháo lắp",
        "Đang tìm một giải pháp lâu dài",
      ],
      whyMatters: "Mất Răng Để Lâu Ảnh Hưởng Thế Nào?",
      whyContent: "Theo thời gian, mất răng có thể dẫn đến tiêu xương hàm, làm các răng xung quanh dịch chuyển và ảnh hưởng đến khớp cắn.\n\nThăm khám sớm giúp bạn hiểu mình đang có những lựa chọn nào.",
    },

    section3: {
      title: "Trồng Răng Implant Là Gì?",
      intro: "Trồng răng Implant là phương pháp đặt một trụ Implant vào xương hàm để thay thế chân răng đã mất và nâng đỡ răng phục hình phía trên.\n\nSau khi lành thương, Implant có thể nâng đỡ mão răng, cầu răng hoặc các phục hình khác tùy theo nhu cầu phục hồi.",
      journey: "Các Bước Điều Trị Thường Gặp",
      steps: ["Thăm Khám & Chẩn Đoán", "Lập Kế Hoạch Điều Trị", "Đặt Implant", "Lành Thương", "Phục Hình Sau Cùng"],
    },

    section4: {
      title: "Các Giải Pháp Trồng Răng Implant",
      intro: "Tùy vị trí mất răng, số lượng răng mất và tình trạng răng miệng, hướng điều trị có thể khác nhau.",
      options: [
        { title: "Implant Đơn Lẻ", desc: "Dành cho người mất một răng." },
        { title: "Implant Nhiều Răng", desc: "Dành cho người mất nhiều răng." },
        { title: "Cầu Răng Implant", desc: "Phục hồi nhiều răng mất liên tiếp mà không cần đặt Implant cho từng răng." },
        { title: "Phục Hồi Toàn Diện Hơn", desc: "Dành cho người mất nhiều răng hoặc cần phục hồi ở mức độ phức tạp hơn." },
      ],
    },

    section5: {
      title: "Bác Sĩ Đánh Giá Những Gì?",
      intro: "Trước khi đưa ra kế hoạch điều trị, bác sĩ có thể cần xem xét:",
      evaluations: [
        "Tình trạng răng miệng hiện tại",
        "Các răng còn lại",
        "Chất lượng và thể tích xương hàm",
        "Khả năng ăn nhai",
        "Yếu tố thẩm mỹ",
        "Mục tiêu lâu dài",
      ],
      note: "Kế hoạch điều trị không chỉ dựa trên số răng mất mà còn phụ thuộc vào nhiều yếu tố khác của từng người.",
    },

    section6: {
      title: "Các Dòng Implant Tại EMIS",
      intro: "EMIS sử dụng nhiều dòng Implant khác nhau, bao gồm:",
      systems: ["Straumann", "Hiossen", "Osstem", "ETK", "Biotem"],
      note: "Tùy từng nhu cầu và tình trạng xương hàm, bác sĩ có thể cân nhắc những dòng Implant khác nhau.\n\nViệc lựa chọn không chỉ dựa trên thương hiệu mà còn phụ thuộc vào kế hoạch điều trị tổng thể.",
    },

    section7: {
      title: "Dành Cho Việt Kiều & Bệnh Nhân Quốc Tế",
      intro: "Nhiều Việt kiều và bệnh nhân quốc tế gửi X-ray trước khi về Việt Nam.\n\nĐiều này giúp họ có cái nhìn rõ hơn về hướng điều trị và thời gian cần chuẩn bị cho chuyến đi.",
      costSection: "Vì Sao Nhiều Người Chọn Về Việt Nam Làm Implant?",
      costContent: "Chi phí điều trị tại Việt Nam có thể khác biệt đáng kể so với các quốc gia như Hoa Kỳ hoặc Úc.\n\nVới một số người, điều này giúp việc điều trị Implant trở nên khả thi hơn về mặt tài chính.",
      cta: "Tìm Hiểu Về Bệnh Nhân Quốc Tế",
    },

    section8: {
      title: "Những Ca Điều Trị Thực Tế",
      intro: "Tìm hiểu hành trình của những bệnh nhân đã lựa chọn trồng răng Implant tại EMIS.",
      cta: "Xem Các Ca Implant Thực Tế",
    },

    section9: {
      title: "Chưa Chắc Implant Có Phù Hợp Với Bạn?",
      intro: "Nếu đã có X-ray hoặc CBCT, bạn có thể gửi trước để đội ngũ EMIS xem xét và trao đổi sơ bộ về hướng điều trị.",
      primaryCta: "Gửi X-ray Của Bạn",
      secondaryCta: "Trao Đổi Về Trường Hợp Của Bạn",
      note: "Kế hoạch điều trị cuối cùng cần được xác định sau khi thăm khám trực tiếp và thực hiện đầy đủ các chẩn đoán cần thiết.",
    },
  };

  const enContent = {
    metaTitle: "Implant Solutions Guide | EMIS Dental",
    metaDescription:
      "Understand dental implants: from assessment to full restoration. Explore solutions suitable for your tooth loss at EMIS Dental.",

    section1: {
      title: "Restore Missing Teeth With Confidence",
      intro: "Missing teeth can affect how you eat, speak, and feel in everyday life.\n\nImplant treatment is one option for replacing missing teeth. The most suitable approach depends on your oral condition, goals, and long-term needs.",
      primaryCta: "Send Your X-ray",
      secondaryCta: "Discuss Your Situation",
    },

    section2: {
      title: "Could Implant Treatment Be Right For You?",
      intro: "You may be considering implant treatment if you:",
      checklist: [
        "Have lost one or more teeth",
        "Want a fixed replacement option",
        "Wish to improve chewing comfort",
        "Prefer an alternative to removable dentures",
        "Are looking for a long-term solution",
      ],
      whyMatters: "Why It Matters",
      whyContent: "Over time, tooth loss may lead to bone loss, shifting teeth, and changes in the way your teeth fit together.\n\nA proper assessment can help clarify which options may be suitable for your situation.",
    },

    section3: {
      title: "Understanding Implant Treatment",
      intro: "A dental implant works like an artificial tooth root placed in the jawbone to support a replacement tooth.\n\nAfter healing, the implant can support a crown, bridge, or other implant-supported restoration.",
      journey: "Typical Treatment Journey",
      steps: ["Assessment", "Planning", "Implant Placement", "Healing", "Final Restoration"],
    },

    section4: {
      title: "Implant Options",
      intro: "Different situations may require different approaches.",
      options: [
        { title: "Single Tooth Implant", desc: "Replacing one missing tooth." },
        { title: "Multiple Tooth Implants", desc: "Replacing several missing teeth." },
        { title: "Implant-Supported Bridge", desc: "Replacing multiple teeth without placing one implant for every missing tooth." },
        { title: "More Complex Rehabilitation", desc: "For patients with more extensive tooth loss or restorative needs." },
      ],
    },

    section5: {
      title: "How Treatment Is Planned",
      intro: "Treatment planning may include evaluating:",
      evaluations: [
        "Oral health",
        "Remaining teeth",
        "Bone support",
        "Bite function",
        "Aesthetic goals",
        "Long-term expectations",
      ],
      note: "The most appropriate plan depends on your individual situation.",
    },

    section6: {
      title: "Implant Systems Available At EMIS",
      intro: "EMIS works with several implant systems, including:",
      systems: ["Straumann", "Hiossen", "Osstem", "ETK", "Biotem"],
      note: "Different implant systems may be appropriate for different clinical situations.\n\nYour treatment recommendation will be based on your oral condition, bone support, restoration needs, and long-term treatment goals — not brand preference alone.",
    },

    section7: {
      title: "For Overseas Patients",
      intro: "Many overseas Vietnamese and international patients begin by sending X-rays before traveling to Vietnam.\n\nThis allows the team to review your situation, discuss possible timelines, and help you prepare for the next steps.",
      costSection: "Cost & Value Considerations",
      costContent: "Treatment costs in Vietnam can differ significantly from those in countries such as the United States or Australia.\n\nFor some patients, this opens the door to implant treatment that may have felt financially difficult or out of reach at home.",
      cta: "Learn More About International Patients",
    },

    section8: {
      title: "Real Patient Cases",
      intro: "Explore how patients with missing teeth were assessed, treated, and supported throughout their treatment journey.",
      cta: "View Implant Patient Cases",
    },

    section9: {
      title: "Not Sure If Implant Treatment Is Right For You?",
      intro: "If you already have an X-ray or CBCT scan, our team can provide a preliminary review and help you better understand which options may be appropriate for your situation.",
      primaryCta: "Send Your X-ray",
      secondaryCta: "Discuss Your Situation",
      note: "Final treatment recommendations require an in-person examination and appropriate diagnostic evaluation.",
    },
  };

  const content = isVI ? viContent : enContent;

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* Section 1: Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{content.section1.title}</h1>
          <p className="text-xl text-gray-700 whitespace-pre-line mb-8">{content.section1.intro}</p>
          <div className="flex gap-4">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              {content.section1.primaryCta}
            </Link>
            <Link to="/contact" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
              {content.section1.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Could Implant Be Right */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section2.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{content.section2.intro}</p>
          <ul className="space-y-3 mb-12">
            {content.section2.checklist.map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{content.section2.whyMatters}</h3>
            <p className="text-gray-700 whitespace-pre-line">{content.section2.whyContent}</p>
          </div>
        </div>
      </section>

      {/* Section 3: Understanding Treatment */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section3.title}</h2>
          <p className="text-lg text-gray-700 whitespace-pre-line mb-12">{content.section3.intro}</p>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{content.section3.journey}</h3>
            <div className="flex flex-wrap gap-4">
              {content.section3.steps.map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div className="ml-4 text-gray-700 font-semibold">{step}</div>
                  {i < content.section3.steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Implant Options */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section4.title}</h2>
          <p className="text-lg text-gray-700 mb-12">{content.section4.intro}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {content.section4.options.map((option, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-700">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Treatment Planning */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section5.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{content.section5.intro}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {content.section5.evaluations.map((item, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 font-semibold bg-blue-50 p-6 rounded-lg">{content.section5.note}</p>
        </div>
      </section>

      {/* Section 6: Implant Systems */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section6.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{content.section6.intro}</p>
          <div className="flex flex-wrap gap-4 mb-12">
            {content.section6.systems.map((system, i) => (
              <div key={i} className="bg-gray-100 px-6 py-3 rounded-full text-gray-900 font-semibold">
                {system}
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 whitespace-pre-line bg-amber-50 border-l-4 border-amber-400 p-6 rounded">{content.section6.note}</p>
        </div>
      </section>

      {/* Section 7: Overseas Patients */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section7.title}</h2>
          <p className="text-lg text-gray-700 whitespace-pre-line mb-12">{content.section7.intro}</p>
          <div className="bg-white rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.section7.costSection}</h3>
            <p className="text-lg text-gray-700 whitespace-pre-line">{content.section7.costContent}</p>
          </div>
          <Link to="/visitor-program" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            {content.section7.cta}
          </Link>
        </div>
      </section>

      {/* Section 8: Real Cases */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section8.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{content.section8.intro}</p>
          <Link to="/doctors" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            {content.section8.cta}
          </Link>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{content.section9.title}</h2>
          <p className="text-xl mb-8 whitespace-pre-line">{content.section9.intro}</p>
          <div className="flex gap-4 justify-center mb-8">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {content.section9.primaryCta}
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10">
              {content.section9.secondaryCta}
            </Link>
          </div>
          <p className="text-blue-100 italic">{content.section9.note}</p>
        </div>
      </section>
    </main>
  );
};

export default ImplantGuide;
