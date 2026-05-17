import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SolutionsList } from "@/components/ui/SolutionsList";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
};

export default function SolutionsPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Solutions"
        title="Production systems tailored to your sector."
        description="Configurable platforms and workflows for design, construction, industry and research."
      />

      <SectionContainer>
        <SolutionsList items={solutions} showLink={false} />
      </SectionContainer>

      <CTASection
        title="Find the right configuration."
        description="We scope projects from pilot installations to full production lines."
      />
    </>
  );
}
