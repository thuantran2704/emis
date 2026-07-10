import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import homeContent from '../Translations/homeContent';
import heroBackground from '../pics/doctors-discussing-implants-engaged.jpg';
import heroBackgroundMobile from '../pics/doctor-nurse-mid-surgery-no-patient-mouth-visible.jpg';
import confidencePortrait from '../pics/foreign-patient-1-with-dr-tu-smiling.jpg';
import implantIntroImage from '../pics/all-on-4-implant.jpg';
import allon6Image from '../pics/allon6.jpeg';
import cbctReview from '../pics/dr-x-ray-consultation.jpg';
import onlineConsultation from '../pics/consulting-team.jpg';
import elderCoupleSmiling from '../pics/elder-couple-smiling-outdoors-healthy-walking.jpeg';
import confidentSmile from '../pics/confident-smile-social.jpeg';
import elderSocializing from '../pics/elder-person-socializing.jpeg';
import pathwayConsult from '../pics/doctor-explaining-procedure-to-patient.jpg';
import treatmentImage from '../pics/dr-at-work-with-nurse.jpg';
import followupImage from '../pics/measuring-result-cbct-x-ray-patient-smiling.jpg';
import longTermCare from '../pics/khach_cuoi_chup_hinh_voi_bs.jpg';
import internationalSupport from '../pics/doctor-discussing-treatment-other-pic-ad-in-the-back.jpg';
import ctaBackground from '../pics/doctor-explaining-procedure-to-patient.jpg';
import ContactForm from '../components/ContactForm';
import ImplantPlannerBanner from '../components/implants_banner';
import { DOCTORS, getDoctorTranslation } from '../data/doctors';
import serviceImplant from '../pics/implant-illustration.jpg';
import chatPreTrip from '../pics/chat-pic-timeline-discussion-pre-trip.jpeg';
import chatMedHistory from '../pics/chat-pic-checking-med-history.jpeg';
import chatAirport from '../pics/chat-pic-pick-up-airport.jpeg';
import chatAftercare from '../pics/chat-pic-aftercare.jpeg';
import PicSlider from '../components/PicSlider';
import Text from '../components/Text';
import CtaButton from '../components/CtaButton';
import Section from '../components/Section';

const locales = {
  vietnamese: 'vi_VN',
  french: 'fr_FR',
  korean: 'ko_KR',
  simplified: 'zh_CN',
  traditional: 'zh_TW',
};

