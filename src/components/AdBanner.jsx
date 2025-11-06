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

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % adImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-black overflow-hidden flex justify-center items-center">
      {/* Fixed banner height (adjust as needed) */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={adImages[current]}
            alt={`Ad ${current + 1}`}
            className="max-h-full max-w-full object-contain"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {adImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-[#d4af37]" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to ad ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}