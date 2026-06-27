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

  const [fxRate, setFxRate] = useState(undefined);
  const [fxLastUpdated, setFxLastUpdated] = useState(null);

  const fileCandidates = {
    vietnamese: [
      "/dental_services_vn.csv",
      "/dental_services_vietnamese.csv",
      "/dental_services.csv",
    ],
    english: [
      "/emisdental-pricelist.csv",
      "/dental_services.csv",
      "/dental_services_english.csv",
    ],
  };

  const columnLabels =
    language === "vietnamese"
      ? {
          category: "Danh mục",
          description: "Mô tả dịch vụ",
          unit: "Đơn vị",
          priceVND: "Giá chính thức (VND)",
          priceUSD: "Giá tham khảo (USD)",
          search: "Tìm dịch vụ...",
          title: "Bảng Giá Dịch Vụ Nha Khoa",
          eyebrow: "Minh bạch & rõ ràng",
          disclaimer:
            "Đồng Việt Nam (VND) là đơn vị tiền tệ chính thức cho tất cả dịch vụ. Giá hiển thị bằng ngoại tệ chỉ mang tính tham khảo và không có giá trị ràng buộc. Thanh toán thực hiện bằng VND theo quy định Việt Nam.",
        }
      : {
          category: "Category",
          description: "Description",
          unit: "Unit",
          priceVND: "Official Price (VND)",
          priceUSD: "Reference (USD)",
          search: "Search services…",
          title: "International EMIS Dental Price List",
          eyebrow: "Transparent Pricing",
          disclaimer:
            "Vietnamese Dong (VND) is the official currency for all services. Prices shown in other currencies are for reference only and do not constitute a binding offer. Final billing is conducted exclusively in VND in accordance with Vietnamese regulations.",
        };

  const normalize = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");

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
        } catch (err) {
          console.error(`Failed to fetch ${path}`, err);
        }
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
          const normalizedRawPrice = rawPrice.replace(/\s+/g, " ").trim();
          const hasVND = /\bvnd\b/i.test(normalizedRawPrice);
          const hasUSD = /\busd\b/i.test(normalizedRawPrice) || /\$/i.test(normalizedRawPrice);
          const numbers = rawPrice.match(/\d[\d,]*/g);
          const hasNumeric = Boolean(numbers?.length);
          let priceUSD = "—";
          let priceVND = "—";

          if (normalizedRawPrice) {
            if (hasNumeric) {
              priceVND = hasVND || hasUSD ? normalizedRawPrice : `${normalizedRawPrice} VND`;
            } else {
              priceVND = normalizedRawPrice;
              priceUSD = normalizedRawPrice;
            }
          }

          if (hasNumeric && hasUSD && normalizedRawPrice) {
            const usdBase = normalizedRawPrice
              .replace(/\$/g, "")
              .replace(/\busd\b/gi, "")
              .replace(/\s+/g, " ")
              .trim();
            priceUSD = usdBase ? `${usdBase} USD` : "—";
          }

          if (hasNumeric && !hasUSD && numbers?.length && typeof fxRate === "number") {
            const convert = (n) => (Math.round((n / fxRate) * 2) / 2 - 0.01).toFixed(2);
            const nums = numbers.map((n) => parseFloat(n.replace(/,/g, "")));
            priceUSD =
              nums.length === 1
                ? `${convert(nums[0])} USD`
                : `${convert(nums[0])} – ${convert(nums[1])} USD`;
          }

          return {
            category: r[categoryField]?.trim(),
            desc: r[descField]?.trim(),
            unit: r[unitField]?.trim(),
            priceVND,
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
      <div className="min-h-screen bg-[#f7f2e7] flex items-center justify-center">
        <p
          className="text-sm text-gray-400 tracking-[0.2em] uppercase"
        >
          Loading…
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f2e7] pt-20">

      {/* PAGE HEADER */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p
            className="uppercase tracking-[0.3em] text-[#C5AF73] mb-5 text-xs font-semibold"
          >
            {columnLabels.eyebrow}
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2a3439] mb-6"
          >
            {columnLabels.title}
          </h1>
          <p
            className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto italic"
          >
            {columnLabels.disclaimer}
          </p>
        </div>
      </section>

      {/* TABLE SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">

          {/* SEARCH + FX ROW */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C5AF73] text-sm pointer-events-none">
                ✦
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={columnLabels.search}
                className="w-full pl-10 pr-5 py-3 rounded-full border border-[#d4af37]/40 bg-white text-sm text-[#2a3439] placeholder-gray-300 focus:outline-none focus:border-[#d4af37] transition"
              />
            </div>
            {fxLastUpdated && (
              <p
                className="text-xs text-gray-400 shrink-0"
              >
                FX updated: {new Date(fxLastUpdated).toLocaleString()}
              </p>
            )}
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-2xl shadow-sm bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th
                    className="px-6 py-4 text-left text-xs uppercase tracking-[0.2em] text-[#C5AF73] font-semibold w-44"
                  >
                    {columnLabels.category}
                  </th>
                  <th
                    className="px-6 py-4 text-left text-xs uppercase tracking-[0.2em] text-[#C5AF73] font-semibold"
                  >
                    {columnLabels.description}
                  </th>
                  <th
                    className="px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-[#C5AF73] font-semibold w-24"
                  >
                    {columnLabels.unit}
                  </th>
                  <th
                    className="px-6 py-4 text-right text-xs uppercase tracking-[0.2em] text-[#C5AF73] font-semibold w-48"
                  >
                    {columnLabels.priceVND}
                  </th>
                  <th
                    className="px-6 py-4 text-right text-xs uppercase tracking-[0.2em] text-gray-300 font-semibold w-40"
                  >
                    {columnLabels.priceUSD}
                  </th>
                </tr>
              </thead>

              <tbody>
                {Object.entries(filtered).map(([cat, rows]) =>
                  rows.map((r, i) => (
                    <tr
                      key={`${cat}-${i}`}
                      className="border-t border-gray-50 hover:bg-[#faf7f0] transition-colors"
                    >
                      {i === 0 && (
                        <td
                          rowSpan={rows.length}
                          className="px-6 py-4 align-top"
                        >
                          <span className="text-[#2a3439] font-medium text-base leading-snug">
                            {cat}
                          </span>
                        </td>
                      )}
                      <td
                        className="px-6 py-4 text-gray-500"
                      >
                        {r.desc}
                      </td>
                      <td
                        className="px-6 py-4 text-center text-gray-400"
                      >
                        {r.unit}
                      </td>
                      <td
                        className="px-6 py-4 text-right font-semibold text-[#2a3439]"
                      >
                        {r.priceVND}
                      </td>
                      <td
                        className="px-6 py-4 text-right text-gray-300"
                      >
                        {r.priceUSD}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </main>
  );
}
