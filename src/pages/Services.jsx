import React from 'react';
import homeContent from '../Translations/homeContent';
import { motion } from 'framer-motion';

const Services = ({ language }) => {
  const content = homeContent[language];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-24 px-6 sm:px-12 max-w-7xl mx-auto text-gray-900 bg-white">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-24 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-serif font-extrabold mb-6 tracking-tight leading-tight"
          variants={itemVariants}
        >
          {content.heroTitle.split(content.heroHighlight).map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && (
                <span className="text-amber-600 font-bold relative inline-block">
                  {content.heroHighlight}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-300 opacity-40 transform translate-y-1 rounded-full"></span>
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 font-serif max-w-3xl mx-auto mt-4"
          variants={itemVariants}
        >
          {content.heroSubtitle || ""}
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <section className="mb-28">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-semibold text-center mb-16 relative inline-block text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {content.servicesTitle}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-400 rounded-full"></span>
        </motion.h2>

        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          {content.services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-amber-50 border border-amber-200 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-400 cursor-pointer group"
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
            >
              <div className="bg-amber-200 bg-opacity-30 w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:bg-opacity-50 transition-colors duration-300">
                {/* You can replace this placeholder with icons */}
                <div className="w-10 h-10 bg-amber-400 rounded-full opacity-90"></div>
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-amber-900">
                {service.name}
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed">{service.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
