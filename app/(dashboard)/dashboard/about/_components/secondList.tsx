import React from 'react'
import { connectToDB } from '@/lib/connectToDB'
import Link from 'next/link'
import Image from 'next/image'
import AboutSecond from '@/models/(about)/aboutSecond'
import { MdOutlineDocumentScanner } from 'react-icons/md'

export async function loadAbout() {
    await connectToDB()
    const abouts = await AboutSecond.find().limit(50)
    return abouts
}

export const TopCard = ({ about }: any) => {
    return (
        <div className='border shadow p-4'>
            <Link
                href={`/dashboard/about/second/${about.id}`}
                className="flex items-start gap-2 w-full">
                <div className="w-[400px]">
                    <Image
                        src={`${about.image}`}
                        alt={about.title}
                        width={100}
                        height={100}
                        className='w-full'
                    />
                </div>
                <div className="text-sm text-slate-600 space-y-6">
                    <div className="space-y-4">
                        <div className="flex gao-2">
                            <MdOutlineDocumentScanner className='text-green-600 text-lg pr-2' />
                            <p className="">{about.title}</p>
                        </div>
                        <div className="flex gao-2">
                            <MdOutlineDocumentScanner className='text-green-600 text-lg pr-2' />
                            <p className="">{about.title2}</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gao-2">
                            <MdOutlineDocumentScanner className='text-green-600 text-lg pr-2' />
                            <p className="">{about.title3}</p>
                        </div>
                        <div className="flex gao-2">
                            <MdOutlineDocumentScanner className='text-green-600 text-lg pr-2' />
                            <p className="">{about.title4}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}


//@ts-ignore
async function SecondList() {
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

export default SecondList