import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, ArrowLeft, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const MediaProduction = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const mediaVideos = [
    { 
      title: "Professional Video Production 1", 
      id: "video1", 
      videoUrl: "https://res.cloudinary.com/dyqj1oyw3/video/upload/xwl9szvemgrlxdoxywkv.mp4",
      thumbnail: "https://i.postimg.cc/j54cnqHq/Whats-App-Image-2025-05-22-at-8-43-20-PM-2.jpg" 
    },
    { 
      title: "Professional Video Production 2", 
      id: "video2", 
      videoUrl: "https://res.cloudinary.com/dyqj1oyw3/video/upload/lqwd4psw8fy5nx61hdh9.mp4",
      thumbnail: "https://i.postimg.cc/3wB9dJC8/Whats-App-Image-2025-05-22-at-8-43-20-PM.jpg" 
    },
    { 
      title: "Professional Video Production 3", 
      id: "video3", 
      videoUrl: "https://res.cloudinary.com/dyqj1oyw3/video/upload/ehmc7oe60xyav4ymw7od.mp4",
      thumbnail: "https://i.postimg.cc/yYLVXF1c/Whats-App-Image-2025-05-22-at-8-43-20-PM-1.jpg" 
    }
  ];

  const features = [
    '4K Ultra HD Video Production',
    'Professional Drone Cinematography',
    'Motion Graphics & Animation',
    'Brand Storytelling & Narrative',
    'Multi-Camera Setup & Direction',
    'Post-Production & Color Grading',
    'Sound Design & Audio Engineering',
    'Corporate Event Documentation',
    'Facility & Workspace Showcases',
    'Social Media Content Creation'
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % mediaVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + mediaVideos.length) % mediaVideos.length);
  };

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
            className="inline-flex items-center text-[#080844]/80 hover:text-[#080844] transition-colors duration-200 font-semibold"
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#EA7946] to-[#F47B3B] flex items-center justify-center">
                <Video className="text-white" size={32} />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#080844] to-[#37377C] bg-clip-text text-transparent">
                Professional Media Production
              </h1>
              
              <p className="text-[#080844] leading-relaxed cursor-default">
                Elevate your brand with our comprehensive media production services. From concept to completion, 
                we create stunning visual content that captures your company's essence and communicates your 
                message with impact and professionalism.
              </p>

              <p className="text-[#080844] leading-relaxed cursor-default">
                Our team combines cutting-edge technology with creative expertise to deliver high-quality videos, 
                animations, and multimedia content that engages your audience and drives results. Whether you need 
                corporate videos, facility showcases, or social media content, we bring your vision to life.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-[#EBEBDF] rounded-2xl p-8 border-2 border-[#080844]">
              <h3 className="text-2xl font-bold text-[#080844] mb-6">Key Features & Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-[#080844]"
                  >
                    <CheckCircle className="mr-3 flex-shrink-0" size={16} />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-[#080844] text-[#EBEBDF] px-8 py-4 rounded-lg hover:bg-[#37377C] transition-all duration-300 transform hover:scale-105 text-center font-semibold"
              >
                Get Started
              </Link>
              <button className="bg-[#EBEBDF] border-2 border-[#080844] text-[#080844] px-8 py-4 rounded-lg hover:bg-[#D8D7CC] transition-all duration-300 transform hover:scale-105 font-semibold">
                View Portfolio
              </button>
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="sticky top-24"
          >
            <div className="bg-[#EBEBDF] rounded-2xl p-6 border-2 border-[#080844]">
              <h3 className="text-xl font-bold text-[#080844] mb-4">Our Work Showcase</h3>
              
              <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-4">
                <video 
                  src={mediaVideos[currentVideoIndex].videoUrl}
                  controls
                  className="w-full h-full object-cover"
                  poster={mediaVideos[currentVideoIndex].thumbnail}
                  key={currentVideoIndex}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[#080844] font-semibold">
                  {mediaVideos[currentVideoIndex].title}
                </h4>
                <div className="flex space-x-2">
                  <button
                    onClick={prevVideo}
                    className="p-2 bg-[#080844]/20 rounded-full hover:bg-[#080844]/40 transition-colors"
                  >
                    <ChevronLeft className="text-[#080844]" size={20} />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="p-2 bg-[#080844]/20 rounded-full hover:bg-[#080844]/40 transition-colors"
                  >
                    <ChevronRight className="text-[#080844]" size={20} />
                  </button>
                </div>
              </div>
              
              {/* Video indicators */}
              <div className="flex justify-center space-x-2">
                {mediaVideos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      idx === currentVideoIndex ? 'bg-[#37377C]' : 'bg-[#080844]/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MediaProduction;
