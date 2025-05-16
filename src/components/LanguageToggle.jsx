import { useState } from 'react';

export default function LanguageToggle({ currentLanguage, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'english', label: 'EN' },
    { code: 'vietnamese', label: 'VN' },
    { code: 'simplified', label: '简' },
    { code: 'traditional', label: '繁' }
  ];

  const handleLanguageChange = (lang) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Toggle Button */}
      <button 
        onClick={toggleMenu}
        className="bg-[#d4af37] text-white font-bold py-3 px-4 rounded-full shadow-lg hover:bg-[#c19d30] transition-all flex items-center gap-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {currentLanguage === 'english' ? 'EN' : 
         currentLanguage === 'vietnamese' ? 'VN' : 
         currentLanguage === 'simplified' ? '简' : '繁'}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Language Options Panel */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-40 bg-white rounded-lg shadow-xl overflow-hidden border border-[#d4af37]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-left transition-colors
                ${currentLanguage === lang.code 
                  ? 'bg-[#d4af37] text-white' 
                  : 'text-[#1f2937] hover:bg-[#f7f2e7]'}
                flex items-center gap-2`}
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              {lang.label}
              {currentLanguage === lang.code && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}