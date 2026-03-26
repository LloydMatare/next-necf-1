export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Program from "@/models/(programs)/program"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, image, subtitle } = await req.json()
    await connectToDB()
    await Program.create({ title, description, image, subtitle })
    return NextResponse.json({ message: "Program  Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const programs = await Program.find()
    return NextResponse.json({ programs })
}
