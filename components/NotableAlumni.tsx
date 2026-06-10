"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Info1 = {
  name: "Mr. Akhteruddin Mahmood",
  title: "DMD & Chief HR Officer",
  company: "Bank Asia LTD",
};
const Info2 = {
  name: "Mr. Rishad Hossain",
  title: "Cheif Human Resources Officer",
  company: "NCC Bank Ltd",
};
const Info3 = {
  name: "Major General SM Zia-Ul-Azim, NDC, AFWC, PSC",
  title: "Chairman",
  company: "Bangladesh Rural Electrification Board (BREB)",
};
const Info4 = {
  name: "Sadia Tabassum",
  title: "Specialist, Customer Experience Strategy & Anlytics",
  company: "Therap BD",
};
const Info5 = {
  name: "Kazi Emran Mahbub",
  title: "Deputy Director, Head of Service Strategy & Development",
  company: "Grameenphone Ltd",
};
const Info6 = {
  name: "Moon Sadia Dipthee",
  title: "Director of Analog Layout Design Ulkasemi",
  company: "Grameenphone Ltd",
};
const Info7 = {
  name: "Md. Asif Chowdhury",
  title: "Business Development Specialist",
  company: "Pichard Bangladesh Ltd",
};

const alumniNodes = [
  // --- Center (Big Image) ---
  {
    id: "img1",
    type: "image",
    src: "/images/alumni/1.png",
    size: "w-40 h-40 md:w-56 md:h-56",
    x: 50,
    y: 50,
    z: 20,
    info: Info1,
    facultyId: "fba",
  },

  // --- Top Area ---
  {
    id: "fba",
    type: "text",
    text: "FBA",
    colorCode: "#008a45",
    size: "w-20 h-20 md:w-28 md:h-28",
    x: 35,
    y: 28,
    z: 10,
  },
  {
    id: "img2",
    type: "image",
    src: "/images/alumni/2J.png",
    size: "w-20 h-20 md:w-28 md:h-28",
    x: 45,
    y: 28,
    z: 10,
    info: Info2,
    facultyId: "fst",
  },
  {
    id: "fst",
    type: "text",
    text: "FST",
    colorCode: "#0072bc",
    size: "w-24 h-24 md:w-32 md:h-32",
    x: 58,
    y: 26,
    z: 10,
  },

  // --- Left Area ---
  {
    id: "fass",
    type: "text",
    text: "FASS",
    colorCode: "#c8102e",
    size: "w-24 h-24 md:w-32 md:h-32",
    x: 24,
    y: 40,
    z: 10,
  },
  {
    id: "img3",
    type: "image",
    src: "/images/alumni/3.png",
    size: "w-28 h-28 md:w-36 md:h-36",
    x: 26,
    y: 65,
    z: 10,
    info: Info3,
    facultyId: "fe", 
  },
  {
    id: "img4",
    type: "image",
    src: "/images/alumni/4.png",
    size: "w-16 h-16 md:w-20 md:h-20",
    x: 38,
    y: 62,
    z: 10,
    info: Info4,
    facultyId: "fass", 
  },

  // --- Right Area ---
  {
    id: "img5",
    type: "image",
    src: "/images/alumni/5.png",
    size: "w-20 h-20 md:w-24 md:h-24",
    x: 65,
    y: 42,
    z: 10,
    info: Info5,
    facultyId: "fba", 
  },
  {
    id: "fe",
    type: "text",
    text: "FE",
    colorCode: "#f1a42b",
    size: "w-20 h-20 md:w-28 md:h-28",
    x: 74,
    y: 55,
    z: 10,
  },
  {
    id: "img6",
    type: "image",
    src: "/images/alumni/6.png",
    size: "w-24 h-24 md:w-32 md:h-32",
    x: 63,
    y: 68,
    z: 10,
    info: Info6,
    facultyId: "fe", 
  },

  // --- Bottom Area ---
  {
    id: "img7",
    type: "image",
    src: "/images/alumni/7.png",
    size: "w-28 h-28 md:w-40 md:h-40",
    x: 50,
    y: 80,
    z: 10,
    info: Info7,
    facultyId: "fass", 
  },
];

