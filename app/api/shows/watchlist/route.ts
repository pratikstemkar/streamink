import dbConnect from "@/lib/dbConnect";
import Watchlist from "@/models/Watchlist";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId, showId } = await req.json();
  try {
    await dbConnect();
    await Watchlist.findOneAndUpdate(
      { userId: userId },
      { $addToSet: { shows: showId } },
      { upsert: true, new: true }
    );
    return NextResponse.json(
      { message: "Show Added to Watchlist." },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json({ message: "Error: " + e }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { userId } = await req.json();
  try {
    await dbConnect();
    const watchlist = await Watchlist.findOne({ userId: userId });
    return NextResponse.json(
      { message: "Watchlist Found!", watchlist },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: "Error: " + e }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { userId, showId } = await req.json();
  try {
    await dbConnect();
    await Watchlist.findOneAndUpdate(
      { userId: userId },
      { $pull: { shows: showId } },
      { new: true }
    );
    return NextResponse.json(
      { message: "Show removed from Watchlist!" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: "Show not removed!" }, { status: 500 });
  }
}
