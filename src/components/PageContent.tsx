"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/BenefitsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

export function PageContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div id="top" />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <BlogSection />
      <Footer />
    </motion.div>
  );
}
