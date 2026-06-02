import { connectToDB } from '@/lib/connectToDB'
import Home from '@/models/(home)/home'
import React from 'react'


export async function ladGallery() {
    await connectToDB()
    const homes = await Home.find().limit(50)
    return homes
}


async function HomeList() {
    return (
        <div>HomeList</div>
    )
}

export default HomeList