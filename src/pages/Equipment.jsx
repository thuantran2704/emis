import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { CheckCircle } from "lucide-react";
import equipmentContent from "../Translations/equipmentContent";

import vatechImg from "../pics/vatech.jpg";
import kehongImg from "../pics/ghe-ngoi-nha-khoa-kehong.jpg";
import hyperlightImg from "../pics/hyperlight.jpg";
import uvStorageImg from "../pics/uvStorage.jpg";
import hyundaiImg from "../pics/hyundai.jpg";
import sterileRoomImg from "../pics/sterile-room-phong-khu-trung.jpg";

export default function Equipment() {
  const language = useSelector((state) => state.language.language);
  const content = equipmentContent[language];

  const shortenText = (text, maxLength = 150) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;

    const trimmed = text.slice(0, maxLength);
    const lastSpace = trimmed.lastIndexOf(" ");
    return `${trimmed.slice(0, lastSpace > 0 ? lastSpace : maxLength)}...`;
  };

  const equipmentList = [
    { key: "vatech", image: vatechImg },
    { key: "kehong", image: kehongImg },
    { key: "hyperlight", image: hyperlightImg },
    { key: "uvStorage", image: uvStorageImg },
    { key: "hyundai", image: hyundaiImg },
    { key: "sterileRoom", image: sterileRoomImg },
  ];

  return (
    <main className="bg-[#f7f2e7] pt-20">
      <Helmet>
        <title>{content.pageTitle || content.title}</title>
        <meta name="description" content={content.pageIntro} />
      </Helmet>

      <section className="min-h-[82vh] flex items-center py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-20 items-center">
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-sm h-[320px] lg:h-[360px] bg-white border border-[#eadfc9]/60 p-3">
                <img
                  src={vatechImg}
                  alt={content.vatech.title}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>

            <div className="order-2 lg:order-1 space-y-6">
              <p
                className="uppercase tracking-[0.3em] text-[#C5AF73] text-xs font-semibold"
              >
                {content.ui.heroLabel}
              </p>

              <h1
                className="text-4xl md:text-5xl text-[#2a3439] leading-tight"
              >
                {content.pageTitle || content.title}
              </h1>

              <p
                className="text-lg text-gray-500 leading-relaxed max-w-md"
              >
                {shortenText(content.pageIntro, 120)}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
                >
                  {content.ui.bookCta}
                </Link>
                <Link
                  to="/restorative-dentistry"
                  className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-white transition text-center"
                >
                  {content.ui.priceCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
            <p
              className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
            >
              {content.ui.overviewLabel}
            </p>
            <h2
              className="text-4xl text-[#2a3439] mb-6"
            >
              {content.ui.overviewTitle}
            </h2>
            <p
              className="text-lg text-gray-500 leading-relaxed"
            >
              {content.ui.overviewIntro}
            </p>
          </div>

          <div className="space-y-8">
            {equipmentList.map(({ key, image }, index) => (
              <article
                key={key}
                className={`rounded-2xl p-6 md:p-8 border border-[#eadfc9]/60 ${
                  index % 2 === 0 ? "bg-[#f7f2e7]" : "bg-white"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className={`${index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}`}>
                    <div className="rounded-2xl overflow-hidden shadow-sm h-[320px] lg:h-[360px] bg-white border border-[#eadfc9]/60 p-3">
                      <img
                        src={image}
                        alt={content[key].title}
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                  </div>

                  <div className={`${index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}`}>
                    <p
                      className="uppercase tracking-[0.25em] text-[#C5AF73] text-xs font-semibold mb-4"
                    >
                      {content.ui.cardLabel}
                    </p>

                    <h3
                      className="text-2xl md:text-3xl text-[#2a3439] mb-4"
                    >
                      {content[key].title}
                    </h3>

                    <p
                      className="text-[#2a3439] mb-4"
                    >
                      {shortenText(content[key].equipmentIntro, 95)}
                    </p>

                    <p
                      className="text-gray-500 leading-relaxed mb-5"
                    >
                      {shortenText(content[key].equipmentDescription, 150)}
                    </p>

                    <div className="space-y-2">
                      {content[key].features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C5AF73] mt-1 flex-shrink-0" />
                          <span
                            className="text-[#2a3439] text-sm"
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7f2e7]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="rounded-2xl border border-[#eadfc9] bg-white p-8 shadow-sm text-center">
            <p
              className="uppercase tracking-[0.25em] text-[#C5AF73] text-xs font-semibold mb-4"
            >
              {content.ui.qualityLabel}
            </p>
            <h3
              className="text-3xl text-[#2a3439] mb-4"
            >
              {content.ui.qualityTitle}
            </h3>
            <p
              className="text-gray-500 leading-relaxed mb-7"
            >
              {content.ui.qualityText}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
            >
              {content.ui.qualityCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
