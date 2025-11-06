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
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Blurred background */}
      <div
        style={{
          backgroundImage: `url(${adImages[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px) brightness(0.3)",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      ></div>

      {/* Animated image */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ x: 800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -800, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={adImages[current]}
            alt={`ad-${current}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
