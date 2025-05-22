// components/Slider.jsx
import { useState } from 'react';
import Cards from './Cards';

export default function Slider({ services, serviceImages, bookNow }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (services.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (services.length - 2)) % (services.length - 2));
  };

  return (
    <div className="relative overflow-hidden">
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-3 rounded-full shadow-md hover:bg-[#c19d30] transition"
        style={{ fontFamily: "'Cormorant', serif" }}
        aria-label="Previous services"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4af37] text-white p-3 rounded-full shadow-md hover:bg-[#c19d30] transition"
        style={{ fontFamily: "'Cormorant', serif" }}
        aria-label="Next services"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Cards Component */}
      <Cards 
        services={services} 
        serviceImages={serviceImages} 
        bookNow={bookNow} 
        currentIndex={currentIndex} 
      />

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({length: services.length - 2}).map((_, index) => (
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
}