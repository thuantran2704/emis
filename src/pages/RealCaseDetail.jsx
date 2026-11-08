import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import realCasesContent from '../Translations/realCasesContent';
import { RealCaseCard } from './RealCases';
import { realCaseIds, realCaseImages } from '../data/realCaseAssets';
import zhannaBefore from '../pics/real-cases/zhanna-before.jpg';
import zhannaAfter from '../pics/real-cases/zhanna-after.jpg';
import klausAfter from '../pics/real-cases/klaus-after.jpg';
import NotFound from './NotFound';

const galleryImages = {
  klaus: klausAfter,
};

export default function RealCaseDetail() {
  const { caseId } = useParams();
  const language = useSelector((state) => state.language.language);
  const content = realCasesContent[language] || realCasesContent.english;
  const item = content.cases[caseId];
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://emisdental.com').replace(/\/$/, '');

  if (!realCaseIds.includes(caseId)) return <NotFound />;

  const otherId = realCaseIds.find((id) => id !== caseId);

  return (
    <main className="overflow-hidden bg-[#fdfcf8] pt-[72px]">
      <Helmet>
        <title>{item.seoTitle}</title>
        <meta name="description" content={item.seoDescription} />
        <meta property="og:title" content={item.seoTitle} />
        <meta property="og:description" content={item.seoDescription} />
        <meta property="og:image" content={new URL(realCaseImages[caseId], siteUrl).href} />
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

      <div className="mx-auto -mt-16 max-w-7xl px-5 sm:-mt-24 sm:px-8">
        <div className="relative overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-[#ede8df] shadow-[0_24px_70px_rgba(21,32,40,0.18)] sm:rounded-[2rem] sm:border-[10px]">
          <img src={realCaseImages[caseId]} alt={item.imageAlt} className="aspect-[4/3] w-full object-cover object-center md:aspect-[16/9]" decoding="async" />
          {caseId === 'klaus' && (
            <div className="absolute inset-x-2 bottom-3 grid grid-cols-2 text-center text-xs font-bold uppercase tracking-[0.13em] text-white sm:bottom-5">
              <span className="mx-auto rounded-full bg-[#20313d]/85 px-3 py-1">{content.beforeLabel}</span>
              <span className="mx-auto rounded-full bg-[#20313d]/85 px-3 py-1">{content.afterLabel}</span>
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

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
          <div className="max-w-3xl">
            {item.sections.map((section, index) => (
              <section key={section.heading} className={index ? 'mt-12 border-t border-[#e7ddc9] pt-12' : ''}>
                <p className="text-xs font-bold tracking-[0.2em] text-[#9a772c]">{String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#24343f] sm:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-[#4a5861]">{paragraph}</p>)}
              </section>
            ))}
          </div>
          <aside className="lg:pt-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-[#e9ddc4] bg-[#f5f0e4] p-3">
              {caseId === 'sergey-zhanna' ? (
                <div className="space-y-3">
                  {[[zhannaBefore, content.beforeLabel], [zhannaAfter, content.afterLabel]].map(([src, label]) => (
                    <figure key={label}>
                      <img src={src} alt={`${label}: ${item.galleryAlt}`} loading="lazy" decoding="async" className="w-full rounded-xl object-cover" />
                      <figcaption className="px-1 pt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#775d25]">{label}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <img src={galleryImages[caseId]} alt={item.galleryAlt} loading="lazy" decoding="async" className="w-full rounded-xl object-cover" />
              )}
              <p className="px-2 pb-1 pt-3 text-xs leading-5 text-[#68737a]">{content.imageCaption}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f5efe2] px-5 py-16 sm:px-8 sm:py-20">
        <figure className="mx-auto max-w-4xl border-l-4 border-[#c5a14b] pl-6 sm:pl-10">
          <blockquote className="text-2xl font-medium leading-snug text-[#253642] sm:text-3xl">“{item.quote}”</blockquote>
          <figcaption className="mt-6 text-sm font-bold text-[#74613d]">{item.quoteBy}</figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-bold tracking-[0.2em] text-[#97742d]">{content.moreCases}</p>
        <div className="mt-6 max-w-xl"><RealCaseCard id={otherId} content={content} index={realCaseIds.indexOf(otherId)} /></div>
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
