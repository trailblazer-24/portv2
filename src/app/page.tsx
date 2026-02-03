import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ClosingSection } from "@/components/ClosingSection";

export default function Home() {
  return (
    <>
      <div id="top" />
      <Hero />
      <ProjectsSection />
      <BenefitsSection />
      <ServicesSection />
      <ProcessSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ClosingSection />
    </>
  );
}
