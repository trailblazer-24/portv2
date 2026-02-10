"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Post = {
  title: string;
  summary: string;
  date: string;
  readTime: string;
};

const POSTS: Post[] = [
  {
    title: "Why I stopped using ORMs in production",
    summary:
      "ORMs abstract away the wrong things. After years of debugging generated queries, I switched to raw SQL with type-safe query builders—and never looked back.",
    date: "Jan 2026",
    readTime: "6 min",
  },
  {
    title: "Designing idempotent APIs from day one",
    summary:
      "Retries are inevitable. If your endpoints aren't idempotent, you're building on a foundation that will crack under real-world traffic patterns.",
    date: "Dec 2025",
    readTime: "8 min",
  },
  {
    title: "The case for boring technology",
    summary:
      "PostgreSQL, Redis, a message queue. Most systems don't need more than this. The hard part is knowing when they do.",
    date: "Nov 2025",
    readTime: "5 min",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative bg-[#FAFAFA] py-8 sm:py-10"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[13px] font-medium text-[#0A0A0A]/50 tracking-[-0.01em] uppercase letter-spacing"
        >
          Writing
        </motion.h2>

        {/* Posts */}
        <div className="mt-8">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="group border-t border-[#0A0A0A]/[0.06] py-5 sm:py-6 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[11px] text-[#0A0A0A]/25">
                      {post.date}
                    </span>
                    <span className="text-[#0A0A0A]/10 select-none" aria-hidden="true">
                      &middot;
                    </span>
                    <span className="font-mono text-[11px] text-[#0A0A0A]/25">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-medium tracking-[-0.01em] text-[#0A0A0A] group-hover:text-[#0A0A0A]/70 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.75] text-[#0A0A0A]/55">
                    {post.summary}
                  </p>
                </div>

                <span
                  className="mt-5 text-[14px] text-[#0A0A0A]/0 group-hover:text-[#0A0A0A]/40 transition-colors duration-300 shrink-0"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </div>
            </motion.article>
          ))}

          <div className="border-t border-[#0A0A0A]/[0.06] mt-2" />
        </div>

        {/* Subscribe */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6"
        >
          <p className="text-[15px] text-[#0A0A0A]/50 mb-3 leading-[1.7]">
            Occasional writing on backend engineering, system design,
            and the tools I use. No spam.
          </p>

          {submitted ? (
            <p className="text-[14px] text-[#0A0A0A]/50">
              Thanks - you&apos;re on the list.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 h-9 px-3 text-[13px] bg-transparent border border-[#0A0A0A]/10 rounded-none text-[#0A0A0A] placeholder:text-[#0A0A0A]/20 focus:outline-none focus:border-[#0A0A0A]/30 transition-colors duration-200"
              />
              <button
                type="submit"
                className="h-9 px-6 text-[13px] font-medium text-[#FAFAFA] bg-[#0A0A0A] border border-[#0A0A0A] hover:bg-[#0A0A0A]/85 hover:border-[#0A0A0A]/85 transition-all duration-200 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
