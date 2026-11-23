import { useEffect, useState } from "react";
import ClientRecaptcha from './ClientRecaptcha';
import Alert from "./alert";
import contactContent from "../Translations/contactContent";
import { consultationDateHints, consultationFields, countryNames, languageOptions } from '../data/consultationFields';
import { contactItems, socialProfiles } from '../data/contactChannels';
import { localDateInputMin } from '../data/appointmentDate';
import { useSelector } from 'react-redux';
export default function ContactForm({ embedded = false }) {
  const language = useSelector((state) => state.language.language);
  const content = contactContent[language] || contactContent.english;
  const fields = consultationFields[language] || consultationFields.english;
  const countryLocale = { english: 'en', vietnamese: 'vi', simplified: 'zh-Hans', traditional: 'zh-Hant', french: 'fr', korean: 'ko' }[language] || 'en';
  const apiBaseUrl = import.meta.env.VITE_API_URL;
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [earliestDate, setEarliestDate] = useState('');
  useEffect(() => { setEarliestDate(localDateInputMin()); }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [preferences, setPreferences] = useState({ country: '', date: '', method: '', preferredLanguage: '', referral: '' });
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      // The appointment API currently accepts a message, not separate preference fields.
      // Keep the optional details in that supported field so the clinic receives them.
      const details = [
        [fields.country, preferences.country], [fields.date, preferences.date],
        [fields.method, preferences.method], [fields.language, preferences.preferredLanguage],
        [fields.referral, preferences.referral],
      ].filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`);
      const payload = { ...formData, message: [formData.message.trim(), ...details].filter(Boolean).join('\n\n'), language, recaptchaToken };
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

      setFormData({ name: "", email: "", phone: "", message: "" });
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
        message:
          language === "vietnamese"
            ? "Gửi thất bại. Vui lòng thử lại."
            : language === "french"
            ? "Échec de l'envoi. Veuillez réessayer."
            : language === "korean"
            ? "전송 실패. 다시 시도해주세요."
            : language === "simplified"
            ? "发送失败，请重试。"
            : language === "traditional"
            ? "發送失敗，請重試。"
            : "Failed to send message. Please try again.",
        type: "error",
      });
    }
  };

  const Container = embedded ? 'div' : 'section';

  return (
    <Container className={embedded ? 'w-full' : 'py-16 bg-[#fdfcf8]'}>
      <div className={embedded ? 'w-full rounded-[1.75rem] bg-white p-6 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.5)] sm:p-8' : 'max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border border-[#eee]'}>
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

        <h3
          className={embedded ? 'mb-5 rounded-2xl border border-[#d7bc7b] bg-[#fff8e6] px-5 py-4 text-xl font-semibold text-[#193543] sm:text-2xl' : 'mb-5 text-xl font-semibold text-[#193543] sm:text-2xl'}
        >
          {embedded ? fields.freeTitle : content.bookAppointment}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label htmlFor={`contact-${field}`} className="sr-only">{content.formLabels[field]}</label>
              <input
                id={`contact-${field}`}
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                autoComplete={field === "phone" ? "tel" : field === "email" ? "email" : "name"}
                placeholder={field === "phone" ? `${content.formLabels.phone} (+84 9xx xxx xxx)` : content.formLabels[field]}
                required
                className="w-full rounded-xl border border-[#d4dfe2] px-4 py-3 text-sm text-[#193543] focus:border-[#a98639] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30"
              />
            </div>
          ))}

          <label htmlFor="contact-message" className="sr-only">{content.formLabels.message}</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder={content.formLabels.message}
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full rounded-xl border border-[#d4dfe2] px-4 py-3 text-sm text-[#193543] focus:border-[#a98639] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30"
          />

          <fieldset className="rounded-2xl border border-[#e5d8b8] bg-[#faf9f6] p-4 sm:p-5">
            <legend className="px-1 text-sm font-semibold text-[#193543]">{fields.heading} <span className="font-normal text-[#53616a]">({fields.optional})</span></legend>
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="consultation-country" className="mb-1 block text-xs font-semibold text-[#344b54]">{fields.country}</label>
                <input id="consultation-country" name="country" list="consultation-countries" autoComplete="country-name" value={preferences.country} onChange={handlePreference} className="w-full rounded-lg border border-[#d4dfe2] bg-white px-3 py-2.5 text-sm text-[#193543] focus:border-[#a98639] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30" />
                <datalist id="consultation-countries">{countryNames(countryLocale).map((country) => <option key={country} value={country} />)}</datalist>
              </div>
              <div>
                <label htmlFor="consultation-date" className="mb-1 block text-xs font-semibold text-[#344b54]">{fields.date}</label>
                <input id="consultation-date" name="date" type="date" min={earliestDate} value={preferences.date} onChange={handlePreference} className="w-full rounded-lg border border-[#d4dfe2] bg-white px-3 py-2.5 text-sm text-[#193543] focus:border-[#a98639] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30" />
                <p className="mt-1 text-xs leading-5 text-[#53616a]">{consultationDateHints[language] || consultationDateHints.english}</p>
              </div>
              <div>
                <label htmlFor="consultation-method" className="mb-1 block text-xs font-semibold text-[#344b54]">{fields.method}</label>
                <select id="consultation-method" name="method" value={preferences.method} onChange={handlePreference} className="w-full rounded-lg border border-[#d4dfe2] bg-white px-3 py-2.5 text-sm text-[#193543] focus:border-[#a98639] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30">
                  <option value="">{fields.choose}</option>
                  {['Email', 'WhatsApp', 'Messenger', 'Phone', 'Zalo'].map((method) => <option key={method} value={method}>{method}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="consultation-language" className="mb-1 block text-xs font-semibold text-[#344b54]">{fields.language}</label>
                <select id="consultation-language" name="preferredLanguage" value={preferences.preferredLanguage} onChange={handlePreference} className="w-full rounded-lg border border-[#d4dfe2] bg-white px-3 py-2.5 text-sm text-[#193543] focus:border-[#a98639] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30">
                  <option value="">{fields.choose}</option>
                  {languageOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="consultation-referral" className="mb-1 block text-xs font-semibold text-[#344b54]">{fields.referral}</label>
                <select id="consultation-referral" name="referral" value={preferences.referral} onChange={handlePreference} className="w-full rounded-lg border border-[#d4dfe2] bg-white px-3 py-2.5 text-sm text-[#193543] focus:border-[#a98639] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/30">
                  <option value="">{fields.choose}</option>
                  {fields.sources.map((source) => <option key={source} value={source}>{source}</option>)}
                </select>
              </div>
            </div>
            {preferences.method && <p className="mt-3 text-xs leading-5 text-[#53616a]">{fields.contactHint} {['WhatsApp', 'Messenger', 'Zalo'].includes(preferences.method) && <a href={preferences.method === 'Messenger' ? socialProfiles.facebook : contactItems.find((item) => item.label === preferences.method)?.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#765a1e] underline">{preferences.method}</a>}</p>}
          </fieldset>

          <div className="flex justify-center my-2">
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
            className="min-h-11 w-full rounded-full bg-[#d4af37] py-2 text-sm font-semibold text-[#193543] shadow-sm transition-colors hover:bg-[#e5c456] focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? content.formLabels.submit + "..." : content.formLabels.submit}
          </button>
        </form>
      </div>
    </Container>
  );
}
