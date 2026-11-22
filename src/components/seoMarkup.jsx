import { socialProfiles } from '../data/contactChannels';

export const schemaMarkup = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://emisdental.com/#website",
    "name": "Emis Dental",
    "alternateName": "Emis Dental",
    "url": "https://emisdental.com",
    "publisher": {
      "@id": "https://emisdental.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "Dentist"],
    "name": "Emis Dental",
    "alternateName": "Emis Dental",
    "description": "Premium dental clinic in Ho Chi Minh City offering implants, cosmetic dentistry, Invisalign, whitening, root canal treatment, and patient communication support.",
    "image": "https://emisdental.com/logo.ico",
    "@id": "https://emisdental.com",
    "url": "https://emisdental.com",
    "telephone": "+84919100021",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "62B Phạm Ngọc Thạch",
      "addressLocality": "Ho Chi Minh City",
      "addressRegion": "Xuân Hòa ward, District 3, Ho Chi Minh City",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.783092789410368,
      "longitude": 106.69290884019306
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "areaServed": "Ho Chi Minh City, Vietnam",
    "sameAs": Object.values(socialProfiles),
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "patient enquiries",
      "telephone": "+84919100021",
      "availableLanguage": ["Vietnamese", "English", "Chinese"]
    },
    "medicalSpecialty": [
      "DentalImplants",
      "CosmeticDentistry",
      "Orthodontics",
      "Endodontics",
      "GeneralDentistry"
    ],
    "makesOffer": [
      "General dentistry",
      "Dental implants",
      "Cosmetic crowns",
      "Invisalign",
      "Whitening",
      "Root canal treatment"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://emisdental.com/dr-long#person",
    "name": "Dr. Do Thai Long",
    "jobTitle": "Lead Dentist",
    "knowsLanguage": ["Vietnamese", "Chinese"],
    "worksFor": { "@id": "https://emisdental.com" },
    "url": "https://emisdental.com/dr-long"
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://emisdental.com/dr-tu#person",
    "name": "Dr. Tran Minh Tu",
    "jobTitle": "Odonto-Maxillofacial Surgeon",
    "knowsLanguage": ["Vietnamese", "English"],
    "worksFor": { "@id": "https://emisdental.com" },
    "url": "https://emisdental.com/dr-tu"
  }
]);
