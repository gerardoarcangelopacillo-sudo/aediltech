import { CrossGraphic } from "@/components/ui/CrossGraphic";

type RotatingSymbolProps = {
  width?: number;
  className?: string;
  animate?: boolean;
  priority?: boolean;
};

/** Rotates the official symbol wrapper only — the SVG asset is never modified. */
export function RotatingSymbol({
  width = 32,
  className = "",
  animate = true,
  priority = false,
}: RotatingSymbolProps) {
  return (
    <div
      className={`inline-flex items-center justify-center ${animate ? "symbol-spin" : ""} ${className}`}
      style={{ transformOrigin: "center center" }}
    >
      <CrossGraphic width={width} priority={priority} />
    </div>
  );
}
