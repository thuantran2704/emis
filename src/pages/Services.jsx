import React, { useEffect, useState } from 'react';
import homeContent from '../Translations/homeContent';
import { motion } from 'framer-motion';
import Papa from 'papaparse'; // make sure to install papaparse

const Services = ({ language }) => {
  const content = homeContent[language];
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    fetch('/pricing.csv')
      .then((res) => res.text())
      .then((text) => {
        const parsed = Papa.parse(text, { header: true }).data;
        setPricingData(parsed.filter((row) => row['Tên dịch vụ'])); // ignore empty lines
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div
      className="pt-24 px-6 sm:px-12 max-w-7xl mx-auto text-gray-800"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
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
          {content.heroSubtitle || ''}
        </motion.p>
      </motion.section>

      {/* Price Chart Section */}
      <section className="mb-24">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-10 relative inline-block text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Bảng giá dịch vụ
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
        </motion.h2>

        <motion.div
          className="overflow-x-auto rounded-2xl border border-gray-200 shadow-md"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          <table className="min-w-full bg-white text-left text-gray-700">
            <thead className="bg-primary text-white text-sm uppercase">
              <tr>
                <th className="px-6 py-3">Tên dịch vụ</th>
                <th className="px-6 py-3">Đơn vị</th>
                <th className="px-6 py-3">Giá (chưa VAT)</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, idx) => (
                <motion.tr
                  key={idx}
                  variants={itemVariants}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3 font-medium">{row['Tên dịch vụ']}</td>
                  <td className="px-6 py-3">{row['Đơn vị']}</td>
                  <td className="px-6 py-3">{row['Giá dịch vụ (chưa VAT)']}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
