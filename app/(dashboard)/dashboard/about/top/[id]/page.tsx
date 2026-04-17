import React from 'react'
import BackButton from '@/components/backButton'
import EditTop from '../../_components/EditTop'
import getTop from '@/lib/(about)/aboutTop/getTop'

async function ProgramEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const program = await getTop(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditTop gallery={program} />
        </div>
    )
}

export default ProgramEdit