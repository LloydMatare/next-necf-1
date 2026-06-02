import React from 'react'
import BackButton from '@/components/backButton'
import EditGallery from '../../_components/EditGallery'
import getGallery from '@/lib/(programs)/gallery/getGallery'


async function GalleryEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const gallery = await getGallery(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditGallery gallery={gallery} />
        </div>
    )
}

export default GalleryEdit