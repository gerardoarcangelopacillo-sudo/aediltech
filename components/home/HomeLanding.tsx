import Image from "next/image";
import Link from "next/link";

export function HomeLanding() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden"
      aria-label="Aediltech"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      <div className="landing-enter relative z-10 flex w-full flex-col items-center px-6 pt-20 pb-28 text-center md:px-10 md:pt-24">
        <div className="relative w-[min(90vw,42rem)]" style={{ aspectRatio: `${1067.66} / ${229.21}` }}>
          <Image
            src="/logo/aediltech-logo-full.svg"
            alt="Aediltech"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 90vw, 672px"
          />
        </div>

        <div
          className="relative mt-8 w-[min(92vw,36rem)] md:mt-10"
          style={{ aspectRatio: `${1072.65} / ${48.48}` }}
        >
          <Image
            src="/logo/aediltech-tagline.svg"
            alt="Advance Additive Manufacturing Technologies"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 92vw, 576px"
          />
        </div>
      </div>

      <Link
        href="#intro"
        className="scroll-hint absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 md:bottom-10"
        aria-label="Scroll to content"
      >
        <span className="section-label">Scroll</span>
        <span className="h-10 w-px bg-border" aria-hidden />
      </Link>
    </section>
  );
}
