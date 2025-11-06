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
      }}
    >
      {/* Background opaque image */}
      <div
        style={{
          backgroundImage: `url(${adImages[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px) brightness(0.3)",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div>

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
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90%",
            maxHeight: "90%",
            borderRadius: "8px",
            zIndex: 1,
          }}
        />
      </AnimatePresence>
    </div>
  );
}
