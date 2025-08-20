import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Brain, Users, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Homepage = () => {
  const teamMembers = [
    { name: 'Mohammad Abu Hammad', image: 'mohammad.jpg', description: 'Sales Manager: Leads client acquisition, manages key accounts, and oversees sales strategies to ensure sustainable business growth..' },
    { name: 'Fares Tayar', image: 'فراس.jpeg', description: 'Sales Executive: Supports sales operations by identifying leads, nurturing client relationships, and driving conversions in line with company goals..' },
    { name: 'Sultan Shehadeh', image: 'sultan.jpg', description: 'Media Production ExecutiveProduce AI avatars, scripts, and interactive/animated presentations. Lead all orders requiring PowerPoint or Canva, ensuring professional storytelling and design quality.' },
    { name: 'Lema Qaq', image: ' lema.jpg', description: ' Visual & Brand Identity & SM Management Executive Lead the company’s brand identity and creative direction producing advanced AI-driven designs Manage Rahaf and Shaimaa to ensure productive social media execution high engagement and on-time delivery' },
    { name: 'Rahaf Salman', image: ' rahaf.jpg', description: ' Automation & Web Design Lead Design and implement AI-powered automation for social media, including scheduling, posting, meeting summaries, appointment booking & Collaborate with Lema on creating customer web pages—combinin.' },
    { name: 'Shimaa Ghazal', image: 'shimaa (2).jpg', description: ' Social Media & Content CreatorSocial media post designer , Optimize LinkedIn pages, lead and manage Meta (Facebook/Instagram) pages, publish consistently, grow targeted followers, and run outreach via LinkedIn messages/email.' },
  ];

  const cardsToShow = 4;
  const cardWidth = 200;
  const cardGap = 24;
  const cardFullWidth = cardWidth + cardGap;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const speed = 1;
    const totalWidth = teamMembers.length * cardFullWidth;

    const step = () => {
      scrollPosition += speed;
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      container.style.transform = `translateX(${-scrollPosition}px)`;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [teamMembers.length, cardFullWidth]);

  const extendedTeamMembers = [...teamMembers, ...teamMembers];

  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<null | typeof teamMembers[0]>(null);

  const exploreRef = useRef<HTMLDivElement>(null);
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

  const openModal = (member: typeof teamMembers[0]) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  return (
    <div className="w-full">
     {/* Section 1 - Hero */}
<section className="relative w-full h-[90vh] flex flex-col justify-center items-start text-left px-6 md:px-24 overflow-hidden">
  {/* Background Videos */}
  <div className="absolute inset-0 w-full h-full">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="https://res.cloudinary.com/diroi6tnk/video/upload/v1755501406/LINKEDIN_w8zwl9.mp4" type="video/mp4" />
    </video>

    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-0"
    >
      <source src="https://res.cloudinary.com/diroi6tnk/video/upload/v1755690226/automation_g1jicXoL_1_qfkmvq.mp4" type="video/mp4" />
    </video>

    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-0"
    >
      <source src="https://res.cloudinary.com/your_cloud/video/upload/vXXXXXXXX/video3.mp4" type="video/mp4" />
    </video>
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

  {/* Content */}
  <div className="relative z-10 py-36">
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
      className="flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <button className="bg-[#EBEBDF] text-[#080844] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
        Learn More
      </button>
      <button className="border-2 border-[#EBEBDF] text-[#EBEBDF] px-6 py-3 rounded-lg font-semibold hover:bg-[#EBEBDF] hover:text-[#080844] transition">
        Contact Us
      </button>
    </motion.div>
  </div>
</section>


      {/* Section 2 - Intro Video (About Company) */}
      <section
        className="flex flex-col items-center justify-center px-6 md:px-24 py-20"
        style={{ backgroundColor: '#EBEBDF', color: '#080844' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Get to Know Us
        </h2>
        <p className="max-w-2xl text-center mb-10 text-lg text-gray-700">
          Discover who we are, our mission, and how we bring smart ideas into smarter systems.
        </p>

        <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-[#080844]">
          <video
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/diroi6tnk/video/upload/v1755689178/all-sound-effects_3y8VGLZK_mftv2q.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* Section 2 - Meet Our Team */}
      <section
        className="flex flex-row justify-start items-start text-left px-6 md:px-24 py-20"
        style={{ backgroundColor: '#EBEBDF', color: '#080844' }}
      >
        <div className="max-w-7xl w-full flex gap-6 items-center overflow-hidden">
          <div className="flex flex-col justify-start" style={{ minWidth: '280px' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
              MEET OUR
              <br />
              CREATIVE TEAM
            </h2>
            <p className="text-gray-700 max-w-xs">
              We are a group of designers, developers, software engineers, and creators shaping digital experiences.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative flex-1 overflow-hidden flex flex-col">
            <div
              ref={containerRef}
              className="flex"
              style={{
                width: `${extendedTeamMembers.length * cardFullWidth}px`,
                willChange: 'transform',
              }}
            >
              {extendedTeamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center border-2 border-[#080844] bg-white rounded-lg p-4 cursor-pointer"
                  style={{
                    flex: '0 0 auto',
                    width: `${cardWidth}px`,
                    height: '200px',
                    marginRight: `${cardGap}px`,
                  }}
                  onClick={() => openModal(member)}
                >
                  <div className="h-full w-full flex items-center justify-center overflow-hidden rounded-lg">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover h-full w-full"
                      />
                    ) : (
                      <span className="text-[#080844] font-semibold text-center">{member.name}</span>
                    )}
                  </div>
                  <p className="mt-2 font-semibold text-[#080844] text-center">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="flex flex-col items-center">
              {selectedMember.image ? (
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-40 h-40 rounded-full object-cover mb-4"
                />
              ) : (
                <div className="w-40 h-40 flex items-center justify-center rounded-full bg-[#080844] text-[#EBEBDF] font-bold text-4xl mb-4">
                  {selectedMember.name.charAt(0)}
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-center text-[#080844]">{selectedMember.name}</h3>
              <p className="text-center text-gray-700">
                {selectedMember.description || 'No description available.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section 3 - Explore Our Solution */}
      <section
        ref={exploreRef}
        style={{ backgroundColor: '#EBEBDF', paddingTop: 0 }}
      >
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
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
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
          }].map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-[#EBEBDF] rounded-3xl border-2 border-[#080844] p-6 shadow-md min-h-[400px] w-[360px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="w-16 h-16 bg-[#EA7946] rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-[#080844] mb-3 text-center">{card.title}</h3>
                <p className="text-center text-[#333] mb-6 text-lg">{card.description}</p>
                <a
                  href={card.path}
                  className="mt-auto bg-[#EA7946] text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition"
                >
                  Learn More
                </a>
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
                src="/Image 2025-08-12 at 2.17.05 PM.jpg"
                alt="Left Visual"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-8 text-white text-center">
                <p className="text-xl leading-relaxed mb-6">
                  <strong className="font-extrabold block mb-2">
                    Ready to 
                    Transform Your 
                    Business?
                  </strong>
                  Join the future of intelligent solutions and unlock your organization's full potential.
                </p>
                <button className="bg-[#EA7946] text-[#080844] font-extrabold px-6 py-3 rounded-none shadow-md hover:opacity-90 transition-all duration-200">
                  Let's Empower Your Brand
                </button>
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
                src="/Image 2025-08-12 at 2.17.05 PM.jpg"
                alt="Right Visual"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-8 text-[#080844] text-center">
                <button className="bg-[#F9F5EC] font-extrabold px-6 py-3 rounded-none shadow-md hover:opacity-90 transition-all duration-200 mb-6">
                  Let’s Build Together
                </button>
                <p className="text-white max-w-xs mx-auto">
                  Step into a new era of smart strategies that drive measurable results for your business.
                </p>
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
            <button className="bg-[#EA7946] text-[#080844] font-extrabold px-6 py-3 rounded-none shadow-md hover:opacity-90 transition-all duration-200">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
