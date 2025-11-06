import React, { useState, useEffect } from 'react';
import ad1 from "../pics/ads/ad1.png";
import ad2 from "../pics/ads/ad2.png";
import ad3 from "../pics/ads/ad3.png";
import ad4 from "../pics/ads/ad4.png";
import ad5 from "../pics/ads/ad5.png";

const adImages = [ad1, ad2, ad3, ad4, ad5];

const AdBanner = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => 
        prevIndex === adImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentAdIndex(index);
  };

  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '200px',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}>
        <img 
          src={adImages[currentAdIndex]} 
          alt={`Advertisement ${currentAdIndex + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '150px',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>
      
      {/* Navigation dots */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
        gap: '8px'
      }}>
        {adImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentAdIndex === index ? '#666' : '#ccc',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            aria-label={`Go to advertisement ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdBanner;