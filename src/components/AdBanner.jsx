import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdBanner({ ads }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!ads || ads.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ads.length);
    }, 3000); // ⏱ 3 seconds per image
    return () => clearInterval(interval);
  }, [ads]);

  if (!ads || ads.length === 0) return null;

  return (
    <div className="w-full overflow-hidden relative shadow-md h-64 md:h-80 lg:h-[28rem]">
      <div className="w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={ads[current]}
            src={ads[current]}
            alt={`ad-${current}`}
            initial={{ x: "100%", rotateY: 90, opacity: 0 }}
            animate={{ x: 0, rotateY: 0, opacity: 1 }}
            exit={{ x: "-100%", rotateY: -90, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }} // 🕊 smoother & slower
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
