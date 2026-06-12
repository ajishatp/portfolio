import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { 
      icon: <BookOpen className="w-5 h-5 text-blue-400" />, 
      title: "Academic Background", 
      desc: "B.Tech Computer Science Engineering student focused on building technical solutions." 
    },
    { 
      icon: <Cpu className="w-5 h-5 text-purple-400" />, 
      title: "Core Passions", 
      desc: "Building intuitive web interfaces and exploring AI integrations (GenAI & LLMs)." 
    },
    { 
      icon: <Target className="w-5 h-5 text-indigo-400" />, 
      title: "Career Goals", 
      desc: "To work in high-impact product engineering roles at top tech organizations." 
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3"
          >
            About Me
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gradient-silver tracking-tight"
          >
            Driven by curiosity, powered by code.
          </motion.h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Bio Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            <p>
              I am a passionate <strong className="text-white">Computer Science Engineering student</strong> who loves bridging creative user experience designs with technical engineering backend architectures. My journey is centered around building modern software applications that solve tangible problems.
            </p>
            <p>
              Currently, my primary focus lies in <strong className="text-white">AI integration and modern Web Development</strong>. I spend a lot of my time tinkering with React, TypeScript, and Tailwind CSS, and exploring generative AI concepts like Prompt Engineering, Retrieval-Augmented Generation (RAG), and Large Language Model (LLM) workflows.
            </p>
            <p>
              In addition to writing code, I have a deep passion for community orchestration. As a <strong className="text-white">µLearn Project Coordinator Intern</strong>, I guide peers, coordinate student tech communities, and manage events. I thrive in collaborative environments where communication and technical expertise meet.
            </p>

            {/* Grid of micro cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] flex flex-col gap-2">
                <span className="text-xs font-semibold text-slate-500 uppercase">Focus</span>
                <span className="text-sm font-bold text-white">Full-Stack &amp; AI</span>
              </div>
              <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] flex flex-col gap-2">
                <span className="text-xs font-semibold text-slate-500 uppercase">Leadership</span>
                <span className="text-sm font-bold text-white">Community Lead</span>
              </div>
              <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] flex flex-col gap-2">
                <span className="text-xs font-semibold text-slate-500 uppercase">Location</span>
                <span className="text-sm font-bold text-white">Kerala, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Academic & Core Strengths Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl glass-card flex gap-4 items-start glow-border"
              >
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-white tracking-wide">{stat.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
