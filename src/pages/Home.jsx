import { Link } from 'react-router-dom';
import generalDentistry from '../pics/general.jpg';
import implant from '../pics/implant.jpg';
import crown from '../pics/crown.jpg';
import invisalign from '../pics/invisalign.jpg';
import { Helmet } from 'react-helmet';
import ServicesSlider from '../components/ServicesSlider';
import MapSection from '../components/MapSection';
import homeContent from '../Translations/homeContent';
import aofimplant from '../pics/aofimplants.jpg';
import teethwhitening from '../pics/teethwhitening.jpg';
import canal from '../pics/canal.jpg';
import wisdom from '../pics/wisdomteeth.jpg';
import ImplantCards from '../components/implants_banner';
import AdBanner from '../components/AdBanner';
import ad1 from '../pics/ad1.jpg';
import ad2 from '../pics/ad2.jpg';
import ad3 from '../pics/ad3.jpg';
import ad4 from '../pics/ad4.jpg';

let adImages = [];
// import PapersTitle from '../components/PapersTitle';
// import licenses from '../pics/license.jpg';


export default function Home({ language }) {
  const content = homeContent[language] || homeContent.vietnamese;
  const serviceImages = [generalDentistry, implant, crown, invisalign, aofimplant,wisdom, teethwhitening, canal];
  // const papersImages = [ licenses];
  adImages = [ad1,ad2,ad3,ad4];

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f2e7]">
      {/* SEO Meta Tags */}
      <Helmet>
          <title>{content.metaTitle}</title>
          <meta name="description" content={content.metaDescription} />
          <meta name="keywords" content="dental, dentist, dental clinic, implants, crowns, Invisalign, Ho Chi Minh City" />

          {/* Open Graph Meta */}
          <meta property="og:title" content={content.metaTitle} />
          <meta property="og:description" content={content.metaDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://emisdental.com" />
          <meta property="og:image" content="https://emisdental.com/og-image.jpg" />
          <meta property="og:locale" content={
            language === 'vietnamese' ? 'vi_VN' :
            language === 'french' ? 'fr_FR' :
            language === 'korean' ? 'ko_KR' :
            language === 'simplified' ? 'zh_CN' :
            language === 'traditional' ? 'zh_TW' :
            'en_US'
          } />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://emisdental.com" />
    </Helmet>
     
      {/* Hero Section */}
      {/* <section className="py-28 px-4 max-w-6xl mx-auto text-center">
        <AdBanner ads={adImages} />
      </section> */}
      <section className="py-28 px-4 max-w-6xl mx-auto text-center">

        <h1 
          className="text-5xl font-bold text-[#1f2937] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          itemProp="name"
        >
          {content.heroTitle.split(content.heroHighlight)[0]} 
          <span className="text-[#d4af37]" itemProp="makesOffer"> {content.heroHighlight} </span>
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
      {/* Services Section */}
      <section className="py-16 bg-[#fffaf0]">
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-[#1f2937] mb-12 text-center border-b-2 border-[#d4af37] pb-2 inline-block">
            {content.servicesTitle}
          </h2>
          
          <ServicesSlider 
            services={content.services} 
            serviceImages={serviceImages} 
            bookNowText={content.findout} 
          />
        </div>
      </section>
      {/* <PapersTitle 
        title={content.papersTitle} 
        images={papersImages} 
      /> */}
      {/*
        Youtube video, emisdentalclinic
      */}
      <section className="py-16 bg-[#fdfcf8] text-center">
        <h2 className="text-3xl font-bold text-[#1f2937] mb-12 text-center border-b-2 border-[#d4af37] pb-2 inline-block">
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
      <ImplantCards/>
      {/* Map Section */}
      <MapSection content={content} />

    </main>
  );
}