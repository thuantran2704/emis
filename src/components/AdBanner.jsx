import { useState, useEffect } from "react";
import ad1 from "../pics/ads/ad1.png";
import ad2 from "../pics/ads/ad2.png";
import ad3 from "../pics/ads/ad3.png";
import ad4 from "../pics/ads/ad4.png";
import ad5 from "../pics/ads/ad5.png";

const adImages = [ad1, ad2, ad3, ad4, ad5];

export default function AdBanner() {
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0); // for sliding effect

  useEffect(() => {
    const interval = setInterval(() => {
      // slide left
      setOffset(-100);

      setTimeout(() => {
        // after slide, update current image and reset offset
        setCurrent((prev) => (prev + 1) % adImages.length);
        setOffset(0);
      }, 600); // match transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg">
      {/* Blurred background */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${adImages[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(25px) brightness(0.3)",
          transform: "scale(1.1)",
        }}
      ></div>

      {/* Centered main image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={adImages[current]}
          alt={`Ad ${current + 1}`}
          className="object-contain max-h-[300px] md:max-h-[400px] transition-transform duration-600"
          style={{
            transform: `translateX(${offset}%)`,
          }}
        />
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
