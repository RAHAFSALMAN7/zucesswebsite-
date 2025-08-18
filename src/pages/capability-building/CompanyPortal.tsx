import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, ArrowLeft, CheckCircle } from 'lucide-react';

const CompanyPortal = () => {
  const features = [
    'Unified Dashboard Interface',
    'Document Management System',
    'Team Collaboration Tools',
    'Internal Communication Hub',
    'Project Management Integration',
    'Employee Directory',
    'Resource Library Access',
    'Notification System',
    'Mobile App Support',
    'Single Sign-On (SSO)'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-4"
      style={{ backgroundColor: '#EBEBDF' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-8"
        >
          <Link
            to="/capability-building"
            className="inline-flex items-center text-[#080844] hover:text-[#EA7946] font-semibold transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Capability Building
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#EA7946' }}
              >
                <Building className="text-white" size={32} />
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: '#080844' }}
              >
                Company Portal
              </h1>

              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: '#080844' }}
              >
                Comprehensive digital workspace solution for seamless internal communication
                and collaboration. Create a centralized hub where your team can access everything
                they need to stay productive and connected.
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{ color: '#080844' }}
              >
                Streamline your organization's workflow with an integrated portal that brings
                together communication, collaboration, and resource management in one powerful
                platform designed for modern businesses.
              </p>
            </div>

            {/* Key Features - New Design */}
            <div
              className="bg-[#EBEBDF] rounded-3xl p-8 border border-[#080844] shadow-md"
            >
              <h3
                className="text-3xl font-extrabold mb-8"
                style={{ color: '#080844' }}
              >
                Key Features & Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, type: 'spring', stiffness: 100 }}
                    className="flex items-center space-x-4 p-4 rounded-xl cursor-default bg-[#EBEBDF] border border-[#080844] transition-colors duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#080844' }}
                    >
                      <CheckCircle size={20} color="white" />
                    </div>
                    <span className="text-lg font-semibold" style={{ color: 'inherit' }}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/contact"
                className="group flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                style={{ backgroundColor: '#EA7946', color: 'white' }}
              >
                Get Started
              </Link>
              <button
                className="group flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                style={{
                  backgroundColor: '#080844',
                  color: '#EBEBDF',
                  borderColor: '#080844'
                }}
              >
                Live Demo
              </button>
            </div>
          </motion.div>

          {/* Video/Demo Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="sticky top-24"
          >
            <div
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: '#EBEBDF',
                borderColor: '#080844',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#080844' }}
              >
                Company Portal Demo
              </h3>

              <div className="aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Company Portal"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-4">
                <p
                  className="text-[#080844]/80 text-sm"
                >
                  Explore how our Company Portal transforms internal operations and
                  enhances team collaboration across your organization.
                </p>

                <div className="flex items-center justify-between text-[#080844]/60 text-sm">
                  <span>Portal Walkthrough</span>
                  <span>7:20 min</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyPortal;
