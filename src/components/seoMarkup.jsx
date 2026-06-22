export const schemaMarkup = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://emisdental.com/#website",
    "name": "EMIS Dental",
    "alternateName": "EMIS International Dental",
    "url": "https://emisdental.com",
    "publisher": {
      "@id": "https://emisdental.com"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://emisdental.com/services?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://emisdental.com/#primary-navigation",
    "name": "EMIS Dental main navigation",
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "International Patients",
        "description": "Multilingual support, remote consultation, and treatment planning for patients traveling to EMIS Dental.",
        "url": "https://emisdental.com/international-patients"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Dental Implants",
        "description": "Single and full-arch dental implant treatment at EMIS Dental.",
        "url": "https://emisdental.com/implant"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Smile Aesthetics",
        "description": "Cosmetic dentistry, veneers, and smile design services.",
        "url": "https://emisdental.com/smile-aesthetics"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Treatments & Services",
        "description": "Full range of dental treatments offered at EMIS Dental.",
        "url": "https://emisdental.com/services"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "About EMIS Dental",
        "description": "Our clinic, doctors, and equipment.",
        "url": "https://emisdental.com/about"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Contact",
        "description": "Book an appointment or reach the EMIS Dental team.",
        "url": "https://emisdental.com/contact"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "Dentist"],
    "name": "EMIS Dental",
    "alternateName": "EMIS Dental Clinic",
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
    "sameAs": [
      "https://www.facebook.com/emisinternationaldental/"
    ],
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
    "@type": "Physician",
    "name": "Dr. Son",
    "description": "Dental specialist at EMIS Dental focused on patient care, treatment planning, and communication support.",
    "affiliation": "EMIS Dental",
    "worksFor": {
      "@id": "https://emisdental.com"
    },
    "medicalSpecialty": [
      "DentalImplants",
      "CosmeticDentistry",
      "GeneralDentistry"
    ],
    "availableLanguage": ["Vietnamese", "English", "French", "Korean", "Chinese"]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What dental services does EMIS Dental provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EMIS Dental offers general dentistry, dental implants, crowns, Invisalign, whitening, root canal treatment, and follow-up support."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get support in my preferred language?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, patients may request communication support in their preferred language whenever possible."
        }
      },
      {
        "@type": "Question",
        "name": "How can I send my X-ray for consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can send your X-ray and dental records through our online consultation or email support channels for faster assessment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide treatment timeline and follow-up support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide a clear treatment timeline and follow-up support throughout your care journey."
        }
      }
    ]
  }
]);