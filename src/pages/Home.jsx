import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import homeContent from '../Translations/homeContent';
import heroBackground from '../pics/reception.jpg';
import planningImplant from '../pics/doctor-analyzing-implant.jpg';
import cbctReview from '../pics/dr-x-ray-consultation.jpg';
import onlineConsultation from '../pics/consulting-team.jpg';
import explainPlan from '../pics/doctor-explaining-treatment-x-ray-angle-3.jpg';
import drTuWorking from '../pics/dr-tu-working.jpg';
import drTuPortrait from '../pics/dr-tu-potrait.jpg';
import lifestyleDinner from '../pics/eating-casually.jpeg';
import confidentSmile from '../pics/confident-smile-social.jpeg';
import elderSocializing from '../pics/elder-person-socializing.jpeg';
import pathwayConsult from '../pics/doctor-explaining-procedure-to-patient.jpg';
import treatmentImage from '../pics/dr-at-work-with-nurse.jpg';
import followupImage from '../pics/measuring-result-cbct-x-ray-patient-smiling.jpg';
import longTermCare from '../pics/khach_cuoi_chup_hinh_voi_bs.jpg';
import flagshipJourney from '../pics/implant_irl_another.jpg';
import supportJourney1 from '../pics/denture.jpeg';
import supportJourney2 from '../pics/implant_irl.jpg';
import internationalSupport from '../pics/doctor-discussing-treatment-other-pic-ad-in-the-back.jpg';
import ctaBackground from '../pics/doctor-explaining-procedure-to-patient.jpg';
import ContactForm from '../components/ContactForm';

const locales = {
  vietnamese: 'vi_VN',
  french: 'fr_FR',
  korean: 'ko_KR',
  simplified: 'zh_CN',
  traditional: 'zh_TW',
};

