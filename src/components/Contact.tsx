import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-650/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-655 font-bold mb-3"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gradient-silver tracking-tight"
          >
            Let's Connect & Collaborate
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-stone-500 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed"
          >
            I am always open to discussing internship roles, software developer positions, and tech community collaborations.
          </motion.p>
        </div>

        {/* 4-Column Grid for Direct Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Email */}
          <motion.a 
            href="mailto:tpajisha@gmail.com"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-card border border-card-border hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-blue-600/80 dark:text-blue-400/80">Email</span>
              </div>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-450 transition-colors">Send an Email</h4>
              <p className="text-xs text-stone-500 dark:text-slate-400 leading-relaxed">Reach out directly via your email client for inquiries.</p>
            </div>
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-card-border/60">
              <span className="text-[11px] font-semibold text-stone-700 dark:text-slate-300 truncate max-w-[130px]">tpajisha@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-450 transition-all" />
            </div>
          </motion.a>

          {/* Card 2: LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com/in/ajisha-tp-931018333/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-card border border-card-border hover:border-[#0a66c2]/40 hover:shadow-lg hover:shadow-[#0a66c2]/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-[#0a66c2] dark:text-sky-400 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#0a66c2]/80 dark:text-sky-400/80">LinkedIn</span>
              </div>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2 group-hover:text-[#0a66c2] dark:group-hover:text-sky-400 transition-colors">LinkedIn Profile</h4>
              <p className="text-xs text-stone-500 dark:text-slate-400 leading-relaxed">Let's connect professionally and build my network.</p>
            </div>
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-card-border/60">
              <span className="text-[11px] font-semibold text-stone-700 dark:text-slate-300">ajisha-tp-931018333</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0a66c2] dark:group-hover:text-sky-400 transition-all" />
            </div>
          </motion.a>

          {/* Card 3: GitHub */}
          <motion.a 
            href="https://github.com/ajishatp"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-card border border-card-border hover:border-slate-800/40 dark:hover:border-slate-400/40 hover:shadow-lg hover:shadow-slate-500/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-stone-50 dark:bg-white/[0.02] border border-card-border text-stone-750 dark:text-stone-300 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-stone-600/80 dark:text-stone-400/80">GitHub</span>
              </div>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">GitHub Repositories</h4>
              <p className="text-xs text-stone-500 dark:text-slate-400 leading-relaxed">Explore my software engineering and web creations.</p>
            </div>
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-card-border/60">
              <span className="text-[11px] font-semibold text-stone-700 dark:text-slate-300">@ajishatp</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-all" />
            </div>
          </motion.a>

          {/* Card 4: Location */}
          <motion.a 
            href="https://www.google.com/maps/search/?api=1&query=Kunnumpuram+Malappuram+District+Kerala"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-card border border-card-border hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 text-red-500 dark:text-red-400 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-red-500/80 dark:text-red-400/80">Location</span>
              </div>
              <h4 className="text-base font-bold text-stone-900 dark:text-white mb-2 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">Current Location</h4>
              <p className="text-xs text-stone-500 dark:text-slate-400 leading-relaxed">Based in Malappuram District, Kerala, India.</p>
            </div>
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-card-border/60">
              <span className="text-[11px] font-semibold text-stone-700 dark:text-slate-300">Kerala, India</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-500 dark:group-hover:text-red-400 transition-all" />
            </div>
          </motion.a>

        </div>

        {/* Quote decoration */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center text-stone-400 dark:text-slate-500 italic text-xs leading-relaxed max-w-md mx-auto border-t border-card-border pt-6"
        >
          "The best way to predict the future is to invent it." — Alan Kay
        </motion.div>

      </div>
    </section>
  );
};
