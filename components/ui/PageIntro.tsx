import type { ReactNode } from "react";

type PageIntroProps = {
  label: string;
  title?: string;
  children: ReactNode;
};

export function PageIntro({ label, title, children }: PageIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-muted">
        {label}
      </p>
      {title && (
        <h2 className="mb-8 text-2xl font-medium tracking-tight md:text-3xl">
          {title}
        </h2>
      )}
      <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
        {children}
      </div>
    </div>
  );
}
