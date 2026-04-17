import React from 'react'
import BackButton from '@/components/backButton'
import EditChair from '../../_components/EditChair';
import getChair from '@/lib/team/getChair';


async function ChairEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const team = await getChair(id)
    console.log(team);

    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditChair team={team} />
        </div>
    )
}

export default ChairEdit