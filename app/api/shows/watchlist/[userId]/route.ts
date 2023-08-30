import dbConnect from "@/lib/dbConnect";
import Watchlist from "@/models/Watchlist";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  try {
    await dbConnect();
    const watchlist = await Watchlist.findOne({ userId: userId });
    return NextResponse.json(
      { message: "Watchlist found!", watchlist },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Watchlist not found!" },
      { status: 500 }
    );
  }
}
