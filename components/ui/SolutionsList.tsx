import Link from "next/link";
import type { solutions } from "@/lib/site";

type Solution = (typeof solutions)[number];

type SolutionsListProps = {
  items: readonly Solution[];
  showLink?: boolean;
};

export function SolutionsList({ items, showLink = true }: SolutionsListProps) {
  return (
    <>
      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="group bg-background p-10 transition-colors duration-500 hover:bg-surface md:p-12"
          >
            <p className="mb-6 text-xs font-medium tracking-[0.2em] text-muted-light transition-colors duration-300 group-hover:text-muted">
              {item.index}
            </p>
            <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-5 max-w-md text-sm leading-[1.7] text-muted md:text-base">
              {item.description}
            </p>
            <span className="mt-8 inline-block h-px w-0 bg-accent transition-all duration-500 group-hover:w-10" />
          </article>
        ))}
      </div>
      {showLink && (
        <div className="mt-12 flex justify-end">
          <Link href="/solutions" className="link-arrow">
            View all solutions
          </Link>
        </div>
      )}
    </>
  );
}
