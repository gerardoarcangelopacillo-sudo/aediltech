import Image from "next/image";
import Link from "next/link";
import { FooterSymbol } from "@/components/layout/FooterSymbol";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="footer-shell w-full py-20 md:py-24 lg:py-28">
        <div className="flex w-full flex-col gap-16 lg:flex-row lg:items-end lg:justify-between lg:gap-24">
          <div className="w-full max-w-3xl">
            <FooterSymbol />
            <Link href="/" className="relative mt-8 block h-8 w-48 md:h-10 md:w-56">
              <Image
                src="/logo/aediltech-wordmark.svg"
                alt="Aediltech"
                fill
                className="brand-logo-inverse object-contain object-left"
              />
            </Link>
            <div className="relative mt-6 h-5 w-full max-w-xl md:h-6">
              <Image
                src="/logo/aediltech-tagline.svg"
                alt={siteConfig.brandTagline}
                fill
                className="brand-logo-inverse object-contain object-left"
              />
            </div>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-muted lg:text-right">
            Advanced additive systems for architecture, construction and industry.
          </p>
        </div>

        <div className="footer-divider-accent mt-20" aria-hidden />

        <div className="mt-10 w-full pt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="text-xs leading-relaxed text-muted">
              <p className="font-medium text-foreground">Aediltech S.r.l.</p>
              <p className="mt-2">Registered office — placeholder</p>
              <p>VAT / Company ID — placeholder</p>
              <p className="mt-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground/80 transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted">
              <Link href="/privacy" className="transition-colors hover:text-foreground">
                Privacy policy
              </Link>
              <Link href="/cookies" className="transition-colors hover:text-foreground">
                Cookie policy
              </Link>
            </div>
          </div>

          <div className="mt-10 flex w-full flex-col gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
            <p>&copy; {year} Aediltech. All rights reserved.</p>
            <p className="flex items-center gap-3 uppercase tracking-[0.15em]">
              <span className="inline-block h-px w-6 bg-accent" aria-hidden />
              Additive systems · Built environments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
