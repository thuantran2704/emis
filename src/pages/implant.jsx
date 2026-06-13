import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CheckCircle,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  ArrowRight,
  Users,
  Eye,
  Zap,
  Heart,
} from "lucide-react";
import implantContent from "../Translations/implantContent";

const ImplantGuide = () => {
  const language = useSelector((state) => state.language.language);
  const content = implantContent[language] || implantContent.english;

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* Section 1: Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{content.section1.title}</h1>
          <p className="text-xl text-gray-700 whitespace-pre-line mb-8">{content.section1.intro}</p>
          <div className="flex gap-4">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              {content.section1.primaryCta}
            </Link>
            <Link to="/contact" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
              {content.section1.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Could Implant Be Right */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section2.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{content.section2.intro}</p>
          <ul className="space-y-3 mb-12">
            {content.section2.checklist.map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{content.section2.whyMatters}</h3>
            <p className="text-gray-700 whitespace-pre-line">{content.section2.whyContent}</p>
          </div>
        </div>
      </section>

      {/* Section 3: Understanding Treatment */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section3.title}</h2>
          <p className="text-lg text-gray-700 whitespace-pre-line mb-12">{content.section3.intro}</p>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{content.section3.journey}</h3>
            <div className="flex flex-wrap gap-4">
              {content.section3.steps.map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div className="ml-4 text-gray-700 font-semibold">{step}</div>
                  {i < content.section3.steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Implant Options */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section4.title}</h2>
          <p className="text-lg text-gray-700 mb-12">{content.section4.intro}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {content.section4.options.map((option, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-700">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Treatment Planning */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section5.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{content.section5.intro}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {content.section5.evaluations.map((item, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 font-semibold bg-blue-50 p-6 rounded-lg">{content.section5.note}</p>
        </div>
      </section>

      {/* Section 6: Implant Systems */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section6.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{content.section6.intro}</p>
          <div className="flex flex-wrap gap-4 mb-12">
            {content.section6.systems.map((system, i) => (
              <div key={i} className="bg-gray-100 px-6 py-3 rounded-full text-gray-900 font-semibold">
                {system}
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 whitespace-pre-line bg-amber-50 border-l-4 border-amber-400 p-6 rounded">{content.section6.note}</p>
        </div>
      </section>

      {/* Section 7: Overseas Patients */}
      <section className="bg-blue-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section7.title}</h2>
          <p className="text-lg text-gray-700 whitespace-pre-line mb-12">{content.section7.intro}</p>
          <div className="bg-white rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.section7.costSection}</h3>
            <p className="text-lg text-gray-700 whitespace-pre-line">{content.section7.costContent}</p>
          </div>
          <Link to="/visitor-program" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            {content.section7.cta}
          </Link>
        </div>
      </section>

      {/* Section 8: Real Cases */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{content.section8.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{content.section8.intro}</p>
          <Link to="/doctors" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            {content.section8.cta}
          </Link>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{content.section9.title}</h2>
          <p className="text-xl mb-8 whitespace-pre-line">{content.section9.intro}</p>
          <div className="flex gap-4 justify-center mb-8">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              {content.section9.primaryCta}
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10">
              {content.section9.secondaryCta}
            </Link>
          </div>
          <p className="text-blue-100 italic">{content.section9.note}</p>
        </div>
      </section>
    </main>
  );
};

export default ImplantGuide;
