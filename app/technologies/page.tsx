import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TechnologiesGrid } from "@/components/ui/TechnologiesGrid";
import { technologies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technologies",
};

export default function TechnologiesPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Technology Systems"
        title="TerraCem, PolyX, MetalForm and beyond."
        description="Integrated deposition hardware, robotic cells and material systems — from path planning to certified production."
      />

      <SectionContainer>
        <TechnologiesGrid items={technologies} showLink={false} />
      </SectionContainer>

      <CTASection
        title="Discuss your technical requirements."
        description="Our engineering team supports specification, integration and deployment."
        ctaLabel="Contact engineering"
      />
    </>
  );
}
