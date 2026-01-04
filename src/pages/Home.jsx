import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import ServicesSlider from '../components/ServicesSlider';
import MapSection from '../components/MapSection';
import ImplantCards from '../components/implants_banner';
import MachineBanner from '../components/MachineBanner';
import ContactForm from '../components/ContactForm';
import CustomerReactionsBanner from '../components/CustomerReactionBanner';
import AdBanner from '../components/AdBanner';

import homeContent from '../Translations/homeContent';

import generalDentistry from '../pics/general.jpg';
import implant from '../pics/implant.jpg';
import crown from '../pics/crown.jpg';
import invisalign from '../pics/invisalign.jpg';
import aofimplant from '../pics/aofimplants.jpg';
import wisdom from '../pics/wisdomteeth.jpg';
import teethwhitening from '../pics/teethwhitening.jpg';
import canal from '../pics/canal.jpg';

import hiossenImg from '../pics/hiossen.jpg';
import osstemImg from '../pics/osstem.jpg';
import straumannImg from '../pics/straumann.jpg';
import etkImg from '../pics/etk.jpg';
import biotemImg from '../pics/biotem.jpg';

export default function Home() {
  const language = useSelector((state) => state.language.language);
  const content = homeContent[language] || homeContent.vietnamese;

  const serviceImages = [
    generalDentistry,
    implant,
    crown,
    invisalign,
    aofimplant,
    wisdom,
    teethwhitening,
    canal
  ];

  return (
    <main className="bg-[#f7f2e7] pt-20">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content="dental, dentist, implants, crowns, Invisalign" />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://emisdental.com" />
        <meta property="og:image" content="https://emisdental.com/og-image.jpg" />
        <link rel="canonical" href="https://emisdental.com" />
      </Helmet>

      {/* ================= INTRO VIDEO (FULL-BLEED) ================= */}
      <section className="bg-[#fdfcf8] py-12 lg:py-20">
        <div className="px-6">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-10 border-b-2 border-[#d4af37] inline-block">
            {content.introTitle}
          </h2>

          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/lwOIWFGU1LE"
              title="Emis Dental Intro"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ================= AD BANNER ================= */}
      <AdBanner />

      {/* ================= SERVICES ================= */}
      <section className="bg-[#fcfbf8] py-14 lg:py-24">
        <div className="max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-12 text-center border-b-2 border-[#d4af37] inline-block">
            {content.servicesTitle}
          </h2>

          <ServicesSlider
            services={content.services}
            serviceImages={serviceImages}
            bookNowText={content.findout}
          />
        </div>
      </section>

      <ContactForm />

      {/* ================= IMPLANTS ================= */}
      <ImplantCards />
      <MachineBanner />

      {/* ================= IMPLANT BRANDS ================= */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#4b4b8f] mb-14 text-center border-b-2 border-[#d4af37] inline-block">
            {content.implantBrandsSectionTitle || 'Our Implant Brands'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14">
            {content.implantBrandsTitles.map((title, i) => {
              const img =
                title.toLowerCase().includes('hiossen') ? hiossenImg :
                title.toLowerCase().includes('osstem') ? osstemImg :
                title.toLowerCase().includes('straumann') ? straumannImg :
                title.toLowerCase().includes('etk') ? etkImg :
                title.toLowerCase().includes('biotem') ? biotemImg :
                straumannImg;

              return (
                <div key={i} className="text-center">
                  <div className="mx-auto w-[280px] h-[280px] rounded-3xl shadow-md bg-white p-6 flex items-center justify-center">
                    <img src={img} alt={title} className="object-contain max-h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4b4b8f] mt-6 mb-2">{title}</h3>
                  <p className="text-gray-700 leading-relaxed max-w-md mx-auto">
                    {content.implantBrandsDescriptions[i]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CustomerReactionsBanner />

      {/* ================= HERO CTA ================= */}
      <section className="bg-[#fdfcf8] py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#4b4b8f] mb-8 font-playfair">
            {content.heroTitle.split(content.heroHighlight)[0]}
            <span className="text-[#d4af37]"> {content.heroHighlight} </span>
            {content.heroTitle.split(content.heroHighlight)[1]}
          </h1>

          <p className="text-lg lg:text-xl text-[#6b7280] mb-12 max-w-4xl mx-auto leading-relaxed font-cormorant">
            {content.heroSubtitle}
          </p>

          <Link
            to="/contact"
            className="inline-block bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-4 px-12 rounded-full shadow-lg transition"
          >
            {content.bookButton}
          </Link>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <MapSection content={content} />

    </main>
  );
}
