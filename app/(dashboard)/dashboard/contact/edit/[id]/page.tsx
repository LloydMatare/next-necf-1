import React from 'react'

import getContact from '@/lib/getContact'
import EditForm from '../../_components/EditForm'
async function EditContact({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const contact = await getContact()
    return (
        <div className='p-4'>
            <EditForm contact={contact} />
        </div>
    )
}

export default EditContact