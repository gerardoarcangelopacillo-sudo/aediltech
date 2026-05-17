import Link from "next/link";
import { CrossGraphic } from "@/components/ui/CrossGraphic";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-border ${
        compact ? "py-24 md:py-32" : "min-h-[85vh] py-28 md:min-h-[90vh] md:py-36"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-16 px-6 md:px-10 lg:min-h-[inherit] lg:px-16">
        <div className="flex items-start justify-between gap-8">
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
              {eyebrow}
            </p>
          )}
          <CrossGraphic
            size={compact ? 120 : 180}
            className="shrink-0 text-foreground/20 md:text-foreground/30"
          />
        </div>

        <div className="max-w-5xl">
          <h1 className="text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {description}
            </p>
          )}
        </div>

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap items-center gap-6">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center gap-3 border border-foreground px-6 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-foreground hover:text-background"
              >
                {primaryCta.label}
                <span className="h-px w-6 bg-accent transition-all group-hover:w-10" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
