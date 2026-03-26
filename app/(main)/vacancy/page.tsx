import React from 'react'
import Category from './_components/category'

import VacancyTable from './_components/vacancyTable'


function Vacancy() {
    return (
        <div className="space-y-14">
            <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                            VACANCIES
                        </p>
                        <h1 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
                            Opportunities
                        </h1>
                    </div>
                    <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                        Browse open roles and apply directly. Listings are updated as new
                        opportunities become available.
                    </p>
                </div>

                <div className="mt-10">
                    <Category />
                </div>
            </section>

            <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                        OPEN ROLES
                    </p>
                    <h2 className="text-balance font-[var(--font-display)] text-2xl text-foreground md:text-3xl">
                        Top Jobs Available
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Listing released just when you visited our website.
                    </p>
                </div>

                <div className="mt-8">
                    <VacancyTable />
                </div>
            </section>
        </div>
    )
}

export default Vacancy
