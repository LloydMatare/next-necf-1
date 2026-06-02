'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'



async function handleDelete({ buttonId, router }: any) {

    try {

        const res = await fetch(`/api/downloads/${buttonId}`, {
            method: 'DELETE'
        })

        if (res.ok) {
            toast.success("Download deleted successfully")
            router.push('/dashboard/downloads')
        } else {
            toast.error('Download delete was not successful')
        }
    } catch (error) {
        console.log(error);

    }
}

function DeleteButton({ id }: any) {
    const router = useRouter()
    return (
        <Button
            onClick={() => handleDelete({ buttonId: id, router })}
            className='bg-red-700 hover:bg-red-500'>
            Delete
        </Button>
    )
}

export default DeleteButton