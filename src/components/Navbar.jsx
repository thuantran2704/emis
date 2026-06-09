import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../pics/logo.jpg';
import navbarContent from '../Translations/navbarContent';
import { useSelector } from 'react-redux';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const language = useSelector((state) => state.language.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isJuneOpen, setIsJuneOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleJune = () => setIsJuneOpen(!isJuneOpen);

  const content = navbarContent[language] || navbarContent.english;

  const submenuFont = {
    fontFamily: "'Be Vietnam Pro', sans-serif",
    fontWeight: '500',
  };

  const aboutDropdownItems = [
    { name: content.drSon, path: '/dr-son' },
    { name: content.veneer, path: '/veneer' },
    { name: content.equipment, path: '/equipment' },
  ];

  const juneDropdownItems = [
    { name: content.implant, path: '/implantAd' },
    { name: content.crown, path: '/crownAd' },
    { name: content.whitening, path: '/whiteningAd' },
    { name: content.canal, path: '/canal' },
  ];

  const navLinkClass =
    'text-[#2a3439] text-sm px-3 py-2 transition-colors duration-200 hover:text-[#C5AF73]';
  const navLinkStyle = { fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' };

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40"
          onClick={toggleMenu}
        />
      )}

      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#d4af37]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-18 py-4">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-11 w-11 rounded-full overflow-hidden border border-[#d4af37]/30 shadow-sm">
                <img src={logo} alt="Nha Khoa Emis" className="h-full w-full object-cover" />
              </div>
              <span
                className="text-lg text-[#2a3439] tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700' }}
              >
                EMIS <span className="text-[#C5AF73]">DENTAL</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">

              <Link to="/" className={navLinkClass} style={navLinkStyle}>
                {content.home}
              </Link>

              {/* ABOUT DESKTOP */}
              <div className="relative flex items-center">
                <Link to="/about" className={navLinkClass} style={navLinkStyle}>
                  {content.about}
                </Link>
                <button
                  onClick={toggleAbout}
                  className="text-[#2a3439] hover:text-[#C5AF73] transition-colors p-1"
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isAboutOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100">
                    {aboutDropdownItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-5 py-2.5 text-sm text-[#2a3439] hover:text-[#C5AF73] hover:bg-[#f7f2e7] transition"
                        style={submenuFont}
                        onClick={() => setIsAboutOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* SERVICES */}
              <Link to="/services" className={navLinkClass} style={navLinkStyle}>
                {content.services}
              </Link>

              {/* JUNE OFFER DROPDOWN */}
              <div className="relative flex items-center">
                <Link to="/genAd" className={navLinkClass} style={navLinkStyle}>
                  {content.juneOffer}
                </Link>
                <button
                  onClick={toggleJune}
                  className="text-[#2a3439] hover:text-[#C5AF73] transition-colors p-1"
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isJuneOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isJuneOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100">
                    {juneDropdownItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-5 py-2.5 text-sm text-[#2a3439] hover:text-[#C5AF73] hover:bg-[#f7f2e7] transition"
                        style={submenuFont}
                        onClick={() => setIsJuneOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* GRATITUDE */}
              <Link to="/visitor-program" className={navLinkClass} style={navLinkStyle}>
                {content.gratitude}
              </Link>

              {/* CONTACT */}
              <Link
                to="/contact"
                className="ml-3 px-5 py-2.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {content.contact}
              </Link>

              <div className="ml-2">
                <LanguageToggle variant="navbar" />
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <div className="hidden sm:block">
                <LanguageToggle variant="navbar" />
              </div>
              <button onClick={toggleMenu} className="text-[#2a3439] p-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#d4af37]/20 bg-white/95 backdrop-blur-md">
            <div className="px-6 py-5 space-y-1">

              <Link
                to="/"
                className="block px-3 py-2.5 text-sm text-[#2a3439] font-medium hover:text-[#C5AF73] hover:bg-[#f7f2e7] rounded-xl transition"
                onClick={toggleMenu}
                style={navLinkStyle}
              >
                {content.home}
              </Link>

              {/* MOBILE ABOUT */}
              <div>
                <div className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#f7f2e7] transition">
                  <Link
                    to="/about"
                    className="text-sm text-[#2a3439] font-medium hover:text-[#C5AF73]"
                    style={navLinkStyle}
                    onClick={() => { setIsAboutOpen(false); toggleMenu(); }}
                  >
                    {content.about}
                  </Link>
                  <button onClick={toggleAbout} className="text-[#2a3439] hover:text-[#C5AF73] p-1">
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {isAboutOpen && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {aboutDropdownItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-gray-500 hover:text-[#C5AF73] hover:bg-[#f7f2e7] rounded-xl transition"
                        style={submenuFont}
                        onClick={toggleMenu}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* SERVICES */}
              <Link
                to="/services"
                className="block px-3 py-2.5 text-sm text-[#2a3439] font-medium hover:text-[#C5AF73] hover:bg-[#f7f2e7] rounded-xl transition"
                style={navLinkStyle}
                onClick={toggleMenu}
              >
                {content.services}
              </Link>

              {/* MOBILE JUNE OFFER */}
              <div>
                <div className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#f7f2e7] transition">
                  <Link
                    to="/genAd"
                    className="text-sm text-[#2a3439] font-medium hover:text-[#C5AF73]"
                    style={navLinkStyle}
                    onClick={() => { setIsJuneOpen(false); toggleMenu(); }}
                  >
                    {content.juneOffer}
                  </Link>
                  <button onClick={toggleJune} className="text-[#2a3439] hover:text-[#C5AF73] p-1">
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${isJuneOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {isJuneOpen && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {juneDropdownItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-gray-500 hover:text-[#C5AF73] hover:bg-[#f7f2e7] rounded-xl transition"
                        style={submenuFont}
                        onClick={toggleMenu}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* GRATITUDE */}
              <Link
                to="/visitor-program"
                className="block px-3 py-2.5 text-sm text-[#2a3439] font-medium hover:text-[#C5AF73] hover:bg-[#f7f2e7] rounded-xl transition"
                style={navLinkStyle}
                onClick={toggleMenu}
              >
                {content.gratitude}
              </Link>

              {/* CONTACT */}
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="block w-full text-center px-5 py-3 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  onClick={toggleMenu}
                >
                  {content.contact}
                </Link>
              </div>

              <div className="px-3 py-2 sm:hidden">
                <LanguageToggle variant="navbar" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
