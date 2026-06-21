import { db } from "@/app/lib/db";

export async function getNotices() {
  try {
    const notices = await db.notice.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });
    return notices;
  } catch (error) {
    console.error("Error fetching notices:", error);
    return [];
  }
}