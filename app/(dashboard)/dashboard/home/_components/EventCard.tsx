export const dynamic = 'force-dynamic'
import { connectToDB } from '@/lib/connectToDB'
import MainEvent from '@/models/(home)/event'
import Link from 'next/link'
import React from 'react'
import { MdTimer } from 'react-icons/md'

export async function loadEvents() {
    await connectToDB()
    const events = await MainEvent.find().limit(50)
    return events
}


async function EventCard() {

    const events = await loadEvents()




    return (
        <div className=''>
            {
                events.map((event: any) => (
                    <Link
                        key={event.id}
                        className=''
                        href={`/dashboard/home/event/${event.id}`}>
                        <div className="border flex items-center justify-between p-4 shadow rounded mb-6">
                            <img
                                alt={event.title}
                                src={event.image}
                                width={200} height={200}
                                className='rounded border'
                            />
                            <div className="space-y-2">
                                <p className="text-lg font-bold">{event.title}</p>
                                <div className="flex gap-2">
                                    <MdTimer className='text-slate-400 text-sm' />
                                    <p className="">{event.date}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default EventCard