export default function NotableAlumni() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden relative">
      {/* --- Heading Section (Remains Same) --- */}
      <div className="flex items-center justify-center mb-10 md:mb-16">
        <h2 className="text-[#0047AB] text-[50px] md:text-[70px] font-extrabold mr-3 tracking-tight leading-none">
          Notable
        </h2>
        <h3 className="text-gray-800 text-xl md:text-[28px] font-bold tracking-widest uppercase mt-3 mr-3">
          ALUMNI
        </h3>
        <Link
          href="#"
          className="bg-[#0047AB] text-white rounded-full p-1.5 md:p-2 hover:bg-blue-800 transition mt-3 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              className="hidden"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 19L19 5M19 5v10M19 5H9"
            />
          </svg>
        </Link>
      </div>

      {/* --- Floating Constellation Container --- */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[600px] md:h-[800px]">
        {alumniNodes.map((node) => {
          const isDirectlyActive = activeId === node.id;
          const isSomethingActive = activeId !== null;

          // NEW LOGIC: Check if this node is an alumni and its faculty is currently clicked
          const isRelatedToActiveFaculty =
            node.type === "image" && node.facultyId === activeId;

          // Node is highlighted if it's clicked OR its faculty is clicked
          const isHighlighted = isDirectlyActive || isRelatedToActiveFaculty;

          return (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                top: `${node.y}%`,
                left: `${node.x}%`,
                zIndex: isHighlighted ? 50 : node.z, // Highlighted nodes come to front
              }}
            >
              {/* Scale/Zoom Wrapper */}
              <div
                className={`relative flex flex-col items-center transition-all duration-700
                  ${isDirectlyActive ? "scale-[1.25] md:scale-[1.35]" : "scale-100 hover:scale-105"}
                  ${isSomethingActive && !isHighlighted ? "opacity-30 blur-[2px]" : "opacity-100 blur-0"}
                `}
              >
                {/* Image/Text Bubble Wrapper */}
                <div className="relative">
                  <div
                    onClick={() =>
                      setActiveId(isDirectlyActive ? null : node.id)
                    }
                    className={`
                      relative rounded-full overflow-hidden cursor-pointer
                      flex items-center justify-center transition-all duration-700
                      ${node.size}
                      /* Active Image Outline */
                      ${isHighlighted && node.type === "image" ? "border-4 border-white ring-[2px] ring-[#59a3eb] shadow-2xl" : "shadow-lg"}
                      /* Active Text Outline */
                      ${isDirectlyActive && node.type === "text" ? "shadow-2xl ring-4 ring-white" : ""}
                    `}
                    style={{
                      backgroundColor:
                        node.type === "text" ? node.colorCode : "#e5e7eb",
                    }}
                  >
                    {node.type === "text" ? (
                      // Faculty Text
                      <span
                        className={`text-white font-bold tracking-wider ${isDirectlyActive ? "text-lg md:text-xl" : "text-sm md:text-base"}`}
                      >
                        {node.text}
                      </span>
                    ) : (
                      // Alumni Picture
                      <Image
                        src={node.src || "/banner-logo.png"}
                        alt="Alumni"
                        fill
                        className={`object-cover pointer-events-none transition-all duration-700 ${isHighlighted ? "grayscale-0" : "grayscale"}`}
                      />
                    )}
                  </div>

                  {/* Close (X) Button - Ekhon Text and Image ubhoy khetrei kaj korbe jodi active thake */}
                  {isDirectlyActive && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveId(null);
                      }}
                      className="absolute -bottom-2 md:-bottom-2.5 left-1/2 -translate-x-1/2 bg-[#1b2b45] text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center border border-white shadow-md hover:bg-red-600 transition-colors z-20"
                    >
                      <span className="text-[10px] md:text-[11px] mb-[1px]">
                        ✕
                      </span>
                    </button>
                  )}
                </div>

                {/* --- Information Section (Only shows if explicitly clicked on the Image itself) --- */}
                {isDirectlyActive && node.type === "image" && node.info && (
                  <div className="absolute top-full mt-4 md:mt-5 flex flex-col items-center text-center w-[200px] md:w-[250px] z-50">
                    <h4 className="text-black font-bold text-sm md:text-base tracking-wide drop-shadow-sm">
                      {node.info.name}
                    </h4>
                    <p className="text-gray-600 text-[10px] md:text-[11px] mt-1 font-medium leading-snug">
                      {node.info.title}
                    </p>
                    <p className="text-gray-500 text-[10px] md:text-[11px] mt-0.5">
                      {node.info.company}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
