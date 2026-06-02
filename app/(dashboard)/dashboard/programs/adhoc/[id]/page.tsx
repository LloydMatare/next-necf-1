import React from 'react'
import BackButton from '@/components/backButton'
import EditAdhoc from '../../_components/EditAdhoc'
import getAdhoc from '@/lib/download/getAdhoc'

async function ProgramEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const program = await getAdhoc(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditAdhoc program={program} />
        </div>
    )
}

export default ProgramEdit