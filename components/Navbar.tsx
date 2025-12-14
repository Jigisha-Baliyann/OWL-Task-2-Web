import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apply Now', path: '/internships' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  
  // Using the Owl AI logo from LinkedIn/Public source that matches the user's attachment
  const LOGO_URL = "https://media.licdn.com/dms/image/v2/D560BAQGjC0-25v8Czw/company-logo_200_200/company-logo_200_200/0/1709966838883?e=1749686400&v=beta&t=H-W-K4sH12J2k3m5n6o7p8q9r0s1t2u3v4w5x6y7z8";

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img 
                src={LOGO_URL} 
                alt="Owl AI Logo" 
                className="w-12 h-12 rounded-full border border-zinc-800"
              />
              <span className="font-bold text-xl text-white tracking-tight">Owl AI</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-white bg-zinc-800'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/internships"
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors border border-transparent"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-white bg-zinc-800'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/internships"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-white text-black px-4 py-3 rounded-lg font-bold hover:bg-zinc-200"
            >
              Start Learning
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;