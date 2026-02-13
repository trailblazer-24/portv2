"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

const EXPERIENCES: Experience[] = [
  {
    period: "2026 - Present",
    role: "Full Stack Developer",
    company: "Tech Startup",
    description:
      "Developing scalable end-to-end features across frontend and backend for a high-growth car pooling platform.",
    technologies: ["NodeJS", "PostgreSQL", "AWS", "Java"],
  },
  {
    period: "2024 - 2026",
    role: "Software Developer",
    company: "Certifying Authority",
    description:
      "Built automation tools using Python with Playwright and Selenium to streamline certificate workflows, testing, and compliance processes.",
    technologies: ["Python", "Playwright", "Selenium"],
  }
];

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      ref={sectionRef}
      className="relative bg-[#F5F2EE] py-32 text-[#111111] sm:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section header - LEFT aligned */}
        <div className="relative mb-20 sm:mb-32">
          {/* Faded number */}
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-4 -top-8 font-mono text-[8rem] font-bold leading-none text-[#111111]/[0.03] sm:-left-8 sm:-top-16 sm:text-[12rem]"
          >
            05
          </motion.span>

          {/* Content */}
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-mono text-xs uppercase tracking-widest text-[#111111]/40"
            >
              Career journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em]"
            >
              Experience
            </motion.h2>
          </div>
        </div>

        {/* Experience items */}
        <div className="space-y-0">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-t border-[#111111]/10 py-8 sm:py-12"
            >
              {/* Hover background */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 origin-top bg-[#111111]/[0.02]"
              />

              <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-8">
                {/* Period */}
                <div className="sm:col-span-3">
                  <motion.span
                    animate={{ x: hoveredIndex === i ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-xs uppercase tracking-widest text-[#111111]/40"
                  >
                    {exp.period}
                  </motion.span>
                </div>

                {/* Content */}
                <div className="sm:col-span-6">
                  <motion.h3
                    animate={{ x: hoveredIndex === i ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-semibold tracking-tight sm:text-2xl"
                  >
                    {exp.role}
                  </motion.h3>
                  <p className="mt-1 text-sm text-[#111111]/60">{exp.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#111111]/60">
                    {exp.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="sm:col-span-3">
                  <motion.div
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: hoveredIndex === i ? 1 : 0.4 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-2 sm:justify-end"
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-[#111111]/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Arrow indicator */}
              {/* <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  x: hoveredIndex === i ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#111111]/40"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </motion.div> */}
            </motion.div>
          ))}
        </div>

        {/* Resume link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/resume.pdf"
            className="group inline-flex items-center gap-3 border border-[#111111]/20 px-8 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-[#FAFAFA]"
          >
            View full resume
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              className="transition-transform"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
