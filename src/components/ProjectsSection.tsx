"use client";

import { useEffect, useRef, useState } from "react";

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
              Selected Work
            </span>
          </div>
          <div className="col-span-12 sm:col-span-8">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-[-0.02em]">
              Systems I&apos;ve designed
              <br />
              and built in production
            </h2>
          </div>
        </div>

        {/* Projects list */}
        <div className="mt-16">
          {PROJECTS.map((project, i) => (
            <ProjectRow
              key={project.title}
              project={project}
              isVisible={isVisible}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  isVisible,
  delay,
}: {
  project: Project;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <article
      className={`group grid grid-cols-12 gap-4 border-b border-[#111111]/10 py-8 transition-colors duration-300 hover:bg-[#111111]/[0.02] dark:border-[#FAFAFA]/10 dark:hover:bg-[#FAFAFA]/[0.02] ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Index */}
      <div className="col-span-2 sm:col-span-1">
        <span className="font-mono text-xs text-[#111111]/40 dark:text-[#FAFAFA]/40">
          {project.index}
        </span>
      </div>

      {/* Title & Year */}
      <div className="col-span-10 sm:col-span-3">
        <h3 className="text-lg font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2">
          {project.title}
        </h3>
        <span className="mt-1 block font-mono text-xs text-[#111111]/50 dark:text-[#FAFAFA]/50">
          {project.year}
        </span>
      </div>

      {/* Description */}
      <div className="col-span-12 mt-4 sm:col-span-5 sm:mt-0">
        <p className="text-sm leading-relaxed text-[#111111]/70 dark:text-[#FAFAFA]/70">
          {project.description}
        </p>
      </div>

      {/* Stack */}
      <div className="col-span-12 mt-4 sm:col-span-3 sm:mt-0 sm:text-right">
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-[#111111]/50 dark:text-[#FAFAFA]/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
