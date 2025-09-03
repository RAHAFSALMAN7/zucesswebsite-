import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AITour360 = () => {
  const [showNoise, setShowNoise] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNoise(false);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 px-4 bg-[#080844] text-white min-h-[calc(100vh-150px)] pb-32">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">360 AI Tour</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore an interactive virtual tour powered by AI, offering an innovative
            way to experience your company or products.
          </p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <button
            onClick={() => {
              window.location.href = "/360viewer/index.htm";
            }}
            className="px-8 py-3 bg-[#EA7946] hover:bg-orange-600 rounded-xl font-semibold text-white transition-colors duration-300"
          >
            Start the Tour
          </button>
        </motion.div>

        {/* TV Frame with Video */}
        <motion.div
          className="relative w-full max-w-5xl mx-auto rounded-2xl bg-black p-4 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="rounded-2xl overflow-hidden border-[12px] border-gray-700 bg-black relative">
            {showNoise && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1.5, delay: 3.5 }}
                className="absolute inset-0 bg-cover opacity-80 z-20"
                style={{
                  backgroundImage:
                    "url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')",
                }}
              />
            )}
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756891056/360_tour_zucess_dgoiud.mp4"
              controls
              playsInline
              className="w-full h-[500px] object-cover bg-black"
            />
          </div>

          <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-700 rounded-b-xl shadow-lg"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default AITour360;
