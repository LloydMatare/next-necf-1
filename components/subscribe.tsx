import React from 'react'

function Subscribe() {
    return (
        <section className="rounded-3xl bg-emerald-950 p-6 text-white ring-1 ring-emerald-900/40 md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-xs font-semibold tracking-widest text-white/70">
                        NEWSLETTER
                    </p>
                    <h2 className="mt-2 text-balance font-[var(--font-display)] text-3xl leading-tight md:text-4xl">
                        Get updates from NECF
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm text-white/75 md:text-base">
                        Subscribe for announcements, programmes, and featured news.
                    </p>
                </div>

                <div className="w-full max-w-xl">
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <input
                            id="email"
                            type="email"
                            className="h-12 w-full rounded-xl bg-white/10 px-4 text-sm text-white placeholder:text-white/55 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-300/60"
                            placeholder="Email address"
                        />
                        <button className="h-12 shrink-0 rounded-xl bg-white px-6 text-sm font-semibold text-emerald-950 hover:bg-white/90">
                            Subscribe
                        </button>
                    </div>
                    <p className="mt-3 text-xs text-white/65">
                        We only send relevant updates. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
