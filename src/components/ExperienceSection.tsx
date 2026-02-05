"use client";

import { useEffect, useRef, useState } from "react";

type Experience = {
  range: string;
  title: string;
  company: string;
  description: string;
};

const EXPERIENCE: Experience[] = [
  {
    range: "2023 — Present",
    title: "Senior Backend / Full-Stack Engineer",
    company: "Freelance / Consulting",
    description:
      "Designed and built scalable backend systems for startups and growing products. Led architecture decisions, implemented APIs, authentication, and data pipelines, and ensured production readiness through monitoring and performance optimization.",
  },
  {
    range: "2021 — 2023",
    title: "Backend Engineer",
    company: "Product-Based Startup",
    description:
      "Worked on core backend services handling business logic, data modeling, and third-party integrations. Focused on reliability, clean service boundaries, and improving system performance as usage scaled.",
  },
];

export function ExperienceSection() {
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
      ref={sectionRef}
      className="bg-[#FAFAFA] py-24 text-[#111111] dark:bg-[#111111] dark:text-[#FAFAFA] sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section header */}
        <div
          className={`grid grid-cols-12 gap-4 border-b border-[#111111]/10 pb-8 dark:border-[#FAFAFA]/10 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="col-span-12 sm:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 dark:text-[#FAFAFA]/50">
              Experience
            </span>
          </div>
          <div className="col-span-12 sm:col-span-8">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-[-0.02em]">
              Professional
              <br />
              background
            </h2>
          </div>
        </div>

        {/* Experience list */}
        <div className="mt-16">
          {EXPERIENCE.map((exp, i) => (
            <article
              key={exp.range}
              className={`grid grid-cols-12 gap-4 border-b border-[#111111]/10 py-12 dark:border-[#FAFAFA]/10 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Date range */}
              <div className="col-span-12 sm:col-span-3">
                <span className="font-mono text-sm text-[#111111]/50 dark:text-[#FAFAFA]/50">
                  {exp.range}
                </span>
              </div>

              {/* Title & Company */}
              <div className="col-span-12 sm:col-span-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  {exp.title}
                </h3>
                <span className="mt-1 block text-sm text-[#111111]/50 dark:text-[#FAFAFA]/50">
                  {exp.company}
                </span>
              </div>

              {/* Description */}
              <div className="col-span-12 mt-4 sm:col-span-5 sm:mt-0">
                <p className="text-sm leading-relaxed text-[#111111]/70 dark:text-[#FAFAFA]/70">
                  {exp.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Resume link */}
        <div
          className={`mt-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#resume"
            className="group inline-flex items-center gap-3 border border-[#111111] px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-[#111111] hover:text-[#FAFAFA] dark:border-[#FAFAFA] dark:hover:bg-[#FAFAFA] dark:hover:text-[#111111]"
          >
            Download Resume
            <span className="transition-transform group-hover:translate-x-1">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
