export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Hero from "@/models/(home)/hero"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, image } = await req.json()
    await connectToDB()
    await Hero.create({ title, description, image })
    return NextResponse.json({ message: "Hero Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const hero = await Hero.find()
    return NextResponse.json({ hero })
}
