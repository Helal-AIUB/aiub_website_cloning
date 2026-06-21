// scripts/seed.ts
import { db } from "../app/lib/db";

async function seed() {
  console.log("Seeding...");
  await db.newsEvent.createMany({
    data: [
      {
        title: "AIUB Football Champ 2026",
        imageUrl: "/images/news_events/item3.png",
        category: "news",
      },
      {
        title: "FST Seminar 2026",
        imageUrl: "/images/news_events/item2.png",
        category: "news",
      },
    ],
  });
  console.log("Seeded successfully!");
}
seed();
