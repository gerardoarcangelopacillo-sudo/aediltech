import Link from "next/link";
import { MediaImage } from "@/components/ui/MediaImage";
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
      <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const imageSrc = imageById[item.id];
          return (
            <article
              key={item.id}
              className="group flex flex-col bg-background transition-colors duration-500 hover:bg-surface"
            >
              {imageSrc && (
                <MediaImage
                  src={imageSrc}
                  alt={item.title}
                  aspect="16/10"
                  className="rounded-none border-0 border-b border-border"
                />
              )}

              <div className="relative flex flex-1 flex-col justify-between p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-muted">
                    {item.index}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-[1.65] text-muted">
                    {item.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted opacity-0 transition-opacity duration-500 group-hover:opacity-100">
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
