import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type FullscreenSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  border?: boolean;
  ambient?: boolean;
};

export function FullscreenSection({
  children,
  id,
  className = "",
  border = true,
  ambient = false,
}: FullscreenSectionProps) {
  return (
    <section
      id={id}
      className={`relative flex min-h-svh min-h-[100dvh] flex-col justify-center overflow-hidden bg-background ${
        border ? "border-t border-border" : ""
      } ${className}`}
    >
      {ambient && (
        <div className="section-ambient" aria-hidden>
          <div className="section-ambient-glow" />
          <div className="section-ambient-grid" />
        </div>
      )}
      <div className="section-shell relative z-10 w-full py-28 md:py-32 lg:py-40">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
