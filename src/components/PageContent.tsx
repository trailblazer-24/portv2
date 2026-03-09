"use client";

import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WritingsSection } from "@/components/WritingsSection";
import { ContactFooter } from "@/components/ContactFooter";

export function PageContent() {
  return (
    <div className="relative">
      <div id="top" />
      <Hero />
      <ProjectsSection />
      <BenefitsSection />
      <ServicesSection />
      <ProcessSection />
      <ExperienceSection />
      <WritingsSection />
      <ContactFooter />
    </div>
  );
}
