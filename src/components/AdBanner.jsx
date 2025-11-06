import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ad1 from "../pics/ads/ad1.png";
import ad2 from "../pics/ads/ad2.png";
import ad3 from "../pics/ads/ad3.png";
import ad4 from "../pics/ads/ad4.png";
import ad5 from "../pics/ads/ad5.png";

const adImages = [ad1, ad2, ad3, ad4, ad5];

export default function AdBanner() {
  const [current, setCurrent] = useState(0);

  // Change image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % adImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative w-full aspect-[16/6] md:aspect-[16/5] lg:aspect-[16/4]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={adImages[current]}
            alt={`Ad ${current + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Optional: small dots navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {adImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-[#d4af37]" : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to ad ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
