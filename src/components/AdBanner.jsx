import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdBanner({ ads }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!ads || ads.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ads.length);
    }, 1000); // 1s per slide
    return () => clearInterval(interval);
  }, [ads]);

  if (!ads || ads.length === 0) return null;

  return (
    <div className="w-full bg-[#f7f2e7] overflow-hidden relative shadow-md h-40 md:h-56 lg:h-64">
      <div className="w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={ads[current]}
            src={ads[current]}
            alt={`ad-${current}`}
            initial={{ x: "100%", rotateY: 90, opacity: 0 }}
            animate={{ x: 0, rotateY: 0, opacity: 1 }}
            exit={{ x: "-100%", rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute w-full h-full object-cover rounded-md"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
