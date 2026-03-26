'use client';

import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

type TriggerVariant = "square" | "featured";

type AboutImageProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "children"
> & {
  image: string;
  alt?: string;
  variant?: TriggerVariant;
  kicker?: string;
  subtitle?: string;
};

const AboutImage = React.forwardRef<HTMLButtonElement, AboutImageProps>(
  ({ image, alt, variant = "square", kicker, subtitle, className, type, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        type={type ?? "button"}
        aria-label={alt || "Open image"}
        className={[
          "group relative block w-full overflow-hidden rounded-2xl text-left ring-1 ring-border/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/40",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Image
          width={variant === "featured" ? 900 : 800}
          height={variant === "featured" ? 700 : 800}
          className={
            variant === "featured"
              ? "aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.02] group-hover:opacity-95"
              : "aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:opacity-90"
          }
          src={image}
          alt={alt || "Gallery image"}
        />
        <div
          className={
            variant === "featured"
              ? "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
              : "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
          }
        />
        {variant === "featured" ? (
          <div className="pointer-events-none absolute bottom-0 left-0 p-5">
            {kicker ? (
              <p className="text-sm font-medium text-white">{kicker}</p>
            ) : null}
            {subtitle ? (
              <p className="text-xs text-white/80">{subtitle}</p>
            ) : null}
          </div>
        ) : null}
      </button>
    );
  }
);
AboutImage.displayName = "AboutImage";

export function AboutModal({
  src,
  title,
  triggerVariant = "square",
  triggerKicker,
  triggerSubtitle,
}: {
  src: string;
  title: string;
  triggerVariant?: TriggerVariant;
  triggerKicker?: string;
  triggerSubtitle?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AboutImage
          image={src}
          alt={title}
          variant={triggerVariant}
          kicker={triggerKicker}
          subtitle={triggerSubtitle}
        />
      </DialogTrigger>
      <DialogContent className="max-w-5xl bg-transparent p-0 ring-0 shadow-none sm:max-w-5xl">
        <figure className="relative overflow-hidden rounded-2xl bg-black/60 ring-1 ring-white/10">
          <Image
            src={src}
            alt={title}
            width={1800}
            height={1200}
            sizes="(max-width: 768px) 92vw, 900px"
            className="max-h-[75vh] w-full object-contain"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 py-4">
            <p className="text-sm font-medium text-white">{title}</p>
          </figcaption>
        </figure>
      </DialogContent>
    </Dialog>
  )
}
