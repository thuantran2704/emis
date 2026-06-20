import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import internationalPatientsContent from '../Translations/internationalPatientsContent';
import consultingTeam from '../pics/consulting-team.jpg';
import xrayConsultation from '../pics/dr-x-ray-consultation.jpg';
import foreignPatientWithDoctor from '../pics/foreign-patient-1-with-dr-tu-smiling.jpg';
import foreignPatientSmile from '../pics/foreign-patient-2.jpg';

export default function InternationalPatients() {
  const language = useSelector((state) => state.language.language);
  const content = internationalPatientsContent[language] || internationalPatientsContent.english;

  const SectionLabel = ({ children }) => (
    <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C5AF73] lg:mb-6 lg:text-[10px] lg:tracking-[0.34em]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      {children}
    </p>
  );

  const SectionTitle = ({ children }) => (
    <h2 className="mb-5 text-[1.45rem] leading-[1.1] text-[#2a3439] lg:mb-8 lg:text-[2.1rem]" style={{ fontFamily: "'Playfair Display', serif" }}>
      {children}
    </h2>
  );

  const CTAButton = ({ variant = 'primary', children, href = '#' }) => {
    const baseClass = "rounded-full px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition lg:px-6 lg:py-3 lg:text-[11px] lg:tracking-[0.16em]";
    const primaryClass = "bg-[#d4af37] text-white hover:bg-[#c19d30]";
    const secondaryClass = "border border-[#d4af37] text-[#2a3439] hover:bg-white";
    const className = `${baseClass} ${variant === 'primary' ? primaryClass : secondaryClass}`;
    
    return (
      <Link to={href} className={className} style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
        {children}
      </Link>
    );
  };

  return (
    <main className="bg-[#f7fafc] text-[#2a3439] min-h-[calc(100vh-4rem)] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-12 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="mb-7 max-w-2xl text-[1.55rem] leading-[1.08] text-[#2a3439] lg:mb-10 lg:text-[2.7rem]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {content.heroTitle}
            </h1>
            <p className="mb-10 max-w-xl text-[13px] leading-6 text-gray-600 lg:mb-12 lg:text-[0.98rem] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
              {content.heroSubtitle}
            </p>
            <div className="flex gap-4 flex-wrap">
              <CTAButton variant="primary" href="/contact">{content.heroPrimaryCTA}</CTAButton>
              <CTAButton variant="secondary" href="/contact">{content.heroSecondaryCTA}</CTAButton>
            </div>
          </div>
          <div className="hidden h-80 overflow-hidden rounded-2xl shadow-md lg:block lg:h-96">
            <img src={consultingTeam} alt={content.heroImageAlt} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="bg-white py-16 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <SectionLabel>Who We Serve</SectionLabel>
          <SectionTitle>{content.whoForTitle}</SectionTitle>
          <div className="mb-8 grid grid-cols-1 gap-3 lg:mb-12 lg:grid-cols-5 lg:gap-4">
            {content.audiences.map((aud, i) => (
              <div key={i} className="rounded-lg border border-[#dbe4ec] bg-[#f7fafc] p-4 text-center lg:p-6">
                <div className="mb-2 text-2xl lg:mb-3 lg:text-3xl">{aud.icon}</div>
                <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#2a3439] lg:text-[12px] lg:tracking-[0.08em]">{aud.label}</p>
              </div>
            ))}
          </div>
          <p className="max-w-3xl text-[13px] leading-6 text-gray-600 lg:text-[15px] lg:leading-8">
            Whether you're living abroad, an expat in Vietnam, or an overseas Vietnamese planning a visit, EMIS provides personalized support for dental care. Learn more about <Link to="/about" className="text-[#d4af37] font-semibold hover:text-[#c19d30] transition">our clinic and approach</Link>, or meet our <Link to="/doctors" className="text-[#d4af37] font-semibold hover:text-[#c19d30] transition">experienced dental team</Link>.
          </p>
        </div>
      </section>

      {/* BEFORE YOU TRAVEL */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-12 lg:py-32">
        <SectionLabel>Preparation</SectionLabel>
        <SectionTitle>{content.beforeTravelTitle}</SectionTitle>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 max-w-2xl text-[14px] leading-6 text-gray-600 lg:mb-7 lg:text-[1rem] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
              {content.beforeTravelText}
            </p>
            <ul className="space-y-3 lg:space-y-4">
              {content.beforeTravelBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#d4af37] font-bold mt-1">✓</span>
                  <span className="text-[13px] leading-6 text-gray-600 lg:text-[15px] lg:leading-7">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-72 overflow-hidden rounded-2xl shadow-md lg:h-96">
            <img src={xrayConsultation} alt={content.beforeTravelImageAlt} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="bg-white py-16 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <SectionLabel>Our Process</SectionLabel>
          <SectionTitle>{content.processTitle}</SectionTitle>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            {content.processSteps.map((step, i) => (
              <div key={i} className="rounded-lg border border-[#dbe4ec] bg-[#f7fafc] p-4 lg:p-7">
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-[11px] font-semibold text-white lg:h-9 lg:w-9 lg:text-[12px]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#2a3439] lg:mb-2 lg:text-[15px] lg:tracking-[0.05em]">{step.title}</h3>
                    <p className="text-[12px] leading-5 text-gray-600 lg:text-[14px] lg:leading-7">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNICATION & COORDINATION */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-12 lg:py-32">
        <SectionLabel>Support</SectionLabel>
        <SectionTitle>{content.communicationTitle}</SectionTitle>
        <p className="mb-8 max-w-2xl text-[14px] leading-6 text-gray-600 lg:mb-14 lg:text-[1rem] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
          {content.communicationIntro} Our team is experienced in supporting international patients and can coordinate treatment planning, logistics, and follow-up care.
        </p>
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
          <div className="group rounded-2xl border border-[#d8e2eb] bg-gradient-to-br from-[#ffffff] to-[#eef4f8] p-5 shadow-sm transition hover:shadow-md lg:p-9">
            <div className="mb-5 flex items-center gap-3 lg:mb-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4af37] text-[14px] text-white lg:h-10 lg:w-10 lg:text-[15px]">✦</div>
              <h3 className="text-[1.05rem] font-semibold text-[#1f2e35] lg:text-[1.35rem]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {content.communicationHeading}
              </h3>
            </div>
            <ul className="space-y-2.5 lg:space-y-3">
              {content.communicationItems.map((item, i) => (
                <li key={i} className="rounded-xl border border-[#dbe4ec] bg-white px-3 py-2.5 lg:px-4 lg:py-3">
                  <span className="text-[11px] uppercase tracking-[0.04em] text-[#33454f] lg:text-[13px] lg:tracking-[0.05em]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="group rounded-2xl border border-[#d8e2eb] bg-gradient-to-br from-[#ffffff] to-[#eef4f8] p-5 shadow-sm transition hover:shadow-md lg:p-9">
            <div className="mb-5 flex items-center gap-3 lg:mb-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2a3439] text-[14px] text-white lg:h-10 lg:w-10 lg:text-[15px]">✈</div>
              <h3 className="text-[1.05rem] font-semibold text-[#1f2e35] lg:text-[1.35rem]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {content.travelSupportHeading}
              </h3>
            </div>
            <ul className="space-y-2.5 lg:space-y-3">
              {content.travelSupportItems.map((item, i) => (
                <li key={i} className="rounded-xl border border-[#dbe4ec] bg-white px-3 py-2.5 lg:px-4 lg:py-3">
                  <span className="text-[11px] uppercase tracking-[0.04em] text-[#33454f] lg:text-[13px] lg:tracking-[0.05em]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AFTER YOU RETURN HOME */}
      <section className="bg-white py-16 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <SectionLabel>Ongoing Care</SectionLabel>
          <SectionTitle>{content.afterTitle}</SectionTitle>
          <p className="mb-8 max-w-2xl text-[14px] leading-6 text-gray-600 lg:mb-14 lg:text-[1rem] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
            {content.afterIntro}
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6">
            {content.afterCards.map((card, i) => (
              <div key={i} className="rounded-lg border border-[#dbe4ec] bg-[#f7fafc] p-4 text-center lg:p-7">
                <div className="mb-2 text-2xl lg:mb-3 lg:text-3xl">{card.icon}</div>
                <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#2a3439] lg:text-[13px] lg:tracking-[0.08em]">{card.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT JOURNEYS */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-12 lg:py-32">
        <SectionLabel>Stories</SectionLabel>
        <SectionTitle>{content.journeysTitle}</SectionTitle>
        <p className="mb-8 max-w-2xl text-[14px] leading-6 text-gray-600 lg:mb-14 lg:text-[1rem] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
          {content.journeysIntro} See how EMIS has helped patients from around the world. EMIS offers a wide range of <Link to="/services" className="text-[#d4af37] font-semibold hover:text-[#c19d30] transition">dental treatment services</Link> to meet diverse needs.
        </p>
        <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {content.patientStories.slice(0, 2).map((story, i) => {
            const storyImages = [foreignPatientWithDoctor, foreignPatientSmile];
            return (
            <div key={i} className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-md lg:max-w-none">
              <div className="hidden overflow-hidden bg-[#f7fafc] md:landscape:block md:landscape:h-[456px] lg:block lg:h-[456px]">
                <img
                  src={storyImages[i % storyImages.length]}
                  alt={story.imageAlt}
                  className={
                    i === 0
                      ? 'block !h-full !w-full !object-cover object-[center_80%]'
                      : 'block !h-full !w-full !object-cover object-center'
                  }
                />
              </div>
              <div className="p-4 landscape:p-5 lg:p-7">
                <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#C5AF73] landscape:text-[9px] lg:mb-2 lg:text-[10px] lg:tracking-[0.24em]">{story.location}</p>
                <h3 className="mb-1.5 text-[13px] font-semibold text-[#2a3439] landscape:text-[15px] lg:mb-2 lg:text-[1rem]" style={{ fontFamily: "'Playfair Display', serif" }}>{story.name}</h3>
                <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.04em] text-[#d4af37] landscape:text-[10px] lg:mb-2 lg:text-[12px] lg:tracking-[0.08em]">{story.treatment}</p>
                <p className="text-[11px] leading-5 text-gray-600 landscape:text-[12px] landscape:leading-6 lg:text-[14px] lg:leading-7">{story.description}</p>
              </div>
            </div>
          );
          })}
        </div>
        <div className="text-center">
          <Link to="/contact" className="inline-block rounded-full border border-[#d4af37] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2a3439] transition hover:bg-white lg:px-6 lg:py-3 lg:text-[11px] lg:tracking-[0.16em]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            {content.journeysCTA}
          </Link>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-white py-16 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="mb-5 text-[1.45rem] leading-[1.1] text-[#2a3439] lg:mb-7 lg:text-[2.1rem]" style={{ fontFamily: "'Playfair Display', serif" }}>
            {content.ctaTitle}
          </h2>
          <p className="mb-7 text-[14px] leading-6 text-gray-600 lg:mb-10 lg:text-[1rem] lg:leading-8" style={{ fontFamily: "'Cormorant', serif" }}>
            {content.ctaText}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <CTAButton variant="primary" href="/contact">{content.ctaPrimaryCTA}</CTAButton>
            <CTAButton variant="secondary" href="/contact">{content.ctaSecondaryCTA}</CTAButton>
          </div>
          <p className="mt-6 text-[10px] leading-5 text-gray-500 lg:mt-8 lg:text-[11px] lg:leading-6">
            {content.ctaNote}
          </p>
        </div>
      </section>
    </main>
  );
}
