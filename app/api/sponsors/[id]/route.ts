export const dynamic = "force-dynamic";
import { connectToDB } from "@/lib/connectToDB";
import Sponsor from "@/models/sponsors";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
      await connectToDB();
      const { id } = await params;
      const deletedSponsor = await Sponsor.findByIdAndDelete(id);
  
      if (!deletedSponsor) {
        return NextResponse.json(
          { message: "Sponsor not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { message: "Sponsor deleted successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error deleting sponsor:", error);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
  
  export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) {
    await connectToDB();
    try {
      const { id } = await params;
      const sponsor = await Sponsor.findById(id);
  
      if (!sponsor) {
        return NextResponse.json(
          { message: "Sponsor not found" },
          { status: 400 }
        );
      }
  
      return NextResponse.json(sponsor);
    } catch (error) {
      return NextResponse.json({ message: "Sponsor error" }, { status: 400 });
    }
  }
  
  export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) {
    const body = await request.json();
    await connectToDB();
    try {
      const { id } = await params;
      const sponsorUpdated = await Sponsor.findByIdAndUpdate(id, body, { new: true });
  
      if (!sponsorUpdated) {
        return NextResponse.json(
          { message: "Sponsor not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(sponsorUpdated);
    } catch (error) {
      return NextResponse.json({ message: "Sponsor error" }, { status: 400 });
    }
  }
