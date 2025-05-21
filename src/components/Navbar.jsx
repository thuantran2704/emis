import { Link } from 'react-router-dom';
import logo from '../pics/logo.jpg';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#d4af37] via-[#C5AF73] to-[#d4af37] shadow-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo with blended background */}
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

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="relative text-[#2a3439] font-medium px-3 py-2 transition-all duration-300 group"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <span className="opacity-90 group-hover:opacity-100">
                Home
              </span>
              <span className="absolute bottom-1 left-3 right-3 h-px bg-[#2a3439] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            
            {/* <Link 
              to="/about" 
              className="relative text-[#2a3439] font-medium px-3 py-2 transition-all duration-300 group"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              <span className="opacity-90 group-hover:opacity-100">
                About
              </span>
              <span className="absolute bottom-1 left-3 right-3 h-px bg-[#2a3439] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link> */}
            
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
        </div>
      </div>
    </nav>
  );
}