import React from 'react'
import BackButton from '@/components/backButton'
import EditSection from '../../_components/EditSection'
import getSection from '@/lib/(about)/aboutSection/getSection'

//@ts-ignore
async function ProgramEdit({ params }) {
    const { id } = await params
    const program = await getSection(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditSection gallery={program} />
        </div>
    )
}

export default ProgramEdit