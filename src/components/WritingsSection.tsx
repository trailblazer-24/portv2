"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";

export function WritingsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const posts = blogPosts.slice(0, 3);

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
      id="blog"
      ref={sectionRef}
      className="relative bg-[#111111] py-20 text-[#FAFAFA] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="relative mb-12 text-right sm:mb-14">
          <span
            className={`absolute -right-4 -top-8 font-mono text-[8rem] font-bold leading-none text-[#FAFAFA]/[0.03] transition-all duration-700 sm:-right-8 sm:-top-16 sm:text-[12rem] ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            06
          </span>

          <div className="relative">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#FAFAFA]/40">
              Latest posts
            </p>
            <h2 className="text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em]">
              Writings
            </h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div
              key={post.slug}
              className={`transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${80 * index}ms` }}
            >
              <Link
                href={`/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border border-[#FAFAFA]/10 p-5 transition-colors duration-300 hover:border-[#FAFAFA]/30 hover:bg-[#FAFAFA]/[0.03]"
              >
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[#FAFAFA]/40">
                  {post.date}
                </p>
                <h3 className="text-xl leading-tight tracking-[-0.015em] text-[#FAFAFA] transition-colors duration-300 group-hover:text-[#FAFAFA]">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FAFAFA]/60">
                  {post.description}
                </p>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <Link
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FAFAFA]/70 transition-colors hover:text-[#FAFAFA]"
          >
            View all writings
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}