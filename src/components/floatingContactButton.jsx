import { useState } from "react";
import { Phone, Mail, MessageSquare, Facebook, MessageCircle } from "lucide-react";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      label: "Phone",
      href: "tel:0919100021",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      label: "Email",
      href: "mailto:Emisdentalclinic@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
    {
      label: "Zalo",
      href: "https://zalo.me/2143697215679541994",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/nhakhoaquocteemis",
      icon: <Facebook className="h-5 w-5" />,
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      {/* Panel */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-3 w-52 bg-white rounded-xl shadow-xl border border-[#d4af37] overflow-hidden animate-fade-in">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 border-b border-[#d4af37] hover:bg-[#fff6da] transition-colors last:border-b-0"
            >
              <div className="text-[#d4af37]">{item.icon}</div>
              <span className="text-[#1f2937] font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full bg-[#d4af37] text-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#c19d30] transition-all"
      >
        {/* ICON ONLY SHAKES */}
        <MessageCircle className="h-7 w-7 animate-vibrate" strokeWidth={2} />
      </button>

      {/* Animations */}
      <style>{`
        /* PHONE CALL STYLE VIBRATION */
        @keyframes vibrate {
          0%   { transform: rotate(0deg); }
          15%  { transform: rotate(-15deg); }
          30%  { transform: rotate(15deg); }
          45%  { transform: rotate(-10deg); }
          60%  { transform: rotate(10deg); }
          75%  { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-vibrate {
          animation: vibrate 1s ease-in-out infinite;
          transform-origin: center;
        }

        /* Menu fade in */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}
