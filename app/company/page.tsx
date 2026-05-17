import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Hero } from "@/components/ui/Hero";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionContainer } from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "Company",
};

export default function CompanyPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Company"
        title="Engineering the future of additive production."
        description="Aediltech is a technology company focused on large-scale additive systems for architecture, construction and industry."
      />

      <SectionContainer>
        <PageIntro label="About" title="Built on precision and scale">
          <p>
            We develop integrated platforms that unite robotics, materials science
            and digital fabrication — enabling teams to move from concept to
            built reality with greater control and less waste.
          </p>
          <p>
            Our work spans R&D laboratories, pilot facilities and deployed
            production environments. Every system is designed for repeatability,
            traceability and long-term operation in demanding conditions.
          </p>
        </PageIntro>
      </SectionContainer>

      <SectionContainer border className="bg-surface">
        <div className="grid gap-16 md:grid-cols-3">
          {[
            {
              label: "Mission",
              text: "Advance additive manufacturing as a core production method for the built environment.",
            },
            {
              label: "Approach",
              text: "Combine hardware, software and materials in unified systems — not isolated components.",
            },
            {
              label: "Focus",
              text: "Architecture, construction, industrial production and applied research partnerships.",
            },
          ].map((item) => (
            <article key={item.label}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {item.label}
              </p>
              <p className="text-base leading-relaxed text-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <CTASection
        title="Partner with Aediltech."
        description="We work with forward-thinking teams across design, construction and manufacturing."
      />
    </>
  );
}
