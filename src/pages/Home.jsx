import { Link } from 'react-router-dom';
import generalDentistry from '../pics/teeth-surgery-pic.jpg';
import implant from '../pics/implant-illustration.jpg';
import crown from '../pics/crown.jpg';
import invisalign from '../pics/invisalign.jpg';
import { Helmet } from 'react-helmet';
import ServicesSlider from '../components/ServicesSlider';
import MapSection from '../components/MapSection';
import homeContent from '../Translations/homeContent';
import aofimplant from '../pics/all-on-4-implant.jpg';
import teethwhitening from '../pics/teeth-whitening.jpg';
import canal from '../pics/root-canal.jpg';
import wisdom from '../pics/wisdom-teeth.jpg';
import ImplantCards from '../components/implants_banner';
// import AdBanner from '../components/AdBanner';
import hiossenImg from '../pics/hiossen-implant.jpg';
import osstemImg from '../pics/osstem-implant.jpg';
import straumannImg from '../pics/straumann-implant.jpg';
import etkImg from '../pics/etk-implant.jpg';
import biotemImg from '../pics/biotem-implant.jpg';
import MachineBanner from '../components/MachineBanner';
import ContactForm from '../components/ContactForm';
import { useSelector } from 'react-redux';
import CustomerReactionsBanner from '../components/CustomerReactionBanner';
import AdBanner from '../components/AdBanner';
import ServiceSupportList from '../components/ServiceSupportList';

