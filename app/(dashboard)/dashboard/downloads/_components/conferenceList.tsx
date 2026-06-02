import React from 'react'

import { connectToDB } from '@/lib/connectToDB'
import DownloadCard from './downloadCard'
import Conference from '@/models/(downloads)/conference'



export async function loadDownload() {
    await connectToDB()
    const conference = await Conference.find().limit(50)
    return conference
}


//@ts-ignore
async function ConferenceList() {
    const conferences = await loadDownload()
    return (
        <div className='flex flex-col gap-4'>
            {/* <div className="flex font-bold items-center justify-between">
                <p className="">Name</p>
                <p className="">Job Type</p>
                <p className="">Due Date</p>
            </div> */}
            {
                conferences.map((conference: any) => {
                    return (
                        <DownloadCard
                            route={'conference'}
                            key={conference.id}
                            link={conference.id}
                            title={conference.title}
                            document={conference.document}
                            imageUrl={conference.imageUrl}
                            date={conference.date}
                        />
                    )
                })
            }
        </div>
    )
}

export default ConferenceList