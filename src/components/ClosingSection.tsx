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
      { threshold: 0.1 }
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
      className="relative bg-[#FAFAFA] py-32 text-[#111111] sm:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Main CTA */}
        <div className="relative mb-24 border-y border-[#111111]/10 py-20 sm:py-32">
          {/* Faded number */}
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-4 -top-8 font-mono text-[8rem] font-bold leading-none text-[#111111]/[0.03] sm:-left-8 sm:-top-16 sm:text-[12rem]"
          >
            07
          </motion.span>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left content */}
            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 font-mono text-xs uppercase tracking-widest text-[#111111]/40"
              >
                Start a conversation
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.85] tracking-[-0.04em]"
              >
                Let&apos;s
                <br />
                Connect
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 max-w-md text-lg leading-relaxed text-[#111111]/60"
              >
                Whether you&apos;re validating an idea or scaling an existing
                product, I help teams turn complexity into reliable,
                production-ready systems.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                href="mailto:hello@biswajitrath.dev"
                className="group mt-10 inline-flex items-center gap-4 border border-[#111111] px-8 py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#111111] hover:text-[#FAFAFA]"
              >
                Get in touch
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  →
                </motion.span>
              </motion.a>
            </div>

            {/* Right contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col justify-end lg:col-span-4"
            >
              <div className="space-y-8">
                <div className="group">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/40">
                    Email
                  </span>
                  <a
                    href="mailto:hello@biswajitrath.dev"
                    className="mt-2 block text-sm transition-opacity hover:opacity-60"
                  >
                    hello@biswajitrath.dev
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/40">
                    Social
                  </span>
                  <div className="mt-2 flex flex-col gap-2">
                    <a
                      href="#github"
                      className="group inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                    >
                      GitHub
                      <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                    <a
                      href="#linkedin"
                      className="group inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                    >
                      LinkedIn
                      <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/40">
                    Location
                  </span>
                  <p className="mt-2 text-sm">India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <span className="font-mono text-xs text-[#111111]/40">
            © {new Date().getFullYear()} Biswajit Rath
          </span>

          <span className="font-mono text-xs text-[#111111]/40 sm:text-center">
            Built with precision
          </span>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-xs text-[#111111]/40 transition-colors hover:text-[#111111] sm:justify-end"
          >
            Back to top
            <span className="transition-transform group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </motion.footer>
      </div>
    </section>
  );
}

