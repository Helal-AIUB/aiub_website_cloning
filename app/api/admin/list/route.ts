import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  if (category === "news") {
    const news = await db.newsEvent.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(news);
  } else {
    const notices = await db.notice.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(notices);
  }
}