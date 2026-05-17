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
        eyebrow="Technologies"
        title="Integrated systems for deposition at scale."
        description="Hardware, software and materials developed as a single platform — from path planning to finished build."
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
