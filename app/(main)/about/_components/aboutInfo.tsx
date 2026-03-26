import getSeconds from '@/lib/(about)/aboutSecond/getSeconds'
import Image from 'next/image'
import React from 'react'

async function AboutInfo() {

    const data = await getSeconds()
    const first = data?.[0]
    if (!first) return null;

    const title = first.title
    const title2 = first.title2
    const title3 = first.title3
    const title4 = first.title4
    const image = first.image

    return (
        <div className='mt-8 grid gap-6 md:grid-cols-2 md:items-center'>
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-border/60">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 via-transparent to-lime-900/10" />
                <Image
                    src={`${image}`}
                    alt=''
                    width={900}
                    height={700}
                    className='aspect-[4/3] w-full object-cover'
                />
            </div>
            <div className="grid gap-3">
                <div className="rounded-2xl bg-emerald-700 p-4 text-sm text-white shadow-sm">
                    {title}
                </div>
                <div className="rounded-2xl bg-emerald-700 p-4 text-sm text-white shadow-sm">
                    {title2}
                </div>
                <div className="rounded-2xl bg-emerald-700 p-4 text-sm text-white shadow-sm">
                    {title3}
                </div>
                <div className="rounded-2xl bg-emerald-700 p-4 text-sm text-white shadow-sm">
                    {title4}
                </div>
            </div>
        </div>
    )
}

export default AboutInfo
