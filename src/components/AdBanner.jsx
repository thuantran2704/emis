import { useState, useEffect } from "react";
import ad1 from "../pics/ads/ad1.png";
import ad2 from "../pics/ads/ad2.png";
import ad3 from "../pics/ads/ad3.png";
import ad4 from "../pics/ads/ad4.png";
import ad5 from "../pics/ads/ad5.png";

const adImages = [ad1, ad2, ad3, ad4, ad5];

const AdBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adImages.length);
    }, 10000); // change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[36rem] relative overflow-hidden rounded-lg shadow-lg bg-[#111111] flex items-center justify-center">
      <img
        src={adImages[currentIndex]}
        alt={`Advertisement ${currentIndex + 1}`}
        className="max-w-full max-h-full object-contain transition-opacity duration-1000"
      />
    </div>
  );
};

export default AdBanner;
