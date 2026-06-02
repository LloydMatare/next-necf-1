import React from 'react'
import BackButton from '@/components/backButton'
import EditDownload from '../_components/editDownload'
import getDownload from '@/lib/download/getDownload'
import DeleteButton from '../../_components/DeleteButton'



async function DownloadEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const download = await getDownload(id)
    return (
        <div className='p-4'>
            <div className="flex items-center justify-end gap-2">
                <BackButton />

            </div>
            <EditDownload download={download} />
        </div>
    )
}

export default DownloadEdit