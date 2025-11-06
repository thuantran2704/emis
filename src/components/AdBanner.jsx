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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % adImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "400px",
        overflow: "hidden",
        borderRadius: "12px",
        margin: "0 auto",
        backgroundColor: "rgba(0,0,0,0.6)", // dark grey opaque background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={adImages[current]}
          alt={`ad-${current}`}
          initial={{ x: 800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -800, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            borderRadius: "8px",
          }}
        />
      </AnimatePresence>
    </div>
  );
}
