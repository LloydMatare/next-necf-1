import React from 'react'
import BackButton from '@/components/backButton'
import EditMain from '../../_components/EditMain'
import getSection from '@/lib/(home)/section/getSection'
import EditTestimonial from '../../_components/EditTestimonial'
import getTestimonial from '@/lib/(home)/testimonial/getTestimonial'

async function ProgramEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const section = await getTestimonial(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditTestimonial section={section} />
        </div>
    )
}

export default ProgramEdit