import { useState, useEffect, useRef } from "react";
import ad1 from "../pics/ads/ad1.png";
import ad2 from "../pics/ads/ad2.png";
import ad3 from "../pics/ads/ad3.png";
import ad4 from "../pics/ads/ad4.png";
import ad5 from "../pics/ads/ad5.png";

const adImages = [ad1, ad2, ad3, ad4, ad5];

export default function AdBanner() {
  const [current, setCurrent] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % adImages.length);
        setIsSliding(false);
      }, 600); // matches transition duration
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg bg-black">
      {/* Slide container */}
      <div
        ref={slideRef}
        className={`flex h-full w-full transition-transform duration-700 ease-in-out`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {adImages.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full relative"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Optional blur overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
          </div>
        ))}
      </div>

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
