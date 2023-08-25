import dbConnect from "@/lib/dbConnect";
import Show from "@/models/Show";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { showId: string } }
) {
  const showId = params.showId;
  try {
    await dbConnect();
    const show = await Show.findOne({ showId: showId });
    return NextResponse.json({ message: "Show found!", show }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Show not found!" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { showId: string } }
) {
  const showId = params.showId;
  const updateShow = await req.json();
  console.log(updateShow);
  try {
    await dbConnect();
    await Show.findOneAndUpdate({ showId: showId }, updateShow);
    return NextResponse.json({ message: "Show Updated!" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Show not Updated!" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { showId: string } }
) {
  const showId = params.showId;
  try {
    await dbConnect();
    await Show.findOneAndDelete({ showId: showId });
    return NextResponse.json({ message: "Show Deleted!" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Show not deleted!" }, { status: 500 });
  }
}
