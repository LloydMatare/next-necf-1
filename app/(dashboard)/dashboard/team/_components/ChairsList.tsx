import React from 'react'
import ChairsCard from './ChairsCard'
import { connectToDB } from '@/lib/connectToDB'
import Chairs from '@/models/chairs'

export async function loadChairs() {
    await connectToDB()
    const chairs = await Chairs.find().limit(50)
    return chairs
}

async function ChairsList() {
    const chairs = await loadChairs()
    return (
        <div className='flex flex-col gap-4'>
            {chairs.map((chair: any) => (
                <ChairsCard
                    id={chair.id}
                    key={chair.id}
                    title={chair.title}
                    link={chair.link}
                    position={chair.position}
                    image={chair.image}
                />
            ))}
        </div>
    )
}

export default ChairsList