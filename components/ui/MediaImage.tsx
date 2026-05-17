"use client";

import Image from "next/image";
import { useState } from "react";
import type { SiteImage } from "@/lib/images";

export type MediaAspect = "16/10" | "21/9" | "4/3";

type MediaImageProps = SiteImage & {
  aspect?: MediaAspect;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const aspectMap: Record<MediaAspect, string> = {
  "16/10": "media-aspect-16-10",
  "21/9": "media-aspect-21-9",
  "4/3": "media-aspect-4-3",
};

export function MediaImage({
  src,
  alt,
  aspect = "16/10",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
}: MediaImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`media-panel-frame ${aspectMap[aspect]} ${className}`}
      data-failed={failed || undefined}
    >
      {failed ? (
        <div className="media-panel-fallback-graphic" role="img" aria-label={alt} />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="media-panel-img"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
