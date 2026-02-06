"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/BenefitsSection";
import { Footer } from "@/components/Footer";

export function PageContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isLoading ? "100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative"
      >
        <div id="top" />
        <Hero isReady={showContent} />
        <ProjectsSection />
        <AboutSection />
        <Footer />
      </motion.div>
    </>
  );
}
