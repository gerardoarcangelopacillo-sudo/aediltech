import Image from "next/image";
import Link from "next/link";
import { FooterSymbol } from "@/components/layout/FooterSymbol";
import { navLinks, siteConfig, technologies } from "@/lib/site";

const technologyLinks = technologies.map((t) => ({
  label: t.title,
  href: "/technologies",
}));

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="footer-shell w-full py-16 md:py-20 lg:py-24">
        <div className="flex w-full flex-col gap-14 xl:flex-row xl:items-start xl:justify-between xl:gap-20">
          <div className="w-full max-w-lg shrink-0 xl:max-w-md">
            <FooterSymbol />
            <Link href="/" className="relative mb-6 block h-7 w-40 md:h-8 md:w-44">
              <Image
                src="/logo/aediltech-wordmark.svg"
                alt="Aediltech"
                fill
                className="object-contain object-left"
              />
            </Link>
            <div className="relative mb-8 h-4 w-full max-w-md">
              <Image
                src="/logo/aediltech-tagline.svg"
                alt={siteConfig.brandTagline}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid w-full flex-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-16">
            <div>
              <p className="section-label mb-5">Navigation</p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors duration-300 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-label mb-5">Technologies</p>
              <ul className="space-y-3">
                {technologyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors duration-300 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-label mb-5">Contact</p>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors duration-300 hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="text-muted">Engineering enquiries</li>
                <li className="text-muted">Partnership proposals</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full border-t border-border pt-10">
          <div className="grid w-full gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="text-xs leading-relaxed text-muted">
              <p className="mb-2 font-medium text-foreground">Company</p>
              <p>Aediltech S.r.l.</p>
              <p className="mt-2">Registered office — placeholder</p>
              <p>VAT / Company ID — placeholder</p>
            </div>
            <div className="text-xs leading-relaxed text-muted lg:col-span-2">
              <p className="mb-2 font-medium text-foreground">Legal</p>
              <p>
                Information on this website is provided for general reference. Technical
                specifications, certifications and availability are subject to project
                validation. Legal documentation available on request.
              </p>
            </div>
          </div>

          <div className="mt-10 flex w-full flex-col gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} Aediltech. All rights reserved.</p>
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
