import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET() {
  const faculties = await db.faculty.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(faculties);
}

export async function POST(req: Request) {
  const body = await req.json();
  const faculty = await db.faculty.create({ 
    data: {
      acronym: body.acronym,
      name: body.title,
      gradientClasses: body.gradient,
      img: body.img,
      logo: body.logo
    } 
  });
  return NextResponse.json(faculty);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { id, title, acronym, gradient, img, logo } = body;

  const faculty = await db.faculty.update({ 
    where: { id }, 
    data: {
      acronym,
      name: title,
      gradientClasses: gradient,
      img,
      logo
    } 
  });
  return NextResponse.json(faculty);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await db.faculty.delete({ where: { id } });
  return NextResponse.json({ success: true });
}