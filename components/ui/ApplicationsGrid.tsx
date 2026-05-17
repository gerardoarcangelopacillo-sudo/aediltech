import Link from "next/link";
import type { applications } from "@/lib/site";

type Application = (typeof applications)[number];

type ApplicationsGridProps = {
  items: readonly Application[];
  showLink?: boolean;
};

export function ApplicationsGrid({ items, showLink = true }: ApplicationsGridProps) {
  return (
    <>
      <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="group flex min-h-[220px] flex-col justify-between bg-background p-8 transition-colors hover:bg-surface md:p-10"
          >
            <p className="font-mono text-xs text-muted">{item.index}</p>
            <div>
              <h3 className="text-lg font-medium tracking-tight md:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <span className="mt-6 inline-block h-px w-0 bg-accent transition-all group-hover:w-8" />
            </div>
          </article>
        ))}
      </div>
      {showLink && (
        <div className="mt-10 flex justify-end">
          <Link
            href="/applications"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Explore applications →
          </Link>
        </div>
      )}
    </>
  );
}
