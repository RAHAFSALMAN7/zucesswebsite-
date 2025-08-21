import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/zuccess.ai?igsh=MW91MzV6NWkzeHR0OA%3D%3D&utm_source=qr',
      icon: <Instagram className="w-5 h-5 text-[#0A0A5B]" />,
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@zuccess.inc?_t=ZS-8xN4B1td1oO&_r=1',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[#0A0A5B]"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/zuccess/',
      icon: <Linkedin className="w-5 h-5 text-[#0A0A5B]" />,
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0A0A5B] text-white py-12 px-6"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Logo & Input Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left: Logo and Text */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/zuccess logo without bg-34.png"
                alt="ZUCCESS"
                className="h-30 w-40"
              />
            </div>

            <h2 className="text-xl md:text-2xl font-bold">
              powered by AI and built by vision.
            </h2>

            {/* Input */}
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border-2 border-white/60 bg-transparent text-white w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Right: Social Media + Contact Us */}
          <div className="flex flex-col items-center space-y-4">
            {/* Social Media */}
            <div className="flex flex-col items-center space-y-2">
              <p className="font-semibold">Follow Us</p>
              <div className="flex space-x-2">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col items-center space-y-2 mt-4">
              <p className="font-semibold">Contact Us</p>
              <div className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200">
                <Mail size={16} />
                <a
                  href="mailto:info@zuccess.net"
                  className="hover:underline text-sm"
                >
                  info@zuccess.net
                </a>
              </div>
              <div className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200">
                <Phone size={16} />
                <a
                  href="tel:+971503294644"
                  className="hover:underline text-sm"
                >
                  +971-503294644
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links Row */}
        <div className="border-t border-white/30 pt-8 text-sm md:text-base">
          <div className="flex flex-wrap gap-4 text-white/80 justify-center md:justify-start">
            <span className="font-bold">|</span>
            <span className="font-bold">|</span>
            <span className="font-bold">|</span>
          </div>

          {/* Second row */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4 text-white/80 text-xs gap-2">
            <span>© 2024 Zuccess. All rights reserved.</span>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
