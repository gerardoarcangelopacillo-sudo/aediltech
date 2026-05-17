import Link from "next/link";
import { ApplicationsGrid } from "@/components/ui/ApplicationsGrid";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SolutionsList } from "@/components/ui/SolutionsList";
import { TechnologiesGrid } from "@/components/ui/TechnologiesGrid";
import {
  applications,
  siteConfig,
  solutions,
  technologies,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Additive manufacturing · Robotics · Materials"
        title="Advanced systems for built environments."
        description={siteConfig.description}
        primaryCta={{ label: "Explore technologies", href: "/technologies" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <SectionContainer>
        <p className="max-w-4xl text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl lg:text-4xl">
          We engineer deposition platforms, robotic cells and material formulations
          that connect digital design to physical production at architectural scale.
        </p>
      </SectionContainer>

      <SectionContainer id="technologies" border>
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              Technologies
            </p>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Core capabilities
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Integrated hardware, software and materials developed for demanding
            built-environment applications.
          </p>
        </div>
        <TechnologiesGrid items={technologies.slice(0, 4)} />
      </SectionContainer>

      <SectionContainer id="solutions" border className="bg-surface">
        <div className="mb-16 md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted">
            Solutions
          </p>
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
            From design studios to construction sites and industrial floors
          </h2>
        </div>
        <SolutionsList items={solutions} />
      </SectionContainer>

      <SectionContainer id="applications" border>
        <div className="mb-16 md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted">
            Applications
          </p>
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            Where our systems operate
          </h2>
        </div>
        <ApplicationsGrid items={applications} />
      </SectionContainer>

      <SectionContainer border className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              Research & development
            </p>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Advancing the science of deposition
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Our R&D programs focus on material behaviour, process stability and
              scalable automation — bridging laboratory insight with field-ready
              systems.
            </p>
            <p>
              We collaborate with universities, manufacturers and project teams to
              validate new formulations and qualify production workflows.
            </p>
            <Link
              href="/research"
              className="inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors"
            >
              Research programs
              <span className="h-px w-8 bg-accent" />
            </Link>
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Build with precision at scale."
        description="Discuss your project requirements with our engineering team."
      />
    </>
  );
}
