import React from 'react'
import { connectToDB } from '@/lib/connectToDB'
import Download from '@/models/(downloads)/download'
import Link from 'next/link'
import { MdTimer } from 'react-icons/md'


interface DownloadProps {
    title: String
    document: String
    imageUrl: String
    date: String
    link: String
}


export function DownloadCard({ title, document, imageUrl, date, link }: DownloadProps) {
    return (
        <Link href={`/dashboard/downloads/${link}`}>
            <div className="border p-4 shadow rounded flex items-center justify-between">
  <div className="flex flex-col gap-4 text-sm text-slate-600">
                    <p className="text-lg font-bold text-black">{title}</p>
                    <div className="flex gap-4">
                        <p className="">{document}</p>
                        <p className="">{imageUrl}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                    <MdTimer />
                    <p className="">{date}</p>
                </div>
            </div>
        </Link>
    )
}

export async function loadDownload() {
    await connectToDB()
    const downloads = await Download.find().limit(50)
    return downloads
}


//@ts-ignore
async function DownloadList() {
    const downloads = await loadDownload()
    return (
        <div className='flex flex-col gap-4'>
            {/* <div className="flex font-bold items-center justify-between">
                <p className="">Name</p>
                <p className="">Job Type</p>
                <p className="">Due Date</p>
            </div> */}
            {
                downloads.map((download: any) => {
                    return (
                        <DownloadCard
                            key={download.id}
                            link={download.id}
                            title={download.title}
                            document={download.document}
                            imageUrl={download.imageUrl}
                            date={download.date}
                        />
                    )
                })
            }
        </div>
    )
}

export default DownloadList