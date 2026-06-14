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
      desc: "Building modern web applications, exploring AI technologies, and solving real-world problems through technology." 
    },
    { 
      icon: <Target className="w-5 h-5 text-indigo-400" />, 
      title: "Career Goals", 
      desc: "Aspiring Software Engineer seeking opportunities to develop scalable products and meaningful digital experiences." 
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
            className="lg:col-span-7 space-y-6 text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            <p>
              I am a <strong className="text-stone-950 dark:text-white">Computer Science Engineering student</strong> passionate about software development, AI, and modern web technologies. Currently serving as a <strong className="text-stone-950 dark:text-white">µLearn Project Coordinator Intern</strong>, with interests in building impactful digital solutions, problem-solving, and continuous learning.
            </p>
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
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-white/[0.04] border border-card-border shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white tracking-wide">{stat.title}</h4>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-slate-400 leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
