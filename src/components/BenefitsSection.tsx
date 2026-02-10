"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRINCIPLES = [
  "Clean code over quick fixes",
  "Simplicity over complexity",
  "Documentation alongside code",
  "Performance from the start",
];

const ease = [0.16, 1, 0.3, 1] as const;

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#FAFAFA] text-[#0A0A0A] py-8 sm:py-10"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[13px] font-medium text-[#0A0A0A]/50 tracking-[-0.01em] uppercase letter-spacing"
        >
          About
        </motion.h2>

        {/* Prose */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 space-y-4 max-w-xl"
        >
          <p className="text-[16px] leading-[1.8] text-[#0A0A0A]/65">
            I focus on backend engineering - the part of software most
            people never see but always depend on. Clean architecture, clear
            service boundaries, and systems that teams can maintain long after
            I&apos;ve moved on.
          </p>
          <p className="text-[16px] leading-[1.8] text-[#0A0A0A]/65">
            My approach is constraint-driven. I start with what the system needs
            to handle - request volume, latency requirements, failure
            modes - then design the simplest architecture that meets those
            needs.
          </p>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6"
        >
          <p className="text-[13px] font-medium text-[#0A0A0A]/50 tracking-[-0.01em] mb-3 uppercase letter-spacing">
            Principles
          </p>
          <ul className="space-y-3">
            {PRINCIPLES.map((principle) => (
              <li
                key={principle}
                className="text-[14px] text-[#0A0A0A]/40 pl-4 border-l border-[#0A0A0A]/10"
              >
                {principle}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export const BenefitsSection = AboutSection;
