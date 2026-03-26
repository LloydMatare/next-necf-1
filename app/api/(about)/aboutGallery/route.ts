export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import AboutGallery from "@/models/(about)/aboutGallery"



import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, image } = await req.json()
    await connectToDB()
    await AboutGallery.create({ title, image })
    return NextResponse.json({ message: "about Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await AboutGallery.find()
    return NextResponse.json({ about })
}
