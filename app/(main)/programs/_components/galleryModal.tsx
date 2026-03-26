"use client";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import * as React from "react"

type AboutImageProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "children"
> & {
  id?: number;
  image: string;
  alt?: string;
};

const AboutImage = React.forwardRef<HTMLButtonElement, AboutImageProps>(
  ({ image, alt, className, type, ...props }, ref) => {
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
          width={800}
          height={800}
          className="aspect-square w-full object-cover transition duration-300 group-hover:scale-[1.03] group-hover:opacity-90"
          src={image}
          alt={alt || "Gallery image"}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </button>
    )
  }
)
AboutImage.displayName = "AboutImage"

export function GalleryModal({ src, title, description }: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <AboutImage image={src} alt={title} />
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
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
                        <p className="text-sm font-medium text-white">{title}</p>
                        <p className="mt-1 text-xs text-white/80">{description}</p>
                    </figcaption>
                </figure>
            </DialogContent>
        </Dialog>
    )
}
