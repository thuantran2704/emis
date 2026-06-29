// Numbered process/step graph. Vertical list on mobile, wrapping horizontal
// stepper on desktop — handles a few up to ~10 steps without overflowing.
export default function ProcessSteps({ steps = [], note }) {
  return (
    <div className="rounded-2xl border border-[#dbe4ec] bg-white px-5 py-8 lg:px-10 lg:py-12">
      <ol className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-x-6 lg:gap-y-8">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex flex-1 items-center gap-4 lg:basis-40 lg:max-w-[13rem] lg:flex-col lg:items-center lg:text-center"
          >
            <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#d4af37] text-sm font-semibold text-white">
              {index + 1}
            </span>
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2a3439] lg:text-[12px]">
              {step}
            </p>
          </li>
        ))}
      </ol>
      {note && (
        <p className="mt-8 text-[13px] leading-6 text-gray-600 lg:text-center lg:text-[14px] lg:leading-7">
          {note}
        </p>
      )}
    </div>
  );
}
