import Image from 'next/image'
import React from 'react'
import { SiDialogflow } from "react-icons/si";
import { MdOutlineJoinFull } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { connectToDB } from '@/lib/connectToDB';
import Service from '@/models/(home)/service';

export async function loadService() {
    await connectToDB()
    const services = await Service.find()
    return services
}


async function AboutImage() {

    const services = await loadService()

    return (
        <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                        SERVICES
                    </p>
                    <h2 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
                        Explore What We Offer
                    </h2>
                </div>
                <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                    Practical support, convening power, and programmes designed to build shared
                    understanding and actionable outcomes.
                </p>
            </div>

            <div className="mt-10 space-y-12">
                {services.map((service) => (
                    <div key={service.title} className="grid gap-10 lg:grid-cols-12 lg:items-center">
                        <div className="space-y-6 lg:col-span-7">
                            <div className="flex items-start gap-4 rounded-2xl bg-background/60 p-5 ring-1 ring-border/60">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-800 ring-1 ring-emerald-600/20">
                                    <SiDialogflow className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-foreground">
                                        {service.title}
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl bg-background/60 p-5 ring-1 ring-border/60">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-lime-600/10 text-lime-800 ring-1 ring-lime-600/20">
                                    <MdOutlineJoinFull className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-foreground">
                                        {service.title2}
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {service.description2}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl bg-background/60 p-5 ring-1 ring-border/60">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-800 ring-1 ring-emerald-600/20">
                                    <HiSpeakerphone className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-foreground">
                                        {service.title3}
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {service.description3}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-background/60 ring-1 ring-border/60">
                                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 via-transparent to-lime-900/10" />
                                <Image
                                    src={service.image}
                                    alt={service.title || "Service image"}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-contain p-6"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutImage
