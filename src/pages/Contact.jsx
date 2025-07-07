import { useState } from 'react';
import mailIcon from '../pics/mail.jpg';
import phoneIcon from '../pics/phone.jpg';
import facebook from '../pics/facebook.jpg';
import instagram from '../pics/instagram.jpg';
import zaloIcon from '../pics/zalo.jpg';
import Alert from '../components/alert';
import contactContent from '../Translations/contactContent';
import ReCAPTCHA from "react-google-recaptcha"; // Add this import

export default function Contact({ language }) {
  const content = contactContent[language] || contactContent.english;
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };
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
//testing
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      // Show error (translated)
      setAlert({
        show: true,
        message: "Please complete the reCAPTCHA verification",
        type: "error"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        language: language,
        recaptchaToken
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.clone().json();
        } catch {
          try {
            errorData = await response.clone().text();
          } catch {
            errorData = 'Unable to parse error response';
          }
        }

        throw new Error(
          errorData?.message ||
          errorData ||
          `Server responded with ${response.status}: ${response.statusText}`
        );
      }

      await response.json();
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        service: '',
        message: ''
      });

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
      setIsSubmitting(false);
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

  const contactItems = [
    {
      icon: phoneIcon,
      alt: "Phone",
      label: content.contactInfo.phone,
      value: "091 910 0021",
      href: "tel:0919100021"
    },
    {
      icon: mailIcon,
      alt: "Email",
      label: content.contactInfo.email,
      value: "Emisdentalclinic@gmail.com",
      href: "mailto:Emisdentalclinic@gmail.com"
    },
    {
      icon: zaloIcon,
      alt: "Zalo",
      label: "Zalo",
      value: "https://zalo.me/0919100021",
      href: "https://zalo.me/0919100021"
    },
    {
      icon: facebook,
      alt: "Facebook",
      label: content.contactInfo.facebook,
      value: "facebook.com/emisdental",
      href: "https://facebook.com/emisdental"
    },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7]">
      {alert.show && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}

      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/40">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#d4af37]"></div>
        </div>
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
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full">
                    <img src={item.icon} alt={item.alt} className="h-6 w-6 object-contain" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ fontFamily: "'Cormorant', serif" }}
                    >
                      {item.label}
                    </h3>
                    <p style={{ fontFamily: "'Cormorant', serif" }}>
                      <a
                        href={item.href}
                        className="text-blue-600 hover:underline break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p
              className="mt-6 font-bold text-[#333] text-lg"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {content.mainContact}
            </p>
          </div>

          {/* Appointment Form */}
          <div className="bg-[#fffaf0] p-8 rounded-xl shadow-lg">
            <h2
              className="text-2xl font-bold text-[#d4af37] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.bookAppointment}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "phone", "date"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-[#1f2937] mb-1"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {content.formLabels[field]}
                  </label>
                  <input
                    type={field === "date" ? "date" : field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    style={{ fontFamily: "'Cormorant', serif" }}
                    required
                  />
                </div>
              ))}

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
              <div className="my-4">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                />
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
