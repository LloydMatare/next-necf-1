import React from 'react'

import { connectToDB } from '@/lib/connectToDB'
import DownloadCard from './downloadCard'
import Monthly from '@/models/(downloads)/monthly'
import Presentation from '@/models/(downloads)/presentation'



export async function loadDownload() {
    await connectToDB()
    const presents = await Presentation.find().limit(50)
    return presents
}


//@ts-ignore
async function PresentList() {
    const presents = await loadDownload()
    return (
        <div className='flex flex-col gap-4'>
            {/* <div className="flex font-bold items-center justify-between">
                <p className="">Name</p>
                <p className="">Job Type</p>
                <p className="">Due Date</p>
            </div> */}
            {
                presents.map((present: any) => {
                    return (
                        <DownloadCard
                            route={'presentation'}
                            key={present.id}
                            link={present.id}
                            title={present.title}
                            document={present.document}
                            imageUrl={present.imageUrl}
                            date={present.date}
                        />
                    )
                })
            }
        </div>
    )
}

export default PresentList