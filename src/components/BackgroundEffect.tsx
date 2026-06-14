import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const BackgroundEffect: React.FC = () => {
  const [mounted, setMounted] = useState(false);
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-bg-theme transition-colors duration-300 select-none pointer-events-none">
      {/* Moving Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] animate-grid-move" />

      {/* Radiant glow spots that stay fixed */}
      <div 
        className="glow-orb bg-indigo-600/20 w-[500px] h-[500px] -left-40 top-20 animate-pulse-glow" 
        style={{ animationDuration: '6s' }}
      />
      <div 
        className="glow-orb bg-purple-600/15 w-[600px] h-[600px] -right-20 -top-20 animate-pulse-glow" 
        style={{ animationDuration: '9s' }}
      />
      <div 
        className="glow-orb bg-blue-600/10 w-[500px] h-[500px] left-1/3 bottom-10 animate-pulse-glow" 
        style={{ animationDuration: '7s' }}
      />

      {/* Desktop Mouse Tracking Glow (Only displays on devices that support mouse pointer hover) */}
      <motion.div
        className="hidden md:block absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[80px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
        }}
      />

      {/* Fine-grain vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,var(--bg-theme)_80%)]" />
    </div>
  );
};
