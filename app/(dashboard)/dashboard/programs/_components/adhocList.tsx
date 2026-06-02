import { connectToDB } from '@/lib/connectToDB'
import TaskForce from '@/models/(programs)/taskforce'
import React from 'react'
import ProgramsCard from './programsCard'
import Adhoc from '@/models/(programs)/adhoc'
import Link from 'next/link'
import Image from 'next/image'

export async function loadTasks() {
    await connectToDB()
    const tasks = await Adhoc.find().limit(50)
    return tasks
}


async function AdhocList() {
    const tasks = await loadTasks()
    return (
        <div className=''>
            {
                tasks.map((task) => (
                    <Link
                        className=''
                        key={task.id}
                        href={`/dashboard/programs/adhoc/${task.id}`}>
                        <div className="border p-4 shadow rounded mb-4">
                            <div className="flex items-start gap-2 text-sm text-slate-600">
                                <Image
                                    src={task.image}
                                    alt={task.title}
                                    width={200} height={200}
                                    className='rounded border' />
                                <div className="space-y-2">
                                    <p className="text-lg font-bold">{task.title}</p>
                                    <p className="font-bold">{task.subtitle}</p>
                                    <p className="">{task.description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default AdhocList