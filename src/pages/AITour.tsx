import React from 'react';
import { motion } from 'framer-motion';

const AITour360 = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-[#080844] text-white">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            360 AI Tour
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore an interactive virtual tour powered by AI, offering an innovative way to experience your company or products.
          </p>
        </motion.div>

        {/* Image / Video Gallery Placeholder */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="h-64 bg-gray-800 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Image or Video Placeholder 1</span>
          </div>
          <div className="h-64 bg-gray-800 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Image or Video Placeholder 2</span>
          </div>
        </motion.div>

        {/* Description / Details */}
        <motion.div
          className="space-y-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold">Interactive Tour Features</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
            <li>360-degree experience of all company sections or products.</li>
            <li>Fully interactive with AI-powered capabilities.</li>
            <li>Display detailed information when clicking any section.</li>
            <li>Supports embedding interactive videos and images in each point.</li>
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <button className="px-8 py-3 bg-[#EA7946] hover:bg-orange-600 rounded-xl font-semibold text-white transition-colors duration-300">
            Start the Tour
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default AITour360;
