"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function ClosingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="closing"
      ref={sectionRef}
      className="relative bg-[#FAFAFA] pb-0 pt-24 text-[#111111] sm:pt-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="relative py-20 sm:py-28">
          {/* Faded number */}
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 0.04, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-4 -top-8 font-mono text-[8rem] font-bold leading-none sm:-left-6 sm:-top-12 sm:text-[12rem]"
            style={{ color: "#111111" }}
          >
            07
          </motion.span>

          <div className="grid grid-cols-1 items-end gap-16 lg:grid-cols-2">
            {/* Left — CTA */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-[#111111]/40"
              >
                Next steps
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-display text-[clamp(3rem,10vw,7.5rem)] font-extrabold leading-[0.9] tracking-[-0.045em]"
              >
                Let&apos;s build
                <br />
                something.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-8 max-w-md text-[15px] leading-[1.7] text-[#111111]/55 sm:text-base"
              >
                Have a project in mind? I help teams turn complex challenges
                into reliable, production-ready systems.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
                href="mailto:hello@biswajitrath.dev"
                className="group relative mt-10 inline-flex items-center gap-4 overflow-hidden bg-[#111111] px-10 py-5 font-mono text-[11px] uppercase tracking-[0.25em] text-[#FAFAFA] transition-all duration-500 hover:gap-6"
              >
                <span className="relative z-10">Start a project</span>
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
                <span className="absolute inset-0 -translate-x-full bg-[#333333] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
              </motion.a>
            </div>

            {/* Right — Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-6 lg:items-end lg:text-right"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#111111]/35">
                  Email
                </p>
                <a
                  href="mailto:hello@biswajitrath.dev"
                  className="mt-1.5 block text-sm text-[#111111]/80 transition-colors duration-300 hover:text-[#111111]"
                >
                  hello@biswajitrath.dev
                </a>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#111111]/35">
                  Social
                </p>
                <div className="mt-1.5 flex gap-4 lg:justify-end">
                  <a
                    href="https://github.com/biswajitrath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#111111]/80 transition-colors duration-300 hover:text-[#111111]"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://linkedin.com/in/biswajitrath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#111111]/80 transition-colors duration-300 hover:text-[#111111]"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#111111]/35">
                  Location
                </p>
                <p className="mt-1.5 text-sm text-[#111111]/80">
                  India — Available worldwide
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

