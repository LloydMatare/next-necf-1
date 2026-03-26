import React from 'react'
import DownloadCard from './_components/downloadCard'
import { Quarters } from './_components/quarters'
import { connectToDB } from '@/lib/connectToDB'
import Download from '@/models/(downloads)/download'

async function getDownloads() {
    await connectToDB()
    const downloads = await Download.find()
    return downloads;
}


async function Downloads() {

    const downloads = await getDownloads()
    return (
        <div className="space-y-14">
            <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                            DOWNLOADS
                        </p>
                        <h1 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
                            Documents and Publications
                        </h1>
                    </div>
                    <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                        Browse documents, reports, and publications. Use the reports tabs to
                        explore research, task force outputs, and more.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {downloads.map((download: any) => (
                        <DownloadCard
                            title={download.title}
                            date={download.date}
                            document={download.document}
                            key={download.document}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                            REPORTS
                        </p>
                        <h2 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
                            Explore Reports
                        </h2>
                    </div>
                    <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                        Switch categories to find the content you need quickly.
                    </p>
                </div>

                <div className="mt-8">
                    <Quarters />
                </div>
            </section>
        </div>
    )
}

export default Downloads
