import { MediaImage, type MediaAspect } from "@/components/ui/MediaImage";

type MediaPanelProps = {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  aspect?: MediaAspect;
  priority?: boolean;
};

export function MediaPanel({
  src,
  alt,
  className = "",
  caption,
  aspect = "16/10",
  priority = false,
}: MediaPanelProps) {
  return (
    <figure className={`media-panel w-full ${className}`}>
      <MediaImage src={src} alt={alt} aspect={aspect} priority={priority} />
      {caption && <figcaption className="media-panel-caption">{caption}</figcaption>}
    </figure>
  );
}
