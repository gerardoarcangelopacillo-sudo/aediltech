"use client";

import { useState, type CSSProperties } from "react";

export type MediaAspect = "16/10" | "21/9" | "4/3";

type MediaImageProps = {
  src: string;
  alt: string;
  fallbackLabel: string;
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
  fallbackLabel,
  aspect = "16/10",
  className = "",
  priority = false,
}: MediaImageProps) {
  const [failed, setFailed] = useState(false);

  const frameStyle = {
    "--media-src": failed ? "none" : `url("${src}")`,
  } as CSSProperties;

  return (
    <div
      className={`media-panel-frame ${aspectMap[aspect]} ${className}`}
      data-failed={failed || undefined}
      style={frameStyle}
    >
      <div className="media-panel-fallback">
        <span className="media-panel-fallback-label">{fallbackLabel}</span>
        <span className="media-panel-fallback-hint">Image placeholder</span>
      </div>

      {!failed && (
        <>
          <div className="media-panel-bg" role="img" aria-label={alt} />
          {/* Hidden img validates load and drives onError fallback */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            aria-hidden
            className="media-panel-probe"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
          />
        </>
      )}
    </div>
  );
}
