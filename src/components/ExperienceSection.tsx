"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

const EXPERIENCES: Experience[] = [
  {
    period: "2023 — Present",
    role: "Senior Backend Engineer",
    company: "Tech Startup",
    description:
      "Leading backend architecture for a high-scale fintech platform processing millions of transactions.",
    technologies: ["Go", "PostgreSQL", "Redis", "Kubernetes"],
  },
  {
    period: "2021 — 2023",
    role: "Backend Developer",
    company: "Digital Agency",
    description:
      "Built and maintained APIs for enterprise clients across healthcare and e-commerce.",
    technologies: ["Node.js", "TypeScript", "MongoDB", "AWS"],
  },
  {
    period: "2019 — 2021",
    role: "Software Engineer",
    company: "Product Company",
    description:
      "Full-stack development with a focus on backend services and database optimization.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAFAFA] py-8 sm:py-10"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[13px] font-medium text-[#0A0A0A]/50 tracking-[-0.01em] uppercase letter-spacing"
        >
          Experience
        </motion.h2>

        {/* Experience items */}
        <div className="mt-8">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="border-t border-[#0A0A0A]/[0.06] py-5 sm:py-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
                <span className="font-mono text-[12px] text-[#0A0A0A]/30 sm:w-[140px] shrink-0">
                  {exp.period}
                </span>
                <div className="mt-2 sm:mt-0 flex-1">
                  <p className="text-[15px] font-medium tracking-[-0.01em] text-[#0A0A0A]">
                    {exp.role}
                  </p>
                  <p className="mt-1 text-[13px] text-[#0A0A0A]/30">
                    {exp.company}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.75] text-[#0A0A0A]/55">
                    {exp.description}
                  </p>
                  <p className="mt-3 font-mono text-[11px] text-[#0A0A0A]/25">
                    {exp.technologies.join(" · ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final border */}
          <div className="border-t border-[#0A0A0A]/[0.06]" />
        </div>
      </div>
    </section>
  );
}
