import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
      style={{ backgroundColor: '#080844' }}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Logo على أقصى الشمال بدون وميض */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold flex items-center"
            >
              <div className="relative">
                <img
                  src="/zuccess logo without bg-02 copy.png"
                  alt="Zuccess Logo"
                  className="w-12 h-12 object-contain group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              <span
                className="text-[#EBEBDF] group-hover:text-[#EA7946] transition-colors duration-300"
                style={{ wordSpacing: '0.15em', fontSize: '18px' }}
              >
                Zuccess
              </span>
            </motion.div>
          </Link>

          {/* Navigation + CTA على اليمين */}
          <div className="flex items-center space-x-10">
            <nav className="hidden md:flex space-x-10 text-base font-medium text-[#EBEBDF] relative">
              <Link
                to="/"
                style={{ wordSpacing: '0.15em' }}
                className={`hover:text-[#EA7946] ${location.pathname === '/' ? 'text-[#EA7946]' : ''}`}
              >
                Home
              </Link>

              {/* Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  style={{ wordSpacing: '0.15em', fontSize: '18px' }}
                  className={`flex items-center space-x-1 hover:text-[#EA7946] focus:outline-none ${
                    location.pathname.startsWith('/capability-building') ? 'text-[#EA7946]' : ''
                  }`}
                >
                  <span>AI-Powered Business Solutions</span>
                  <svg
                    className="w-3 h-3 text-[#EBEBDF]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-60 bg-[#080844] border border-[#EA7946] rounded-md shadow-lg z-50">
                    {[ 
                      { label: 'Professional Media Production', path: '/capability-building/media-production' },
                      { label: 'Interactive Company Profile', path: '/capability-building/company-profile' },
                      { label: 'AI Powered Training Content', path: '/capability-building/training-content' },
                      { label: 'AI Automation System', path: '/capability-building/ai-automation' },
                      { label: 'Company Portal', path: '/capability-building/company-portal' },
                      { label: 'Social Media Management', path: '/capability-building/social-media-management' },
                      { label: 'AI Powered Solutions', path: '/capability-building/ai-powered' },
                    ].map(({ label, path }) => (
                      <Link
                        key={path}
                        to={path}
                        className="block px-4 py-2 text-[#EBEBDF] hover:bg-[#EA7946] hover:text-white transition-colors duration-200"
                        style={{ wordSpacing: '0.15em', fontSize: '18px' }}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about-us"
                style={{ wordSpacing: '0.15em' }}
                className={`hover:text-[#EA7946] ${location.pathname === '/about-us' ? 'text-[#EA7946]' : ''}`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                style={{ wordSpacing: '0.15em' }}
                className={`hover:text-[#EA7946] ${location.pathname === '/contact' ? 'text-[#EA7946]' : ''}`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA */}
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="border px-4 py-2 rounded transition-all duration-300 text-sm"
                style={{
                  wordSpacing: '0.15em',
                  fontSize: '18px',
                  color: '#EBEBDF', // نص أبيض كريم دائمًا
                  borderColor: '#EBEBDF', // إطار أبيض كريم
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#EBEBDF'; // خلفية أبيض كريم
                  (e.currentTarget as HTMLAnchorElement).style.color = '#080844'; // نص دارك بلو عند الهوفر
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#EBEBDF'; // يرجع نص أبيض كريم
                }}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
