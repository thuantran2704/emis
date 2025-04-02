import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-white text-lg">YourWebsite</span>
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
            <div className="flex flex-row">
              <div className="p-4 bg-blue-500">Item 1</div>
              <div className="p-4 bg-green-500">Item 2</div>
              <div className="p-4 bg-red-500">Item 3</div>
            </div>

              {/* Additional nav links will go here */}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="pt-2 pb-3 space-y-1">
          <li>
            <a
              href="/"
              className="block py-2 px-4 text-sm text-white bg-blue-500 font-semibold"
            >
              Home
            </a>
          </li>
          {/* Additional mobile nav links will go here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;