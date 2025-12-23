import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { useSelector } from "react-redux";
import { getFxRate } from "../components/exchangeRate";

export default function Services() {
  const languageRedux = useSelector((state) => state.language.language);
  const language = languageRedux === "vietnamese" ? "vietnamese" : "english";

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showUSD, setShowUSD] = useState(false);
  const [fxRate, setFxRate] = useState(null);
  const [fxLastUpdated, setFxLastUpdated] = useState(null);

  const fileCandidates = {
    vietnamese: ["/dental_services_vn.csv", "/dental_services_vietnamese.csv", "/dental_services.csv"],
    english: ["/emisdental-pricelist.csv", "/dental_services.csv", "/dental_services_english.csv"],
  };

  const normalize = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .normalize?.("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");

  const pickField = (fields, keywords) => {
    if (!fields || !fields.length) return null;
    const normFields = fields.map((f) => ({ raw: f, norm: normalize(f) }));
    for (const kw of keywords) {
      const normKw = normalize(kw);
      const found = normFields.find((ff) => ff.norm.includes(normKw));
      if (found) return found.raw;
    }
    return null;
  };

  // Load FX rate ONCE
  useEffect(() => {
    let cancelled = false;
    const fetchRate = async () => {
      try {
        const res = await getFxRate();
        if (!cancelled) {
          if (typeof res === "number") {
            setFxRate(res);
          } else if (res && res.rate) {
            setFxRate(res.rate);
            setFxLastUpdated(res.lastUpdated);
          }
        }
      } catch (err) {
        console.error("FX rate fetch failed:", err);
      }
    };
    fetchRate();
    return () => { cancelled = true; };
  }, []);

  // Parse CSV and calculate USD
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      setServices([]);
      const tries = fileCandidates[language];

      let parsed = null;
      for (const path of tries) {
        try {
          const res = await fetch(path);
          if (!res.ok) continue;
          const text = await res.text();
          parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
          if (parsed && (parsed.meta?.fields?.length > 0 || (parsed.data && parsed.data.length > 0))) break;
        } catch {}
      }

      if (cancelled) return;
      if (!parsed) {
        console.error("No CSV could be loaded for language:", language);
        setServices([]);
        setLoading(false);
        return;
      }

      const fields = parsed.meta?.fields?.length ? parsed.meta.fields : Object.keys(parsed.data[0] || {});

      const categoryField = pickField(fields, ["servicecategory","service category","category","danhmuc"]) || fields[0];
      const descField = pickField(fields, ["description","desc","mota","mo ta","mô tả"]) || fields[1];
      const unitField = pickField(fields, ["unit","donvi","don vi","đơn vị"]) || fields[2];
      const priceField = pickField(fields, ["price","gia","giá","serviceprice","service price"]) || fields[3];

      setLoading(true);

      const rows = parsed.data
        .filter(r => Object.values(r).some(v => v !== null && v !== undefined && String(v).trim() !== ""))
        .map(r => {
          const rawPrice = (r[priceField] || "").toString().trim();
          const isNumeric = !!rawPrice.match(/\d/);

          let priceUSD = rawPrice;
          if (isNumeric && fxRate) {
            const numbers = rawPrice.match(/\d[\d,]*/g);
            if (numbers?.length) {
              const nums = numbers.map(n => parseFloat(n.replace(/,/g, "")));
              const convert = (n) => Math.round((n / fxRate) * 2) / 2 - 0.01;
              priceUSD = nums.length === 1
                ? `${convert(nums[0]).toFixed(2)} USD`
                : nums.map(n => convert(n).toFixed(2)).join(" – ") + " USD";
            }
          }

          const priceVND = isNumeric ? `${rawPrice} VND` : rawPrice;

          return {
            __raw: r,
            category: (r[categoryField] || "").toString().trim(),
            desc: (r[descField] || "").toString().trim(),
            unit: (r[unitField] || "").toString().trim(),
            priceVND,
            priceUSD,
          };
        });

      if (!cancelled) {
        setServices(rows);
        setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [language, fxRate]);

  const grouped = services.reduce((acc, row) => {
    const cat = row.category || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(row);
    return acc;
  }, {});

  const filtered = Object.fromEntries(
    Object.entries(grouped).map(([cat, rows]) => [
      cat,
      rows.filter(r => [r.category,r.desc,r.unit,r.priceVND].join(" ").toLowerCase().includes(search.toLowerCase())),
    ])
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-4 uppercase">
          {language === "vietnamese" ? "Bảng giá dịch vụ nha khoa" : "International EMIS Dental Price List"}
        </h1>

        <div className="flex justify-center gap-4 mb-2 flex-wrap">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === "vietnamese" ? "Tìm dịch vụ..." : "Search service..."}
            className="border border-gray-500 rounded-xl p-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/3"
          />
          <button
            onClick={() => setShowUSD(!showUSD)}
            className="bg-blue-500 text-white rounded-xl px-4 py-2 text-sm md:text-base hover:bg-blue-600 transition"
          >
            {showUSD ? "Show VND" : "Show USD"}
          </button>
        </div>

        {fxLastUpdated && (
          <p className="text-sm text-gray-500 mt-1 text-right">
            {language === "vietnamese" 
              ? `Tỷ giá USD/VND cập nhật lần cuối: ${new Date(fxLastUpdated).toLocaleString()}` 
              : `FX rate last updated: ${new Date(fxLastUpdated).toLocaleString()}`}
          </p>
        )}

        {loading ? (
          <p className="text-center text-gray-500 mt-6">
            {fxRate ? "Calculating prices..." : "Loading..."}
          </p>
        ) : Object.keys(filtered).every(k => filtered[k].length === 0) ? (
          <p className="text-center text-gray-500 mt-6">{language === "vietnamese" ? "Không tìm thấy dịch vụ" : "No services found"}</p>
        ) : (
          <div className="overflow-x-auto mt-4">
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
                    {language === "vietnamese" ? "Giá dịch vụ" : "Service Price"} ({showUSD ? "USD" : "VND"})
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
                        {showUSD ? row.priceUSD : row.priceVND}
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
