export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Gallery from "@/models/(programs)/gallery"



import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, image } = await req.json()
    await connectToDB()
    await Gallery.create({ title, description, image })
    return NextResponse.json({ message: "about Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await Gallery.find()
    return NextResponse.json({ about })
}
