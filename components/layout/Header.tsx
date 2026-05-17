"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="header-shell flex h-14 w-full items-center justify-between md:h-16">
        <Link
          href="/"
          className="relative block h-6 w-32 transition-opacity duration-300 hover:opacity-70 md:h-7 md:w-36"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo/aediltech-wordmark.svg"
            alt="Aediltech"
            fill
            className="brand-logo-inverse object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-[13px] tracking-[0.04em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  active
                    ? "text-foreground after:w-full"
                    : "text-muted hover:text-accent after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-5 bg-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-foreground transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`}
          />
          <span
            className={`h-px w-5 bg-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <nav
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 text-base font-medium tracking-tight transition-colors duration-300 hover:text-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
