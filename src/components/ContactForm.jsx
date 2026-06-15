import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Alert from "./alert";
import contactContent from "../Translations/contactContent";
import { useSelector } from 'react-redux';
export default function ContactForm({ embedded = false }) {
  const language = useSelector((state) => state.language.language);
  const content = contactContent[language] || contactContent.english;
  const apiBaseUrl = import.meta.env.VITE_API_URL;
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecaptchaChange = (token) => setRecaptchaToken(token);

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
      const payload = { ...formData, language, recaptchaToken };
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
      <div className={embedded ? 'w-full bg-white rounded-2xl shadow-lg p-5 sm:p-6 border border-[#eee]' : 'max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 border border-[#eee]'}>
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
          className="text-2xl font-bold text-[#4b4b8f] mb-4 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {content.bookAppointment}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          {["name", "email", "phone"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={content.formLabels[field]}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
              style={{ fontFamily: "'Cormorant', serif" }}
            />
          ))}

          <textarea
            name="message"
            placeholder={content.formLabels.message}
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
            style={{ fontFamily: "'Cormorant', serif" }}
          />

          <div className="flex justify-center my-2">
            {recaptchaSiteKey ? (
              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                onChange={handleRecaptchaChange}
              />
            ) : (
              <p className="text-sm text-red-600" style={{ fontFamily: "'Cormorant', serif" }}>
                reCAPTCHA is not configured.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !apiBaseUrl || !recaptchaSiteKey}
            className="w-full bg-[#d4af37] hover:bg-[#c19d30] text-white font-medium py-2 rounded-full transition-all shadow-sm hover:shadow-md text-sm"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isSubmitting ? content.formLabels.submit + "..." : content.formLabels.submit}
          </button>
        </form>
      </div>
    </Container>
  );
}
