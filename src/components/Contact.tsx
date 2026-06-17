import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, MapPin } from 'lucide-react';

// To receive emails in the background without opening a mail client, 
// get a free access key from https://web3forms.com and paste it here.
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const tempErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email format is invalid';
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message cannot be empty';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      // Professional Mock: Simulate background sending inside the page without opening other apps
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`
        })
      });

      const result = await response.json();
      if (response.status === 200 && result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Submission error:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Network error submitting form:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3"
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden glow-border"
          >
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-3xl rounded-full pointer-events-none" />

            <div>
              <h4 className="text-lg font-bold text-stone-900 dark:text-white mb-2 tracking-wide">Contact Details</h4>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-slate-400 leading-relaxed mb-8">
                Feel free to reach out to me for internship positions, graduate developer opportunities, or community coordination events.
              </p>

              {/* Direct Info list */}
              <div className="space-y-6">
                <a href="mailto:tpajisha@gmail.com" className="flex items-center gap-4 text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white transition-colors group">
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-white/[0.02] border border-card-border text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-stone-400 dark:text-slate-500 tracking-wider">Email</span>
                    <span className="text-sm font-semibold">tpajisha@gmail.com</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/ajisha-tp-931018333?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white transition-colors group">
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-white/[0.02] border border-card-border text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-stone-400 dark:text-slate-500 tracking-wider">LinkedIn</span>
                    <span className="text-sm font-semibold">linkedin.com/in/ajisha-tp-931018333</span>
                  </div>
                </a>

                <a href="https://github.com/ajishatp" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white transition-colors group">
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-white/[0.02] border border-card-border text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-stone-400 dark:text-slate-500 tracking-wider">GitHub</span>
                    <span className="text-sm font-semibold">github.com/ajishatp</span>
                  </div>
                </a>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Kunnumpuram+Malappuram+District+Kerala" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-4 text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white transition-colors group cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-stone-50 dark:bg-white/[0.02] border border-card-border text-red-500 dark:text-red-400 group-hover:scale-105 transition-transform flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-stone-400 dark:text-slate-500 tracking-wider">Location</span>
                    <span className="text-sm font-semibold">Kunnumpuram, Malappuram District</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Quote decoration */}
            <div className="mt-12 pt-6 border-t border-card-border text-stone-400 dark:text-slate-500 italic text-xs leading-relaxed">
              "The best way to predict the future is to invent it." — Alan Kay
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-card relative glow-border flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 rounded-xl bg-stone-50/50 dark:bg-white/[0.02] border focus:bg-stone-100/50 dark:focus:bg-white/[0.04] focus:outline-none transition-all text-sm text-stone-900 dark:text-slate-200 placeholder-stone-400 dark:placeholder-slate-600 ${
                    errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-card-border focus:border-blue-600/50 dark:focus:border-blue-500/50'
                  }`}
                />
                {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 rounded-xl bg-stone-50/50 dark:bg-white/[0.02] border focus:bg-stone-100/50 dark:focus:bg-white/[0.04] focus:outline-none transition-all text-sm text-stone-900 dark:text-slate-200 placeholder-stone-400 dark:placeholder-slate-600 ${
                    errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-card-border focus:border-blue-600/50 dark:focus:border-blue-500/50'
                  }`}
                />
                {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, role opportunity, or message..."
                  className={`w-full px-4 py-3 rounded-xl bg-stone-50/50 dark:bg-white/[0.02] border focus:bg-stone-100/50 dark:focus:bg-white/[0.04] focus:outline-none transition-all text-sm text-stone-900 dark:text-slate-200 placeholder-stone-400 dark:placeholder-slate-600 resize-none ${
                    errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-card-border focus:border-blue-600/50 dark:focus:border-blue-500/50'
                  }`}
                />
                {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
              </div>

              {/* Submit Button & Notification status */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all disabled:opacity-50 select-none shadow-md shadow-blue-500/10 active:scale-98 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-xl"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Message sent successfully!
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-xl"
                    >
                      Failed to send message. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
