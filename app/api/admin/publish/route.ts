import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    // security check: without admin no one can post
    const cookieStore = await cookies();
    const sessionId = cookieStore.get("session")?.value;

    const user = sessionId
      ? await db.user.findUnique({ where: { id: sessionId } })
      : null;

    if (!user || user.email !== "admin@gmail.com") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const body = await req.json();
    const { title, description, date, category, img } = body;

    if (category === "news") {
      await db.newsEvent.create({
        data: {
          title,
          description: description || "",
          imageUrl: img || "", 
          category: "news",
        },
      });
    } else if (category === "notice") {
      await db.notice.create({
        data: {
          title,
          date: new Date(date),
          link: img || "", 
        },
      });
    }
    // ...

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("FULL ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Database error" },
      { status: 500 },
    );
  }
}
