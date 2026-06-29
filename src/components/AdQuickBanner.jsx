import { Link } from 'react-router-dom';

// Thin gradient promo bar used at the top of ad pages (crown, canal, whitening).
// `items` is an array of { icon, text } (icon already sized e.g. w-4 h-4 mr-2).
export default function AdQuickBanner({ items, ctaLabel }) {
  return (
    <div className="bg-gradient-to-r from-[#16324a] to-[#2a3439] py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center text-white">
              {item.icon}
              <span className="font-semibold">{item.text}</span>
            </div>
          ))}
          <Link
            to="/contact"
            className="bg-white text-[#16324a] font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
