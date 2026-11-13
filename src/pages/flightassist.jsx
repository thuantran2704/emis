import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useSelector } from 'react-redux';
import visitorProgramContent from '../Translations/visitorProgramContent.js';

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
  const language = useSelector((state) => state.language.language);
  const content = visitorProgramContent[language];
  const cityGallery = [vn3, vn5, vn7, vn9, vn11, vn12];

  return (
    <main className="bg-[#fdfcf8] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta
          name="description"
          content={content.metaDescription}
        />
      </Helmet>

      <section className="min-h-[82vh] flex items-center py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-20 items-center">
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-[16/10] lg:aspect-auto">
                <img
                  src={vn1}
                  alt={content.heroAlt}
                  className="w-full h-full lg:h-[480px] object-cover object-center"
                />
              </div>
            </div>

            <div className="order-2 lg:order-1 space-y-6">
              <p
                className="uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold"
              >
                {content.eyebrow}
              </p>

              <h1
                className="text-4xl md:text-5xl text-[#2a3439] leading-tight"
              >
                {content.title}
              </h1>

              <p
                className="text-lg text-gray-500 leading-relaxed max-w-md"
              >
                {content.intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
                >
                  {content.plan}
                </Link>
                <a
                  href="#program-details"
                  className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition text-center"
                >
                  {content.details}
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
              {content.benefitsLabel}
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
            >
              {content.benefitsTitle}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
            >
              {content.benefitsIntro}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <article className="h-full bg-[#f7f2e7] rounded-2xl p-8 border border-[#eadfc9]/50">
              <h3
                className="text-2xl text-[#2a3439] mb-5"
              >
                {content.flightTitle}
              </h3>
              <div className="space-y-3">
                {content.flight.map((item) => (
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
                {content.stayTitle}
              </h3>
              <div className="space-y-3">
                {content.stay.map((item) => (
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
                  alt={content.stayAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#eadfc9]/50 flex flex-col justify-between">
              <div>
                <p
                  className="uppercase tracking-[0.25em] text-[#C5AF73] text-xs font-semibold mb-4"
                >
                  {content.cityLabel}
                </p>
                <h3
                  className="text-2xl text-[#2a3439]"
                >
                  {content.cityTitle}
                </h3>
              </div>

              <p
                className="text-gray-500 leading-relaxed border-y border-[#eadfc9]/60 py-6 my-2"
              >
                {content.cityIntro}
              </p>

              <p
                className="text-gray-500 leading-relaxed"
              >
                {content.cityNote}
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
              {content.highlightsLabel}
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
            >
              {content.highlightsTitle}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cityGallery.map((img, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-sm border border-[#eadfc9]/50 bg-[#f7f2e7]">
                <img
                  src={img}
                  alt={`${content.galleryAlt} ${index + 1}`}
                  className="w-full h-52 object-cover object-center"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/international-patients"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-[#fdf8ee] transition"
            >
              {content.patientSupport}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fdfcf8]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="rounded-2xl border border-[#eadfc9] bg-white p-8 shadow-sm">
            <p
              className="uppercase tracking-[0.25em] text-[#C5AF73] text-xs font-semibold mb-4"
            >
              {content.noticeLabel}
            </p>
            <p
              className="text-gray-500 leading-relaxed"
            >
              {content.notice}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
              >
                {content.request}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/implant"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition"
              >
                {content.implants}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
