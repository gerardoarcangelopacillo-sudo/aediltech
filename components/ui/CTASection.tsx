import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type CTASectionProps = {
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({
  title,
  description,
  ctaLabel = "Get in touch",
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36 lg:px-16">
        <Reveal>
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
            <div className="max-w-2xl">
              <p className="section-label mb-5">Work with us</p>
              <h2 className="text-3xl font-medium tracking-[-0.03em] text-foreground md:text-4xl lg:text-5xl lg:leading-[1.08]">
                {title}
              </h2>
              {description && (
                <p className="mt-7 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
                  {description}
                </p>
              )}
            </div>
            <Link href={ctaHref} className="btn-primary group w-fit shrink-0">
              {ctaLabel}
              <span className="btn-accent-line" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
