import BackButton from '@/components/backButton'
import getCore from '@/lib/team/getCore'
import React from 'react'
import CoreForm from '../../../_components/CoreForm'

//@ts-ignore
async function CoreEditPage({ params }) {
    const { id } = await params
    const core = await getCore(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <CoreForm core={core} />
        </div>
    )
}

export default CoreEditPage