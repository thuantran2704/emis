import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import homeContent from '../Translations/homeContent';
import heroConsultation from '../pics/doctor-reviewing-x-ray-with-patient-explaining-treatment.jpg';
import planningImplant from '../pics/doctor-analyzing-implant.jpg';
import cbctReview from '../pics/dr-x-ray-consultation.jpg';
import onlineConsultation from '../pics/consulting-team.jpg';
import explainPlan from '../pics/doctor-explaining-treatment-x-ray-angle-3.jpg';
import drTuWorking from '../pics/dr-tu-working.jpg';
import drTuPortrait from '../pics/dr-tu-potrait.jpg';
import drVanPortrait from '../pics/doctor-phat.jpg';
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

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7fafc] pt-20 text-[#2a3439]">
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

      <section className="bg-[#f7fafc] py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className={sectionLabelClass}>EMIS Dental</p>
            <h1 className="text-4xl font-bold leading-tight text-[#2a3439] md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              {page.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-500" style={{ fontFamily: "'Cormorant', serif" }}>{page.hero.subtitle}</p>
            <p className="mt-4 text-base leading-relaxed text-gray-500" style={{ fontFamily: "'Cormorant', serif" }}>{page.hero.description}</p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {page.hero.highlights.map((item) => (
                <li key={item} className="rounded-xl border border-[#dbe4ec] bg-white px-4 py-3 text-sm font-semibold text-[#2a3439] shadow-sm">
                  ✓ {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c19d30]">
                {page.hero.primaryCta}
              </Link>
              <Link to="/contact" className="rounded-full border border-[#d4af37] bg-white px-6 py-3 text-sm font-semibold text-[#2a3439] transition hover:bg-[#eef3f7]">
                {page.hero.secondaryCta}
              </Link>
            </div>

            <p className="mt-6 border-l-2 border-[#C5AF73] pl-4 text-sm leading-relaxed text-gray-500" style={{ fontFamily: "'Cormorant', serif" }}>{page.hero.trustStatement}</p>
          </div>

          <div className="overflow-hidden rounded-[28px] shadow-[0_20px_55px_rgba(16,43,72,0.2)]">
            <img src={heroConsultation} alt="Doctor reviewing CBCT and X-ray with a patient" className="h-full w-full object-cover" />
          </div>
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
                {page.doctors.cards.map((doctor, index) => (
                  <article key={doctor.name} className="grid gap-4 border-b border-[#dbe4ec] pb-6 last:border-b-0 sm:grid-cols-[152px_1fr] sm:items-start sm:gap-5">
                    <img
                      src={index === 0 ? drTuPortrait : drVanPortrait}
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
