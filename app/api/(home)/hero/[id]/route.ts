import { connectToDB } from "@/lib/connectToDB";
import Hero from "@/models/(home)/hero";




import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const hero = await Hero.findById(id)

        if (!hero) {
            return NextResponse.json(
                {
                    message: "hero not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(hero)

    } catch (error) {
        return NextResponse.json({ message: "hero error" }, { status: 400 })
    }
}


export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    const body = await request.json()
    await connectToDB()
    try {
        const { id } = await params
        const heroUpdated = await Hero.findByIdAndUpdate(id, body)

        if (!heroUpdated) {
            return NextResponse.json(
                {
                    message: "hero not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(heroUpdated)

    } catch (error) {
        return NextResponse.json({ message: "hero error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const hero = await Hero.findByIdAndDelete(id)

        if (!hero) {
            return NextResponse.json(
                {
                    message: "hero not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(hero)

    } catch (error) {
        return NextResponse.json({ message: "hero error" }, { status: 400 })
    }
}
