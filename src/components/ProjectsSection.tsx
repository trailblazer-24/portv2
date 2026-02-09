"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Project = {
  title: string;
  description: string;
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    title: "NexusGPT Platform",
    description:
      "Backend powering AI-driven workflows at scale. Event-driven services with async processing, Redis caching, and clear service boundaries.",
    stack: ["Node.js", "PostgreSQL", "Redis", "AWS"],
  },
  {
    title: "Time Tracking API",
    description:
      "Re-architected a legacy time-logging service for team analytics. Modular API with JWT auth, query optimization, and built-in observability.",
    stack: ["NestJS", "PostgreSQL", "JWT", "Docker"],
  },
  {
    title: "AI Research Pipeline",
    description:
      "Data processing system for large-scale AI experiments. Event-driven with Kafka, batch processing, and full lineage tracking.",
    stack: ["Python", "Kafka", "ClickHouse", "AWS"],
  },
  {
    title: "E-commerce Services",
    description:
      "Order, payment, and inventory as independent services. Idempotent workflows, resilient messaging, and zero-downtime releases.",
    stack: ["Node.js", "MongoDB", "Stripe", "K8s"],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#FAFAFA] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        {/* Section divider — the signature motif */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease }}
          className="h-px bg-[#0A0A0A]/10 origin-left"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 text-[13px] font-medium text-[#0A0A0A]/40 tracking-[-0.01em]"
        >
          Selected Work
        </motion.h2>

        {/* Editorial project list */}
        <div className="mt-8">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-t border-[#0A0A0A]/[0.06] py-8 sm:py-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0 flex-1">
                  <h3 className="text-[17px] font-medium tracking-[-0.01em] text-[#0A0A0A] group-hover:text-[#0A0A0A]/70 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-[#0A0A0A]/40 max-w-lg">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono text-[11px] text-[#0A0A0A]/25">
                    {project.stack.join(" · ")}
                  </p>
                </div>

                <motion.span
                  animate={{
                    opacity: hoveredIndex === i ? 0.45 : 0,
                    x: hoveredIndex === i ? 0 : -4,
                  }}
                  transition={{ duration: 0.25 }}
                  className="mt-1 text-[14px] text-[#0A0A0A] shrink-0"
                  aria-hidden="true"
                >
                  ↗
                </motion.span>
              </div>
            </motion.article>
          ))}

          {/* Final divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="h-px bg-[#0A0A0A]/[0.06] origin-left"
          />
        </div>
      </div>
    </section>
  );
}
