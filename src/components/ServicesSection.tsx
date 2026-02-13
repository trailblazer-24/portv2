"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
      "Designing scalable, fault-tolerant backend systems with clear service boundaries.",
  },
  {
    number: "02",
    title: "API Development",
    description:
      "Building clean, well-documented REST and GraphQL APIs for performance.",
  },
  {
    number: "03",
    title: "Auth & Security",
    description:
      "Implementing secure authentication and data protection best practices.",
  },
  {
    number: "04",
    title: "Performance",
    description:
      "Identifying bottlenecks and improving latency across the stack.",
  },
  {
    number: "05",
    title: "Cloud & DevOps",
    description:
      "Deploying and scaling systems using modern cloud infrastructure.",
  },
  {
    number: "06",
    title: "Integration",
    description:
      "Connecting services and APIs into a cohesive, reliable system.",
  },
];

export function ServicesSection() {
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
      className="relative bg-[#F5F2EE] py-32 text-[#111111] dark:bg-[#111111] dark:text-[#FAFAFA] sm:py-40"
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
            03
          </motion.span>

          {/* Content */}
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-mono text-xs uppercase tracking-widest text-[#111111]/40 dark:text-[#FAFAFA]/40"
            >
              What I offer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em]"
            >
              Services
            </motion.h2>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              {/* Hover indicator */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === i ? "100%" : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-4 left-0 h-px bg-[#111111] dark:bg-[#FAFAFA]"
              />

              {/* Number */}
              <motion.span
                animate={{
                  x: hoveredIndex === i ? 4 : 0,
                  color:
                    hoveredIndex === i
                      ? "rgba(17, 17, 17, 0.8)"
                      : "rgba(17, 17, 17, 0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="font-mono text-xs dark:text-[#FAFAFA]/20"
              >
                {service.number}
              </motion.span>

              {/* Title */}
              <motion.h3
                animate={{ x: hoveredIndex === i ? 8 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-lg font-semibold tracking-tight sm:text-xl"
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-[#111111]/60 dark:text-[#FAFAFA]/60">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="mailto:hello@biswajitrath.dev"
            className="group inline-flex items-center gap-4 font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-60"
          >
            <span className="h-px w-8 bg-[#111111] transition-all duration-300 group-hover:w-12 dark:bg-[#FAFAFA]" />
            Discuss your project
            <span className="h-px w-8 bg-[#111111] transition-all duration-300 group-hover:w-12 dark:bg-[#FAFAFA]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

