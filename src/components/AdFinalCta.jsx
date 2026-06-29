import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';

// Dark gradient "final CTA" card used by ad pages (crown, canal, whitening).
// Pass `icon` already sized (e.g. w-16 h-16 ... mb-4). `subtext` is optional.
export default function AdFinalCta({ icon, title, message, buttonLabel, subtext }) {
  return (
    <section className="bg-gradient-to-r from-[#16324a] via-[#1d3953] to-[#2a3439] rounded-3xl p-8 md:p-10 text-center shadow-xl">
      {icon}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
      <p className="text-[#d6e2ed] mb-8 max-w-2xl mx-auto">{message}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-white text-[#16324a] font-bold text-lg py-4 px-8 rounded-full shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {buttonLabel}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
        <a
          href="tel:+84919100021"
          className="inline-flex items-center justify-center bg-[#16324a] text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-[#0f2436] transition-all duration-300"
        >
          <Phone className="w-5 h-5 mr-2" />
          +84 919 100 021
        </a>
      </div>
      {subtext && <p className="text-[#c2d2df] text-sm font-semibold">{subtext}</p>}
    </section>
  );
}
