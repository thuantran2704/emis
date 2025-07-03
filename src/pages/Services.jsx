import React from 'react';
import homeContent from '../Translations/homeContent';

const Services = ({ language = 'english' }) => {
  const content = homeContent[language];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto text-gray-800">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          {content.heroTitle.split(content.heroHighlight).map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && <span className="text-primary font-bold">{content.heroHighlight}</span>}
            </React.Fragment>
          ))}
        </h1>
        <p className="text-lg mb-6">{content.heroSubtitle}</p>
        <a
          href="#booking"
          className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition"
        >
          {content.bookButton}
        </a>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10">{content.servicesTitle}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md border border-gray-200 p-6 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 font-medium mb-2">{service.desc}</p>
              <p className="text-sm text-gray-700">{service.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">{content.locationTitle}</h2>
        <p className="text-gray-700">{content.address}</p>
      </section>

      {/* Book Now CTA */}
      <div className="text-center">
        <a
          id="booking"
          href="/book"
          className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition"
        >
          {content.bookNow}
        </a>
      </div>
    </div>
  );
};

export default Services;
