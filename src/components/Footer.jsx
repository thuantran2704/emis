import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../pics/logo.jpg';
import footerContent from '../Translations/footerContent';

// NOTE: The following footer links have no dedicated route yet and are mapped
// to the closest existing page (update once real pages/routes exist):
//   - "Patient Cases" / "Ca Điều Trị Thực Tế"  -> /solutions
//   - "Dental Resources" / "Kiến Thức Nha Khoa" -> /equipment
//   - "Send Your X-ray" / "Gửi Phim X-quang"    -> /contact
//   - "Restorative Dentistry" / "Điều Trị & Giữ Răng Thật" -> /services
// Also intentionally omitted (no URL/route available): Instagram, LinkedIn,
// and "Terms of Use".

const mapOpenUrl = 'https://maps.app.goo.gl/8T1cPtEKUBe6wLFz9';
const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.327228104639!2d106.6896131335823!3d10.786230289363182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa7462efccb%3A0xb79ba7e69cbb02b3!2sEmis%20Dental!5e0!3m2!1svi!2sus!4v1752074692262!5m2!1svi!2sus';
const whatsappUrl = 'https://wa.me/84909967649';
const facebookUrl = 'https://www.facebook.com/emisinternationaldental/';
const youtubeUrl = 'https://www.youtube.com/@NhaKhoaEmis';
const zaloUrl = 'https://zalo.me/2143697215679541994';

const footerNav = {
  english: {
    brandStatement: 'Confidence starts with trust.',
    columns: [
      {
        heading: 'About',
        links: [
          { label: 'About EMIS', to: '/about' },
          { label: 'Meet Our Doctors', to: '/doctors' },
          { label: 'International Patients', to: '/international-patients' },
          { label: 'Contact Us', to: '/contact' },
        ],
      },
      {
        heading: 'Treatments',
        links: [
          { label: 'Implant Solutions', to: '/implant' },
          { label: 'Fixed Teeth Solutions', to: '/fixed-teeth' },
          { label: 'Full-Mouth Rehabilitation', to: '/full-mouth' },
          { label: 'Oral Surgery', to: '/oral-surgery' },
          { label: 'Restorative Dentistry', to: '/services' },
          { label: 'Smile Aesthetics', to: '/smile-aesthetics' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { label: 'Patient Cases', to: '/solutions' },
          { label: 'Dental Resources', to: '/equipment' },
          { label: 'FAQs', to: '/faq' },
          { label: 'Send Your X-ray', to: '/contact' },
        ],
      },
      {
        heading: 'Patient Information',
        links: [
          { label: 'Privacy Policy', to: '/privacy' },
          { label: 'Medical Disclaimer', to: '/medical-disclaimer' },
          { label: 'Warranty & Support', to: '/warranty' },
          { label: 'Media Consent', to: '/media-consent' },
        ],
      },
      {
        heading: 'Contact',
        links: [
          { label: 'Phone', href: 'tel:+84919100021' },
          { label: 'WhatsApp', href: whatsappUrl },
          { label: 'Email', href: 'mailto:Emisdentalclinic@gmail.com' },
          { label: 'Google Maps', href: mapOpenUrl },
        ],
      },
      {
        heading: 'Follow Us',
        links: [
          { label: 'Google Reviews', href: mapOpenUrl },
          { label: 'Facebook', href: facebookUrl },
          { label: 'YouTube', href: youtubeUrl },
          { label: 'Zalo', href: zaloUrl },
        ],
      },
    ],
  },
  vietnamese: {
    brandStatement: 'An tâm bắt đầu từ niềm tin.',
    columns: [
      {
        heading: 'Về EMIS',
        links: [
          { label: 'Về EMIS', to: '/about' },
          { label: 'Đội Ngũ Bác Sĩ', to: '/doctors' },
          { label: 'Bệnh Nhân Quốc Tế', to: '/international-patients' },
          { label: 'Liên Hệ', to: '/contact' },
        ],
      },
      {
        heading: 'Giải Pháp Điều Trị',
        links: [
          { label: 'Trồng Răng Implant', to: '/implant' },
          { label: 'Răng Cố Định Trên Implant', to: '/fixed-teeth' },
          { label: 'Phục Hồi Toàn Hàm', to: '/full-mouth' },
          { label: 'Tiểu Phẫu Răng Hàm Mặt', to: '/oral-surgery' },
          { label: 'Điều Trị & Giữ Răng Thật', to: '/services' },
          { label: 'Thẩm Mỹ Nụ Cười', to: '/smile-aesthetics' },
        ],
      },
      {
        heading: 'Kiến Thức',
        links: [
          { label: 'Ca Điều Trị Thực Tế', to: '/solutions' },
          { label: 'Kiến Thức Nha Khoa', to: '/equipment' },
          { label: 'Câu Hỏi Thường Gặp', to: '/faq' },
          { label: 'Gửi Phim X-quang', to: '/contact' },
        ],
      },
      {
        heading: 'Thông Tin Bệnh Nhân',
        links: [
          { label: 'Chính Sách Bảo Mật', to: '/privacy' },
          { label: 'Miễn Trừ Trách Nhiệm', to: '/medical-disclaimer' },
          { label: 'Bảo Hành & Hỗ Trợ', to: '/warranty' },
          { label: 'Đồng Ý Hình Ảnh', to: '/media-consent' },
        ],
      },
      {
        heading: 'Liên Hệ',
        links: [
          { label: 'Điện Thoại', href: 'tel:+84919100021' },
          { label: 'WhatsApp', href: whatsappUrl },
          { label: 'Email', href: 'mailto:Emisdentalclinic@gmail.com' },
          { label: 'Google Maps', href: mapOpenUrl },
        ],
      },
      {
        heading: 'Theo Dõi',
        links: [
          { label: 'Google Reviews', href: mapOpenUrl },
          { label: 'Facebook', href: facebookUrl },
          { label: 'YouTube', href: youtubeUrl },
          { label: 'Zalo', href: zaloUrl },
        ],
      },
    ],
  },
};

const linkClass =
  'text-sm text-gray-400 hover:text-[#d4af37] transition-colors duration-200';

function FooterLink({ link }) {
  if (link.to) {
    return (
      <Link to={link.to} className={linkClass}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {link.label}
    </a>
  );
}

export default function Footer() {
  const language = useSelector((state) => state.language.language);
  const content = footerContent[language] || footerContent.english;
  const nav = footerNav[language] || footerNav.english;

  return (
    <footer className="bg-[#111317] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Logo */}
        <div className="mb-10">
          <img
            src={logo}
            alt={content.clinicName}
            className="h-14 w-14 rounded-full object-cover"
          />
        </div>

        {/* Navigation: 6 columns */}
        <nav
          className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
          aria-label="Footer"
        >
          {nav.columns.map((column) => (
            <div key={column.heading} className="flex flex-col">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                {column.heading}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src={mapEmbedUrl}
            className="h-64 w-full grayscale-[0.2]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={content.clinicName}
          ></iframe>
        </div>

        {/* Brand statement */}
        <p
          className="mt-12 text-xl font-medium text-[#d4af37]"
        >
          {nav.brandStatement}
        </p>

        {/* Divider 2: separates brand statement from copyright */}
        <hr className="my-8 border-white/10" />

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {content.clinicName}. {content.rights}
        </p>
      </div>
    </footer>
  );
}
