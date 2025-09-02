import React, { useEffect, useRef, useState } from 'react';
import { Brain, Users, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const exploreRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Observer for "Explore Our Solution" section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (exploreRef.current) observer.observe(exploreRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Ensure hero video plays correctly
    const video = heroVideoRef.current;
    if (video) {
      video.oncanplay = () => {
        video.play().catch(err => console.log("Video play error:", err));
      };
    }
  }, []);

  useEffect(() => {
    // Observer to pause/play videos based on scroll visibility
    const videos = [heroVideoRef.current, introVideoRef.current].filter(Boolean) as HTMLVideoElement[];

    const handlePlayPause = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch(err => console.log("Video play error:", err));
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, { threshold: 0.5 });

    videos.forEach(video => observer.observe(video));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* Section 1 - Hero */}
      <section className="relative w-full h-[90vh] flex flex-col justify-center items-start text-left px-6 md:px-24 overflow-hidden">
        {/* Background Video */}
      <video
  ref={heroVideoRef}
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover top-10"
  id="heroVideo"
>
  <source src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756030979/automation_2_ou39q4.mp4" />
  Your browser does not support the video tag.
</video>
         {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* زر ميوت/انميوت بأسفل يمين */}
        <button
          className="absolute bottom-6 right-6 z-20 bg-white/80 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg hover:bg-black hover:text-white transition"
          onClick={() => {
            const video = heroVideoRef.current;
            if (video) video.muted = !video.muted;
          }}
        >
          🔊
        </button>

        {/* Content */}
        <div className="relative z-10 py-36 flex flex-col gap-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl text-[#EBEBDF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            We Turn Smart Ideas into Smarter Systems
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-xl mb-10 text-[#EBEBDF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            ZUCCESS makes your vision faster, automated, and scalable.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link
  to="/capability-building"
  className="bg-[#EBEBDF] border-2 border-[#080844] text-[#080844] px-6 py-3 rounded-lg font-semibold hover:bg-[#080844] hover:text-[#EBEBDF] transition"
>
  Our Services
</Link>

          </motion.div>
        </div>
      </section>

      {/* Section 2 - Intro Video (About Company) */}
      <section
        className="flex flex-col items-center justify-center px-6 md:px-24 py-20"
        style={{ backgroundColor: "#EBEBDF", color: "#080844" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get to Know Us
        </h2>
        <p className="max-w-2xl text-center mb-10 text-lg text-gray-700">
          Discover who we are, our mission, and how we bring smart ideas into smarter systems.
        </p>

        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-[#080844]">
          <video
            ref={introVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src=" https://res.cloudinary.com/diroi6tnk/video/upload/v1756030395/all_sound_effectsnewest_1_lvk07t.mp4 npm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* زر كتم الصوت */}
          <button
            onClick={() => {
              const video = introVideoRef.current;
              if (video) video.muted = !video.muted;
            }}
            className="absolute bottom-4 right-4 bg-[#080844] text-[#EBEBDF] px-3 py-2 rounded-lg shadow-md text-sm"
          >
            Toggle Sound
          </button>

          {/* زر ملء الشاشة */}
          <button
            onClick={() => {
              const video = introVideoRef.current;
              if (video) {
                if (video.requestFullscreen) {
                  video.requestFullscreen();
                } else if ((video as any).webkitRequestFullscreen) {
                  (video as any).webkitRequestFullscreen();
                } else if ((video as any).msRequestFullscreen) {
                  (video as any).msRequestFullscreen();
                }
              }
            }}
            className="absolute bottom-4 left-4 bg-[#EA7946] text-white px-3 py-2 rounded-lg shadow-md text-sm"
          >
            Full Screen
          </button>
        </div>
      </section>

      {/* Section 3 - Explore Our Solution */}
      <section ref={exploreRef} style={{ backgroundColor: '#EBEBDF', paddingTop: 0 }}>
        <div
          style={{
            backgroundColor: '#080844',
            color: '#EBEBDF',
            height: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '2rem 1.5rem 0',
            borderBottomLeftRadius: '2rem',
            borderBottomRightRadius: '2rem',
          }}
        >
          <h2 className="text-3xl font-bold mb-2 mt-0">Explore Our Solution</h2>
          <p className="text-lg max-w-xl text-center">
            AI-powered solutions to enhance your team's skills and performance
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 justify-center"
          style={{ maxWidth: '1200px', margin: '0 auto', marginTop: '-140px', padding: '0 1.5rem' }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {},
          }}
        >
          {[{
              title: 'AI-Powered Business Solutions',
              description: "AI-powered solutions to enhance your team's skills and performance",
              icon: Brain,
              path: '/capability-building',
            },
            {
              title: 'About Us',
              description: 'Learn more about our mission and vision for the future',
              icon: Users,
              path: '/about-us',
            },
            {
              title: 'Contact Us',
              description: 'Ready to transform your business? Get in touch with our team today',
              icon: Mail,
              path: '/contact',
            },
          ].map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-[#EBEBDF] rounded-3xl border-2 border-[#080844] p-6 shadow-md min-h-[400px] w-[360px]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="w-16 h-16 bg-[#EA7946] rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#080844] mb-3 text-center">{card.title}</h3>
                <p className="text-center text-[#333] mb-6 text-lg">{card.description}</p>
                <Link
                  to={card.path}
                  className="mt-auto bg-[#EA7946] text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition"
                >
                  Learn More
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Section 4 - Ready to Transform */}
      <section className="py-10 bg-[#EBEBDF]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Block */}
            <motion.div
              className="flex-1 relative rounded-none overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="WhatsApp Image 2025-08-19 at 12.53.17 PM.png"
                alt="Left Visual"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-8 text-white text-center">
                <p className="text-xl leading-relaxed mb-6">
                  <strong className="font-extrabold block mb-2">
                    Ready to Transform Your Business?
                  </strong>
                  Join the future of intelligent solutions and unlock your organization's full potential.
                </p>
                {/* رابط بدل زر */}
                <Link
                  to="/capability-building"
                  className="bg-[#EA7946] text-[#080844] font-extrabold px-6 py-3 rounded-none shadow-md hover:opacity-90 transition-all duration-200"
                >
                  Let's Empower Your Brand
                </Link>
              </div>
            </motion.div>

            {/* Right Block */}
            <motion.div
              className="flex-1 relative rounded-none overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="WhatsApp Image 2025-08-19 at 12.27.53 PM.png"
                alt="Right Visual"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end items-center p-8 text-[#080844] text-center">
  <div className="mb-12 flex flex-col items-center gap-4">
    <p className="text-white max-w-xs mx-auto">
      Step into a new era of smart strategies that drive measurable results for your business.
    </p>
    <Link
      to="/capability-building"
      className="bg-[#F9F5EC] font-extrabold px-6 py-3 rounded-none shadow-md hover:opacity-90 transition-all duration-200"
    >
      Let’s Build Together
    </Link>
  </div>
</div>

            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="bg-[#080844] px-6 py-4 flex justify-center lg:justify-end rounded-none mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/capability-building"
              className="bg-[#EA7946] text-[#080844] font-extrabold px-6 py-3 rounded-none shadow-md hover:opacity-90 transition-all duration-200"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
