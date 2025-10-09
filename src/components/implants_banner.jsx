import { CheckCircle } from "lucide-react";
import allon4 from "../pics/allon4.png";
import veneer from "../pics/veneer.png";
import bridge from "../pics/bridge.png";
import implant from "../pics/implant.png";

export default function ImplantCards() {
  // Filtered implant-related items from your CSV (manually curated)
  const implants = [
    {
      icon: implant,
      name: "Implant Bloten (Korea)",
      producer: "Implant Bloten – Korean technology",
      price: "15,000,000 VND",
      points: [
        "Reliable and affordable Korean implant system",
        "10-year warranty on structure",
        "Biocompatible titanium grade 4 material",
        "Ideal for single-tooth replacements",
      ],
    },
    {
      icon: implant,
      name: "Implant Straumann (Switzerland)",
      producer: "Straumann Premium Swiss Implants",
      price: "45,000,000 VND",
      points: [
        "Swiss-engineered precision implant system",
        "Lifetime warranty on implant structure",
        "Accelerated osseointegration surface design",
        "Preferred choice for aesthetic zones",
      ],
    },
    {
      icon: allon4,
      name: "All-on-4 / All-on-6 Implants (Korea)",
      producer: "Full-arch fixed solution",
      price: "120,000,000 – 170,000,000 VND",
      points: [
        "Full-mouth reconstruction using 4–6 implants",
        "Restores entire arch function and aesthetics",
        "Short treatment time with strong stability",
        "Ideal for patients with missing full arch",
      ],
    },
    {
      icon: bridge,
      name: "Titanium Frame Prosthesis (CAD/CAM)",
      producer: "Titanium frame + porcelain crowns",
      price: "50,000,000 – 80,000,000 VND",
      points: [
        "Precision-milled Titanium frame for full arch",
        "High strength and long-term durability",
        "Beautiful natural porcelain crown finish",
        "Custom CAD/CAM design for perfect fit",
      ],
    },
    {
      icon: veneer,
      name: "Bone Graft & Sinus Lift Procedures",
      producer: "Supporting surgical treatments",
      price: "3,000,000 – 10,000,000 VND",
      points: [
        "Artificial bone grafting for better implant support",
        "Membrane placement for guided tissue regeneration",
        "Closed and open sinus lift options",
        "Performed under sterile surgical conditions",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#fdfcf8]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-12 border-b-2 border-[#d4af37] inline-block pb-2">
          Implant & Full-Arch Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

              {/* Producer */}
              <p className="text-sm text-[#6b7280] italic mb-3">
                {implant.producer}
              </p>

              {/* Price */}
              <p className="text-2xl font-bold text-[#4b4b8f] mb-4">
                {implant.price}
              </p>

              {/* Features */}
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
