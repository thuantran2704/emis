import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { useSelector } from 'react-redux';
/**
 * Robust Services component:
 * - Tries multiple filenames for each language (no more brittle filenames)
 * - Auto-detects header columns by fuzzy matching (handles accents, case, spacing)
 * - Groups rows by the detected "category" column (falls back to "Uncategorized")
 * - Keeps search, nice table layout, and thick borders
 */

export default function Services() {
  const language = useSelector((state) => state.language.language);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Candidate file paths (tries them in order)
  const fileCandidates = {
    vietnamese: ["/dental_services_vn.csv", "/dental_services_vietnamese.csv", "/dental_services.csv"],
    english: ["/emisdental-pricelist.csv", "/dental_services.csv", "/dental_services_english.csv"],
  };

  // Normalize a header string for fuzzy matching
  const normalize = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .normalize?.("NFD") // remove accents
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");

  // Find best matching header name from available fields
  const pickField = (fields, keywords) => {
    if (!fields || !fields.length) return null;
    const normFields = fields.map((f) => ({ raw: f, norm: normalize(f) }));
    // exact contains match by keyword
    for (const kw of keywords) {
      const normKw = normalize(kw);
      const found = normFields.find((ff) => ff.norm.includes(normKw));
      if (found) return found.raw;
    }
    // otherwise return first field that contains any keyword token
    for (const ff of normFields) {
      for (const kw of keywords) {
        if (ff.norm.includes(normalize(kw))) return ff.raw;
      }
    }
    return null;
  };

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      setServices([]);
      const tries = fileCandidates[language === "vietnamese" ? "vietnamese" : "english"];

      let parsed = null;
      for (const path of tries) {
        try {
          const res = await fetch(path);
          if (!res.ok) {
            // try next candidate
            continue;
          }
          const text = await res.text();
          parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
          // if parse returned fields and data, break
          if (parsed && (parsed.meta?.fields?.length > 0 || (parsed.data && parsed.data.length > 0))) {
            // keep this parsed result
            break;
          }
        } catch (err) {
          // try next file
        }
      }

      if (cancelled) return;

      if (!parsed) {
        console.error("No CSV could be loaded for language:", language);
        setServices([]);
        setLoading(false);
        return;
      }

      // get fields list (meta.fields preferred)
      const fields = parsed.meta?.fields && parsed.meta.fields.length ? parsed.meta.fields : (parsed.data[0] ? Object.keys(parsed.data[0]) : []);

      // attempt to detect columns by keywords (Vietnamese + English tokens included)
      const categoryField =
        pickField(fields, [
          "servicecategory",
          "service category",
          "category",
          "danhmuc",
          "danh muc",
          "danh muc dich vu",
          "danh muc dich vu",
          "danh muc dich vu", // duplicates don't matter
          "danhmucdichvu",
          "DANH MỤC DỊCH VỤ",
        ]) || fields[0] || null;

      const descField =
        pickField(fields, ["description", "desc", "mota", "mo ta", "mô tả", "MÔ TẢ"]) || fields[1] || null;

      const unitField = pickField(fields, ["unit", "donvi", "don vi", "đơn vị", "ĐƠN VỊ", "đon vi"]) || fields[2] || null;

      const priceField =
        pickField(fields, ["price", "gia", "giá", "serviceprice", "service price", "GIÁ DỊCH VỤ"]) || fields[3] || null;

      // Build cleaned rows (filter empty rows)
      const rows = parsed.data
        .filter((r) => {
          // at least one non-empty value
          return Object.values(r).some((v) => v !== null && v !== undefined && String(v).trim() !== "");
        })
        .map((r) => ({
          __raw: r,
          category: (r[categoryField] || "").toString().trim(),
          desc: (r[descField] || "").toString().trim(),
          unit: (r[unitField] || "").toString().trim(),
          price: (r[priceField] || "").toString().trim(),
        }));

      setServices(rows);
      setLoading(false);
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [language]);

  // Group by category (if category blank => "Uncategorized")
  const grouped = services.reduce((acc, row) => {
    const cat = row.category && row.category !== "" ? row.category : "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(row);
    return acc;
  }, {});

  // Filter rows by search
  const filtered = Object.fromEntries(
    Object.entries(grouped).map(([cat, rows]) => [
      cat,
      rows.filter((r) =>
        [r.category, r.desc, r.unit, r.price].join(" ").toLowerCase().includes(search.toLowerCase())
      ),
    ])
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8 uppercase">
          {language === "vietnamese" ? "Bảng giá dịch vụ nha khoa" : "International EMIS Dental Price List"}
        </h1>

        <div className="w-full md:w-2/3 mx-auto mb-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === "vietnamese" ? "Tìm dịch vụ..." : "Search service..."}
            className="w-full border border-gray-500 rounded-xl p-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : Object.keys(filtered).every((k) => filtered[k].length === 0) ? (
          <p className="text-center text-gray-500">{language === "vietnamese" ? "Không tìm thấy dịch vụ" : "No services found"}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-gray-700 rounded-2xl shadow-md overflow-hidden text-sm md:text-base bg-white">
              <thead className="bg-gray-200 text-gray-800 uppercase text-xs md:text-sm border-b-2 border-gray-700">
                <tr>
                  <th className="px-3 md:px-4 py-3 border-r-2 border-gray-700 whitespace-nowrap">
                    {language === "vietnamese" ? "Danh mục dịch vụ" : "Category"}
                  </th>
                  <th className="px-3 md:px-4 py-3 border-r-2 border-gray-700 whitespace-nowrap">
                    {language === "vietnamese" ? "Mô tả" : "Description"}
                  </th>
                  <th className="px-3 md:px-4 py-3 border-r-2 border-gray-700 whitespace-nowrap">
                    {language === "vietnamese" ? "Đơn vị" : "Unit"}
                  </th>
                  <th className="px-3 md:px-4 py-3 whitespace-nowrap">
                    {language === "vietnamese" ? "Giá dịch vụ (chưa VAT)" : "Service Price (VAT excluded)"}
                  </th>
                </tr>
              </thead>

              <tbody>
                {Object.entries(filtered).map(([category, rows], i) => {
                  if (!rows || rows.length === 0) return null;
                  return rows.map((row, j) => (
                    <tr key={`${i}-${j}`} className={`border-b-2 border-gray-600 ${j % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      {j === 0 && (
                        <td rowSpan={rows.length} className="border-r-2 border-gray-700 text-center align-middle font-semibold bg-blue-100 text-blue-900 px-3 md:px-4 py-2 w-40">
                          {category}
                        </td>
                      )}
                      <td className="border-r-2 border-gray-600 px-3 md:px-4 py-2">{row.desc}</td>
                      <td className="border-r-2 border-gray-600 px-3 md:px-4 py-2 text-center">{row.unit}</td>
                      <td className="px-3 md:px-4 py-2 font-medium text-gray-800 text-right">
                        {row.price ? `${row.price} VND` : ""}
                      </td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
