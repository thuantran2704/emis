import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import realCasesContent from '../Translations/realCasesContent';
import { realCaseIds, realCaseDetailImages } from '../data/realCaseAssets';
import zhannaBefore from '../pics/real-cases/zhanna-before.jpg';
import zhannaAfter from '../pics/real-cases/zhanna-after.jpg';
import klausAfterPortrait from '../pics/real-cases/klaus-after-portrait.png';
import sergeyZhannaFamily from '../pics/real-cases/sergey-zhanna.jpg';
import NotFound from './NotFound';

export default function RealCaseDetail() {
  const { caseId } = useParams();
  const language = useSelector((state) => state.language.language);
  const content = realCasesContent[language] || realCasesContent.english;
  const item = content.cases[caseId];
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://emisdental.com').replace(/\/$/, '');

  if (!realCaseIds.includes(caseId)) return <NotFound />;

  const socialImage = caseId === 'klaus' ? klausAfterPortrait : zhannaAfter;

  return (
    <main className="overflow-hidden bg-[#fdfcf8] pt-[72px]">
      <Helmet>
        <title>{item.seoTitle}</title>
        <meta name="description" content={item.seoDescription} />
        <meta property="og:title" content={item.seoTitle} />
        <meta property="og:description" content={item.seoDescription} />
        <meta property="og:image" content={new URL(socialImage, siteUrl).href} />
        <meta property="og:type" content="article" />
      </Helmet>

      <header className="bg-[#20313d] px-5 pb-28 pt-12 text-white sm:px-8 sm:pb-36 sm:pt-16">
        <div className="mx-auto max-w-7xl">
          <Link to="/real-cases" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#e9ce84] hover:text-white">
            <ArrowLeft size={17} aria-hidden="true" /> {content.back}
          </Link>
          <p className="mt-10 text-xs font-bold tracking-[0.22em] text-[#e1c579]">{item.category}</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.12] tracking-[-0.025em] sm:text-5xl lg:text-[4rem]">{item.title}</h1>
          <p className="mt-5 text-base font-semibold text-[#e5d9b9]">{item.name}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#e7e9e8]">{item.summary}</p>
        </div>
      </header>

      {caseId === 'sergey-zhanna' && (
        <figure className="mx-auto -mt-16 max-w-3xl px-5 sm:-mt-24 sm:px-8">
          <img src={sergeyZhannaFamily} alt={item.imageAlt} className="w-full rounded-[1.5rem] border-[6px] border-white shadow-[0_24px_70px_rgba(21,32,40,0.18)] sm:rounded-[2rem] sm:border-[10px]" decoding="async" />
        </figure>
      )}

      <div className={`mx-auto px-5 sm:px-8 ${caseId === 'sergey-zhanna' ? 'mt-10 max-w-2xl sm:mt-12' : '-mt-16 max-w-4xl sm:-mt-24'}`}>
        <div className="overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-white shadow-[0_24px_70px_rgba(21,32,40,0.18)] sm:rounded-[2rem] sm:border-[10px]">
          {caseId === 'sergey-zhanna' ? (
            <div className="grid gap-3 bg-white p-3">
              {[[zhannaBefore, content.beforeLabel], [zhannaAfter, content.afterLabel]].map(([src, label]) => (
                <figure key={label} className="relative overflow-hidden rounded-xl bg-[#eee8dd]">
                  <img src={src} alt={`${label}: ${item.galleryAlt}`} className="aspect-[15/6] w-full object-cover" decoding="async" />
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-[#20313d]/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">{label}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 bg-white p-3">
              {realCaseDetailImages[caseId].map((src, index) => {
                const label = index === 0 ? content.beforeLabel : content.afterLabel;
                return (
                  <figure key={label} className="relative overflow-hidden rounded-xl bg-[#eee8dd]">
                    <img src={src} alt={`${label}: ${item.name}`} className="aspect-[3/5] w-full object-cover" decoding="async" />
                    <figcaption className="absolute bottom-2 left-2 rounded-full bg-[#20313d]/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white sm:bottom-3 sm:left-3 sm:px-3 sm:text-xs sm:tracking-[0.12em]">{label}</figcaption>
                  </figure>
                );
              })}
            </div>
          )}
        </div>
        <p className="mt-3 text-xs leading-5 text-[#697278]">{content.imageCaption}</p>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20" aria-label={item.name}>
        <div className="grid gap-4 sm:grid-cols-3">
          {item.facts.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-[#e8dcc2] bg-[#faf6ec] p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8c6d27]">{label}</p>
              <p className="mt-3 text-lg font-semibold leading-7 text-[#263744]">{value}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          {item.sections.map((section, index) => (
            <section key={section.heading} className={index ? 'mt-12 border-t border-[#e7ddc9] pt-12' : ''}>
              <p className="text-xs font-bold tracking-[0.2em] text-[#9a772c]">{String(index + 1).padStart(2, '0')}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#24343f] sm:text-3xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-[#4a5861]">{paragraph}</p>)}
            </section>
          ))}
        </div>
      </section>

      <section className="bg-[#f5efe2] px-5 py-16 sm:px-8 sm:py-20">
        <figure className="mx-auto max-w-4xl border-l-4 border-[#c5a14b] pl-6 sm:pl-10">
          <blockquote className="text-2xl font-medium leading-snug text-[#253642] sm:text-3xl">“{item.quote}”</blockquote>
          <figcaption className="mt-6 text-sm font-bold text-[#74613d]">{item.quoteBy}</figcaption>
        </figure>
      </section>

      <section className="bg-[#f8f5ed] px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="case-directory-heading">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-[#97742d]">{content.caseCount}</p>
          <h2 id="case-directory-heading" className="mt-3 text-center text-3xl font-semibold text-[#24343f] sm:text-4xl">{content.storiesHeading}</h2>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {realCaseIds.map((id, index) => {
              const entry = content.cases[id];
              const isCurrent = id === caseId;
              const cardClass = `flex min-h-44 flex-col rounded-2xl border p-6 sm:p-7 ${isCurrent ? 'border-[#c9a75b] bg-[#f0e8d7]' : 'border-[#e3d7bd] bg-white transition hover:-translate-y-0.5 hover:border-[#b99446] hover:shadow-md'}`;
              const cardBody = (
                <>
                  <span className="text-xs font-bold tracking-[0.16em] text-[#96742c]">{content.caseLabel} {String(index + 1).padStart(2, '0')}</span>
                  <span className="mt-3 text-xl font-semibold leading-snug text-[#253642]">{entry.name}</span>
                  <span className="mt-1 text-sm leading-6 text-[#5b6870]">{entry.category}</span>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#80611f]">
                    {isCurrent ? content.currentStory : content.readCase}
                    {!isCurrent && <ArrowRight size={16} aria-hidden="true" />}
                  </span>
                </>
              );
              return isCurrent
                ? <div key={id} className={cardClass}>{cardBody}</div>
                : <Link key={id} to={`/real-cases/${id}`} className={cardClass}>{cardBody}</Link>;
            })}
          </div>
          <div className="mt-8 text-center">
            <Link to="/real-cases" className="inline-flex min-h-11 items-center gap-2 border-b-2 border-[#c9a652] text-sm font-bold text-[#263744] hover:text-[#80611f]">
              {content.back} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#20313d] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#e4c879]">{content.ctaEyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">{content.ctaTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#d6dce0]">{content.ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#d4af37] px-7 py-3 text-sm font-bold text-[#20313d] transition hover:bg-[#e8c763]">
              {content.ctaButton} <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a href="https://wa.me/84909967649" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#e4c879] px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              WhatsApp: +84 909 967 649
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
