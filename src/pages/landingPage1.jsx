export default function LandingPage1() {
  return (
    <div className="w-full flex flex-col items-center bg-white text-black">

      {/* Section 1 – Paragraph + Image */}
      <section className="max-w-5xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <p>
            Veneers are ultra-thin porcelain or composite shells that cover the front
            surface of your teeth to improve shape, color, and symmetry. They are one
            of the most popular cosmetic dentistry solutions because they create an
            instantly brighter and more aligned smile with minimal tooth preparation.
          </p>
        </div>
        <img
          src="/images/veneer1.png"
          alt="veneers step"
          className="flex-1 w-full rounded-xl"
        />
      </section>

      {/* Section 2 – Image + Paragraph */}
      <section className="max-w-5xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img
          src="/images/veneer2.png"
          alt="veneer consultation"
          className="flex-1 w-full rounded-xl"
        />
        <div className="flex-1 text-lg leading-relaxed">
          <p>
            The veneer process typically begins with a consultation where your dentist
            evaluates your dental structure, listens to your cosmetic goals, and helps
            you choose the right shade and material. Digital imaging may also be used
            to preview your future smile on-screen.
          </p>
        </div>
      </section>

      {/* Section 3 – Paragraph + Image */}
      <section className="max-w-5xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <p>
            Veneers require only minimal enamel removal to ensure a perfect fit and
            natural appearance. This preserves most of the tooth structure while still
            allowing the veneer to bond securely and last for many years.
          </p>
        </div>
        <img
          src="/images/veneer3.png"
          alt="enamel preparation"
          className="flex-1 w-full rounded-xl"
        />
      </section>

      {/* Section 4 – Image + Paragraph */}
      <section className="max-w-5xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img
          src="/images/veneer4.png"
          alt="veneer bonding"
          className="flex-1 w-full rounded-xl"
        />
        <div className="flex-1 text-lg leading-relaxed">
          <p>
            Once the custom veneers are created, your dentist bonds them permanently
            to your natural teeth using advanced adhesive technology. After final
            adjustments, your smile looks brighter, more symmetrical, and naturally
            beautiful.
          </p>
        </div>
      </section>

      {/* Section 5 – Paragraph + Image */}
      <section className="max-w-5xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <p>
            Veneers are stain-resistant and durable, making them a long-term cosmetic
            solution for discoloration, chips, gaps, and minor misalignment. With
            proper care, they typically last 10–15 years or longer.
          </p>
        </div>
        <img
          src="/images/veneer5.png"
          alt="veneers durability"
          className="flex-1 w-full rounded-xl"
        />
      </section>

      {/* Section 6 – Image + Paragraph */}
      <section className="max-w-5xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img
          src="/images/veneer6.png"
          alt="veneers smile care"
          className="flex-1 w-full rounded-xl"
        />
        <div className="flex-1 text-lg leading-relaxed">
          <p>
            Proper care includes regular brushing, flossing, and avoiding habits like
            chewing on pens or ice. Veneers do not require special maintenance beyond
            maintaining normal oral hygiene and routine dental checkups.
          </p>
        </div>
      </section>

      {/* Section 7 – Paragraph + Image */}
      <section className="max-w-5xl w-full px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-lg leading-relaxed">
          <p>
            Many patients choose veneers for fast, non-surgical smile transformations.
            Whether you want a Hollywood-style smile or subtle enhancements, veneers
            can be tailored precisely to your aesthetic goals.
          </p>
        </div>
        <img
          src="/images/veneer7.png"
          alt="custom veneer result"
          className="flex-1 w-full rounded-xl"
        />
      </section>

      {/* Section 8 – Image + Paragraph */}
      <section className="max-w-5xl w-full px-4 py-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img
          src="/images/veneer8.png"
          alt="veneers final result"
          className="flex-1 w-full rounded-xl"
        />
        <div className="flex-1 text-lg leading-relaxed">
          <p>
            The final result is a bright, balanced, and confident smile that feels
            completely natural. Veneers are one of the most effective ways to elevate
            your appearance while maintaining the full function of your natural teeth.
          </p>
        </div>
      </section>
    </div>
  );
}
