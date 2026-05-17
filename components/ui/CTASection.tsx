import Link from "next/link";

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
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted">
              Work with us
            </p>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                {description}
              </p>
            )}
          </div>
          <Link
            href={ctaHref}
            className="group inline-flex shrink-0 items-center gap-4 border border-foreground px-8 py-4 text-sm font-medium tracking-wide transition-colors hover:bg-foreground hover:text-background"
          >
            {ctaLabel}
            <span className="h-px w-8 bg-accent transition-all group-hover:w-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}
