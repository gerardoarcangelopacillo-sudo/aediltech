import Link from "next/link";
import { HomeLanding } from "@/components/home/HomeLanding";
import { ApplicationsGrid } from "@/components/ui/ApplicationsGrid";
import { FullscreenSection } from "@/components/ui/FullscreenSection";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { SolutionsList } from "@/components/ui/SolutionsList";
import { TechnologiesGrid } from "@/components/ui/TechnologiesGrid";
import { images } from "@/lib/images";
import { applications, solutions, technologies } from "@/lib/site";

const applicationImages = {
  facades: images.concretePrinting,
  structures: images.roboticPrinting,
  interiors: images.polymerLfam,
  infrastructure: images.concretePrinting,
  tooling: images.roboticPrinting,
  "material-rd": images.researchMaterials,
} as const;

export default function Home() {
  return (
    <>
      <HomeLanding />

      <FullscreenSection id="intro" border={false}>
        <p className="max-w-5xl text-[1.75rem] font-medium leading-[1.12] tracking-[-0.03em] text-foreground md:text-[2.75rem] md:leading-[1.1] lg:text-6xl lg:leading-[1.06]">
          We engineer deposition platforms, robotic cells and material formulations
          that connect digital design to physical production at architectural scale.
        </p>
      </FullscreenSection>

      <FullscreenSection id="technologies" className="bg-surface">
        <div className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label mb-4">Technologies</p>
            <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Core capabilities
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            Integrated hardware, software and materials for demanding built-environment
            applications.
          </p>
        </div>

        <div className="mb-16 grid gap-5 md:grid-cols-2 lg:gap-6">
          <MediaPanel
            src={images.roboticPrinting}
            alt="Robotic additive manufacturing system"
            caption="Robotic deposition platform — reference"
          />
          <MediaPanel
            src={images.polymerLfam}
            alt="Polymer large-format additive manufacturing"
            caption="Polymer LFAM process — reference"
          />
        </div>

        <TechnologiesGrid items={technologies.slice(0, 4)} />
      </FullscreenSection>

      <FullscreenSection id="solutions">
        <div className="mb-16 md:mb-20">
          <p className="section-label mb-4">Solutions</p>
          <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl lg:leading-[1.08]">
            From design studios to construction sites and industrial floors
          </h2>
        </div>
        <SolutionsList items={solutions} />
      </FullscreenSection>

      <FullscreenSection id="applications" className="bg-surface">
        <div className="mb-16 md:mb-20">
          <p className="section-label mb-4">Applications</p>
          <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Where our systems operate
          </h2>
        </div>
        <ApplicationsGrid items={applications} imageById={applicationImages} />
      </FullscreenSection>

      <FullscreenSection id="research">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div>
            <p className="section-label mb-4">Research & development</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl lg:leading-[1.08]">
              Advancing the science of deposition
            </h2>
            <div className="mt-12 space-y-6 text-base leading-relaxed text-muted md:text-lg">
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
          <MediaPanel
            src={images.researchMaterials}
            alt="Materials research laboratory"
            caption="Material formulation & testing — reference"
            aspect="4/3"
          />
        </div>
      </FullscreenSection>

      <FullscreenSection id="contact" className="bg-surface">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-20">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Contact</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl lg:leading-[1.08]">
              Build with precision at scale.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">
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
