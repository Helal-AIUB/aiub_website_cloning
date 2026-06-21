import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { verifyPassword } from "@/app/lib/auth";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await verifyPassword(password, user.password))) {
    return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 });
  }

  (await cookies()).set("session", user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // ১ দিন
  });

  return NextResponse.json({ success: true, user: { name: user.name, email: user.email } });
}