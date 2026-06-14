import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Eye } from 'lucide-react';

interface Project {
  title: string;
  category: 'web' | 'ai' | 'systems';
  desc: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projectsData: Project[] = [
  {
    title: "Blood Bank Tracking System",
    category: "web",
    desc: "Efficient blood inventory management, donor information management, and tracking of nearest available blood banks.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/ajishatp/blood-bank",
    liveUrl: "https://ajishatp.github.io/error/"
  },
  {
    title: "Solar Explorer Application",
    category: "systems",
    desc: "Explore the solar system interactively. Performs real-time calculations of travel times between planets with detailed celestial body profiles and stunning visuals.",
    tags: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/ajishatp/solar-explorer",
    liveUrl: "https://ajishatp.github.io/error/"
  },
  {
    title: "StyleSense",
    category: "ai",
    desc: "Explore the world of fashion and beauty interactively with StyleSense AI. Get real-time outfit and makeup suggestions based on face shape, body type, and skin tone.",
    tags: ["Python", "OpenCV", "MediaPipe", "Generative AI", "React"],
    githubUrl: "https://github.com/ajishatp/stylesense",
    liveUrl: "https://alkasumesh.github.io/StyleSense/"
  },
  {
    title: "XchangeIt",
    category: "web",
    desc: "A smarter way to Buy, Rent, and Sell inside our campus. Designed exclusively for students, XchangeIt connects campus members in real time to make transactions safe and simple.",
    tags: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    githubUrl: "https://github.com/ajishatp/xchangeit",
    liveUrl: "https://xchangeit-finally.onrender.com/"
  }
];

const categoryTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'ai', label: 'AI & Data' },
  { id: 'systems', label: 'Systems & OpenCV' },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3"
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

        {/* Filter Selection Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-1.5 p-1 rounded-full border border-card-border bg-card-bg/50">
            {categoryTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-300 ${
                    isActive ? 'text-blue-600 dark:text-white font-bold' : 'text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-blue-600/10 dark:bg-white/[0.06] border border-blue-600/20 dark:border-white/[0.06] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group p-6 rounded-2xl glass-card relative overflow-hidden glow-border flex flex-col justify-between"
              >
                <div>
                  {/* Decorative icon based on category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-white/[0.03] border border-card-border text-purple-600 dark:text-purple-400">
                      {project.category === 'ai' ? <Database className="w-5 h-5" /> : <Code className="w-5 h-5" />}
                    </div>
                    
                    {/* Live indicator decoration */}
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-stone-900 dark:text-white tracking-wide mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-stone-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] sm:text-xs font-semibold text-stone-700 dark:text-slate-300 bg-stone-50 dark:bg-white/[0.04] border border-card-border px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 border-t border-card-border pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-card-border hover:bg-stone-100 dark:hover:bg-white/[0.06] bg-card-bg text-xs font-semibold text-stone-700 dark:text-slate-300 transition-all hover:text-stone-900 dark:hover:text-white"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      Code
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-sm"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
