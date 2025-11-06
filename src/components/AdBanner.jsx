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
    <div className="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={adImages[currentIndex]}
        alt={`Advertisement ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default AdBanner;
