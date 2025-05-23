import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../pics/logo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAdminLink, setShowAdminLink] = useState(false);

  useEffect(() => {
    // Check if user's IP is allowed to see admin link
    // NOTE: This is just for UX - proper security must be implemented in backend
    const checkAdminAccess = async () => {
      try {
        const response = await fetch('/api/check-admin-access');
        const data = await response.json();
        setShowAdminLink(data.isAllowed);
      } catch (error) {
        setShowAdminLink(false);
        console.error('Error checking admin access:', error);
      }
    };

    checkAdminAccess();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation link component to avoid repetition
  const NavLink = ({ to, children, mobile = false }) => (
    <Link 
      to={to} 
      className={`${mobile ? 'block' : 'relative'} px-3 py-2 text-[#2a3439] font-medium rounded-md transition-all duration-300 group`}
      style={{ fontFamily: "'Cormorant', serif" }}
      onClick={mobile ? toggleMenu : undefined}
    >
      {mobile ? (
        <span className="hover:bg-[#2a3439] hover:text-[#C5AF73] block px-3 py-2 rounded-md">
          {children}
        </span>
      ) : (
        <>
          <span className="opacity-90 group-hover:opacity-100">
            {children}
          </span>
          <span className="absolute bottom-1 left-3 right-3 h-px bg-[#2a3439] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </>
      )}
    </Link>
  );

  const ContactButton = ({ mobile = false }) => (
    <Link 
      to="/contact" 
      className={`${mobile ? 'block' : 'ml-4'} px-5 py-2 bg-[#2a3439] text-[#C5AF73] rounded-md hover:bg-[#1f2937] transition-all duration-300 flex items-center space-x-2 border border-[#2a3439] border-opacity-20`}
      style={{ fontFamily: "'Cormorant', serif" }}
      onClick={mobile ? toggleMenu : undefined}
    >
      <span>Contact</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </Link>
  );

  return (
    <>
      {/* Blurred overlay for when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40" 
          onClick={toggleMenu}
        ></div>
      )}

      <nav className="bg-gradient-to-r from-[#d4af37] via-[#C5AF73] to-[#d4af37] shadow-xl fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#1f2937] border-opacity-20 shadow-md">
                <img 
                  src={logo} 
                  alt="Emis Dental Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span 
                className="text-2xl font-bold text-[#1f2937] tracking-tight"
                style={{ 
                  fontFamily: "'Cormorant', serif",
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                <span className="text-[#2a3439]">EMIS</span> DENTAL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink to="/">Home</NavLink>
              
              {showAdminLink && (
                <NavLink to="/admin">Admin</NavLink>
              )}
              
              <ContactButton />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-[#2a3439] hover:text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
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
          <div className="px-2 pt-2 pb-4 space-y-1 bg-gradient-to-b from-[#d4af37] to-[#C5AF73] shadow-lg backdrop-blur-lg bg-white/10">
            <NavLink to="/" mobile>Home</NavLink>
            
            {showAdminLink && (
              <NavLink to="/admin" mobile>Admin</NavLink>
            )}
            
            <ContactButton mobile />
          </div>
        </div>
      </nav>
    </>
  );
}