type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
};

export function SectionImage({ src, alt, className = "", caption }: SectionImageProps) {
  return (
    <figure className={`overflow-hidden border border-border bg-surface ${className}`}>
      <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      {caption && (
        <figcaption className="border-t border-border px-4 py-3 text-xs tracking-wide text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
