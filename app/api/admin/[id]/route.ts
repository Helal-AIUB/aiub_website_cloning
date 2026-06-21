import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

// DELETE Request
export async function DELETE(
  req: Request, 
  { params }: { params: Promise<{ id: string }> } 
) {
  const { id } = await params; 
  const { category } = await req.json();

  if (category === "news") {
    await db.newsEvent.delete({ where: { id: id } });
  } else {
    await db.notice.delete({ where: { id: id } });
  }
  return NextResponse.json({ success: true });
}

// PUT Request (Update)
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const { title, description, category, date, img } = body; 

  if (category === "news") {
    await db.newsEvent.update({
      where: { id },
      data: { 
        title, 
        description, 
        imageUrl: img 
      },
    });
  } else {
    await db.notice.update({
      where: { id },
      data: { 
        title, 
        date: new Date(date),
        link: img 
      },
    });
  }
  return NextResponse.json({ success: true });
}