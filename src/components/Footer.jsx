import { FacebookIcon, Phone, Mail, MapPin } from "lucide-react";
import zaloIcon from "../pics/zalo.jpg";
import youtubeLogo from "../pics/youtube-logo.png";
import linkedinLogo from "../pics/linkedin-logo.png";
import tiktokLogo from "../pics/tiktok-logo.png";
import footerContent from "../Translations/footerContent";
import { useSelector } from 'react-redux';
export default function Footer() {
  const language = useSelector((state) => state.language.language);
  const content = footerContent[language];

  return (
    <footer className="bg-[#f7f2e7] border-t border-[#e0d8c3] text-[#1f2937]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Column 1: Clinic Info */}
        <div>
          <h3
            className="text-2xl font-bold text-[#d4af37] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.clinicName}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {content.description}
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3
            className="text-2xl font-bold text-[#d4af37] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.contactTitle}
          </h3>
          <ul
            className="space-y-3 text-sm"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            <li className="flex items-start gap-3">
              <Phone className="text-[#d4af37]" size={18} />
              <div className="flex flex-col gap-1">
                <a
                  href={`tel:${content.phone.replace(/\s/g, "")}`}
                  className="hover:text-[#c19d30] transition"
                >
                  {content.phone}
                </a>
                <a
                  href={`tel:${content.phone2.replace(/\s/g, "")}`}
                  className="hover:text-[#c19d30] transition"
                >
                  {content.phone2}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[#d4af37]" size={18} />
              <a
                href={`mailto:${content.email}`}
                className="hover:text-[#c19d30] transition break-all"
              >
                {content.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-[#d4af37]" size={18} />
              <span>{content.address}</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Social & Hours */}
        <div>
          <h3
            className="text-2xl font-bold text-[#d4af37] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.socialTitle}
          </h3>
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://www.facebook.com/nhakhoaquocteemis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
            >
              <FacebookIcon className="text-[#1f2937]" size={20} />
            </a>
            <a
              href="https://zalo.me/2143697215679541994"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
            >
              <img
                src={zaloIcon}
                alt="Zalo"
                className="h-5 w-5 object-contain"
              />
            </a>
            <a
              href="https://www.youtube.com/@NhaKhoaEmis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
            >
              <img
                src={youtubeLogo}
                alt="YouTube"
                className="h-5 w-5 object-contain"
              />
            </a>
            <a
              href="http://linkedin.com/company/emis-dental/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="h-5 w-5 object-contain"
              />
            </a>
            <a
              href="https://www.tiktok.com/@emisdentalclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
            >
              <img
                src={tiktokLogo}
                alt="TikTok"
                className="h-5 w-5 object-contain"
              />
            </a>
            {/* WhatsApp link placeholder — uncomment when ready
            <a
              href="https://wa.me/84909967649"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-600">
                <path d="M12.04 2A10 10 0 0 0 2.02 12c0 1.76.46 3.45 1.33 4.94L2 22l5.2-1.36A10 10 0 1 0 12.04 2Zm5.11 14.25c-.22.63-1.27 1.16-1.93 1.31-.52.09-1.18.16-3.41-.73-2.88-1.16-4.73-4.03-4.87-4.21-.14-.18-1.16-1.55-1.16-2.95 0-1.4.73-2.08.99-2.36.26-.28.56-.35.74-.35h.54c.17 0 .4.01.61.47.22.47.75 1.63.82 1.75.07.12.12.26.02.42-.1.16-.15.26-.31.4-.16.14-.33.32-.47.54-.16.21-.33.44-.14.87.19.43.84 1.39 1.81 2.25 1.24 1.11 2.29 1.46 2.72 1.62.43.16.69.14.94-.08.25-.22.99-.91 1.26-1.22.27-.31.54-.26.91-.16.37.11 2.35 1.11 2.75 1.31.4.2.66.29.76.45.1.16.1.91-.12 1.54Z"/>
              </svg>
            </a>
            */}
          </div>

          <div>
            <h4
              className="font-semibold text-[#d4af37] mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content.workingHoursTitle}
            </h4>
            <p className="text-sm" style={{ fontFamily: "'Cormorant', serif" }}>
              {content.workingHours.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="bg-[#fffaf0] border-t border-[#e0d8c3] text-center py-4 text-sm text-[#6b7280]"
        style={{ fontFamily: "'Cormorant', serif" }}
      >
        © {new Date().getFullYear()} {content.clinicName}. {content.bottomText}
      </div>
    </footer>
  );
}
