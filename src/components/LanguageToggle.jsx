import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../slices/languageSlice';

export default function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const currentLanguage = useSelector((state) => state.language.language);

  const languages = [
    { code: 'vietnamese', label: 'VN' },
    { code: 'english', label: 'EN' },
    { code: 'french', label: 'FR' },
    { code: 'korean', label: '한' },
    { code: 'simplified', label: '简' },
    { code: 'traditional', label: '繁' }
  ];

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));   // 🔥 update Redux store
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-12 bg-white rounded-t-lg rounded-b-sm shadow-lg overflow-hidden border border-[#d4af37] border-b-0">
          <div className="overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full h-10 flex items-center justify-center text-sm font-medium transition-colors
                  ${currentLanguage === lang.code 
                    ? 'bg-[#d4af37] text-white' 
                    : 'text-[#1f2937] hover:bg-[#f7f2e7]'}
                  border-b border-[#d4af37] last:border-b-0`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-[#d4af37] text-white font-bold h-12 w-12 rounded-full shadow-lg transition-all flex items-center justify-center text-sm
          ${isOpen ? 'rounded-t-none rounded-b-full' : 'hover:bg-[#c19d30]'}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          currentLanguage === 'vietnamese' ? 'VN' : 
          currentLanguage === 'english' ? 'EN' : 
          currentLanguage === 'korean' ? '한' :
          currentLanguage === 'french' ? 'FR' :
          currentLanguage === 'simplified' ? '简' : '繁'
        )}
      </button>
    </div>
  );
}
