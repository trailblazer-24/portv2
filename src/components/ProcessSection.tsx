"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-4 -top-8 font-mono text-[8rem] font-bold leading-none text-[#FAFAFA]/[0.03] sm:-right-8 sm:-top-16 sm:text-[12rem]"
          >
            04
          </motion.span>

          {/* Content */}
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-mono text-xs uppercase tracking-widest text-[#FAFAFA]/40"
            >
              How I work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em]"
            >
              Process
            </motion.h2>
          </div>
        </div>

        {/* Process steps - horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-[28px] hidden h-px w-full origin-left bg-[#FAFAFA]/20 lg:block"
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Step indicator */}
                <motion.div
                  animate={{
                    scale: hoveredIndex === i ? 1.2 : 1,
                    backgroundColor:
                      hoveredIndex === i ? "#FAFAFA" : "transparent",
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center border border-[#FAFAFA]/30"
                >
                  <motion.span
                    animate={{
                      color: hoveredIndex === i ? "#111111" : "#FAFAFA",
                    }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-sm"
                  >
                    {step.number}
                  </motion.span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  animate={{ x: hoveredIndex === i ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-3 text-xl font-semibold tracking-tight"
                >
                  {step.title}
                </motion.h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#FAFAFA]/60">
                  {step.description}
                </p>

                {/* Hover line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === i ? "40px" : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4 h-px bg-[#FAFAFA]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


