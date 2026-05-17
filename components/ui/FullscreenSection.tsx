import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type FullscreenSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  border?: boolean;
};

export function FullscreenSection({
  children,
  id,
  className = "",
  border = true,
}: FullscreenSectionProps) {
  return (
    <section
      id={id}
      className={`relative flex min-h-svh min-h-[100dvh] flex-col justify-center overflow-hidden ${
        border ? "border-t border-border" : ""
      } ${className}`}
    >
      <div className="section-shell w-full py-28 md:py-32 lg:py-40">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
