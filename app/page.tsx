import Link from "next/link";
import { HomeLanding } from "@/components/home/HomeLanding";
import { ApplicationsGrid } from "@/components/ui/ApplicationsGrid";
import { FullscreenSection } from "@/components/ui/FullscreenSection";
import { SolutionsList } from "@/components/ui/SolutionsList";
import { TechnologiesGrid } from "@/components/ui/TechnologiesGrid";
import { applications, solutions, technologies } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HomeLanding />

      <FullscreenSection id="intro" border={false}>
        <p className="max-w-4xl text-[1.75rem] font-medium leading-[1.15] tracking-[-0.03em] text-foreground md:text-4xl md:leading-[1.12] lg:text-5xl lg:leading-[1.08]">
          We engineer deposition platforms, robotic cells and material formulations
          that connect digital design to physical production at architectural scale.
        </p>
      </FullscreenSection>

      <FullscreenSection id="technologies" className="bg-surface">
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between lg:mb-20">
          <div>
            <p className="section-label mb-4">Technologies</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl lg:text-5xl">
              Core capabilities
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted md:text-base">
            Integrated hardware, software and materials for demanding built-environment
            applications.
          </p>
        </div>
        <TechnologiesGrid items={technologies.slice(0, 4)} />
      </FullscreenSection>

      <FullscreenSection id="solutions">
        <div className="mb-14 md:mb-16 lg:mb-20">
          <p className="section-label mb-4">Solutions</p>
          <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-4xl lg:text-5xl lg:leading-[1.1]">
            From design studios to construction sites and industrial floors
          </h2>
        </div>
        <SolutionsList items={solutions} />
      </FullscreenSection>

      <FullscreenSection id="applications" className="bg-surface">
        <div className="mb-14 md:mb-16 lg:mb-20">
          <p className="section-label mb-4">Applications</p>
          <h2 className="max-w-xl text-3xl font-medium tracking-[-0.03em] md:text-4xl lg:text-5xl">
            Where our systems operate
          </h2>
        </div>
        <ApplicationsGrid items={applications} />
      </FullscreenSection>

      <FullscreenSection id="research">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="section-label mb-4">Research & development</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl lg:text-5xl lg:leading-[1.1]">
              Advancing the science of deposition
            </h2>
          </div>
          <div className="flex flex-col justify-center space-y-6 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Our R&D programs focus on material behaviour, process stability and scalable
              automation — bridging laboratory insight with field-ready systems.
            </p>
            <p>
              We collaborate with universities, manufacturers and project teams to validate
              new formulations and qualify production workflows.
            </p>
            <Link href="/research" className="link-arrow w-fit font-medium text-foreground">
              Research programs
            </Link>
          </div>
        </div>
      </FullscreenSection>

      <FullscreenSection id="contact" className="bg-surface">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Contact</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl lg:text-5xl lg:leading-[1.08]">
              Build with precision at scale.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Discuss your project requirements with our engineering team.
            </p>
          </div>
          <Link href="/contact" className="btn-primary group w-fit shrink-0">
            Get in touch
            <span className="btn-accent-line" aria-hidden />
          </Link>
        </div>
      </FullscreenSection>
    </>
  );
}
