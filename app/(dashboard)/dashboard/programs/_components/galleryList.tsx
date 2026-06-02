import React from 'react'
import { connectToDB } from '@/lib/connectToDB'
import Link from 'next/link'
import Image from 'next/image'
import { MdEditDocument } from 'react-icons/md'
import Gallery from '@/models/(programs)/gallery'

export async function loadAbout() {
    await connectToDB()
    const abouts = await Gallery.find().limit(50)
    return abouts
}

export const TopCard = ({ about }: any) => {
    return (
        <div className='border shadow p-4'>
            <Link
                href={`/dashboard/programs/gallery/${about.id}`}
                className="flex items-start gap-2 w-full">
                <div className="">
                    <Image
                        alt={about.title}
                        src={`${about.image}`}
                        width={200}
                        height={200}
                    />
                </div>
                <div className="text-sm text-slate-600 space-y-6">
                    <div className="flex items-center gap-2">
                        <MdEditDocument className={'text-2xl text-green-500'} />
                        <p className="">{about.title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdEditDocument className={'text-2xl text-green-500'} />
                        <p className="">{about.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


//@ts-ignore
async function GalleryList() {
    const abouts = await loadAbout()
    return (
        <div className='flex flex-col gap-4'>
            {
                abouts.map((about: any) => {
                    return (
                        <TopCard
                            key={about.id}
                            about={about} />
                    )
                })
            }
        </div>
    )
}

export default GalleryList