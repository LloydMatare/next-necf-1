import React from 'react'

import { connectToDB } from '@/lib/connectToDB'
import DownloadCard from './downloadCard'
import Monthly from '@/models/(downloads)/monthly'
import Task from '@/models/(downloads)/task'



export async function loadDownload() {
    await connectToDB()
    const tasks = await Task.find().limit(50)
    return tasks
}


//@ts-ignore
async function TaskList() {
    const tasks = await loadDownload()
    return (
        <div className='flex flex-col gap-4'>
            {/* <div className="flex font-bold items-center justify-between">
                <p className="">Name</p>
                <p className="">Job Type</p>
                <p className="">Due Date</p>
            </div> */}
            {
                tasks.map((task: any) => {
                    return (
                        <DownloadCard
                            route={'task'}
                            key={task.id}
                            link={task.id}
                            title={task.title}
                            document={task.document}
                            imageUrl={task.imageUrl}
                            date={task.date}
                        />
                    )
                })
            }
        </div>
    )
}

export default TaskList