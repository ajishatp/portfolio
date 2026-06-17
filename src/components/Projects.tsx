import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Brain, Layers, ExternalLink, Shield } from 'lucide-react';

interface Project {
  title: string;
  category: 'web' | 'ai' | 'systems';
  desc: string;
  tags: string[];
  liveUrl: string;
  icon: React.ReactNode;
  iconBgClass: string;
  noLink?: boolean;
}

const projectsData: Project[] = [
  {
    title: "Blood Bank Tracking System",
    category: "web",
    desc: "Designed a secure web portal for real-time blood inventory tracking, donor coordination, and nearest hospital mapping.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://ajishatp.github.io/error/",
    icon: <Code className="w-5 h-5 text-blue-600" />,
    iconBgClass: "bg-blue-50 border-blue-150"
  },
  {
    title: "StyleSense",
    category: "ai",
    desc: "Built an AI beauty application providing personalized outfit and cosmetic styling recommendations based on user physical metrics.",
    tags: ["Python", "OpenCV", "MediaPipe", "Generative AI", "React"],
    liveUrl: "https://alkasumesh.github.io/StyleSense/",
    icon: <Brain className="w-5 h-5 text-emerald-600" />,
    iconBgClass: "bg-emerald-50 border-emerald-150"
  },
  {
    title: "Ransomware Simulator & Defense Flow",
    category: "systems",
    desc: "Developed a ransomware simulator to study threat propagation, encryption algorithms, and mock security response workflows during my C-DAC internship.",
    tags: ["Python", "Cryptography", "Security Analytics", "Defensive Security"],
    liveUrl: "#",
    icon: <Shield className="w-5 h-5 text-red-600" />,
    iconBgClass: "bg-red-50 border-red-150",
    noLink: true
  },
  {
    title: "Solar Explorer Application",
    category: "systems",
    desc: "Developed an interactive 3D solar explorer calculating real-time planet travel timelines and detailed celestial metrics.",
    tags: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ajishatp.github.io/Nasa-space-Hackathon-2024/",
    icon: <Globe className="w-5 h-5 text-purple-600" />,
    iconBgClass: "bg-purple-50 border-purple-150"
  },
  {
    title: "XchangeIt",
    category: "web",
    desc: "Created a secure, campus-wide marketplace platform enabling students to buy, sell, and rent items seamlessly in real time.",
    tags: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    liveUrl: "https://xchangeit-finally.onrender.com/",
    icon: <Layers className="w-5 h-5 text-amber-600" />,
    iconBgClass: "bg-amber-50 border-amber-150"
  }
];

export const Projects: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3"
          >
            My Creations
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gradient-silver tracking-tight"
          >
            Featured Projects
          </motion.h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setActiveIdx(isActive ? null : idx)}
                className={`group p-6 rounded-2xl glass-card relative overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer select-none ${
                  isActive 
                    ? 'border-blue-500 bg-blue-50/20 shadow-lg shadow-blue-500/10 scale-[1.01] ring-1 ring-blue-500/10' 
                    : 'border-card-border shadow-sm hover:border-blue-300/60 hover:-translate-y-0.5 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Decorative icon based on project */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${project.iconBgClass}`}>
                      {project.icon}
                    </div>
                    
                    {/* Live indicator decoration */}
                    <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      project.noLink
                        ? 'bg-stone-300'
                        : isActive
                          ? 'bg-emerald-500 scale-125 animate-ping'
                          : 'bg-blue-600 animate-pulse'
                    }`} />
                  </div>

                  {/* Title */}
                  <h4 className={`text-lg font-bold tracking-wide mb-2 transition-colors ${
                    isActive ? 'text-blue-600' : 'text-stone-900 group-hover:text-blue-600'
                  }`}>
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] sm:text-xs font-semibold text-stone-700 bg-stone-50 border border-card-border px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center border-t border-card-border pt-4">
                    {project.noLink ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600/40 text-white/70 text-xs font-semibold cursor-default select-none shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4 opacity-70" />
                        Live Demo
                      </button>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-sm active:scale-98"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
