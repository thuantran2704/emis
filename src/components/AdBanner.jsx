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
      position: 'relative',
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Darkened opaque background
      padding: '40px 20px',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px', // Larger height
      width: '100%',
      maxWidth: '1000px', // Wider banner
      margin: '0 auto',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    }}>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
        zIndex: 1
      }}></div>
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
      }}>
        <img 
          src={adImages[currentAdIndex]} 
          alt={`Advertisement ${currentAdIndex + 1}`}
          style={{
            maxWidth: '90%',
            maxHeight: '250px', // Larger image display
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}
        />
      </div>
      
      {/* Navigation dots */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        marginTop: '25px',
        gap: '12px'
      }}>
        {adImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentAdIndex === index ? '#d4af37' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
            }}
            aria-label={`Go to advertisement ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdBanner;