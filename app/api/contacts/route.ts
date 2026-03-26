export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Contact from "@/models/ contact"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { email, address, telephone } = await req.json()
    await connectToDB()
    await Contact.create({ email, address, telephone })
    return NextResponse.json({ message: "about Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await Contact.find()
    return NextResponse.json({ about })
}
