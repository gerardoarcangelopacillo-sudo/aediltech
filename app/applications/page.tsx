import type { Metadata } from "next";
import { ApplicationsGrid } from "@/components/ui/ApplicationsGrid";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { applications } from "@/lib/site";

export const metadata: Metadata = {
  title: "Applications",
};

export default function ApplicationsPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Applications"
        title="Proven across built environments."
        description="From facade systems to structural elements and industrial tooling — our platforms adapt to project demands."
      />

      <SectionContainer>
        <ApplicationsGrid items={applications} showLink={false} />
      </SectionContainer>

      <CTASection
        title="Have a specific application in mind?"
        description="Share your project context and we will assess feasibility and system fit."
      />
    </>
  );
}
