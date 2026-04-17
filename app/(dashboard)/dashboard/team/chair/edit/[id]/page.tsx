import BackButton from '@/components/backButton'
import React from 'react'
import ChairForm from '../../../_components/ChairForm'
import getChair from '@/lib/team/getChair'

async function ChairEditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const chair = await getChair(id)

    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <ChairForm chair={chair} />
        </div>
    )
}

export default ChairEditPage