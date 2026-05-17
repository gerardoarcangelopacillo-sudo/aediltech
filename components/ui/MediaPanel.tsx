type MediaPanelProps = {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  aspect?: "16/10" | "21/9" | "4/3";
};

const aspectClass = {
  "16/10": "aspect-[16/10] min-h-[220px] sm:min-h-[260px] md:min-h-[300px]",
  "21/9": "aspect-[21/9] min-h-[200px] sm:min-h-[240px] md:min-h-[280px]",
  "4/3": "aspect-[4/3] min-h-[240px] sm:min-h-[280px]",
} as const;

export function MediaPanel({
  src,
  alt,
  className = "",
  caption,
  aspect = "16/10",
}: MediaPanelProps) {
  return (
    <figure className={`media-panel ${className}`}>
      <div className={`media-panel-frame ${aspectClass[aspect]}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          className="media-panel-img"
          loading="lazy"
          decoding="async"
        />
      </div>
      {caption && <figcaption className="media-panel-caption">{caption}</figcaption>}
    </figure>
  );
}
