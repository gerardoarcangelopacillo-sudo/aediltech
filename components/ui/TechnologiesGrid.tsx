import Link from "next/link";
import type { technologies } from "@/lib/site";

type Technology = (typeof technologies)[number];

type TechnologiesGridProps = {
  items: readonly Technology[];
  showLink?: boolean;
};

export function TechnologiesGrid({ items, showLink = true }: TechnologiesGridProps) {
  return (
    <div className="border-y border-border">
      {items.map((item) => (
        <article
          key={item.id}
          className="group relative grid gap-8 border-t border-border py-14 transition-colors duration-500 first:border-t-0 hover:bg-surface-elevated/60 md:grid-cols-12 md:items-start md:gap-10 md:py-16 md:pl-2 md:pr-8"
        >
          <span
            className="absolute left-0 top-0 h-0 w-px bg-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-full"
            aria-hidden
          />

          <div className="md:col-span-2">
            <span className="block text-5xl font-medium leading-none tracking-tighter text-white/10 transition-colors duration-500 group-hover:text-accent/80 md:text-6xl">
              {item.index}
            </span>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xl font-medium tracking-[-0.02em] text-foreground transition-transform duration-500 group-hover:translate-x-1 md:text-2xl lg:text-[1.75rem]">
              {item.title}
            </h3>
            <span className="mt-4 inline-block h-px w-0 bg-accent transition-all duration-500 group-hover:w-10" />
          </div>

          <p className="text-sm leading-[1.7] text-muted md:col-span-6 md:text-base md:leading-relaxed">
            {item.description}
          </p>
        </article>
      ))}

      {showLink && (
        <div className="flex justify-end px-2 py-10 md:px-8">
          <Link href="/technologies" className="link-arrow">
            View all technology systems
          </Link>
        </div>
      )}
    </div>
  );
}
