import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  border?: boolean;
};

export function SectionContainer({
  children,
  id,
  className = "",
  border = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 lg:py-40 ${border ? "border-t border-border" : ""} ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">{children}</div>
    </section>
  );
}
