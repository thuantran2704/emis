import { CheckCircle } from "lucide-react";

export default function ImplantCards() {
  // Dummy data (you’ll replace this later)
  const implants = [
    {
      icon: "🦷",
      name: "Single Dental Implant",
      producer: "German Implants",
      price: "37,000",
      points: [
        "Using OT implants",
        "10-year implant safety warranty",
        "Medical grade 4 pure titanium implants",
        "Helps stimulate collagen proliferation",
      ],
    },
    {
      icon: "🪩",
      name: "Premium Dental Implant",
      producer: "Swiss Implants",
      price: "49,000",
      points: [
        "High precision connection system",
        "Lifetime structural warranty",
        "Enhanced osseointegration surface",
        "Designed for aesthetic zone",
      ],
    },
  ];

  return (
    <section className="py-16 bg-[#fdfcf8]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-12 border-b-2 border-[#d4af37] inline-block pb-2">
          Our Implant Options
        </h2>

        {/* Responsive grid: 1/2/4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {implants.map((implant, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{implant.icon}</div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-[#4b4b8f] mb-1">
                {implant.name}
              </h3>

              {/* Producer */}
              <p className="text-sm text-[#6b7280] italic mb-3">
                {implant.producer}
              </p>

              {/* Price */}
              <p className="text-3xl font-bold text-[#4b4b8f] mb-4">
                {implant.price}
              </p>

              {/* Bullet points */}
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
