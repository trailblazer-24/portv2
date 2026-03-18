"use client";

import { useEffect, useRef, useState } from "react";

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
    role: "Backend Developer",
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
          <span
            className={`absolute -left-4 -top-8 font-mono text-[8rem] font-bold leading-none text-[#111111]/[0.03] transition-all duration-700 sm:-left-8 sm:-top-16 sm:text-[12rem] ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            05
          </span>

          {/* Content */}
          <div className="relative">
            <p
              className={`mb-4 font-mono text-xs uppercase tracking-widest text-[#111111]/40 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Career journey
            </p>
            <h2
              className={`text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em] transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Experience
            </h2>
          </div>
        </div>

        {/* Experience items */}
        <div className="space-y-0">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.period}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative border-t border-[#111111]/10 py-8 transition-all duration-700 sm:py-12 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 origin-top bg-[#111111]/[0.02]"
                style={{
                  transform: hoveredIndex === i ? "scaleY(1)" : "scaleY(0)",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-8">
                {/* Period */}
                <div className="sm:col-span-3">
                  <span
                    className="font-mono text-xs uppercase tracking-widest text-[#111111]/40"
                    style={{
                      transform: hoveredIndex === i ? "translateX(4px)" : "translateX(0)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div className="sm:col-span-6">
                  <h3
                    className="text-xl font-semibold tracking-tight sm:text-2xl"
                    style={{
                      transform: hoveredIndex === i ? "translateX(8px)" : "translateX(0)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm text-[#111111]/60">{exp.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#111111]/60">
                    {exp.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="sm:col-span-3">
                  <div
                    className="flex flex-wrap gap-2 sm:justify-end"
                    style={{
                      opacity: hoveredIndex === i ? 1 : 0.4,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-[#111111]/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
            </div>
          ))}
        </div>

        {/* Resume link */}
        <div
          className={`mt-16 flex justify-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <a
            href="/Biswajit_Rath_Java_Developer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-[#111111]/20 px-8 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:border-[#111111] hover:bg-[#111111] hover:text-[#FAFAFA]"
          >
            View full resume
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
