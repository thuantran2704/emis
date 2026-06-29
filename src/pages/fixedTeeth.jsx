import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { fixedTeethContent } from '../Translations/fixedTeethContent';
import heroImage from '../pics/elder-person-teeth-uncomfortable.jpeg';
import allOnImage from '../pics/allon6.jpeg';
import overseasImage from '../pics/doctor-explaining-treatment-x-ray-dif-angle.jpg';
import familiarImage from '../pics/denture.jpeg';
import { sectionLabelClass, titleClass, sectionTitleClass } from '../styles/ui';
import ContactCtas from '../components/ContactCtas';
import { SectionHeading } from '../components/Section';

const bodyClass = 'text-[17px] md:text-[19px] text-gray-600 leading-relaxed';

const Checklist = ({ items }) => (
  <div className="grid sm:grid-cols-2 gap-3">
    {items.map((item) => (
      <div key={item} className="flex gap-2 items-start rounded-xl bg-white border border-[#dde5ec] px-4 py-3">
        <CheckCircle size={18} className="text-[#d4af37] mt-0.5 flex-shrink-0" aria-hidden="true" />
        <span className="text-[15px] text-[#2a3439]">{item}</span>
      </div>
    ))}
  </div>
);

const FixedTeeth = () => {
  const language = useSelector((state) => state.language.language);
  const content = fixedTeethContent[language] || fixedTeethContent.english;
  const { hero, familiar, whatAreFixedTeeth, allOnOptions, hopeToImprove, planning, journey, overseas, patientCases, team, finalCta } = content;

  return (
    <main className="bg-[#f7fafc] text-[#2a3439] pt-20">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
      </Helmet>

      {/* Hero */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className={sectionLabelClass}>{hero.eyebrow}</p>
              <h1 className={titleClass}>{hero.title}</h1>
              <p className={bodyClass}>{hero.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <ContactCtas primaryLabel={hero.primaryCta} secondaryLabel={hero.secondaryCta} />
              </div>
            </div>
            <div className="rounded-2xl border border-[#dfe7ef] shadow-md overflow-hidden">
              <img
                src={heroImage}
                alt="Illustration of an All-on-4 implant-supported fixed teeth restoration"
                className="w-full h-[300px] lg:h-[460px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Familiar concerns */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={familiar.eyebrow} title={familiar.title} />
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#dfe7ef] aspect-[4/3]">
              <img
                src={familiarImage}
                alt="Patient experiencing dental discomfort"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <Checklist items={familiar.items} />
              {familiar.note && (
                <p className={bodyClass + ' mt-7'}>{familiar.note}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What are fixed teeth + comparison */}
      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={whatAreFixedTeeth.eyebrow} title={whatAreFixedTeeth.title} intro={whatAreFixedTeeth.intro} />
          <h3 className="text-center text-[1.2rem] text-[#2a3439] mb-7">
            {whatAreFixedTeeth.comparisonTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {[whatAreFixedTeeth.comparison.removable, whatAreFixedTeeth.comparison.fixed].map((col) => (
              <article key={col.title} className="flex flex-col rounded-2xl border border-[#dbe4ec] bg-white p-7 lg:p-8 h-full">
                <h4 className="text-[1.25rem] text-[#2a3439] mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <CheckCircle size={18} className="text-[#d4af37] mt-1 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[16px] text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All-on-4 & All-on-6 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={allOnOptions.eyebrow} title={allOnOptions.title} intro={allOnOptions.intro} />
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <div className="rounded-2xl border border-[#dfe7ef] bg-[#f7fafc] p-5 lg:p-7">
              <img
                src={allOnImage}
                alt="Diagram comparing All-on-4 and All-on-6 implant configurations"
                className="w-full h-[280px] lg:h-[360px] object-contain object-center"
                loading="lazy"
              />
            </div>
            <div className="space-y-5">
              <p className={bodyClass}>{allOnOptions.detail}</p>
              <div className="rounded-2xl border border-[#d4af37] bg-[#fbf6e7] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#a8842a] font-semibold mb-2">
                  {allOnOptions.importantTitle}
                </p>
                <p className="text-[16px] text-[#2a3439] leading-relaxed">
                  {allOnOptions.importantText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What people hope to improve */}
      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={hopeToImprove.eyebrow} title={hopeToImprove.title} />
          <div className="max-w-4xl mx-auto">
            <Checklist items={hopeToImprove.items} />
          </div>
        </div>
      </section>

      {/* Planning */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={planning.eyebrow} title={planning.title} intro={planning.intro} />
          <div className="max-w-4xl mx-auto">
            <Checklist items={planning.items} />
            {planning.note && (
              <p className={bodyClass + ' mt-7 text-center'}>{planning.note}</p>
            )}
          </div>
        </div>
      </section>

      {/* Treatment journey */}
      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHeading eyebrow={journey.eyebrow} title={journey.title} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {journey.steps.map((step, index) => (
              <article key={step} className="rounded-2xl border border-[#dbe4ec] bg-white p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C5AF73] font-semibold">
                  {language === 'vietnamese' ? `Bước ${index + 1}` : `Step ${index + 1}`}
                </p>
                <p className="mt-2 text-[1.05rem] text-[#2a3439]">{step}</p>
              </article>
            ))}
          </div>
          {journey.note && (
            <p className={bodyClass + ' mt-10 text-center max-w-3xl mx-auto'}>{journey.note}</p>
          )}
        </div>
      </section>

      {/* Overseas patients */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-stretch">
            <div className="rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] p-7 lg:p-8">
              <p className={sectionLabelClass}>{overseas.eyebrow}</p>
              <h2 className={sectionTitleClass + ' mt-3'}>{overseas.title}</h2>
              <p className={bodyClass + ' mt-5'}>{overseas.intro}</p>
              <h3 className="mt-8 mb-3 text-[1.15rem] text-[#2a3439]">{overseas.costTitle}</h3>
              <p className={bodyClass}>{overseas.costText}</p>
              <p className={bodyClass + ' mt-4'}>{overseas.costTextSecondary}</p>
              <Link
                to={overseas.ctaPath}
                className="mt-7 inline-flex items-center gap-2 text-sm text-[#2a3439] hover:text-[#c19d30] font-semibold"
              >
                {overseas.cta}
                <ArrowRight size={15} className="text-[#d4af37]" aria-hidden="true" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#dfe7ef] shadow-sm bg-white">
              <img
                src={overseasImage}
                alt="Doctor reviewing a dental X-ray with a patient while explaining treatment"
                className="w-full h-full min-h-[320px] lg:min-h-[480px] object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient cases */}
      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className={sectionLabelClass}>{patientCases.eyebrow}</p>
          <h2 className={sectionTitleClass + ' mt-3'}>{patientCases.title}</h2>
          <p className={bodyClass + ' mt-5'}>{patientCases.intro}</p>
          <Link
            to={patientCases.ctaPath}
            className="mt-7 inline-flex items-center gap-2 text-sm text-[#2a3439] hover:text-[#c19d30] font-semibold"
          >
            {patientCases.cta}
            <ArrowRight size={15} className="text-[#d4af37]" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className={sectionLabelClass}>{team.eyebrow}</p>
          <h2 className={sectionTitleClass + ' mt-3'}>{team.title}</h2>
          <p className={bodyClass + ' mt-5'}>{team.intro}</p>
          <Link
            to={team.ctaPath}
            className="mt-7 inline-flex items-center gap-2 text-sm text-[#2a3439] hover:text-[#c19d30] font-semibold"
          >
            {team.cta}
            <ArrowRight size={15} className="text-[#d4af37]" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={sectionTitleClass}>{finalCta.title}</h2>
          <p className={bodyClass + ' mt-5'}>{finalCta.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ContactCtas primaryLabel={finalCta.primaryCta} secondaryLabel={finalCta.secondaryCta} />
          </div>
          {finalCta.note && (
            <p className="text-sm text-gray-500 mt-7 italic">{finalCta.note}</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default FixedTeeth;
