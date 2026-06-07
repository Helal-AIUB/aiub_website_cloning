"use client";

import { useState } from "react";
import Image from "next/image";

const campusData = [
  {
    id: "library",
    tabName: "Library",
    title: "Library",
    subtitle: "Where scholarly research merges in academia.",
    img: "/Library.jpg",
  },
  {
    id: "sports",
    tabName: "Sports Complex",
    title: "Pick your ground.",
    subtitle:
      "Cricket, football, basketball, tennis, badminton, volleyball courts - whatever your game is we have the ground.",
    img: "/4.jpg",
  },
  {
    id: "study",
    tabName: "Study Area",
    title: "Study Area",
    subtitle: "Take a break to be prepared for next session.",
    img: "/1.jpg",
  },
  {
    id: "gym",
    tabName: "Gymnasium",
    title: "Gymnasium",
    subtitle: "Boost your strength a bit up with sweaty experience.",
    img: "/5.jpg",
  },
  {
    id: "amphi",
    tabName: "Amphitheater",
    title: "Amphitheater",
    subtitle: "Where meets the colors, culture and melody of togetherness.",
    img: "/Amphitheater.jpg",
  },
  {
    id: "labs",
    tabName: "Laboratories",
    title: "Laboratories",
    subtitle: "Bridging Knowledge and Next-Gen Innovation.",
    img: "/Laboratories.jpg",
  },
];

export default function DiscoverCampus() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCampus = campusData[activeIndex];

  return (
    <section className="w-full py-16 bg-white">
      {/* --- Heading Section --- */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 mb-8 flex flex-col md:flex-row md:items-baseline">
        <h2 className="text-[#0047AB] text-5xl md:text-[70px] font-extrabold tracking-tight leading-none">
          Discover
        </h2>
        <h3 className="text-gray-800 uppercase md:ml-4 text-3xl md:text-[38px] font-extrabold tracking-wide mt-2 md:mt-0">
          OUR CAMPUS
        </h3>
      </div>

      {/* --- Interactive Fullscreen Slider Section --- */}
      <div className="relative w-full h-[500px] md:h-[650px] bg-black overflow-hidden">
        {/* 1. All Background Images (Crossfade Effect) */}
        {campusData.map((item, index) => (
          <Image
            key={item.id}
            src={item.img}
            alt={item.title}
            fill
            className={`object-cover transition-opacity duration-700 ease-in-out absolute inset-0
              ${activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          />
        ))}

        {/* 2. Dark Overlays (Jate sada lekha gulo sposto bojha jay) */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>

        {/* 3. Dynamic Text Content (Title & Subtitle) */}
        <div className="absolute top-[25%] md:top-[30%] left-6 md:left-16 lg:left-[8%] z-20 max-w-[90%] md:max-w-4xl pointer-events-none">
          <div
            key={activeIndex}
            className="animate-fade-in transition-all duration-500"
          >
            <h3 className="text-white text-5xl md:text-[80px] font-bold mb-4 drop-shadow-xl leading-tight tracking-tight">
              {activeCampus.title}
            </h3>
            <p className="text-white text-lg md:text-2xl font-medium drop-shadow-md max-w-2xl leading-snug">
              {activeCampus.subtitle}
            </p>
          </div>
        </div>

        {/* 4. The 6 Vertical Hover Columns */}
        <div className="absolute inset-0 flex z-30">
          {campusData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="flex-1 h-full border-r border-white/20 last:border-r-0 relative cursor-pointer hover:bg-white/5 transition-colors duration-300"
              >
                {/* Rotated Text at the bottom */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center items-end h-48">
                  <p
                    className={`text-white transition-all duration-300 whitespace-nowrap drop-shadow-md
                      ${isActive ? "text-[16px] md:text-lg font-bold opacity-100" : "text-[12px] md:text-base font-medium opacity-70"}
                    `}
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {isActive ? `— ${item.tabName}` : item.tabName}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