export default function Home() {
  const language = useSelector((state) => state.language.language);
  const content = homeContent[language] || homeContent.vietnamese;
  const serviceSupportItems = content.serviceSupportItems || [
    'Online Consultation',
    'Send Your X-ray',
    'WhatsApp Support',
    'Email Support',
    'Treatment Timeline',
    'Follow-up Support',
  ];
  const serviceSupportDescriptions = content.serviceSupportDescriptions || [];
  const serviceSupportTitle = content.serviceSupportTitle || 'Support & Communication';
  const serviceSupportIntro = content.serviceSupportIntro || 'Easy communication and clear guidance throughout your care journey.';
  const serviceSupportNote = content.serviceSupportNote || 'Patients may request communication support in their preferred language whenever possible.';
  const serviceImages = {
    srcs: [
      generalDentistry,
      implant,
      crown,
      invisalign,
      aofimplant,
      wisdom,
      teethwhitening,
      canal,
    ],
    altTexts: [
      'General dentistry procedures and comprehensive tooth care',
      'Dental implant illustration showing tooth replacement solution',
      'Dental crown and cosmetic tooth restoration treatment',
      'Invisalign clear aligners for orthodontic treatment',
      'All-on-4 dental implant solution for full mouth restoration',
      'Wisdom teeth extraction and surgical treatment',
      'Professional teeth whitening cosmetic treatment',
      'Root canal endodontic treatment for tooth preservation',
    ],
  };
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7] pt-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta
          name="keywords"
          content="dental, dentist, dental clinic, implants, crowns, Invisalign, Ho Chi Minh City"
        />

        {/* Open Graph Meta */}
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emisdental.com" />
        <meta property="og:image" content="https://www.emisdental.com/og-image.jpg" />
        <meta
          property="og:locale"
          content={
            language === 'vietnamese'
              ? 'vi_VN'
              : language === 'french'
              ? 'fr_FR'
              : language === 'korean'
              ? 'ko_KR'
              : language === 'simplified'
              ? 'zh_CN'
              : language === 'traditional'
              ? 'zh_TW'
              : 'en_US'
          }
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://emisdental.com" />
      </Helmet>
      
      {/* Intro Video Section */}
      <section className="py-16 bg-[#fdfcf8] text-center">
        <h2 className="text-3xl font-bold text-[#4b4b8f] mb-12 text-left border-b-2 border-[#d4af37] pb-2 inline-block">
          {content.introTitle}
        </h2>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/lwOIWFGU1LE?si=6eKTu0Au9cQF2LaO"
              title="Emis Dental Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8 text-center md:text-left">
            <h2 className="inline-block border-b-2 border-[#d4af37] pb-2 text-3xl font-bold text-[#4b4b8f]">
              {serviceSupportTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base text-[#4b5563] md:text-lg" style={{ fontFamily: "'Cormorant', serif" }}>
              {serviceSupportIntro}
            </p>
          </div>
          <ServiceSupportList
            items={serviceSupportItems}
            descriptions={serviceSupportDescriptions}
            note={serviceSupportNote}
          />
        </div>
      </section>
      {/* Ad Banner */}
      <AdBanner/>
      {/* Services Section */}
      <section className="py-16 bg-[#fcfbf8]">
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-12 text-center border-b-2 border-[#d4af37] pb-2 inline-block">
            {content.servicesTitle}
          </h2>

          <ServicesSlider
            services={content.services}
            serviceImages={serviceImages.srcs}
            serviceAltTexts={serviceImages.altTexts}
            bookNowText={content.findout}
          />
        </div>
      </section>
      <section className="py-16 bg-[#fffaf0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8 text-center md:text-left">
            <h2 className="inline-block border-b-2 border-[#d4af37] pb-2 text-3xl font-bold text-[#4b4b8f]">
              {content.faqTitle || 'Frequently Asked Questions'}
            </h2>
            <p className="mt-4 max-w-3xl text-base text-[#4b5563] md:text-lg" style={{ fontFamily: "'Cormorant', serif" }}>
              {content.faqDescription || 'Helpful answers about our clinic, treatments, and communication support.'}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
            {(content.faqItems || []).map((item, index) => (
              <details
                key={`${item.question}-${index}`}
                className="group rounded-2xl border border-[#eadfc9] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#d4af37] hover:shadow-md"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#2a3439] transition hover:text-[#4b4b8f]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="flex items-start justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="mt-1 text-[#d4af37] text-xl leading-none">+</span>
                  </span>
                </summary>
                <div className="mt-3 rounded-xl bg-[#fffaf0] p-4 text-sm text-[#4b5563] leading-relaxed md:text-base" style={{ fontFamily: "'Cormorant', serif" }}>
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactForm/>

      {/* Implant Section */}
      {/* <ImplantCards/> */}
      
      <MachineBanner/>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-12 text-center border-b-2 border-[#d4af37] pb-2 inline-block">
            {content.implantBrandsSectionTitle || "Our Implant Brands"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {content.implantBrandsTitles.map((title, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto rounded-2xl shadow-md mb-4 bg-white p-4 flex items-center justify-center" style={{width: "250px", height: "250px"}}>
                  <img
                    src={
                      title.toLowerCase().includes("hiossen")
                        ? hiossenImg
                        : title.toLowerCase().includes("osstem")
                        ? osstemImg
                        : title.toLowerCase().includes("straumann")
                        ? straumannImg
                        : title.toLowerCase().includes("etk")
                        ? etkImg
                        : title.toLowerCase().includes("biotem")
                        ? biotemImg
                        : straumannImg // fallback image
                    }
                    alt={`${title} dental implant system and tooth replacement technology`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#4b4b8f] mb-2">{title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {content.implantBrandsDescriptions[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomerReactionsBanner/>
      {/* Hero Section */}
      <section className="py-28 px-4 max-w-6xl mx-auto text-center">
        <h1
          className="text-5xl font-bold text-[#4b4b8f] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          itemProp="name"
        >
          {content.heroTitle.split(content.heroHighlight)[0]}
          <span className="text-[#d4af37]" itemProp="makesOffer">
            {' '}
            {content.heroHighlight}{' '}
          </span>
          {content.heroTitle.split(content.heroHighlight)[1]}
        </h1>

        <p
          className="text-xl text-[#6b7280] mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Cormorant', serif" }}
          itemProp="description"
        >
          {content.heroSubtitle}
        </p>

        <Link
          to="/contact"
          className="inline-block bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-4 px-10 rounded-full transition-all text-lg shadow-md hover:shadow-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
          aria-label={`${content.bookButton} for dental services`}
        >
          {content.bookButton}
        </Link>
      </section>
      {/* Map Section */}
      <MapSection
        locationTitle={content.locationTitle || 'Our Location'}
        address={content.address || ''}
      />

      <section className="py-8 bg-[#fffaf0]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <a
            href="https://maps.app.goo.gl/8T1cPtEKUBe6wLFz9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-white font-semibold shadow-md transition hover:bg-[#c19d30] hover:shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Read our Google reviews
          </a>
        </div>
      </section>

    </main>
  );
}