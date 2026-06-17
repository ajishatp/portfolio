import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  // Scrollspy & Glass navbar toggle
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section detection
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 250; // Offset for header trigger

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const offsetTop = section.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= offsetTop) {
            setActiveSection(navLinks[i].href.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Navbar height offset
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
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'py-4 bg-bg-theme/85 backdrop-blur-md border-b border-card-border/80 shadow-sm' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex-1 flex items-center">
            <a 
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="text-sm sm:text-base font-extrabold text-stone-900 tracking-wider hover:opacity-80 transition-opacity"
            >
              AJISHA <span className="text-blue-600">TP</span>.
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-1.5 px-2 py-1.5 rounded-full border border-card-border bg-card-bg/50">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-colors duration-300 ${
                      isActive 
                        ? 'text-stone-900 dark:text-white font-bold' 
                        : 'text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-stone-100/80 dark:bg-white/[0.06] border border-stone-200/50 dark:border-white/[0.06] rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>



            {/* CTA Header Actions */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold tracking-wider rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-98"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex lg:hidden items-center gap-2">


            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 z-30 w-72 max-w-[80vw] bg-bg-theme/95 backdrop-blur-xl border-l border-card-border p-6 flex flex-col pt-24 lg:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-blue-600/10 text-blue-600 dark:text-white border border-blue-600/20'
                          : 'text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-slate-200 hover:bg-stone-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-semibold">{link.label}</span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-card-border">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="block w-full py-3 text-center text-sm font-semibold rounded-xl bg-blue-600 text-white"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
