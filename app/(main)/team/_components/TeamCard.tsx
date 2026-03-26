"use client";
import React from "react";
import { MdPerson } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Link as LinkIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TeamCardProps {
  position: string;
  image?: string;
  title: string;
  subtitle?: string;
  desc?: string;
  link?: string;
  twitterLink?: string;
  gmail?: string;
}

function TeamCard({ position, image, title, subtitle, link }: TeamCardProps) {
  const href = link?.trim() || "";
  const isExternal = /^https?:\/\//i.test(href) || /^mailto:/i.test(href);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group relative w-[300px] overflow-hidden rounded-3xl bg-background/60 p-6 text-left ring-1 ring-border/60 shadow-sm transition hover:-translate-y-0.5 hover:bg-background/70 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
        >
          <div className="flex items-center gap-4">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-muted ring-1 ring-border/60">
              {image && image.trim().length > 0 ? (
                <div className="absolute inset-2.5">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="grid size-full place-items-center text-emerald-800/80">
                  <MdPerson size={42} />
                </div>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="truncate font-[var(--font-display)] text-lg leading-tight text-foreground">
                {title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {position}
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="text-xs font-semibold tracking-widest text-emerald-900/80">
              TEAM
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-foreground/90">
              Details
              <ArrowUpRight className="size-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <div className="pointer-events-none absolute -right-24 -top-24 size-56 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-base font-[var(--font-display)]">
            {title}
          </DialogTitle>
          <DialogDescription>
            <span className="font-medium text-foreground/90">{position}</span>
            {subtitle?.trim() ? (
              <>
                {" "}
                <span className="text-muted-foreground">·</span>{" "}
                {subtitle.trim()}
              </>
            ) : null}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 sm:grid-cols-[240px_1fr] sm:items-start">
          <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl bg-muted ring-1 ring-border/60 sm:max-w-none">
            {image && image.trim().length > 0 ? (
              <div className="absolute inset-3">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="480px"
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="grid size-full place-items-center text-emerald-800/80">
                <MdPerson size={86} />
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-background/60 p-4 ring-1 ring-border/60">
              <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                ROLE
              </p>
              <p className="mt-1 text-sm text-foreground">{position}</p>
              {subtitle?.trim() ? (
                <>
                  <p className="mt-3 text-xs font-semibold tracking-widest text-emerald-900/80">
                    DETAILS
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {subtitle.trim()}
                  </p>
                </>
              ) : null}
            </div>

            {href ? (
              <div className="flex flex-wrap gap-2">
                <Button asChild className="rounded-2xl">
                  <Link
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer noopener" : undefined}
                  >
                    <LinkIcon className="mr-2 size-4 opacity-80" />
                    Open profile
                    <ArrowUpRight className="ml-1.5 size-4 opacity-80" />
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TeamCard;
