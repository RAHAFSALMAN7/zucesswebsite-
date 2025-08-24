import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
          {/* اللوجو */}
          <Link to="/" className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <img
                src="/zuccess logo without bg-31.png"
                alt="Zuccess Logo"
                className="h-40 object-contain transition-all duration-300"
              />
            </motion.div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-10">
            <nav className="hidden md:flex space-x-10 text-base font-medium text-[#EBEBDF] relative">
              <Link
                to="/"
                style={{ wordSpacing: '0.15em' }}
                className={`hover:text-[#EA7946] ${location.pathname === '/' ? 'text-[#EA7946]' : ''}`}
              >
                Home
              </Link>

              <Link
                to="/capability-building"
                style={{ wordSpacing: '0.15em', fontSize: '18px' }}
                className={`hover:text-[#EA7946] ${location.pathname === '/capability-building' ? 'text-[#EA7946]' : ''}`}
              >
                AI-Powered Business Solutions
              </Link>

              <Link
                to="/about-us"
                style={{ wordSpacing: '0.15em' }}
                className={`hover:text-[#EA7946] ${location.pathname === '/about-us' ? 'text-[#EA7946]' : ''}`}
              >
                About Us
              </Link>

              {/* دمج Contact مع Let’s Talk */}
              <Link
                to="/contact"
                className="border px-4 py-2 rounded transition-all duration-300 text-sm"
                style={{
                  wordSpacing: '0.15em',
                  fontSize: '18px',
                  color: '#EBEBDF',
                  borderColor: '#EBEBDF',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#EBEBDF';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#080844';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#EBEBDF';
                }}
              >
                Contact Us   
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
