import { Link } from 'react-router-dom';
import { useState } from 'react';
import mailIcon from '../pics/mail.jpg';
import phoneIcon from '../pics/phone.jpg';
import facebook from '../pics/facebook.jpg';
import instagram from '../pics/instagram.jpg';

export default function Contact() {
  const [language, setLanguage] = useState('vietnamese'); // Default to Vietnamese

  const toggleLanguage = () => {
    setLanguage(prev => {
      switch(prev) {
        case 'vietnamese': return 'english';
        case 'english': return 'simplified';
        case 'simplified': return 'traditional';
        case 'traditional': return 'vietnamese';
        default: return 'vietnamese';
      }
    });
  };

  // Vietnamese content (default)
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
      message: "Lời Nhắn",
      submit: "Gửi Tin Nhắn"
    }
  };

  // English content
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
      message: "Message",
      submit: "Send Message"
    }
  };

  // Simplified Chinese content
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
      message: "留言",
      submit: "发送信息"
    }
  };

  // Traditional Chinese content
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
      message: "留言",
      submit: "發送信息"
    }
  };

  const content = 
    language === 'vietnamese' ? vietnameseContent :
    language === 'english' ? englishContent :
    language === 'simplified' ? simplifiedContent :
    traditionalContent;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7]">
      {/* Language Toggle Button */}
      <button 
        onClick={toggleLanguage}
        className="fixed bottom-6 right-6 bg-[#d4af37] text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-[#c19d30] transition-all z-50 flex items-center gap-2"
        style={{ fontFamily: "'Cormorant', serif" }}
      >
        {language === 'vietnamese' ? 'VN' : 
         language === 'english' ? 'EN' : 
         language === 'simplified' ? '简' : '繁'}
      </button>

      {/* Rest of your contact page JSX remains the same */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 
            className="text-4xl font-bold text-[#1f2937] mb-4"
            style={{ fontFamily: "'Cormorant', serif" }}
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
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.getInTouch}
            </h2>
            <ul className="space-y-6 text-[#1f2937]">
              <li className="flex items-start gap-4">
                <div className="bg-white p-1 rounded-full">
                  <img src={phoneIcon} alt="Phone" className="h-8 w-8 object-contain" />
                </div>
                <div>
                  <h3 
                    className="font-semibold"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {content.contactInfo.phone}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant', serif" }}>+84 692 225 388</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-1 rounded-full">
                  <img src={mailIcon} alt="Email" className="h-8 w-8 object-contain" />
                </div>
                <div>
                  <h3 
                    className="font-semibold"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {content.contactInfo.email}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant', serif" }}>info@emis-dental.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-1 rounded-full">
                  <img src={facebook} alt="Facebook" className="h-8 w-8 object-contain" />
                </div>
                <div>
                  <h3 
                    className="font-semibold"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {content.contactInfo.facebook}
                  </h3>
                  <p style={{ fontFamily: "'Cormorant', serif" }}>facebook.com/emis-dental</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white p-1 rounded-full">
                  <img src={instagram} alt="Instagram" className="h-8 w-8 object-contain" />
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
              </li>
            </ul>
          </div>
          
          {/* Contact Form */}
          <div className="bg-[#fffaf0] p-8 rounded-xl shadow-lg">
            <h2 
              className="text-2xl font-bold text-[#d4af37] mb-6"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.bookAppointment}
            </h2>
            <form className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-[#1f2937] mb-2"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {content.formLabels.name}
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[#1f2937] mb-2"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {content.formLabels.email}
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                />
              </div>
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-[#1f2937] mb-2"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {content.formLabels.message}
                </label>
                <textarea 
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  style={{ fontFamily: "'Cormorant', serif" }}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-3 px-6 rounded-full transition-all text-lg shadow-md hover:shadow-lg"
                style={{ fontFamily: "'Cormorant', serif" }}
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