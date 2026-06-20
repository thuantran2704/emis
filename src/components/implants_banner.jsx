import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { implantContent } from '../Translations/implantContent';

export default function ImplantPlannerBanner() {
  const language = useSelector((state) => state.language.language);
  const content = implantContent[language] || implantContent.english;
  const planner = content.section9;
  const options = (content.section4?.options || []).slice(0, 4);

  if (!planner) {
    return null;
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-[#dbe6ef] bg-gradient-to-br from-[#f9fcff] via-[#f4f8fc] to-[#eef4f9] shadow-sm">
          <div className="grid gap-8 p-6 md:grid-cols-[1.25fr_1fr] md:items-start md:gap-10 md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7b95ab]">Implant Planner</p>
              <h2
                className="mt-3 text-3xl font-bold text-[#16324a] md:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {planner.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5d7388] md:text-base">{planner.intro}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#c99533] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b4842b]"
                >
                  {planner.primaryCta}
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-[#9ab1c5] bg-white px-6 py-3 text-sm font-semibold text-[#1f3b57] transition hover:bg-[#f2f7fb]"
                >
                  {planner.secondaryCta}
                </Link>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-[#6f8da6] md:text-sm">{planner.note}</p>
            </div>

            <div className="rounded-2xl border border-[#dbe6ef] bg-white p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b95ab]">Treatment Paths</p>
              <ul className="mt-4 space-y-2.5">
                {options.map((option) => (
                  <li
                    key={option.title}
                    className="rounded-xl border border-[#e0e9f1] bg-[#f9fcff] px-3 py-2.5 text-sm text-[#35516a]"
                  >
                    {option.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
