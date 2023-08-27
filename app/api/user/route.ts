import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, username, image, email, password } = await req.json();
  const user = {
    name,
    username,
    image,
    email,
    password,
  };

  try {
    await dbConnect();
    await User.create(user);
    return NextResponse.json({ message: "User Added to DB." }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: "Error: " + e }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json(
      { message: "Users Found!", users },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: "Error: " + e }, { status: 500 });
  }
}
