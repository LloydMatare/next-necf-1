import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Event from "@/models/events/events";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const event = await Event.findById(id).lean();
        if (!event) {
            return NextResponse.json(
                {
                    message: "Event NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(event);
    } catch (error) {
        console.log("Failed to fetch Event", error);
        return NextResponse.json(
            {
                message: "Failed to fetch event",
            },
            {
                status: 500,
            }
        );
    }
}


export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const { title, subtitle, description, image } = await request.json()
        const data = { title, subtitle, description, image }

        const updatedEvent = await Event.findByIdAndUpdate(id, data, { new: true }).lean();
        if (!updatedEvent) {
            return NextResponse.json(
                {
                    message: "Event NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedEvent);
    } catch (error) {
        console.log("Failed to update event", error);
        return NextResponse.json(
            {
                message: "Failed to update event",
            },
            {
                status: 500,
            }
        );
    }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        await Event.findByIdAndDelete(id);
        return NextResponse.json({
            message: "Event deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete event",
        }, {
            status: 500
        })
    }
}
