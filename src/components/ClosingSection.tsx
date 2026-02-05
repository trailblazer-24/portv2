"use client";

import { useEffect, useRef, useState } from "react";

export function ClosingSection() {
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
      className="bg-[#FAFAFA] py-24 text-[#111111] dark:bg-[#111111] dark:text-[#FAFAFA] sm:py-3"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* CTA Section */}
        <div
          className={`border-y border-[#111111]/10 py-24 dark:border-[#FAFAFA]/10 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 sm:col-span-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50 dark:text-[#FAFAFA]/50">
                Let&apos;s Work Together
              </span>

              <h2 className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
                Have a project
                <br />
                in mind?
              </h2>

              <p className="mt-8 max-w-md text-lg leading-relaxed text-[#111111]/70 dark:text-[#FAFAFA]/70">
                Whether you&apos;re validating an idea or scaling an existing
                product, I help teams turn complexity into reliable,
                production-ready systems.
              </p>

              <a
                href="mailto:hello@biswajitrath.dev"
                className="group mt-10 inline-flex items-center gap-4 border border-[#111111] px-8 py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#111111] hover:text-[#FAFAFA] dark:border-[#FAFAFA] dark:hover:bg-[#FAFAFA] dark:hover:text-[#111111]"
              >
                Get in touch
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>

            {/* Contact info */}
            <div className="col-span-12 flex flex-col justify-end sm:col-span-4">
              <div className="space-y-8">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/50 dark:text-[#FAFAFA]/50">
                    Email
                  </span>
                  <a
                    href="mailto:hello@biswajitrath.dev"
                    className="link-underline mt-2 block text-sm"
                  >
                    hello@biswajitrath.dev
                  </a>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/50 dark:text-[#FAFAFA]/50">
                    Social
                  </span>
                  <div className="mt-2 flex flex-col gap-2">
                    <a href="#github" className="link-underline text-sm">
                      GitHub ↗
                    </a>
                    <a href="#linkedin" className="link-underline text-sm">
                      LinkedIn ↗
                    </a>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/50 dark:text-[#FAFAFA]/50">
                    Location
                  </span>
                  <p className="mt-2 text-sm">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className={`mt-12 grid grid-cols-12 gap-4 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "300ms" }}
        >
          <div className="col-span-12 sm:col-span-4">
            <span className="font-mono text-xs text-[#111111]/40 dark:text-[#FAFAFA]/40">
              © {new Date().getFullYear()} Biswajit Rath
            </span>
          </div>

          <div className="col-span-12 sm:col-span-4 sm:text-center">
            <span className="font-mono text-xs text-[#111111]/40 dark:text-[#FAFAFA]/40">
              Built with precision
            </span>
          </div>

          <div className="col-span-12 sm:col-span-4 sm:text-right">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 font-mono text-xs text-[#111111]/40 transition-colors hover:text-[#111111] dark:text-[#FAFAFA]/40 dark:hover:text-[#FAFAFA]"
            >
              Back to top
              <span className="transition-transform group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

