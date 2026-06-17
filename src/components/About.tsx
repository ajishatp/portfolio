import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Palette, Shield } from 'lucide-react';

export const About: React.FC = () => {
  const interests = [
    { 
      icon: <Code className="w-5 h-5 text-blue-500" />, 
      title: "Web Development", 
      desc: "Building responsive, modern, and high-performance web applications using React, TypeScript, and Tailwind CSS." 
    },
    { 
      icon: <Brain className="w-5 h-5 text-purple-500" />, 
      title: "Machine Learning", 
      desc: "Exploring data modeling, neural networks, and integrating intelligent algorithms into practical applications." 
    },
    { 
      icon: <Palette className="w-5 h-5 text-indigo-500" />, 
      title: "UI/UX Design", 
      desc: "Designing clean, aesthetic, and user-centric interfaces with a strong focus on accessibility and design systems." 
    },
    { 
      icon: <Shield className="w-5 h-5 text-emerald-500" />, 
      title: "Cybersecurity", 
      desc: "Understanding core security protocols, network defenses, cryptography, and writing secure, defensive code." 
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
            className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3"
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
            Turning ideas into functional, clean code.
          </motion.h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-stone-600 text-sm sm:text-base leading-relaxed"
          >
            <p>
              I'm a passionate <strong className="text-stone-950">fourth-year Computer Science and Engineering student</strong> at GEC Palakkad, with a strong interest in web development, UI/UX design, and creating meaningful digital solutions. I enjoy transforming ideas into functional, user-friendly applications, combining creative design with practical coding skills.
            </p>
            <p>
              My experience includes working on academic and personal projects that have strengthened my problem-solving abilities and technical knowledge. Beyond academics, I have gained hands-on exposure through internships and leadership roles, including experiences at <strong className="text-stone-950">CDAC</strong> (Cybersecurity), <strong className="text-stone-950">PaceLab</strong> (IoT), <strong className="text-stone-950">Southern Railway</strong> (Digital Workflow &amp; Data Automation), and as a <strong className="text-stone-950">µLearn Project Coordinator</strong>.
            </p>
            <p>
              I am always eager to learn new technologies, collaborate with others, and contribute to projects that create a positive impact while continuing to grow as a developer and designer.
            </p>
          </motion.div>

          {/* Right: Technical Interests & Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-5"
          >
            {interests.map((interest, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl glass-card flex gap-4 items-start border border-card-border shadow-sm hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="p-3 rounded-xl bg-stone-50 border border-card-border shrink-0">
                  {interest.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-stone-900 tracking-wide">{interest.title}</h4>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">{interest.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
