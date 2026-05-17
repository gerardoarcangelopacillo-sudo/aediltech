import Image from "next/image";
import Link from "next/link";
import { HeroBackground } from "@/components/home/HeroBackground";

const WORDMARK_ASPECT = "1091.58 / 202.47";
const TAGLINE_ASPECT = "1072.65 / 48.48";

export function HomeLanding() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden"
      aria-label="Aediltech"
    >
      <HeroBackground />

      <div className="landing-enter relative z-10 flex w-full max-w-[100vw] flex-col items-center px-6 pt-20 pb-28 text-center md:px-10 md:pt-24">
        <div
          className="relative w-[min(88vw,36rem)]"
          style={{ aspectRatio: WORDMARK_ASPECT }}
        >
          <Image
            src="/logo/aediltech-wordmark.svg"
            alt="Aediltech"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 88vw, 576px"
          />
        </div>

        <div
          className="relative mt-10 w-[min(92vw,34rem)] md:mt-12"
          style={{ aspectRatio: TAGLINE_ASPECT }}
        >
          <Image
            src="/logo/aediltech-tagline.svg"
            alt="Advance Additive Manufacturing Technologies"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 92vw, 544px"
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
