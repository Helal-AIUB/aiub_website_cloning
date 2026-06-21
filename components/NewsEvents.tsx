"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getNewsEvents } from "../app/lib/actions/news.actions";

export default function NewsEvents() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const data = await getNewsEvents();
      setNews(data);
    }
    loadData();
  }, []);

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <h2 className="text-[#0047AB] text-5xl font-extrabold tracking-tighter">
          News <span className="text-gray-400">AND EVENTS</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="relative flex overflow-hidden">
          <div className="flex gap-4 animate-marquee-right">
            {news.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex gap-4 animate-marquee-left">
            {news.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee-right {
          animation: marqueeRight 50s linear infinite;
        }
        .animate-marquee-left {
          animation: marqueeLeft 50s linear infinite;
        }
        @keyframes marqueeRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function NewsCard({ item, index }: { item: any; index: number }) {
  const sizes = [
    "w-[350px] h-[300px]",
    "w-[450px] h-[300px]",
    "w-[300px] h-[300px]",
  ];
  const size = sizes[index % 3];

  return (
    <Link
      href={`/news/${item.id}`}
      className={`relative flex-shrink-0 ${size} rounded-lg overflow-hidden group`}
    >
      <Image
        src={
          item.imageUrl &&
          (item.imageUrl.startsWith("http") || item.imageUrl.startsWith("/"))
            ? item.imageUrl
            : "/default.png"
        }
        alt={item.title || "News Image"}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-white font-bold text-sm leading-tight">
          {item.title}
        </h3>
      </div>
    </Link>
  );
}
