import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../pics/logo.jpg';
import navbarContent from '../Translations/navbarContent';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const language = useSelector((state) => state.language.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGratitudeOpen, setIsGratitudeOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleGratitude = () => setIsGratitudeOpen(!isGratitudeOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  const content = navbarContent[language] || navbarContent.english;

  // Submenu under About
  const aboutDropdownItems = [
    { name: content.drSon, path: '/dr-son' },
    { name: content.veneer, path: '/veneer' },
    { name: content.implant, path: '/implant' },
    { name: content.crown, path: '/crown' },
  ];

  const gratitudeItems = [
    { name: content.implantPromo, path: '/qc1' },
    { name: content.porcelainPromo, path: '/qc2' },
    { name: content.whiteningPromo, path: '/qc3' },
    { name: content.novemberPromo, path: '/qc4' },
  ];

  return (
    <>
      {/* Blur overlay for mobile menu */}
      {isMenuOpen && (
        <div className="inset-0 backdrop-blur-sm bg-white/30 z-40" onClick={toggleMenu}></div>
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

              {/* Home */}
              <Link
                to="/"
                className="relative text-[#2a3439] font-medium px-3 py-2 transition-all duration-300 group"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
              >
                {content.home}
              </Link>

              {/* ABOUT + DROPDOWN (fixed alignment) */}
              <div className="relative flex items-center">
                
                {/* About link */}
                <Link
                  to="/about"
                  className="text-[#2a3439] font-medium px-3 py-2 transition-all duration-300 group"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
                >
                  {content.about}
                </Link>

                {/* Dropdown toggle arrow */}
                <button
                  onClick={toggleAbout}
                  className="ml-1 text-[#2a3439] hover:text-gray-700"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isAboutOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* About dropdown */}
                {isAboutOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                    {aboutDropdownItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-[#2a3439] hover:bg-gray-100 transition"
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '500' }}
                        onClick={() => setIsAboutOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services */}
              <Link
                to="/services"
                className="text-[#2a3439] font-medium px-3 py-2"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
              >
                {content.services}
              </Link>

              {/* Equipment */}
              <Link
                to="/equipment"
                className="text-[#2a3439] font-medium px-3 py-2"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
              >
                {content.equipment}
              </Link>

              {/* Gratitude dropdown */}
              <div className="relative">
                <button
                  onClick={toggleGratitude}
                  className="text-[#2a3439] font-medium px-3 py-2 flex items-center"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
                >
                  {content.gratitude}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      isGratitudeOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {isGratitudeOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                    {gratitudeItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-3 hover:bg-gray-100 transition"
                        onClick={() => setIsGratitudeOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="ml-4 px-5 py-2 bg-[#2a3439] text-[#C5AF73] rounded-md hover:bg-[#1f2937] transition"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
              >
                {content.contact}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-[#2a3439] hover:text-gray-700 focus:outline-none"
              >
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
            
            {/* Home */}
            <Link
              to="/"
              className="block px-3 py-2 font-medium text-[#2a3439] hover:bg-[#2a3439] hover:text-[#C5AF73] rounded-md"
              onClick={toggleMenu}
            >
              {content.home}
            </Link>

            {/* ABOUT MOBILE DROPDOWN */}
            <div>
              <button
                onClick={toggleAbout}
                className="w-full flex justify-between px-3 py-2 font-medium text-[#2a3439] hover:bg-[#2a3439] hover:text-[#C5AF73] rounded-md"
              >
                {content.about}
                <svg
                  className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isAboutOpen && (
                <div className="ml-4 mt-1">
                  {aboutDropdownItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-3 py-2 text-[#2a3439] hover:bg-[#2a3439] hover:text-[#C5AF73] rounded-md"
                      onClick={toggleMenu}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services */}
            <Link
              to="/services"
              className="block px-3 py-2 text-[#2a3439] font-medium rounded-md hover:bg-[#2a3439] hover:text-[#C5AF73]"
              onClick={toggleMenu}
            >
              {content.services}
            </Link>

            {/* Equipment */}
            <Link
              to="/equipment"
              className="block px-3 py-2 text-[#2a3439] font-medium rounded-md hover:bg-[#2a3439] hover:text-[#C5AF73]"
              onClick={toggleMenu}
            >
              {content.equipment}
            </Link>

            {/* Gratitude Mobile */}
            <div>
              <button
                onClick={toggleGratitude}
                className="w-full flex justify-between px-3 py-2 text-[#2a3439] font-medium hover:bg-[#2a3439] hover:text-[#C5AF73] rounded-md"
              >
                {content.gratitude}
                <svg
                  className={`w-4 h-4 transition-transform ${isGratitudeOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isGratitudeOpen && (
                <div className="ml-4 mt-1">
                  {gratitudeItems.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-3 py-2 text-[#2a3439] hover:bg-[#2a3439] hover:text-[#C5AF73] rounded-md"
                      onClick={toggleMenu}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
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
