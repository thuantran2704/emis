import React, { useEffect, useState } from 'react';
import homeContent from '../Translations/homeContent';
import { motion } from 'framer-motion';
import Papa from 'papaparse';

const Services = ({ language }) => {
  const content = homeContent[language];
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    fetch('/pricing.csv')
      .then((res) => res.text())
      .then((text) => {
        const parsed = Papa.parse(text, { header: true, skipEmptyLines: true }).data;
        // Normalize headers in case of BOM or spaces
        const cleanData = parsed.map((row) => {
          const normalized = {};
          Object.keys(row).forEach((key) => {
            normalized[key.trim()] = row[key];
          });
          return normalized;
        });
        setPricingData(cleanData.filter((row) => row['Tên dịch vụ']));
      })
      .catch((err) => console.error('CSV load error:', err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 8, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.25 } },
  };

  return (
    <div
      className="pt-24 px-6 sm:px-12 max-w-7xl mx-auto text-gray-800"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Hero Section */}
      <motion.section
        className="text-center mb-20 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          {content.heroTitle.split(content.heroHighlight).map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && (
                <span className="text-primary font-bold relative inline-block">
                  {content.heroHighlight}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-30 translate-y-1"></span>
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.h1>
        {content.heroSubtitle && (
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {content.heroSubtitle}
          </motion.p>
        )}
      </motion.section>

      {/* Pricing Section */}
      <section className="mb-24">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-10 relative text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Bảng giá dịch vụ
          <span className="block w-24 h-1 bg-primary rounded-full mx-auto mt-2"></span>
        </motion.h2>

        <motion.div
          className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          <table className="min-w-full bg-white text-left text-gray-700 text-sm md:text-base">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Tên dịch vụ</th>
                <th className="px-6 py-4 font-semibold">Nội dung</th>
                <th className="px-6 py-4 font-semibold">Đơn vị</th>
                <th className="px-6 py-4 font-semibold">Giá (chưa VAT)</th>
              </tr>
            </thead>

            {/* FIX: tbody now properly animates and becomes visible */}
            <motion.tbody
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
            >
              {pricingData.map((row, idx) => (
                <motion.tr
                  key={idx}
                  variants={itemVariants}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-3 font-medium text-gray-900">
                    {row['Tên dịch vụ'] || '-'}
                  </td>
                  <td className="px-6 py-3">{row['Nội dung'] || '-'}</td>
                  <td className="px-6 py-3">{row['Đơn vị'] || '-'}</td>
                  <td className="px-6 py-3 text-gray-800 font-semibold">
                    {row['Giá dịch vụ (chưa VAT)'] || '-'}
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>

        {/* Fallback when CSV is empty or fails to load */}
        {pricingData.length === 0 && (
          <p className="text-center mt-8 text-gray-500 italic">
            Không tìm thấy dữ liệu bảng giá. Vui lòng kiểm tra tệp pricing.csv.
          </p>
        )}
      </section>
    </div>
  );
};

export default Services;
