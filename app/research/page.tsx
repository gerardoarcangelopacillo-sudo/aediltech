import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionContainer } from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "Research",
};

const programs = [
  {
    index: "01",
    title: "Material science",
    description:
      "Development and testing of formulations for structural performance, durability and environmental resistance.",
  },
  {
    index: "02",
    title: "Process engineering",
    description:
      "Deposition parameters, layer bonding and quality metrics for repeatable, certifiable output.",
  },
  {
    index: "03",
    title: "Automation & sensing",
    description:
      "Closed-loop control, in-process monitoring and data pipelines for production intelligence.",
  },
  {
    index: "04",
    title: "Academic partnerships",
    description:
      "Collaborative projects with universities and research institutes on next-generation built systems.",
  },
] as const;

export default function ResearchPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Research"
        title="Science that moves into production."
        description="R&D programs that bridge laboratory discovery with deployable additive systems."
      />

      <SectionContainer>
        <PageIntro label="R&D" title="Continuous innovation across the stack">
          <p>
            Research is embedded in our product development — not separated from it.
            Findings from material testing and process trials flow directly into platform
            updates and field deployments.
          </p>
        </PageIntro>
      </SectionContainer>

      <SectionContainer border className="bg-surface">
        <div className="divide-y divide-border border-y border-border">
          {programs.map((program) => (
            <article
              key={program.index}
              className="grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-12"
            >
              <p className="font-mono text-xs text-muted md:col-span-1">
                {program.index}
              </p>
              <h3 className="text-xl font-medium tracking-tight md:col-span-4 md:text-2xl">
                {program.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted md:col-span-7 md:text-base">
                {program.description}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <CTASection
        title="Collaborate on research."
        description="We welcome partnerships with academic and industrial research teams."
        ctaLabel="Start a conversation"
      />
    </>
  );
}
