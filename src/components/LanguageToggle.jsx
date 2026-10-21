import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { setLanguage } from '../slices/languageSlice';

export default function LanguageToggle({ variant = 'floating', compact = false, showLabel = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const dispatch = useDispatch();
  const isNavbar = variant === 'navbar';

  const currentLanguage = useSelector((state) => state.language.language);

  const languages = [
    { code: 'vietnamese', label: 'VN', name: 'Tiếng Việt' },
    { code: 'english',    label: 'EN', name: 'English' },
    { code: 'french',     label: 'FR', name: 'Français' },
    { code: 'korean',     label: '한', name: '한국어' },
    { code: 'simplified', label: '简', name: '简体中文' },
    { code: 'traditional',label: '繁', name: '繁體中文' },
  ];

  const currentLabel = currentLanguage === 'simplified' || currentLanguage === 'traditional'
    ? '中'
    : languages.find((l) => l.code === currentLanguage)?.label ?? 'EN';

  useEffect(() => {
    if (!isOpen) return;
    const closeOnOutsideClick = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
    setIsOpen(false);
  };

  return (
    <div ref={rootRef} className={isNavbar ? 'relative' : 'fixed bottom-6 right-6 z-50'}>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={`absolute ${
            isNavbar ? 'top-full right-0 mt-2' : 'bottom-full right-0 mb-2'
          } w-56 rounded-xl border border-[#d4af37]/30 bg-white shadow-lg overflow-hidden`}
          role="group"
          aria-label="Choose language"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              aria-label={lang.name}
              aria-current={currentLanguage === lang.code ? 'true' : undefined}
              role="menuitem"
              className={`w-full min-h-11 flex items-center gap-3 px-3 py-2 text-left text-xs font-semibold transition-colors border-b border-gray-100 last:border-b-0
                ${currentLanguage === lang.code
                  ? 'text-[#806019] bg-[#faf7f0]'
                  : 'text-[#46576a] hover:text-[#2a3439] hover:bg-[#f7f2e7]'
                }`}
            >
              <span className="flex h-6 w-7 shrink-0 items-center justify-center rounded-full bg-[#f7f2e7] text-[10px]">{lang.label}</span>
              <span className="min-w-0 whitespace-normal break-words text-[12px] leading-4">{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Trigger button â€” navbar variant */}
      {isNavbar ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Choose language"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          className={`flex items-center rounded-full border border-[#d4af37]/40 text-[#2a3439] font-semibold hover:border-[#d4af37] hover:bg-[#d4af37]/15 hover:text-[#111317] transition-colors ${
            compact
              ? 'h-9 min-w-[52px] justify-center gap-1 px-2 text-[11px] leading-none'
              : showLabel
                ? 'h-10 gap-2 rounded-xl border-[#d4af37]/60 bg-[#fffaf0] px-3 text-xs shadow-sm'
                : 'gap-1.5 px-3 py-2 text-xs'
          }`}
        >
          {showLabel && <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#806019]">Languages</span>}
          <span className={showLabel ? 'flex h-6 min-w-6 items-center justify-center rounded-full bg-[#f1dfaa] px-1 text-[11px]' : ''}>{currentLabel}</span>
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
          aria-label="Choose language"
          aria-expanded={isOpen}
          className="bg-[#d4af37] text-[#202a30] font-semibold h-12 w-12 rounded-full shadow-lg flex items-center justify-center text-sm hover:bg-[#e1be50] transition-colors"
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

