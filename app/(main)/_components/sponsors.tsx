"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

export default function Sponsors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch("/api/sponsors");
        const data = await response.json();
        setSponsors(data.sponsors);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch sponsors:", error);
        setIsLoading(false);
      }
    };
    fetchSponsors();
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2); // Because we're duplicating
    }
  }, [sponsors]);

  useEffect(() => {
    if (trackWidth > 0) {
      controls.start({
        x: [-trackWidth, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [trackWidth, controls]);

  if (isLoading)
    return <div className="text-center py-12">Loading sponsors...</div>;
  if (!sponsors.length)
    return <div className="text-center py-12">No sponsors to display</div>;

  return (
    <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
            PARTNERS
          </p>
          <h2 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
            Partners and Sponsors
          </h2>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Organizations supporting NECF’s convening, research, and programmes.
        </p>
      </div>

        <div className="relative mt-10 overflow-hidden" ref={containerRef}>
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background/90 to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background/90 to-transparent" />

          <motion.div
            className="flex gap-8 md:gap-16 items-center"
            ref={trackRef}
            animate={controls}
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={`${sponsor.id}-${index}`} className="flex-shrink-0">
                <div className="relative h-16 w-32 rounded-2xl bg-background/60 p-3 ring-1 ring-border/60 transition-all duration-300 md:h-20 md:w-40">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 160px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
    </section>
  );
}
