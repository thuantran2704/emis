import { useState, useEffect } from "react";
import ad1 from "../pics/ads/ad1.png";
import ad2 from "../pics/ads/ad2.png";
import ad3 from "../pics/ads/ad3.png";
import ad4 from "../pics/ads/ad4.png";
import ad5 from "../pics/ads/ad5.png";

const adImages = [ad1, ad2, ad3, ad4, ad5];

const AdBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true); // trigger flip animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % adImages.length);
        setFlipping(false);
      }, 600); // match half the flip duration
    }, 10000); // change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-64 md:h-80 lg:h-96 perspective-1000">
      <div
        className={`relative w-full h-full rounded-lg overflow-hidden shadow-lg transition-transform duration-600 transform-style-preserve-3d ${
          flipping ? "rotateY-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease-in-out",
          transform: flipping ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        <img
          src={adImages[currentIndex]}
          alt={`Advertisement ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-black/20" // semi-opaque overlay
          style={{ backfaceVisibility: "hidden" }}
        />
      </div>
    </div>
  );
};

export default AdBanner;
