import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../pics/logo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [adminAuth, setAdminAuth] = useState({
    isAllowed: false,
    isLoading: true
  });
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAdminAccess = async () => {
      try {
        const response = await fetch('/api/verify-admin', {
          credentials: 'include' // For cookies/session
        });
        
        if (!response.ok) throw new Error('Unauthorized');
        
        const data = await response.json();
        setAdminAuth({ isAllowed: data.isAdmin, isLoading: false });
      } catch (error) {
        setAdminAuth({ isAllowed: false, isLoading: false });
      }
    };

    verifyAdminAccess();
  }, []);

  const handleAdminClick = (e) => {
    if (!adminAuth.isAllowed) {
      e.preventDefault();
      navigate('/login?redirect=/admin');
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Reusable components
  const NavLink = ({ to, children, mobile = false, admin = false }) => (
    <Link 
      to={to}
      onClick={admin ? handleAdminClick : undefined}
      className={`${mobile ? 'block' : 'relative'} px-3 py-2 text-[#2a3439] font-medium rounded-md transition-all duration-300 group`}
      style={{ fontFamily: "'Cormorant', serif" }}
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
          {!admin && (
            <span className="absolute bottom-1 left-3 right-3 h-px bg-[#2a3439] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          )}
        </>
      )}
    </Link>
  );

  return (
    <>
      {isMenuOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40" 
          onClick={toggleMenu}
        />
      )}

      <nav className="bg-gradient-to-r from-[#d4af37] via-[#C5AF73] to-[#d4af37] shadow-xl fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
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

            <div className="hidden md:flex items-center space-x-6">
              <NavLink to="/">Home</NavLink>
              
              {!adminAuth.isLoading && (
                <NavLink to="/admin" admin>
                  Admin
                </NavLink>
              )}
              
              <Link 
                to="/contact" 
                className="ml-4 px-5 py-2 bg-[#2a3439] text-[#C5AF73] rounded-md hover:bg-[#1f2937] transition-all duration-300 flex items-center space-x-2 border border-[#2a3439] border-opacity-20"
                style={{ fontFamily: "'Cormorant', serif" }}
              >
                <span>Contact</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

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

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-gradient-to-b from-[#d4af37] to-[#C5AF73] shadow-lg backdrop-blur-lg bg-white/10">
            <NavLink to="/" mobile>Home</NavLink>
            
            {!adminAuth.isLoading && (
              <NavLink to="/admin" mobile admin>
                Admin
              </NavLink>
            )}
            
            <NavLink to="/contact" mobile>
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}