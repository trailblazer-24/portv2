"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  number: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a deep dive into your project requirements, goals, and constraints.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "I design a scalable system blueprint with clear component boundaries.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Clean, tested code delivered incrementally with regular check-ins.",
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Launch with CI/CD pipelines, monitoring, and documentation in place.",
  },
];

export function ProcessSection() {
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
      className="relative bg-[#111111] py-32 text-[#FAFAFA] sm:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section header - RIGHT aligned */}
        <div className="relative mb-20 text-right sm:mb-32">
          {/* Faded number */}
          <span
            className={`absolute -right-4 -top-8 font-mono text-[8rem] font-bold leading-none text-[#FAFAFA]/[0.03] transition-all duration-700 sm:-right-8 sm:-top-16 sm:text-[12rem] ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            04
          </span>

          {/* Content */}
          <div className="relative">
            <p
              className={`mb-4 font-mono text-xs uppercase tracking-widest text-[#FAFAFA]/40 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              How I work
            </p>
            <h2
              className={`text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em] transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Process
            </h2>
          </div>
        </div>

        {/* Process steps - horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-0 top-[28px] hidden h-px w-full origin-left bg-[#FAFAFA]/20 lg:block"
            style={{
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                {/* Step indicator */}
                <div
                  className="relative z-20 mb-6 flex h-14 w-14 items-center justify-center border border-[#FAFAFA]/30"
                  style={{
                    transform: hoveredIndex === i ? "scale(1.2)" : "scale(1)",
                    backgroundColor: hoveredIndex === i ? "#FAFAFA" : "#111111",
                    transition: "transform 0.3s ease, background-color 0.3s ease",
                  }}
                >
                  <span
                    className="font-mono text-sm"
                    style={{
                      color: hoveredIndex === i ? "#111111" : "#FAFAFA",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-xl font-semibold tracking-tight"
                  style={{
                    transform: hoveredIndex === i ? "translateX(4px)" : "translateX(0)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#FAFAFA]/60">
                  {step.description}
                </p>

                {/* Hover line */}
                <div
                  className="mt-4 h-px bg-[#FAFAFA]"
                  style={{
                    width: hoveredIndex === i ? "40px" : 0,
                    transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


