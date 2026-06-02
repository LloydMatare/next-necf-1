
import { connectToDB } from '@/lib/connectToDB'
import MainEvent from '@/models/(home)/event'
import Link from 'next/link'
import React from 'react'

export async function loadVacancy() {
    await connectToDB()
    const events = await MainEvent.find().limit(50)
    return events
}

interface AboutProps {
    about: any
    route: any
    children: React.ReactNode
}


async function HomeCard({ about, route, children }: AboutProps) {


    return (
        <div className='border shadow p-4'>
            <Link
                href={`/dashboard/home/${route}/${about.id}`}
                className="flex items-center justify-between w-full">
                <div className="">
                    {children}
                </div>
            </Link>
        </div>
    )
}

export default HomeCard