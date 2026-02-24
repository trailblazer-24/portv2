"use client";

import { useEffect, useRef, useState } from "react";

type Benefit = {
  number: string;
  title: string;
  description: string;
};

const BENEFITS: Benefit[] = [
  {
    number: "01",
    title: "Custom Architecture",
    description:
      "Every system is designed around your scale, data model, and business constraints-no generic templates or over-engineering.",
  },
  {
    number: "02",
    title: "Engineering-Led",
    description:
      "You stay involved through technical discussions, architecture reviews, and clear documentation at every stage.",
  },
  {
    number: "03",
    title: "Built to Scale",
    description:
      "Clean codebases, clear boundaries, and long-term maintainability are baked in from day one-not added later.",
  },
];

export function BenefitsSection() {
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
      className="relative bg-[#111111] py-32 text-[#FAFAFA] dark:bg-[#F5F2EE] dark:text-[#111111] sm:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section header - RIGHT aligned */}
        <div className="relative mb-20 sm:mb-32">
          {/* Faded number */}
          <span
            className={`absolute -top-8 right-0 font-mono text-[8rem] font-bold leading-none text-[#FAFAFA]/[0.03] transition-all duration-700 dark:text-[#111111]/[0.03] sm:-top-16 sm:text-[12rem] ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            02
          </span>

          {/* Content - Right aligned */}
          <div className="relative text-right">
            <p
              className={`mb-4 font-mono text-xs uppercase tracking-widest text-[#FAFAFA]/40 transition-all duration-700 dark:text-[#111111]/40 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Why work with me
            </p>
            <h2
              className={`text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em] transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Benefits
            </h2>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
          {BENEFITS.map((benefit, i) => (
            <div
              key={benefit.number}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Number with hover effect */}
              <span
                className="block font-mono text-[6rem] font-bold leading-none text-[#FAFAFA] dark:text-[#111111] sm:text-[8rem]"
                style={{
                  transform: hoveredIndex === i ? "scale(1.1)" : "scale(1)",
                  opacity: hoveredIndex === i ? 0.15 : 0.05,
                  transition: "transform 0.4s ease, opacity 0.4s ease",
                }}
              >
                {benefit.number}
              </span>

              {/* Content */}
              <div className="relative -mt-8 sm:-mt-12">
                <div
                  style={{
                    transform: hoveredIndex === i ? "translateX(8px)" : "translateX(0)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#FAFAFA]/60 dark:text-[#111111]/60">
                    {benefit.description}
                  </p>

                  {/* Animated line */}
                  <div
                    className="mt-6 h-px w-16 origin-left bg-[#FAFAFA]/30 dark:bg-[#111111]/30"
                    style={{
                      transform: hoveredIndex === i ? "scaleX(1)" : "scaleX(0.3)",
                      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
