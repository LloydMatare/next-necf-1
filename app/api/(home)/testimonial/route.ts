export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Testimonial from "@/models/(home)/testimonial"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, name, company, position } = await req.json()
    await connectToDB()
    await Testimonial.create({ title, name, company, position })
    return NextResponse.json({ message: "Testimonial Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await Testimonial.find()
    return NextResponse.json({ about })
}
