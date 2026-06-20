import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ad1 from "../pics/ads/ad01-dental-implant-3-popular.png";
import ad2 from "../pics/ads/ad02-dental-tourist.png";
import ad3 from "../pics/ads/ad03-starting12k-dental-tourism.png";

const adImages = [
  {
    src: ad1,
    alt: "Implant promo: J Dental Care (Italy) 20M from 40M, Osstem (Korea) 9.9M from 20M, Hiossen (US) 12.5M from 22M",
  },
  {
    src: ad2,
    alt: "Dental tourist package for international patients with quality care",
  },
  {
    src: ad3,
    alt: "Starting price 12k dental tourism offer for cosmetic dentistry services",
  },
];

export default function AdBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % adImages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div
        className="group relative overflow-hidden rounded-3xl border border-[#dbe6ef] bg-gradient-to-br from-[#f9fcff] to-[#eef4f9] shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
        onClick={() => setCurrent((prev) => (prev + 1) % adImages.length)}
        style={{ aspectRatio: 'auto' }}
      >
        {/* Background blur */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105 blur-lg opacity-20 transition-all duration-700"
          style={{
            backgroundImage: `url(${adImages[current].src})`,
          }}
        />

        {/* Content container */}
        <div className="relative h-[45vh] sm:h-[50vh] md:h-[48vh] lg:h-[56vh] xl:h-[60vh] w-full flex items-center justify-center p-6 md:p-10">
          <AnimatePresence mode="wait">
            <div
              key={current}
              className="flex h-full w-full items-center justify-center"
            >
              <img
                src={adImages[current].src}
                alt={adImages[current].alt}
                className="max-h-full max-w-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
              />
            </div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {adImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(idx);
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-8 h-2 bg-[#d4af37] shadow-[0_0_6px_rgba(212,175,55,0.5)]"
                  : "w-2 h-2 bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Show ad ${idx + 1}`}
            />
          ))}
        </div>

        {/* Hint text */}
        <div className="absolute top-4 right-6 text-xs font-medium text-[#8aa0b5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Click to see more
        </div>
      </div>
    </section>
  );
}