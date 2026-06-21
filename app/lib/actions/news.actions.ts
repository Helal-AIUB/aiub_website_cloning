"use server";
import { db } from "@/app/lib/db";

export async function getNewsEvents() {
  return await db.newsEvent.findMany({
    orderBy: { createdAt: 'desc' }
  });
}