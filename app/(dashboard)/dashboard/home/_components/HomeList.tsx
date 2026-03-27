// _components/HeroList.tsx
import { connectToDB } from '@/lib/connectToDB'
import Hero from '@/models/(home)/hero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Eye, Edit, Calendar, Clock } from 'lucide-react'

export async function loadHero() {
    await connectToDB()
    const heros = await Hero.find().sort({ createdAt: -1 })
    return heros
}

async function HeroList() {
    const heros = await loadHero()

    if (!heros || heros.length === 0) {
        return (
            <div className="text-center py-12 bg-emerald-50/30 rounded-2xl border border-emerald-100">
                <div className="inline-flex p-3 bg-emerald-100 rounded-full mb-4">
                    <Eye className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-800">No hero sections yet</h3>
                <p className="text-emerald-600/70 mt-1">Create your first hero section to get started</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heros.map((hero: any) => (
                <Link
                    key={hero.id}
                    href={`/dashboard/home/hero/${hero.id}`}
                    className="group block"
                >
                    <div className="relative bg-white rounded-xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        {/* Image Container */}
                        <div className="relative h-48 w-full overflow-hidden bg-emerald-50">
                            {hero.image ? (
                                <Image
                                    src={hero.image}
                                    alt={hero.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <Eye className="h-12 w-12 text-emerald-300" />
                                </div>
                            )}
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="font-bold text-emerald-900 text-lg line-clamp-2 mb-2 group-hover:text-emerald-700 transition-colors">
                                {hero.title}
                            </h3>
                            <p className="text-emerald-600/70 text-sm line-clamp-2 mb-4">
                                {hero.description}
                            </p>
                            
                            {/* Meta info */}
                            <div className="flex items-center justify-between pt-3 border-t border-emerald-100">
                                <div className="flex items-center gap-1 text-xs text-emerald-500">
                                    <Calendar className="h-3 w-3" />
                                    <span>{new Date(hero.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 rounded-lg text-xs text-emerald-700">
                                        <Edit className="h-3 w-3" />
                                        Edit
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative gradient border on hover */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default HeroList