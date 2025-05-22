// src/components/map.jsx
export default function MapSection({ address, locationTitle }) {
  return (
    <section className="py-12 bg-[#f7f2e7]" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1f2937] mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
          {locationTitle}
        </h2>

        <div className="relative overflow-hidden rounded-xl border-4 border-[#1f2937] shadow-xl">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.736219916501!2d106.69290884019306!3d10.783092789410368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f36962c096f%3A0x8a34a0035dd5f6c8!2z..."
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dental Clinic Location"
              aria-label="Google Maps location of our dental clinic"
              itemProp="hasMap"
            />
          </div>
        </div>

        <p className="text-center text-gray-600 mt-4" style={{ fontFamily: "'Cormorant', serif" }} itemProp="address">
          {address}
        </p>
      </div>
    </section>
  );
}
