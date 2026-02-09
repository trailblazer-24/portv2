"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative bg-[#FAFAFA] text-[#0A0A0A]">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className="text-[15px] font-medium tracking-[-0.01em] text-[#0A0A0A]"
        >
          Biswajit Rath
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-1 text-[13px] text-[#0A0A0A]/35"
        >
          Backend Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-12 text-[clamp(1.5rem,3vw,1.875rem)] font-normal leading-[1.5] tracking-[-0.01em] text-[#0A0A0A]/85 max-w-[560px]"
        >
          I build the systems that products depend on&mdash;APIs, databases,
          and distributed services designed for reliability and scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="mt-6 text-[15px] leading-[1.75] text-[#0A0A0A]/40 max-w-[480px]"
        >
          I think about architecture as trade-offs. Performance vs.&nbsp;cost,
          consistency vs.&nbsp;availability, simplicity vs.&nbsp;flexibility.
          Currently building fintech infrastructure at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
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
      </div>
    </section>
  );
}
