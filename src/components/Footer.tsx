"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SystemStatus } from "@/components/SystemStatus";

const ease = [0.16, 1, 0.3, 1] as const;

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative bg-[#FAFAFA] text-[#0A0A0A] pt-8 sm:pt-10 pb-10"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[13px] font-medium text-[#0A0A0A]/50 tracking-[-0.01em] uppercase letter-spacing"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-[16px] leading-[1.8] text-[#0A0A0A]/60 max-w-md"
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
            href="https://linkedin.com/in/biswajitrath"
            target="_blank"
            rel="noopener noreferrer"
            className="swiss-link text-[13px] text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-300"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[12px] text-[#0A0A0A]/20"
        >
          &copy; {currentYear} Biswajit Rath
        </motion.p>

        {/* Footer-base: meta + system info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 pt-3 border-t border-[#0A0A0A]/[0.04] flex items-center justify-between"
        >
          <div className="flex-1">
            <SystemStatus />
          </div>
          <div className="flex-1" />
          <div className="flex-1 text-right">
            <a
              href="#top"
              className="text-[11px] text-[#0A0A0A]/25 hover:text-[#0A0A0A]/40 transition-colors duration-300 inline-block"
            >
              &uarr; Top
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
