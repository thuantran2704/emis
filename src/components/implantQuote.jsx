import { implantContent } from "../Translations/implantContent";
import { useSelector } from 'react-redux';
export default function ImplantQuote() {
  const language = useSelector((state) => state.language.language);
  const content = implantContent[language] || implantContent.english;

  const legacyBanner = content?.banner;
  const fallbackTitle = content?.section3?.summaryTitle || content?.section3?.title || "";
  const fallbackSubtitle = content?.section3?.summaryText || content?.section3?.intro || "";

  const banner = legacyBanner
    ? legacyBanner
    : {
        title: fallbackTitle,
        highlight: "",
        subtitle: fallbackSubtitle,
      };

  return (
    <section className="py-20 bg-[#f8f7f3] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4b4b8f] mb-4">
          {banner.title}
          {banner.highlight ? (
            <>
              {" "}
              <span className="text-[#d4af37]">{banner.highlight}</span>
            </>
          ) : null}
        </h2>
        <p className="text-lg text-[#6b7280] italic">{banner.subtitle}</p>
      </div>
    </section>
  );
}
