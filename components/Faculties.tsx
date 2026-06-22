"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Faculties() {
  const [faculties, setFaculties] = useState<any[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/faculties")
      .then((res) => res.json())
      .then((data) => setFaculties(data));
  }, []);

  return (
    <section className="max-w-[1300px] mx-auto w-full px-4 sm:px-6 py-20 bg-white">
      <h2 className="text-[#0047AB] text-5xl md:text-6xl font-extrabold text-center mb-12 tracking-tight">
        Faculties
      </h2>

      <div className="w-full flex flex-col md:flex-row h-[800px] md:h-[450px] lg:h-[480px] gap-1.5 md:gap-2">
        {faculties.map((faculty) => (
          <Link
            key={faculty.id}
            id={`faculty-${faculty.id}`}
            href={`/faculties/${faculty.id}`}
            onMouseEnter={() => setHoveredId(faculty.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`relative group overflow-hidden rounded-sm cursor-pointer transition-all duration-500 ease-out flex flex-col
              ${hoveredId === faculty.id ? "md:flex-[1.3] shadow-2xl" : hoveredId !== null ? "md:flex-[0.9] opacity-90" : "md:flex-1"}
            `}
          >
            <Image
              src={faculty.img}
              alt={faculty.acronym}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
            <div
              className={`absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t ${faculty.gradientClasses} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            ></div>

            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 transition-transform duration-500 group-hover:-translate-y-6">
              <div className="w-16 h-16 md:w-20 md:h-20 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0 relative drop-shadow-lg">
                <Image
                  src={faculty.logo}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-[10px] md:text-xs lg:text-[13px] font-bold tracking-widest text-center whitespace-pre-line mb-1 drop-shadow-md">
                {faculty.name}
              </p>
              <h3 className="text-white text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-wider drop-shadow-lg">
                {faculty.acronym}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
