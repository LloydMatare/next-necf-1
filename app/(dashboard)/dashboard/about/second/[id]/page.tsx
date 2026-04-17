import React from 'react'
import BackButton from '@/components/backButton'
import EditSecond from '../../_components/EditSecond'
import getSecond from '@/lib/(about)/aboutSecond/getSecond'

//@ts-ignore
async function ProgramEdit({ params }) {
    const { id } = await params
    const program = await getSecond(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditSecond gallery={program} />
        </div>
    )
}

export default ProgramEdit