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

  // Use undefined for "initial state" and null for "failed/empty state"
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
      const found = normFields.find((f) =>
        f.norm.includes(normalize(kw))
      );
      if (found) return found.raw;
    }
    return null;
  };

  /* ================================
      LOAD FX RATE (ONCE)
  ================================= */
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
          setFxRate(null); // Mark as attempt finished but no rate found
        }
      } catch (err) {
        console.error("FX fetch failed:", err);
        if (!cancelled) setFxRate(null); 
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ================================
      LOAD CSV + COMPUTE PRICES
      ONLY AFTER FX ATTEMPT IS DONE
  ================================= */
  useEffect(() => {
    let cancelled = false;

    // Only block if fxRate is exactly undefined (still fetching)
    // If it is null or a number, we proceed.
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

          parsed = Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
          });

          if (parsed?.data?.length) break;
        } catch (err) {
          console.error(`Failed to fetch ${path}`, err);
        }
      }

      if (cancelled || !parsed?.data?.length) {
        setLoading(false);
        return;
      }

      const fields =
        parsed.meta?.fields || Object.keys(parsed.data[0] || {});

      const categoryField =
        pickField(fields, ["category", "servicecategory", "danhmuc"]) ||
        fields[0];
      const descField =
        pickField(fields, ["description", "desc", "mota"]) || fields[1];
      const unitField =
        pickField(fields, ["unit", "donvi"]) || fields[2];
      const priceField =
        pickField(fields, ["price", "gia", "serviceprice"]) || fields[3];

      const rows = parsed.data
        .filter((r) =>
          Object.values(r).some(
            (v) => v !== null && String(v).trim() !== ""
          )
        )
        .map((r) => {
          const rawPrice = (r[priceField] || "").toString().trim();
          const numbers = rawPrice.match(/\d[\d,]*/g);

          let priceUSD = rawPrice;

          // Only calculate if we actually have a valid fxRate number
          if (numbers?.length && typeof fxRate === "number") {
            const convert = (n) =>
              (Math.round((n / fxRate) * 2) / 2 - 0.01).toFixed(2);

            const nums = numbers.map((n) =>
              parseFloat(n.replace(/,/g, ""))
            );

            priceUSD =
              nums.length === 1
                ? `${convert(nums[0])} USD`
                : `${convert(nums[0])} – ${convert(nums[1])} USD`;
          } else if (fxRate === null) {
              // If FX failed, we can't show USD properly
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

    return () => {
      cancelled = true;
    };
  }, [language, fxRate]);

  /* ================================
      FILTER + GROUP
  ================================= */
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
          `${r.category} ${r.desc} ${r.unit} ${r.priceVND}`
            .toLowerCase()
            .includes(q)
        ),
      ])
    );
  }, [grouped, search]);

  /* ================================
      HARD BLOCK UI DURING LOADING
  ================================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Loading services…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm md:text-base text-gray-600 mb-3 italic">
          The price table below shows the original prices in USD/VND without any available promotion
        </p>

        <h1 className="text-center text-3xl font-semibold mb-6 uppercase">
          {language === "vietnamese"
            ? "Bảng giá dịch vụ nha khoa"
            : "International EMIS Dental Price List"}
        </h1>

        <div className="flex gap-4 mb-4 justify-center flex-wrap">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              language === "vietnamese"
                ? "Tìm dịch vụ..."
                : "Search service..."
            }
            className="border rounded-xl p-2 w-2/3"
          />

          <button
            onClick={() => setShowUSD(!showUSD)}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl"
          >
            {showUSD ? "Show VND" : "Show USD"}
          </button>
        </div>

        {fxLastUpdated && (
          <p className="text-sm text-gray-500 text-right mb-2">
            FX updated: {new Date(fxLastUpdated).toLocaleString()}
          </p>
        )}

        <div className="overflow-x-auto">
          <table className="w-full border-2 border-gray-700 bg-white rounded-xl">
            <thead className="bg-gray-200 uppercase text-sm">
              <tr>
                <th className="border p-3">Category</th>
                <th className="border p-3">Description</th>
                <th className="border p-3">Unit</th>
                <th className="border p-3">
                  Price ({showUSD ? "USD" : "VND"})
                </th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(filtered).map(([cat, rows]) =>
                rows.map((r, i) => (
                  <tr key={`${cat}-${i}`} className="border-t">
                    {i === 0 && (
                      <td
                        rowSpan={rows.length}
                        className="border p-3 font-semibold bg-blue-100"
                      >
                        {cat}
                      </td>
                    )}
                    <td className="border p-3">{r.desc}</td>
                    <td className="border p-3 text-center">{r.unit}</td>
                    <td className="border p-3 text-right">
                      {showUSD ? r.priceUSD : r.priceVND}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}