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

    </div>
  );
};

export default Services;