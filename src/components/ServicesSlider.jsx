import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ServiceCard from './ServiceCard';

const ServicesSlider = ({ services, serviceImages, bookNowText }) => {
  const [cardsPerView, setCardsPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const sliderRef = useRef(null);

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

  // Handle transition end for infinite loop
  const handleTransitionEnd = () => {
    if (currentIndex >= services.length) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex % services.length);
    } else if (currentIndex < 0) {
      setTransitionEnabled(false);
      setCurrentIndex(services.length - 1);
    }
  };

  // Re-enable transition after resetting position
  useEffect(() => {
    if (!transitionEnabled) {
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
    }
  }, [transitionEnabled]);

  // Infinite scroll logic with smooth transitions
  const nextSlide = () => {
    if (transitionEnabled) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (transitionEnabled) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Calculate transform value for smooth sliding
  const getTransformValue = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth / cardsPerView;
      return -currentIndex * slideWidth;
    }
    return 0;
  };

  // Duplicate slides for seamless infinite loop
  const extendedServices = [...services, ...services, ...services];
  const extendedServiceImages = [...serviceImages, ...serviceImages, ...serviceImages];

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
      <div 
        ref={sliderRef}
        className="flex transition-all duration-500 ease-in-out"
        style={{
          transform: `translateX(${getTransformValue()}px)`,
          transition: transitionEnabled ? 'transform 500ms ease-in-out' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedServices.map((service, index) => (
          <div
            key={index}
            style={{ flex: `0 0 ${100 / cardsPerView}%` }}
            className="px-2"
          >
            <ServiceCard
              service={service}
              image={extendedServiceImages[index]}
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