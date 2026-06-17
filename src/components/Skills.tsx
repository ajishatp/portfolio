import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Globe, Wrench, Database, Terminal, Cpu, BookOpen, 
  Layout, Layers, Shield, Columns, Smartphone, Server, 
  Code, Palette, Clipboard 
} from 'lucide-react';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Skill {
  name: string;
  level: number; // 0-100 percentage
  details: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    icon: <Code2 className="w-4 h-4" />,
    skills: [
      { name: "C", level: 85, details: "Academic foundations, systems programming, memory safety concepts.", icon: <Terminal className="w-4.5 h-4.5 text-amber-600" /> },
      { name: "C++", level: 80, details: "Object-oriented modeling, template meta-programming, algorithm design.", icon: <Code2 className="w-4.5 h-4.5 text-blue-600" /> },
      { name: "Java", level: 75, details: "Application design patterns, threads management, MVC paradigms.", icon: <Cpu className="w-4.5 h-4.5 text-red-500" /> },
      { name: "Python", level: 85, details: "AI prototyping, scripting, automation scripts, Pandas/Numpy data analytics.", icon: <BookOpen className="w-4.5 h-4.5 text-emerald-600" /> },
      { name: "JavaScript", level: 80, details: "Modern ES6+ syntax, asynchronous event loop, browser DOM interaction.", icon: <Globe className="w-4.5 h-4.5 text-yellow-500" /> }
    ]
  },
  {
    id: "webdev",
    label: "Web Dev",
    icon: <Globe className="w-4 h-4" />,
    skills: [
      { name: "HTML & CSS", level: 95, details: "Semantic structure, responsive layouts, custom layouts using CSS variables.", icon: <Layout className="w-4.5 h-4.5 text-orange-500" /> },
      { name: "React", level: 85, details: "Hook systems, state management, complex components lifecycles.", icon: <Layers className="w-4.5 h-4.5 text-sky-400" /> },
      { name: "TypeScript", level: 80, details: "Type safety, static interfaces, building predictable code architectures.", icon: <Shield className="w-4.5 h-4.5 text-blue-500" /> },
      { name: "Bootstrap", level: 85, details: "Responsive layouts, utility classes, and custom components design.", icon: <Columns className="w-4.5 h-4.5 text-purple-600" /> },
      { name: "Flutter", level: 75, details: "Cross-platform mobile application development and custom widgets design.", icon: <Smartphone className="w-4.5 h-4.5 text-sky-500" /> },
      { name: "Flask", level: 80, details: "Minimalist Python backend services, API routing, and web application logic.", icon: <Server className="w-4.5 h-4.5 text-emerald-700" /> }
    ]
  },
  {
    id: "database",
    label: "Data & Database",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "MySQL", level: 80, details: "Relational database design, query optimization, schema migrations, and indexing workflows.", icon: <Database className="w-4.5 h-4.5 text-sky-600" /> }
    ]
  },
  {
    id: "tools",
    label: "Tools",
    icon: <Wrench className="w-4 h-4" />,
    skills: [
      { name: "Git & GitHub", level: 85, details: "Version controls, branches strategies, merge reviews, workflows automation.", icon: <GithubIcon className="w-4.5 h-4.5 text-orange-600" /> },
      { name: "VS Code", level: 95, details: "Environment setup, extensions settings, remote development, debugging tools.", icon: <Code className="w-4.5 h-4.5 text-blue-500" /> },
      { name: "Figma", level: 80, details: "User interface design, wireframing, and interactive prototyping.", icon: <Palette className="w-4.5 h-4.5 text-pink-500" /> },
      { name: "Notion", level: 85, details: "Project coordination, timeline tracking, community documentation.", icon: <Clipboard className="w-4.5 h-4.5 text-stone-700" /> }
    ]
  }
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find(cat => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-stone-200/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gradient-silver tracking-tight"
          >
            Technical Skillset
          </motion.h3>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-1.5 p-1 rounded-full border border-card-border bg-card-bg/50">
            {skillCategories.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-300 ${
                    isActive ? 'text-blue-600 font-bold' : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-blue-600/10 border border-blue-600/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {category.icon}
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {activeCategory.skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="p-5 rounded-2xl glass-card relative flex flex-col justify-between border border-card-border shadow-sm"
                >
                  <div>
                    {/* Title & Level Percentage */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <span className="shrink-0 flex items-center justify-center">{skill.icon}</span>}
                        <span className="text-sm font-bold text-stone-900 tracking-wide">{skill.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-stone-150 rounded-full overflow-hidden mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.05 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Skill Context description */}
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    {skill.details}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
