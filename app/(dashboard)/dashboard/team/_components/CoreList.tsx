import React from 'react'
import CoresCard from './CoresCard'
import { connectToDB } from '@/lib/connectToDB'
import Core from '@/models/cores'

export async function loadCores() {
    await connectToDB()
    const core = await Core.find().limit(50)
    return core
}


async function CoreList() {

    const cores = await loadCores()

    return (
        <div>
            {
                cores.map((core: any) => (
                    <CoresCard
                        id={core.id}
                        key={core.id}
                        title={core.title}
                        link={core.link}
                        position={core.position}
                        image={core.image}
                    />
                ))
            }
        </div>
    )
}

export default CoreList