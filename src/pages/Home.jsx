import { Link } from 'react-router-dom';
import { useState } from 'react';
import generalDentistry from '../pics/general.jpg';
import implant from '../pics/implant.jpg';
import crown from '../pics/crown.jpg';
import invisalign from '../pics/invisalign.jpg';
import { Helmet } from 'react-helmet';
import ServicesSlider from '../components/ServicesSlider';
import MapSection from '../components/MapSection';
import homeContent from '../Translations/homeContent';
import aofimplant from '../pics/aofimplants.jpg';
export default function Home({ language }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = homeContent[language] || homeContent.vietnamese;

  const serviceImages = [generalDentistry, implant, crown, invisalign, aofimplant];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (content.services.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (content.services.length - 2)) % (content.services.length - 2));
  };

  // Schema.org markup for Dental Clinic
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Premium Dental Care",
    "image": "https://emisdental.com/logo.ico",
    "@id": "https://emisdental.com",
    "url": "https://emisdental.com",
    "telephone": "+84919100021",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "62B Phạm Ngọc Thạch",
      "addressLocality": "Ho Chi Minh City",
      "addressRegion": "District 3",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.783092789410368,
      "longitude": 106.69290884019306
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/emisdental",
    ]
  };

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

          {/* JSON-LD Schema */}
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
    </Helmet>


      {/* Hero Section */}
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
            bookNowText={content.bookNow} 
          />
        </div>
      </section>

      {/* Map Section */}
      <MapSection content={content} />
    </main>
  );
}