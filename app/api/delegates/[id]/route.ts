//@ts-nocheck
import { NextResponse } from "next/server";

import Company from "@/models/company";
import Delegate from "@/models/delegates";
import { connectToDB } from "@/lib/connectToDB";

// UPDATE (PUT) - Update a company and its delegates
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDB();
    const { id } = await params;
    const { companyName, contactPerson, email, tel, mobile, delegates } =
      await req.json();

    const company = await Company.findByIdAndUpdate(
      id,
      { name: companyName, contactPerson, email, tel, mobile },
      { new: true }
    );

    if (!company) {
      return NextResponse.json(
        { success: false, message: "Company not found" },
        { status: 404 }
      );
    }

    await Delegate.deleteMany({ company: id });
    const updatedDelegates = delegates.map((delegate: any) => ({
      ...delegate,
      company: id,
    }));
    await Delegate.insertMany(updatedDelegates);

    return NextResponse.json(
      { success: true, message: "Company and delegates updated!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

// DELETE - Delete a company and its delegates
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDB();
    const { id } = await params;

    const company = await Company.findByIdAndDelete(id);
    if (!company) {
      return NextResponse.json(
        { success: false, message: "Company not found" },
        { status: 404 }
      );
    }

    await Delegate.deleteMany({ company: id });

    return NextResponse.json(
      { success: true, message: "Company and delegates deleted!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
