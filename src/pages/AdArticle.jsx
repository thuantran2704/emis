import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ads from "../ads";

export default function AdArticle() {
  const { type } = useParams();
  const language = useSelector((state) => state.language.language);
  const isVI = language === "vietnamese";

  const ad = ads[type];

  if (!ad) {
    return (
      <main className="pt-32 text-center">
        <h1 className="text-2xl font-bold">Ad not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdfcf8] pt-28 pb-20">
      <Helmet>
        <title>{ad.metaTitle}</title>
        <meta name="description" content={ad.metaDescription} />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4">
        {/* HERO IMAGE */}
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={isVI ? ad.images.vi : ad.images.en}
            alt={ad.title}
            className="w-full object-cover"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-[#4b4b8f] mb-6 leading-snug">
          {ad.title}
        </h1>

        {/* INTRO */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          {ad.intro}
        </p>

        {/* CONTENT */}
        {ad.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-semibold text-[#4b4b8f] mb-4">
              {section.heading}
            </h2>

            {Array.isArray(section.content) ? (
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            )}
          </section>
        ))}

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-4 px-12 rounded-full rounded-full shadow-md transition"
          >
            {ad.cta}
          </Link>
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-8 border-t text-center text-gray-700">
          <p className="font-semibold">NHA KHOA QUỐC TẾ EMIS DENTAL</p>
          <p>62B Phạm Ngọc Thạch, Quận 3, TP.HCM</p>
          <p className="mt-1">
            Hotline: <strong>0919 100 021 – 0768 117 068</strong>
          </p>
          <p className="mt-1">www.emisdental.com</p>
          <p className="mt-1">8:00 – 20:00 (All days)</p>
        </div>
      </article>
    </main>
  );
}
