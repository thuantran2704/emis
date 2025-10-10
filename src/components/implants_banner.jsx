import { CheckCircle } from "lucide-react";
import allon4 from "../pics/allon4.png";
import implant from "../pics/implant.png";
import bridge from "../pics/bridge.png";
import veneer from "../pics/veneer.png";
import ImplantQuote from "./implantQuote";
export default function ImplantCards() {
  const implants = [
    {
      icon: implant,
      name: "Single Dental Implant",
      producer: "For single missing teeth",
      price: "From 15,000,000 VND",
      points: [
        "High-quality Korean, French, and Swiss systems available",
        "Long-lasting and natural-looking restoration",
        "Made from 100% biocompatible titanium",
      ],
    },
    {
      icon: bridge,
      name: "Implant Bridge",
      producer: "Replace multiple missing teeth",
      price: "From 50,000,000 VND",
      points: [
        "Strong titanium base with porcelain crowns",
        "Custom-designed with CAD/CAM precision",
        "Durable and natural aesthetics",
      ],
    },
    {
      icon: allon4,
      name: "All-on-4 / All-on-6",
      producer: "Full-arch restoration solution",
      price: "From 120,000,000 VND",
      points: [
        "Restore your entire smile with 4–6 implants",
        "Immediate function and fixed full-arch teeth",
        "Ideal for patients with full tooth loss",
      ],
    },
    {
      icon: veneer,
      name: "Bone Graft & Sinus Lift",
      producer: "Supporting procedures for implants",
      price: "From 3,000,000 VND",
      points: [
        "Bone grafting to improve implant stability",
        "Sinus lift to prepare upper jaw for implants",
        "Performed with sterile surgical precision",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#fdfcf8]">
      <div className="max-w-6xl mx-auto px-4">
        <ImplantQuote/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {implants.map((implant, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              {/* Icon */}
              <img
                src={implant.icon}
                alt={implant.name}
                className="w-20 h-20 mb-4 object-contain"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold text-[#4b4b8f] mb-1">
                {implant.name}
              </h3>

              {/* Producer / Subheading */}
              <p className="text-sm text-[#6b7280] italic mb-3">
                {implant.producer}
              </p>

              {/* Price */}
              <p className="text-2xl font-bold text-[#4b4b8f] mb-4">
                {implant.price}
              </p>

              {/* Highlights */}
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
