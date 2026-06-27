import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle } from "lucide-react";

import vn1 from "../pics/travel-ads/vn1.jpg";
import vn3 from "../pics/travel-ads/vn3.jpg";
import vn4 from "../pics/travel-ads/vn4.jpg";
import vn5 from "../pics/travel-ads/vn5.jpg";
import vn7 from "../pics/travel-ads/vn7.jpg";
import vn9 from "../pics/travel-ads/vn9.jpg";
import vn11 from "../pics/travel-ads/vn11.jpg";
import vn12 from "../pics/travel-ads/vn12.jpg";
import AdBanner from "../components/AdBanner";

export default function DentalVisitorProgram() {
  const cityGallery = [vn3, vn5, vn7, vn9, vn11, vn12];

  const flightSupport = [
    "30% support on round-trip Economy airfare",
    "Maximum support value up to USD 1,200",
    "Coordination support for suitable flight windows",
  ];

  const staySupport = [
    "8 nights of sponsored accommodation in District 3",
    "Convenient location near Emis Dental and key landmarks",
    "Comfort-focused stay for treatment and recovery periods",
  ];

  return (
    <main className="bg-[#fdfcf8] pt-20">
      <Helmet>
        <title>Dental Visitor Support Program | Emis Dental</title>
        <meta
          name="description"
          content="Dental Visitor Support Program by Emis Dental offering flight, accommodation, and travel support for international patients."
        />
        <link rel="canonical" href="https://emisdental.com/visitor-program" />
      </Helmet>

      <section className="min-h-[82vh] flex items-center py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-20 items-center">
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-[16/10] lg:aspect-auto">
                <img
                  src={vn1}
                  alt="Dental travel support in Vietnam"
                  className="w-full h-full lg:h-[480px] object-cover object-center"
                />
              </div>
            </div>

            <div className="order-2 lg:order-1 space-y-6">
              <p
                className="uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold"
              >
                TRAVEL ASSIST
              </p>

              <h1
                className="text-4xl md:text-5xl text-[#2a3439] leading-tight"
              >
                Dental Visitor Support Program
              </h1>

              <p
                className="text-lg text-gray-500 leading-relaxed max-w-md"
              >
                A refined dental travel experience designed for international patients seeking implant and comprehensive treatment in Vietnam.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
                >
                  Plan Your Visit
                </Link>
                <a
                  href="#program-details"
                  className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition text-center"
                >
                  View Program Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program-details" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
            >
              PROGRAM BENEFITS
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
            >
              Thoughtfully Curated Support
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
            >
              Our visitor program helps simplify treatment travel, from flight planning to accommodation and local support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <article className="h-full bg-[#f7f2e7] rounded-2xl p-8 border border-[#eadfc9]/50">
              <h3
                className="text-2xl text-[#2a3439] mb-5"
              >
                Premium Flight Support
              </h3>
              <div className="space-y-3">
                {flightSupport.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C5AF73] mt-1 flex-shrink-0" />
                    <span className="text-[#2a3439]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="h-full bg-white rounded-2xl p-8 shadow-sm border border-[#eadfc9]/50">
              <h3
                className="text-2xl text-[#2a3439] mb-5"
              >
                Accommodation Assistance
              </h3>
              <div className="space-y-3">
                {staySupport.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C5AF73] mt-1 flex-shrink-0" />
                    <span className="text-[#2a3439]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f7f2e7]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-stretch">
            <div className="rounded-2xl overflow-hidden shadow-sm h-[460px]">
              <img
                src={vn4}
                alt="Visitor travel and treatment support"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eadfc9]/50 flex flex-col justify-between">
              <div>
                <p
                  className="uppercase tracking-[0.25em] text-[#C5AF73] text-xs font-semibold mb-4"
                >
                  OPTIONAL CITY EXPERIENCE
                </p>
                <h3
                  className="text-2xl text-[#2a3439]"
                >
                  Complimentary 3-Day City Trip
                </h3>
              </div>

              <p
                className="text-gray-500 leading-relaxed border-y border-[#eadfc9]/60 py-6 my-2"
              >
                Eligible patients can join a 3-day city itinerary designed for first-time visitors, featuring major landmarks and comfortable pacing around treatment schedules.
              </p>

              <p
                className="text-gray-500 leading-relaxed"
              >
                If you prefer not to join the tour, an equivalent value option may be discussed based on program terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdBanner />

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
            >
              VIETNAM HIGHLIGHTS
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
            >
              Explore While You Recover
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cityGallery.map((img, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-sm border border-[#eadfc9]/50 bg-[#f7f2e7]">
                <img
                  src={img}
                  alt={`Vietnam travel highlight ${index + 1}`}
                  className="w-full h-52 object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fdfcf8]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="rounded-2xl border border-[#eadfc9] bg-white p-8 shadow-sm">
            <p
              className="uppercase tracking-[0.25em] text-[#C5AF73] text-xs font-semibold mb-4"
            >
              IMPORTANT NOTICE
            </p>
            <p
              className="text-gray-500 leading-relaxed"
            >
              Program benefits are subject to eligibility, treatment plans, and availability.
              Flight and accommodation support values are non-transferable and cannot be redeemed
              for cash unless explicitly stated by Emis Dental.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
              >
                Request Travel Support
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/implant"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition"
              >
                Explore Implant Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
