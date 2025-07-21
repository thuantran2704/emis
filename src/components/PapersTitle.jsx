import { useState } from 'react';

export default function PapersTitle({ title, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState(null); // holds clicked image

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#d4af37] inline-block pb-2 text-[#1f2937]">
          {title}
        </h2>
        <div className="relative w-full max-w-3xl mx-auto h-[500px] flex items-center justify-center overflow-hidden bg-[#fefefe] rounded-2xl shadow-md">
          <img
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="max-h-full max-w-full object-contain cursor-zoom-in transition-all duration-300"
            onClick={() => setZoomImage(images[currentIndex])}
          />

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
            aria-label="Previous Slide"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-100"
            aria-label="Next Slide"
          >
            &#8594;
          </button>
        </div>

        {/* Lightbox modal */}
        {zoomImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setZoomImage(null)}
          >
            <img
              src={zoomImage}
              alt="Zoomed"
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}
