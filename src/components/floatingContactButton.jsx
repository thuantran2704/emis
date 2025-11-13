import { useState } from "react";
import { Phone, Mail, MessageSquare, Facebook } from "lucide-react";

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
      {/* Sliding menu */}
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

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-12 w-12 rounded-full bg-[#d4af37] text-white shadow-lg flex items-center justify-center text-xl font-bold cursor-pointer animate-shake hover:bg-[#c19d30] transition-all`}
      >
        💬
      </button>

      {/* Animations */}
      <style>{`
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

        .animate-shake {
          animation: shake 1.8s infinite;
        }

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
