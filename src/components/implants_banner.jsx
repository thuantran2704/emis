import { CheckCircle } from "lucide-react";
import { implantContent } from "../Translations/implantContent";
import ImplantQuote from "./implantQuote";
export default function ImplantCards({ language = "english" }) {
  const content = implantContent[language];

  return (
    <section className="py-16 bg-[#fdfcf8]">
      <div className="max-w-6xl mx-auto px-4">
        <ImplantQuote language = {language}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.implants.map((implant, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              <img
                src={implant.icon}
                alt={implant.name}
                className="w-20 h-20 mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold text-[#4b4b8f] mb-1">
                {implant.name}
              </h3>
              <p className="text-sm text-[#6b7280] italic mb-3">
                {implant.producer}
              </p>
              <p className="text-2xl font-bold text-[#4b4b8f] mb-4">
                {implant.price}
              </p>
              <ul className="text-left text-[#6b7280] space-y-2">
                {implant.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-[#4b4b8f] mt-1" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
