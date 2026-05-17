"use client";

import Link from "next/link";
import { useState } from "react";
import { RotatingSymbol } from "@/components/ui/RotatingSymbol";
import { homeSectionLinks, navLinks } from "@/lib/site";

export function HomeHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-background/70 backdrop-blur-md">
      <div className="header-shell relative flex h-14 w-full items-center md:h-16">
        <Link
          href="#top"
          className="relative z-10 shrink-0"
          aria-label="Aediltech home"
        >
          <RotatingSymbol width={28} priority mode="once" className="md:hidden" />
          <RotatingSymbol width={34} priority mode="once" className="hidden md:flex" />
        </Link>

        <nav
          className="pointer-events-none absolute inset-x-0 hidden items-center justify-center gap-7 lg:flex"
          aria-label="Sections"
        >
          <div className="pointer-events-auto flex items-center gap-7">
            {homeSectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-1 text-[11px] tracking-[0.08em] text-muted uppercase transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="relative z-10 ml-auto flex items-center gap-2">
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-px w-5 bg-foreground transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>

          <Link href="#top" className="shrink-0" aria-label="Aediltech home">
            <RotatingSymbol width={28} mode="once" className="md:hidden" />
            <RotatingSymbol width={34} mode="once" className="hidden md:flex" />
          </Link>
        </div>
      </div>

      <nav
        className={`w-full overflow-hidden border-t border-border/80 bg-background/95 backdrop-blur-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <ul className="header-shell py-5">
          {homeSectionLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block border-b border-border/60 py-4 text-sm font-medium tracking-wide"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <p className="section-label mb-3">Pages</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
