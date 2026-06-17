import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const BackgroundEffect: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking the cursor
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Center the glow orb relative to its size (width/height is 400px, so subtract 200)
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples(prev => [...prev, newRipple].slice(-8));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-bg-theme transition-colors duration-300 select-none pointer-events-none">
      {/* Radiant glow spots that stay fixed */}
      <div 
        className="glow-orb bg-blue-600/10 dark:bg-blue-600/5 w-[500px] h-[500px] -left-40 top-20 animate-pulse-glow" 
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="glow-orb bg-indigo-600/5 dark:bg-indigo-600/5 w-[600px] h-[600px] -right-20 -top-20 animate-pulse-glow" 
        style={{ animationDuration: '10s' }}
      />
      <div 
        className="glow-orb bg-sky-600/5 dark:bg-sky-600/5 w-[500px] h-[500px] left-1/3 bottom-10 animate-pulse-glow" 
        style={{ animationDuration: '9s' }}
      />

      {/* Desktop Mouse Tracking Glow */}
      <motion.div
        className="hidden md:block absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[80px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      {/* Interactive Ripple and Spark particles (Aesthetic click effects) */}
      {ripples.map(ripple => (
        <React.Fragment key={ripple.id}>
          {/* Ring ripple */}
          <motion.div
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onAnimationComplete={() => {
              setRipples(prev => prev.filter(r => r.id !== ripple.id));
            }}
            className="absolute rounded-full border border-blue-500/30 bg-blue-500/5 pointer-events-none"
            style={{
              left: ripple.x - 20,
              top: ripple.y - 20,
              width: 40,
              height: 40,
            }}
          />
          {/* Sparkles burst */}
          {[...Array(5)].map((_, idx) => {
            const angle = (idx * 72) + (Math.random() * 15 - 7.5);
            const distance = 35 + Math.random() * 35;
            const targetX = Math.cos((angle * Math.PI) / 180) * distance;
            const targetY = Math.sin((angle * Math.PI) / 180) * distance;
            return (
              <motion.div
                key={idx}
                initial={{ x: ripple.x, y: ripple.y, scale: 1, opacity: 0.8 }}
                animate={{ x: ripple.x + targetX, y: ripple.y + targetY, scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 pointer-events-none"
                style={{
                  left: -3,
                  top: -3,
                }}
              />
            );
          })}
        </React.Fragment>
      ))}

      {/* Fine-grain vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,var(--bg-theme)_80%)]" />
    </div>
  );
};
