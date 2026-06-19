import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../pics/logo.jpg';
import navbarContent from '../Translations/navbarContent';
import { useSelector } from 'react-redux';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const language = useSelector((state) => state.language.language);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isJuneOpen, setIsJuneOpen] = useState(false);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
    setIsJuneOpen(false);
  };

  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleAbout = () => {
    setIsAboutOpen((prev) => !prev);
    setIsJuneOpen(false);
  };
  const toggleJune = () => {
    setIsJuneOpen((prev) => !prev);
    setIsAboutOpen(false);
  };

  const content = navbarContent[language] || navbarContent.english;

  const navFont = {
    fontFamily: "'Be Vietnam Pro', sans-serif",
    fontWeight: '600',
  };

  const dropdownFont = {
    fontFamily: "'Be Vietnam Pro', sans-serif",
    fontWeight: '500',
  };

  const navLinkClass = (path) =>
    `relative inline-flex h-10 items-center px-3 text-sm tracking-wide transition-colors duration-200 ${
      location.pathname === path
        ? 'text-[#fff4d5] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-[#d4af37]'
        : 'text-[#f3e2b0]/90 hover:text-white'
    }`;

  const mobileLinkClass = (path) =>
    `block rounded-xl px-3 py-2.5 text-sm transition ${
      location.pathname === path
        ? 'bg-[#f5e9c2] text-[#1f2937]'
        : 'text-[#2a3439] hover:bg-[#f3ead2]'
    }`;

  const aboutDropdownItems = [
    { name: content.drSon, path: '/dr-son' },
    { name: content.drTu, path: '/dr-tu' },
    { name: content.doctors, path: '/doctors' },
    { name: content.veneer, path: '/veneer' },
    { name: content.implant, path: '/implant' },
    { name: content.equipment, path: '/equipment' },
  ];

  const juneDropdownItems = [
    { name: content.crown, path: '/crownAd' },
    { name: content.whitening, path: '/whiteningAd' },
    { name: content.canal, path: '/canal' },
  ];

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-[#2a3439]/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeAllMenus}
        />
      )}

      <nav className="fixed top-0 z-50 w-full border-b border-[#c8a95f]/45 bg-gradient-to-r from-[#111317]/96 via-[#16352f]/94 to-[#111317]/96 backdrop-blur-md shadow-[0_14px_36px_rgba(6,12,10,0.55)]">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="group flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#d4af37]/60 shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
              <img src={logo} alt="Nha Khoa Emis" className="h-full w-full object-cover" />
            </div>
            <span
              className="text-lg font-extrabold leading-none tracking-[0.02em] text-[#f8edcf] sm:text-xl"
              style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
              }}
            >
              <span className="text-white">EMIS</span>{' '}
              <span className="text-[#d4af37]">DENTAL</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <Link to="/" className={navLinkClass('/')} style={navFont}>
              {content.home}
            </Link>

            <div className="relative flex items-center">
              <Link
                to="/about"
                className={navLinkClass('/about')}
                style={navFont}
              >
                {content.about}
              </Link>
              <button
                onClick={toggleAbout}
                className="ml-0.5 inline-flex h-10 w-8 items-center justify-center rounded-full text-[#f3e2b0] hover:bg-[#d4af37]/20 hover:text-white"
                aria-label="Toggle about menu"
              >
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isAboutOpen && (
                <div className="absolute left-0 top-full mt-3 w-60 rounded-2xl border border-[#eadfc4] bg-white p-2 shadow-[0_14px_28px_rgba(31,41,55,0.16)]">
                  {aboutDropdownItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block rounded-xl px-3 py-2 text-[#2a3439] transition hover:bg-[#f7f2e7]"
                      style={dropdownFont}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/services" className={navLinkClass('/services')} style={navFont}>
              {content.services}
            </Link>

            <div className="relative flex items-center">
              <Link
                to="/genAd"
                className={navLinkClass('/genAd')}
                style={navFont}
              >
                {content.juneOffer}
              </Link>
              <button
                onClick={toggleJune}
                className="ml-0.5 inline-flex h-10 w-8 items-center justify-center rounded-full text-[#f3e2b0] hover:bg-[#d4af37]/20 hover:text-white"
                aria-label="Toggle June offers menu"
              >
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${isJuneOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isJuneOpen && (
                <div className="absolute left-0 top-full mt-3 w-56 rounded-2xl border border-[#eadfc4] bg-white p-2 shadow-[0_14px_28px_rgba(31,41,55,0.16)]">
                  {juneDropdownItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block rounded-xl px-3 py-2 text-[#2a3439] transition hover:bg-[#f7f2e7]"
                      style={dropdownFont}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/visitor-program" className={navLinkClass('/visitor-program')} style={navFont}>
              {content.gratitude}
            </Link>

            <Link
              to="/contact"
              className="ml-2 inline-flex h-10 items-center rounded-full bg-[#d4af37] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c19d30]"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.contact}
            </Link>

            <div className="ml-1">
              <LanguageToggle variant="navbar" />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="hidden sm:block">
              <LanguageToggle variant="navbar" />
            </div>
            <button
              onClick={toggleMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#f3e2b0] hover:bg-[#d4af37]/20 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden border-t border-[#e6d9ba] bg-[#fbf7ed] transition-[max-height] duration-300 ${
            isMenuOpen ? 'max-h-[85vh]' : 'max-h-0'
          }`}
        >
          <div className="space-y-1 px-3 pb-5 pt-3">
            <Link to="/" className={mobileLinkClass('/')} onClick={closeAllMenus} style={navFont}>
              {content.home}
            </Link>

            <div>
              <div className="flex items-center justify-between rounded-xl px-3 py-2.5">
                <Link
                  to="/about"
                  className={mobileLinkClass('/about')}
                  style={navFont}
                  onClick={() => {
                    setIsAboutOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  {content.about}
                </Link>

                <button
                  onClick={toggleAbout}
                  className="rounded-full p-1 text-[#2a3439] hover:bg-[#efe3c5]"
                  aria-label="Toggle about submenu"
                >
                  <svg
                    className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {isAboutOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l border-[#e3d4b0] pl-3">
                  {aboutDropdownItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block rounded-lg px-3 py-2 text-[#2a3439] hover:bg-[#f3ead2]"
                      style={dropdownFont}
                      onClick={closeAllMenus}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/services" className={mobileLinkClass('/services')} onClick={closeAllMenus} style={navFont}>
              {content.services}
            </Link>

            <div>
              <div className="flex items-center justify-between rounded-xl px-3 py-2.5">
                <Link
                  to="/genAd"
                  className={mobileLinkClass('/genAd')}
                  style={navFont}
                  onClick={() => {
                    setIsJuneOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  {content.juneOffer}
                </Link>

                <button
                  onClick={toggleJune}
                  className="rounded-full p-1 text-[#2a3439] hover:bg-[#efe3c5]"
                  aria-label="Toggle June submenu"
                >
                  <svg
                    className={`h-4 w-4 transition-transform ${isJuneOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {isJuneOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l border-[#e3d4b0] pl-3">
                  {juneDropdownItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block rounded-lg px-3 py-2 text-[#2a3439] hover:bg-[#f3ead2]"
                      style={dropdownFont}
                      onClick={closeAllMenus}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/visitor-program"
              className={mobileLinkClass('/visitor-program')}
              onClick={closeAllMenus}
              style={navFont}
            >
              {content.gratitude}
            </Link>

            <Link
              to="/contact"
              className="mt-2 block rounded-full bg-[#d4af37] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c19d30]"
              onClick={closeAllMenus}
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {content.contact}
            </Link>

            <div className="px-3 pt-3 sm:hidden">
              <LanguageToggle variant="navbar" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
