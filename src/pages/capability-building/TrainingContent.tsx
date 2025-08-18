import React from 'react';
import { ChevronRight, Brain, Target, BarChart3, CheckCircle, Smartphone, Users, Award, Play, ArrowRight } from 'lucide-react';

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
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex items-center space-x-2 text-[#EBEBDF] font-medium cursor-pointer justify-start">
            <span>Back to Capability Building</span>
            <ChevronRight className="w-4 h-4" color="#EBEBDF" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#EBEBDF] to-[#F7F6F2] bg-clip-text text-transparent text-center">
            AI Powered Training Content
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl mb-8 leading-relaxed">
              Leverage artificial intelligence to create adaptive, personalized training content that evolves with your team. 
              Our AI-driven platform generates dynamic learning materials tailored to individual learning styles and organizational needs.
            </p>
            
            <p className="text-lg leading-relaxed">
              Experience the future of corporate training with content that adapts in real-time, identifies knowledge gaps, 
              and provides targeted learning experiences that maximize retention and application of new skills.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#EA7946] hover:bg-[#d76a3f] text-[#EBEBDF] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              className="bg-transparent border-2 border-[#EBEBDF] text-[#EBEBDF] hover:bg-[#EBEBDF] hover:text-[#080844] px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#EBEBDF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#080844] mb-4">Key Features & Capabilities</h2>
            <p className="text-lg text-[#444a6e] max-w-3xl mx-auto">
              Discover the powerful features that make our AI-driven training platform the future of corporate learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#EBEBDF] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#080844]"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#080844] to-[#0f1060] rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-[#EBEBDF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#080844] mb-3">{feature.title}</h3>
                  <p className="text-[#444a6e] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-6 bg-[#080844]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#EBEBDF] mb-4">Training Content Demo</h2>
            <p className="text-[#EBEBDF] max-w-3xl mx-auto text-lg">
              See how our AI adapts learning materials to individual needs and learning preferences
            </p>
          </div>

          <div className="bg-[#EBEBDF] rounded-2xl p-12 text-center border border-[#080844]">
            <div className="max-w-3xl mx-auto">

              {/* Video Player */}
              <div className="aspect-video w-full mb-8">
                <video
                  src="https://res.cloudinary.com/diroi6tnk/video/upload/v1755503197/%D8%A7%D9%84%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8_jhf62k.mp4"
                  controls
                  className="w-full h-full object-cover rounded-2xl"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <h3 className="text-2xl font-bold text-[#080844] mb-4">See the AI in Action</h3>
              <p className="text-[#080844] mb-6 text-lg leading-relaxed">
                Our comprehensive training content demo showcases how AI adapts learning materials to individual needs and learning preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 bg-[#EBEBDF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#080844] mb-4">Ready to Transform Your Training?</h2>
          <p className="text-[#444a6e] mb-8 text-lg">
            Join leading organizations already using AI to revolutionize their learning and development programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#EA7946] text-[#EBEBDF] px-8 py-4 rounded-lg font-semibold hover:bg-[#d76a3f] transition-colors shadow-lg">
              Get Started Today
            </button>
            <button className="bg-transparent border-2 border-[#080844] text-[#080844] hover:bg-[#080844] hover:text-[#EBEBDF] px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080844] text-[#a0a0b9] py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Brain className="w-8 h-8 text-[#EA7946]" />
            <span className="text-xl font-bold text-[#EBEBDF]">AI Training Hub</span>
          </div>
          <p className="mb-4">Transforming corporate learning through artificial intelligence</p>
          <p className="text-sm">&copy; 2025 AI Training Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
