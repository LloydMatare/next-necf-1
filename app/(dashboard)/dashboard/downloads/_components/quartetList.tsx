import React from 'react'

import { connectToDB } from '@/lib/connectToDB'
import DownloadCard from './downloadCard'
import Monthly from '@/models/(downloads)/monthly'
import Quarterly from '@/models/(downloads)/quarterly'



export async function loadDownload() {
    await connectToDB()
    const quarterly = await Quarterly.find().limit(50)
    return quarterly
}


//@ts-ignore
async function QuarterList() {
    const quarters = await loadDownload()
    return (
        <div className='flex flex-col gap-4'>
            {/* <div className="flex font-bold items-center justify-between">
                <p className="">Name</p>
                <p className="">Job Type</p>
                <p className="">Due Date</p>
            </div> */}
            {
                quarters.map((quarter: any) => {
                    return (
                        <DownloadCard
                            route={'quarterly'}
                            key={quarter.id}
                            link={quarter.id}
                            title={quarter.title}
                            document={quarter.document}
                            imageUrl={quarter.imageUrl}
                            date={quarter.date}
                        />
                    )
                })
            }
        </div>
    )
}

export default QuarterList