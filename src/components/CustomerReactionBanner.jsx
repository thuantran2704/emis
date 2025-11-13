import React from "react";
import customerContent from "../Translations/customerContent";

export default function CustomerReactionsBanner({ language }) {
  const content = customerContent[language] || customerContent.vietnamese;

  // Map testimonials directly from your content file
  const testimonials = [
    {
      name: "DIỄM SƯƠNG",
      service: content.services[0],
      comment: content.comments[0],
      videoUrl: "https://www.youtube.com/shorts/Ymwva1sJVuw",
    },
    {
      name: "BÉ TRƯƠNG BÁ",
      service: content.services[1],
      comment: content.comments[1],
      videoUrl: "https://youtube.com/shorts/l8EngnXRACI?si=lf5xpgGUxhCCmTRw",
    },
    {
      name: "NGỌC TUYỀN",
      service: content.services[2],
      comment: content.comments[2],
      videoUrl: "https://youtube.com/shorts/l8EngnXRACI?si=8ROLZDlVF9UEwwnH",
    },
  ];

  return (
    <section className="py-20 bg-[#fdfcf8]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#4b4b8f] mb-12 border-b-2 border-[#d4af37] pb-2 inline-block">
          {content.customerTitle}
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-center text-center p-6"
            >
              {/* Video */}
              <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] mb-4 rounded-xl overflow-hidden shadow">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`${t.videoUrl}?autoplay=0&mute=1`}
                  title={`Customer video ${t.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Text */}
              <span className="text-sm text-[#4b4b8f] font-semibold uppercase tracking-wide">
                {t.service}
              </span>
              <p className="text-gray-700 text-sm italic mt-3 mb-4 leading-relaxed">
                “{t.comment}”
              </p>
              <h3 className="text-[#4b4b8f] font-bold">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
