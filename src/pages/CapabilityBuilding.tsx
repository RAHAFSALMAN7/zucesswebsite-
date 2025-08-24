import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Video, 
  FileText, 
  GraduationCap, 
  Cog,
  Building,
  ArrowRight,
  Share2,
  User,          // أيقونة للـ Interactive Avatar
  Globe          // أيقونة للـ 360 AI Tour
} from 'lucide-react';

const CapabilityBuilding = () => {
  const services = [
    {
      title: 'AI Content',
      description: 'Transform your content creation with cutting-edge AI-driven solutions tailored to your industry needs.',
      icon: Brain,
      path: '/capability-building/ai-powered'
    },
    {
      title: 'Professional Media Production',
      description: 'High-quality media content creation services including video production, animation, and multimedia presentations.',
      icon: Video,
      path: '/capability-building/media-production'
    },
    {
      title: 'Interactive Company Profile',
      description: 'Create engaging, interactive digital profiles that showcase your company\'s strengths and capabilities.',
      icon: FileText,
      path: '/capability-building/company-profile'
    },
    {
      title: 'AI Powered Training Content',
      description: 'Leverage artificial intelligence to create adaptive, personalized training content that evolves with your team.',
      icon: GraduationCap,
      path: '/capability-building/training-content'
    },
    {
      title: 'AI Automation System',
      description: 'Make your business work smarter — not harder. Intelligent AI systems that handle the work you don\'t have time for.',
      icon: Cog,
      path: '/capability-building/ai-automation'
    },
    {
      title: 'Company Portal',
      description: 'Comprehensive digital workspace solution for seamless internal communication and collaboration.',
      icon: Building,
      path: '/capability-building/company-portal'
    },
    {
      title: 'Social Media Management',
      description: 'Let us build your voice while you build your business. Complete social media management from content creation to community engagement.',
      icon: Share2,
      path: '/capability-building/social-media-management'
    },
    // === الخدمات الجديدة ===
    {
      title: 'Interactive Avatar',
      description: 'Design customizable AI avatars to enhance virtual interactions and presentations.',
      icon: User,
      path: '/interactive-avatar'  // ✅ تم تعديل المسار
    },
    {
      title: '360 AI Tour',
      description: 'Provide immersive 360° AI-powered virtual tours for your company or products.',
      icon: Globe,
      path: '/360-ai-tour'  // ✅ تم تعديل المسار
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-4 bg-[#080844]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#EBEBDF' }}>
            AI-Powered<br />
            Business Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#EBEBDF' }}>
            Empower your organization with our comprehensive suite of AI-powered business solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(8, 8, 68, 0.15)"
              }}
              className="group"
            >
              <Link
                to={service.path}
                className="block bg-white/90 backdrop-blur-lg rounded-2xl p-8 h-full border border-primary/10 hover:border-accent/30 hover:bg-white transition-all duration-300 shadow-lg"
              >
                <service.icon className="text-[#EA7946] mb-6" size={32} />

                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                
                <div className="flex items-center text-accent group-hover:text-primary transition-colors duration-300">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CapabilityBuilding;
