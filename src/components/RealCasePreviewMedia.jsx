import { realCasePortraits } from '../data/realCaseAssets';

export default function RealCasePreviewMedia({ id, item, loading = 'lazy' }) {
  const portrait = id === 'sergey-zhanna';

  return (
    <div className="grid items-center gap-5 bg-[#f5efe3] p-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] sm:gap-6 sm:p-6">
      <div className="mx-auto aspect-[2/3] w-36 overflow-hidden rounded-2xl bg-[#e7ddca] shadow-[0_8px_24px_rgba(31,49,61,0.12)] sm:w-full sm:max-w-52">
        {portrait ? (
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
        ) : (
          <img src={realCasePortraits[id]} alt={item.cardImageAlt} loading={loading} decoding="async" className="h-full w-full object-cover object-center" />
        )}
      </div>
      <figure className="border-l-2 border-[#c8a451] pl-4 text-[#20313d] sm:pl-5">
        <span aria-hidden="true" className="block h-8 font-serif text-5xl leading-none text-[#b88f34]">“</span>
        <blockquote className="mt-2 text-lg font-medium leading-7 sm:text-xl sm:leading-8">{item.cardQuote || item.quote}</blockquote>
        <figcaption className="mt-4 text-sm font-semibold text-[#6d6047]">{item.quoteBy}</figcaption>
      </figure>
    </div>
  );
}
