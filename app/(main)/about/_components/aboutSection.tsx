import React from 'react'
import { FaDotCircle } from "react-icons/fa";
import Image from 'next/image';
import getSections from '@/lib/(about)/aboutSection/getSections';

const SectionPin = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center gap-2">
            <FaDotCircle className='w-10 text-green-900' />
            <p className="text-sm text-slate-700">{text}</p>
        </div>
    )
}

async function AboutSection() {

    const sections = await getSections()

    const first = sections?.[0]
    if (!first) return null;

    const image = first.image
    const title = first.title
    const title2 = first.title2
    const title3 = first.title3
    const title4 = first.title4
    const title5 = first.title5
    const title6 = first.title6


    return (
        <div className=''>
            <div className="flex flex-col gap-8 md:flex-row md:gap-10">
                <div className="w-full md:w-1/2">
                    <Image
                        src={image}
                        alt=''
                        width={900}
                        height={700}
                        className='aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border/60'
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                        ABOUT NECF
                    </p>
                    <h2 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
                        Built on collaboration. Designed for impact.
                    </h2>
                    <div className="mt-6 grid gap-3">
                        <SectionPin text={`${title}`} />
                        <SectionPin text={`${title2}`} />
                        <SectionPin text={title3} />
                        <SectionPin text={title4} />
                        <SectionPin text={title5} />
                        <SectionPin text={title6} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
