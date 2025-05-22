import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ServiceCard from './ServiceCard';

const ServicesSlider = ({ services, serviceImages, bookNowText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Handle responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCardsPerView(3); // desktop
      else if (width >= 768) setCardsPerView(2); // tablet
      else setCardsPerView(1); // mobile
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % Math.ceil(services.length / cardsPerView)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + Math.ceil(services.length / cardsPerView)) % Math.ceil(services.length / cardsPerView)
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-3 rounded-full shadow-md hover:bg-[#c19d30] transition"
        aria-label="Previous services"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-3 rounded-full shadow-md hover:bg-[#c19d30] transition"
        aria-label="Next services"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider */}
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ width: `${(services.length / cardsPerView) * 100}%`, transform: `translateX(-${currentIndex * (100 / (services.length / cardsPerView))}%)` }}
      >
        {services.map((service, index) => (
          <div key={index} style={{ flex: `0 0 ${100 / cardsPerView}%` }}>
            <ServiceCard
              service={service}
              image={serviceImages[index]}
              bookNowText={bookNowText}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: Math.ceil(services.length / cardsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#d4af37]' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

ServicesSlider.propTypes = {
  services: PropTypes.array.isRequired,
  serviceImages: PropTypes.array.isRequired,
  bookNowText: PropTypes.string.isRequired
};

export default ServicesSlider;
