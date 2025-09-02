import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  ArrowRight, 
  Play,
  ArrowLeft,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const showcaseVideos = [
  {
    title: "With this level of video and avatar quality, you’ll have content we’re truly proud to deliver.",
    videoUrl: "https://res.cloudinary.com/diroi6tnk/video/upload/v1756030979/automation_2_ou39q4.mp4",
    thumbnail: "https://i.postimg.cc/Xv7dRsFx/aiwelcom-to-zuccess.png"
  }, 
  {
    title: "Why choose Zuccess?",
    videoUrl: "https://res.cloudinary.com/diroi6tnk/video/upload/v1755501115/why_zuccess_ig3mr0.mp4",
    thumbnail: "https://i.postimg.cc/yd2RSBGr/whychoos-zuccess.png"
  },
  {
    title: "LinkedIn is Our Growth Engine: Elevate our brand, engage with industry leaders, and turn connections into opportunities. LinkedIn helps our company shine where it matters most. ",
    videoUrl: "https://res.cloudinary.com/diroi6tnk/video/upload/v1755501406/LINKEDIN_w8zwl9.mp4",
    thumbnail: "https://i.postimg.cc/MTfMwNG0/startposting.png"
  },
  {
    title: "Smart business solutions, AI content & media production, interactive company profiles, AI-powered training & automation, company portals, social media management, interactive avatars, and 360° virtual tours.",
    videoUrl: "https://res.cloudinary.com/diroi6tnk/video/upload/v1756030395/all_sound_effectsnewest_1_lvk07t.mp4",
    thumbnail: "https://i.postimg.cc/FdxXLybz/image.png"
  }
];

const features = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Intelligent Content Generation",
    description: "AI-powered content creation tailored to your brand voice"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Real-time Optimization",
    description: "Continuous learning and improvement of content performance"
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Targeted Personalization",
    description: "Dynamic content adaptation based on user behavior and preferences"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Multi-channel Distribution",
    description: "Seamless content deployment across all digital platforms"
  }
];

function App() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) return;
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % showcaseVideos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  const prevVideo = () => setActiveDemo((prev) => (prev - 1 + showcaseVideos.length) % showcaseVideos.length);
  const nextVideo = () => setActiveDemo((prev) => (prev + 1) % showcaseVideos.length);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EBEBDF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/capability-building"
            className="inline-flex items-center text-[#080844] hover:text-[#EA7946] font-semibold transition-colors duration-200"
          >
            <ArrowLeft className="mr-2" />
            Back to Capability Building
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-left mb-6" style={{ color: '#080844' }}>
            AI Content
          </h2>
          <div className="prose prose-lg max-w-none text-left" style={{ color: '#080844' }}>
            <p className="text-lg leading-relaxed">
              Transform your content strategy with our cutting-edge AI-driven solutions. 
              Our intelligent platform combines machine learning algorithms with creative 
              expertise to deliver personalized, high-performing content that resonates 
              with your audience and drives meaningful engagement across all channels.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Features & Buttons */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#080844' }}>
                Key Features & Content Solutions
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg" style={{ backgroundColor: '#EA7946', color: 'white' }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1" style={{ color: '#080844' }}>
                        {feature.title}
                      </h4>
                      <p className="text-sm opacity-80" style={{ color: '#080844' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                className="group flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                style={{ backgroundColor: '#EA7946', color: 'white' }}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="group flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
                style={{ backgroundColor: '#080844', color: '#EBEBDF', borderColor: '#080844' }}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Request Demo
              </button>
            </div>
          </div>

          {/* Right Column - Demo Carousel */}
          <div className="relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-center mb-2" style={{ color: '#080844' }}>
                AI Solutions in Action
              </h3>
              <div className="h-1 w-20 mx-auto" style={{ backgroundColor: '#EA7946' }}></div>
            </div>

            {/* Carousel Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 min-h-[500px] overflow-visible">

              {/* Left Arrow */}
              <button 
                onClick={prevVideo} 
                className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-[#080844]/70 hover:bg-[#080844] text-white p-3 rounded-full z-20 transition"
              >
                <ChevronLeft className="w-6 h-6"/>
              </button>

              {/* Right Arrow */}
              <button 
                onClick={nextVideo} 
                className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-[#080844]/70 hover:bg-[#080844] text-white p-3 rounded-full z-20 transition"
              >
                <ChevronRight className="w-6 h-6"/>
              </button>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50"></div>

              {/* Video Player */}
              <div className="aspect-video rounded-xl overflow-hidden mb-4 relative z-10">
                <video
                  ref={videoRef}
                  key={activeDemo} 
                  src={showcaseVideos[activeDemo].videoUrl}
                  poster={showcaseVideos[activeDemo].thumbnail}
                  controls
                  className="w-full h-full object-cover"
                  onPlay={handlePlay}
                  onPause={handlePause}
                  onEnded={handleEnded}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Title */}
              <h4 className="text-center text-lg font-semibold mb-4" style={{ color: '#080844' }}>
                {showcaseVideos[activeDemo].title}
              </h4>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-3 mt-4 z-20 relative">
                {showcaseVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDemo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeDemo ? 'bg-[#EA7946]' : 'bg-[#080844]/50 hover:bg-[#080844]'}`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
