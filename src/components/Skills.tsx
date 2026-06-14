import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Wrench, Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0-100 percentage
  details: string;
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
      { name: "C", level: 85, details: "Academic foundations, systems programming, memory safety concepts." },
      { name: "C++", level: 80, details: "Object-oriented modeling, template meta-programming, algorithm design." },
      { name: "Java", level: 75, details: "Application design patterns, threads management, MVC paradigms." },
      { name: "Python", level: 85, details: "AI prototyping, scripting, automation scripts, Pandas/Numpy data analytics." },
      { name: "JavaScript", level: 90, details: "Modern ES6+ syntax, asynchronous event loop, browser DOM interaction." },
    ]
  },
  {
    id: "webdev",
    label: "Web Dev",
    icon: <Globe className="w-4 h-4" />,
    skills: [
      { name: "HTML & CSS", level: 95, details: "Semantic structure, responsive layouts, custom layouts using CSS variables." },
      { name: "React", level: 85, details: "Hook systems, state management, complex components lifecycles." },
      { name: "TypeScript", level: 80, details: "Type safety, static interfaces, building predictable code architectures." },
      { name: "Bootstrap", level: 85, details: "Responsive layouts, utility classes, and custom components design." },
      { name: "Flutter", level: 75, details: "Cross-platform mobile application development and custom widgets design." },
      { name: "Flask", level: 80, details: "Minimalist Python backend services, API routing, and web application logic." }
    ]
  },
  {
    id: "tools",
    label: "Tools",
    icon: <Wrench className="w-4 h-4" />,
    skills: [
      { name: "Git & GitHub", level: 85, details: "Version controls, branches strategies, merge reviews, workflows automation." },
      { name: "VS Code", level: 95, details: "Environment setup, extensions settings, remote development, debugging tools." },
      { name: "Figma", level: 80, details: "User interface design, wireframing, and interactive prototyping." },
      { name: "Notion", level: 85, details: "Project coordination, timeline tracking, community documentation." },
    ]
  },
  {
    id: "ai",
    label: "AI & Data",
    icon: <Sparkles className="w-4 h-4" />,
    skills: [
      { name: "Generative AI", level: 85, details: "Prompt design, content synthesis, API orchestrations." },
      { name: "Prompt Engineering", level: 90, details: "Few-shot prompting, chain-of-thought instructions, system guardrails." },
      { name: "RAG Fundamentals", level: 75, details: "Vector search architectures, embeddings pipelines, knowledge retrievals." },
      { name: "LLM Applications", level: 75, details: "Integrating language capabilities inside React/Node applications." },
    ]
  }
];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find(cat => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3"
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
                    isActive ? 'text-blue-600 dark:text-white font-bold' : 'text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-blue-600/10 dark:bg-white/[0.06] border border-blue-600/20 dark:border-white/[0.08] rounded-full"
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
                  className="p-5 rounded-2xl glass-card relative glow-border flex flex-col justify-between"
                >
                  <div>
                    {/* Title & Level Percentage */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-stone-900 dark:text-white tracking-wide">{skill.name}</span>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-stone-100 dark:bg-white/[0.04] rounded-full overflow-hidden mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.05 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Skill Context description */}
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-slate-400 leading-relaxed">
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
