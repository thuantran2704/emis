import { useState, useEffect } from "react";
import ad1 from "../pics/ads/ad1.png";
import ad2 from "../pics/ads/ad2.png";
import ad3 from "../pics/ads/ad3.png";
import ad4 from "../pics/ads/ad4.png";
import ad5 from "../pics/ads/ad5.png";

const adImages = [ad1, ad2, ad3, ad4, ad5];

export default function AdBanner() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setSliding(true);

      setTimeout(() => {
        setCurrent((current + 1) % adImages.length);
        setSliding(false);
      }, 700); // match transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

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

      {/* Sliding images */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {prev !== null && sliding && (
          <img
            src={adImages[prev]}
            alt={`Ad ${prev + 1}`}
            className="absolute object-contain max-h-[300px] md:max-h-[400px] transition-transform duration-700"
            style={{
              transform: "translateX(-100%)", // slide out left
            }}
          />
        )}

        <img
          src={adImages[current]}
          alt={`Ad ${current + 1}`}
          className={`object-contain max-h-[300px] md:max-h-[400px] transition-transform duration-700`}
          style={{
            transform: sliding ? "translateX(0%)" : "translateX(0%)", // slide in from right
          }}
        />
      </div>

      {/* Dots */}
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
