export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import About from "@/models/(about)/about"



import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, title2, title3, title4, title5, image, image2, image3, image4 } = await req.json()
    await connectToDB()
    await About.create({ title, title2, title3, title4, title5, image, image2, image3, image4 })
    return NextResponse.json({ message: "about Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await About.find()
    return NextResponse.json({ about })
}
