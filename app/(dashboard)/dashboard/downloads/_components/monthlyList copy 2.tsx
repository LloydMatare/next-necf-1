import React from 'react'

import { connectToDB } from '@/lib/connectToDB'
import DownloadCard from './downloadCard'
import Monthly from '@/models/(downloads)/monthly'



export async function loadDownload() {
    await connectToDB()
    const monthly = await Monthly.find().limit(50)
    return monthly
}


//@ts-ignore
async function MonthList() {
    const monthlies = await loadDownload()
    return (
        <div className='flex flex-col gap-4'>
            {/* <div className="flex font-bold items-center justify-between">
                <p className="">Name</p>
                <p className="">Job Type</p>
                <p className="">Due Date</p>
            </div> */}
            {
                monthlies.map((monthly: any) => {
                    return (
                        <DownloadCard
                            route={'monthly'}
                            key={monthly.id}
                            link={monthly.id}
                            title={monthly.title}
                            document={monthly.document}
                            imageUrl={monthly.imageUrl}
                            date={monthly.date}
                        />
                    )
                })
            }
        </div>
    )
}

export default MonthList