import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

const CompanyProfile: React.FC = () => {
  const features = [
    'Dynamic Content Management',
    'Interactive Elements & Animations',
    'Mobile Responsive Design',
    'SEO Optimized Structure',
    'Brand Consistency Tools',
    'Multi-language Support',
    'Analytics & Insights',
    'Social Media Integration',
    'Custom Domain Setup',
    'Regular Content Updates',
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
            <ArrowLeft size={20} className="mr-2" style={{ color: '#EA7946' }} />
            Back to AI-Powered Business Solutions
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
                <FileText className="text-white" size={32} />
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: '#080844' }}
              >
                Interactive Company Profile
              </h1>

              <p
                className="text-lg leading-relaxed mb-4 text-[#080844] cursor-default"
              >
                Create engaging, interactive digital profiles that showcase your company's strengths
                and capabilities. Our dynamic platform goes beyond traditional static profiles to
                deliver immersive experiences that captivate your audience.
              </p>

              <p
                className="text-lg leading-relaxed text-[#080844] cursor-default"
              >
                Transform how you present your organization with interactive elements, multimedia
                content, and real-time updates that keep your profile fresh and engaging. Perfect
                for client presentations, investor meetings, and digital marketing campaigns.
              </p>
            </div>

            {/* Key Features - Updated Design */}
            <div
              className="bg-[#EBEBDF] rounded-3xl p-8 border-2 border-[#080844] shadow-md"
            >
              <h3
                className="text-3xl font-extrabold mb-8 text-[#080844]"
              >
                Key Features & Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, type: 'spring', stiffness: 100 }}
                    className="flex items-center space-x-4 p-4 rounded-xl cursor-default bg-[#EBEBDF] border border-[#080844] hover:bg-[#EA7946] hover:text-white transition-colors duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[#080844]"
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
                View Examples
              </button>
            </div>
          </motion.div>

          {/* Interactive Demo Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="sticky top-24"
          >
            <div
              className="rounded-2xl p-6 border-2 border-[#080844] bg-[#EBEBDF]"
              style={{
                backdropFilter: 'blur(10px)'
              }}
            >
              <h3
                className="text-xl font-bold mb-4 bg-gradient-to-r from-[#080844] to-[#EA7946] bg-clip-text text-transparent"
              >
                Interactive Profile Demo
              </h3>

              {/* Cloudinary Embed */}
              <div className="rounded-xl overflow-hidden mb-4 shadow-lg">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dojnfwjd1&public_id=interactive_profile_for_website_ufzwwf&profile=cld-default"
                  width="640"
                  height="360"
                  style={{ height: 'auto', width: '100%', aspectRatio: '640 / 360' }}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  title="Interactive Company Profile Demo"
                />
              </div>

              {/* Fallback Link */}
              <div className="mb-4">
                <a
                  href="https://player.cloudinary.com/embed/?cloud_name=dojnfwjd1&public_id=interactive_profile_for_website_ufzwwf&profile=cld-default"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#EA7946] hover:text-[#C65D3A] transition-colors duration-200 text-sm"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Open Full Demo in New Tab
                </a>
              </div>

              <div className="space-y-4">
                <p className="text-[#080844]/80 text-sm">
                  Experience our interactive company profile demo that showcases dynamic content,
                  engaging animations, and seamless user interactions.
                </p>

                <div className="flex items-center justify-between text-[#080844]/60 text-sm">
                  <span>Interactive Demo</span>
                  <span className="text-[#EA7946]">Live Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyProfile;
