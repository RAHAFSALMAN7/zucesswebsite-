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
    const video = heroVideoRef.current;
    if (video) {
      video.oncanplay = () => {
        video.play().catch(err => console.log("Video play error:", err));
      };
    }
  }, []);

  useEffect(() => {
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
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col justify-center items-start text-left px-6 md:px-24 overflow-hidden">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover top-10"
        >
          <source src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756030979/automation_2_ou39q4.mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <button
          className="absolute bottom-6 right-6 z-20 bg-white/80 text-black rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg hover:bg-black hover:text-white transition"
          onClick={() => {
            const video = heroVideoRef.current;
            if (video) video.muted = !video.muted;
          }}
        >
          🔊
        </button>
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

      {/* Intro Video Section */}
      <section className="flex flex-col items-center justify-center px-6 md:px-24 py-20 bg-[#EBEBDF] text-[#080844]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get to Know Us</h2>
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
            <source src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756030395/all_sound_effectsnewest_1_lvk07t.mp4" type="video/mp4" />
          </video>
          <button
            onClick={() => {
              const video = introVideoRef.current;
              if (video) video.muted = !video.muted;
            }}
            className="absolute bottom-4 right-4 bg-[#080844] text-[#EBEBDF] px-3 py-2 rounded-lg shadow-md text-sm"
          >
            Toggle Sound
          </button>
          <button
            onClick={() => {
              const video = introVideoRef.current;
              if (video) {
                if (video.requestFullscreen) video.requestFullscreen();
                else if ((video as any).webkitRequestFullscreen) (video as any).webkitRequestFullscreen();
                else if ((video as any).msRequestFullscreen) (video as any).msRequestFullscreen();
              }
            }}
            className="absolute bottom-4 left-4 bg-[#EA7946] text-white px-3 py-2 rounded-lg shadow-md text-sm"
          >
            Full Screen
          </button>
        </div>
      </section>

      {/* Explore Our Solution Section */}
      <section ref={exploreRef} style={{ backgroundColor: '#EBEBDF', paddingBottom: '6rem' }}>
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
          variants={{ visible: { transition: { staggerChildren: 0.3 } }, hidden: {} }}
        >
          {[
            {
              title: 'Social Media Management',
              description: 'Let us build your voice while you build your business. Complete social media management from content creation to community engagement.',
              icon: Brain,
              path: '/capability-building/social-media-management',
            },
            {
              title: 'Interactive Avatar',
              description: 'Design customizable AI avatars to enhance virtual interactions and presentations.',
              icon: Users,
              path: '/interactive-avatar',
            },
            {
              title: '360 AI Tour',
              description: 'Provide immersive 360° AI-powered virtual tours for your company or products.',
              icon: Mail,
              path: '/360-ai-tour',
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
    </div>
  );
};

export default Homepage;
