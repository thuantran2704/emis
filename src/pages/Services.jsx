import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/dental_services_vn.csv')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load CSV');
        return response.text();
      })
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true });
        const cleaned = parsed.data.filter((row) => row['DỊCH VỤ']);
        setServices(cleaned);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading CSV:', err);
        setLoading(false);
      });
  }, []);

  const filteredServices = services.filter((service) =>
    service['DỊCH VỤ']?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f7f2e7] pt-20 pb-16">
      {/* SEO */}
      <Helmet>
        <title>bảng giá nha khoa | emis dental</title>
        <meta
          name="description"
          content="bảng giá các dịch vụ nha khoa tại emis dental — bao gồm cạo vôi, trám, tẩy trắng, chỉnh nha, răng sứ, implant và nhiều dịch vụ khác."
        />
      </Helmet>

      <section className="max-w-6xl mx-auto px-4">
        {/* title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-[#4b4b8f] mb-6 text-center border-b-2 border-[#d4af37] pb-2 inline-block">
          bảng giá dịch vụ nha khoa
        </h1>

        {/* search bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="tìm dịch vụ..."
            className="w-full max-w-md px-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* table */}
        {loading ? (
          <div className="text-center text-gray-600 py-10 text-sm">
            đang tải dữ liệu...
          </div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
            <table className="min-w-full table-auto text-left border-collapse">
              <thead className="bg-[#4b4b8f] text-white text-xs md:text-sm uppercase tracking-wide">
                <tr>
                  <th className="px-4 md:px-6 py-3 font-medium">dịch vụ</th>
                  <th className="px-4 md:px-6 py-3 font-medium">đơn vị tính</th>
                  <th className="px-4 md:px-6 py-3 font-medium">đơn giá (vnd)</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {filteredServices.map((service, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-[#fdfcf8] transition-all ${
                      index % 2 === 0 ? 'bg-[#fcfbf8]' : 'bg-white'
                    }`}
                  >
                    <td className="px-4 md:px-6 py-3 text-gray-800">
                      {service['DỊCH VỤ']?.toLowerCase()}
                    </td>
                    <td className="px-4 md:px-6 py-3 text-gray-700">
                      {service['ĐƠN VỊ TÍNH']?.toLowerCase()}
                    </td>
                    <td className="px-4 md:px-6 py-3 text-[#d4af37] font-medium">
                      {service['ĐƠN GIÁ']}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* call-to-action */}
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-block bg-[#d4af37] hover:bg-[#c19d30] text-white font-semibold py-3 px-8 rounded-full transition-all text-base shadow-md hover:shadow-lg"
          >
            đặt lịch ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
