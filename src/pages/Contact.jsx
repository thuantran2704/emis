import { useState } from 'react';
import mailIcon from '../pics/mail.jpg';
import phoneIcon from '../pics/phone.jpg';
import facebook from '../pics/facebook.jpg';
import instagram from '../pics/instagram.jpg';
import zaloIcon from '../pics/zalo.jpg';
import Alert from '../components/alert';
import contactContent from '../Translations/contactContent';
export default function Contact({ language }) {

  
  const content = contactContent[language] || contactContent.english;

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
    const payload = {
      ...formData,
      language: language // Add current language to payload
    };
    // 2. Make the fetch request with detailed configuration
    const fetchStartTime = performance.now();
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify(payload),
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
      {/* Loading overlay - moved outside the content sections */}
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
          
            <form onSubmit={handleSubmit} className="space-y-4">
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