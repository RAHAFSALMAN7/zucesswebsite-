import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Users, Lightbulb, Code, Zap, Video, Globe, Bot, Brain, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Zap className="w-8 h-8" style={{ color: '#EA7946' }} />,
      title: "AI-Powered Training & Onboarding",
      description: "Deliver dynamic, AI-powered training & onboarding solutions"
    },
    {
      icon: <Video className="w-8 h-8" style={{ color: '#EA7946' }} />,
      title: "Professional Branded Videos",
      description: "Create professional branded videos that reflect your culture and quality"
    },
    {
      icon: <Globe className="w-8 h-8" style={{ color: '#EA7946' }} />,
      title: "Interactive Digital Portals",
      description: "Build interactive digital portals for newsletters, internal updates, or employee onboarding"
    },
    {
      icon: <Bot className="w-8 h-8" style={{ color: '#EA7946' }} />,
      title: "Automated Communications",
      description: "Automate communications through custom avatars, AI assistants, and workflow tools"
    }
  ];

  const teamHighlights = [
    { icon: <Lightbulb className="w-12 h-12" style={{ color: '#EA7946' }} />, title: "AI Enthusiasts", color: "text-zuccess-orange" },
    { icon: <Users className="w-12 h-12" style={{ color: '#EA7946' }} />, title: "Creatives", color: "text-zuccess-orange" },
    { icon: <Code className="w-12 h-12" style={{ color: '#EA7946' }} />, title: "Engineers", color: "text-zuccess-orange" }
  ];

  // === فريقك الأصلي مع الصور والوصف ===
  const teamMembers = [
    { name: 'Mohammad Abu Hammad', image: 'mohammad (1).jpg', description: 'Sales Manager: Leads client acquisition, manages key accounts, and oversees sales strategies to ensure sustainable business growth..' },
    { name: 'Fares Tayar', image: 'فراس.jpeg', description: 'Sales Executive: Supports sales operations by identifying leads, nurturing client relationships, and driving conversions in line with company goals..' },
    { name: 'Sultan Shehadeh', image: 'sultan.jpg', description: 'Media Production ExecutiveProduce AI avatars, scripts, and interactive/animated presentations. Lead all orders requiring PowerPoint or Canva, ensuring professional storytelling and design quality.' },
    { name: 'Lema Qaq', image: 'lema.jpg', description: ' Visual & Brand Identity & SM Management Executive Lead the company’s brand identity and creative direction producing advanced AI-driven designs Manage Rahaf and Shaimaa to ensure productive social media execution high engagement and on-time delivery' },
    { name: 'Rahaf Salman', image: 'rahaf.jpg', description: ' Automation & Web Design Lead Design and implement AI-powered automation for social media, including scheduling, posting, meeting summaries, appointment booking & Collaborate with Lema on creating customer web pages—combinin.' },
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

  const openModal = (member: typeof teamMembers[0]) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-zuccess-light text-zuccess-dark font-sans">
      {/* Header Section */}
      <header className="relative bg-[#080844] text-zuccess-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zuccess-dark/90 to-transparent"></div>
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <span style={{ color: '#EBEBDF' }}>About</span>{' '}
            <span style={{ color: '#EA7946' }}>Us</span>
          </h1>
          <p
            className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
            style={{ color: '#EBEBDF' }}
          >
            At <span style={{ color: '#EA7946', fontWeight: '600' }}>Zuccess</span>, we are a passionate team of
          </p>

          {/* Team Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {teamHighlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className={`transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                <div className="bg-zuccess-light/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-zuccess-light/20 transition-all duration-300">
                  <div className={`${highlight.color} mb-4 flex justify-center animate-bounce-gentle`}>
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#EBEBDF' }}>
                    {highlight.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-bounce-gentle">
            <ChevronDown className="w-8 h-8 mx-auto text-zuccess-orange" />
          </div>
        </div>
      </header>

      {/* Core Belief Section */}
      <section className="py-20 scroll-animate" style={{ backgroundColor: '#EBEBDF' }}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light mb-6" style={{ color: '#080844' }}>
              Driven by one belief:
            </h2>
            <p className="text-4xl md:text-6xl font-bold leading-tight mb-8" style={{ color: '#080844' }}>
              AI isn't just the future — it's your{' '}
              <span style={{ color: '#EA7946', position: 'relative' }}>
                competitive edge
              </span>{' '}
              today.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Team Carousel Section ================= */}
      <section className="py-20 scroll-animate bg-[#EBEBDF]">
        <div className="container mx-auto px-6 md:px-24 text-center">
          {/* Title & Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: '#080844' }}>
              MEET OUR
              <br />
              CREATIVE TEAM
            </h2>
            <p className="text-gray-700 text-lg md:text-xl">
              We are a group of designers, developers, software engineers, and creators shaping digital experiences.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
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

      {/* باقي السكاشن نفسها بدون تغيير */}
      {/* Scaling Your Business Section */}
      <section className="py-20 scroll-animate" style={{ backgroundColor: '#080844' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#EBEBDF' }}>
              Scaling Your Business
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90" style={{ color: '#EBEBDF' }}>
              Whether you're a growing brand or a corporate leader, we bring the intelligence, tools, 
              and innovation to elevate your workflows, communication, and content.
            </p>
          </div>
        </div>
      </section>

      {/* Transforming Your Workplace Section */}
      <section className="py-20 scroll-animate" style={{ backgroundColor: '#EBEBDF' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#080844' }}>
              Transforming Your Workplace
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed" style={{ color: '#080844' }}>
              We help you modernize internal operations, empower your team, and build stronger engagement — 
              all through smart, scalable, AI-powered systems.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 scroll-animate" style={{ backgroundColor: '#EBEBDF' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#080844' }}>
              What We <span style={{ color: '#EA7946' }}>Do</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group p-8 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#EA7946]/20"
                  style={{ background: 'white' }}
                >
                  <div className="mb-6" style={{ color: '#EA7946' }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#080844' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#080844' }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* Behind the Scenes Section */}
<section className="py-20 scroll-animate" style={{ backgroundColor: '#080844' }}>
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#EBEBDF' }}>
      Behind the Scenes
    </h2>
    <p className="text-xl md:text-2xl opacity-80" style={{ color: '#EBEBDF' }}>
        Watch our team in action as we create, innovate, and deliver amazing AI-powered solutions!
    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {/* أول فيديو */}
      <video
        className="rounded-2xl bg-zuccess-light/10 w-full h-48 object-cover"
        src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756027307/WhatsApp_Video_2025-08-20_at_11.26.11_AM_pvjdpf.mp4"
        controls
      />
      {/* ثاني فيديو */}
      <video
        className="rounded-2xl bg-zuccess-light/10 w-full h-48 object-cover"
        src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756027309/WhatsApp_Video_2025-08-20_at_11.26.04_AM_eo46bl.mp4"
        controls
      />
      {/* الفيديو التالت */}
      <video
        className="rounded-2xl bg-zuccess-light/10 w-full h-48 object-cover"
        src="https://res.cloudinary.com/diroi6tnk/video/upload/v1756027311/WhatsApp_Video_2025-08-20_at_11.25.58_AM_xtbckm.mp4"
        controls
      />
    </div>
  </div>
</section>



      {/* Closing Statement */}
      <section className="py-20 bg-gradient-to-br from-zuccess-dark via-blue-900 to-zuccess-dark text-zuccess-light scroll-animate" style={{ color: '#080844' }}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-3xl md:text-5xl font-bold leading-tight mb-8" style={{ color: '#080844' }}>
              We don't just build tech.
            </p>
            <p className="text-2xl md:text-4xl font-light opacity-90" style={{ color: '#080844' }}>
              We embed <span style={{ color: '#EA7946', fontWeight: '600' }}>success</span> — in every process, 
              every message, and every touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zuccess-dark py-12" style={{ color: '#080844' }}>
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#080844' }}>
              Built for <span style={{ color: '#EA7946' }}>visionaries</span>.
            </p>
            <p className="text-xl md:text-2xl font-light mt-2" style={{ color: '#080844' }}>
              Powered by <span className="font-semibold" style={{ color: '#EA7946' }}>Zuccess</span>.
            </p>
          </div>
          <div className="border-t" style={{ borderColor: '#08084433' }} pt-6 mt-8>
            <p className="text-sm opacity-70" style={{ color: '#080844' }}>
              © {new Date().getFullYear()} Zuccess. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
