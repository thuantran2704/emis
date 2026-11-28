import { useEffect, useState } from "react";
import ClientRecaptcha from './ClientRecaptcha';
import Alert from "./alert";
import contactContent from "../Translations/contactContent";
import { consultationDateHints, consultationFields, consultationSubmissionErrors, languageOptions, otherServiceLabels, phoneCountryCodeHints, preferredDateLabels } from '../data/consultationFields';
import { contactItems, socialProfiles } from '../data/contactChannels';
import { localDateInputMin } from '../data/appointmentDate';
import { buildConsultationPayload, CONSULTATION_COUNTRY_LIMIT, CONSULTATION_MESSAGE_LIMIT } from '../data/consultationPayload';
import { trackAppointmentConversion } from '../data/googleAds';
import { useSelector } from 'react-redux';
export default function ContactForm({ embedded = false }) {
  const language = useSelector((state) => state.language.language);
  const content = contactContent[language] || contactContent.english;
  const fields = consultationFields[language] || consultationFields.english;
  const apiBaseUrl = import.meta.env.VITE_API_URL;
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [earliestDate, setEarliestDate] = useState('');
  useEffect(() => { setEarliestDate(localDateInputMin()); }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [preferences, setPreferences] = useState({ country: '', date: '', method: '', preferredLanguage: '', referral: '' });
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const controlClass = 'min-h-12 w-full rounded-lg border border-[#cfd8d8] bg-white px-4 py-3 text-base text-[#193543] placeholder:text-[#7b888a] transition-colors focus:border-[#8b6b2e] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/25';
  const labelClass = 'mb-1.5 block text-sm font-medium text-[#284048]';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecaptchaChange = (token) => setRecaptchaToken(token);
  const handlePreference = (event) => {
    const { name, value } = event.target;
    setPreferences((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!apiBaseUrl) {
      setAlert({
        show: true,
        message:
          language === "vietnamese"
            ? "Thiếu cấu hình API. Vui lòng thử lại sau."
            : language === "french"
            ? "Configuration API manquante. Veuillez réessayer plus tard."
            : language === "korean"
            ? "API 설정이 누락되었습니다. 잠시 후 다시 시도해주세요."
            : language === "simplified"
            ? "缺少 API 配置，请稍后重试。"
            : language === "traditional"
            ? "缺少 API 設定，請稍後再試。"
            : "Missing API configuration. Please try again later.",
        type: "error",
      });
      return;
    }

    if (!recaptchaSiteKey) {
      setAlert({
        show: true,
        message:
          language === "vietnamese"
            ? "Thiếu cấu hình reCAPTCHA. Vui lòng thử lại sau."
            : language === "french"
            ? "Configuration reCAPTCHA manquante. Veuillez réessayer plus tard."
            : language === "korean"
            ? "reCAPTCHA 설정이 누락되었습니다. 잠시 후 다시 시도해주세요."
            : language === "simplified"
            ? "缺少 reCAPTCHA 配置，请稍后重试。"
            : language === "traditional"
            ? "缺少 reCAPTCHA 設定，請稍後再試。"
            : "Missing reCAPTCHA configuration. Please try again later.",
        type: "error",
      });
      return;
    }

    if (!recaptchaToken) {
      setAlert({
        show: true,
        message:
          language === "vietnamese"
            ? "Vui lòng xác minh reCAPTCHA."
            : language === "french"
            ? "Veuillez compléter la vérification reCAPTCHA."
            : language === "korean"
            ? "reCAPTCHA 인증을 완료해주세요."
            : language === "simplified"
            ? "请完成 reCAPTCHA 验证。"
            : language === "traditional"
            ? "請完成 reCAPTCHA 驗證。"
            : "Please complete the reCAPTCHA verification.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = buildConsultationPayload({ formData, preferences, fields, language, recaptchaToken });
      const response = await fetch(`${apiBaseUrl}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      if (!response.ok) throw new Error(`Server responded with ${response.status}`);

      trackAppointmentConversion();

      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setPreferences({ country: '', date: '', method: '', preferredLanguage: '', referral: '' });
      setRecaptchaToken(null);
      setIsSubmitting(false);
      setAlert({
        show: true,
        message:
          language === "vietnamese"
            ? "Gửi thành công! Chúng tôi sẽ liên hệ sớm nhất."
            : language === "french"
            ? "Message envoyé avec succès ! Nous vous contacterons bientôt."
            : language === "korean"
            ? "메시지가 성공적으로 전송되었습니다!"
            : language === "simplified"
            ? "发送成功！我们会尽快联系您。"
            : language === "traditional"
            ? "發送成功！我們會盡快聯絡您。"
            : "Message sent successfully! We'll contact you soon.",
        type: "success",
      });
    } catch {
      setIsSubmitting(false);
      setAlert({
        show: true,
        message: consultationSubmissionErrors[language] || consultationSubmissionErrors.english,
        type: "error",
      });
    }
  };

  const Container = embedded ? 'div' : 'section';

  return (
    <Container className={embedded ? 'w-full' : 'py-16 bg-[#fdfcf8]'}>
      <div className={embedded ? 'w-full rounded-2xl border border-[#e5e8e4] bg-[#fffefa] p-5 shadow-[0_18px_50px_-32px_rgba(16,46,48,0.4)] sm:p-8' : 'max-w-xl mx-auto rounded-2xl border border-[#e5e8e4] bg-[#fffefa] p-5 shadow-lg sm:p-8'}>
        {alert.show && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert({ ...alert, show: false })}
          />
        )}

        {isSubmitting && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/40">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-[#d4af37]" />
          </div>
        )}

        <div className="mb-6 h-1 w-12 rounded-full bg-[#b38a39]" aria-hidden="true" />
        <h3 className="mb-6 text-2xl font-semibold leading-tight tracking-tight text-[#193543] sm:text-[1.7rem]">
          {embedded ? fields.freeTitle : content.bookAppointment}
        </h3>

        <form onSubmit={handleSubmit} className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label htmlFor={`contact-${field}`} className={labelClass}>{content.formLabels[field]}</label>
              <input
                id={`contact-${field}`}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                autoComplete={field === "phone" ? "tel" : field === "email" ? "email" : "name"}
                aria-describedby={field === 'phone' ? 'contact-phone-hint' : undefined}
                maxLength={field === 'phone' ? 20 : undefined}
                placeholder={field === "phone" ? "+84 912 345 678" : undefined}
                required
                className={controlClass}
              />
              {field === 'phone' && <p id="contact-phone-hint" className="mt-1 text-xs leading-5 text-[#53616a]">{phoneCountryCodeHints[language] || phoneCountryCodeHints.english}</p>}
            </div>
          ))}

          <div>
            <label htmlFor="contact-service" className={labelClass}>{content.formLabels.service}</label>
            <select id="contact-service" name="service" value={formData.service} onChange={handleChange} required className={controlClass}>
              <option value="">{content.formLabels.service}</option>
              {content.services.map((service) => <option key={service} value={service}>{service}</option>)}
              <option value="Other treatment or not sure">{otherServiceLabels[language] || otherServiceLabels.english}</option>
            </select>
          </div>

          <div>
            <label htmlFor="consultation-date" className={labelClass}>{preferredDateLabels[language] || preferredDateLabels.english}</label>
            <input id="consultation-date" name="date" type="date" min={earliestDate} value={preferences.date} onChange={handlePreference} required className={controlClass} />
            <p className="mt-1 text-xs leading-5 text-[#53616a]">{consultationDateHints[language] || consultationDateHints.english}</p>
          </div>

          <details className="group min-w-0 border-t border-[#e1e5df] pt-4 sm:col-span-2">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-sm font-semibold text-[#193543] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#193543] [&::-webkit-details-marker]:hidden">
              <span>{fields.heading} <span className="font-normal text-[#53616a]">({fields.optional})</span></span>
              <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-[#8f6b27] transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="none"><path d="m4 7 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </summary>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className={labelClass}>{content.formLabels.message}</label>
                <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} maxLength={CONSULTATION_MESSAGE_LIMIT} rows="3" className={controlClass} />
              </div>
              <div>
                <label htmlFor="consultation-country" className={labelClass}>{fields.country}</label>
                <input id="consultation-country" name="country" type="text" autoComplete="country-name" maxLength={CONSULTATION_COUNTRY_LIMIT} value={preferences.country} onChange={handlePreference} className={controlClass} />
              </div>
              <div>
                <label htmlFor="consultation-method" className={labelClass}>{fields.method}</label>
                <select id="consultation-method" name="method" value={preferences.method} onChange={handlePreference} className={controlClass}>
                  <option value="">{fields.choose}</option>
                  {['Email', 'WhatsApp', 'Messenger', 'Phone', 'Zalo'].map((method) => <option key={method} value={method}>{method}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="consultation-language" className={labelClass}>{fields.language}</label>
                <select id="consultation-language" name="preferredLanguage" value={preferences.preferredLanguage} onChange={handlePreference} className={controlClass}>
                  <option value="">{fields.choose}</option>
                  {languageOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="consultation-referral" className={labelClass}>{fields.referral}</label>
                <select id="consultation-referral" name="referral" value={preferences.referral} onChange={handlePreference} className={controlClass}>
                  <option value="">{fields.choose}</option>
                  {fields.sources.map((source) => <option key={source} value={source}>{source}</option>)}
                </select>
              </div>
            </div>
            {preferences.method && <p className="mt-3 text-xs leading-5 text-[#53616a]">{fields.contactHint} {['WhatsApp', 'Messenger', 'Zalo'].includes(preferences.method) && <a href={preferences.method === 'Messenger' ? socialProfiles.facebook : contactItems.find((item) => item.label === preferences.method)?.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#765a1e] underline">{preferences.method}</a>}</p>}
          </details>

          <div className="flex min-w-0 justify-center overflow-x-auto py-2 sm:col-span-2">
            {recaptchaSiteKey ? (
              <ClientRecaptcha
                sitekey={recaptchaSiteKey}
                onChange={handleRecaptchaChange}
              />
            ) : (
              <p className="text-sm text-red-600">
                reCAPTCHA is not configured.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !apiBaseUrl || !recaptchaSiteKey}
            className="min-h-12 w-full rounded-lg bg-[#193543] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#284f5e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#193543] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
          >
            {isSubmitting ? content.formLabels.submit + "..." : content.formLabels.submit}
          </button>
        </form>
      </div>
    </Container>
  );
}
