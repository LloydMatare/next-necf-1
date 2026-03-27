import React from 'react'
import { HomeTabs } from './_components/HomeTabs'

function Home() {
    return (
        <div className='p-6 md:p-8 bg-gradient-to-br from-emerald-50/40 via-white to-gray-50 min-h-screen'>
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent">
                        Home Content Management
                    </h1>
                    <p className="text-emerald-600/70 mt-2">Manage all sections of your homepage</p>
                </div>
                <HomeTabs />
            </div>
        </div>
    )
}

export default Home