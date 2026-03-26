import getMilestones from '@/lib/(home)/milestone/getMilestones'
import React from 'react'

async function Statistic() {


    const milestones = await getMilestones()
    const items = Array.isArray(milestones) ? milestones.slice(0, 4) : [];

    return (
      <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
              IMPACT
            </p>
            <h2 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
              NECF Milestones
            </h2>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Key markers that reflect progress, participation, and reach across our
            programmes.
          </p>
        </div>

        {items.length ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((m: any, idx: number) => (
              <div
                key={m?._id || m?.title || idx}
                className="rounded-2xl bg-background/60 p-5 ring-1 ring-border/60"
              >
                <p className="text-4xl font-semibold text-foreground">
                  {m?.number}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {m?.title}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl bg-background/60 p-6 ring-1 ring-border/60">
            <p className="text-sm text-muted-foreground">
              No milestones available yet.
            </p>
          </div>
        )}
      </section>
    )
}

export default Statistic
