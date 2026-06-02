import React from 'react'

import { connectToDB } from '@/lib/connectToDB'
import DownloadCard from './downloadCard'
import Policy from '@/models/(downloads)/policy'



export async function loadDownload() {
    await connectToDB()
    const policy = await Policy.find().limit(50)
    return policy
}


//@ts-ignore
async function PolicyList() {
    const policies = await loadDownload()
    return (
        <div className='flex flex-col gap-4'>
            {/* <div className="flex font-bold items-center justify-between">
                <p className="">Name</p>
                <p className="">Job Type</p>
                <p className="">Due Date</p>
            </div> */}
            {
                policies.map((policy: any) => {
                    return (
                        <DownloadCard
                            route={'policy'}
                            key={policy.id}
                            link={policy.id}
                            title={policy.title}
                            document={policy.document}
                            imageUrl={policy.imageUrl}
                            date={policy.date}
                        />
                    )
                })
            }
        </div>
    )
}

export default PolicyList