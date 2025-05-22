import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ServiceCard from './ServiceCard';

const ServicesSlider = ({ services, serviceImages, bookNowText }) => {
  const [cardsPerView, setCardsPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update cards per view on window resize
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

  // Infinite scroll logic
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % services.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + services.length) % services.length
    );
  };

  // Compute visible slice of cards (looping)
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push({ service: services[index], image: serviceImages[index], key: index });
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="relative w-full overflow-hidden">
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

      {/* Cards View */}
      <div className="flex transition-all duration-500 ease-in-out">
        {visibleCards.map(({ service, image, key }) => (
          <div
            key={key}
            style={{ flex: `0 0 ${100 / cardsPerView}%` }}
            className="px-2"
          >
            <ServiceCard
              service={service}
              image={image}
              bookNowText={bookNowText}
            />
          </div>
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
