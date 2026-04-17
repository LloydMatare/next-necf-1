import React from 'react'

import getContact from '@/lib/getContact'
import EditForm from '../../_components/EditForm'
//@ts-ignore
async function EditContact({ params }) {
    const { id } = await params
    const contact = await getContact()
    return (
        <div className='p-4'>
            <EditForm contact={contact} />
        </div>
    )
}

export default EditContact