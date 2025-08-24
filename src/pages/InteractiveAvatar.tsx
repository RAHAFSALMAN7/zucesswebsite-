import React from "react";
import { motion } from "framer-motion";

const InteractiveAvatar = () => {
  const features = [
    {
      title: "Personalized Avatars",
      description:
        "Create avatars tailored to your brand or individual style for interactive experiences.",
      icon: "",
    },
    {
      title: "AI-Driven Interactions",
      description:
        "Leverage AI to make your avatars respond intelligently in real-time.",
      icon: "",
    },
    {
      title: "Seamless Integration",
      description:
        "Embed avatars into your website, presentations, or virtual environments easily.",
      icon: "",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#080844] via-[#0a0a55] to-[#080844] text-white pt-24 px-4">
      <div className="max-w-7xl mx-auto flex-1 space-y-24">

        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Interactive Avatar
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Bring your brand to life with AI-powered avatars that engage and interact with your audience in real time.
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#features"
              className="bg-[#EA7946] text-[#080844] font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              Explore Features
            </a>
          </motion.div>
        </section>

        {/* Coming Soon Section */}
        <section className="flex justify-center items-center">
          <div className="w-full max-w-4xl aspect-video rounded-3xl flex items-center justify-center bg-white/10 backdrop-blur-lg border-4 border-[#EBEBDF] shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EA7946]">
              Coming Soon
            </h2>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="grid md:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </section>

      </div>

      {/* CTA Section */}
      <section className="text-center py-16 bg-[#0a0a55] rounded-3xl mt-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to create your avatar?</h2>
          <p className="text-lg text-gray-200">
            Get started today and let our AI-powered interactive avatars enhance your digital presence.
          </p>
          <a
            href="/contact"
            className="mt-4 bg-[#EA7946] text-[#080844] font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
};

export default InteractiveAvatar;