export default function Home() {
  const language = useSelector((state) => state.language.language);
  const localizedHome = homeContent[language] || homeContent.english;
  const page = localizedHome.homepageV2 || homeContent.english.homepageV2;
  const [activeSlide, setActiveSlide] = useState(0);
  const journeyPics = [chatPreTrip, chatMedHistory, chatAirport, chatAftercare];
  const implantSlideImages = [serviceImplant, implantIntroImage, allon6Image];
  const heroDescription = page.hero.description.length > 95
    ? `${page.hero.description.slice(0, 92).trim()}...`
    : page.hero.description;

  return (
    <main className="bg-[#f7fafc] text-[#2a3439]">
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emisdental.com" />
        <meta property="og:image" content="https://www.emisdental.com/og-image.jpg" />
        <meta property="og:locale" content={locales[language] || 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://emisdental.com" />
      </Helmet>

      {/* Premium Hero Section with 100vh full-screen background */}
      <section className="relative mt-[72px] min-h-[calc(100vh-72px)] w-full overflow-hidden">
        <img
          src={heroBackgroundMobile}
          alt="EMIS Dental surgical team during a procedure"
          className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
        />
        <img
          src={heroBackground}
          alt="EMIS Dental reception hall"
          className="absolute inset-0 hidden h-full w-full object-cover object-right lg:block lg:scale-110"
          style={{ objectPosition: 'right 62%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.40))' }}
          aria-hidden="true"
        />
        {/* Hero Content - Left Aligned Overlay */}
        <div className="relative z-10 flex min-h-[calc(100vh-72px)] flex-col items-start justify-center px-6 py-16 sm:px-12 md:px-24 md:py-0">
          <div className="max-w-[320px] md:max-w-[420px]">
            {/* Google Rating */}
            <div className="mb-4 md:mb-6 flex items-center gap-2">
              <div className="flex flex-col">
                <p className="text-xs md:text-sm font-medium text-white">Google Rating – 5.0</p>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base md:text-lg text-[#C89D2D]">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-white"
              style={{
                lineHeight: '1.12',
              }}
            >
              {page.hero.title}
            </h1>

            {/* Description */}
            <p
              className="mt-3 md:mt-4 text-[11px] sm:text-xs md:text-sm font-normal leading-relaxed text-white max-w-full"
              style={{
                color: 'rgba(255,255,255,.88)',
              }}
            >
              {heroDescription}
            </p>

            {/* CTA Buttons - Responsive Stacking */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              {/* Primary Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C89D2D] px-5 md:px-7 py-2 md:py-3 text-xs md:text-sm font-semibold text-white transition-all duration-200 hover:bg-[#B8892A] hover:shadow-lg w-full sm:w-auto"
                style={{ height: '44px', minHeight: '44px' }}
              >
                {page.hero.primaryCta}
                <svg className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Secondary Button */}
              <Link
                to="/restorative-dentistry"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-5 md:px-7 py-2 md:py-3 text-xs md:text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 w-full sm:w-auto"
                style={{
                  height: '44px',
                  minHeight: '44px',
                  borderColor: 'rgba(255,255,255,.5)',
                }}
              >
                {page.hero.secondaryCta}
                <svg className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Trust: Why EMIS over everyone else */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Text variant="eyebrow" className="mb-4">{page.confidence.label}</Text>
            <Text variant="title">{page.confidence.title}</Text>
            <Text variant="intro" className="mt-4">{page.confidence.intro}</Text>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="grid gap-3 sm:grid-cols-2 sm:auto-rows-fr">
              {page.confidence.cards.map((card) => (
                <article
                  key={card.title}
                  className="group flex flex-col rounded-2xl border border-[#e4ebf1] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C5AF73] hover:shadow-md"
                >
                  <span className="block h-1 w-8 rounded-full bg-[#C5AF73] transition-all group-hover:w-12" />
                  <Text variant="cardTitle" className="mt-4">{card.title}</Text>
                  <Text variant="description" className="mt-2">{card.text}</Text>
                </article>
              ))}
            </div>

            <div className="relative hidden overflow-hidden rounded-2xl shadow-sm lg:block">
              <img src={confidencePortrait} alt={page.confidence.title} className="absolute inset-0 h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </Section>

      {/* 3 — Credibility: Meet the doctors */}
      <Section tone="cool">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Text variant="eyebrow" className="mb-4">{page.doctors.label}</Text>
            <Text variant="title" size="titleSm">{page.doctors.title}</Text>
            <Text variant="intro" className="mt-4">{page.doctors.intro}</Text>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {DOCTORS.map((doctor) => {
              const t = getDoctorTranslation(doctor, language);
              return (
              <Link
                key={doctor.id}
                to={doctor.slug}
                className="group grid gap-3 rounded-3xl border border-[#dbe4ec] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C5AF73] hover:shadow-md sm:grid-cols-[minmax(110px,140px)_1fr] sm:items-start sm:gap-4 md:p-6"
              >
                <img
                  src={doctor.portrait}
                  alt={t.name}
                  className="w-full max-w-full rounded-2xl border border-[#dbe4ec] bg-white object-contain"
                />
                <div>
                  <Text variant="cardTitle" size="sm" className="transition group-hover:text-[#C5AF73]">{t.name}</Text>
                  {t.role && <p className="mt-1 text-[11px] font-semibold text-[#C5AF73]">{t.role}</p>}
                  {t.focus && <p className="mt-1.5 text-[11px] leading-relaxed text-gray-500">{t.focus}</p>}
                  {t.summary && <p className="mt-1.5 text-[11px] leading-relaxed text-gray-500">{t.summary}</p>}
                  {t.languages && <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#8aa0b5]">{t.languages}</p>}
                  {t.cta && (
                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#C5AF73] transition group-hover:gap-2">
                      {t.cta}
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 4 — Empathy: Mirror the visitor's pain back at them */}
      <Section tone="white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.1fr_1fr] md:items-stretch">
          <div className="hidden overflow-hidden rounded-3xl shadow-lg md:block">
            <img src={elderCoupleSmiling} alt="Patient enjoying daily life confidently" className="h-full w-full object-cover" />
          </div>

          <div>
            <Text variant="title" tone="headingBlue" align="center">{page.situations.title}</Text>
            <Text variant="intro" align="center" className="mt-4">{page.situations.intro}</Text>

            <div className="mt-6 space-y-5 border-l-2 border-[#e5d6b0] pl-5">
              {page.situations.cards.map((item) => (
                <article key={item.title} className="pb-4 border-b border-[#e6edf3] last:border-b-0">
                  <Text variant="cardTitle" tone="headingSlate">{item.title}</Text>
                  <Text variant="description" tone="slate" className="mt-2">{item.text}</Text>
                </article>
              ))}
            </div>

            <CtaButton to="/restorative-dentistry" variant="outline" className="mt-6">
              {page.situations.cta}
            </CtaButton>
          </div>
        </div>
      </Section>

      {/* 5 — Decision: Help them match situation to treatment */}
      <Section tone="cool">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Text variant="title" tone="headingBlue">{page.pathways.title}</Text>
            <Text variant="intro" className="mt-4">{page.pathways.intro}</Text>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[confidentSmile, elderSocializing, pathwayConsult].map((image, index) => {
              const card = page.pathways.cards[index];
              return (
                <article key={card.title} className="overflow-hidden rounded-2xl border border-[#d9e4ed] bg-white shadow-sm">
                  <img src={image} alt={card.title} className="hidden h-44 w-full object-cover md:block" />
                  <div className="p-6">
                    <Text variant="cardTitle" size="lg" tone="headingSlate">{card.title}</Text>
                    <Text variant="cardSubtitle" tone="steel" className="mt-2">{card.subtitle}</Text>
                    <Text variant="description" tone="slate" className="mt-3">{card.text}</Text>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 6 — Solution: Implant specialist slider */}
      <Section tone="light">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Text variant="eyebrow" className="mb-4">{page.implantSpecialist.eyebrow}</Text>
            <Text variant="title">{page.implantSpecialist.title}</Text>
            <Text variant="intro" className="mt-4">{page.implantSpecialist.intro}</Text>
          </div>

          {/* Tab pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {page.implantSpecialist.slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeSlide === i
                    ? 'bg-[#2a3439] text-white shadow'
                    : 'border border-[#d0dce8] text-[#2a3439] hover:border-[#C5AF73] hover:text-[#C5AF73]'
                }`}
              >
                {slide.tag}
              </button>
            ))}
          </div>

          {/* Slides */}
          <div className="mt-10">
            {page.implantSpecialist.slides.map((slide, i) => (
              <div
                key={i}
                className={`grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center transition-all duration-300 ${activeSlide === i ? 'block' : 'hidden'}`}
              >
                <div>
                  <Text as="span" variant="eyebrow">{slide.tag}</Text>
                  <Text as="h3" variant="title" className="mt-2">{slide.title}</Text>
                  <Text variant="subtitle" className="mt-1">{slide.subtitle}</Text>
                  <Text variant="description" size="base" className="mt-4">{slide.text}</Text>
                  <CtaButton to={slide.href} variant="secondary" withArrow className="mt-7">
                    {slide.cta}
                  </CtaButton>
                </div>
                <div className="overflow-hidden rounded-3xl shadow-sm">
                  <img
                    src={implantSlideImages[i]}
                    alt={slide.title}
                    className="h-72 w-full object-contain bg-white p-4 lg:h-96"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {page.implantSpecialist.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all duration-200 ${activeSlide === i ? 'w-6 bg-[#C5AF73]' : 'w-2 bg-[#d0dce8]'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* 7 — Process: Reduce anxiety about what happens next */}
      <Section tone="white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Text variant="title" tone="headingBlue">{page.journey.title}</Text>
            <Text variant="intro" className="mt-4">{page.journey.intro}</Text>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {[onlineConsultation, cbctReview, treatmentImage, followupImage, longTermCare].map((image, index) => {
              const step = page.journey.steps[index];
              return (
                <article key={step.title} className="rounded-2xl border border-[#dbe6ef] bg-[#f9fcff] p-3">
                  <img src={image} alt={step.title} className="hidden h-28 w-full rounded-xl object-cover md:block" />
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7b95ab]">{step.step}</p>
                  <h3 className="mt-1 text-sm font-semibold text-[#1d3953]">{step.title}</h3>
                  <Text variant="description" tone="slate" className="mt-2">{step.text}</Text>
                </article>
              );
            })}
          </div>

          <CtaButton to="/contact" variant="primary" className="mt-8">
            {page.journey.cta}
          </CtaButton>
        </div>
      </Section>

      {/* 8 — Real Patient Journeys */}
      <PicSlider pics={journeyPics} content={page.realJourneys} />

      {/* 9 — Logistics: Remove the overseas barrier */}
      <Section tone="cool">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:landscape:grid-cols-2 lg:landscape:items-stretch">
          <div className="mx-auto max-w-2xl text-center lg:landscape:mx-0 lg:landscape:text-left">
            <Text variant="title" tone="headingBlue">{page.international.title}</Text>
            <Text variant="intro" className="mt-4">{page.international.intro}</Text>
            <ul className="mt-6 space-y-2.5 text-left">
              {page.international.points.map((item) => (
                <li key={item.title} className="flex gap-3 border-l-2 border-[#d4af37] pl-4 py-1">
                  <div>
                    <h3 className="text-sm font-semibold text-[#16324a]">{item.title}</h3>
                    <Text variant="description" className="mt-0.5">{item.text}</Text>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/visitor-program" className="mt-7 inline-block rounded-full bg-[#15344f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#112c42]">
              {page.international.cta}
            </Link>
          </div>

          <div className="hidden overflow-hidden rounded-3xl shadow-lg h-full lg:landscape:block">
            <img src={internationalSupport} alt="International patient consultation and planning" className="h-full w-full object-cover object-center" />
          </div>
        </div>
      </Section>

      <ImplantPlannerBanner />

      {/* 10 — Objections: FAQ */}
      <Section tone="white">
        <div className="mx-auto max-w-6xl px-6">
          <Text variant="title" tone="headingBlue" align="center">{page.faq.title}</Text>
          <div className="mt-8 space-y-4">
            {page.faq.items.map((item) => (
              <details key={item.question} className="rounded-2xl border border-[#dbe6ef] bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-semibold text-[#1d3953]">
                  {item.question}
                </summary>
                <Text variant="description" tone="slate" className="mt-3">{item.answer}</Text>
              </details>
            ))}
          </div>
          <CtaButton to="/faq" variant="outline" className="mt-8">
            {page.faq.cta}
          </CtaButton>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-[#2a3439] py-16 text-white md:py-20">
        <img src={ctaBackground} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Text variant="title" tone="white">{page.finalCta.title}</Text>
          <Text variant="description" size="base" tone="invert" className="mt-4 max-w-3xl">{page.finalCta.description}</Text>

          <div className="mt-6 flex flex-wrap gap-4">
            <CtaButton to="/contact" variant="primary">
              {page.finalCta.primaryCta}
            </CtaButton>
            <CtaButton to="/contact" variant="ghostWhite">
              {page.finalCta.secondaryCta}
            </CtaButton>
          </div>

          <div className="mt-8 space-y-4 rounded-3xl border border-white/20 bg-[#1c2832]/70 p-6 backdrop-blur-sm md:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#d1e2f0]">{page.finalCta.supportTitle}</p>
              <ul className="mt-4 grid gap-2 text-xs text-[#edf3f8] sm:grid-cols-2">
                {page.finalCta.supportItems.map((item) => (
                  <li key={item} className="rounded-xl border border-white/15 bg-white/5 px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>
            <Text variant="description" tone="dim" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">{page.finalCta.importantNote}</Text>
          </div>

          <div className="mt-10 rounded-3xl border border-white/25 bg-[#f8fbff] p-4 text-[#1f2d3d] shadow-[0_12px_30px_rgba(11,24,38,0.25)] md:p-6">
            <ContactForm embedded />
          </div>
        </div>
      </section>
    </main>
  );
}
