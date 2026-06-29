import { MapPin, Phone, Globe } from 'lucide-react';

// Shared "contact footer" card used by the promo/ad pages (crown, canal,
// whitening). Address / hotline / website. Pass isVI for language.
export default function AdContactFooter({ isVI }) {
  return (
    <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-[#dbe4ec]">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {isVI ? 'NHA KHOA QUỐC TẾ ' : ''}
          <span className="text-[#d4af37]">EMIS DENTAL</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#d4af37] to-[#C5AF73] rounded-full mx-auto" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-5 bg-[#f7fafc] rounded-xl">
          <div className="w-12 h-12 bg-[#eef2f6] rounded-full flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-6 h-6 text-[#16324a]" />
          </div>
          <h3 className="font-bold text-gray-800 mb-1">{isVI ? 'Địa chỉ' : 'Address'}</h3>
          <p className="text-gray-600 text-sm">62B Phạm Ngọc Thạch</p>
          <p className="text-gray-600 text-sm">
            {isVI ? 'P. Xuân Hòa, TP.HCM' : 'Xuân Hòa ward, District 3, HCMC'}
          </p>
        </div>

        <div className="text-center p-5 bg-[#f7fafc] rounded-xl">
          <div className="w-12 h-12 bg-[#eef2f6] rounded-full flex items-center justify-center mx-auto mb-3">
            <Phone className="w-6 h-6 text-[#16324a]" />
          </div>
          <h3 className="font-bold text-gray-800 mb-1">Hotline</h3>
          <p className="text-lg font-bold text-[#16324a]">+84 919 100 021</p>
          <p className="text-lg font-bold text-[#16324a]">+84 768 117 068</p>
        </div>

        <div className="text-center p-5 bg-[#f7fafc] rounded-xl">
          <div className="w-12 h-12 bg-[#eef2f6] rounded-full flex items-center justify-center mx-auto mb-3">
            <Globe className="w-6 h-6 text-[#16324a]" />
          </div>
          <h3 className="font-bold text-gray-800 mb-1">Website</h3>
          <a
            href="https://www.emisdental.com"
            className="text-[#16324a] hover:text-[#d4af37] hover:underline font-medium block"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.emisdental.com
          </a>
          <p className="text-gray-500 text-sm mt-1">
            {isVI
              ? '08:00 – 19:00 (Thứ 2–Thứ 7), 08:00 – 17:00 (Chủ nhật)'
              : '08:00 – 19:00 (Mon–Sat), 08:00 – 17:00 (Sun)'}
          </p>
        </div>
      </div>
    </div>
  );
}
