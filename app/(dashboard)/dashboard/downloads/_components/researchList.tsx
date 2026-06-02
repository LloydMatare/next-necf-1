import React from 'react'

import { connectToDB } from '@/lib/connectToDB'
import Research from '@/models/(downloads)/research'
import DownloadCard from './downloadCard'



export async function loadDownload() {
    await connectToDB()
    const research = await Research.find().limit(50)
    return research
}


//@ts-ignore
async function ResearchList() {
    const research = await loadDownload()
    return (
        <div className='flex flex-col gap-4'>
            {/* <div className="flex font-bold items-center justify-between">
                <p className="">Name</p>
                <p className="">Job Type</p>
                <p className="">Due Date</p>
            </div> */}
            {
                research.map((research: any) => {
                    return (
                        <DownloadCard
                            route={'research'}
                            key={research.id}
                            link={research.id}
                            title={research.title}
                            document={research.document}
                            imageUrl={research.imageUrl}
                            date={research.date}
                        />
                    )
                })
            }
        </div>
    )
}

export default ResearchList