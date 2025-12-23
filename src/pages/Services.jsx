import React, { useState, useEffect, useMemo } from "react";
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

  const [fxRate, setFxRate] = useState(undefined);
  const [fxLastUpdated, setFxLastUpdated] = useState(null);

  const fileCandidates = {
    vietnamese: ["/dental_services_vn.csv", "/dental_services_vietnamese.csv", "/dental_services.csv"],
    english: ["/emisdental-pricelist.csv", "/dental_services.csv", "/dental_services_english.csv"],
  };

  const normalize = (s) =>
    (s || "").toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");

  const pickField = (fields, keywords) => {
    const normFields = fields.map((f) => ({ raw: f, norm: normalize(f) }));
    for (const kw of keywords) {
      const found = normFields.find((f) => f.norm.includes(normalize(kw)));
      if (found) return found.raw;
    }
    return null;
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await getFxRate();
        if (cancelled) return;
        if (typeof res === "number") {
          setFxRate(res);
        } else if (res?.rate) {
          setFxRate(res.rate);
          setFxLastUpdated(res.lastUpdated);
        } else {
          setFxRate(null);
        }
      } catch (err) {
        console.error("FX fetch failed:", err);
        if (!cancelled) setFxRate(null);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    if (fxRate === undefined) return;

    (async () => {
      setLoading(true);
      setServices([]);
      let parsed = null;
      for (const path of fileCandidates[language]) {
        try {
          const res = await fetch(path);
          if (!res.ok) continue;
          const text = await res.text();
          parsed = Papa.parse(text, { header: true, skipEmptyLines: true });
          if (parsed?.data?.length) break;
        } catch {}
      }

      if (cancelled || !parsed?.data?.length) {
        setLoading(false);
        return;
      }

      const fields = parsed.meta?.fields || Object.keys(parsed.data[0] || {});
      const categoryField = pickField(fields, ["category", "servicecategory", "danhmuc"]) || fields[0];
      const descField = pickField(fields, ["description", "desc", "mota"]) || fields[1];
      const unitField = pickField(fields, ["unit", "donvi"]) || fields[2];
      const priceField = pickField(fields, ["price", "gia", "serviceprice"]) || fields[3];

      const rows = parsed.data
        .filter((r) => Object.values(r).some((v) => v !== null && String(v).trim() !== ""))
        .map((r) => {
          const rawPrice = (r[priceField] || "").toString().trim();
          const numbers = rawPrice.match(/\d[\d,]*/g);
          let priceUSD = rawPrice;

          if (numbers?.length && typeof fxRate === "number") {
            const convert = (n) => (Math.round((n / fxRate) * 2) / 2 - 0.01).toFixed(2);
            const nums = numbers.map((n) => parseFloat(n.replace(/,/g, "")));
            priceUSD = nums.length === 1 ? `${convert(nums[0])} USD` : `${convert(nums[0])} – ${convert(nums[1])} USD`;
          } else if (fxRate === null) {
            priceUSD = "---";
          }

          return {
            category: r[categoryField]?.trim(),
            desc: r[descField]?.trim(),
            unit: r[unitField]?.trim(),
            priceVND: rawPrice ? `${rawPrice} VND` : rawPrice,
            priceUSD,
          };
        });

      if (!cancelled) {
        setServices(rows);
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [language, fxRate]);

  const grouped = useMemo(() => {
    return services.reduce((acc, r) => {
      const cat = r.category || "Uncategorized";
      acc[cat] ||= [];
      acc[cat].push(r);
      return acc;
    }, {});
  }, [services]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return Object.fromEntries(
      Object.entries(grouped).map(([cat, rows]) => [
        cat,
        rows.filter((r) =>
          `${r.category} ${r.desc} ${r.unit} ${r.priceVND}`.toLowerCase().includes(q)
        ),
      ])
    );
  }, [grouped, search]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        <div className="animate-pulse">Loading services…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 uppercase text-gray-800">
          {language === "vietnamese" ? "Bảng giá dịch vụ nha khoa" : "International EMIS Dental Price List"}
        </h1>

        {/* Search and Toggle Row */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 items-stretch sm:items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === "vietnamese" ? "Tìm dịch vụ..." : "Search service..."}
            className="border-2 border-gray-200 rounded-xl p-3 flex-grow focus:border-blue-400 outline-none transition-all"
          />
          <button
            onClick={() => setShowUSD(!showUSD)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            {showUSD ? "Show VND" : "Show USD"}
          </button>
        </div>

        {/* Notification Note */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-xl shadow-sm">
          <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
            {language === "vietnamese"
              ? "* Bảng giá dưới đây là giá gốc (USD/VND) và chưa bao gồm các chương trình khuyến mãi hiện có."
              : "* The price table below shows the original prices in USD/VND without any available promotion."}
          </p>
        </div>

        <div className="flex justify-end mb-3">
          {fxLastUpdated && (
            <p className="text-[10px] sm:text-xs text-gray-400 italic">
              Exchange Rate Updated: {new Date(fxLastUpdated).toLocaleString()}
            </p>
          )}
        </div>

        {/* Responsive Table Wrapper */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-800 text-white hidden md:table-header-group">
                <tr>
                  <th className="p-4 uppercase text-xs font-semibold tracking-wider w-1/4">Category</th>
                  <th className="p-4 uppercase text-xs font-semibold tracking-wider">Description</th>
                  <th className="p-4 uppercase text-xs font-semibold tracking-wider text-center">Unit</th>
                  <th className="p-4 uppercase text-xs font-semibold tracking-wider text-right">
                    Price ({showUSD ? "USD" : "VND"})
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {Object.entries(filtered).map(([cat, rows]) =>
                  rows.map((r, i) => (
                    <tr 
                      key={`${cat}-${i}`} 
                      className="flex flex-col md:table-row hover:bg-blue-50/30 transition-colors"
                    >
                      {/* Category - Only shows once per group on Desktop, shows every time on Mobile */}
                      <td className={`
                        p-4 font-bold text-blue-700 bg-blue-50/50 md:bg-transparent 
                        ${i === 0 ? 'md:table-cell' : 'md:hidden'} 
                        md:border-r md:border-gray-100
                      `}>
                        <span className="md:hidden text-[10px] uppercase text-gray-400 block mb-1">Category</span>
                        {cat}
                      </td>

                      {/* Description */}
                      <td className="p-4 md:table-cell">
                        <span className="md:hidden text-[10px] uppercase text-gray-400 block mb-1">Description</span>
                        <div className="text-gray-700 font-medium md:font-normal">{r.desc}</div>
                      </td>

                      {/* Unit */}
                      <td className="p-4 md:table-cell md:text-center text-sm text-gray-500">
                        <span className="md:hidden text-[10px] uppercase text-gray-400 block mb-1">Unit</span>
                        {r.unit}
                      </td>

                      {/* Price */}
                      <td className="p-4 md:table-cell text-right font-mono font-bold text-gray-900 md:text-blue-600 bg-gray-50 md:bg-transparent">
                        <span className="md:hidden text-[10px] uppercase text-gray-400 block mb-1 text-left">Price</span>
                        {showUSD ? r.priceUSD : r.priceVND}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* No Results State */}
          {Object.values(filtered).flat().length === 0 && (
            <div className="p-12 text-center text-gray-400">
              No services found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}