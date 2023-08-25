import { ShowModel } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";

export async function POST(req: NextRequest) {
  const {
    title,
    showId,
    description,
    thumbnail,
    date,
    subtitles,
    trailer,
    rating,
    seasons,
    tags,
  } = await req.json();
  const show = {
    title,
    showId,
    description,
    thumbnail,
    date,
    subtitles,
    trailer,
    rating,
    seasons,
    tags,
  };
  try {
    await dbConnect();
    await ShowModel.create(show);
    return NextResponse.json({ message: "Show Added to DB." }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: "Error: " + e }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const shows = await ShowModel.find({});
    return NextResponse.json(
      { message: "Shows Found!", shows },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: "Error: " + e }, { status: 500 });
  }
}
