import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ success: false, message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword, 
        emailVerified: false,
      },
    });

    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error creating user" }, { status: 500 });
  }
}