import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import zaloIcon from "../pics/zalo.jpg";
export default function Footer({ language = "english" }) {
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
            <li className="flex items-center gap-3">
              <Phone className="text-[#d4af37]" size={18} />
              <a
                href={`tel:${content.phone.replace(/\s/g, "")}`}
                className="hover:text-[#c19d30] transition"
              >
                {content.phone}
              </a>
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
              href="https://facebook.com/emisdental"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
            >
              <Facebook className="text-[#1f2937]" size={20} />
            </a>
            <a
              href="https://zalo.me/0919100021"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
            >
              <img src={zaloIcon} alt="Zalo" className="h-5 w-5 object-contain" />
            </a>
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