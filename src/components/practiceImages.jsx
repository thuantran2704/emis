// src/components/PracticeImages.jsx
import React from 'react';
import patient1 from '../pics/patient1.jpg';
import patient2 from '../pics/patient2.jpg';
import sealing from '../pics/sealing.jpg';
import seal from '../pics/sealer.jpg';
import phongkham from '../pics/phongkham.jpg';

const practiceImages = [patient1, patient2, sealing, seal, phongkham];

export default function PracticeImages() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1f2937] mb-8 text-center border-b-2 border-[#d4af37] pb-2 inline-block">
          Our Practice in Action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {practiceImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={img}
                alt={`Practice Image ${index + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
