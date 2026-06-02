import React from 'react'
import { connectToDB } from '@/lib/connectToDB'
import Vacancy from '@/models/vacancy'
import AboutTop from '@/models/(about)/aboutTop'
import AboutCard from './aboutCard'
import Link from 'next/link'
import { MdEditDocument, MdFileOpen } from 'react-icons/md'

export async function loadAbout() {
    await connectToDB()
    const abouts = await AboutTop.find().limit(50)
    return abouts
}

export const TopCard = ({ about }: any) => {
    return (
        <div className='border shadow p-4'>
            <Link
                href={`/dashboard/about/top/${about.id}`}
                className="flex items-center justify-between w-full">
                <div className="text-sm text-slate-600 space-y-6">
                    <div className="flex items-center gap-2">
                        <MdEditDocument className={'text-2xl text-green-500'} />
                        <p className="">{about.title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdEditDocument className={'text-2xl text-green-500'} />
                        <p className="">{about.title2}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


//@ts-ignore
async function TopList() {
    const abouts = await loadAbout()
    return (
        <div className='flex flex-col gap-4'>
            {
                abouts.map((about: any, index) => {
                    return (
                        <TopCard
                            key={index}
                            about={about} />
                    )
                })
            }
        </div>
    )
}

export default TopList