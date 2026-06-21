import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function POST(req: Request) {
  try {
    const { title, imageUrl, description } = await req.json();
    
    const newNews = await db.newsEvent.create({
      data: { title, imageUrl, description, category: "news" },
    });

    return NextResponse.json({ success: true, news: newNews });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to post" }, { status: 500 });
  }
}