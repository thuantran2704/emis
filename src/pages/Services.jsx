import React from 'react';
import homeContent from '../Translations/homeContent';
import { motion } from 'framer-motion';

const Services = ({ language = 'english' }) => {
  const content = homeContent[language];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="pt-20 px-4 sm:px-6 py-12 max-w-7xl mx-auto text-gray-800">
      {/* Hero Section */}
      <motion.section 
        className="text-center mb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          variants={itemVariants}
        >
          {content.heroTitle.split(content.heroHighlight).map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && (
                <span className="text-primary font-bold relative inline-block">
                  {content.heroHighlight}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 transform translate-y-1"></span>
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {content.heroSubtitle}
        </motion.p>
        <motion.a
          href="#booking"
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {content.bookButton}
        </motion.a>
      </motion.section>

      {/* Services Section */}
      <section className="mb-20">
        <motion.h2 
          className="text-3xl md:text-4xl font-semibold text-center mb-12 relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {content.servicesTitle}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary"></span>
        </motion.h2>
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          {content.services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition">
                <div className="w-8 h-8 bg-primary rounded-full opacity-80"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.name}</h3>
              <p className="text-gray-600 leading-relaxed">{service.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Location Section */}
      <motion.section 
        className="text-center mb-16 bg-gray-50 rounded-2xl p-12 shadow-inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{content.locationTitle}</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">{content.address}</p>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          {/* Replace with your actual map component or iframe */}
          <div className="w-full h-64 bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white">
            <span className="text-lg font-medium">Map View</span>
          </div>
        </div>
      </motion.section>

      {/* Book Now CTA */}
      <motion.div 
        className="text-center bg-primary bg-opacity-10 rounded-2xl p-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4">{content.readyToBook}</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">{content.bookPrompt}</p>
        <motion.a
          id="booking"
          href="/book"
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {content.findout}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Services;