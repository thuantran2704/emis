import { implantContent } from "../Translations/implantContent";
import { useSelector } from 'react-redux';
export default function ImplantQuote() {
  const language = useSelector((state) => state.language.language);
  const { banner } = implantContent[language];

  return (
    <section className="py-20 bg-[#f8f7f3] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4b4b8f] mb-4">
          {banner.title}{" "}
          <span className="text-[#d4af37]">{banner.highlight}</span>
        </h2>
        <p className="text-lg text-[#6b7280] italic">{banner.subtitle}</p>
      </div>
    </section>
  );
}
