import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Share2, ArrowLeft } from 'lucide-react';

const SocialMediaManagement = () => {
  const features = [
    {
      title: 'Custom Visual Design',
      description:
        'Every post is designed to match your brand identity using your fonts, colors, and visual tone — with a professional, clean aesthetic that stands out on both feeds.',
    },
    {
      title: 'Engaging Captions & Hashtag Strategy',
      description:
        "We craft caption copy that connects — whether it's bold and corporate for LinkedIn or creative and catchy for Instagram. Hashtags are researched and optimized for maximum reach.",
    },
    {
      title: 'Scheduled Content Calendar',
      description:
        "You'll always know what's coming. We plan and schedule your posts weeks in advance using smart tools to maintain consistency and optimal posting times.",
    },
    {
      title: 'Analytics & Performance Reports',
      description:
        "Track what's working. We provide regular reports on engagement, reach, and follower growth with clear insights on how to improve and scale.",
    },
    {
      title: 'Community Management',
      description:
        'We handle basic responses to comments and DMs, keep conversations alive, and notify you of any leads or high-priority messages — especially on LinkedIn.',
    },
    {
      title: 'Content Strategy & Campaigns',
      description:
        'We help you run focused campaigns — from product launches to employee highlights to seasonal content — always aligned with your business goals and audience behavior.',
    },
  ];

  // مسارات الصور موجودة بالببلك مباشرة
  const imagePaths = [
    "/Custom Visual Design.jpeg",
    "/Engaging Captions & Hashtag Strategy.jpeg",
    "/Scheduled Content Calendar.jpeg",
    "/Analytics & Performance Reports.jpeg",
    "/Community Management.jpeg",
    "/Content Strategy & Campaigns.jpeg",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-28 pb-20 px-6 bg-[#EBEBDF]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="mb-12">
          <Link
            to="/capability-building"
            className="inline-flex items-center text-[#EA7946] hover:text-[#bf5e35] font-semibold transition-colors duration-300"
          >
            <ArrowLeft size={22} className="mr-3" />
            Back to Capability Building
          </Link>
        </motion.div>

        {/* النص الكامل */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-10 max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#EA7946] shadow-lg shadow-[#EA7946]/50 mx-auto mb-8">
            <Share2 className="text-[#EBEBDF]" size={36} />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#080844] leading-tight">
            Social Media Management
          </h1>

          <p className="text-2xl font-semibold text-[#080844] max-w-3xl mx-auto leading-snug">
            Let us build your voice while you build your business.
          </p>

          <div className="space-y-6 text-[#334155] max-w-3xl mx-auto text-lg leading-relaxed font-medium">
            <p>
              At <span className="font-bold text-[#EA7946]">Zuccess</span>, we don't just post content — we
              create a presence. Our social media team manages your brand from A to Z: designing high-impact
              visuals, writing engaging captions, planning content calendars, and optimizing for reach. Whether
              you're a corporate powerhouse or an emerging brand, we make sure your message lands where it
              matters most.
            </p>

            <p>
              We specialize in elevating your digital identity on LinkedIn and Instagram, helping you stay
              consistent, relevant, and top-of-mind.
            </p>
          </div>

          {/* أزرار CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-10">
            <Link
              to="/contact"
              className="bg-[#EA7946] text-[#EBEBDF] px-12 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-center"
            >
              Get Started
            </Link>
            <button
              className="border-2 border-[#080844] text-[#080844] px-12 py-4 rounded-xl font-semibold hover:bg-[#080844] hover:text-[#EBEBDF] transition transform hover:scale-105"
            >
              View Portfolio
            </button>
          </div>
        </motion.div>

        {/* الكاردات تحت النص */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-7xl mx-auto mt-16"
        >
          <h3 className="text-3xl font-extrabold text-center text-[#080844] mb-10">
            Key Features of Zuccess Social Media Management
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {features.map(({ title, description }, i) => (
              <div
                key={i}
                className="flex flex-col max-w-xs rounded-2xl overflow-hidden border-2 border-[#080844] cursor-default bg-[#EBEBDF] shadow-md mx-auto"
              >
                <img
                  src={imagePaths[i]}
                  alt={title}
                  className="w-25 h-30 object-cover mx-auto"
                />
                <div className="p-4">
                  <h4 className="text-xl font-bold text-[#080844] mb-2">{title}</h4>
                  <p className="text-[#334155] text-base leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SocialMediaManagement;
