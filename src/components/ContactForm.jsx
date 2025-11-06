import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Alert from "./alert";
import contactContent from "../Translations/contactContent";

export default function ContactForm({ language }) {
  const content = contactContent[language] || contactContent.english;
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setAlert({
        show: true,
        message:
          language === "vietnamese"
            ? "Vui lòng xác minh reCAPTCHA"
            : "Please complete the reCAPTCHA verification",
        type: "error",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = { ...formData, language, recaptchaToken };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      setFormData({ name: "", email: "", phone: "", message: "" });
      setRecaptchaToken(null);
      setIsSubmitting(false);
      setAlert({
        show: true,
        message:
          language === "vietnamese"
            ? "Gửi thành công! Chúng tôi sẽ liên hệ sớm nhất."
            : "Message sent successfully! We'll contact you soon.",
        type: "success",
      });
    } catch (error) {
      setIsSubmitting(false);
      setAlert({
        show: true,
        message:
          language === "vietnamese"
            ? "Gửi thất bại. Vui lòng thử lại."
            : "Failed to send message. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto border border-[#eee]">
      {alert.show && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, show: false })}
        />
      )}

      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#d4af37]" />
        </div>
      )}

      <h3
        className="text-2xl font-bold text-[#4b4b8f] mb-4 text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {language === "vietnamese" ? "Đặt lịch hẹn nhanh" : "Quick Appointment"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        {["name", "email", "phone"].map((field) => (
          <div key={field}>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={content.formLabels[field]}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
              style={{ fontFamily: "'Cormorant', serif" }}
            />
          </div>
        ))}

        <textarea
          name="message"
          placeholder={content.formLabels.message}
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:outline-none"
          style={{ fontFamily: "'Cormorant', serif" }}
        />

        <div className="flex justify-center my-3">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={handleRecaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#d4af37] hover:bg-[#c19d30] text-white font-semibold py-3 rounded-full transition-all shadow-md hover:shadow-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {isSubmitting
            ? language === "vietnamese"
              ? "Đang gửi..."
              : "Sending..."
            : language === "vietnamese"
            ? "Gửi ngay"
            : "Send Now"}
        </button>
      </form>
    </div>
  );
}
