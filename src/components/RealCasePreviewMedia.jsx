import { realCasePortraits } from '../data/realCaseAssets';
import { useSelector } from 'react-redux';
import { realCaseReviews, translatedRealCaseReviews } from '../data/realCaseReviews';

export default function RealCasePreviewMedia({ id, item }) {
  const review = realCaseReviews[id];
  const language = useSelector((state) => state.language.language);
  const translation = translatedRealCaseReviews[language];
  const displayed = translation?.[id] || review;
  const langCode = { vietnamese: 'vi', french: 'fr', korean: 'ko', simplified: 'zh-Hans', traditional: 'zh-Hant' }[language] || 'en';

  return (
    <div className="grid items-center gap-6 bg-[#20313d] p-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] sm:gap-6 sm:p-6 lg:min-h-[31rem]">
      <figure className="mx-auto w-40 sm:w-full sm:max-w-52">
        <div className="aspect-[2/3] overflow-hidden rounded-2xl bg-[#e7ddca] shadow-[0_8px_24px_rgba(10,20,28,0.28)] ring-1 ring-white/25">
          <div
            role="img"
            aria-label={item.cardImageAlt}
            className="h-full w-full bg-no-repeat"
            style={{
              backgroundImage: `url(${realCasePortraits[id]})`,
              backgroundSize: '243% auto',
              backgroundPosition: '9% 50%',
            }}
          />
        </div>
        <figcaption className="mt-3 text-center font-serif text-sm italic leading-5 text-[#e0c578]">{review.name}</figcaption>
      </figure>
      <div lang={langCode} className="border-l-2 border-[#d7b45e] pl-4 text-[#f8f4e9] sm:pl-5">
        <span aria-hidden="true" className="block h-8 font-serif text-5xl leading-none text-[#e0c578]">“</span>
        <p className="mt-2 text-lg font-bold leading-snug sm:text-xl">{displayed.headline}</p>
        <blockquote className="mt-4 space-y-2 text-[0.96rem] leading-6 sm:text-base">
          {displayed.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </blockquote>
        {translation && (
          <details className="mt-4 text-xs leading-relaxed text-[#e3cf9d]">
            <summary className="cursor-pointer underline underline-offset-2">{translation.originalLabel}</summary>
            <div lang="en" className="mt-2 space-y-2 text-[#f8f4e9]">
              <p className="font-semibold">{review.headline}</p>
              {review.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </details>
        )}
        <span aria-hidden="true" className="mt-2 block text-right font-serif text-4xl leading-none text-[#e0c578]">”</span>
      </div>
    </div>
  );
}
