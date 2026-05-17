"use client";

import Link from "next/link";
import { useState } from "react";
import { RotatingSymbol } from "@/components/ui/RotatingSymbol";
import { homeSectionLinks, navLinks } from "@/lib/site";

export function HomeHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/60 backdrop-blur-md">
      <div className="mx-auto grid h-14 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 md:h-16 md:px-10 lg:px-14">
        <Link href="#top" className="shrink-0 justify-self-start" aria-label="Aediltech home">
          <RotatingSymbol width={28} priority animate className="md:hidden" />
          <RotatingSymbol width={34} priority animate className="hidden md:flex" />
        </Link>

        <nav
          className="hidden items-center justify-center gap-7 justify-self-center lg:flex"
          aria-label="Sections"
        >
          {homeSectionLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 text-[11px] tracking-[0.08em] text-muted uppercase transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 justify-self-end">
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
            <RotatingSymbol width={28} animate className="md:hidden" />
            <RotatingSymbol width={34} animate className="hidden md:flex" />
          </Link>
        </div>
      </div>

      <nav
        className={`overflow-hidden border-t border-border/80 bg-background/95 backdrop-blur-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <ul className="px-4 py-5 sm:px-6">
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
