import equipmentContent from '../Translations/equipmentContent';
import vatechImg from '../pics/vatech.jpg';
import kehongImg from '../pics/kehong.jpg';
import hyperlightImg from '../pics/hyperlight.jpg';

export default function MachineBanner({ language }) {
  const content = equipmentContent[language] || equipmentContent.vietnamese;

  return (
    <section className="py-20 bg-[#fcfbf8]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#4b4b8f] mb-10 border-b-2 border-[#d4af37] pb-2 inline-block">
          {content.title}
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          {content.introText ||
            "Equipped with cutting-edge technology for safe, precise, and comfortable dental care."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Vatech */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <img
              src={vatechImg}
              alt="Vatech 3D CBCT Smart Plus"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4b4b8f] mb-2">
              {content.vatech.title || "3D CT Scanner"}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {content.vatech.equipmentIntro}
            </p>
          </div>

          {/* Kehong */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <img
              src={kehongImg}
              alt="Kehong A8+ Dental Chair"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4b4b8f] mb-2">
              {content.kehong.title || "Dental Chair"}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {content.kehong.equipmentIntro}
            </p>
          </div>

          {/* Hyperlight */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow">
            <img
              src={hyperlightImg}
              alt="HyperLight-G X-ray"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-[#4b4b8f] mb-2">
              {content.hyperlight.title || "Periapical X-ray"}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {content.hyperlight.equipmentIntro}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
