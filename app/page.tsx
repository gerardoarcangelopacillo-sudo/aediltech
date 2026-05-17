import Link from "next/link";
import { HomeLanding } from "@/components/home/HomeLanding";
import { ApplicationsGrid } from "@/components/ui/ApplicationsGrid";
import { FullscreenSection } from "@/components/ui/FullscreenSection";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { SolutionsList } from "@/components/ui/SolutionsList";
import { TechnologiesGrid } from "@/components/ui/TechnologiesGrid";
import { applicationImages, images } from "@/lib/images";
import { applications, solutions, technologies } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HomeLanding />

      <FullscreenSection id="intro" border={false} ambient>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="section-label mb-8">01 — Introduction</p>
          <p className="text-[1.75rem] font-medium leading-[1.12] tracking-[-0.03em] text-foreground md:text-[2.75rem] md:leading-[1.1] lg:text-6xl lg:leading-[1.06]">
            Deposition platforms, robotic cells and material systems that connect
            digital design to physical production at architectural scale.
          </p>
        </div>
      </FullscreenSection>

      <FullscreenSection id="technologies" className="bg-surface" ambient>
        <div className="mb-6 flex items-end justify-between gap-8 border-b border-border pb-10 md:mb-10 md:pb-14">
          <div>
            <p className="section-label mb-4">02 — Technology Systems</p>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl lg:leading-[1.06]">
              Integrated deposition stack
            </h2>
          </div>
          <span className="section-index hidden shrink-0 md:block" aria-hidden>
            02
          </span>
        </div>

        <div className="mb-14 grid gap-5 lg:mb-20 lg:grid-cols-2 lg:gap-6">
          <MediaPanel
            {...images.roboticPrinting}
            caption="Robotic Systems — deposition cell"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <MediaPanel
            {...images.polymerLfam}
            caption="PolyX — large-format process"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <TechnologiesGrid items={technologies} showLink />
      </FullscreenSection>

      <FullscreenSection id="solutions" ambient>
        <div className="mb-6 flex items-end justify-between gap-8 border-b border-border pb-10 md:mb-10 md:pb-14">
          <div>
            <p className="section-label mb-4">03 — Solutions</p>
            <h2 className="max-w-4xl text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl lg:leading-[1.08]">
              From design studios to construction sites and industrial floors
            </h2>
          </div>
          <span className="section-index hidden shrink-0 md:block" aria-hidden>
            03
          </span>
        </div>
        <SolutionsList items={solutions} />
      </FullscreenSection>

      <FullscreenSection id="applications" className="bg-surface" ambient>
        <div className="mb-6 flex items-end justify-between gap-8 border-b border-border pb-10 md:mb-10 md:pb-14">
          <div>
            <p className="section-label mb-4">04 — Applications</p>
            <h2 className="max-w-3xl text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Where our systems operate
            </h2>
          </div>
          <span className="section-index hidden shrink-0 md:block" aria-hidden>
            04
          </span>
        </div>
        <ApplicationsGrid items={applications} imageById={applicationImages} />
      </FullscreenSection>

      <FullscreenSection id="research" ambient>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          <div className="lg:col-span-5">
            <p className="section-label mb-4">05 — Research</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl lg:leading-[1.08]">
              Advancing the science of deposition
            </h2>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted md:text-lg">
              <p>
                R&D across Material Systems, TerraCem and PolyX — bridging
                laboratory insight with field-ready deposition workflows.
              </p>
              <p>
                We collaborate with universities, manufacturers and project teams
                to qualify formulations and production parameters.
              </p>
              <Link href="/research" className="link-arrow w-fit font-medium text-foreground">
                Research programs
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <MediaPanel
              {...images.researchMaterials}
              caption="Material Systems — formulation and testing"
              aspect="4/3"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
        </div>
      </FullscreenSection>

      <FullscreenSection id="contact" className="bg-surface" border={false} ambient>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="section-label mb-8">06 — Contact</p>
          <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl lg:text-6xl lg:leading-[1.08]">
            Build with precision at scale.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Discuss TerraCem, PolyX, MetalForm or Robotic Systems integration with
            our engineering team.
          </p>
          <Link href="/contact" className="btn-primary group mt-12 w-fit shrink-0">
            Get in touch
            <span className="btn-accent-line" aria-hidden />
          </Link>
        </div>
      </FullscreenSection>
    </>
  );
}
