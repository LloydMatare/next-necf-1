"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { List, ArrowRight } from "@phosphor-icons/react";

function normalizePath(href: string) {
  // Guard against accidental relative links like "downloads".
  if (!href) return "/";
  if (href.startsWith("/")) return href;
  return `/${href}`;
}

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="flex h-16 w-full items-center justify-between px-4 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative size-9 overflow-hidden rounded-full ring-1 ring-border/60">
            <Image
              src="/necf-logo.png"
              alt="NECF"
              fill
              sizes="36px"
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-foreground">
              NECF
            </div>
            <div className="text-[11px] text-muted-foreground">
              National Economic Consultative Forum
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const href = normalizePath(l.link);
            const isActive =
              pathname === href || (href !== "/" && pathname?.startsWith(href));

            return (
              <Link
                key={l.id}
                href={href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm transition-colors",
                  "text-muted-foreground hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                {l.name}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-foreground/60" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">
              Contact
              <ArrowRight className="ml-1.5 size-4 opacity-80" />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <List className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-0">
              <SheetHeader className="px-5">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="px-2">
                {links.map((l) => {
                  const href = normalizePath(l.link);
                  const isActive =
                    pathname === href ||
                    (href !== "/" && pathname?.startsWith(href));
                  return (
                    <Link
                      key={l.id}
                      href={href}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-3 text-sm",
                        "text-muted-foreground hover:bg-muted hover:text-foreground",
                        isActive && "bg-muted text-foreground"
                      )}
                    >
                      <span>{l.name}</span>
                      <ArrowRight className="size-4 opacity-60" />
                    </Link>
                  );
                })}
              </div>
              <div className="mt-4 px-5">
                <Button asChild className="w-full">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
