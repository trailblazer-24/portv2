"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Biswajit played a critical role in stabilizing and scaling our backend. The system became more reliable, faster, and far easier to maintain after his involvement.",
    name: "Mike Jackson",
    role: "CEO",
    company: "XYZ Corp",
  },
  {
    quote:
      "Working with Biswajit felt like having a senior engineer on the team. He asked the right questions early and designed solutions that held up under real usage.",
    name: "John Smith",
    role: "Founder",
    company: "GreenLeaf Digital",
  },
  {
    quote:
      "Our backend performance improved significantly after launch. Checkout issues dropped, response times improved, and the system handled peak traffic without issues.",
    name: "Emily Chen",
    role: "E-Commerce Manager",
    company: "Trendy",
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
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
              Testimonials
            </span>
          </div>
          <div className="col-span-12 sm:col-span-8">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1] tracking-[-0.02em]">
              What clients say
            </h2>
          </div>
        </div>

        {/* Testimonial display */}
        <div className="mt-20 grid grid-cols-12 gap-8">
          {/* Quote */}
          <div
            className={`col-span-12 sm:col-span-9 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="relative min-h-[200px]">
              {TESTIMONIALS.map((testimonial, i) => (
                <blockquote
                  key={testimonial.name}
                  className={`transition-all duration-700 ${
                    activeIndex === i
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0"
                  }`}
                >
                  <p className="text-[clamp(1.25rem,3vw,2rem)] font-medium leading-[1.4] tracking-tight">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <footer className="mt-8 flex items-center gap-4">
                    {/* Avatar placeholder */}
                    <div className="flex h-12 w-12 items-center justify-center border border-[#FAFAFA]/20 font-mono text-xs dark:border-[#111111]/20">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <cite className="not-italic">
                        <span className="block font-semibold">
                          {testimonial.name}
                        </span>
                        <span className="block text-sm text-[#FAFAFA]/60 dark:text-[#111111]/60">
                          {testimonial.role}, {testimonial.company}
                        </span>
                      </cite>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div
            className={`col-span-12 flex items-end sm:col-span-3 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="flex w-full flex-row justify-between gap-4 sm:flex-col sm:items-end">
              {/* Indicators */}
              <div className="flex gap-2 sm:flex-col">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1 w-8 transition-all duration-300 sm:h-8 sm:w-1 ${
                      activeIndex === i
                        ? "bg-[#FAFAFA] dark:bg-[#111111]"
                        : "bg-[#FAFAFA]/20 hover:bg-[#FAFAFA]/40 dark:bg-[#111111]/20 dark:hover:bg-[#111111]/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <span className="font-mono text-sm text-[#FAFAFA]/50 dark:text-[#111111]/50">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
