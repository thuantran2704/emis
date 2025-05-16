import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f7f2e7] flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative elements */}
        <div className="relative mb-8">
          <div className="absolute -top-6 -left-6 w-16 h-16 border-4 border-[#d4af37] rounded-full opacity-30"></div>
          <div className="absolute -bottom-6 -right-6 w-16 h-16 border-4 border-[#d4af37] rounded-full opacity-30"></div>
          
          <h1 
            className="text-9xl font-bold text-[#1f2937] relative z-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            404
          </h1>
        </div>

        <h2 
          className="text-4xl font-bold text-[#1f2937] mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Page Not Found
        </h2>
        
        <p 
          className="text-xl text-[#6b7280] mb-8 leading-relaxed"
          style={{ fontFamily: "'Cormorant', serif" }}
        >
          The page you're looking for doesn't exist or has been moved. 
          <br />
          Let's get you back to our beautiful smile services.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="bg-[#d4af37] hover:bg-[#c19d30] text-white font-bold py-3 px-8 rounded-full transition-all text-lg shadow-md hover:shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Return Home
          </Link>
          
          <Link 
            to="/contact" 
            className="bg-[#1f2937] hover:bg-opacity-90 text-[#f7f2e7] font-bold py-3 px-8 rounded-full transition-all text-lg shadow-md hover:shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </Link>
        </div>

        {/* Decorative tooth icon */}
        <div className="mt-12 text-[#d4af37] opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6c-1 1.5-2 3.09-2 4.5a2 2 0 0 0 4 0c0-1.41-1-3-2-4.5ZM12 6c1 1.5 2 3.09 2 4.5a2 2 0 0 1-4 0c0-1.41 1-3 2-4.5ZM12 6h3m-9 0H9m12 0h-3m-9 0H3m18 0h-1.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5H18m0-18h1.5a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5H18m0-18H6m12 0H6m0 0H4.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5H6m0-18h1.5a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5H6"/>
          </svg>
        </div>
      </div>
    </main>
  );
}