"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WritingsSection } from "@/components/WritingsSection";
import { ContactFooter } from "@/components/ContactFooter";

export function PageContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [shouldShowLoading, setShouldShowLoading] = useState<boolean | null>(null);
  const isContentSliding = shouldShowLoading && isLoading;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (mediaQuery.matches) {
      setShouldShowLoading(true);
      return;
    }

    setShouldShowLoading(false);
    setIsLoading(false);
    setShowContent(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {shouldShowLoading && isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      <div
        className="relative"
        style={{
          transform: isContentSliding ? "translateX(100%)" : undefined,
          transition: isContentSliding
            ? "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)"
            : undefined,
        }}
      >
        <div id="top" />
        <Hero isReady={showContent} />
        <ProjectsSection />
        <BenefitsSection />
        <ServicesSection />
        <ProcessSection />
        <ExperienceSection />
        <WritingsSection />
        <ContactFooter />
      </div>
    </>
  );
}
