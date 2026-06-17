import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gradient-silver tracking-tight mb-4"
          >
            Let's Connect
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 dark:text-slate-400 text-xs sm:text-sm max-w-md mx-auto"
          >
            Feel free to connect with me through any of the channels below.
          </motion.p>
        </div>

        {/* Simple & Professional Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          {/* Email Card */}
          <motion.a 
            href="mailto:tpajisha@gmail.com"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-card-border hover:border-blue-400/50 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Email</span>
              <span className="text-xs sm:text-sm font-semibold text-stone-850 dark:text-slate-200 truncate">tpajisha@gmail.com</span>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a 
            href="https://www.linkedin.com/in/ajisha-tp-931018333?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-card-border hover:border-[#0a66c2]/50 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-[#0a66c2] dark:text-sky-400 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">LinkedIn</span>
              <span className="text-xs sm:text-sm font-semibold text-stone-850 dark:text-slate-200 truncate">Ajisha TP</span>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a 
            href="https://github.com/ajishatp"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-card-border hover:border-stone-500/50 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-stone-50 dark:bg-white/[0.02] border border-card-border text-stone-700 dark:text-stone-300 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">GitHub</span>
              <span className="text-xs sm:text-sm font-semibold text-stone-855 dark:text-slate-200 truncate">ajishatp</span>
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.a 
            href="https://www.google.com/maps/search/?api=1&query=Kunnumpuram+Malappuram+District+Kerala"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-card-border hover:border-red-400/50 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
          >
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 text-red-500 dark:text-red-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Location</span>
              <span className="text-xs sm:text-sm font-semibold text-stone-850 dark:text-slate-200 truncate">Kerala, India</span>
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
};
