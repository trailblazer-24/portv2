"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function ContactFooter() {
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

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/biswajitrath",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/biswajitrath",
    }
  ];


  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#F5F2EE] text-[#111111]"
    >
      {/* ── Contact CTA ── */}
      <div className="mx-auto max-w-6xl px-6 pt-20 sm:px-8 sm:pt-28">
        <div className="relative border-[#111111]/10 pt-16 sm:pt-20">
          {/* Faded number */}
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-4 -top-8 font-mono text-[8rem] font-bold leading-none text-[#111111]/[0.03] sm:-left-8 sm:-top-16 sm:text-[12rem]"
          >
            07
          </motion.span>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left - headline & CTA */}
            <div className="lg:col-span-7">
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
                className="text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.85] tracking-[-0.04em]"
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
                href="mailto:hello@biswajitrath.com"
                className="group mt-10 inline-flex items-center gap-4 border border-[#111111] px-8 py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#111111] hover:text-[#FAFAFA]"
              >
                Get in touch
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </motion.a>
            </div>

            {/* Right - contact details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col justify-end lg:col-span-5"
            >
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/40">
                    Email
                  </span>
                  <a
                    href="mailto:hello@biswajitrath.com"
                    className="mt-2 block text-sm transition-opacity hover:opacity-60"
                  >
                    hello@biswajitrath.com
                  </a>
                </div>

                {/* Social */}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/40">
                    Social
                  </span>
                  <div className="mt-2 flex flex-col gap-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                      >
                        {link.label}
                        <span className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Location */}
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
      </div>

      {/* ── Footer ── */}
      <footer className="mx-auto mt-20 max-w-6xl px-6 pb-8 sm:mt-28 sm:px-8">
        <div className="border-t border-[#111111]/10 pt-6">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/30">
              © {new Date().getFullYear()} Biswajit Rath
            </p>

            <a
              href="#top"
              className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/40 transition-colors hover:text-[#111111]"
            >
              Back to top ↑
            </a>

            <div className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-[#111111]/40">
              <a
                href="#"
                className="transition-colors hover:text-[#111111]"
              >
                Archive &rsquo;25
              </a>
              <span>·</span>
              <a
                href="#"
                className="transition-colors hover:text-[#111111]"
              >
                Archive &rsquo;24
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
