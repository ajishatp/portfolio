import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]">
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
            className="text-3xl sm:text-4xl font-extrabold text-gradient-silver tracking-tight"
          >
            Let's Start a Conversation
          </motion.h3>
        </div>

        {/* 4-Column Grid for Direct Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Email */}
          <motion.a 
            href="mailto:tpajisha@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex flex-col justify-between p-6 rounded-2xl glass-card border border-card-border hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-bold text-blue-500 tracking-wider">Email</span>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-bold text-stone-900 dark:text-white mb-1">Send an Email</h4>
              <p className="text-xs text-stone-500 dark:text-slate-400 font-semibold break-all">tpajisha@gmail.com</p>
            </div>
          </motion.a>

          {/* Card 2: LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com/in/ajisha-tp-931018333?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between p-6 rounded-2xl glass-card border border-card-border hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <span className="text-[10px] uppercase font-bold text-purple-500 tracking-wider">LinkedIn</span>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-bold text-stone-900 dark:text-white mb-1">Connect</h4>
              <p className="text-xs text-stone-500 dark:text-slate-400 font-semibold truncate">Ajisha TP</p>
            </div>
          </motion.a>

          {/* Card 3: GitHub */}
          <motion.a 
            href="https://github.com/ajishatp"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between p-6 rounded-2xl glass-card border border-card-border hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <span className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider">GitHub</span>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-bold text-stone-900 dark:text-white mb-1">Follow</h4>
              <p className="text-xs text-stone-500 dark:text-slate-400 font-semibold truncate">@ajishatp</p>
            </div>
          </motion.a>

          {/* Card 4: Location */}
          <motion.a 
            href="https://www.google.com/maps/search/?api=1&query=Kunnumpuram+Malappuram+District+Kerala"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between p-6 rounded-2xl glass-card border border-card-border hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 text-red-500 dark:text-red-400 group-hover:scale-105 transition-transform flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-bold text-red-500 tracking-wider">Location</span>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-bold text-stone-900 dark:text-white mb-1">Location</h4>
              <p className="text-xs text-stone-500 dark:text-slate-400 font-semibold truncate">Kerala, India</p>
            </div>
          </motion.a>

        </div>

        {/* Quote decoration */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center text-stone-400 dark:text-slate-500 italic text-xs leading-relaxed max-w-md mx-auto border-t border-card-border pt-6"
        >
          "The best way to predict the future is to invent it." — Alan Kay
        </motion.div>

      </div>
    </section>
  );
};
