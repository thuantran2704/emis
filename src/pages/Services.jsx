import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";

export default function Services({ language }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const file =
          language === "vietnamese"
            ? "/dental_services_vn.csv"
            : "/emisdental-pricelist.csv";

        const response = await fetch(file);
        const text = await response.text();
        const parsed = Papa.parse(text, { header: true, skipEmptyLines: true });

        const cleanData = parsed.data.filter((row) =>
          Object.values(row).some((val) => val && val.trim() !== "")
        );

        setServices(cleanData);
      } catch (err) {
        console.error("Error loading price data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [language]);

  // ✅ Column header mapping
  const headers = {
    english: {
      category: "Service Category",
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

  const cols = headers[language];

  const groupByCategory = (data) => {
    const grouped = {};
    let currentCategory = "";

    data.forEach((row) => {
      const category = row[cols.category];
      if (category && category.trim() !== "") {
        currentCategory = category.trim();
        grouped[currentCategory] = [];
      } else if (currentCategory) {
        grouped[currentCategory].push(row);
      }
    });

    return grouped;
  };

  const filtered = services.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const groupedData = groupByCategory(filtered);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8 uppercase">
          {language === "vietnamese"
            ? "bảng giá dịch vụ nha khoa"
            : "international emis dental price list"}
        </h1>

        <input
          type="text"
          placeholder={
            language === "vietnamese" ? "tìm dịch vụ..." : "search service..."
          }
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-500 rounded-xl p-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        />

        {loading ? (
          <p className="text-center text-gray-500 text-sm">
            {language === "vietnamese" ? "đang tải dữ liệu..." : "loading..."}
          </p>
        ) : Object.keys(groupedData).length === 0 ? (
          <p className="text-center text-gray-500 text-sm">
            {language === "vietnamese"
              ? "không tìm thấy dịch vụ"
              : "no services found"}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-gray-700 rounded-2xl shadow-md overflow-hidden text-sm md:text-base bg-white">
              <thead className="bg-gray-200 text-gray-800 uppercase text-xs md:text-sm border-b-2 border-gray-700">
                <tr>
                  <th className="px-3 md:px-4 py-3 border-r-2 border-gray-700 whitespace-nowrap">
                    {language === "vietnamese"
                      ? "danh mục dịch vụ"
                      : "Service Category"}
                  </th>
                  <th className="px-3 md:px-4 py-3 border-r-2 border-gray-700 whitespace-nowrap">
                    {language === "vietnamese" ? "mô tả" : "Description"}
                  </th>
                  <th className="px-3 md:px-4 py-3 border-r-2 border-gray-700 whitespace-nowrap">
                    {language === "vietnamese" ? "đơn vị" : "Unit"}
                  </th>
                  <th className="px-3 md:px-4 py-3 whitespace-nowrap">
                    {language === "vietnamese"
                      ? "giá dịch vụ (chưa VAT)"
                      : "Service Price (VAT excluded)"}
                  </th>
                </tr>
              </thead>

              <tbody>
                {Object.entries(groupedData).map(([category, rows], i) => {
                  const rowSpan = rows.length || 1;
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
                          className="border-r-2 border-gray-700 text-center align-middle font-semibold bg-blue-100 text-blue-900 px-3 md:px-4 py-2 w-40"
                        >
                          {category}
                        </td>
                      )}
                      <td className="border-r-2 border-gray-600 px-3 md:px-4 py-2">
                        {row[cols.desc] || ""}
                      </td>
                      <td className="border-r-2 border-gray-600 px-3 md:px-4 py-2">
                        {row[cols.unit] || ""}
                      </td>
                      <td className="px-3 md:px-4 py-2 font-medium text-gray-800">
                        {row[cols.price] || ""}
                      </td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base hover:bg-blue-700 transition">
              {language === "vietnamese" ? "đặt lịch ngay" : "book now"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
