"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const campusLifeData = [
  {
    id: "sports",
    title: "Sports",
    subtitle: "THE EAGLE OF AIUB",
    img: "/images/campus_life/sports.png",
  },
  {
    id: "indoor-games",
    title: "Indoor Games",
    subtitle: "GAME ON, RAIN OR SHINE: INDOOR FUN\nFOR ALL",
    img: "/images/campus_life/games.png",
  },
  {
    id: "cultural-activity",
    title: "Cultural Activity",
    subtitle: "CREATING CONNECTIONS THROUGH\nCULTURE",
    img: "/images/campus_life/cultural.png",
  },
  {
    id: "recreation",
    title: "Recreation",
    subtitle: "WHERE LEARNING MEETS LEISURE",
    img: "/images/campus_life/recreation.png",
  },
];

export default function CampusLife() {
  // Kon card e mouse ache sheta track korar jonno state
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="max-w-[1300px] mx-auto w-full px-4 sm:px-6 py-20 bg-white">
      {/* --- Heading Section --- */}
      <div className="flex items-center justify-center mb-12">
        <h2 className="text-[#0047AB] text-5xl md:text-6xl font-extrabold mr-3 tracking-tight">
          Campus
        </h2>
        <h3 className="text-gray-800 text-2xl md:text-[32px] font-bold tracking-widest uppercase mt-3">
          LIFE
        </h3>
      </div>

      {/* --- Dynamic Expanding Flex Container --- */}
      <div className="w-full flex flex-col md:flex-row h-[800px] md:h-[450px] lg:h-[500px] gap-1.5 md:gap-2">
        {campusLifeData.map((item) => (
          <Link
            key={item.id}
            href={`/campus-life/${item.id}`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`relative group overflow-hidden rounded-sm cursor-pointer transition-all duration-500 ease-out flex flex-col
              ${
                // Magic Flex: Mouse nile ektu prashosto (wide) hobe, baki gulo normal thakbe
                hoveredId === item.id
                  ? "md:flex-[1.4] shadow-2xl"
                  : hoveredId !== null
                    ? "md:flex-[0.8] opacity-90"
                    : "md:flex-1"
              }
            `}
          >
            {/* Background Image */}
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Default Dark Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500"></div>

            {/* Hover Deep Dark Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Text & Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 transition-transform duration-500 group-hover:-translate-y-4">
              {/* Subtitle (e.g. "THE EAGLE OF AIUB") */}
              <p className="text-white text-[9px] md:text-[10px] lg:text-[11px] font-bold tracking-widest text-center whitespace-pre-line mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md uppercase">
                {item.subtitle}
              </p>

              {/* Main Title (e.g. "Sports") */}
              <h3 className="text-white text-3xl md:text-4xl lg:text-[45px] font-extrabold tracking-tight transition-all duration-300 drop-shadow-lg text-center">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
