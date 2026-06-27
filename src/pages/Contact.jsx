import { useState } from 'react';
import Alert from '../components/alert';
import contactContent from '../Translations/contactContent';
import ReCAPTCHA from "react-google-recaptcha"; // Add this import
import { useSelector } from 'react-redux';
import { primaryContactItems, socialContactItems } from '../data/contactChannels';
export default function Contact() {
  const language = useSelector((state) => state.language.language);
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

    } catch {
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
          >
            {content.title.split(content.highlight)[0]}
            <span className="text-[#d4af37]"> {content.highlight}</span>
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Contact Actions */}
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl font-bold text-[#d4af37] mb-6 text-center"
            >
              {content.getInTouch}
            </h2>

            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[#1f2937]">
              {primaryContactItems.map((item, index) => {
                const Icon = item.icon;
                const isExternalLink = item.href.startsWith('http');
                return (
                  <li key={index} className="flex items-center justify-center">
                    <a
                      href={item.href}
                      target={isExternalLink ? '_blank' : undefined}
                      rel={isExternalLink ? 'noopener noreferrer' : undefined}
                      aria-label={item.label}
                      title={item.label}
                      className="h-12 w-12 sm:h-14 sm:w-14 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition hover:-translate-y-0.5 border border-[#efe4ca]"
                    >
                      {typeof Icon === 'string' ? (
                        <img src={Icon} alt={item.alt} className="h-6 w-6 sm:h-7 sm:w-7 object-contain" />
                      ) : (
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#d4af37]" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="w-20 h-px bg-[#d4af37]/40 mx-auto my-4" aria-hidden="true"></div>

            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[#1f2937]">
              {socialContactItems.map((item, index) => {
                const Icon = item.icon;
                const isExternalLink = item.href.startsWith('http');
                return (
                  <li key={index} className="flex items-center justify-center">
                    <a
                      href={item.href}
                      target={isExternalLink ? '_blank' : undefined}
                      rel={isExternalLink ? 'noopener noreferrer' : undefined}
                      aria-label={item.label}
                      title={item.label}
                      className="h-12 w-12 sm:h-14 sm:w-14 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md transition hover:-translate-y-0.5 border border-[#efe4ca]"
                    >
                      {typeof Icon === 'string' ? (
                        <img src={Icon} alt={item.alt} className="h-6 w-6 sm:h-7 sm:w-7 object-contain" />
                      ) : (
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#d4af37]" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Appointment Form */}
          <div className="bg-[#fffaf0] p-6 sm:p-7 rounded-xl shadow-lg max-w-3xl mx-auto w-full">
            <h2
              className="text-2xl font-bold text-[#d4af37] mb-5 text-center"
            >
              {content.bookAppointment}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {["name", "email", "phone", "date"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-[#1f2937] mb-1"
                    >
                      {content.formLabels[field]}
                    </label>
                    <input
                      type={field === "date" ? "date" : field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full p-2.5 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      required
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="block text-[#1f2937] mb-1"
                  >
                    {content.formLabels.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-2.5 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    required
                  >
                    <option value="">{content.formLabels.service}</option>
                    {content.services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-[#1f2937] mb-1"
                  >
                    {content.formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2.5 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  ></textarea>
                </div>
              </div>

              <div className="my-3 overflow-x-auto">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-2.5 px-6 rounded-full transition-all text-base shadow-md hover:shadow-lg mt-2"
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
