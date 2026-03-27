// _components/HeroList.tsx
import { connectToDB } from '@/lib/connectToDB';
import Hero from '@/models/(home)/hero';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Eye, Edit, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Hero {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
}

export async function loadHero(): Promise<Hero[]> {
  await connectToDB();
  const heros = await Hero.find().sort({ createdAt: -1 }).lean();
  return heros.map(hero => ({
    ...hero,
    id: hero._id.toString(),
    createdAt: hero.createdAt
  }));
}

async function HeroList() {
  const heros = await loadHero();

  if (!heros || heros.length === 0) {
    return (
      <div className="text-center py-16 bg-gradient-to-br from-emerald-50/50 to-white rounded-2xl border border-emerald-100">
        <div className="inline-flex p-4 bg-emerald-100 rounded-full mb-4">
          <Eye className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-semibold text-emerald-800">No hero sections yet</h3>
        <p className="text-emerald-600/70 mt-2">Create your first hero section to get started</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {heros.map((hero) => (
        <Link
          key={hero.id}
          href={`/dashboard/home/hero/${hero.id}`}
          className="group block transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative bg-white rounded-2xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-50">
              {hero.image ? (
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Eye className="h-14 w-14 text-emerald-400" />
                </div>
              )}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-bold text-emerald-900 text-lg line-clamp-2 mb-2 group-hover:text-emerald-600 transition-colors">
                {hero.title}
              </h3>
              <p className="text-emerald-600/70 text-sm line-clamp-2 mb-4">
                {hero.description}
              </p>
              
              {/* Meta info */}
              <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
                <div className="flex items-center gap-2 text-xs text-emerald-500">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{formatDistanceToNow(new Date(hero.createdAt), { addSuffix: true })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-emerald-50 rounded-lg text-xs font-medium text-emerald-700 group-hover:bg-emerald-100 transition-colors">
                    <Edit className="h-3.5 w-3.5" />
                    Edit
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>
              </div>
            </div>

            {/* Animated border */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HeroList;