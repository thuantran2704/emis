import React from 'react';

export default function MapSection({ locationTitle, address }) {
  return (
    <section className="py-16 bg-[#fffaf0]" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 
          className="text-3xl font-bold text-[#1f2937] mb-12 text-center border-b-2 border-[#d4af37] pb-2 inline-block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {locationTitle}
        </h2>
        
        <div className="relative overflow-hidden rounded-xl border-4 border-[#1f2937] shadow-xl">
          <div className="relative pb-[56.25%] h-0">
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.327228104639!2d106.6896131335823!3d10.786230289363182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa7462efccb%3A0xb79ba7e69cbb02b3!2sEmis%20Dental!5e0!3m2!1svi!2sus!4v1752074692262!5m2!1svi!2sus" 
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dental Clinic Location"
              aria-label="Google Maps location of our dental clinic"
              itemProp="hasMap"
              >
          </iframe>
          </div>
        </div>

        <p 
          className="text-center text-gray-600 mt-4"
          style={{ fontFamily: "'Cormorant', serif" }}
          itemProp="address"
        >
          {address}
        </p>
      </div>
    </section>
  );
}
