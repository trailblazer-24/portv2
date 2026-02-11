"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";
import { BlogPostIcon } from "@/components/BlogPostIcon";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-16 sm:pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 lg:gap-0">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="lg:sticky lg:top-24 lg:self-start lg:pr-12 lg:border-r lg:border-[#0A0A0A]/8 pb-12 lg:pb-0 mb-12 lg:mb-0 border-b lg:border-b-0"
          >
            <h1 className="text-[2.75rem] font leading-[1.1] tracking-[-0.02em] mb-4">
              Beyond your API
            </h1>
            
            <p className="text-[14px] leading-[1.65] text-[#0A0A0A]/60 mb-6">
              Interactive blog posts on computer science and web development by{" "}
              <Link href="/" className="text-[#0A0A0A] underline decoration-1 underline-offset-2 hover:text-[#0A0A0A]/70 transition-colors duration-200">Biswajit Rath</Link>.
            </p>

            <button className="px-4 py-2 bg-[#0A0A0A] text-[#FAFAFA] text-[13px] font-medium rounded hover:bg-[#0A0A0A]/90 transition-colors duration-200">
              Subscribe
            </button>

            {/* Footer - visible on desktop */}
            <div className="hidden lg:flex flex-col gap-4 mt-20 text-[12px] text-[#0A0A0A]/35">
              <span>© 2026 Biswajit Rath</span>
            </div>
          </motion.div>

          {/* Right Column - Blog Posts */}
          <div className="lg:pl-12">
            <div className="space-y-1">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05, ease }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block border-t border-[#0A0A0A]/8 hover:bg-[#0A0A0A]/[0.02] transition-colors duration-300"
                  >
                    <div className="py-8 sm:py-10 flex items-start gap-6 sm:gap-8">
                      {/* Icon */}
                      <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        <BlogPostIcon icon={post.icon} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 pt-1">
                        <h2 className="text-[clamp(1.375rem,2.5vw,1.75rem)] font-normal leading-[1.3] tracking-[-0.01em] mb-2 group-hover:text-[#0A0A0A] transition-colors duration-200">
                          {post.title}
                        </h2>
                        
                        <p className="text-[13px] text-[#0A0A0A]/40 mb-3 tracking-wide">
                          {post.date}
                        </p>
                        
                        <p className="text-[15px] leading-[1.7] text-[#0A0A0A]/60 group-hover:text-[#0A0A0A]/70 transition-colors duration-200">
                          {post.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0 pt-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#0A0A0A]"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom border for last item */}
            <div className="border-t border-[#0A0A0A]/8 mt-1" />

            {/* Footer - visible on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="lg:hidden mt-16 flex items-center gap-6 text-[13px] text-[#0A0A0A]/35"
            >
              <Link
                href="/"
                className="hover:text-[#0A0A0A] transition-colors duration-200"
              >
                ← Back to home
              </Link>
              <span>© 2021 – 2026</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
