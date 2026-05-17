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
      className={`relative flex min-h-svh flex-col justify-center ${
        border ? "border-t border-border" : ""
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
