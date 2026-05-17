"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HomeHeader } from "@/components/layout/HomeHeader";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {isHome ? <HomeHeader /> : <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
