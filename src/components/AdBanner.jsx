import { useState, useEffect } from "react";
import ad1 from "../pics/ads/ad1.png";
import ad2 from "../pics/ads/ad2.png";
import ad3 from "../pics/ads/ad3.png";
import ad4 from "../pics/ads/ad4.png";
import ad5 from "../pics/ads/ad5.png";

// Add all ad images here
const adImages = [ad1, ad2, ad3, ad4, ad5];

export default function AdBanner() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        // move to next image (loop back to start)
        setCurrent((prev) => (prev + 1) % adImages.length);
        setFade(true); // fade in
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg">
      {/* Background blur layer */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${adImages[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px) brightness(0.6)",
          transform: "scale(1.1)",
        }}
      ></div>

      {/* Foreground image */}
      <img
        key={current}
        src={adImages[current]}
        alt={`Ad ${current + 1}`}
        className={`absolute inset-0 mx-auto my-auto max-w-full max-h-full object-contain transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          zIndex: 10,
        }}
      />

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {adImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-[#d4af37]" : "bg-white/70"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
