import Link from "next/link";
import type { technologies } from "@/lib/site";

type Technology = (typeof technologies)[number];

type TechnologiesGridProps = {
  items: readonly Technology[];
  showLink?: boolean;
};

export function TechnologiesGrid({ items, showLink = true }: TechnologiesGridProps) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <article
          key={item.id}
          className="group grid gap-6 py-10 transition-colors hover:bg-surface md:grid-cols-12 md:gap-8 md:py-12 md:px-6"
        >
          <p className="font-mono text-xs text-muted md:col-span-1">{item.index}</p>
          <h3 className="text-xl font-medium tracking-tight md:col-span-4 md:text-2xl">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted md:col-span-6 md:text-base">
            {item.description}
          </p>
          <span className="hidden h-px w-6 self-center bg-accent opacity-0 transition-opacity group-hover:opacity-100 md:col-span-1 md:block" />
        </article>
      ))}
      {showLink && (
        <div className="flex justify-end px-6 py-8">
          <Link
            href="/technologies"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            View all technologies →
          </Link>
        </div>
      )}
    </div>
  );
}
