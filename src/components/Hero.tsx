import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  const quotes = [
    "I build real-world applications.",
    "Driven by curiosity, powered by code.",
    "Transforming complex challenges into clean, functional software.",
    "Exploring Artificial Intelligence and Web Technologies."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white"
    >
      {/* Soft background glow matching light/dark mode */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/10 dark:bg-purple-600/10 blur-[120px] rounded-full -z-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center justify-center pt-6">

        {/* Left: Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center w-full order-1 lg:order-1"
        >
          {/* Ambient background glow orb behind the photo for blending */}
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />

          {/* Picture Container - Styled to blend completely with the background on left and right */}
          <div className="relative max-w-[280px] sm:max-w-[320px] aspect-[3/4] w-full rounded-2xl overflow-hidden p-1 transition-all duration-300">
            <img 
              src={profileImg} 
              alt="Ajisha TP" 
              className="w-full h-full object-cover rounded-2xl"
              style={{ 
                mixBlendMode: 'multiply',
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
              }}
            />
          </div>
        </motion.div>

        {/* Right: Text & Info Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full order-2 lg:order-2"
        >
          {/* Large Name Display - Placed at the very top */}
          <motion.h1
            variants={itemVariants}
            className="font-extrabold tracking-tight text-stone-900 mb-4 leading-none text-5xl sm:text-7xl"
          >
            AJISHA <span className="text-blue-600">TP</span>
          </motion.h1>

          {/* Slide-Up Quote Carousel - Moved right under the name */}
          <motion.div 
            variants={itemVariants} 
            className="text-sm sm:text-lg text-stone-500 font-medium mb-6 min-h-[32px] flex items-center justify-center lg:justify-start overflow-hidden w-full select-none"
          >
            <span className="text-blue-600 font-bold mr-2 text-base sm:text-lg">~/</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-stone-850 font-bold text-sm sm:text-base md:text-lg tracking-wide"
              >
                {quotes[currentQuoteIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Subheading with horizontal line / badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-3 mb-8 mt-2 w-full"
          >
            <span className="w-6 h-[2px] bg-blue-600 shrink-0" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 font-bold">
              Computer Science Student &bull; GEC Palakkad
            </span>
            <span className="w-6 h-[2px] bg-blue-600 shrink-0 lg:hidden" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12 w-full"
          >
            <button
              onClick={() => handleScrollToSection('#projects')}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollToSection('#contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-card-border bg-card-bg hover:bg-stone-50 text-stone-700 font-semibold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer shadow-sm"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Rounded Pill Bars with Blue Dots */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-card-border bg-pill-bg hover:bg-stone-50 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-default">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-stone-700">4+ Projects Built</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-card-border bg-pill-bg hover:bg-stone-50 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-default">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-stone-700">3+ Internships Completed</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-card-border bg-pill-bg hover:bg-stone-50 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-default">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-stone-700">µLearn Project Coordinator</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-card-border bg-pill-bg hover:bg-stone-50 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm cursor-default">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-stone-700">4th Year CS</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
