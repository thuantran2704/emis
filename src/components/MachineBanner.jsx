// components/EquipmentBanner.jsx
import React from 'react';
import equipmentContent from '../Translations/EquipmentContent';
import vatechImg from '../pics/vatech.jpg';
import kehongImg from '../pics/kehong.jpg';
import hyperlightImg from '../pics/hyperlight.jpg';
import uvStorageImg from '../pics/uvStorage.jpg';
import hyundaiImg from '../pics/hyundai.jpg';
import sterileRoomImg from '../pics/sterileRoom.jpg';

export default function EquipmentBanner({ language }) {
  const isVN = language === 'vietnamese';
  const content = isVN ? equipmentContent.vietnamese : equipmentContent.english;

  const machines = [
    { key: 'vatech', img: vatechImg, alt: 'Vatech 3D CBCT Smart Plus' },
    { key: 'kehong', img: kehongImg, alt: 'Kehong A8+ Dental Chair' },
    { key: 'hyperlight', img: hyperlightImg, alt: 'HyperLight-G X-ray Machine' },
    { key: 'uvStorage', img: uvStorageImg, alt: 'UV Storage Sterilizer' },
    { key: 'hyundai', img: hyundaiImg, alt: 'Hyundai Autoclave' },
    { key: 'sterileRoom', img: sterileRoomImg, alt: 'Sterile Room' },
  ];

  const qualityStamp = isVN ? 'Chất lượng đảm bảo' : 'Quality Certified';

  return (
    <section className="py-20 bg-[#fcfbf8]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#4b4b8f] mb-10 border-b-2 border-[#d4af37] pb-2 inline-block">
          {content.title}
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          {content.introText ||
            (isVN
              ? 'Trang bị công nghệ tiên tiến mang lại sự an toàn, chính xác và thoải mái trong nha khoa.'
              : 'Equipped with cutting-edge technology for safe, precise, and comfortable dental care.')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {machines.map(({ key, img, alt }) => (
            <div
              key={key}
              className="relative bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              {/* Quality Badge */}
              <div className="absolute top-4 right-4 bg-[#d4af37] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {qualityStamp}
              </div>

              <img
                src={img}
                alt={alt}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold text-[#4b4b8f] mb-2">
                {content[key].title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {content[key].equipmentIntro}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
