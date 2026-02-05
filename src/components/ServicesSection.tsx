"use client";

import { useEffect, useRef, useState } from "react";

type Service = {
  number: string;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Backend Architecture",
    description:
      "Designing scalable, fault-tolerant backend systems with clear service boundaries and long-term maintainability.",
  },
  {
    number: "02",
    title: "API Design & Development",
    description:
      "Building clean, well-documented REST and GraphQL APIs optimized for performance and developer experience.",
  },
  {
    number: "03",
    title: "Auth & Security",
    description:
      "Implementing secure authentication, authorization, and data protection using industry best practices.",
  },
  {
    number: "04",
    title: "Performance Optimization",
    description:
      "Identifying bottlenecks and improving latency, throughput, and reliability across the stack.",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "Deploying, scaling, and maintaining systems using modern cloud infrastructure and CI/CD pipelines.",
  },
  {
    number: "06",
    title: "System Integration",
    description:
      "Connecting services, third-party APIs, and internal tools into a cohesive, reliable system.",
  },
];

export function ServicesSection() {
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
              Services
            </span>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-[-0.02em]">
              Engineering services
            </h2>
          </div>
          <div className="col-span-12 sm:col-span-2 sm:text-right">
            <a
              href="mailto:hello@biswajitrath.dev"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
            >
              Discuss
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-16">
          {SERVICES.map((service, i) => (
            <div
              key={service.number}
              className={`col-span-12 sm:col-span-6 lg:col-span-4 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Number */}
              <span className="font-mono text-xs text-[#111111]/30 dark:text-[#FAFAFA]/30">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-[#111111]/60 dark:text-[#FAFAFA]/60">
                {service.description}
              </p>

              {/* Decorative line */}
              <div
                className={`mt-6 h-px w-12 bg-[#111111] dark:bg-[#FAFAFA] ${
                  isVisible ? "animate-line-grow" : "scale-x-0"
                }`}
                style={{ animationDelay: `${(i + 1) * 100 + 300}ms` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

