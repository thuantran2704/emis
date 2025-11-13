import React, { useState, useEffect } from "react";
import Papa from "papaparse";

export default function Services({ language }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // ✅ Header mapping for both languages
  const headers = {
    english: {
      category: "Category",
      desc: "Description",
      unit: "Unit",
      price: "Service Price (VAT excluded)",
    },
    vietnamese: {
      category: "DANH MỤC DỊCH VỤ",
      desc: "MÔ TẢ",
      unit: "ĐƠN VỊ",
      price: "GIÁ DỊCH VỤ (CHƯA VAT)",
    },
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          language === "vietnamese"
            ? "/dental_services_vn.csv"
            : "/dental_services.csv"
        );
        const text = await res.text();
        const result = Papa.parse(text, { header: true });
        setServices(result.data.filter((row) => Object.keys(row).length > 1));
      } catch (error) {
        console.error("Error loading CSV:", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [language]);

  // ✅ Group rows by category
  const groupedData = services.reduce((acc, row) => {
    const cat = row[headers[language].category] || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(row);
    return acc;
  }, {});

  // ✅ Filter by search
  const filteredData = Object.fromEntries(
    Object.entries(groupedData).map(([cat, rows]) => [
      cat,
      rows.filter((row) =>
        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    ])
  );

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        {language === "vietnamese" ? "Dịch Vụ Nha Khoa" : "Dental Services"}
      </h1>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder={
            language === "vietnamese"
              ? "Tìm kiếm dịch vụ..."
              : "Search for a service..."
          }
          className="border-2 border-gray-400 rounded-lg px-3 py-2 w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Services Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border-4 border-gray-700 shadow-md">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="border-2 border-gray-700 px-3 md:px-4 py-2 text-left w-40">
                {language === "vietnamese" ? "Danh mục dịch vụ" : "Category"}
              </th>
              <th className="border-2 border-gray-700 px-3 md:px-4 py-2 text-left">
                {language === "vietnamese" ? "Mô tả" : "Description"}
              </th>
              <th className="border-2 border-gray-700 px-3 md:px-4 py-2 text-left w-24">
                {language === "vietnamese" ? "Đơn vị" : "Unit"}
              </th>
              <th className="border-2 border-gray-700 px-3 md:px-4 py-2 text-left w-32">
                {language === "vietnamese"
                  ? "Giá dịch vụ (chưa VAT)"
                  : "Service Price (VAT excluded)"}
              </th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(filteredData).map(([category, rows], i) => {
              if (rows.length === 0) return null;
              const rowSpan = rows.length;

              return rows.map((row, j) => (
                <tr
                  key={`${i}-${j}`}
                  className={`border-b-2 border-gray-600 ${
                    j % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  {j === 0 && (
                    <td
                      rowSpan={rowSpan}
                      className="border-r-2 border-gray-700 text-center align-middle font-semibold bg-blue-50 text-blue-900 px-3 md:px-4 py-2 w-40"
                    >
                      {category}
                    </td>
                  )}

                  <td className="border-r-2 border-gray-600 px-3 md:px-4 py-2">
                    {row[headers[language].desc] || ""}
                  </td>

                  <td className="border-r-2 border-gray-600 px-3 md:px-4 py-2 text-center">
                    {row[headers[language].unit] || ""}
                  </td>

                  <td className="px-3 md:px-4 py-2 font-medium text-gray-800 text-right">
                    {row[headers[language].price] || ""}
                  </td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
