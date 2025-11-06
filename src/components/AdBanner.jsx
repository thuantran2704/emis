import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ad1 from "../pics/ads/ad1.png";
import ad2 from "../pics/ads/ad2.png";
import ad3 from "../pics/ads/ad3.png";
import ad4 from "../pics/ads/ad4.png";
import ad5 from "../pics/ads/ad5.png";

const adImages = [ad1, ad2, ad3, ad4, ad5];

export default function AdBanner() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % adImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isTransitioning, nextSlide]);

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        height: "0",
        paddingBottom: "50%", // 2:1 aspect ratio
        overflow: "hidden",
        borderRadius: "12px",
        margin: "0 auto",
        backgroundColor: "#000",
      }}
    >
      {/* Preload next image */}
      <div style={{ display: "none" }}>
        {adImages.map((img, index) => (
          <img key={index} src={img} alt={`preload-${index}`} />
        ))}
      </div>

      {/* Blurred background */}
      <div
        style={{
          backgroundImage: `url(${adImages[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(15px) brightness(0.4)",
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "120%",
          height: "120%",
          zIndex: 0,
          transform: "scale(1.1)",
        }}
      />

      {/* Animated image */}
      <AnimatePresence mode="wait" onExitComplete={handleTransitionComplete}>
        <motion.div
          key={current}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ 
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] // Custom ease for smoother motion
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            width: "90%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={adImages[current]}
            alt={`ad-${current + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "8px",
              pointerEvents: "none", // Improve performance
            }}
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          gap: "8px",
        }}
      >
        {adImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrent(index);
            }}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: current === index ? "#fff" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}