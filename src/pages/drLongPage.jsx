import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { DOCTORS, getDoctorTranslation } from '../data/doctors';
import drLongProfile from '../data/drLongProfile';

const doctor = DOCTORS.find((entry) => entry.id === 'dr-long');

export default function DrLongPage() {
  const language = useSelector((state) => state.language.language);
  const t = getDoctorTranslation(doctor, language);
  const content = drLongProfile[language] || drLongProfile.english;

  return (
    <main className="min-h-screen bg-white pt-20">
      <Helmet>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription || content.intro} />
      </Helmet>

      <section className="bg-[#fffaf0]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-8 lg:min-h-[720px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-20">
          <div>
            <Link to="/doctors" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#785914] hover:underline focus-visible:outline-offset-4">← {content.back}</Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#8a691f] sm:text-sm">{content.eyebrow}</p>
            <h1 className="mt-4 max-w-[14ch] text-4xl font-semibold leading-[1.1] text-[#193543] sm:text-5xl lg:text-[3.4rem]">{t.name}</h1>
            <p className="mt-4 text-base font-semibold text-[#765a1e] sm:text-lg">{t.role}</p>
            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-[#344b54] sm:text-lg">{content.intro}</p>
            <p className="mt-3 hidden max-w-[60ch] text-sm leading-relaxed text-[#49606a] lg:block lg:text-base">{content.supporting}</p>
            <Link to="/contact" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#d7bc7b] px-7 py-3 text-sm font-semibold text-[#193543] transition hover:bg-[#ebd59f] focus-visible:outline-offset-4">{content.book}</Link>
            <div className="mt-8 hidden flex-wrap gap-2 text-xs font-medium text-[#42525b] sm:text-sm lg:flex">
              <span className="rounded-full border border-[#dbc897] bg-white/75 px-4 py-2">{content.factOne}</span>
              <span className="rounded-full border border-[#dbc897] bg-white/75 px-4 py-2">{content.factTwo}</span>
              {t.registration && <span className="rounded-full border border-[#dbc897] bg-white/75 px-4 py-2">{t.registration}</span>}
            </div>
          </div>
          <div className="doctor-portrait-frame mx-auto w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-[#d7bc7b] shadow-[0_24px_60px_-30px_rgba(25,53,67,0.35)]">
            <img src={doctor.portrait} alt={t.name} className="aspect-[5/4] w-full object-cover object-top sm:aspect-[4/5]" fetchPriority="high" />
          </div>
          <div className="-mt-2 lg:hidden">
            <p className="max-w-[60ch] text-sm leading-relaxed text-[#49606a] sm:text-base">{content.supporting}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-[#42525b] sm:text-sm">
              <span className="rounded-full border border-[#dbc897] bg-white/75 px-4 py-2">{content.factOne}</span>
              <span className="rounded-full border border-[#dbc897] bg-white/75 px-4 py-2">{content.factTwo}</span>
              {t.registration && <span className="rounded-full border border-[#dbc897] bg-white/75 px-4 py-2">{t.registration}</span>}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#193543] py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.35fr_0.65fr] md:gap-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e2c783] sm:text-sm">{content.philosophyEyebrow}</p>
          <div>
            <h2 className="max-w-[24ch] text-3xl font-semibold leading-tight sm:text-4xl">{content.philosophyQuote}</h2>
            <p className="mt-7 max-w-[65ch] text-base leading-relaxed text-[#dfe9e8]">{content.philosophyBody}</p>
            <p className="mt-4 max-w-[65ch] border-l-2 border-[#d7bc7b] pl-4 text-sm leading-relaxed text-[#f5e9c9] sm:text-base">{content.philosophyNote}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2e7] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.35fr_0.65fr] md:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a691f] sm:text-sm">{content.educationEyebrow}</p>
            <h2 className="mt-4 max-w-[18ch] text-3xl font-semibold leading-tight text-[#193543] sm:text-4xl">{content.educationTitle}</h2>
          </div>
          <ol className="border-t border-[#d9ceb7]">
            {content.education.map(({ period, text }) => (
              <li key={period} className="grid gap-2 border-b border-[#d9ceb7] py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <span className="text-sm font-bold text-[#8a691f]">{period}</span>
                <span className="text-sm leading-relaxed text-[#344b54] sm:text-base">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a691f] sm:text-sm">{content.focusEyebrow}</p>
          <h2 className="mt-4 max-w-[24ch] text-3xl font-semibold leading-tight text-[#193543] sm:text-4xl">{content.focusTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.focus.map(({ title, body }, index) => (
              <article key={title} className="border border-[#e6dcc5] bg-[#fffdf8] p-6 sm:p-8">
                <span className="text-xs font-bold tracking-[0.18em] text-[#947028]">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-[#193543]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#49606a] sm:text-base">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2e7] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <h2 className="max-w-[24ch] text-3xl font-semibold leading-tight text-[#193543] sm:text-4xl">{content.languageTitle}</h2>
            <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-[#49606a]">{content.languageBody}</p>
          </div>
          <div className="border-l-4 border-[#d7bc7b] bg-white px-7 py-8 sm:px-10 sm:py-10">
            <h2 className="text-2xl font-semibold leading-snug text-[#193543]">{content.ctaTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#49606a] sm:text-base">{content.ctaBody}</p>
            <Link to="/contact" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#d7bc7b] px-7 py-3 text-sm font-semibold text-[#193543] transition hover:bg-[#ebd59f] focus-visible:outline-offset-4">{content.book}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
