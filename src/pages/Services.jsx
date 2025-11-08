import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';

export default function Services({ language }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('../../public/dental_services_vn.csv')
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true });
        setServices(parsed.data.filter(row => row['DỊCH VỤ'])); // filter out empty rows
        setLoading(false);
      })
      .catch((err) => console.error('Error loading CSV:', err));
  }, []);

  const filteredServices = services.filter(service =>
    service['DỊCH VỤ']?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f7f2e7] pt-24 pb-20">
      <Helmet>
        <title>Bảng Giá Nha Khoa | Emis Dental</title>
        <meta
          name="description"
          content="Bảng giá các dịch vụ nha khoa tại Emis Dental – bao gồm cạo vôi, trám răng, tẩy trắng, niềng răng, răng sứ, implant và nhiều dịch vụ khác."
        />
      </Helmet>

      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#4b4b8f] mb-6 text-center border-b-2 border-[#d4af37] pb-2 inline-block">
          Bảng Giá Dịch Vụ Nha Khoa
        </h1>

        {/* Search bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Tìm dịch vụ..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table Section */}
        {loading ? (
          <div className="text-center text-gray-600 py-10">Đang tải dữ liệu...</div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
            <table className="min-w-full table-auto text-left border-collapse">
              <thead className="bg-[#4b4b8f] text-white">
                <tr>
                  <th className="px-6 py-3 text-sm font-semibold">DỊCH VỤ</th>
                  <th className="px-6 py-3 text-sm font-semibold">ĐƠN VỊ TÍNH</th>
                  <th className="px-6 py-3 text-sm font-semibold">ĐƠN GIÁ (VND)</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-[#fdfcf8] transition-all ${
                      index % 2 === 0 ? 'bg-[#fcfbf8]' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-3 font-medium text-gray-800">
                      {service['DỊCH VỤ']}
                    </td>
                    <td className="px-6 py-3 text-gray-700">{service['ĐƠN VỊ TÍNH']}</td>
                    <td className="px-6 py-3 text-[#d4af37] font-semibold">
                      {service['ĐƠN GIÁ']}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-block bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-3 px-8 rounded-full transition-all text-lg shadow-md hover:shadow-lg"
          >
            Đặt Lịch Ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
