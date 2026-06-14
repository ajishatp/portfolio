import React from 'react';
import { motion } from 'framer-motion';

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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Soft background glow matching light/dark mode */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/10 dark:bg-purple-600/10 blur-[120px] rounded-full -z-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Name, Taglines, Buttons & Status Pills */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Subheading with horizontal line */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400 shrink-0" />
            <span className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 dark:text-slate-400 font-bold">
              Computer Science Student &bull; GEC Palakkad
            </span>
          </motion.div>

          {/* Large Name Display */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight text-stone-900 dark:text-white mb-6 leading-none"
          >
            AJISHA <span className="text-blue-600 dark:text-blue-400">TP</span>
          </motion.h1>

          {/* Tagline code-styled */}
          <motion.p 
            variants={itemVariants}
            className="font-mono text-sm sm:text-base text-stone-600 dark:text-slate-400 mb-8 flex items-center gap-1.5"
          >
            <span className="text-blue-600 dark:text-blue-400 font-bold">~ /</span> I turn ideas into software
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <button
              onClick={() => handleScrollToSection('#projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 active:scale-98 cursor-pointer"
            >
              View Projects &darr;
            </button>

            <button
              onClick={() => handleScrollToSection('#contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-card-border bg-card-bg hover:bg-stone-100 dark:hover:bg-white/5 text-stone-700 dark:text-slate-200 font-semibold text-sm transition-all active:scale-98 cursor-pointer shadow-sm"
            >
              Get in Touch &nearr;
            </button>
          </motion.div>

          {/* Rounded Pill Bars */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xl"
          >
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-card-border bg-pill-bg shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-stone-700 dark:text-slate-300">4+ Projects Built</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-card-border bg-pill-bg shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-stone-700 dark:text-slate-300">µLearn Coordinator</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-card-border bg-pill-bg shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-stone-700 dark:text-slate-300">4th Year CS</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: IDE Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-2xl glass-card shadow-2xl p-6 overflow-hidden">
            {/* Header controls */}
            <div className="flex items-center justify-between mb-4 border-b border-card-border pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="text-[10px] font-mono text-stone-500 dark:text-slate-500 font-semibold tracking-wider">
                ajisha_profile.ts — VS Code
              </div>
            </div>

            {/* Code Content */}
            <div className="font-mono text-[12px] sm:text-[13px] leading-relaxed text-stone-700 dark:text-slate-300">
              <pre className="whitespace-pre-wrap">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{' '}
                <span className="text-blue-600 dark:text-blue-400">developer</span> = &#123;
                <br />
                &nbsp;&nbsp;name:{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"Ajisha TP"</span>,
                <br />
                &nbsp;&nbsp;role:{' '}
                <span className="text-emerald-600 dark:text-emerald-400">
                  "CS Engineering Student"
                </span>
                ,
                <br />
                &nbsp;&nbsp;skills: [
                <span className="text-emerald-600 dark:text-emerald-400">"React"</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"TS"</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"GenAI"</span>,{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"Python"</span>],
                <br />
                &nbsp;&nbsp;coordinator:{' '}
                <span className="text-blue-600 dark:text-blue-400">true</span>,
                <br />
                &nbsp;&nbsp;seeking:{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"Internships"</span>,
                <br />
                &nbsp;&nbsp;location:{' '}
                <span className="text-emerald-600 dark:text-emerald-400">"Kerala, India"</span>
                <br />
                &#125;;
              </pre>
            </div>

            {/* Glowing accents behind IDE box */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 dark:from-purple-600/10 dark:to-blue-500/15 blur-[60px] rounded-full -z-10" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
