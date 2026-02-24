"use client";

import { useState, useEffect } from "react";

interface HeroProps {
  isReady?: boolean;
}

export function Hero({ isReady = true }: HeroProps) {
  const [showCTA, setShowCTA] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only trigger animations when isReady is true
    if (isReady) {
      setIsLoaded(true);
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      if (sections.length === 0) return;

      // Get the hero section (first section)
      const heroSection = sections[0];
      const heroRect = heroSection.getBoundingClientRect();

      // Get the last section
      const lastSection = sections[sections.length - 1];
      const lastSectionRect = lastSection.getBoundingClientRect();

      // Show CTA only between hero section and last section
      // Hero must be scrolled out AND last section must not be visible yet
      const heroScrolledOut = heroRect.top < 0;
      const lastSectionNotVisible = lastSectionRect.top > window.innerHeight;

      if (heroScrolledOut && lastSectionNotVisible) {
        setShowCTA(true);
      } else {
        setShowCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isReady]);

  return (
    <section className="relative min-h-screen bg-[#F5F2EE] text-[#111111] dark:bg-[#111111] dark:text-[#FAFAFA]">
      {/* Grid container */}
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-12 gap-4 px-6 py-6 sm:px-8">
        {/* Header */}
        <header
          className={`col-span-12 flex items-center justify-between border-b border-[#111111]/10 pb-4 dark:border-[#FAFAFA]/10 ${
            isLoaded ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="font-mono text-xs uppercase tracking-widest">
            Biswajit Rath
          </div>

          <nav className="flex items-center gap-8">
            <a
              href="#work"
              className="link-underline font-mono text-xs uppercase tracking-widest text-[#111111]/60 transition-colors hover:text-[#111111] dark:text-[#FAFAFA]/60 dark:hover:text-[#FAFAFA]"
            >
              Work
            </a>
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs uppercase tracking-widest text-[#111111]/60 transition-colors hover:text-[#111111] dark:text-[#FAFAFA]/60 dark:hover:text-[#FAFAFA]"
            >
              Blog
            </a>
            <a
              href="mailto:hello@biswajitrath.com"
              className="border border-[#111111] px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[#111111] hover:text-[#FAFAFA] dark:border-[#FAFAFA] dark:hover:bg-[#FAFAFA] dark:hover:text-[#111111]"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Hero content - asymmetric grid layout */}
        <div className="col-span-12 flex flex-col justify-center pt-16 sm:col-span-10 sm:col-start-1 lg:col-span-8">
          {/* Label */}
          <p
            className={`mb-6 font-mono text-xs uppercase tracking-widest text-[#111111]/50 dark:text-[#FAFAFA]/50 ${
              isLoaded ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Backend Developer
          </p>

          {/* Headline - dramatic Swiss typography */}
          <h1
            className={`text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] ${
              isLoaded ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Building systems
            <br />
            that scale.
          </h1>

          {/* Description */}
          <p
            className={`mt-12 max-w-md text-base leading-relaxed text-[#111111]/70 dark:text-[#FAFAFA]/70 sm:text-lg ${
              isLoaded ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            I design and implement backend systems.
            <br></br>APIs. Databases. Distributed services.
          </p>

          {/* CTA */}
          <div
            className={`mt-10 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            <div
              aria-hidden="true"
              className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest"
            >
              <span
                className={`h-px w-12 bg-[#111111] transition-all duration-300 group-hover:w-20 dark:bg-[#FAFAFA] ${
                  isLoaded ? "animate-line-grow" : "scale-x-0"
                }`}
                style={{ animationDelay: "600ms" }}
              />
            </div>
          </div>
        </div>

        {/* Stack - right column */}
        <div
          className={`col-span-12 flex flex-col justify-end pb-16 sm:col-span-2 sm:col-start-11 lg:col-span-3 lg:col-start-10 ${
            isLoaded ? "animate-slide-in-right" : "opacity-0"
          }`}
          style={{ animationDelay: "400ms" }}
        >
          <div className="border-t border-[#111111]/10 pt-4 dark:border-[#FAFAFA]/10">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#111111]/50 dark:text-[#FAFAFA]/50">
              Stack
            </p>
            <ul className="space-y-2 font-mono text-xs">
              <li>Java</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>AWS</li>
            </ul>
          </div>

          <div className="mt-8 border-t border-[#111111]/10 pt-4 dark:border-[#FAFAFA]/10">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#111111]/50 dark:text-[#FAFAFA]/50">
              Links
            </p>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href="https://www.linkedin.com/in/biswajitrath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111]/70 transition-colors hover:text-[#111111] dark:text-[#FAFAFA]/70 dark:hover:text-[#FAFAFA]"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="/Biswajit_Rath_Java_Developer_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111]/70 transition-colors hover:text-[#111111] dark:text-[#FAFAFA]/70 dark:hover:text-[#FAFAFA]"
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom index marker */}
        <div
          className={`col-span-12 mt-auto flex items-end justify-between border-t border-[#111111]/10 pt-4 dark:border-[#FAFAFA]/10 ${
            isLoaded ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/40 dark:text-[#FAFAFA]/40">
            Based in India
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/40 dark:text-[#FAFAFA]/40">
            Available for projects
          </span>
        </div>
      </div>

      {/* Floating CTA */}
      <div
        className={`fixed bottom-8 left-8 z-50 transition-all duration-500 ${
          showCTA
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <a
          href="mailto:hello@biswajitrath.dev"
          className="group flex items-center gap-3 border border-[#111111] bg-[#F5F2EE] px-4 py-3 transition-all duration-300 hover:bg-[#111111] hover:text-[#FAFAFA] dark:border-[#FAFAFA] dark:bg-[#111111] dark:hover:bg-[#FAFAFA] dark:hover:text-[#111111]"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            Get in touch
          </span>
          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "800ms" }}
      >
      </div>
    </section>
  );
}
