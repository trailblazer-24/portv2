"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Exceptional attention to detail and deep understanding of system design. Delivered a solution that scaled beyond our expectations.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Fintech Startup",
  },
  {
    quote:
      "Clear communication, clean code, and always on time. A rare combination that made our collaboration seamless.",
    name: "Michael Torres",
    role: "Product Lead",
    company: "Digital Agency",
  },
  {
    quote:
      "Transformed our monolithic nightmare into a maintainable microservices architecture. Performance improved 10x.",
    name: "Emma Williams",
    role: "Engineering Manager",
    company: "E-commerce Platform",
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
            06
          </motion.span>

          {/* Content */}
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 font-mono text-xs uppercase tracking-widest text-[#FAFAFA]/40"
            >
              Kind words
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-[clamp(4rem,12vw,10rem)] font-extrabold leading-[0.85] tracking-[-0.045em]"
            >
              Voices
            </motion.h2>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(i)}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <motion.div
                animate={{
                  backgroundColor:
                    hoveredIndex === i
                      ? "rgba(250, 250, 250, 0.05)"
                      : "transparent",
                }}
                transition={{ duration: 0.3 }}
                className="relative h-full border border-[#FAFAFA]/10 p-8 transition-colors duration-300 hover:border-[#FAFAFA]/30"
              >
                {/* Quote mark */}
                <motion.span
                  animate={{
                    opacity: hoveredIndex === i ? 0.2 : 0.05,
                    scale: hoveredIndex === i ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-2 left-6 font-serif text-8xl text-[#FAFAFA]"
                >
                  &ldquo;
                </motion.span>

                {/* Quote */}
                <p className="relative z-10 text-lg leading-relaxed text-[#FAFAFA]/80">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="relative z-10 mt-8 flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <motion.div
                    animate={{
                      borderColor:
                        hoveredIndex === i
                          ? "rgba(250, 250, 250, 0.3)"
                          : "rgba(250, 250, 250, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-12 w-12 items-center justify-center border text-lg font-bold"
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>

                  <div>
                    <motion.p
                      animate={{ x: hoveredIndex === i ? 4 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-semibold"
                    >
                      {testimonial.name}
                    </motion.p>
                    <p className="text-sm text-[#FAFAFA]/40">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Index indicator */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 right-4 font-mono text-xs text-[#FAFAFA]/30"
                >
                  0{i + 1}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex justify-center gap-3"
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 transition-all duration-300 ${
                activeIndex === i
                  ? "w-8 bg-[#FAFAFA]"
                  : "w-2 bg-[#FAFAFA]/30 hover:bg-[#FAFAFA]/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
