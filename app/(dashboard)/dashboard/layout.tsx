export const dynamic = 'force-dynamic'
import React from 'react'
import Sidebar from './_components/Sidebar'
import Navbar from './_components/Navbar'
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { options } from "@/app/api/auth/[...nextauth]/options"

async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)
  if (!session) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-dvh bg-muted/40">
      {/* Sidebar — fixed width */}
      <aside className="hidden w-64 shrink-0 md:block">
        <Sidebar />
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
