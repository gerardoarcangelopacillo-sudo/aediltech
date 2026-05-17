import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionContainerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  border?: boolean;
  reveal?: boolean;
};

export function SectionContainer({
  children,
  id,
  className = "",
  border = false,
  reveal = true,
}: SectionContainerProps) {
  const content = reveal ? <Reveal>{children}</Reveal> : children;

  return (
    <section
      id={id}
      className={`py-28 md:py-36 lg:py-44 ${border ? "border-t border-border" : ""} ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">{content}</div>
    </section>
  );
}
