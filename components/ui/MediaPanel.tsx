import { MediaImage, type MediaAspect } from "@/components/ui/MediaImage";
import type { SiteImage } from "@/lib/images";

type MediaPanelProps = SiteImage & {
  className?: string;
  caption?: string;
  aspect?: MediaAspect;
  priority?: boolean;
  sizes?: string;
};

export function MediaPanel({
  src,
  alt,
  className = "",
  caption,
  aspect = "16/10",
  priority = false,
  sizes,
}: MediaPanelProps) {
  return (
    <figure className={`media-panel w-full ${className}`}>
      <MediaImage
        src={src}
        alt={alt}
        aspect={aspect}
        priority={priority}
        sizes={sizes}
      />
      {caption && <figcaption className="media-panel-caption">{caption}</figcaption>}
    </figure>
  );
}
