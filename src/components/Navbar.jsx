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

  const navItems = [
    { name: content.home, path: '/' },
    { name: content.about, path: '/about', hasDropdown: true },
    { name: content.services, path: '/services' },
    { name: content.equipment, path: '/equipment' },
  ];

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
                <img src={logo} alt="Nha Khoa Emis" className="h-full w-full object-cover"/>
              </div>
              <span className="text-2xl font-bold text-[#1f2937] tracking-tight"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '800', textShadow: '1px 1px 2px rgba(0,0,0,0.1)'}}>
                <span className="text-[#2a3439]">EMIS</span> DENTAL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link 
                    to={item.path}
                    className="relative text-[#2a3439] font-medium px-3 py-2 transition-all duration-300 group"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
                  >
                    <span className="opacity-90 group-hover:opacity-100">{item.name}</span>
                    <span className="absolute bottom-1 left-3 right-3 h-px bg-[#2a3439] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>

                  {/* About Dropdown */}
                  {item.hasDropdown && (
                    <button
                      onClick={toggleAbout}
                      className="absolute top-1 right-0 w-4 h-4 flex items-center justify-center text-[#2a3439] hover:text-gray-700 focus:outline-none"
                    >
                      <svg className={`w-4 h-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {item.hasDropdown && isAboutOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                      {aboutDropdownItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2 text-[#2a3439] hover:bg-[#f8f9fa] transition-all duration-200 border-b border-gray-100 last:border-b-0"
                          style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '500' }}
                          onClick={() => setIsAboutOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Gratitude Dropdown Button */}
              <div className="relative">
                <button
                  onClick={toggleGratitude}
                  className="relative text-[#2a3439] font-medium px-3 py-2 transition-all duration-300 group flex items-center space-x-1"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
                >
                  <span className="opacity-90 group-hover:opacity-100">{content.gratitude}</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isGratitudeOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isGratitudeOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                    {gratitudeItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-3 text-[#2a3439] hover:bg-[#f8f9fa] transition-all duration-200 border-b border-gray-100 last:border-b-0"
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '500' }}
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
                className="ml-4 px-5 py-2 bg-[#2a3439] text-[#C5AF73] rounded-md hover:bg-[#1f2937] transition-all duration-300 flex items-center space-x-2 border border-[#2a3439] border-opacity-20"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: '600' }}
              >
                <span>{content.contact}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Mobile Toggle omitted for brevity */}
          </div>
        </div>
      </nav>
    </>
  );
}
