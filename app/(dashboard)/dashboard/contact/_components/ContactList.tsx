import React from 'react'
import ContactCard from './ContactCard'



function ContactList({ contacts }: { contacts: any }) {
    // Handle different response formats from API
    const contactsArray = contacts?.about || contacts || [];

    if (!Array.isArray(contactsArray) || contactsArray.length === 0) {
        return (
            <div className='p-8 flex flex-col gap-4'>
                <p className="text-gray-500">No contacts found.</p>
            </div>
        );
    }

    return (
        <div className='p-8 flex flex-col gap-4'>
            {
                contactsArray.map((contact: any) => (
                    <ContactCard
                        key={contact._id || contact.id}
                        link={contact._id || contact.id}
                        address={contact.address}
                        telephone={contact.telephone}
                        email={contact.email}
                    />
                ))
            }
        </div>
    )
}

export default ContactList