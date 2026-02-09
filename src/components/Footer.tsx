"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative bg-[#FAFAFA] text-[#0A0A0A] pt-14 sm:pt-16 pb-10"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        {/* Section divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease }}
          className="h-px bg-[#0A0A0A]/10 origin-left"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 text-[13px] font-medium text-[#0A0A0A]/40 tracking-[-0.01em]"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-[15px] leading-[1.75] text-[#0A0A0A]/50 max-w-md"
        >
          If you have a project that needs thoughtful backend architecture,
          I&apos;d like to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          <a
            href="mailto:hello@biswajitrath.com"
            className="swiss-link text-[13px] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-300"
          >
            hello@biswajitrath.com
          </a>
          <span className="text-[#0A0A0A]/15 select-none" aria-hidden="true">
            &middot;
          </span>
          <a
            href="https://github.com/biswajitrath"
            target="_blank"
            rel="noopener noreferrer"
            className="swiss-link text-[13px] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-300"
          >
            GitHub
          </a>
          <span className="text-[#0A0A0A]/15 select-none" aria-hidden="true">
            &middot;
          </span>
          <a
            href="https://linkedin.com/in/biswajitrath"
            target="_blank"
            rel="noopener noreferrer"
            className="swiss-link text-[13px] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-300"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 sm:mt-24 flex items-center justify-between"
        >
          <span className="text-[12px] text-[#0A0A0A]/20">
            &copy; {currentYear} Biswajit Rath
          </span>
          <a
            href="#top"
            className="text-[12px] text-[#0A0A0A]/20 hover:text-[#0A0A0A]/50 transition-colors duration-300"
          >
            &uarr; Top
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
