import React, { useEffect, useState } from 'react';
import homeContent from '../Translations/homeContent';
import Papa from 'papaparse';

const Services = ({ language }) => {
  const content = homeContent[language];
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    fetch('/pricing.csv')
      .then((res) => res.text())
      .then((text) => {
        // Manually fix malformed CSV lines before parsing
        const fixedText = text
          .split('\n')
          .map((line) => {
            // Skip empty lines
            if (!line.trim()) return '';
            const commaCount = (line.match(/,/g) || []).length;
            // If only 2 commas (3 columns instead of 4), add an empty field
            if (commaCount === 2) return line.replace(/$/, ',');
            return line;
          })
          .join('\n');

        const parsed = Papa.parse(fixedText, {
          header: true,
          skipEmptyLines: true,
        }).data;

        const clean = parsed.map((row) => {
          const normalized = {};
          Object.keys(row).forEach((key) => {
            normalized[key.trim()] = row[key]?.trim();
          });
          return normalized;
        });

        setPricingData(clean.filter((r) => r['Tên dịch vụ']));
      })
      .catch((err) => console.error('CSV load error:', err));
  }, []);

  return (
    <div
      className="pt-24 px-6 sm:px-12 max-w-7xl mx-auto text-gray-800"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <section className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
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
        </h1>
        {content.heroSubtitle && (
          <p className="text-gray-600 text-lg md:text-xl">{content.heroSubtitle}</p>
        )}
      </section>

      <section className="mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-gray-900 relative">
          Bảng giá dịch vụ
          <span className="block w-24 h-1 bg-primary rounded-full mx-auto mt-2"></span>
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
          <table className="min-w-full bg-white text-left text-gray-700 text-sm md:text-base">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 font-semibold">Tên dịch vụ</th>
                <th className="px-6 py-4 font-semibold">Nội dung</th>
                <th className="px-6 py-4 font-semibold">Đơn vị</th>
                <th className="px-6 py-4 font-semibold">Giá (chưa VAT)</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium text-gray-900">
                    {row['Tên dịch vụ'] || '-'}
                  </td>
                  <td className="px-6 py-3">{row['Nội dung'] || '-'}</td>
                  <td className="px-6 py-3">{row['Đơn vị'] || '-'}</td>
                  <td className="px-6 py-3 text-gray-800 font-semibold">
                    {row['Giá dịch vụ (chưa VAT)'] || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
