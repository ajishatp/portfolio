import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const handleDownloadCV = () => {
    // Generate a beautiful mock CV text file download
    const cvContent = `AJISHA TP - RESUME
Role: Computer Science Engineering Student | Aspiring Software Developer

CONTACT:
Email: ajisha.tp@example.com
LinkedIn: linkedin.com/in/ajishatp
GitHub: github.com/ajishatp

SUMMARY:
Motivated Computer Science Engineering student with a passion for web development and artificial intelligence. Experienced coordinator with leadership skills gained as a µLearn Project Coordinator Intern. Seeking to contribute my coding and process automation abilities in a dynamic software engineering role.

EDUCATION:
B.Tech in Computer Science Engineering (Pursuing)

EXPERIENCE:
1. µLearn Project Coordinator Intern
   - Community coordination, events planning, documentation and reporting.
2. Palakkad Railway Internship
   - Workflow digitalization concepts, data management and process automation.

SKILLS:
- Languages: C, C++, Java, Python, JavaScript
- Web Dev: HTML, CSS, React, TypeScript, Tailwind CSS
- Tools: Git, GitHub, VS Code, Postman, Notion
- AI/Data: Generative AI, Prompt Engineering, RAG, LLM Apps`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ajisha_TP_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Headline & Bio Info */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Availability Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold tracking-wide mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Internships & Grad Roles
          </motion.div>

          {/* Name & Greeting */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-bold tracking-tight mb-4"
          >
            Hi, I'm <br />
            <span className="text-gradient-blue-purple font-extrabold">Ajisha TP</span>
          </motion.h1>

          {/* Roles Tagline */}
          <motion.h2 
            variants={itemVariants}
            className="text-lg sm:text-2xl font-bold text-slate-300 tracking-tight mb-6"
          >
            Computer Science Engineering Student &amp; Software Developer
          </motion.h2>

          {/* Intro Description */}
          <motion.p 
            variants={itemVariants}
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8"
          >
            Web development and AI enthusiast. Passionate about engineering high-quality digital products, automating manual tasks, and leading student communities. As a µLearn Coordinator Intern, I bridge the gap between people and technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <button
              onClick={() => handleScrollToSection('#projects')}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/15 hover:shadow-purple-500/25 active:scale-98"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.06] text-slate-200 font-semibold text-sm transition-all active:scale-98"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              Download Resume
            </button>

            <button
              onClick={() => handleScrollToSection('#contact')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-transparent hover:border-white/[0.08] text-slate-400 hover:text-slate-200 text-sm font-semibold transition-all"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Profiles Quick links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 text-slate-500 border-t border-white/[0.06] pt-6 max-w-md"
          >
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Connect:</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:ajisha.tp@example.com" className="p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Premium Interactive IDE Code Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-2xl glass-card border border-white/[0.08] shadow-2xl p-6 overflow-hidden">
            {/* Window controls decoration */}
            <div className="flex items-center justify-between mb-4 border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider">
                ajisha_profile.ts — VS Code
              </div>
            </div>

            {/* Code editor content */}
            <div className="font-mono text-[12px] sm:text-[13px] leading-relaxed text-slate-300">
              <pre className="whitespace-pre-wrap">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">developer</span> = &#123;
                <br />
                &nbsp;&nbsp;name:{' '}
                <span className="text-emerald-400">"Ajisha TP"</span>,
                <br />
                &nbsp;&nbsp;role:{' '}
                <span className="text-emerald-400">
                  "CS Engineering Student"
                </span>
                ,
                <br />
                &nbsp;&nbsp;skills: [
                <span className="text-emerald-400">"React"</span>,{' '}
                <span className="text-emerald-400">"TS"</span>,{' '}
                <span className="text-emerald-400">"GenAI"</span>,{' '}
                <span className="text-emerald-400">"Python"</span>],
                <br />
                &nbsp;&nbsp;coordinator:{' '}
                <span className="text-blue-400">true</span>,
                <br />
                &nbsp;&nbsp;seeking:{' '}
                <span className="text-emerald-400">"Internships"</span>,
                <br />
                &nbsp;&nbsp;location:{' '}
                <span className="text-emerald-400">"Kerala, India"</span>
                <br />
                &#125;;
              </pre>
            </div>

            {/* Glowing accents behind IDE box */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tr from-purple-600/10 to-blue-500/15 blur-[60px] rounded-full -z-10" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
