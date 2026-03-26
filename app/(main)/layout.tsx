import React from "react";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scrollToTop";
import Footer from "@/app/(main)/_components/footer";
import MainHero from "@/app/(main)/_components/mainhero";
import HeroTopSection from "@/app/(main)/_components/heroTopSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(900px_500px_at_90%_10%,rgba(163,230,53,0.14),transparent_55%),linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--background)))]">
      <Navbar />

      <div className="border-b border-border/50">
        <div className="relative">
          <MainHero />
          <div className="relative z-10 -mt-14 pb-8 md:-mt-20 md:pb-10">
            <HeroTopSection />
          </div>
        </div>
      </div>

      <main id="content" className="w-full px-4 py-10 md:px-8 lg:px-12">
        {children}
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
