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
        <div className="border-y border-border">
          {programs.map((program) => (
            <article
              key={program.index}
              className="group relative grid gap-8 border-t border-border py-14 first:border-t-0 md:grid-cols-12 md:gap-10 md:py-16"
            >
              <span
                className="absolute left-0 top-0 h-0 w-px bg-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-full"
                aria-hidden
              />
              <div className="md:col-span-2">
                <span className="block text-5xl font-medium leading-none tracking-tighter text-border-subtle transition-colors duration-500 group-hover:text-foreground md:text-6xl">
                  {program.index}
                </span>
              </div>
              <h3 className="text-xl font-medium tracking-[-0.02em] md:col-span-4 md:text-2xl">
                {program.title}
              </h3>
              <p className="text-sm leading-[1.7] text-muted md:col-span-6 md:text-base">
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
