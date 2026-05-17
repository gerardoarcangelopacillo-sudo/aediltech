import Link from "next/link";
import type { applications } from "@/lib/site";

type Application = (typeof applications)[number];

type ApplicationsGridProps = {
  items: readonly Application[];
  showLink?: boolean;
  imageById?: Partial<Record<Application["id"], string>>;
};

export function ApplicationsGrid({
  items,
  showLink = true,
  imageById = {},
}: ApplicationsGridProps) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {items.map((item) => {
          const imageSrc = imageById[item.id];
          return (
            <article
              key={item.id}
              className="group relative flex min-h-[280px] flex-col overflow-hidden border border-border bg-background transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_24px_64px_-32px_rgba(0,0,0,0.14)] md:min-h-[340px]"
            >
              {imageSrc && (
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-border bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageSrc}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="relative flex flex-1 flex-col justify-between p-9 md:p-10">
                <div
                  className="card-grid pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />

                <div className="relative flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-muted">
                    {item.index}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="relative mt-auto pt-8">
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground transition-transform duration-500 group-hover:translate-x-0.5 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[28ch] text-sm leading-[1.65] text-muted">
                    {item.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Explore
                    <span className="h-px w-6 bg-accent" />
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {showLink && (
        <div className="mt-12 flex justify-end">
          <Link href="/applications" className="link-arrow">
            Explore applications
          </Link>
        </div>
      )}
    </>
  );
}
