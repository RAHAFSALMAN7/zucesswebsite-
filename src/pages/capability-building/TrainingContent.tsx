import React from 'react';
import { ChevronRight, Brain, Target, BarChart3, CheckCircle, Smartphone, Users, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const features = [
    { icon: Brain, title: 'Adaptive Learning Algorithms', description: 'AI that adjusts to individual learning patterns and preferences' },
    { icon: Target, title: 'Content Generation AI', description: 'Automatically creates relevant training materials' },
    { icon: BarChart3, title: 'Performance Analytics', description: 'Deep insights into learning progress and effectiveness' },
    { icon: CheckCircle, title: 'Interactive Assessments', description: 'Dynamic evaluations that adapt to learner responses' },
    { icon: Smartphone, title: 'Multimedia Integration', description: 'Rich content combining video, audio, and interactive elements' },
    { icon: BarChart3, title: 'Progress Tracking', description: 'Real-time monitoring of learning milestones' },
    { icon: Target, title: 'Personalized Recommendations', description: 'AI-driven suggestions for optimal learning paths' },
    { icon: Users, title: 'Collaborative Learning Tools', description: 'Social features that enhance team-based learning' },
    { icon: Smartphone, title: 'Mobile Learning Support', description: 'Seamless experience across all devices' },
    { icon: Award, title: 'Certification Management', description: 'Automated credentialing and achievement tracking' }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#EBEBDF]">
      {/* Header */}
      <header className="bg-[#080844] text-[#EBEBDF] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-[#EA7946]" />
            <span className="text-xl font-bold">AI Training Hub</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-[#EA7946] transition-colors">Features</a>
            <a href="#demo" className="hover:text-[#EA7946] transition-colors">Demo</a>
            <a href="#contact" className="hover:text-[#EA7946] transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#080844] text-[#EBEBDF] py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {}
          }}
        >
          <motion.div variants={fadeInUp} className="mb-6 flex items-center space-x-2 text-[#EBEBDF] font-medium cursor-pointer justify-start">
            <span>Back to Capability Building</span>
            <ChevronRight className="w-4 h-4" color="#EBEBDF" />
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#EBEBDF] to-[#F7F6F2] bg-clip-text text-transparent text-center">
            AI Powered Training Content
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mb-12">
            <p className="text-xl mb-8 leading-relaxed">
              Leverage artificial intelligence to create adaptive, personalized training content that evolves with your team. 
              Our AI-driven platform generates dynamic learning materials tailored to individual learning styles and organizational needs.
            </p>
            <p className="text-lg leading-relaxed">
              Experience the future of corporate training with content that adapts in real-time, identifies knowledge gaps, 
              and provides targeted learning experiences that maximize retention and application of new skills.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#EA7946] hover:bg-[#d76a3f] text-[#EBEBDF] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              className="bg-transparent border-2 border-[#EBEBDF] text-[#EBEBDF] hover:bg-[#EBEBDF] hover:text-[#080844] px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Request Demo
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#EBEBDF]">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } }, hidden: {} }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#080844] mb-4">Key Features & Capabilities</h2>
            <p className="text-lg text-[#444a6e] max-w-3xl mx-auto">
              Discover the powerful features that make our AI-driven training platform the future of corporate learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-[#EBEBDF] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#080844]"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#080844] to-[#0f1060] rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-[#EBEBDF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#080844] mb-3">{feature.title}</h3>
                  <p className="text-[#444a6e] leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-6 bg-[#080844]">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } }, hidden: {} }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-[#EBEBDF] mb-4">Training Content Demo</motion.h2>
          <motion.p variants={fadeInUp} className="text-[#EBEBDF] max-w-3xl mx-auto text-lg mb-12">
            See how our AI adapts learning materials to individual needs and learning preferences
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <video
              src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756029123/%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9_mtetc9.mp4"
              controls
              className="h-[700px] object-contain rounded-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-[#EBEBDF] mb-4">See the AI in Action</motion.h3>
          <motion.p variants={fadeInUp} className="text-[#EBEBDF] mb-6 text-lg leading-relaxed">
            Our comprehensive training content demo showcases how AI adapts learning materials to individual needs and learning preferences.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
