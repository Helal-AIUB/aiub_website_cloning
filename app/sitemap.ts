import { db } from "@/app/lib/db";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aiub-website-cloning.vercel.app";

  const [news, notices, talents, faculties] = await Promise.all([
    db.newsEvent.findMany({ select: { id: true, updatedAt: true } }),
    db.notice.findMany({ select: { id: true, updatedAt: true } }),
    db.talentSpark.findMany({ select: { id: true, updatedAt: true } }),
    db.faculty.findMany({ select: { id: true, updatedAt: true } }),
  ]);

  // map every type
  const newsLinks = news.map((item) => ({
    url: `${baseUrl}/#news-${item.id}`,
    lastModified: item.updatedAt || new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }));

  const noticeLinks = notices.map((item) => ({
    url: `${baseUrl}/#notice-${item.id}`,
    lastModified: item.updatedAt || new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const talentLinks = talents.map((item) => ({
    url: `${baseUrl}/#talent-${item.id}`,
    lastModified: item.updatedAt || new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const facultyLinks = faculties.map((item) => ({
    url: `${baseUrl}/#faculty-${item.id}`,
    lastModified: item.updatedAt || new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    ...newsLinks,
    ...noticeLinks,
    ...talentLinks,
    ...facultyLinks,
  ];
}