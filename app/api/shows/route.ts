import { ShowModel } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Show } from "@/models/Show";

export async function GET(req: NextRequest) {
  await dbConnect();
  const show = await ShowModel.findById("jujuts");
  return NextResponse.json({ message: "hhe" }, { status: 200 });
}
