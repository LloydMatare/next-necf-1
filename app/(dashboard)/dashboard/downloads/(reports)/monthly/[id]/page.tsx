import React from 'react'
import BackButton from '@/components/backButton'
import EditMonthly from '../../../_components/editMonthly'
import getMonthly from '@/lib/download/getMonthly'

async function MonthlyEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const download = await getMonthly(id)
    return (
        <div className='p-4'>
            <div className="flex justify-end">
                <BackButton />
            </div>
            <EditMonthly download={download} />
        </div>
    )
}

export default MonthlyEdit