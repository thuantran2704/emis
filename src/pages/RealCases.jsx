import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import realCasesContent from '../Translations/realCasesContent';
import { realCaseIds, realCaseImages } from '../data/realCaseAssets';

function RealCaseCard({ id, content, index }) {
  const item = content.cases[id];
  return (
    <article id={id} className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[1.5rem] border border-[#e7ddc9] bg-white shadow-[0_18px_45px_rgba(27,40,50,0.07)] transition-transform duration-300 hover:-translate-y-1">
      <Link to={`/real-cases/${id}`} className="relative block overflow-hidden bg-[#eee8db]" aria-label={`${content.readCase}: ${item.name}`}>
        <img
          src={realCaseImages[id]}
          alt={id === 'klaus' ? item.cardImageAlt : item.imageAlt}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className={`aspect-[4/3] w-full bg-[#e9e3d8] transition-transform duration-500 group-hover:scale-[1.03] ${id === 'klaus' ? 'object-contain' : 'object-cover object-center'}`}
        />
        <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-bold tracking-[0.13em] text-[#263745] backdrop-blur-sm">
          {content.caseLabel} {String(index + 1).padStart(2, '0')}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
        <p className="text-xs font-bold tracking-[0.17em] text-[#927028]">{item.category}</p>
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#24333e] sm:text-[1.75rem]">
          <Link to={`/real-cases/${id}`} className="hover:text-[#86651f]">{item.title}</Link>
        </h2>
        <p className="mt-2 text-sm font-semibold text-[#6a7277]">{item.name}</p>
        <p className="mt-5 flex-1 text-[0.98rem] leading-7 text-[#4b5860]">{item.summary}</p>
        <Link to={`/real-cases/${id}`} className="mt-7 inline-flex min-h-11 items-center gap-2 self-start border-b-2 border-[#c7a048] pb-1 text-sm font-bold text-[#263745] transition-colors hover:text-[#87651e]">
          {content.readCase} <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function RealCases() {
  const language = useSelector((state) => state.language.language);
  const content = realCasesContent[language] || realCasesContent.english;
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://emisdental.com').replace(/\/$/, '');

  return (
    <main className="overflow-hidden bg-[#fdfcf8] pt-[72px]">
      <Helmet>
        <title>{content.seoTitle}</title>
        <meta name="description" content={content.seoDescription} />
        <meta property="og:title" content={content.seoTitle} />
        <meta property="og:description" content={content.seoDescription} />
        <meta property="og:image" content={new URL(realCaseImages['sergey-zhanna'], siteUrl).href} />
      </Helmet>

      <section className="relative overflow-hidden border-b border-[#e7dcc4] bg-[radial-gradient(circle_at_84%_10%,#f3e7c6_0%,#faf7ee_40%,#f6f3ec_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div aria-hidden="true" className="absolute -right-24 -top-36 h-[28rem] w-[28rem] rounded-full border border-[#d6bd78]/25" />
        <div aria-hidden="true" className="absolute -right-10 -top-16 h-[22rem] w-[22rem] rounded-full border border-[#d6bd78]/25" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[0.24em] text-[#886c2d]">{content.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#20323e] sm:text-5xl lg:text-[4rem]">
            {content.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#44525b] sm:text-xl">{content.intro}</p>
          <nav aria-label={content.storiesHeading} className="mt-9 flex max-w-3xl flex-col gap-2 border-t border-[#d8c9a9] pt-5 sm:flex-row sm:gap-3">
            {realCaseIds.map((id, index) => (
              <a key={id} href={`#${id}`} className="inline-flex min-h-12 flex-1 items-center justify-between gap-3 rounded-xl border border-[#dccda8] bg-white/75 px-4 py-2 text-sm font-semibold text-[#263744] transition hover:border-[#b79445] hover:bg-white">
                <span className="text-xs font-bold text-[#96742c]">{String(index + 1).padStart(2, '0')}</span>
                <span className="flex-1">{content.cases[id].name}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20" aria-labelledby="case-list-heading">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3 sm:mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#97742d]">{content.caseCount}</p>
            <h2 id="case-list-heading" className="mt-2 text-2xl font-semibold text-[#24343f] sm:text-3xl">{content.storiesHeading}</h2>
          </div>
        </div>
        <div className="grid gap-7 md:grid-cols-2 lg:gap-9">
          {realCaseIds.map((id, index) => <RealCaseCard key={id} id={id} content={content} index={index} />)}
        </div>
        <p className="mt-8 max-w-3xl border-l-2 border-[#c9a652] pl-5 text-sm leading-6 text-[#657078]">{content.introNote}</p>
      </section>

      <section className="bg-[#20313d] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#e4c879]">{content.ctaEyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">{content.ctaTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#d6dce0]">{content.ctaText}</p>
          </div>
          <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#d4af37] px-7 py-3 text-sm font-bold text-[#20313d] transition hover:bg-[#e8c763]">
            {content.ctaButton} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
