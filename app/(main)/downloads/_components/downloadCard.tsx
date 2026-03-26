import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarDays, FileDown } from 'lucide-react';

interface DownloadProps {
    title: string,
    date: string
    document: string
}

function DownloadCard({ title, date, document }: DownloadProps) {
    const formattedDate = date ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }) : "";

    return (
        <div className="flex w-full flex-col gap-4 rounded-3xl bg-background/60 p-5 ring-1 ring-border/60 transition hover:bg-background/70 md:flex-row md:items-center">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-700/10 text-emerald-800 ring-1 ring-emerald-600/20">
                <FileDown className="h-6 w-6" />
            </div>

            <div className="flex-1 space-y-2">
                <p className="text-balance font-medium text-foreground">{title}</p>
                {formattedDate ? (
                    <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarDays className="h-4 w-4" />
                        {formattedDate}
                    </p>
                ) : null}
            </div>

            <Button asChild className="h-11 rounded-xl bg-emerald-700 hover:bg-emerald-600">
                <Link href={document} target="_blank">
                    Open
                </Link>
            </Button>
        </div>
    )
}

export default DownloadCard
