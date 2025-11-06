import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import zaloIcon from "../pics/zalo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#f7f2e7] border-t border-[#e0d8c3] text-[#1f2937]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Column 1: Clinic Info */}
        <div>
          <h3
            className="text-2xl font-bold text-[#d4af37] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Emis Dental Clinic
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Providing professional and gentle dental care with modern equipment
            and experienced specialists. Your smile, our passion.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3
            className="text-2xl font-bold text-[#d4af37] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm" style={{ fontFamily: "'Cormorant', serif" }}>
            <li className="flex items-center gap-3">
              <Phone className="text-[#d4af37]" size={18} />
              <a href="tel:0919100021" className="hover:text-[#c19d30] transition">
                091 910 0021
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[#d4af37]" size={18} />
              <a
                href="mailto:Emisdentalclinic@gmail.com"
                className="hover:text-[#c19d30] transition break-all"
              >
                Emisdentalclinic@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-[#d4af37]" size={18} />
              <span>62B Phạm Ngọc Thạch, Vo Thi Sau Ward, District 3, Ho Chi Minh City, 700000</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Social & Hours */}
        <div>
          <h3
            className="text-2xl font-bold text-[#d4af37] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Connect with Us
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
              <img
                src={zaloIcon}
                alt="Zalo"
                className="h-5 w-5 object-contain"
              />
            </a>
          </div>

          <div>
            <h4
              className="font-semibold text-[#d4af37] mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Working Hours
            </h4>
            <p className="text-sm" style={{ fontFamily: "'Cormorant', serif" }}>
              Mon – Sat: 8:00 AM – 7:00 PM <br />
              Sun: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#fffaf0] border-t border-[#e0d8c3] text-center py-4 text-sm text-[#6b7280]" style={{ fontFamily: "'Cormorant', serif" }}>
        © {new Date().getFullYear()} Emis Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
}
