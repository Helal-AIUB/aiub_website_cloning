import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET() {
  const talents = await db.talentSpark.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(talents);
}

export async function POST(req: Request) {
  const { title, img } = await req.json();
  const talent = await db.talentSpark.create({ data: { title, img } });
  return NextResponse.json(talent);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await db.talentSpark.delete({ where: { id } });
  return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
  const { id, title, img } = await req.json();
  const talent = await db.talentSpark.update({
    where: { id },
    data: { title, img },
  });
  return NextResponse.json(talent);
}