import { useState } from 'react';

export default function PapersTitle({ title, images }) {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#d4af37] inline-block pb-2 text-[#1f2937]">
          {title}
        </h2>

        {/* Thumbnails container */}
        <div className="flex justify-center flex-wrap gap-6">
          {images.map((imgSrc, idx) => (
            <button
              key={idx}
              onClick={() => setZoomImage(imgSrc)}
              className="w-40 h-40 bg-[#fefefe] rounded-2xl shadow-md overflow-hidden flex items-center justify-center cursor-zoom-in transition-transform hover:scale-105"
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
