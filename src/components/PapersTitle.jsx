import { useState, useRef } from 'react';

export default function PapersTitle({ title, images }) {
  const [zoomImage, setZoomImage] = useState(null);
  const containerRef = useRef(null);

  // Scroll container left or right by thumbnail width + gap (168px here)
  const scrollAmount = 168;

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center px-4 relative">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#d4af37] inline-block pb-2 text-[#1f2937]">
          {title}
        </h2>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll images left"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 z-10"
          style={{ transform: 'translate(-50%, -50%)' }}
          type="button"
        >
          &#8592;
        </button>

        {/* Scrollable thumbnails container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 px-12"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {images.map((imgSrc, idx) => (
            <button
              key={idx}
              onClick={() => setZoomImage(imgSrc)}
              className="flex-shrink-0 w-40 h-40 bg-[#fefefe] rounded-2xl shadow-md overflow-hidden flex items-center justify-center cursor-zoom-in transition-transform hover:scale-105 scroll-snap-align-start"
              aria-label={`Open image ${idx + 1} in zoom`}
              type="button"
            >
              <img
                src={imgSrc}
                alt={`thumbnail-${idx}`}
                className="max-w-full max-h-full object-contain"
              />
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          aria-label="Scroll images right"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 z-10"
          style={{ transform: 'translate(50%, -50%)' }}
          type="button"
        >
          &#8594;
        </button>

        {/* Lightbox modal */}
        {zoomImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
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

