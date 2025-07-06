import React from 'react';
import homeContent from '../Translations/homeContent';
import { motion } from 'framer-motion';

const Services = ({ language }) => {
  const content = homeContent[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="pt-24 px-6 sm:px-12 max-w-7xl mx-auto text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-24 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
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
          className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {/* Optionally add a subtitle or description here */}
          {content.heroSubtitle || ''}
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <section className="mb-24">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-14 relative inline-block text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {content.servicesTitle}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
        </motion.h2>

        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          {content.services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group flex flex-col"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-primary bg-opacity-15 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-colors duration-300">
                <div className="w-10 h-10 bg-primary rounded-full opacity-90"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.name}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">{service.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
