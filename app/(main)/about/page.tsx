import React from 'react'
import { AiOutlineRise } from "react-icons/ai";
import { ImTarget } from "react-icons/im";
import AboutInfo from './_components/aboutInfo';
import AboutSection from './_components/aboutSection';
import AboutGallery from './_components/aboutGallery';
import getTops from '@/lib/(about)/aboutTop/getTops';

async function About() {

    const top = await getTops()
    const title = top[0].title
    const title2 = top[0].title2

    return (
            <div className="space-y-14">
                <section className="overflow-hidden rounded-3xl bg-emerald-950 text-white ring-1 ring-emerald-900/40">
                    <div className="grid gap-6 p-6 md:grid-cols-2 md:items-stretch md:p-10">
                        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                            <div className="flex items-start gap-4">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-300/20">
                                    <AiOutlineRise className="text-2xl text-emerald-200" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-widest text-emerald-200/80">
                                        PURPOSE
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-white/90">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                            <div className="flex items-start gap-4">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-lime-400/15 ring-1 ring-lime-300/20">
                                    <ImTarget className="text-2xl text-lime-200" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-widest text-lime-200/80">
                                        FOCUS
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-white/90">
                                        {title2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
                    <h1 className="text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
                        What We Do
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
                        NECF convenes voices across sectors to build shared understanding and practical pathways for Zimbabwe’s economic and social development.
                    </p>
                    <div className="mt-8">
                        <AboutInfo />
                    </div>
                </section>

                <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
                    <AboutSection />
                </section>

                <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
                    <AboutGallery />
                </section>
            </div>
    )
}

export default About
