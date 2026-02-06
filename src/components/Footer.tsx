"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative bg-[#FAFAFA] text-[#0A0A0A]"
    >
      {/* Contact Section */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-32 sm:pt-40 lg:pt-48 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left - CTA */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0A0A0A]/30 mb-4"
            >
              Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
            >
              Let&apos;s build
              <br />
              <span className="text-[#0A0A0A]/20">something.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 max-w-md text-[15px] leading-[1.8] text-[#0A0A0A]/50"
            >
              Have a project in mind? I help teams turn complex challenges
              into reliable, production-ready systems.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              href="mailto:hello@biswajitrath.dev"
              className="group inline-flex items-center gap-4 mt-10"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A] group-hover:text-[#0A0A0A]/60 transition-colors duration-300">
                hello@biswajitrath.dev
              </span>
              <motion.span 
                className="text-[#0A0A0A] group-hover:text-[#0A0A0A]/60 transition-colors duration-300"
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </motion.a>
          </div>

          {/* Right - Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 lg:pt-10"
          >
            <div className="grid grid-cols-2 gap-12">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0A0A0A]/25 mb-5">
                  Links
                </p>
                <ul className="space-y-3">
                  {[
                    { label: "GitHub", href: "https://github.com/biswajitrath" },
                    { label: "LinkedIn", href: "https://linkedin.com/in/biswajitrath" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="swiss-link text-sm text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0A0A0A]/25 mb-5">
                  Location
                </p>
                <p className="text-sm text-[#0A0A0A]/50">India</p>
                <p className="text-[12px] text-[#0A0A0A]/30 mt-1">
                  Available globally
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal footer bar */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-[#0A0A0A]/10 origin-left"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-8 flex items-center justify-between"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/25">
            © {currentYear} Biswajit Rath
          </span>

          <motion.a
            href="#top"
            className="group flex items-center gap-2"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/25 group-hover:text-[#0A0A0A]/50 transition-colors duration-300">
              Top
            </span>
            <span className="text-[#0A0A0A]/25 group-hover:text-[#0A0A0A]/50 transition-colors duration-300">
              ↑
            </span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
