import { CalendarDays, Languages, Mail, MessageCircleMore, Send, ShieldCheck } from 'lucide-react';

const icons = [MessageCircleMore, Send, MessageCircleMore, Mail, CalendarDays, ShieldCheck];
const fallbackDescriptions = [
  'Connect with our team quickly for advice and guidance.',
  'Share your scan digitally for faster assessment.',
  'Get fast answers and appointment updates through WhatsApp.',
  'Reach our team for follow-up questions and document sharing.',
  'Understand the stages, visits, and expected progress of your care.',
  'Receive friendly assistance before, during, and after your treatment.',
];

export default function ServiceSupportList({ items = [], descriptions = [], note = '' }) {
  return (
    <section className="mt-8 rounded-3xl border border-[#eadfc9] bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          const description = descriptions[index] || fallbackDescriptions[index % fallbackDescriptions.length];
          return (
            <article
              key={item}
              className="rounded-2xl border border-[#efe6d3] bg-[#fffaf3] p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3e6bf] text-[#4b4b8f] shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-[#4b4b8f]">
                  {item}
                </h3>
              </div>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                {description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-[#f7f2e7] p-4 text-sm text-[#4b5563] md:text-base">
        <div className="flex items-start gap-3">
          <Languages className="mt-0.5 h-5 w-5 text-[#d4af37]" />
          <p>{note}</p>
        </div>
      </div>
    </section>
  );
}
