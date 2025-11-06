import { useState, useEffect } from "react";
import ad1 from "../pics/ads/ad1.png";
import ad2 from "../pics/ads/ad2.png";
import ad3 from "../pics/ads/ad3.png";
import ad4 from "../pics/ads/ad4.png";
import ad5 from "../pics/ads/ad5.png";

const adImages = [ad1, ad2, ad3, ad4, ad5];

export default function AdBanner() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [direction, setDirection] = useState("right");
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setSliding(true);
      setNext((prev) => (prev + 1) % adImages.length);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % adImages.length);
        setSliding(false);
      }, 700);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg bg-black">
      {/* Background layer (blurred & darkened) */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${adImages[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(25px) brightness(0.4)",
          transform: "scale(1.1)",
        }}
      />

      {/* Sliding images container */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className={`flex items-center justify-center transition-transform duration-700 ease-in-out`}
          style={{
            transform: sliding
              ? direction === "right"
                ? "translateX(-100%)"
                : "translateX(100%)"
              : "translateX(0)",
          }}
        >
          {/* Current Image */}
          <img
            src={adImages[current]}
            alt={`Ad ${current + 1}`}
            className="w-auto h-[300px] md:h-[400px] object-contain mx-auto rounded-lg shadow-xl transition-transform duration-700"
          />

          {/* Next Image (slides in) */}
          <img
            src={adImages[next]}
            alt={`Ad ${next + 1}`}
            className="w-auto h-[300px] md:h-[400px] object-contain mx-auto rounded-lg shadow-xl absolute left-full transition-transform duration-700"
            style={{
              transform: sliding
                ? direction === "right"
                  ? "translateX(-100%)"
                  : "translateX(100%)"
                : "translateX(0)",
            }}
          />
        </div>
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
