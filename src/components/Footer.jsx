import { FacebookIcon, Phone, Mail, MapPin, Clock3, ExternalLink } from "lucide-react";
import zaloIcon from "../pics/zalo.jpg";
import youtubeLogo from "../pics/youtube-logo.png";
import footerContent from "../Translations/footerContent";
import { useSelector } from 'react-redux';

export default function Footer() {
  const language = useSelector((state) => state.language.language);
  const content = footerContent[language] || footerContent.english;
  const socialHeading = content.socialTitle || content.connectTitle;
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.327228104639!2d106.6896131335823!3d10.786230289363182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa7462efccb%3A0xb79ba7e69cbb02b3!2sEmis%20Dental!5e0!3m2!1svi!2sus!4v1752074692262!5m2!1svi!2sus";
  const mapOpenUrl = "https://maps.app.goo.gl/8T1cPtEKUBe6wLFz9";

  return (
    <footer className="bg-[#f7f2e7] border-t border-[#e0d8c3] text-[#1f2937]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-[1fr,1.2fr] gap-10">
        <div>
          <h3
            className="text-2xl font-bold text-[#d4af37] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.clinicName}
          </h3>
          <p
            className="text-sm leading-relaxed mb-5"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {content.description}
          </p>

          <h4
            className="text-xl font-semibold text-[#d4af37] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {content.contactTitle}
          </h4>

          <ul className="space-y-4 text-sm" style={{ fontFamily: "'Cormorant', serif" }}>
            <li className="flex items-start gap-4">
              <MapPin className="text-[#d4af37] mt-1" size={20} />
              <span>{content.address}</span>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="text-[#d4af37] mt-1" size={20} />
              <a href={`tel:${content.phone.replace(/\s/g, "")}`} className="hover:text-[#c19d30] transition-colors">
                {content.phone}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="text-[#d4af37] mt-1" size={20} />
              <a href={`mailto:${content.email}`} className="hover:text-[#c19d30] transition-colors break-all">
                {content.email}
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Clock3 className="text-[#d4af37] mt-1" size={20} />
              <span>
                {content.workingHours.split("\n").map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <div className="relative overflow-hidden rounded-2xl border border-[#e0d8c3] shadow-md bg-white">
            <a
              href={mapOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-md bg-white px-3 py-1 text-sm font-semibold text-[#1f2937] shadow"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Open in Maps <ExternalLink size={14} />
            </a>

            <div className="relative h-0 pb-[60%]">
              <iframe
                src={mapEmbedUrl}
                className="absolute left-0 top-0 h-full w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Emis Dental map"
              ></iframe>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h4
              className="text-2xl font-bold text-[#d4af37]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {socialHeading}
            </h4>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/84909967649"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-11 w-11 rounded-full bg-white text-[#1f2937] flex items-center justify-center shadow hover:shadow-md transition"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-600">
                  <path d="M12.04 2A10 10 0 0 0 2.02 12c0 1.76.46 3.45 1.33 4.94L2 22l5.2-1.36A10 10 0 1 0 12.04 2Zm5.11 14.25c-.22.63-1.27 1.16-1.93 1.31-.52.09-1.18.16-3.41-.73-2.88-1.16-4.73-4.03-4.87-4.21-.14-.18-1.16-1.55-1.16-2.95 0-1.4.73-2.08.99-2.36.26-.28.56-.35.74-.35h.54c.17 0 .4.01.61.47.22.47.75 1.63.82 1.75.07.12.12.26.02.42-.1.16-.15.26-.31.4-.16.14-.33.32-.47.54-.16.21-.33.44-.14.87.19.43.84 1.39 1.81 2.25 1.24 1.11 2.29 1.46 2.72 1.62.43.16.69.14.94-.08.25-.22.99-.91 1.26-1.22.27-.31.54-.26.91-.16.37.11 2.35 1.11 2.75 1.31.4.2.66.29.76.45.1.16.1.91-.12 1.54Z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/emisinternationaldental/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-11 w-11 rounded-full bg-white text-[#1f2937] flex items-center justify-center shadow hover:shadow-md transition"
              >
                <FacebookIcon size={22} />
              </a>
              <a
                href="https://www.youtube.com/@NhaKhoaEmis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-11 w-11 rounded-full bg-white text-[#1f2937] flex items-center justify-center shadow hover:shadow-md transition"
              >
                <img src={youtubeLogo} alt="YouTube" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="https://zalo.me/2143697215679541994"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
                className="h-11 w-11 rounded-full bg-white text-[#1f2937] flex items-center justify-center shadow hover:shadow-md transition"
              >
                <img src={zaloIcon} alt="Zalo" className="h-5 w-5 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#fffaf0] border-t border-[#e0d8c3] text-center py-4 text-sm text-[#6b7280]"
        style={{ fontFamily: "'Cormorant', serif" }}
      >
        <p>Copyright © EMIS Dental</p>
        <p>All Rights Reserved</p>
        <p className="mt-1">© {new Date().getFullYear()} {content.clinicName}. {content.rights}</p>
      </div>
    </footer>
  );
}
