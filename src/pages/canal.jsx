import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Shield,
  CheckCircle,
  Users,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  AlertCircle,
  Activity,
  Stethoscope,
  Crown,
  Layers,
  Clock,
  ZapOff,
} from "lucide-react";

import viImg from "../pics/april_disc/vie-canal.png";

const CanalAd = () => {
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";

  const viContent = {
    metaTitle: "Điều Trị Tủy Răng & Bọc Sứ Phục Hồi | Emis Dental",
    metaDescription:
      "Sâu răng viêm tủy cần điều trị kịp thời. Emis Dental cung cấp dịch vụ điều trị tủy chuyên sâu, tái tạo cùi răng và bọc sứ bảo tồn răng thật hiệu quả.",

    heroTitle: "SÂU RĂNG VIÊM TỦY",
    heroSubtitle: "PHƯƠNG PHÁP PHỤC HỒI BẰNG BỌC RĂNG SỨ",
    heroDescription:
      "Sâu răng nếu không được điều trị kịp thời có thể tiến triển sâu vào tủy răng, gây viêm và phá hủy cấu trúc răng từ bên trong. Khi đã đến giai đoạn viêm tủy, cần can thiệp điều trị chuyên sâu để bảo tồn răng thật.",

    what: {
      title: "SÂU RĂNG VIÊM TỦY LÀ GÌ?",
      content:
        "Viêm tủy xảy ra khi vi khuẩn từ ổ sâu răng xâm nhập vào buồng tủy, gây viêm nhiễm. Người bệnh có thể gặp các triệu chứng như đau nhức kéo dài, ê buốt khi ăn uống hoặc đau tự phát, đặc biệt vào ban đêm.",
      warning:
        "Nếu không được điều trị, viêm tủy có thể dẫn đến hoại tử tủy, áp xe và cuối cùng là mất răng.",
    },

    process: {
      title: "QUY TRÌNH ĐIỀU TRỊ VÀ PHỤC HỒI RĂNG",
      steps: [
        {
          number: "1",
          title: "Điều Trị Tủy",
          description:
            "Bác sĩ loại bỏ hoàn toàn phần tủy bị viêm nhiễm, làm sạch và tạo hình hệ thống ống tủy nhằm ngăn chặn vi khuẩn tái xâm nhập.",
          icon: <Activity className="w-6 h-6" />,
        },
        {
          number: "2",
          title: "Tái Tạo Cùi Răng",
          description:
            "Sau khi điều trị tủy, răng thường bị mất nhiều mô cứng, trở nên yếu hơn. Bác sĩ sẽ tiến hành cắm chốt và tái tạo lại phần cùi răng để tạo nền vững chắc cho phục hình.",
          icon: <Layers className="w-6 h-6" />,
        },
        {
          number: "3",
          title: "Bọc Răng Sứ",
          description:
            "Răng sau chữa tủy được chỉ định bọc sứ nhằm bảo vệ cấu trúc còn lại, đồng thời phục hồi hình thể và chức năng ăn nhai.",
          icon: <Crown className="w-6 h-6" />,
        },
      ],
    },

    crownRole: {
      title: "VAI TRÒ CỦA BỌC RĂNG SỨ SAU CHỮA TỦY",
      content:
        "Bọc răng sứ không chỉ mang tính thẩm mỹ mà còn là bước quan trọng giúp bảo vệ răng đã điều trị tủy:",
      items: [
        "Tăng độ bền, hạn chế nguy cơ nứt vỡ",
        "Khôi phục hình thể và mặt nhai",
        "Đảm bảo chức năng ăn nhai ổn định",
        "Giảm nguy cơ tái nhiễm vi khuẩn",
      ],
    },

    symptoms: {
      title: "KHI NÀO NÊN THĂM KHÁM?",
      content:
        "Người bệnh nên kiểm tra răng miệng sớm khi có các dấu hiệu như:",
      items: [
        "Đau răng kéo dài",
        "Ê buốt khi ăn nóng/lạnh",
        "Răng sâu lớn hoặc đổi màu",
      ],
      note: "Việc phát hiện và điều trị đúng thời điểm sẽ giúp bảo tồn răng thật, hạn chế các can thiệp phức tạp và chi phí về sau.",
    },

    cta: {
      title: "ĐỂ ĐƯỢC THĂM KHÁM VÀ TƯ VẤN PHƯƠNG ÁN ĐIỀU TRỊ PHÙ HỢP",
      button: "ĐẶT LỊCH THĂM KHÁM NGAY",
      subtext: "Liên hệ Emis Dental qua hotline hoặc đến trực tiếp phòng khám.",
    },
  };

  const enContent = {
    metaTitle: "Root Canal Treatment & Porcelain Crown Restoration | Emis Dental",
    metaDescription:
      "Pulpitis requires timely treatment. Emis Dental provides specialized root canal treatment, tooth core rebuilding, and porcelain crown restoration to preserve your natural teeth.",

    heroTitle: "DENTAL CARIES & PULPITIS",
    heroSubtitle: "RESTORATION WITH PORCELAIN CROWNS",
    heroDescription:
      "If left untreated, dental caries can progress to the pulp, causing inflammation and destroying the tooth structure from within. Once pulpitis occurs, specialized treatment is required to preserve the natural tooth.",

    what: {
      title: "WHAT IS DENTAL CARIES WITH PULPITIS?",
      content:
        "Pulpitis occurs when bacteria from a cavity invade the pulp chamber, causing infection. Patients may experience prolonged pain, sensitivity when eating or drinking, or spontaneous pain, especially at night.",
      warning:
        "If left untreated, pulpitis can lead to pulp necrosis, abscesses, and ultimately tooth loss.",
    },

    process: {
      title: "DENTAL TREATMENT AND RESTORATION PROCESS",
      steps: [
        {
          number: "1",
          title: "Root Canal Treatment",
          description:
            "The dentist completely removes the infected pulp, then cleans and reshapes the root canal system to prevent bacterial reinfection.",
          icon: <Activity className="w-6 h-6" />,
        },
        {
          number: "2",
          title: "Tooth Core Preparation",
          description:
            "After root canal treatment, the tooth loses significant hard tissue and becomes weaker. The dentist places a post and rebuilds the tooth core to create a solid foundation for restoration.",
          icon: <Layers className="w-6 h-6" />,
        },
        {
          number: "3",
          title: "Porcelain Crown",
          description:
            "Teeth that have undergone root canal treatment are crowned to protect the remaining structure while restoring shape and chewing function.",
          icon: <Crown className="w-6 h-6" />,
        },
      ],
    },

    crownRole: {
      title: "THE ROLE OF PORCELAIN CROWNS AFTER ROOT CANAL TREATMENT",
      content:
        "Porcelain crowns are not only for aesthetics but also play an important protective role for teeth that have undergone root canal treatment:",
      items: [
        "Increase durability and reduce the risk of cracking",
        "Restore tooth shape and chewing surface",
        "Ensure stable chewing function",
        "Reduce the risk of bacterial reinfection",
      ],
    },

    symptoms: {
      title: "WHEN SHOULD YOU VISIT A DENTIST?",
      content: "Patients should have their teeth checked early if they experience:",
      items: [
        "Persistent toothache",
        "Sensitivity to hot or cold foods",
        "Large cavities or tooth discoloration",
      ],
      note: "Early detection and timely treatment help preserve natural teeth and limit complex interventions and costs later on.",
    },

    cta: {
      title: "FOR EXAMINATION AND CONSULTATION ON SUITABLE TREATMENT OPTIONS",
      button: "BOOK AN APPOINTMENT NOW",
      subtext: "Contact Emis Dental via hotline or visit the clinic directly.",
    },
  };

  const c = isVI ? viContent : enContent;

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-700 via-teal-600 to-emerald-600 pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid ${isVI ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-3xl mx-auto"} gap-12 items-center`}>
            {/* Text */}
            <div>
              <div className="inline-flex items-center bg-white/20 text-white px-5 py-2 rounded-full font-bold mb-6 text-sm">
                <Stethoscope className="w-4 h-4 mr-2" />
                {isVI ? "ĐIỀU TRỊ TỦY RĂNG CHUYÊN SÂU" : "SPECIALIZED ROOT CANAL TREATMENT"}
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
                {c.heroTitle}
              </h1>

              <p className="text-2xl font-bold text-emerald-200 mb-6">
                {c.heroSubtitle}
              </p>

              <p className="text-lg text-cyan-100 mb-8">{c.heroDescription}</p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: <Shield className="w-5 h-5" />, val: isVI ? "Bảo tồn" : "Preserve", label: isVI ? "Răng thật" : "Natural Teeth" },
                  { icon: <Activity className="w-5 h-5" />, val: isVI ? "Chuyên sâu" : "Specialist", label: isVI ? "Điều trị tủy" : "Root Canal" },
                  { icon: <Crown className="w-5 h-5" />, val: isVI ? "Bọc sứ" : "Crowned", label: isVI ? "Phục hồi hoàn toàn" : "Full Restoration" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center text-white">
                    <div className="text-emerald-300 flex justify-center mb-1">{stat.icon}</div>
                    <div className="font-bold text-xs">{stat.val}</div>
                    <div className="text-cyan-200 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image — VI only */}
            {isVI && (
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-transparent to-emerald-400 rounded-3xl opacity-40 blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30">
                  <img
                    src={viImg}
                    alt="Điều trị tủy và bọc răng sứ tại Emis Dental"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-teal-700 font-bold text-lg py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {isVI ? "ĐẶT LỊCH THĂM KHÁM MIỄN PHÍ" : "BOOK FREE CONSULTATION"}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center text-white">
              <ZapOff className="w-4 h-4 mr-2" />
              <span className="font-semibold">{isVI ? "Điều trị tủy không đau với công nghệ hiện đại" : "Painless root canal with modern technology"}</span>
            </div>
            <div className="flex items-center text-white">
              <Shield className="w-4 h-4 mr-2" />
              <span className="font-semibold">{isVI ? "Bảo tồn răng thật tối đa" : "Maximum natural tooth preservation"}</span>
            </div>
            <Link
              to="/contact"
              className="bg-white text-teal-700 font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm"
            >
              {isVI ? "ĐĂNG KÝ NGAY" : "REGISTER NOW"}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">

          {/* What is Pulpitis */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-sky-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mr-4 text-white">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{c.what.title}</h2>
            </div>
            <p className="text-gray-700 text-lg mb-6">{c.what.content}</p>
            <div className="flex items-start bg-red-50 border border-red-200 rounded-2xl p-5">
              <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 font-medium">{c.what.warning}</p>
            </div>
          </section>

          {/* Process */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{c.process.title}</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-600 to-emerald-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {c.process.steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-gradient-to-br from-sky-50 to-teal-50 border border-teal-100 rounded-2xl p-6 h-full hover:border-teal-300 transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-4">
                      {step.number}
                    </div>
                    <div className="text-teal-600 flex justify-center mb-3">{step.icon}</div>
                    <h3 className="font-bold text-gray-800 text-lg text-center mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm text-center">{step.description}</p>
                  </div>
                  {idx < c.process.steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <ChevronRight className="w-6 h-6 text-teal-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Crown Role + Symptoms side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            <section className="bg-white rounded-3xl shadow-xl p-8 border border-sky-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-lg flex items-center justify-center mr-3 text-white">
                  <Crown className="w-4 h-4" />
                </div>
                {c.crownRole.title}
              </h2>
              <p className="text-gray-600 mb-5">{c.crownRole.content}</p>
              <ul className="space-y-3">
                {c.crownRole.items.map((item, idx) => (
                  <li key={idx} className="flex items-start bg-teal-50 rounded-xl p-3 border border-teal-100">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-3xl shadow-xl p-8 border border-sky-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-lg flex items-center justify-center mr-3 text-white">
                  <Clock className="w-4 h-4" />
                </div>
                {c.symptoms.title}
              </h2>
              <p className="text-gray-600 mb-5">{c.symptoms.content}</p>
              <ul className="space-y-3 mb-5">
                {c.symptoms.items.map((item, idx) => (
                  <li key={idx} className="flex items-start bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                    <AlertCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
                <p className="text-sky-800 text-sm">{c.symptoms.note}</p>
              </div>
            </section>
          </div>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-cyan-700 via-teal-600 to-emerald-600 rounded-3xl p-8 md:p-10 text-center shadow-xl">
            <Stethoscope className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{c.cta.title}</h2>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">{c.cta.subtext}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-teal-700 font-bold text-lg py-4 px-8 rounded-full shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {c.cta.button}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:0919100021"
                className="inline-flex items-center justify-center bg-teal-800 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-teal-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                0919 100 021
              </a>
            </div>
          </section>
        </div>

        {/* Contact Footer */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-sky-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {isVI ? "NHA KHOA QUỐC TẾ " : ""}
              <span className="text-teal-600">EMIS DENTAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-emerald-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-5 bg-sky-50 rounded-xl">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{isVI ? "Địa chỉ" : "Address"}</h3>
              <p className="text-gray-600 text-sm">62B Phạm Ngọc Thạch</p>
              <p className="text-gray-600 text-sm">
                {isVI ? "P. Xuân Hòa, TP.HCM" : "Vo Thi Sau Ward, District 3, HCMC"}
              </p>
            </div>

            <div className="text-center p-5 bg-teal-50 rounded-xl">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Hotline</h3>
              <p className="text-lg font-bold text-teal-600">0919 100 021</p>
              <p className="text-lg font-bold text-teal-600">0768 117 068</p>
            </div>

            <div className="text-center p-5 bg-emerald-50 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Website</h3>
              <a
                href="https://www.emisdental.com"
                className="text-teal-600 hover:underline font-medium block"
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

export default CanalAd;
