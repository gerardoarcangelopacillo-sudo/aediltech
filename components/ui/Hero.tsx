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
      className={`relative overflow-hidden border-b border-border bg-background ${
        compact ? "py-28 md:py-36" : "min-h-svh"
      }`}
    >
      {!compact && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="hero-ambient-glow absolute inset-0 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        </div>
      )}

      <div
        className={`relative mx-auto flex w-full max-w-7xl flex-col px-6 md:px-10 lg:px-16 ${
          compact
            ? "gap-12"
            : "min-h-svh justify-between gap-20 py-28 md:gap-24 md:py-32 lg:py-36"
        }`}
      >
        <div
          className={`flex items-start justify-between gap-10 ${
            compact ? "" : "hero-enter hero-enter-1"
          }`}
        >
          {eyebrow ? (
            <p className="section-label max-w-xs leading-relaxed">{eyebrow}</p>
          ) : (
            <span />
          )}
          <CrossGraphic
            width={compact ? 88 : 120}
            className="brand-logo-inverse shrink-0"
            priority={!compact}
          />
        </div>

        <div className={`max-w-5xl ${compact ? "" : "hero-enter hero-enter-2"}`}>
          <h1
            className={`font-medium tracking-[-0.03em] text-foreground ${
              compact
                ? "text-4xl leading-[1.08] md:text-5xl lg:text-6xl"
                : "text-[2.75rem] leading-[1.02] md:text-7xl lg:text-[5.25rem] lg:leading-[1.02]"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`mt-8 max-w-2xl leading-relaxed text-muted ${
                compact
                  ? "text-lg md:text-xl"
                  : "text-lg md:mt-10 md:text-xl lg:text-2xl lg:leading-relaxed"
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {(primaryCta || secondaryCta) && (
          <div
            className={`flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10 ${
              compact ? "" : "hero-enter hero-enter-3"
            }`}
          >
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary group w-fit">
                {primaryCta.label}
                <span className="btn-accent-line" aria-hidden />
              </Link>
            )}
            {secondaryCta && (
              <>
                {primaryCta && (
                  <span className="hidden h-8 w-px bg-border sm:block" aria-hidden />
                )}
                <Link
                  href={secondaryCta.href}
                  className="link-arrow w-fit text-[13px] uppercase tracking-[0.12em]"
                >
                  {secondaryCta.label}
                </Link>
              </>
            )}
          </div>
        )}

        {!compact && (
          <div className="hero-enter hero-enter-4 hidden items-end justify-between border-t border-border pt-8 lg:flex">
            <p className="section-label">Scroll to explore</p>
            <CrossGraphic width={48} className="brand-logo-inverse" />
          </div>
        )}
      </div>
    </section>
  );
}
