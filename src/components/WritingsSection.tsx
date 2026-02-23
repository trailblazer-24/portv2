"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blogPosts";

export function WritingsSection() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="relative bg-[#111111] py-20 text-[#FAFAFA] sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="relative mb-12 text-right sm:mb-14">
          <motion.span
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-4 -top-8 font-mono text-[8rem] font-bold leading-none text-[#FAFAFA]/[0.03] sm:-right-8 sm:-top-16 sm:text-[12rem]"
          >
            06
          </motion.span>

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
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
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
            </motion.div>
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