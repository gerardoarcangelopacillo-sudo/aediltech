"use client";

import { useState } from "react";

export type MediaAspect = "16/10" | "21/9" | "4/3";

type MediaImageProps = {
  src: string;
  alt: string;
  aspect?: MediaAspect;
  className?: string;
  priority?: boolean;
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
}: MediaImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`media-panel-frame ${aspectMap[aspect]} ${className}`}
      data-failed={failed || undefined}
    >
      {failed ? (
        <div className="media-panel-fallback-graphic" aria-hidden />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="media-panel-img"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
