export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Policy from "@/models/(downloads)/policy"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, date } = await req.json()
    await connectToDB()
    await Policy.create({ title, document, date })
    return NextResponse.json({ message: "policy Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const policy = await Policy.find()
    return NextResponse.json({ policy })
}
