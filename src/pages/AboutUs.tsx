import React, { useEffect, useState } from 'react';
import { ChevronDown, Users, Lightbulb, Code, Zap, Video, Globe, Bot } from 'lucide-react';

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
          <span 
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '4px',
              backgroundColor: 'rgba(234, 121, 70, 0.3)',
              transformOrigin: 'left',
              transform: 'scaleX(0)',
              transition: 'transform 0.5s',
            }}
            className="group-hover:scale-x-100"
          />
        </span>{' '}
        today.
      </p>
    </div>
  </div>
</section>


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
    
    <div className="border-t" style={{ borderColor: '#08084433' /* light transparent dark blue */ }} pt-6 mt-8>
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
