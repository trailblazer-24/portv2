"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  year: string;
  description: string;
  stack: string[];
  index: string;
  url: string;
};

const PROJECTS: Project[] = [
  {
    index: "00",
    title: "Smart Contact Manager",
    year: "2024",
    description:
      "Secure web application built with Java Spring Boot that helps users manage their personal and professional contacts efficiently.",
    stack: ["Springboot", "PostgreSQL", "Maven", "AWS"],
    url: "/coming-soon",
  },
  {
    index: "01",
    title: "Whiteboard Now",
    year: "2024",
    description:
      "A real-time collaborative online whiteboard inspired by tools like Miro. It allows teams to brainstorm, plan, and organize ideas visually in a shared digital workspace.",
    stack: ["NextJS", "Socket.io", "Clerk", "Vercel"],
    url: "https://whiteboard.biswajitrath.com/",
  },
  {
    index: "02",
    title: "Status200",
    year: "2025",
    description:
      "Search engine for public APIs. Browse thousands of endpoints, test them instantly in your browser, and generate client code with AI.",
    stack: ["NodeJS", "GeminiAPI", "Github", "Vercel"],
    url: "https://status200.biswajitrath.com/",
  }
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
      className="relative bg-[#F5F2EE] py-32 text-[#111111] dark:bg-[#111111] dark:text-[#FAFAFA] sm:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="relative mb-20 sm:mb-32">
          <span
            className={`absolute -left-4 -top-8 font-mono text-[8rem] font-bold leading-none text-[#111111]/[0.03] transition-all duration-700 dark:text-[#FAFAFA]/[0.03] sm:-left-8 sm:-top-16 sm:text-[12rem] ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            01
          </span>

          {/* Content */}
          <div className="relative">
            <p
              className={`mb-4 font-mono text-xs uppercase tracking-widest text-[#111111]/40 transition-all duration-700 dark:text-[#FAFAFA]/40 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Selected work
            </p>
            <h2
              className={`text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em] transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Projects
            </h2>
          </div>
        </div>

        <div className="space-y-0">
          {PROJECTS.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative block cursor-pointer border-t border-[#111111]/10 py-8 transition-all duration-500 dark:border-[#FAFAFA]/10 sm:py-12 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 -mx-6 origin-left bg-[#111111]/[0.02] dark:bg-[#FAFAFA]/[0.02] sm:-mx-8"
                style={{
                  transform: hoveredIndex === i ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
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
                  <span
                    className="text-lg transition-all duration-300"
                    style={{
                      transform: hoveredIndex === i ? "translateX(0)" : "translateX(-10px)",
                      opacity: hoveredIndex === i ? 1 : 0,
                    }}
                  >
                    →
                  </span>
                </div>
              </div>

              {/* Stack tags - appear on hover */}
              <div
                className="relative mt-4 flex flex-wrap gap-2 sm:mt-6"
                style={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  transform: hoveredIndex === i ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s",
                }}
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] uppercase tracking-wider text-[#111111]/50 dark:text-[#FAFAFA]/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
