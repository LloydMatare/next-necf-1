export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Research from "@/models/(downloads)/research"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, date } = await req.json()
    await connectToDB()
    await Research.create({ title, document, date })
    return NextResponse.json({ message: "research Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const research = await Research.find()
    return NextResponse.json({ research })
}
