import React from 'react'
import BackButton from '@/components/backButton'
import EditTop from '../../_components/EditTop'
import getTop from '@/lib/(about)/aboutTop/getTop'

//@ts-ignore
async function ProgramEdit({ params }) {
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