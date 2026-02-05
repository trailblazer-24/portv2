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
    title: "Architecture Built for Your Use Case",
    description:
      "Every system is designed around your scale, data model, and business constraints—no generic templates or over-engineering.",
  },
  {
    number: "02",
    title: "Engineering-Led Collaboration",
    description:
      "You stay involved through technical discussions, architecture reviews, and clear documentation at every stage.",
  },
  {
    number: "03",
    title: "Scalable & Maintainable by Default",
    description:
      "Clean codebases, clear boundaries, and long-term maintainability are baked in from day one—not added later.",
  },
];

export function BenefitsSection() {
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
              Why Work With Me
            </span>
          </div>
          <div className="col-span-12 sm:col-span-8">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-[-0.02em]">
              Benefits of
              <br />
              collaboration
            </h2>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mt-20 grid grid-cols-12 gap-8">
          {BENEFITS.map((benefit, i) => (
            <div
              key={benefit.number}
              className={`col-span-12 sm:col-span-4 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              {/* Number */}
              <span className="block font-mono text-[4rem] font-bold leading-none text-[#FAFAFA]/10 dark:text-[#111111]/10 sm:text-[5rem]">
                {benefit.number}
              </span>

              {/* Content */}
              <div className="mt-4 border-t border-[#FAFAFA]/20 pt-6 dark:border-[#111111]/20">
                <h3 className="text-lg font-semibold tracking-tight">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#FAFAFA]/70 dark:text-[#111111]/70">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
