"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CAPABILITIES = [
  {
    title: "Architecture",
    description: "Designing scalable, fault-tolerant systems with clear boundaries.",
  },
  {
    title: "APIs",
    description: "Building clean, performant REST and GraphQL interfaces.",
  },
  {
    title: "Infrastructure",
    description: "Deploying and scaling with modern cloud platforms.",
  },
];

const PRINCIPLES = [
  "Clean code over quick fixes",
  "Simplicity over complexity",  
  "Documentation alongside code",
  "Performance from day one",
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#0A0A0A] text-[#FAFAFA] py-32 sm:py-40 lg:py-48 overflow-hidden"
    >
      {/* Subtle grid guides */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-[25%] top-0 w-px h-full bg-[#FAFAFA]/[0.04] origin-top hidden lg:block"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left column - About text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FAFAFA]/30 mb-4"
            >
              About
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] mb-10"
            >
              Building systems
              <br />
              <span className="text-[#FAFAFA]/30">with intention.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-[15px] leading-[1.8] text-[#FAFAFA]/50">
                I focus on backend engineering—the invisible foundation that makes 
                digital products reliable and scalable. Every system is designed 
                around your specific constraints, not generic templates.
              </p>
              <p className="text-[15px] leading-[1.8] text-[#FAFAFA]/50">
                Clean codebases, clear boundaries, and long-term maintainability 
                are built in from the start.
              </p>
            </motion.div>

            {/* Principles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#FAFAFA]/10 origin-left mb-8"
              />
              
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FAFAFA]/25 mb-6">
                Principles
              </p>
              
              <ul className="space-y-3">
                {PRINCIPLES.map((principle, i) => (
                  <motion.li
                    key={principle}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                    className="text-[14px] text-[#FAFAFA]/40 flex items-center gap-3"
                  >
                    <span className="w-1 h-1 bg-[#FAFAFA]/20 rounded-full" />
                    {principle}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right column - Capabilities */}
          <div className="lg:pt-20">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FAFAFA]/30 mb-10"
            >
              Capabilities
            </motion.p>

            <div className="space-y-0">
              {CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group cursor-default"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px bg-[#FAFAFA]/10 origin-left"
                  />
                  
                  <div className="py-8 sm:py-10">
                    <div className="flex items-start justify-between gap-8">
                      <div>
                        <motion.h3
                          animate={{ x: hoveredIndex === i ? 8 : 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#FAFAFA] mb-3"
                        >
                          {cap.title}
                        </motion.h3>
                        <p className="text-[14px] leading-[1.7] text-[#FAFAFA]/40 max-w-sm">
                          {cap.description}
                        </p>
                      </div>
                      
                      <motion.span
                        animate={{ 
                          opacity: hoveredIndex === i ? 0.5 : 0.15,
                        }}
                        transition={{ duration: 0.3 }}
                        className="font-mono text-[11px] text-[#FAFAFA] shrink-0"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Final border */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#FAFAFA]/10 origin-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Keep the old export name for backwards compatibility in case it's used elsewhere
export const BenefitsSection = AboutSection;
