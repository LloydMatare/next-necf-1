'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import React from 'react'
import Image from "next/image";


function HeroDetails({ image, title, title2 }: any) {
    return (
        <div className="flex w-full flex-col items-center gap-10 px-4 py-14 md:flex-row md:px-8 lg:px-12">
            <motion.div
                initial={{ opacity: 0, scale: 0, x: -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
            >
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-border/60">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 via-transparent to-lime-900/10" />
                    <Image
                        className="aspect-[4/3] w-full object-cover"
                        alt="Background"
                        src={image}
                        width={900}
                        height={675}
                    />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0, x: 100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
            >
                <div className="rounded-2xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur">
                    <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                        BACKGROUND
                    </p>
                    <h2 className="mt-2 text-balance font-[var(--font-display)] text-3xl leading-tight text-foreground md:text-4xl">
                        A platform for dialogue, consensus, and national progress.
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {title}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {title2}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Button asChild className="bg-emerald-700 hover:bg-emerald-600">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/about">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroDetails
