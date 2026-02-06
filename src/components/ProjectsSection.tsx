"use client";

import { useEffect, useRef, useState } from "react";
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
      "Scalable backend powering AI-driven workflows. Handles 1M+ requests/month.",
    stack: ["Node.js", "PostgreSQL", "Redis", "AWS"],
  },
  {
    title: "Time Tracking API",
    description:
      "RESTful API for time logging and team analytics. Sub-200ms response time.",
    stack: ["NestJS", "PostgreSQL", "JWT", "Docker"],
  },
  {
    title: "AI Research Pipeline",
    description:
      "Event-driven data processing for large-scale AI experiments.",
    stack: ["Python", "Kafka", "ClickHouse", "AWS"],
  },
  {
    title: "E-commerce Services",
    description:
      "Order, payment, and inventory microservices. Zero-downtime deployments.",
    stack: ["Node.js", "MongoDB", "Stripe", "K8s"],
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#FAFAFA] py-32 sm:py-40 lg:py-48"
    >
      {/* Vertical guide line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[8%] top-0 w-px h-full bg-[#0A0A0A]/[0.04] origin-top hidden lg:block"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mb-20 sm:mb-28 lg:mb-36">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0A0A0A]/40 mb-4"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
          >
            Projects
          </motion.h2>
        </div>

        {/* Projects list */}
        <div className="space-y-0">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              {/* Top border line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-[#0A0A0A]/10 origin-left"
              />

              <div className="py-10 sm:py-14 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <motion.span
                      animate={{ 
                        opacity: hoveredIndex === i ? 1 : 0.25,
                      }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-[11px] text-[#0A0A0A]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-5">
                    <motion.h3
                      animate={{ x: hoveredIndex === i ? 12 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#0A0A0A]"
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-[14px] leading-[1.7] text-[#0A0A0A]/50">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-2 flex lg:justify-end">
                    <motion.span
                      animate={{ 
                        x: hoveredIndex === i ? 8 : 0,
                        opacity: hoveredIndex === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-lg text-[#0A0A0A]"
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Stack - revealed on hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === i ? 1 : 0,
                    height: hoveredIndex === i ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden lg:ml-[calc(100%/12)]"
                >
                  <div className="pt-6 flex flex-wrap gap-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#0A0A0A]/35"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}

          {/* Final border */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-[#0A0A0A]/10 origin-left"
          />
        </div>
      </div>
    </section>
  );
}
