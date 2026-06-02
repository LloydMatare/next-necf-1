import React from 'react'
import BackButton from '@/components/backButton'
import EditPolicy from '../../../_components/editPolicy'
import getPolicy from '@/lib/download/getPolicy'


async function DownloadEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const download = await getPolicy(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditPolicy download={download} />
        </div>
    )
}

export default DownloadEdit