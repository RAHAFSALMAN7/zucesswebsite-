import React from 'react';
import { motion } from 'framer-motion';

const DynamicBackground = () => {
  // Generate floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  // Generate gradient orbs
  const orbs = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: Math.random() * 400 + 300,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, #080844 0%, #1a1a6b 25%, #EBEBDF 50%, #EA7946 75%, #080844 100%)',
            'linear-gradient(135deg, #1a1a6b 0%, #080844 25%, #EA7946 50%, #EBEBDF 75%, #1a1a6b 100%)',
            'linear-gradient(135deg, #080844 0%, #EA7946 25%, #EBEBDF 50%, #1a1a6b 75%, #080844 100%)',
            'linear-gradient(135deg, #080844 0%, #1a1a6b 25%, #EBEBDF 50%, #EA7946 75%, #080844 100%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Large floating orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.initialX}%`,
            top: `${orb.initialY}%`,
            background: `radial-gradient(circle, 
              ${orb.id % 2 === 0 ? 'rgba(234, 121, 70, 0.4)' : 'rgba(8, 8, 68, 0.4)'} 0%, 
              transparent 70%)`
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.2, 0.4, 0.1, 0.2]
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* Subtle wave animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 opacity-30"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(234, 121, 70, 0.2) 100%)'
        }}
        animate={{
          transform: [
            'translateY(0px) scaleY(1)',
            'translateY(-10px) scaleY(1.1)',
            'translateY(0px) scaleY(1)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(8,8,68,0.3) 70%)'
        }}
      />
    </div>
  );
};

export default DynamicBackground;