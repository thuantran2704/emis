import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ad1 from "../pics/ads/ad1.jpg";
import ad2 from "../pics/ads/ad2.jpg";
import ad3 from "../pics/ads/ad3.jpg";
import ad4 from "../pics/ads/ad4.jpg";
import ad5 from "../pics/ads/ad5.jpg";

const adImages = [ad1, ad2, ad3, ad4, ad5];

export default function AdBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % adImages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden flex justify-center items-center bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-700">
      {/* Banner container */}
      <div className="relative w-full h-[42vh] md:h-[48vh] lg:h-[54vh] flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={adImages[current]}
            alt={`Ad ${current + 1}`}
            className="max-h-full max-w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </AnimatePresence>

        {/* Gentle dark fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {adImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.8)] scale-110"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to ad ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
