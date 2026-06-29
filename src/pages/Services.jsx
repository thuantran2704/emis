import React, { useState, useEffect, useMemo } from "react";
import Papa from "papaparse";
import { useSelector } from "react-redux";
import { getFxRate } from "../components/exchangeRate";

export default function Services() {
  const languageRedux = useSelector((state) => state.language.language);
  const language = languageRedux === "vietnamese" ? "vietnamese" : "english";

  const [rawRows, setRawRows] = useState([]);
  const [csvLoading, setCsvLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [fxRate, setFxRate] = useState(undefined); // undefined = loading, null = failed
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

  // FX rate — independent, loads in background
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

  // CSV — loads immediately, does not wait for FX
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setCsvLoading(true);
      setRawRows([]);
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
        setCsvLoading(false);
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
          return {
            category: r[categoryField]?.trim(),
            desc: r[descField]?.trim(),
            unit: r[unitField]?.trim(),
            rawPrice,
          };
        });

      if (!cancelled) {
        setRawRows(rows);
        setCsvLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [language]);

  // Compute VND + USD reactively — USD updates when fxRate arrives
  const services = useMemo(() => {
    return rawRows.map((r) => {
      const normalizedRawPrice = r.rawPrice.replace(/\s+/g, " ").trim();
      const hasVND = /\bvnd\b/i.test(normalizedRawPrice);
      const hasUSD = /\busd\b/i.test(normalizedRawPrice) || /\$/i.test(normalizedRawPrice);
      const numbers = r.rawPrice.match(/\d[\d,]*/g);
      const hasNumeric = Boolean(numbers?.length);

      let priceVND = "—";
      let priceUSD = null; // null = fx still loading

      if (normalizedRawPrice) {
        if (hasNumeric) {
          priceVND = hasVND || hasUSD ? normalizedRawPrice : `${normalizedRawPrice} VND`;
        } else {
          priceVND = normalizedRawPrice;
        }
      }

      if (hasNumeric && hasUSD && normalizedRawPrice) {
        const usdBase = normalizedRawPrice
          .replace(/\$/g, "")
          .replace(/\busd\b/gi, "")
          .replace(/\s+/g, " ")
          .trim();
        priceUSD = usdBase ? `${usdBase} USD` : "—";
      } else if (hasNumeric && !hasUSD && numbers?.length) {
        if (fxRate === undefined) {
          priceUSD = null; // still loading
        } else if (typeof fxRate === "number") {
          const convert = (n) => (Math.round((n / fxRate) * 2) / 2 - 0.01).toFixed(2);
          const nums = numbers.map((n) => parseFloat(n.replace(/,/g, "")));
          priceUSD =
            nums.length === 1
              ? `${convert(nums[0])} USD`
              : `${convert(nums[0])} – ${convert(nums[1])} USD`;
        } else {
          priceUSD = "—";
        }
      }

      return { category: r.category, desc: r.desc, unit: r.unit, priceVND, priceUSD };
    });
  }, [rawRows, fxRate]);

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

  if (csvLoading) {
    return (
      <div className="min-h-screen bg-[#f7f2e7] flex items-center justify-center">
        <p className="text-sm text-gray-400 tracking-[0.2em] uppercase">
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

          {/* PRICE LIST */}
          <div className="space-y-6">
            {Object.entries(filtered).map(([cat, rows]) => (
              <div key={cat}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-3 px-1">
                  <span className="w-[3px] h-4 rounded-full bg-[#C5AF73]" />
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C5AF73]">
                    {cat}
                  </h2>
                </div>

                {/* Rows */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-50/80">
                  {rows.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-5 px-5 py-4 hover:bg-[#faf7f0] transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-[13.5px] text-[#2a3439] leading-snug">
                          {r.desc}
                        </p>
                        {r.unit && r.unit !== "—" && (
                          <p className="text-[11px] text-gray-400 mt-1">
                            {r.unit}
                          </p>
                        )}
                      </div>
                      <div className="text-right shrink-0 pt-px">
                        <p className="text-[13.5px] font-semibold text-[#2a3439] whitespace-nowrap">
                          {r.priceVND}
                        </p>
                        {r.priceUSD === null ? (
                          <p className="text-[11px] text-gray-200 mt-0.5">···</p>
                        ) : r.priceUSD && r.priceUSD !== "—" ? (
                          <p className="text-[11px] text-gray-300 mt-0.5 whitespace-nowrap">
                            {r.priceUSD}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
