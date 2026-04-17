import React from 'react'
import BackButton from '@/components/backButton'
import getTaskForce from '@/lib/download/getTaskforce'
import EditTaskForce from '../../_components/EditTaskForce'

//@ts-ignore
async function ProgramEdit({ params }) {
    const { id } = await params
    const program = await getTaskForce(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditTaskForce program={program} />
        </div>
    )
}

export default ProgramEdit