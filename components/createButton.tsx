// components/createButton.tsx
import Link from 'next/link'
import React from 'react'
import { Plus } from 'lucide-react'

function CreateButton({ link }: { link: string }) {
    // Format the link text for display
    const displayText = link.split('/').pop()?.replace(/-/g, ' ') || link
    
    return (
        <div className="flex justify-end">
            <Link
                href={`/dashboard/${link}/add`}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-emerald-600/20 transform hover:-translate-y-0.5"
            >
                <Plus className="h-4 w-4 group-hover:rotate-90 transition-transform duration-200" />
                Create {displayText}
            </Link>
        </div>
    )
}

export default CreateButton