export default function DoctorProfileSection({ number, title, items, tone = 'white' }) {
  return (
    <section className={`py-16 md:py-20 ${tone === 'cream' ? 'bg-[#f7f2e7]' : 'bg-white'}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.35fr_0.65fr] md:gap-16">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#8a691f]">{number}</p>
          <h2 className="max-w-md text-2xl font-semibold leading-snug text-[#193543] sm:text-3xl">{title}</h2>
        </div>
        <ul className="divide-y divide-[#d9dedb] border-t border-[#d9dedb]">
          {items.map((item) => (
            <li key={item} className="flex gap-4 py-4 text-sm leading-relaxed text-[#344b54] sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a48034]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
