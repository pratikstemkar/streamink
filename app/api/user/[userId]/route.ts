import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  try {
    await dbConnect();
    const user = await User.findOne({ _id: userId });
    return NextResponse.json({ message: "User found!", user }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "User not found!" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  const updateUser = await req.json();
  console.log(updateUser);
  try {
    await dbConnect();
    await User.findOneAndUpdate({ _id: userId }, updateUser);
    return NextResponse.json({ message: "User Updated!" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "User not Updated!" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  try {
    await dbConnect();
    await User.findOneAndDelete({ _id: userId });
    return NextResponse.json({ message: "User Deleted!" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "User not deleted!" }, { status: 500 });
  }
}
