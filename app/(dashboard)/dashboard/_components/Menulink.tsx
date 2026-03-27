'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function MenuLink({ data }: any) {
  const pathName = usePathname()
  const isActive = pathName === data.path || pathName.startsWith(data.path + '/')

  return (
    <Link
      href={data.path}
      className={[
        'flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition',
        isActive
          ? 'bg-white/15 font-medium text-white'
          : 'text-white/70 hover:bg-white/10 hover:text-white',
      ].join(' ')}
    >
      <span className="text-base opacity-80">{data.icon}</span>
      {data.title}
    </Link>
  )
}

export default MenuLink
