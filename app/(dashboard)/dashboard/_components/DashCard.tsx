import React from 'react'

interface DashCardProps {
  title: string
  value: number | string
  subtitle?: string
  recent?: string
  icon?: React.ReactNode
}

function DashCard({ title, value, subtitle, recent, icon }: DashCardProps) {
  return (
    <div className="group rounded-2xl bg-background p-5 ring-1 ring-border/60 transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {title}
          </p>
          <p className="mt-2 text-3xl font-bold text-foreground">{value}</p>
        </div>
        {icon ? (
          <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-700/10 text-emerald-800 ring-1 ring-emerald-600/20">
            {icon}
          </div>
        ) : (
          <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-700/10 ring-1 ring-emerald-600/20">
            <span className="text-lg font-bold text-emerald-700">#</span>
          </div>
        )}
      </div>

      {(subtitle || recent) && (
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          {subtitle && <span className="font-medium text-emerald-700">{subtitle}</span>}
          {subtitle && recent && <span>·</span>}
          {recent && <span>{recent}</span>}
        </div>
      )}
    </div>
  )
}

export default DashCard
