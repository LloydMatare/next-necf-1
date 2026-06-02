import React from 'react'
import BackButton from '@/components/backButton'
import EditProgram from '../_components/EditProgramme'
import getProgram from '@/lib/(programs)/program/getProgram'

async function ProgramEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const program = await getProgram(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditProgram program={program} />
        </div>
    )
}

export default ProgramEdit