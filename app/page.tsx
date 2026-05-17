import Link from "next/link";
import { ApplicationsGrid } from "@/components/ui/ApplicationsGrid";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { Reveal } from "@/components/ui/Reveal";
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

      <SectionContainer reveal={false}>
        <Reveal>
          <p className="max-w-4xl text-[1.625rem] font-medium leading-[1.2] tracking-[-0.03em] text-foreground md:text-4xl md:leading-[1.15] lg:text-[2.75rem] lg:leading-[1.12]">
            We engineer deposition platforms, robotic cells and material formulations
            that connect digital design to physical production at architectural scale.
          </p>
        </Reveal>
      </SectionContainer>

      <SectionContainer id="technologies" border>
        <div className="mb-20 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label mb-5">Technologies</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl lg:text-5xl">
              Core capabilities
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-[1.7] text-muted md:text-base">
            Integrated hardware, software and materials developed for demanding
            built-environment applications.
          </p>
        </div>
        <TechnologiesGrid items={technologies.slice(0, 4)} />
      </SectionContainer>

      <SectionContainer id="solutions" border className="bg-surface">
        <div className="mb-20 md:mb-24">
          <p className="section-label mb-5">Solutions</p>
          <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-4xl lg:text-5xl lg:leading-[1.1]">
            From design studios to construction sites and industrial floors
          </h2>
        </div>
        <SolutionsList items={solutions} />
      </SectionContainer>

      <SectionContainer id="applications" border>
        <div className="mb-20 md:mb-24">
          <p className="section-label mb-5">Applications</p>
          <h2 className="max-w-xl text-3xl font-medium tracking-[-0.03em] md:text-4xl lg:text-5xl">
            Where our systems operate
          </h2>
        </div>
        <ApplicationsGrid items={applications} />
      </SectionContainer>

      <SectionContainer border className="bg-surface">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-28">
          <div>
            <p className="section-label mb-5">Research & development</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl lg:text-5xl lg:leading-[1.1]">
              Advancing the science of deposition
            </h2>
          </div>
          <div className="space-y-7 text-base leading-[1.7] text-muted md:text-lg">
            <p>
              Our R&D programs focus on material behaviour, process stability and
              scalable automation — bridging laboratory insight with field-ready
              systems.
            </p>
            <p>
              We collaborate with universities, manufacturers and project teams to
              validate new formulations and qualify production workflows.
            </p>
            <Link href="/research" className="link-arrow font-medium text-foreground">
              Research programs
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
