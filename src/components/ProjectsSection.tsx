"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  year: string;
  description: string;
  stack: string[];
  index: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "NexusGPT Platform",
    year: "2024",
    description:
      "Scalable backend powering AI-driven workflows, authentication, and real-time data processing. Handles 1M+ requests/month.",
    stack: ["Node.js", "PostgreSQL", "Redis", "AWS"],
  },
  {
    index: "02",
    title: "Time Tracking API",
    year: "2024",
    description:
      "RESTful API for time logging, reporting, and team-based analytics with role-based access. Sub-200ms average response time.",
    stack: ["NestJS", "PostgreSQL", "JWT", "Docker"],
  },
  {
    index: "03",
    title: "AI Research Pipeline",
    year: "2024",
    description:
      "Event-driven data ingestion and processing pipeline for large-scale AI experiments. Processes millions of events daily.",
    stack: ["Python", "Kafka", "ClickHouse", "AWS"],
  },
  {
    index: "04",
    title: "E-commerce Services",
    year: "2024",
    description:
      "Order, payment, and inventory services designed for high availability and consistency. Zero-downtime deployments.",
    stack: ["Node.js", "MongoDB", "Stripe", "K8s"],
  },
];

export function ProjectsSection() {
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
      id="work"
      className="relative bg-[#FAFAFA] py-32 text-[#111111] dark:bg-[#111111] dark:text-[#FAFAFA] sm:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section header - LEFT aligned */}
        <div className="relative mb-20 sm:mb-32">
          {/* Faded number */}
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-4 -top-8 font-mono text-[8rem] font-bold leading-none text-[#111111]/[0.03] dark:text-[#FAFAFA]/[0.03] sm:-left-8 sm:-top-16 sm:text-[12rem]"
          >
            01
          </motion.span>

          {/* Content */}
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-mono text-xs uppercase tracking-widest text-[#111111]/40 dark:text-[#FAFAFA]/40"
            >
              Selected work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em]"
            >
              Projects
            </motion.h2>
          </div>
        </div>

        {/* Projects list */}
        <div className="space-y-0">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer border-t border-[#111111]/10 py-8 transition-all duration-500 dark:border-[#FAFAFA]/10 sm:py-12"
            >
              {/* Hover background */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 -mx-6 origin-left bg-[#111111]/[0.02] dark:bg-[#FAFAFA]/[0.02] sm:-mx-8"
              />

              <div className="relative grid grid-cols-12 items-center gap-4">
                {/* Index */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-mono text-sm text-[#111111]/30 transition-colors duration-300 group-hover:text-[#111111] dark:text-[#FAFAFA]/30 dark:group-hover:text-[#FAFAFA]">
                    {project.index}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-10 sm:col-span-4">
                  <h3 className="text-xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-2xl">
                    {project.title}
                  </h3>
                </div>

                {/* Description - hidden on mobile */}
                <div className="col-span-12 mt-2 sm:col-span-4 sm:mt-0">
                  <p className="text-sm leading-relaxed text-[#111111]/60 dark:text-[#FAFAFA]/60">
                    {project.description}
                  </p>
                </div>

                {/* Year & Arrow */}
                <div className="col-span-12 mt-4 flex items-center justify-between sm:col-span-3 sm:mt-0 sm:justify-end sm:gap-8">
                  <span className="font-mono text-xs text-[#111111]/40 dark:text-[#FAFAFA]/40">
                    {project.year}
                  </span>
                  <motion.span
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                      x: hoveredIndex === i ? 0 : -10,
                      opacity: hoveredIndex === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-lg"
                  >
                    →
                  </motion.span>
                </div>
              </div>

              {/* Stack tags - appear on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  y: hoveredIndex === i ? 0 : 10,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative mt-4 flex flex-wrap gap-2 sm:mt-6"
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] uppercase tracking-wider text-[#111111]/50 dark:text-[#FAFAFA]/50"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
