import React from 'react'
import EditTeam from '../_components/EditTeam'
import getTeam from '@/lib/team/getTeam'

async function TeamEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const team = await getTeam(id)
    return (
        <div className='p-4'>
            <EditTeam team={team} />
        </div>
    )
}

export default TeamEdit