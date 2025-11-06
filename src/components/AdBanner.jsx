import { useState, useEffect } from "react";
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
          transition: "background-image 1s ease-in-out",
        }}
      ></div>

      {/* Slider container */}
      <div
        style={{
          display: "flex",
          width: `${adImages.length * 100}%`,
          transform: `translateX(-${current * (100 / adImages.length)}%)`,
          transition: "transform 1s ease-in-out",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {adImages.map((img, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={img}
              alt={`ad-${index}`}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
