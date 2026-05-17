import { CrossGraphic } from "@/components/ui/CrossGraphic";

type RotationMode = "none" | "once" | "infinite";

type RotatingSymbolProps = {
  width?: number;
  className?: string;
  mode?: RotationMode;
  priority?: boolean;
};

const modeClass: Record<RotationMode, string> = {
  none: "",
  once: "symbol-spin-once",
  infinite: "symbol-spin",
};

/** Rotates the official symbol wrapper only — the SVG asset is never modified. */
export function RotatingSymbol({
  width = 32,
  className = "",
  mode = "once",
  priority = false,
}: RotatingSymbolProps) {
  return (
    <div
      className={`inline-flex items-center justify-center ${modeClass[mode]} ${className}`}
      style={{ transformOrigin: "center center" }}
    >
      <CrossGraphic width={width} priority={priority} />
    </div>
  );
}
