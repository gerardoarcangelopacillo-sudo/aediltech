import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="relative mb-8 block h-8 w-44">
              <Image
                src="/logo/aediltech-logo-full.svg"
                alt="Aediltech"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm transition-colors hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Aediltech. All rights reserved.</p>
          <p className="uppercase tracking-[0.15em]">Additive systems · Built environments</p>
        </div>
      </div>
    </footer>
  );
}
