"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const talentsData = [
  {
    id: 0,
    title:
      "AIUB Writes a Winning Chapter at Inter University Table Tennis 2026",
    img: "/t1.png",
  },
  {
    id: 1,
    title:
      "AIUB Crowned Champions of Inter-University Football Tournament 2025",
    img: "/t2.png",
  },
  {
    id: 2,
    title:
      "AIUB EEE Student's Achievement at IEEE Young Professionals Networking Meet-Up 2025",
    img: "/t3.png",
  },
  {
    id: 3,
    title:
      "AIUB's Historic Bronze Finish at the Bangladesh National Basketball Championship 2025",
    img: "/t4.png",
  },
  {
    id: 4,
    title: "AIUB Students Won Best Paper Award at ICEBTM hosted by IUB",
    img: "/t5.png",
  },
  {
    id: 5,
    title: "Architecture student Wins Italian MAECI Scholarship",
    img: "/t6.png",
  },
];

export default function TalentsSparked() {
  // Active News
  const [activeIndex, setActiveIndex] = useState(0);

  // Dan pasher text element guloke track korar jonno useRef
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll Track korar jonno IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Component destroy hole observer ke clean kora
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-white w-full relative pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* --- Header Section --- */}
        <div className="flex items-baseline mb-16">
          <h2 className="text-[#0047AB] text-6xl md:text-[80px] font-extrabold tracking-tight leading-none">
            Talents
          </h2>
          <h3 className="text-gray-800 uppercase ml-4 text-xl md:text-2xl font-bold tracking-widest">
            GOT SPARKED
          </h3>
        </div>

        {/* --- Main Sticky Layout --- */}
        <div className="flex flex-col md:flex-row relative items-start">
          {/* LEFT SIDE: Sticky Image Box */}
          <div className="hidden md:block w-1/2 sticky top-32 h-[65vh] overflow-hidden rounded-md shadow-lg">
            {talentsData.map((item, index) => (
              <Image
                key={item.id}
                src={item.img}
                alt={item.title}
                fill
                className={`object-cover transition-opacity duration-700 ease-in-out absolute inset-0 
                  ${activeIndex === index ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"}
                `}
              />
            ))}
          </div>

          {/* RIGHT SIDE: Scrollable Text List */}
          <div className="w-full md:w-1/2 md:pl-20 pb-[30vh]">
            {talentsData.map((item, index) => (
              <div
                key={item.id}
                data-index={index}
                // Protita item er ref set kora hocche observe korar jonno
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                // min-h-[70vh] deya hoyeche jate ekta item er por onnekta scroll korte hoy onno item e jawar jonno
                className="min-h-[70vh] flex flex-col justify-center py-10"
              >
                {/* Mobile er jonno image  */}
                <div className="md:hidden relative w-full h-[250px] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3
                  className={`text-4xl md:text-[45px] font-bold leading-tight transition-colors duration-700 
                  ${activeIndex === index ? "text-gray-900" : "text-gray-300"}
                `}
                >
                  {item.title}
                </h3>

                {/* Explore Details Button */}
                <div
                  className={`mt-8 flex items-center gap-4 transition-opacity duration-700 
                  ${activeIndex === index ? "opacity-100" : "opacity-0"}
                `}
                >
                  <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                    <span className="text-3xl text-gray-500 font-light mb-1.5">
                      +
                    </span>
                  </div>
                  <span className="text-gray-600 font-medium text-lg cursor-pointer hover:underline">
                    Explore Details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
