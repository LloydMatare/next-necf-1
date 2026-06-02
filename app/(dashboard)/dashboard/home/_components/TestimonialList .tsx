import { connectToDB } from '@/lib/connectToDB'
import Section from '@/models/(home)/section'
import Testimonial from '@/models/(home)/testimonial'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function loadHero() {
    await connectToDB()
    const sections = await Testimonial.find().limit(50)
    return sections
}


async function TestimonialList() {
    const sections = await loadHero()
    return (
        <div className='grid grid-col-3 gap-4'>
            {
                sections.map((section: any) => (
                    <Link
                        className='w-auto'
                        key={section.id}
                        href={`/dashboard/home/testimonials/${section.id}`}>
                        <div className="border p-4 shadow rounded mb-4 w-auto">
                            <div className="flex items-start gap-4">
                                <div className="space-y-2">
                                    <p className="text-lg font-bold">{section.title}</p>
                                    <p className="font-bold">{section.name}</p>
                                    <p className="">{section.company}</p>
                                    <p className="">{section.position}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div >
    )
}

export default TestimonialList