'use client'

import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import {
  CalendarDays,
  Download,
  Users,
  Megaphone,
  ArrowRight,
  Briefcase,
  FileText,
  Globe,
} from 'lucide-react'
import DashCard from './_components/DashCard'

const quickLinks = [
  { label: 'Home page', href: '/dashboard/home', icon: <Globe className="h-4 w-4" /> },
  { label: 'Programmes', href: '/dashboard/programs', icon: <CalendarDays className="h-4 w-4" /> },
  { label: 'Team', href: '/dashboard/team', icon: <Users className="h-4 w-4" /> },
  { label: 'Downloads', href: '/dashboard/downloads', icon: <FileText className="h-4 w-4" /> },
  { label: 'Vacancies', href: '/dashboard/vacancy', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Contact', href: '/dashboard/contact', icon: <Megaphone className="h-4 w-4" /> },
]

export default function Dashboard() {
  const { data: session } = useSession()
  const name = session?.user?.name ?? 'Admin'

  return (
    <div className="space-y-8">
      {/* Welcome banner */}
      <section className="overflow-hidden rounded-2xl bg-emerald-950 p-6 text-white ring-1 ring-emerald-900/40 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
          Dashboard
        </p>
        <h1 className="mt-2 font-[var(--font-display)] text-2xl leading-tight md:text-3xl">
          Welcome back, {name}
        </h1>
        <p className="mt-2 max-w-xl text-sm text-white/70">
          Manage site content, events, downloads, and team information from
          here.
        </p>
      </section>

      {/* Stat cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashCard
          title="Events"
          value={5}
          subtitle="Upcoming"
          recent="2 recently attended"
          icon={<CalendarDays className="h-5 w-5" />}
        />
        <DashCard
          title="Downloads"
          value={4}
          subtitle="Published"
          recent="2 recently added"
          icon={<Download className="h-5 w-5" />}
        />
        <DashCard
          title="Team Members"
          value={23}
          subtitle="Active"
          recent="Across all roles"
          icon={<Users className="h-5 w-5" />}
        />
        <DashCard
          title="Delegates"
          value={12}
          subtitle="Registered"
          recent="For upcoming events"
          icon={<Megaphone className="h-5 w-5" />}
        />
      </section>

      {/* Quick links */}
      <section className="rounded-2xl bg-background p-6 ring-1 ring-border/60">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Quick links
        </p>
        <h2 className="mt-1 text-lg font-semibold text-foreground">
          Jump to a section
        </h2>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-3 rounded-xl bg-muted/50 p-4 ring-1 ring-border/60 transition hover:bg-muted hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-700/10 text-emerald-800 ring-1 ring-emerald-600/20">
                  {link.icon}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {link.label}
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
