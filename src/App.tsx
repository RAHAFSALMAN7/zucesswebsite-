import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import CapabilityBuilding from './pages/CapabilityBuilding';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

// Capability Building Sub-pages
import MediaProduction from './pages/capability-building/MediaProduction';
import CompanyProfile from './pages/capability-building/CompanyProfile';
import TrainingContent from './pages/capability-building/TrainingContent';
import AIAutomation from './pages/capability-building/AIAutomation';
import CompanyPortal from './pages/capability-building/CompanyPortal';
import SocialMediaManagement from './pages/capability-building/SocialMediaManagement';
import AIPowered from './pages/capability-building/AIPowered';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // حساب شفافية الخلفية بناءً على التمرير (غير متوفر في الصفحة الرئيسية)
  const scrollProgress = Math.min(scrollY / (window.innerHeight * 2), 1);
  const bgOpacity = 0.98 - scrollProgress * 0.2;

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative bg-background">
        {/* Overlay الخلفية للصفحات غير الرئيسية */}
        <Routes>
          <Route path="/" element={null} />
          <Route
            path="*"
            element={
              <div
                className="fixed inset-0 transition-all duration-500"
                style={{
                  opacity: bgOpacity * 0.15,
                  background: `linear-gradient(135deg, 
                    rgba(8, 8, 68, 0.05) 0%, 
                    rgba(234, 121, 70, 0.05) 50%,
                    rgba(8, 8, 68, 0.05) 100%)`,
                }}
              />
            }
          />
        </Routes>

        {/* المحتوى الرئيسي */}
        <div className="relative z-10">
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Homepage />} />

              {/* مسارات حلول الأعمال المعتمدة على AI */}
              <Route path="/capability-building" element={<CapabilityBuilding />} />
              <Route path="/capability-building/media-production" element={<MediaProduction />} />
              <Route path="/capability-building/company-profile" element={<CompanyProfile />} />
              <Route path="/capability-building/training-content" element={<TrainingContent />} />
              <Route path="/capability-building/ai-automation" element={<AIAutomation />} />
              <Route path="/capability-building/company-portal" element={<CompanyPortal />} />
              <Route path="/capability-building/social-media-management" element={<SocialMediaManagement />} />
              <Route path="/capability-building/ai-powered" element={<AIPowered />} />

              {/* صفحات عامة */}
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
