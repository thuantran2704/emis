import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";

export default function Services({ language }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        if (language === "vietnamese") {
          // Load from CSV
          const response = await fetch("/dental_services_vn.csv");
          const text = await response.text();
          const parsed = Papa.parse(text, { header: true });
          setServices(parsed.data.filter((row) => row["DỊCH VỤ"]));
        } else {
          // Load from Excel
          const response = await fetch("/emisdental-pricelist.xlsx");
          const arrayBuffer = await response.arrayBuffer();
          const workbook = XLSX.read(arrayBuffer, { type: "array" });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(firstSheet);
          setServices(jsonData);
        }
      } catch (err) {
        console.error("Error loading price data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [language]);

  const filtered = services.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-800 py-10 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          {language === "vietnamese"
            ? "bảng giá dịch vụ nha khoa"
            : "dental service price list"}
        </h1>

        <input
          type="text"
          placeholder={
            language === "vietnamese" ? "tìm dịch vụ..." : "search service..."
          }
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
        />

        {loading ? (
          <p className="text-center text-gray-500 text-sm">
            {language === "vietnamese" ? "đang tải dữ liệu..." : "loading..."}
          </p>
        ) : (
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full text-left text-gray-700 text-sm md:text-base">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs md:text-sm">
                <tr>
                  {Object.keys(filtered[0] || {}).map((key) => (
                    <th key={key} className="px-3 md:px-4 py-3 whitespace-nowrap">
                      {key.toLowerCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50 transition`}
                  >
                    {Object.keys(row).map((col, j) => (
                      <td key={j} className="px-3 md:px-4 py-2">
                        {row[col]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base hover:bg-blue-700 transition">
            {language === "vietnamese" ? "đặt lịch ngay" : "book now"}
          </button>
        </div>
      </div>
    </div>
  );
}
