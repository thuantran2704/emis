import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import CtaButton from '../components/CtaButton';
import PicSlider from '../components/PicSlider';
import patientCase1Content from '../Translations/patientCase1Content';
// Only use assets named patient-case1-*.
import timelineChatImg from '../pics/patient-case1-timeline-chat.png';
import bloodTestImg from '../pics/patient-case1-blood-test.png';
import airportPickupImg from '../pics/patient-case1-airport-pickup.png';
import prescriptionChatImg from '../pics/patient-case1-prescription-chat.png';
import thankYouChatImg from '../pics/patient-case1-thank-you-followup-chat.png';
import beforeCtImg from '../pics/patient-case1-before-CT.png';
import afterCtImg from '../pics/patient-case1-after-CT.png';

// Ordered to align with each journey step (Before arrival, Medical readiness,
// Arrival, After surgery, Follow-up).
const journeyImages = [
  timelineChatImg,
  bloodTestImg,
  airportPickupImg,
  prescriptionChatImg,
  thankYouChatImg,
];

export default function PatientCase1() {
  const language = useSelector((state) => state.language.language);
  const content = patientCase1Content[language];

  const SectionLabel = ({ children }) => (
    <p className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold">
      {children}
    </p>
  );

  return (
    <main className="bg-[#f7f2e7]">
      <Helmet>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription} />
      </Helmet>

      <div className="h-20 md:h-24" />

      {/* HERO HEADER */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <SectionLabel>{content.label}</SectionLabel>
          <h1 className="text-4xl md:text-5xl text-[#2a3439] mb-8 leading-tight">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {content.headline}
          </p>
          <div className="w-12 h-px bg-[#d4af37] mx-auto mt-10" />
        </div>
      </section>

      {/* BEFORE / AFTER CT */}
      <section className="bg-white pb-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src={beforeCtImg}
                alt="CT scan before treatment showing long-term tooth loss and bone loss"
                className="w-full h-[360px] object-cover object-center"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src={afterCtImg}
                alt="CT scan after implant placement for the patient's full rehabilitation"
                className="w-full h-[360px] object-cover object-center"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed text-center mt-6 max-w-3xl mx-auto">
            {content.ct.caption}
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="py-24 md:py-28 bg-[#f7f2e7]">
        <div className="max-w-3xl mx-auto px-8">
          <SectionLabel>{content.story.label}</SectionLabel>
          <div className="space-y-6">
            {content.story.paragraphs.map((para, idx) => (
              <p key={idx} className="text-xl text-gray-500 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT STEPS */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <SectionLabel>{content.steps.label}</SectionLabel>
          <div className="space-y-3">
            {content.steps.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#C5AF73] text-xs mt-1">●</span>
                <span className="text-sm md:text-base text-[#2a3439] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT JOURNEY */}
      <PicSlider
        pics={journeyImages}
        content={{
          label: content.journey.label,
          pic: content.journey.steps.map((step) => ({
            title: step.tag,
            description: step.text,
          })),
        }}
        className="bg-[#f7f2e7] py-24 md:py-28"
      />

      {/* RESULTS */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <SectionLabel>{content.results.label}</SectionLabel>
          <div className="space-y-3">
            {content.results.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#C5AF73] text-xs mt-1">●</span>
                <span className="text-sm md:text-base text-[#2a3439] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT QUOTE */}
      <section className="py-24 md:py-28 bg-[#f7f2e7]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <SectionLabel>{content.quote.label}</SectionLabel>
          <blockquote className="text-2xl md:text-3xl text-[#2a3439] leading-relaxed italic">
            &ldquo;{content.quote.text}&rdquo;
          </blockquote>
          <div className="w-12 h-px bg-[#d4af37] mx-auto mt-10" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl text-[#2a3439] mb-10">
            {content.cta.title}
          </h2>
          <CtaButton to="/contact" variant="primary">
            {content.cta.button}
          </CtaButton>
        </div>
      </section>
    </main>
  );
}
