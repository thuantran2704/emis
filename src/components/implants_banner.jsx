import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowRight } from 'lucide-react';
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
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f1f2e] shadow-[0_30px_80px_-30px_rgba(15,31,46,0.6)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)', backgroundSize: '28px 28px' }}
          />
          <div className="pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full bg-[#d4af37]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-[#1d3953]/50 blur-3xl" />

          <div className="relative grid gap-8 p-6 md:grid-cols-[1.25fr_1fr] md:items-start md:gap-10 md:p-10">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] shadow-[0_0_10px_2px_rgba(212,175,55,0.6)]" />
                Implant Planner
              </p>
              <h2
                className="mt-3 text-3xl font-bold text-white md:text-4xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {planner.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">{planner.intro}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-[#0f1f2e] transition hover:bg-[#e3c45a] hover:shadow-[0_0_24px_rgba(212,175,55,0.4)]"
                >
                  {planner.primaryCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37]/40 hover:bg-white/10"
                >
                  {planner.secondaryCta}
                </Link>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-white/50 md:text-sm">{planner.note}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]/80">Treatment Paths</p>
              <ol className="mt-4 flex flex-col">
                {options.map((option, index) => (
                  <li
                    key={option.title}
                    className="group flex items-center gap-4 border-b border-white/10 py-3.5 transition-colors last:border-b-0 hover:bg-white/[0.03]"
                  >
                    <span
                      className="text-sm font-semibold tabular-nums text-[#d4af37]/60 transition-colors group-hover:text-[#d4af37]"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#d4af37] group-hover:shadow-[0_0_12px_2px_rgba(212,175,55,0.5)]" />
                    <span className="flex-1 text-sm text-white/85 transition-colors group-hover:text-white">{option.title}</span>
                    <ArrowRight className="h-4 w-4 translate-x-[-6px] text-[#d4af37] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" strokeWidth={1.6} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
