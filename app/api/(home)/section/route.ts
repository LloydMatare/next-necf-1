export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Section from "@/models/(home)/section"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, title2, image } = await req.json()
    await connectToDB()
    await Section.create({ title, title2, image })
    return NextResponse.json({ message: "Section Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const section = await Section.find()
    return NextResponse.json({ section })
}
