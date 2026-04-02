import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../pics/logo.jpg';
import navbarContent from '../Translations/navbarContent';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const language = useSelector((state) => state.language.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMarchOpen, setIsMarchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleMarch = () => setIsMarchOpen(!isMarchOpen);

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

  const marchDropdownItems = [
    { name: content.implant, path: '/implantAd' },
    { name: content.crown, path: '/crownAd' },
    { name: content.whitening, path: '/whiteningAd' },
    { name: content.canal, path: '/canal' },
  ];

  return (
    <>
      {isMenuOpen && (
        <div
          className="inset-0 backdrop-blur-sm bg-white/30 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <nav className="bg-gradient-to-r from-[#d4af37] via-[#C5AF73] to-[#d4af37] shadow-xl fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#1f2937] border-opacity-20 shadow-md">
                <img src={logo} alt="Nha Khoa Emis" className="h-full w-full object-cover" />
              </div>
              <span
                className="text-2xl font-bold text-[#1f2937] tracking-tight"
                style={{
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontWeight: '800',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                <span className="text-[#2a3439]">EMIS</span> DENTAL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="relative text-[#2a3439] font-medium px-3 py-2 transition-all duration-300 group"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
              >
                {content.home}
              </Link>

              {/* ABOUT DESKTOP */}
              <div className="relative flex items-center">
                <Link
                  to="/about"
                  className="text-[#2a3439] font-medium px-3 py-2 transition-all duration-300 group"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
                >
                  {content.about}
                </Link>

                <button
                  onClick={toggleAbout}
                  className="ml-1 text-[#2a3439] hover:text-gray-700"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isAboutOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                    {aboutDropdownItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-[#2a3439] hover:bg-gray-100 transition"
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
              <Link
                to="/services"
                className="text-[#2a3439] font-medium px-3 py-2"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
              >
                {content.services}
              </Link>

              {/* MARCH OFFER DROPDOWN */}
              <div className="relative flex items-center">
                <Link
                  to="/genAd"
                  className="text-[#2a3439] font-medium px-3 py-2 transition-all duration-300 group"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
                >
                  {content.marchOffer}
                </Link>

                <button
                  onClick={toggleMarch}
                  className="ml-1 text-[#2a3439] hover:text-gray-700"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isMarchOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isMarchOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                    {marchDropdownItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-[#2a3439] hover:bg-gray-100 transition"
                        style={submenuFont}
                        onClick={() => setIsMarchOpen(false)}
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
                className="text-[#2a3439] font-medium px-3 py-2 transition-all duration-300"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
              >
                {content.gratitude}
              </Link>

              {/* CONTACT */}
              <Link
                to="/contact"
                className="ml-4 px-5 py-2 bg-[#2a3439] text-[#C5AF73] rounded-md hover:bg-[#1f2937] transition"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
              >
                {content.contact}
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-[#2a3439]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-gradient-to-b from-[#d4af37] to-[#C5AF73] shadow-lg">

            <Link
              to="/"
              className="block px-3 py-2 font-medium text-[#2a3439] hover:bg-[#2a3439] hover:text-[#C5AF73] rounded-md"
              onClick={toggleMenu}
            >
              {content.home}
            </Link>

            {/* MOBILE ABOUT */}
            <div>
              <div className="flex items-center justify-between px-3 py-2 rounded-md">
                <Link
                  to="/about"
                  className="font-medium text-[#2a3439] hover:text-[#C5AF73]"
                  onClick={() => {
                    setIsAboutOpen(false);
                    toggleMenu();
                  }}
                >
                  {content.about}
                </Link>

                <button
                  onClick={toggleAbout}
                  className="p-1 rounded hover:bg-white/20 text-[#2a3439]"
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {isAboutOpen && (
                <div className="ml-4 mt-1">
                  {aboutDropdownItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-3 py-2 text-[#2a3439] hover:bg-[#2a3439] hover:text-[#C5AF73] rounded-md"
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
              className="block px-3 py-2 text-[#2a3439] font-medium rounded-md hover:bg-[#2a3439] hover:text-[#C5AF73]"
              onClick={toggleMenu}
            >
              {content.services}
            </Link>

            {/* MOBILE MARCH OFFER */}
            <div>
              <div className="flex items-center justify-between px-3 py-2 rounded-md">
                <Link
                  to="/genAd"
                  className="font-medium text-[#2a3439] hover:text-[#C5AF73]"
                  onClick={() => {
                    setIsMarchOpen(false);
                    toggleMenu();
                  }}
                >
                  {content.marchOffer}
                </Link>

                <button
                  onClick={toggleMarch}
                  className="p-1 rounded hover:bg-white/20 text-[#2a3439]"
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${isMarchOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {isMarchOpen && (
                <div className="ml-4 mt-1">
                  {marchDropdownItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-3 py-2 text-[#2a3439] hover:bg-[#2a3439] hover:text-[#C5AF73] rounded-md"
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
              className="block px-3 py-2 text-[#2a3439] font-medium rounded-md hover:bg-[#2a3439] hover:text-[#C5AF73]"
              onClick={toggleMenu}
            >
              {content.gratitude}
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className="block px-3 py-2 text-[#2a3439] font-medium rounded-md hover:bg-[#2a3439] hover:text-[#C5AF73]"
              onClick={toggleMenu}
            >
              {content.contact}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
