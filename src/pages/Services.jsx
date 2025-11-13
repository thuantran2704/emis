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

        let cleanData = parsed.data.filter((row) =>
          Object.values(row).some((val) => val && val.trim() !== "")
        );

        // Capitalize Vietnamese data
        if (language === "vietnamese") {
          const capitalizeWords = (str) =>
            str
              .toLowerCase()
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
          cleanData = cleanData.map((row) => {
            const formatted = {};
            for (const key in row) {
              formatted[capitalizeWords(key.trim())] = row[key]
                ? capitalizeWords(row[key].trim())
                : "";
            }
            return formatted;
          });
        }

        setServices(cleanData);
      } catch (err) {
        console.error("Error loading price data:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [language]);

  // Group by category
  const processGroupedData = (data) => {
    const grouped = [];
    let currentCategory = "";

    data.forEach((row) => {
      const category = row["Service Category"] || row["Tên dịch vụ"];
      if (category && category.trim() !== "") {
        currentCategory = category;
        grouped.push({ _isCategory: true, _category: currentCategory });
      } else {
        grouped.push({ ...row, _category: currentCategory, _isCategory: false });
      }
    });

    return grouped;
  };

  // Search filter
  const filtered = services.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const groupedData = processGroupedData(filtered);

  // Extract visible column keys
  const visibleCols = Object.keys(services[0] || {}).filter(
    (key) => !key.startsWith("_")
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8 capitalize">
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
        ) : groupedData.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">
            {language === "vietnamese"
              ? "không tìm thấy dịch vụ"
              : "no services found"}
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-2xl shadow-sm overflow-hidden text-sm md:text-base">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs md:text-sm border-b">
                <tr>
                  {visibleCols.map((key) => (
                    <th
                      key={key}
                      className="px-3 md:px-4 py-3 text-left whitespace-nowrap"
                    >
                      {key.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {groupedData.map((row, i) =>
                  row._isCategory ? (
                    <tr key={i}>
                      <td
                        colSpan={visibleCols.length}
                        className="bg-blue-100 text-blue-800 font-bold uppercase px-4 py-3 border-y border-blue-200 text-center text-sm md:text-base"
                      >
                        {row._category}
                      </td>
                    </tr>
                  ) : (
                    <tr
                      key={i}
                      className={`border-b hover:bg-blue-50 transition ${
                        i % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      {visibleCols.map((col, j) => (
                        <td key={j} className="px-3 md:px-4 py-2">
                          {row[col] || ""}
                        </td>
                      ))}
                    </tr>
                  )
                )}
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
