"use client";

import Link from "next/link";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "FST: Post Conference Seminar 2026",
    img: "/item1.png",
  },
  {
    id: 2,
    title: "Industrial Visit to the DESCO 132/33 KV Grid Substation",
    img: "/item2.png",
  },
  {
    id: 3,
    title:
      "Champions Crowned at the AIUB Inter College Football Championship 2026",
    img: "/item3.png",
  },
  {
    id: 4,
    title:
      "AIUB signed MoU with Chitkara University Rajpura Chandigarh, Panjab",
    img: "/item4.png",
  },
  {
    id: 5,
    title:
      "Seminar on the Pathway to Game Development and the Future of Industry",
    img: "/item5.png",
  },
  {
    id: 6,
    title: "The AIUB Family Congratulates the Following Individuals",
    img: "/item6.png",
  },
  {
    id: 7,
    title: "Workshop Organized by AIUB Computer Club Spring25-26 Semester",
    img: "/item7.png",
  },
  {
    id: 8,
    title:
      "AIUB Expands Global Learning Opportunities Through Collaboration with Saylor",
    img: "/item8.png",
  },
  {
    id: 9,
    title: "AIUB Mars and Rovers Team in Europe",
    img: "/item9.png",
  },
  {
    id: 10,
    title: "Beyond the Balance Sheet: Financial Accounting Contest Spring 2026",
    img: "/item10.png",
  },
  {
    id: 11,
    title: "AIUB EEE Students win best project Award at ICCEB",
    img: "/item11.png",
  },
  {
    id: 12,
    title: "Bangladesh National Basketball Championship 2025",
    img: "/t4.png",
  },
];

const columns = [
  [newsData[0], newsData[1]],
  [newsData[2], newsData[3]],
  [newsData[4], newsData[5]],
  [newsData[6], newsData[7]],
  [newsData[8], newsData[9]],
  [newsData[10], newsData[11]],
];

// Marquee infinite 
const duplicatedColumns = [...columns, ...columns];

export default function NewsEvents() {
  return (
    <section className="max-w-[1500px] mx-auto px-4 sm:px-6 py-16 overflow-hidden bg-gray-50/50">
      {/* --- Header Section (News AND EVENTS) --- */}
      <div className="flex items-center mb-10">
        <h2 className="text-[#0047AB] text-5xl md:text-6xl font-extrabold mr-3 tracking-tight">
          News
        </h2>
        <h3 className="text-gray-500 text-xl md:text-2xl font-bold tracking-widest uppercase mr-3 mt-3">
          AND EVENTS
        </h3>
        {/* Blue Arrow Icon */}
        <Link
          href="#"
          className="bg-[#0047AB] text-white rounded-full p-1.5 hover:bg-blue-800 transition mt-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      <div className="relative w-full marquee-container">
        {/* CSS for custom smooth animation */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); } 
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: scrollLeft 45s linear infinite; 
            }
            .marquee-container:hover .animate-marquee {
              animation-play-state: paused; 
            }
          `,
          }}
        />

        {/* Marquee Track */}
        <div className="animate-marquee gap-4 md:gap-6">
          {duplicatedColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 md:gap-6">
              {col.map((item, itemIndex) => {
                // ================= MAGIC LOGIC =================
                // 1. Dynamic Sizing (Masonry feel)
                const isLarge =
                  (colIndex % 2 === 0 && itemIndex === 0) ||
                  (colIndex % 2 !== 0 && itemIndex === 1);

                // 2. Dynamic Styles (3 ta different look repeat hobe)
                const styleType = item.id % 3;

                return (
                  <Link
                    key={`${colIndex}-${itemIndex}`}
                    href={`/news/${item.id}`}
                    className={`relative flex flex-col w-[260px] md:w-[320px] lg:w-[350px] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm
                      ${isLarge ? "h-[250px] md:h-[300px]" : "h-[180px] md:h-[220px]"}
                    `}
                  >
                    {/* DESIGN TYPE 0: Blue Bottom Bar (White Text) */}
                    {styleType === 0 && (
                      <>
                        <div className="relative flex-1 w-full overflow-hidden">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="h-[75px] md:h-[85px] bg-[#0047AB] p-3 flex items-center justify-center">
                          <p className="text-white text-[13px] md:text-[15px] font-medium text-center leading-snug line-clamp-3">
                            {item.title}
                          </p>
                        </div>
                      </>
                    )}

                    {/* DESIGN TYPE 1: White Bottom Bar (Dark Blue Text) */}
                    {styleType === 1 && (
                      <>
                        <div className="relative flex-1 w-full overflow-hidden">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="h-[75px] md:h-[85px] bg-white border-t border-gray-100 p-3 flex items-center justify-center">
                          <p className="text-[#0047AB] text-[13px] md:text-[15px] font-bold text-center leading-snug line-clamp-3 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </p>
                        </div>
                      </>
                    )}

                    {/* DESIGN TYPE 2: Full Image with Gradient Overlay (Floating Text) */}
                    {styleType === 2 && (
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-[13px] md:text-[15px] font-semibold text-center leading-snug line-clamp-3 drop-shadow-md group-hover:-translate-y-1 transition-transform duration-300">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
