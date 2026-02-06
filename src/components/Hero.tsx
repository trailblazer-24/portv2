"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  isReady?: boolean;
}

export function Hero({ isReady = true }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isReady) {
      setIsLoaded(true);
    }
  }, [isReady]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#FAFAFA] text-[#0A0A0A] overflow-hidden"
    >
      {/* Subtle grid guides */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical guide */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isLoaded ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[15%] top-0 w-px h-full bg-[#0A0A0A]/[0.04] origin-top"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isLoaded ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[20%] top-0 w-px h-full bg-[#0A0A0A]/[0.04] origin-top hidden lg:block"
        />
      </div>

      {/* Main container */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="pt-8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A]/70">
              Biswajit Rath
            </span>
            <nav className="flex items-center gap-8">
              <a
                href="#work"
                className="swiss-link font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-300"
              >
                Work
              </a>
              <a
                href="#about"
                className="swiss-link font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#contact"
                className="swiss-link font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </motion.div>

          {/* Horizontal line below header */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isLoaded ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 h-px bg-[#0A0A0A]/10 origin-left"
          />
        </header>

        {/* Hero content - asymmetric */}
        <div className="relative pt-[12vh] sm:pt-[15vh] lg:pt-[18vh] pb-24">
          {/* Main headline */}
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0A0A0A]/40 mb-8"
            >
              Backend Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.9] tracking-[-0.035em]"
            >
              Building
              <br />
              <span className="text-[#0A0A0A]/20">systems that</span>
              <br />
              scale.
            </motion.h1>
          </div>

          {/* Offset description block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 lg:mt-20 lg:ml-[30%] max-w-md"
          >
            <p className="text-[15px] leading-[1.8] text-[#0A0A0A]/60">
              I architect and build backend systems—APIs, databases, 
              and distributed services—designed for reliability and growth.
            </p>
          </motion.div>

          {/* Minimal side info - positioned absolutely */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-24 right-0 hidden lg:block text-right"
          >
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0A0A0A]/30 mb-2">
                  Location
                </p>
                <p className="text-sm text-[#0A0A0A]/60">India</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0A0A0A]/30 mb-2">
                  Status
                </p>
                <p className="text-sm text-[#0A0A0A]/60">Available</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom line with year */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isLoaded ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-[#0A0A0A]/10 origin-left"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="py-6 flex justify-between items-center"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0A0A0A]/30">
              ©2026
            </span>
            <motion.a
              href="#work"
              className="group flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0A0A0A]/40 group-hover:text-[#0A0A0A] transition-colors duration-300">
                View work
              </span>
              <span className="text-[#0A0A0A]/40 group-hover:text-[#0A0A0A] transition-colors duration-300">
                ↓
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Subtle cursor-aware gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(10, 10, 10, 0.02) 0%, transparent 50%)`,
        }}
      />
    </section>
  );
}
