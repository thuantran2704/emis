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
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(orientation: landscape)').matches
      : true
  );

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  useEffect(() => {
    const media = window.matchMedia('(orientation: landscape)');

    const applyOrientation = () => {
      setIsLandscape(media.matches);
    };

    applyOrientation();
    media.addEventListener('change', applyOrientation);

    return () => {
      media.removeEventListener('change', applyOrientation);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSolutions = () => setIsSolutionsOpen((prev) => !prev);

  const content = navbarContent[language] || navbarContent.english;

  const navLinkClass = (path) =>
    `relative inline-flex h-10 items-center whitespace-nowrap px-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
      location.pathname === path
        ? 'text-[#1f2937] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-[#d4af37]'
        : 'text-[#2a3439]/80 hover:text-[#111317]'
    }`;

  const mobileLinkClass = (path) =>
    `block rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
      location.pathname === path
        ? 'bg-[#f5e9c2] text-[#1f2937]'
        : 'text-[#2a3439] hover:bg-[#f3ead2]'
    }`;

  const solutionsDropdownItems = [
    { name: content.implantSolutions, path: '/implant' },
    { name: content.fixedTeethSolutions, path: '/fixed-teeth' },
    { name: content.fullMouth, path: '/full-mouth' },
    { name: content.oralSurgery, path: '/oral-surgery' },
    { name: content.restorativeDentistry, path: '/restorative-dentistry' },
    { name: content.smileAesthetics, path: '/smile-aesthetics' },
  ];

  const solutionsPaths = ['/solutions', '/implant', '/fixed-teeth', '/full-mouth', '/oral-surgery', '/restorative-dentistry', '/smile-aesthetics'];
  const isSolutionsActive = solutionsPaths.includes(location.pathname);

  return (
    <>
      {isMenuOpen && (
        <div
          className={`fixed inset-0 bg-[#2a3439]/20 backdrop-blur-sm z-40 ${
            isLandscape ? 'xl:hidden' : ''
          }`}
          onClick={closeAllMenus}
        />
      )}

      <nav className="fixed top-0 z-50 w-full border-b-2 border-[#d4af37]/60 bg-white/90 backdrop-blur-md shadow-[0_10px_30px_rgba(31,41,55,0.10)]">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="group flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#d4af37]/60 transition-transform duration-200 group-hover:scale-[1.02]">
              <img src={logo} alt="Nha Khoa Emis" className="h-full w-full object-cover" />
            </div>
            <span
              className="text-lg font-extrabold leading-none tracking-[0.02em] text-[#2a3439] sm:text-xl"
            >
              <span className="text-[#2a3439]">EMIS</span>{' '}
              <span className="text-[#d4af37]">DENTAL</span>
            </span>
          </Link>

          <div className={`${isLandscape ? 'hidden xl:flex' : 'hidden'} flex-nowrap items-center gap-1 xl:gap-2`}>
            <Link to="/" className={navLinkClass('/')}>
              {content.home}
            </Link>

            <Link to="/about" className={navLinkClass('/about')}>
              {content.about}
            </Link>

            <Link to="/doctors" className={navLinkClass('/doctors')}>
              {content.doctors}
            </Link>

            <div className="relative">
              <Link
                to="/solutions"
                onClick={toggleSolutions}
                className={`relative inline-flex h-10 items-center gap-1 whitespace-nowrap px-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  isSolutionsActive
                    ? 'text-[#1f2937] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-[#d4af37]'
                    : 'text-[#2a3439]/80 hover:text-[#111317]'
                }`}
              >
                {content.solutions}
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {isSolutionsOpen && (
                <div className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-[#eadfc4] bg-white p-2 shadow-[0_14px_28px_rgba(31,41,55,0.16)]">
                  {solutionsDropdownItems.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="block rounded-xl px-3 py-2 font-medium text-[#2a3439] transition hover:bg-[#f7f2e7]"
                      onClick={closeAllMenus}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link to="/solutions" className={navLinkClass('/solutions')}>
              {content.patientCases}
            </Link> */}

            <Link to="/international-patients" className={navLinkClass('/international-patients')}>
              {content.internationalPatients}
            </Link>

            <Link to="/faq" className={navLinkClass('/faq')}>
              {content.resources}
            </Link>

            <Link
              to="/contact"
              className="ml-2 inline-flex h-10 items-center rounded-full bg-[#d4af37] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c19d30]"
            >
              {content.contact}
            </Link>

            <div className="ml-1">
              <LanguageToggle variant="navbar" />
            </div>
          </div>

          <div className={`${isLandscape ? 'flex xl:hidden' : 'flex'} items-center gap-2 shrink-0`}>
            <div className="shrink-0">
              <LanguageToggle variant="navbar" compact />
            </div>
            <button
              onClick={toggleMenu}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#2a3439] hover:bg-[#d4af37]/15 hover:text-[#111317]"
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
          className={`${isLandscape ? 'xl:hidden' : ''} overflow-hidden border-t border-[#e6d9ba] bg-[#fbf7ed] transition-[max-height] duration-300 ${
            isMenuOpen ? 'max-h-[85vh]' : 'max-h-0'
          }`}
        >
          <div className="space-y-1 px-3 pb-5 pt-3">
            <Link to="/" className={mobileLinkClass('/')} onClick={closeAllMenus}>
              {content.home}
            </Link>

            <Link to="/about" className={mobileLinkClass('/about')} onClick={closeAllMenus}>
              {content.about}
            </Link>

            <Link to="/doctors" className={mobileLinkClass('/doctors')} onClick={closeAllMenus}>
              {content.doctors}
            </Link>

            <div>
              <div className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition ${
                isSolutionsActive ? 'bg-[#f5e9c2] text-[#1f2937]' : 'text-[#2a3439] hover:bg-[#f3ead2]'
              }`}>
                <Link to="/solutions" className="flex-1 font-semibold" onClick={closeAllMenus}>{content.solutions}</Link>
                <button
                  onClick={toggleSolutions}
                  className="rounded-full p-1 text-[#2a3439] hover:bg-[#efe3c5]"
                  aria-label="Toggle solutions submenu"
                >
                  <svg
                    className={`h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {isSolutionsOpen && (
                <div className="mt-2 ml-2 rounded-xl bg-[#f5ecd3]/70 p-2 space-y-1">
                  {solutionsDropdownItems.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#2a3439] hover:bg-[#f3ead2] transition"
                      onClick={closeAllMenus}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link to="/solutions" className={mobileLinkClass('/solutions')} onClick={closeAllMenus}>
              {content.patientCases}
            </Link> */}

            <Link to="/international-patients" className={mobileLinkClass('/international-patients')} onClick={closeAllMenus}>
              {content.internationalPatients}
            </Link>

            <Link to="/faq" className={mobileLinkClass('/faq')} onClick={closeAllMenus}>
              {content.resources}
            </Link>

            <Link
              to="/contact"
              className="mt-2 block rounded-full bg-[#d4af37] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c19d30]"
              onClick={closeAllMenus}
            >
              {content.contact}
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
}
