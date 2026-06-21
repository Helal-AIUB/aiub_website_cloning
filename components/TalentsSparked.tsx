"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function TalentsSparked() {
  const [talents, setTalents] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    fetch("/api/admin/talents")
      .then((res) => res.json())
      .then((data) => setTalents(data));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [talents]);

  if (talents.length === 0) return null;

  return (
    <section className="bg-white w-full relative pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-baseline mb-16">
          <h2 className="text-[#0047AB] text-6xl font-extrabold">Talents</h2>
          <h3 className="text-gray-800 uppercase ml-4 text-2xl font-bold tracking-widest">GOT SPARKED</h3>
        </div>

        <div className="flex flex-col md:flex-row relative">
          <div className="hidden md:block w-1/2 sticky top-32 h-[65vh] overflow-hidden rounded-lg shadow-lg">
            {talents.map((item, index) => (
              <Image key={item.id} src={item.img} alt={item.title} fill className={`object-cover transition-opacity duration-700 ${activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"}`} />
            ))}
          </div>

          <div className="w-full md:w-1/2 md:pl-20 pb-[30vh]">
            {talents.map((item, index) => (
              <div key={item.id} data-index={index} ref={(el) => { itemRefs.current[index] = el; }} className="min-h-[70vh] flex flex-col justify-center py-10">
                <h3 className={`text-4xl font-bold transition-colors duration-700 ${activeIndex === index ? "text-gray-900" : "text-gray-300"}`}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}