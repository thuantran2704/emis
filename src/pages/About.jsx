import React from 'react';
import { Link } from 'react-router-dom';
import aboutContent from '../Translations/aboutContent';
import equipmentContent from '../Translations/equipmentContent';
import ServicesSlider from '../components/ServicesSlider';
import Text from '../components/Text';
import consultationImage from '../pics/doctor-explaining-procedure-to-patient.jpg';
import planningImage from '../pics/dr-tu-working.jpg';
import technologyImage from '../pics/measuring-result-cbct-x-ray-patient-smiling.jpg';
import teamImage from '../pics/consulting-team.jpg';
import internationalImage from '../pics/Phong-cho-waiting-room-Emis.jpg';
import safetyImage from '../pics/sterile-room-phong-khu-trung.jpg';
import vatechImg from '../pics/vatech.jpg';
import kehongImg from '../pics/ghe-ngoi-nha-khoa-kehong.jpg';
import hyperlightImg from '../pics/hyperlight.jpg';
import uvStorageImg from '../pics/uvStorage.jpg';
import hyundaiImg from '../pics/hyundai.jpg';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const About = () => {
  const language = useSelector((state) => state.language.language);
  const eqContent = equipmentContent[language] || equipmentContent.english;
  const equipmentList = [
    { key: 'vatech', image: vatechImg },
    { key: 'kehong', image: kehongImg },
    { key: 'hyperlight', image: hyperlightImg },
    { key: 'uvStorage', image: uvStorageImg },
    { key: 'hyundai', image: hyundaiImg },
  ];
  const eqServices = equipmentList.map(({ key }) => ({
    name: eqContent[key]?.title || key,
    desc: eqContent[key]?.equipmentIntro || '',
  }));
  const eqImages = equipmentList.map(({ image }) => image);
  const eqAlts = equipmentList.map(({ key }) => eqContent[key]?.title || key);

  const content = aboutContent[language] || aboutContent.english;

  const SectionLabel = ({ children }) => (
    <Text variant="eyebrow" size="micro" className="mb-6">{children}</Text>
  );

  const SectionTitle = ({ children }) => (
    <Text variant="title" weight="normal" size="aboutTitle" className="mb-8">{children}</Text>
  );

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7fafc] pt-20">
      <Helmet>
        <title>{content.metaTitle || content.heroTitle}</title>
        <meta name="description" content={content.metaDescription || ''} />
      </Helmet>

      {/* HERO */}
      <section className="overflow-hidden bg-white">
        <div className="px-6 py-20 md:py-28 max-w-4xl mx-auto text-center">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#C5AF73]">
            Who We Are
          </p>
          <h1 className="mb-8 text-3xl font-normal leading-tight text-[#16324a] md:text-5xl">
            {content.heroTitle}
          </h1>
          <p className="mb-12 mx-auto max-w-2xl text-[15px] leading-relaxed text-[#5d7388] md:text-[18px]">
            {content.heroSubtitle}
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition shadow-lg"
            >
              {content.heroPrimaryCTA}
            </Link>
            <Link
              to="/doctors"
              className="px-7 py-3.5 rounded-full border border-[#15344f] text-[#15344f] text-sm font-semibold hover:bg-[#15344f]/10 transition"
            >
              {content.heroSecondaryCTA}
            </Link>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-12">
          <div>
            <SectionLabel>{content.labels?.approach || 'Our Approach'}</SectionLabel>
            <SectionTitle>{content.approachTitle}</SectionTitle>
            <Text variant="description" size="p15">
              {content.approachText}
            </Text>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm aspect-[3/2]">
            <img
              src={consultationImage}
              alt="Clinician and nurse caring for a patient at EMIS"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-[center_58%] md:object-center"
            />
          </div>
        </div>
      </section>

      {/* WHY PLANNING MATTERS */}
      <section className="py-16 md:py-20 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-12">
          <div>
            <SectionLabel>{content.labels?.planning || 'Planning'}</SectionLabel>
            <SectionTitle>{content.planningTitle}</SectionTitle>
            <div className="space-y-5">
              {content.planningBullets.map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-[#dbe4ec]">
                  <Text variant="cardTitle" weight="normal" size="bullet" className="mb-2.5">
                    {b.title}
                  </Text>
                  <Text variant="description" size="p13">
                    {b.text}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm aspect-[3/2]">
            <img
              src={planningImage}
              alt="Dr. Tran Minh Tu reviewing a treatment plan at EMIS"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & SAFETY */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-12">
          <div>
            <SectionLabel>{content.labels?.technology || 'Technology'}</SectionLabel>
            <SectionTitle>{content.technologyTitle}</SectionTitle>
            <Text variant="description" size="p15" className="mb-10">
              {content.technologyIntro}
            </Text>
            <ServicesSlider
              services={eqServices}
              serviceImages={eqImages}
              serviceAltTexts={eqAlts}
              bookNowText={language === 'vietnamese' ? 'Đặt Lịch' : 'Book Now'}
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm aspect-[3/2]">
            <img
              src={technologyImage}
              alt="Patient undergoing a CBCT scan at EMIS"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 md:py-20 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-12">
          <div>
            <SectionLabel>{content.labels?.team || 'Our Team'}</SectionLabel>
            <SectionTitle>{content.teamTitle}</SectionTitle>
            <Text variant="description" size="p15" className="mb-12">
              {content.teamIntro}
            </Text>
            <div className="space-y-6">
              {content.teamMembers.map((m, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm">
                  <Text variant="cardTitle" weight="normal" size="cardLg" className="mb-1.5">
                    {m.name}
                  </Text>
                  <p
                    className="text-xs text-[#C5AF73] font-semibold mb-3 uppercase tracking-widest"
                  >
                    {m.role}
                  </p>
                  <Text variant="description" size="p13">
                    {m.description}
                  </Text>
                  {m.cta && (
                    <div className="mt-5">
                      <Link
                        to="/contact"
                        className="inline-flex px-5 py-2.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-[#d4af37] hover:text-white transition"
                      >
                        {m.cta}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm aspect-[3/2]">
            <img
              src={teamImage}
              alt="EMIS patient support team at the clinic reception"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* SUPPORT FOR OVERSEAS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 grid gap-12 lg:landscape:grid-cols-2 lg:landscape:items-center">
          <div className="text-center lg:landscape:text-left">
            <SectionLabel>{content.labels?.international || 'International Patients'}</SectionLabel>
            <SectionTitle>{content.internationalTitle}</SectionTitle>
            <Text variant="description" size="p15" className="mb-10">
              {content.internationalIntro}
            </Text>
            <div className="space-y-2.5 text-left max-w-xl mx-auto">
              {content.internationalBullets.map((b, i) => (
                <div
                  key={i}
                  className="border-l-2 border-[#d4af37] pl-4 py-1.5"
                >
                  <Text as="span" variant="description" size="p14" tone="heading">{b}</Text>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/3] lg:landscape:aspect-auto lg:landscape:h-[420px]">
            <img
              src={internationalImage}
              alt="Waiting and reception area at EMIS Dental"
              loading="lazy"
              decoding="async"
              className="block w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* TRUST & TRANSPARENCY */}
      <section className="py-16 md:py-20 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-12">
          <div>
            <SectionLabel>{content.labels?.trust || 'Trust & Transparency'}</SectionLabel>
            <SectionTitle>{content.trustTitle}</SectionTitle>
            <Text variant="description" size="p15" className="mb-10">
              {content.trustIntro || 'We believe patients should have access to clear information before making treatment decisions.'}
            </Text>
            <div className="space-y-4">
              {content.trustBullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3 text-left">
                  <span className="text-[#C5AF73] mt-0.5">✓</span>
                  <Text as="span" variant="description" size="p13" tone="heading" className="!mx-0 max-w-none">
                    {b}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm aspect-[16/9]">
            <img
              src={safetyImage}
              alt="EMIS staff member preparing instruments in the sterilization room"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* START STEPS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <SectionLabel>{content.labels?.start || 'Getting Started'}</SectionLabel>
          <SectionTitle>{content.startTitle}</SectionTitle>

          <div className="mt-16 grid md:grid-cols-3 gap-7">
            {content.steps.map((s, i) => (
              <div key={i} className="rounded-2xl p-9 bg-[#eef3f7] border border-[#dbe4ec]">
                <p
                  className="text-[#C5AF73] text-xs tracking-[0.25em] mb-4 font-semibold"
                >
                  {s.step}
                </p>
                <Text variant="cardTitle" weight="normal" size="cardLg" className="mb-3.5">
                  {s.title}
                </Text>
                <Text variant="description" size="p13">
                  {s.text}
                </Text>
              </div>
            ))}
          </div>

          <Text variant="description" size="p13" tone="subtle" className="mt-10">
            {content.note}
          </Text>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
            >
              {content.startPrimaryCTA}
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm font-semibold hover:bg-[#eef3f7] transition"
            >
              {content.startSecondaryCTA || 'Talk With Our Team'}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
