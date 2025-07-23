// import { useState } from 'react';

// export default function PapersTitle({ title, images }) {
//   const [zoomImage, setZoomImage] = useState(null);
//   const [startIndex, setStartIndex] = useState(0);

//   const visibleCount = 4; // number of thumbnails to show at once
//   const length = images.length;

//   // Move slider forward (loop around)
//   const next = () => {
//     setStartIndex((prev) => (prev + 1) % length);
//   };

//   // Move slider backward (loop around)
//   const prev = () => {
//     setStartIndex((prev) => (prev - 1 + length) % length);
//   };

//   // Helper to get visible images with wrap-around
//   const getVisibleImages = () => {
//     let visible = [];
//     for (let i = 0; i < visibleCount; i++) {
//       visible.push(images[(startIndex + i) % length]);
//     }
//     return visible;
//   };

//   const visibleImages = getVisibleImages();

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-5xl mx-auto text-center px-4 relative">
//         <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#d4af37] inline-block pb-2 text-[#1f2937]">
//           {title}
//         </h2>

//         {/* Slider container */}
//         <div className="flex items-center justify-center gap-4">
//           {/* Prev Button */}
//           <button
//             onClick={prev}
//             aria-label="Previous images"
//             className="bg-white rounded-full shadow p-3 hover:bg-gray-100"
//             type="button"
//           >
//             &#8592;
//           </button>

//           {/* Visible thumbnails */}
//           <div className="flex gap-4">
//             {visibleImages.map((imgSrc, idx) => (
//               <button
//                 key={startIndex + idx}
//                 onClick={() => setZoomImage(imgSrc)}
//                 className="w-40 h-40 bg-[#fefefe] rounded-2xl shadow-md overflow-hidden flex items-center justify-center cursor-zoom-in transition-transform hover:scale-105"
//                 aria-label={`Open image ${startIndex + idx + 1} in zoom`}
//                 type="button"
//               >
//                 <img
//                   src={imgSrc}
//                   alt={`thumbnail-${startIndex + idx}`}
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </button>
//             ))}
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={next}
//             aria-label="Next images"
//             className="bg-white rounded-full shadow p-3 hover:bg-gray-100"
//             type="button"
//           >
//             &#8594;
//           </button>
//         </div>

//         {/* Lightbox modal */}
//         {zoomImage && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
//             onClick={() => setZoomImage(null)}
//           >
//             <img
//               src={zoomImage}
//               alt="Zoomed"
//               className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import { useState } from 'react';

export default function PapersTitle({ title, images }) {
  const [zoomImage, setZoomImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4 relative">
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-[#d4af37] inline-block pb-2 text-[#1f2937]">
          {title}
        </h2>

        <div className="flex items-center justify-center gap-4">
          {/* If multiple images, show slider buttons */}
          {length > 1 && (
            <button
              onClick={prev}
              aria-label="Previous image"
              className="bg-white rounded-full shadow p-3 hover:bg-gray-100"
              type="button"
            >
              &#8592;
            </button>
          )}

          {/* Always show the image */}
          <button
            onClick={() => setZoomImage(images[currentIndex])}
            className="w-80 h-80 bg-[#fefefe] rounded-2xl shadow-md overflow-hidden flex items-center justify-center cursor-zoom-in transition-transform hover:scale-105"
            aria-label="Zoom image"
            type="button"
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </button>

          {length > 1 && (
            <button
              onClick={next}
              aria-label="Next image"
              className="bg-white rounded-full shadow p-3 hover:bg-gray-100"
              type="button"
            >
              &#8594;
            </button>
          )}
        </div>

        {/* Zoom Modal */}
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
