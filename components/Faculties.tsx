"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const facultiesData = [
  {
    id: "fass",
    acronym: "FASS",
    name: "FACULTY OF ART AND\nSOCIAL SCIENCES",
    gradientClasses: "from-[#c8102e]/95 via-[#c8102e]/60 to-transparent",
    img: "/fass.png",
    logo: "/fass-logo.png",
  },
  {
    id: "fba",
    acronym: "FBA",
    name: "FACULTY OF BUSINESS\nADMINISTRATION",
    gradientClasses: "from-[#008a45]/95 via-[#008a45]/60 to-transparent", // Green
    img: "/fba.png",
    logo: "/fba-logo.png",
  },
  {
    id: "fe",
    acronym: "FE",
    name: "FACULTY OF\nENGINEERING",
    gradientClasses: "from-[#d65106]/95 via-[#d65106]/60 to-transparent", // Orange
    img: "/fe.png",
    logo: "/fe-logo.png",
  },
  {
    id: "fhls",
    acronym: "FHLS",
    name: "FACULTY OF HEALTH AND\nLIFE SCIENCES",
    gradientClasses: "from-[#662483]/95 via-[#662483]/60 to-transparent", // Purple
    img: "/fhls.png",
    logo: "/fhls-logo.png",
  },
  {
    id: "fst",
    acronym: "FST",
    name: "FACULTY OF SCIENCE AND\nTECHNOLOGY",
    gradientClasses: "from-[#0047AB]/95 via-[#0047AB]/60 to-transparent", // Blue
    img: "/fst.png",
    logo: "/fst-logo.png",
  },
];

export default function Faculties() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="max-w-[1300px] mx-auto w-full px-4 sm:px-6 py-20 bg-white">
      <h2 className="text-[#0047AB] text-5xl md:text-6xl font-extrabold text-center mb-12 tracking-tight">
        Faculties
      </h2>

      <div className="w-full flex flex-col md:flex-row h-[800px] md:h-[450px] lg:h-[480px] gap-1.5 md:gap-2">
        {facultiesData.map((faculty) => (
          <Link
            key={faculty.id}
            href={`/faculties/${faculty.id}`}
            onMouseEnter={() => setHoveredId(faculty.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`relative group overflow-hidden rounded-sm cursor-pointer transition-all duration-500 ease-out flex flex-col
              ${
                hoveredId === faculty.id
                  ? "md:flex-[1.3] shadow-2xl"
                  : hoveredId !== null
                    ? "md:flex-[0.9] opacity-90"
                    : "md:flex-1"
              }
            `}
          >
            {/* Background Image */}
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

            {/* Text & Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 transition-transform duration-500 group-hover:-translate-y-6">
              {/* Faculty Logo (Animated up) */}
              <div className="w-16 h-16 md:w-20 md:h-20 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0 relative drop-shadow-lg">
                <Image
                  src={faculty.logo}
                  alt={`${faculty.acronym} Logo`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Faculty Full Name */}
              <p className="text-white text-[10px] md:text-xs lg:text-[13px] font-bold tracking-widest text-center whitespace-pre-line mb-1 transition-all duration-300 drop-shadow-md">
                {faculty.name}
              </p>

              {/* Faculty Acronym */}
              <h3 className="text-white text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-wider transition-all duration-300 drop-shadow-lg">
                {faculty.acronym}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
