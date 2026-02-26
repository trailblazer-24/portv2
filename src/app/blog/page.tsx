"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";
import { BlogPostIcon } from "@/components/BlogPostIcon";
import { SubscribeModal } from "@/components/SubscribeModal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#F5F2EE] text-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 pb-0 pt-0 sm:px-8 sm:pt-0">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[280px_1fr] lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-12 border-b pb-12 lg:sticky lg:top-24 lg:mb-0 lg:self-start lg:border-b-0 lg:border-r lg:border-[#0A0A0A]/8 lg:pb-0 lg:pr-12"
          >
            <h1 className="mb-4 text-[2.75rem] leading-[1.1] tracking-[-0.02em]">
              Beyond your API
            </h1>

            <p className="mb-6 text-[14px] leading-[1.65] text-[#0A0A0A]/60">
              Interactive blog posts on computer science and web development by{" "}
              <Link
                href="/"
                className="text-[#0A0A0A] underline decoration-1 underline-offset-2 transition-colors duration-200 hover:text-[#0A0A0A]/70"
              >
                Biswajit Rath
              </Link>
              .
            </p>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer rounded bg-[#0A0A0A] px-4 py-2 text-[13px] font-medium text-[#FAFAFA] transition-colors duration-200 hover:bg-[#0A0A0A]/90"
            >
              Subscribe
            </button>

            <div className="mt-20 hidden flex-col gap-4 text-[12px] text-[#0A0A0A]/35 lg:flex">
              <Link
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-[#0A0A0A]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="6" cy="18" r="2" fill="currentColor" />
                  <path
                    d="M4 10C9.523 10 14 14.477 14 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 4C12.837 4 20 11.163 20 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                RSS Feed
              </Link>
              <span>© 2026 Biswajit Rath</span>
            </div>
          </motion.div>

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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border-t border-[#0A0A0A]/8 transition-colors duration-300 hover:bg-[#0A0A0A]/[0.02]"
                  >
                    <div className="flex items-start gap-6 py-8 sm:gap-8 sm:py-10">
                      <div className="flex-shrink-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                        <BlogPostIcon icon={post.icon} />
                      </div>

                      <div className="min-w-0 flex-1 pt-1">
                        <h2 className="mb-2 text-[clamp(1.375rem,2.5vw,1.75rem)] font-normal leading-[1.3] tracking-[-0.01em] transition-colors duration-200 group-hover:text-[#0A0A0A]">
                          {post.title}
                        </h2>

                        <p className="mb-3 text-[13px] tracking-wide text-[#0A0A0A]/40">
                          {post.date}
                        </p>

                        <p className="text-[15px] leading-[1.7] text-[#0A0A0A]/60 transition-colors duration-200 group-hover:text-[#0A0A0A]/70">
                          {post.description}
                        </p>
                      </div>

                      <div className="-translate-x-2 flex-shrink-0 pt-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
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

            <div className="mt-1 border-t border-[#0A0A0A]/8" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-16 flex items-center gap-6 text-[13px] text-[#0A0A0A]/35 lg:hidden"
            >
              <Link href="/" className="transition-colors duration-200 hover:text-[#0A0A0A]">
                ← Back to home
              </Link>
              <Link
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-[#0A0A0A]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="6" cy="18" r="2" fill="currentColor" />
                  <path
                    d="M4 10C9.523 10 14 14.477 14 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 4C12.837 4 20 11.163 20 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                RSS Feed
              </Link>
              <span>© 2021 – 2026</span>
            </motion.div>
          </div>
        </div>
      </div>
      <SubscribeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}