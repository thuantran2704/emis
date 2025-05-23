import { useState } from 'react';
import mailIcon from '../pics/mail.jpg';
import phoneIcon from '../pics/phone.jpg';
import facebook from '../pics/facebook.jpg';
import instagram from '../pics/instagram.jpg';
import zaloIcon from '../pics/zalo.jpg';
import Alert from '../components/alert';
export default function Contact({ language }) {
  const vietnameseContent = {
    title: "Liên Hệ",
    highlight: "Chúng Tôi",
    getInTouch: "Thông Tin Liên Hệ",
    bookAppointment: "Đặt Lịch Hẹn",
    contactInfo: {
      phone: "Điện Thoại",
      email: "Email",
      facebook: "Facebook",
      instagram: "Instagram"
    },
    formLabels: {
      name: "Họ Và Tên",
      email: "Email",
      phone: "Số Điện Thoại",
      date: "Ngày Hẹn",
      service: "Dịch Vụ",
      message: "Lời Nhắn",
      submit: "Gửi Tin Nhắn"
    },
    services: [
      "Khám Tổng Quát",
      "Cấy Ghép Implant",
      "Niềng Răng",
      "Tẩy Trắng Răng",
      "Trám Răng"
    ]
  };

  const englishContent = {
    title: "Contact Us",
    highlight: "Us",
    getInTouch: "Get in Touch",
    bookAppointment: "Book an Appointment",
    contactInfo: {
      phone: "Phone",
      email: "Email",
      facebook: "Facebook",
      instagram: "Instagram"
    },
    formLabels: {
      name: "Your Name",
      email: "Email",
      phone: "Phone Number",
      date: "Appointment Date",
      service: "Service",
      message: "Message",
      submit: "Send Message"
    },
    services: [
      "General Checkup",
      "Dental Implant",
      "Braces",
      "Teeth Whitening",
      "Dental Filling"
    ]
  };

  const simplifiedContent = {
    title: "联系我们",
    highlight: "我们",
    getInTouch: "联系方式",
    bookAppointment: "预约就诊",
    contactInfo: {
      phone: "电话",
      email: "电子邮件",
      facebook: "脸书",
      instagram: "Instagram"
    },
    formLabels: {
      name: "您的姓名",
      email: "电子邮件",
      phone: "电话号码",
      date: "预约日期",
      service: "服务项目",
      message: "留言",
      submit: "发送信息"
    },
    services: [
      "常规检查",
      "种植牙",
      "牙齿矫正",
      "牙齿美白",
      "补牙"
    ]
  };

  const traditionalContent = {
    title: "聯繫我們",
    highlight: "我們",
    getInTouch: "聯繫方式",
    bookAppointment: "預約就診",
    contactInfo: {
      phone: "電話",
      email: "電子郵件",
      facebook: "臉書",
      instagram: "Instagram"
    },
    formLabels: {
      name: "您的姓名",
      email: "電子郵件",
      phone: "電話號碼",
      date: "預約日期",
      service: "服務項目",
      message: "留言",
      submit: "發送信息"
    },
    services: [
      "常規檢查",
      "植牙",
      "牙齒矯正",
      "牙齒美白",
      "補牙"
    ]
  };

  const frenchContent = {
    title: "Contactez-",
    highlight: "Nous",
    getInTouch: "Nous Contacter",
    bookAppointment: "Prendre Rendez-vous",
    contactInfo: {
      phone: "Téléphone",
      email: "Email",
      facebook: "Facebook",
      instagram: "Instagram"
    },
    formLabels: {
      name: "Votre Nom",
      email: "Email",
      phone: "Numéro de Téléphone",
      date: "Date de Rendez-vous",
      service: "Service",
      message: "Message",
      submit: "Envoyer le Message"
    },
    services: [
      "Consultation Générale",
      "Implant Dentaire",
      "Appareil Dentaire",
      "Blanchiment des Dents",
      "Plaquage Dentaire"
    ]
  };

  const koreanContent = {
    title: "연락",
    highlight: "하기",
    getInTouch: "연락처 정보",
    bookAppointment: "예약하기",
    contactInfo: {
      phone: "전화번호",
      email: "이메일",
      facebook: "페이스북",
      instagram: "인스타그램"
    },
    formLabels: {
      name: "이름",
      email: "이메일",
      phone: "전화번호",
      date: "예약 날짜",
      service: "서비스",
      message: "메시지",
      submit: "메시지 보내기"
    },
    services: [
      "일반 검진",
      "임플란트",
      "치아 교정",
      "치아 미백",
      "충치 치료"
    ]
  };

  const content =
    language === 'vietnamese' ? vietnameseContent :
    language === 'english' ? englishContent :
    language === 'simplified' ? simplifiedContent :
    language === 'traditional' ? traditionalContent :
    language === 'french' ? frenchContent :
    koreanContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });

  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    // 1. Log the form data being submitted
    console.log('Form data being submitted:', JSON.stringify(formData, null, 2));
    console.log('Using API endpoint:', `${import.meta.env.VITE_API_URL}/api/appointments`);

    // 2. Make the fetch request with detailed configuration
    const fetchStartTime = performance.now();
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify(formData),
      credentials: 'include', // Include cookies if needed
    });
    const fetchDuration = performance.now() - fetchStartTime;


    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.clone().json(); // Clone response to read twice if needed
      } catch (e) {
        try {
          errorData = await response.clone().text(); // Fallback to text if not JSON
        } catch (e) {
          errorData = 'Unable to parse error response';
        }
      }

      console.error('Server returned error:', {
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        errorData,
      });

      throw new Error(
        errorData?.message || 
        errorData ||
        `Server responded with ${response.status}: ${response.statusText}`
      );
    }

    // 5. Process successful response
    const data = await response.json();
    setIsSubmitting(false);
    // 6. Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      service: '',
      message: ''
    });

    // 7. Show success alert with all language options
    setAlert({
      show: true,
      message: (() => {
        switch (language) {
          case 'english': return 'Appointment booked successfully!';
          case 'vietnamese': return 'Đặt lịch hẹn thành công!';
          case 'simplified': return '预约成功!';
          case 'traditional': return '預約成功!';
          case 'french': return 'Rendez-vous réservé avec succès!';
          case 'korean': return '예약이 성공적으로 완료되었습니다!';
          default: return 'Appointment booked successfully!';
        }
      })(),
      type: 'success'
    });

  } catch (error) {
    // 9. User-friendly error message with all language options
    setAlert({
      show: true,
      message: (() => {
        switch (language) {
          case 'english': return 'Failed to book appointment. Please try again.';
          case 'vietnamese': return 'Đặt lịch hẹn không thành công. Vui lòng thử lại.';
          case 'simplified': return '预约失败，请重试。';
          case 'traditional': return '預約失敗，請重試。';
          case 'french': return 'Échec de la réservation. Veuillez réessayer.';
          case 'korean': return '예약에 실패했습니다. 다시 시도해 주세요.';
          default: return 'Failed to book appointment. Please try again.';
        }
      })(),
      type: 'error'
    });
  }
};

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7]">
      {alert.show && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 
            className="text-4xl font-bold text-[#1f2937] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.title.split(content.highlight)[0]} 
            <span className="text-[#d4af37]"> {content.highlight}</span>
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-[#fffaf0] p-8 rounded-xl shadow-lg">
            <h2 
              className="text-2xl font-bold text-[#d4af37] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.getInTouch}
            </h2>
            <ul className="space-y-6 text-[#1f2937]">
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full">
                  <img src={phoneIcon} alt="Phone" className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <h3 
                    className="font-semibold"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {content.contactInfo.phone}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant', serif" }}>091 910 0021</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full">
                  <img src={zaloIcon} alt="Zalo" className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <h3 
                    className="font-semibold"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    Zalo
                  </h3>
                  <p style={{ fontFamily: "'Cormorant', serif" }}>https://zalo.me/0919100021</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full">
                  <img src={mailIcon} alt="Email" className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <h3 
                    className="font-semibold"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {content.contactInfo.email}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant', serif" }}>Emisdentalclinic@gmail.com</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full">
                  <img src={facebook} alt="Facebook" className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <h3 
                    className="font-semibold"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {content.contactInfo.facebook}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant', serif" }}>facebook.com/emisdental</p>
                </div>
              </li>
              {/* <li className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full">
                  <img src={instagram} alt="Instagram" className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <h3 
                    className="font-semibold"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {content.contactInfo.instagram}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant', serif" }}>instagram.com/emis-dental</p>
                </div>
              </li> */}
            </ul>
          </div>
          
          {/* Appointment Form */}
          <div className="bg-[#fffaf0] p-8 rounded-xl shadow-lg">
            <h2 
              className="text-2xl font-bold text-[#d4af37] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.bookAppointment}
            </h2>
            {/* Loading overlay */}
          
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSubmitting && (
                <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-white/40 rounded-xl">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#d4af37]"></div>
                </div>
              )}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-[#1f2937] mb-1"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {content.formLabels.name}
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[#1f2937] mb-1"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {content.formLabels.email}
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-[#1f2937] mb-1"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {content.formLabels.phone}
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="date" 
                  className="block text-[#1f2937] mb-1"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {content.formLabels.date}
                </label>
                <input 
                  type="date" 
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="service" 
                  className="block text-[#1f2937] mb-1"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {content.formLabels.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                  required
                >
                  <option value="">{content.formLabels.service}</option>
                  {content.services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-[#1f2937] mb-1"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {content.formLabels.message}
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-3 px-6 rounded-full transition-all text-lg shadow-md hover:shadow-lg mt-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {content.formLabels.submit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}