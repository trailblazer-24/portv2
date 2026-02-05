"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
      "Every system is designed around your scale, data model, and business constraints—no generic templates or over-engineering.",
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
      "Clean codebases, clear boundaries, and long-term maintainability are baked in from day one—not added later.",
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
      className="relative bg-[#111111] py-32 text-[#FAFAFA] dark:bg-[#FAFAFA] dark:text-[#111111] sm:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section header - RIGHT aligned */}
        <div className="relative mb-20 sm:mb-32">
          {/* Faded number */}
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-8 right-0 font-mono text-[8rem] font-bold leading-none text-[#FAFAFA]/[0.03] dark:text-[#111111]/[0.03] sm:-top-16 sm:text-[12rem]"
          >
            02
          </motion.span>

          {/* Content - Right aligned */}
          <div className="relative text-right">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-mono text-xs uppercase tracking-widest text-[#FAFAFA]/40 dark:text-[#111111]/40"
            >
              Why work with me
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em]"
            >
              Benefits
            </motion.h2>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Number with hover effect */}
              <motion.span
                animate={{
                  scale: hoveredIndex === i ? 1.1 : 1,
                  opacity: hoveredIndex === i ? 0.15 : 0.05,
                }}
                transition={{ duration: 0.4 }}
                className="block font-mono text-[6rem] font-bold leading-none text-[#FAFAFA] dark:text-[#111111] sm:text-[8rem]"
              >
                {benefit.number}
              </motion.span>

              {/* Content */}
              <div className="relative -mt-8 sm:-mt-12">
                <motion.div
                  animate={{ x: hoveredIndex === i ? 8 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#FAFAFA]/60 dark:text-[#111111]/60">
                    {benefit.description}
                  </p>

                  {/* Animated line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === i ? 1 : 0.3 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 h-px w-16 origin-left bg-[#FAFAFA]/30 dark:bg-[#111111]/30"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
