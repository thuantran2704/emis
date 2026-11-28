import { useEffect, useState } from 'react';
import Alert from '../components/alert';
import contactContent from '../Translations/contactContent';
import { contactSeoMeta } from '../data/seoMeta';
import ClientRecaptcha from '../components/ClientRecaptcha';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { primaryContactItems, socialContactItems } from '../data/contactChannels';
import { localDateInputMin } from '../data/appointmentDate';
import { appointmentSubmissionFeedback } from '../data/appointmentFeedback';
import { phoneCountryCodeHints } from '../data/consultationFields';
import { trackAppointmentConversion } from '../data/googleAds';
export default function Contact() {
  const language = useSelector((state) => state.language.language);
  const content = contactContent[language] || contactContent.english;
  const seo = contactSeoMeta[language] || contactSeoMeta.english;
  const [earliestDate, setEarliestDate] = useState('');
  useEffect(() => { setEarliestDate(localDateInputMin()); }, []);
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

      trackAppointmentConversion();
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
        message: (appointmentSubmissionFeedback[language] || appointmentSubmissionFeedback.english).success,
        type: 'success'
      });

    } catch {
      setIsSubmitting(false);
      setAlert({
        show: true,
        message: (appointmentSubmissionFeedback[language] || appointmentSubmissionFeedback.english).error,
        type: 'error'
      });
    }
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7]">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>
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
                      className="group h-14 w-14 sm:h-16 sm:w-16 bg-[#111317]/90 rounded-full flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_30px_rgba(212,175,55,0.16)] transition hover:-translate-y-1 border border-[#d4af37]/55 hover:border-[#d4af37]"
                    >
                      {typeof Icon === 'string' ? (
                        <img src={Icon} alt={item.alt} className="h-6 w-6 sm:h-7 sm:w-7 object-contain" />
                      ) : (
                        <Icon aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7 text-[#d4af37] transition-transform group-hover:scale-110" />
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
                      className="group h-14 w-14 sm:h-16 sm:w-16 bg-[#111317]/90 rounded-full flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.18)] hover:shadow-[0_14px_30px_rgba(212,175,55,0.16)] transition hover:-translate-y-1 border border-[#d4af37]/55 hover:border-[#d4af37]"
                    >
                      {typeof Icon === 'string' ? (
                        <img src={Icon} alt={item.alt} className="h-6 w-6 sm:h-7 sm:w-7 object-contain" />
                      ) : (
                        <Icon aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7 text-[#d4af37] transition-transform group-hover:scale-110" />
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
                      type={field === "date" ? "date" : field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      id={field}
                      name={field}
                      min={field === "date" ? earliestDate : undefined}
                      autoComplete={field === "phone" ? "tel" : field === "email" ? "email" : field === "name" ? "name" : undefined}
                      aria-describedby={field === "phone" ? "appointment-phone-hint" : undefined}
                      maxLength={field === "phone" ? 20 : undefined}
                      placeholder={field === "phone" ? "+84 912 345 678" : undefined}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full p-2.5 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      required
                    />
                    {field === 'phone' && <p id="appointment-phone-hint" className="mt-1 text-xs leading-5 text-[#53616a]">{phoneCountryCodeHints[language] || phoneCountryCodeHints.english}</p>}
                  </div>
                ))}

                <p className="text-sm leading-6 text-[#405363] sm:col-span-2">{content.dateHint}</p>

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
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2.5 border border-[#6b7280] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  ></textarea>
                </div>
              </div>

              <div className="my-3 overflow-x-auto">
                <ClientRecaptcha
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
