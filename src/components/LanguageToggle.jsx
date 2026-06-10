import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../slices/languageSlice';

export default function LanguageToggle({ variant = 'floating' }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isNavbar = variant === 'navbar';

  const currentLanguage = useSelector((state) => state.language.language);

  const languages = [
    { code: 'vietnamese', label: 'VN' },
    { code: 'english',    label: 'EN' },
    { code: 'french',     label: 'FR' },
    { code: 'korean',     label: '한' },
    { code: 'simplified', label: '简' },
    { code: 'traditional',label: '繁' },
  ];

  const currentLabel = languages.find((l) => l.code === currentLanguage)?.label ?? 'EN';

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
    setIsOpen(false);
  };

  return (
    <div className={isNavbar ? 'relative' : 'fixed bottom-6 right-6 z-50'}>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={`absolute ${
            isNavbar ? 'top-full right-0 mt-2' : 'bottom-full right-0 mb-2'
          } w-16 rounded-xl border border-[#d4af37]/30 bg-white shadow-lg overflow-hidden`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full h-9 flex items-center justify-center text-xs font-semibold transition-colors border-b border-gray-50 last:border-b-0
                ${currentLanguage === lang.code
                  ? 'text-[#C5AF73] bg-[#faf7f0]'
                  : 'text-gray-400 hover:text-[#2a3439] hover:bg-[#f7f2e7]'
                }`}
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}

      {/* Trigger button — navbar variant */}
      {isNavbar ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#d4af37]/40 text-[#2a3439] text-xs font-semibold hover:border-[#d4af37] hover:text-[#C5AF73] transition-colors"
          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
          <span>{currentLabel}</span>
          <svg
            className={`w-3 h-3 text-[#C5AF73] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      ) : (
        /* Floating variant */
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#d4af37] text-white font-semibold h-12 w-12 rounded-full shadow-lg flex items-center justify-center text-sm hover:bg-[#c19d30] transition-colors"
          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
          {isOpen ? (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            currentLabel
          )}
        </button>
      )}

    </div>
  );
}
