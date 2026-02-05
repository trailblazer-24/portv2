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
    title: "Problem Definition",
    description:
      "Clarifying business goals, constraints, scale expectations, and failure scenarios before writing a single line of code.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "Designing data models, service boundaries, and architecture with scalability, reliability, and cost in mind.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Building clean, testable services with clear contracts, following best practices for security and performance.",
  },
  {
    number: "04",
    title: "Testing & Validation",
    description:
      "Verifying correctness through automated tests, edge cases, and real-world scenarios before production rollout.",
  },
  {
    number: "05",
    title: "Deployment & Monitoring",
    description:
      "Shipping to production with CI/CD, observability, logging, and metrics to ensure long-term system health.",
  },
];

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
      className="bg-[#111111] py-24 text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#111111] sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section header */}
        <div
          className={`grid grid-cols-12 gap-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="col-span-12 sm:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FAFAFA]/50 dark:text-[#111111]/50">
              Process
            </span>
          </div>
          <div className="col-span-12 sm:col-span-8">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-[-0.02em]">
              A structured approach
              <br />
              to building systems
            </h2>
          </div>
        </div>

        {/* Process timeline */}
        <div className="mt-20 grid grid-cols-12 gap-8">
          {/* Left - Step numbers */}
          <div
            className={`col-span-12 sm:col-span-2 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="flex flex-row gap-4 sm:flex-col sm:gap-0">
              {STEPS.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className={`relative py-4 text-left font-mono text-sm transition-all duration-300 ${
                    activeStep === i
                      ? "text-[#FAFAFA] dark:text-[#111111]"
                      : "text-[#FAFAFA]/30 hover:text-[#FAFAFA]/60 dark:text-[#111111]/30 dark:hover:text-[#111111]/60"
                  }`}
                >
                  {step.number}
                  {activeStep === i && (
                    <span className="absolute bottom-0 left-0 hidden h-px w-full bg-[#FAFAFA] dark:bg-[#111111] sm:block" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`col-span-12 sm:col-span-10 sm:col-start-4 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="relative min-h-[200px]">
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className={`transition-all duration-500 ${
                    activeStep === i
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0"
                  }`}
                >
                  <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#FAFAFA]/70 dark:text-[#111111]/70">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-12 flex items-center gap-2">
                    {STEPS.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 w-8 transition-all duration-300 ${
                          idx <= activeStep
                            ? "bg-[#FAFAFA] dark:bg-[#111111]"
                            : "bg-[#FAFAFA]/20 dark:bg-[#111111]/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


