import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

/* Travel Ad Images */
import vn1 from "../pics/travel-ads/vn1.jpg";
import vn2 from "../pics/travel-ads/vn2.jpg";
import vn3 from "../pics/travel-ads/vn3.jpg";
import vn4 from "../pics/travel-ads/vn4.jpg";
import vn5 from "../pics/travel-ads/vn5.jpg";
import vn6 from "../pics/travel-ads/vn6.jpg";
import vn7 from "../pics/travel-ads/vn7.jpg";
import vn8 from "../pics/travel-ads/vn8.jpg";
import vn9 from "../pics/travel-ads/vn9.jpg";
import vn10 from "../pics/travel-ads/vn10.jpg";
import vn11 from "../pics/travel-ads/vn11.jpg";
import vn12 from "../pics/travel-ads/vn12.jpg";
import AdBanner from "../components/AdBanner";

export default function DentalVisitorProgram() {
  const images = [
    vn1, vn2, vn3, vn4, vn5, vn6,
    vn7, vn8, vn9, vn10, vn11, vn12
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  /* Auto slide every 10 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="min-h-screen bg-[#f7f2e7] pt-20">
      {/* SEO */}
      <Helmet>
        <title>Dental Visitor Support Program | Emis Dental</title>
        <meta
          name="description"
          content="Dental Visitor Support Program by Emis Dental offering flight, accommodation, and travel support for international patients."
        />
        <link rel="canonical" href="https://emisdental.com/visitor-program" />
      </Helmet>

      {/* IMAGE SLIDER BANNER */}
      <section className="relative w-full overflow-hidden bg-black h-[55vh] sm:h-[65vh] lg:h-[70vh]">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-full flex items-center justify-center"
            >
              {/* Fixed Frame */}
              <div className="relative w-full h-full">
                <img
                  src={img}
                  alt={`Vietnam destination ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white text-center max-w-4xl leading-tight">
            Dental Visitor Support Program with Emis
          </h1>
        </div>
      </section>
      <AdBanner />
      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#4b4b8f] mb-6 text-center">
          A Refined Dental Travel Experience, Thoughtfully Curated for You
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-12">
          Our Dental Visitor Program is exclusively designed for international
          patients who travel to Vietnam for advanced implant and comprehensive
          dental treatments.
        </p>

        {/* BENEFITS */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Flight Support */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#4b4b8f] mb-4">
              ✈️ Premium Flight Support
            </h3>
            <ul className="text-gray-700 space-y-2 leading-relaxed">
              <li>• 30% support on round-trip Economy airfare</li>
              <li>• Maximum flight support value of USD 1,200</li>
            </ul>
          </div>

          {/* Accommodation */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#4b4b8f] mb-4">
              🏨 Personalized Accommodation Assistance
            </h3>
            <p className="text-gray-700 leading-relaxed">
              8 nights of fully sponsored accommodation in District 3, Ho Chi Minh
              City, conveniently close to Emis Dental Clinic and major tourist
              attractions such as Notre-Dame Cathedral and Turtle Lake. Carefully
              selected to support your comfort, treatment, and recovery.
            </p>
          </div>
        </div>

        {/* CITY TOUR */}
        <div className="mt-14 bg-[#fdfcf8] rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#4b4b8f] mb-4">
            🗺️ Complimentary 3-Day City Trip (Optional)
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Patients are entitled to a complimentary 3-day city tour designed
            specifically for first-time visitors, highlighting the most iconic
            destinations in Ho Chi Minh City.
          </p>
          <p className="text-gray-700 italic">
            Alternatively, those who do not wish to participate may receive a
            monetary amount equivalent to the tour’s value.
          </p>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-12 border-l-4 border-[#d4af37] bg-yellow-50 p-6 rounded-xl max-w-4xl mx-auto">
          <p className="font-semibold text-gray-800 mb-2">
            ⚠️ Important Notice
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Program benefits are subject to eligibility, treatment plans, and
            availability. Flight and accommodation support values are
            non-transferable and cannot be redeemed for cash unless explicitly
            stated by Emis Dental.
          </p>
        </div>
      </section>
    </main>
  );
}
