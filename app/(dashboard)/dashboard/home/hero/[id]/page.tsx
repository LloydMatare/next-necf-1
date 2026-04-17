import React from 'react'
import EditHero from '../../_components/EditHero'
import BackButton from '@/components/backButton'
import getHero from '@/lib/(home)/hero/getHero'

async function ProgramEdit({ params }) {
    const { id } = await params
    const hero = await getHero(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditHero hero={hero} />
        </div>
    )
}

export default ProgramEdit