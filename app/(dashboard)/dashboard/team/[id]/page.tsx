import React from 'react'
import getTeam from '@/lib/team/getTeam'
import BackButton from '@/components/backButton'
import EditForm from '../_components/EditTeam'


//@ts-ignore
async function TeamEdit({ params }) {
    const { id } = await params
    const team = await getTeam(id)
    console.log(team);

    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditForm team={team} />
        </div>
    )
}

export default TeamEdit