export default function Home() {
  const language = useSelector((state) => state.language.language);
  const page = homeContent[language]?.homepageV2 || homeContent.english.homepageV2;
  const sectionLabelClass = "mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C5AF73]";
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
      <section className="relative mt-[82px] h-[calc(100vh-82px)] w-full overflow-hidden">
        <img
          src={heroBackground}
          alt="EMIS Dental reception hall"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ objectPosition: 'center 62%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.40))' }}
          aria-hidden="true"
        />
        {/* Hero Content - Left Aligned Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 pt-16 sm:px-12 md:px-24 md:pt-0">
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
                fontFamily: "'Poppins', sans-serif",
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
                fontFamily: "'Poppins', sans-serif",
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
                to="/services"
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

        {/* Floating Contact Widgets - Bottom Right - Responsive */}
        <div className="absolute bottom-6 right-6 z-10 flex flex-col gap-3 md:bottom-8 md:right-8 md:gap-[14px]">
          {/* WhatsApp Widget */}
          <a
            href="https://wa.me/61234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-4 rounded-[16px] md:rounded-[18px] bg-[#25D366] px-3 md:px-[18px] py-3 md:py-[18px] text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex h-10 md:h-12 w-10 md:w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
              <svg className="h-5 md:h-6 w-5 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.227l-.356.214-3.71-.973.992 3.605-.235.374a9.861 9.861 0 1513.243-13.241c-.001 0-.001 0-.001 0z" />
              </svg>
            </div>
            <div className="hidden md:flex flex-col gap-0.5">
              <p className="text-sm font-semibold">Chat via WhatsApp</p>
              <p className="text-xs font-medium opacity-90">SPEAK WITH EMIS DENTAL</p>
            </div>
          </a>

          {/* Phone Widget */}
          <a
            href="tel:+61234567890"
            className="flex items-center gap-2 md:gap-4 rounded-[16px] md:rounded-[18px] bg-[#8B6F47] px-3 md:px-[18px] py-3 md:py-[18px] text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="flex h-10 md:h-12 w-10 md:w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
              <svg className="h-5 md:h-6 w-5 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="hidden md:flex flex-col gap-0.5">
              <p className="text-sm font-semibold">Call EMIS Dental</p>
              <p className="text-xs font-medium opacity-90">AUSTRALIA SUPPORT LINE</p>
            </div>
          </a>
        </div>
      </section>

      <section className="bg-[#ffffff] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className={sectionLabelClass}>Why EMIS</p>
          <h2 className="text-3xl font-bold text-[#2a3439] md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{page.confidence.title}</h2>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-gray-500" style={{ fontFamily: "'Cormorant', serif" }}>{page.confidence.intro}</p>
          <p className="mt-3 max-w-4xl text-base leading-relaxed text-gray-500" style={{ fontFamily: "'Cormorant', serif" }}>{page.confidence.copy}</p>

          <div className="mt-10 divide-y divide-[#dbe4ec] border-y border-[#dbe4ec]">
            {[planningImplant, cbctReview, onlineConsultation, explainPlan].map((image, index) => {
              const card = page.confidence.cards[index];
              return (
                <article key={card.title} className="grid gap-5 py-6 md:grid-cols-[220px_1fr] md:items-center md:gap-8">
                  <div className="overflow-hidden rounded-2xl border border-[#dbe4ec] bg-white shadow-sm">
                    <img src={image} alt={card.title} className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2a3439]" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">{card.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f5f9] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className={sectionLabelClass}>Our Team</p>
          <h2 className="text-3xl font-bold text-[#2a3439] md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{page.doctors.title}</h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_1.2fr] lg:items-start">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-[#dbe4ec] shadow-lg">
                <img src={drTuWorking} alt="Dr Tran Minh Tu reviewing implant planning" className="aspect-[5/4] w-full object-cover" />
              </div>

              <div className="border-l-2 border-[#C5AF73] pl-5">
                <h3 className="text-xl font-semibold text-[#2a3439]" style={{ fontFamily: "'Playfair Display', serif" }}>{page.doctors.philosophyTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{page.doctors.philosophyText}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#dbe4ec] bg-white p-6 shadow-sm md:p-8">
              <p className="text-lg leading-relaxed text-gray-500" style={{ fontFamily: "'Cormorant', serif" }}>{page.doctors.intro}</p>

              <div className="mt-8 space-y-6">
                {page.doctors.cards.map((doctor) => (
                  <article key={doctor.name} className="grid gap-4 border-b border-[#dbe4ec] pb-6 last:border-b-0 sm:grid-cols-[152px_1fr] sm:items-start sm:gap-5">
                    <img
                      src={drTuPortrait}
                      alt={doctor.name}
                      className="h-[114px] w-full rounded-2xl border border-[#dbe4ec] object-cover sm:h-[108px] sm:w-[152px]"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-[#2a3439]" style={{ fontFamily: "'Playfair Display', serif" }}>{doctor.name}</h3>
                      {doctor.role && <p className="mt-1 text-sm font-semibold text-[#C5AF73]">{doctor.role}</p>}
                      {doctor.focus && <p className="mt-2 text-sm leading-relaxed text-gray-500">{doctor.focus}</p>}
                      {doctor.summary && <p className="mt-2 text-sm leading-relaxed text-gray-500">{doctor.summary}</p>}
                      {doctor.languages && <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#8aa0b5]">{doctor.languages}</p>}
                    </div>
                  </article>
                ))}
              </div>

              <Link to="/doctors" className="mt-7 inline-block rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c19d30]">
                {page.doctors.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img src={lifestyleDinner} alt="Patient enjoying daily life confidently" className="h-full w-full object-cover" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#16324a] md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{page.situations.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-[#5d7388]">{page.situations.intro}</p>

            <div className="mt-6 space-y-5 border-l-2 border-[#e5d6b0] pl-5">
              {page.situations.cards.map((item) => (
                <article key={item.title} className="pb-4 border-b border-[#e6edf3] last:border-b-0">
                  <h3 className="text-lg font-semibold text-[#1d3953]" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5d7388]">{item.text}</p>
                </article>
              ))}
            </div>

            <Link to="/services" className="mt-6 inline-block rounded-full border border-[#9ab1c5] bg-white px-6 py-3 text-sm font-semibold text-[#1f3b57] transition hover:bg-[#f2f7fb]">
              {page.situations.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f5f9] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#16324a] md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{page.pathways.title}</h2>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[#516b83]">{page.pathways.intro}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[confidentSmile, elderSocializing, pathwayConsult].map((image, index) => {
              const card = page.pathways.cards[index];
              return (
                <article key={card.title} className="overflow-hidden rounded-2xl border border-[#d9e4ed] bg-white shadow-sm">
                  <img src={image} alt={card.title} className="h-44 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#1d3953]" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                    <p className="mt-2 text-sm font-medium text-[#6f8da6]">{card.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#5d7388]">{card.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#16324a] md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{page.journey.title}</h2>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[#516b83]">{page.journey.intro}</p>

          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {[onlineConsultation, cbctReview, treatmentImage, followupImage, longTermCare].map((image, index) => {
              const step = page.journey.steps[index];
              return (
                <article key={step.title} className="rounded-2xl border border-[#dbe6ef] bg-[#f9fcff] p-3">
                  <img src={image} alt={step.title} className="h-28 w-full rounded-xl object-cover" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7b95ab]">{step.step}</p>
                  <h3 className="mt-1 text-base font-semibold text-[#1d3953]" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5d7388]">{step.text}</p>
                </article>
              );
            })}
          </div>

          <Link to="/contact" className="mt-8 inline-block rounded-full bg-[#c99533] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b4842b]">
            {page.journey.cta}
          </Link>
        </div>
      </section>

      <section className="bg-[#f1f5f9] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[#16324a] md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{page.patientJourneys.title}</h2>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-[#516b83]">{page.patientJourneys.intro}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_1fr_1fr]">
            <article className="overflow-hidden rounded-2xl border border-[#d9e4ed] bg-white shadow-sm">
              <img src={flagshipJourney} alt={page.patientJourneys.featured.title} className="h-60 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b95ab]">{page.patientJourneys.featured.tag}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#1d3953]" style={{ fontFamily: "'Playfair Display', serif" }}>{page.patientJourneys.featured.title}</h3>
                <p className="mt-2 text-sm text-[#5d7388]">{page.patientJourneys.featured.subtitle}</p>
                <p className="mt-1 text-sm text-[#6f8da6]">{page.patientJourneys.featured.country}</p>
              </div>
            </article>

            {[supportJourney1, supportJourney2].map((image, index) => {
              const journey = page.patientJourneys.supporting[index];
              return (
                <article key={journey.title} className="overflow-hidden rounded-2xl border border-[#d9e4ed] bg-white shadow-sm">
                  <img src={image} alt={journey.title} className="h-40 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#1d3953]" style={{ fontFamily: "'Playfair Display', serif" }}>{journey.title}</h3>
                    <p className="mt-2 text-sm text-[#5d7388]">{journey.subtitle}</p>
                    <p className="mt-1 text-sm text-[#6f8da6]">{journey.country}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Link to="/about" className="rounded-full border border-[#9ab1c5] bg-white px-6 py-3 text-sm font-semibold text-[#1f3b57] transition hover:bg-[#f2f7fb]">
              {page.patientJourneys.cta}
            </Link>
            <p className="max-w-2xl text-sm text-[#627a90]">{page.patientJourneys.privacyNote}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#16324a] md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{page.international.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#516b83]">{page.international.intro}</p>
            <ul className="mt-6 space-y-3">
              {page.international.points.map((item) => (
                <li key={item.title} className="rounded-xl border border-[#dde7ef] bg-[#f9fcff] p-4">
                  <h3 className="text-base font-semibold text-[#1d3953]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#5d7388]">{item.text}</p>
                </li>
              ))}
            </ul>
            <Link to="/visitor-program" className="mt-6 inline-block rounded-full bg-[#15344f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#112c42]">
              {page.international.cta}
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img src={internationalSupport} alt="International patient consultation and planning" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#f1f5f9] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-[#16324a] md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{page.faq.title}</h2>
          <div className="mt-8 space-y-4">
            {page.faq.items.map((item) => (
              <details key={item.question} className="rounded-2xl border border-[#dbe6ef] bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#1d3953]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#5d7388]">{item.answer}</p>
              </details>
            ))}
          </div>
          <Link to="/contact" className="mt-8 inline-block rounded-full border border-[#9ab1c5] bg-white px-6 py-3 text-sm font-semibold text-[#1f3b57] transition hover:bg-[#f2f7fb]">
            {page.faq.cta}
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#2a3439] py-16 text-white md:py-20">
        <img src={ctaBackground} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>{page.finalCta.title}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#d6e2ed]">{page.finalCta.description}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c19d30]">
              {page.finalCta.primaryCta}
            </Link>
            <Link to="/contact" className="rounded-full border border-[#95acc1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              {page.finalCta.secondaryCta}
            </Link>
          </div>

          <div className="mt-8 space-y-4 rounded-3xl border border-white/20 bg-[#1c2832]/70 p-6 backdrop-blur-sm md:p-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#d1e2f0]">{page.finalCta.supportTitle}</p>
              <ul className="mt-4 grid gap-2 text-sm text-[#edf3f8] sm:grid-cols-2">
                {page.finalCta.supportItems.map((item) => (
                  <li key={item} className="rounded-xl border border-white/15 bg-white/5 px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>
            <p className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm leading-relaxed text-[#dce7f1]">{page.finalCta.importantNote}</p>
          </div>

          <div className="mt-10 rounded-3xl border border-white/25 bg-[#f8fbff] p-4 text-[#1f2d3d] shadow-[0_12px_30px_rgba(11,24,38,0.25)] md:p-6">
            <ContactForm embedded />
          </div>
        </div>
      </section>
    </main>
  );
}
