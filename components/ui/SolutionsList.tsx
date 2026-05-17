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
    <div className="grid gap-12 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.id} className="border-t border-border pt-8">
          <p className="mb-4 font-mono text-xs text-muted">{item.index}</p>
          <h3 className="text-xl font-medium tracking-tight md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            {item.description}
          </p>
        </article>
      ))}
    </div>
    {showLink && (
      <div className="mt-12 flex justify-end">
        <Link
          href="/solutions"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          View all solutions →
        </Link>
      </div>
    )}
  </>
  );
}
