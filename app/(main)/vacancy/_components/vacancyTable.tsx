// 'use client'
// import * as React from 'react';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Button } from '@/components/ui/button';
import { connectToDB } from '@/lib/connectToDB';
import Vacancy from '@/models/vacancy';

export async function loadVacancy() {
    await connectToDB()
    const vacancies = await Vacancy.find()
    return vacancies
}

import React from 'react'
import { JobModal } from './jobModal';

async function VacancyTable() {

    const vacancies = await loadVacancy()

    return (
        <div className="space-y-4">
            {
                vacancies.length === 0 ? (
                    <div className="rounded-2xl bg-background/60 p-6 text-center text-sm text-muted-foreground ring-1 ring-border/60">
                        No vacancies currently...
                    </div>
                ) :
                    (
                        vacancies.map((vacancy) => (
                            <div
                                key={vacancy.name}
                                className="flex flex-col gap-4 rounded-3xl bg-background/60 p-6 ring-1 ring-border/60 md:flex-row md:items-center md:justify-between">
                                <div className="space-y-2">
                                    <p className="text-balance font-[var(--font-display)] text-xl text-foreground md:text-2xl">
                                        {vacancy.name}
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                                        {vacancy.jobType ? (
                                            <span className="rounded-full bg-background/60 px-3 py-1 ring-1 ring-border/60">
                                                {vacancy.jobType}
                                            </span>
                                        ) : null}
                                        {vacancy.dueDate ? (
                                            <span className="rounded-full bg-background/60 px-3 py-1 ring-1 ring-border/60">
                                                Due: {vacancy.dueDate}
                                            </span>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="">
                                    <JobModal />
                                </div>
                            </div>
                        ))
                    )
            }
        </div>
    )
}

export default VacancyTable
