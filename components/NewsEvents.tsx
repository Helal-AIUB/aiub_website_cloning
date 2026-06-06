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
      "Seminar on the Pathway to Game Development and the Future of Industry",
    img: "/item3.png",
  },
  {
    id: 4,
    title:
      "AIUB Finance Club Hosts Inauguration and Member Orientation Ceremony",
    img: "/item4.png",
  },
  {
    id: 5,
    title:
      "Champions Crowned at the AIUB Inter College Football Championship 2026",
    img: "/item5.png",
  },
  {
    id: 6,
    title: "The AIUB Family Congratulates the Following Individuals",
    img: "/item6.png",
  },
  {
    id: 7,
    title: "AIUB signed MoU with Chandigarh University",
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
    title: "AIUB signed MoU with Chandigarh University",
    img: "/item9.png",
  },
  {
    id: 10,
    title: "AIUB signed MoU with Chandigarh University",
    img: "/item10.png",
  },
  {
    id: 11,
    title: "AIUB signed MoU with Chandigarh University",
    img: "/item11.png",
  },
  {
    id: 12,
    title: "AIUB signed MoU with Chandigarh University",
    img: "/item11.png",
  },
];

// Divide in two column
const columns = [
  [newsData[0], newsData[1]],
  [newsData[2], newsData[3]],
  [newsData[4], newsData[5]],
  [newsData[6], newsData[7]],
  [newsData[8], newsData[9]],
  [newsData[10], newsData[11]],
];

// Marquee ke infinite korar jonno added both column
const duplicatedColumns = [...columns, ...columns];

export default function NewsEvents() {
  return (
    <section className="max-w-[1500px] mx-auto px-4 sm:px-6 py-16 overflow-hidden">
      {/* --- Header Section (News AND EVENTS) --- */}
      <div className="flex items-center mb-8">
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
        {/* React er vitor inject CSS To provide custom animation */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* 50% shift korle ekdom smooth loop hobe */
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: scrollLeft 40s linear infinite; /* 40s holo speed, komale fast hobe */
          }
          .marquee-container:hover .animate-marquee {
            animation-play-state: paused; /* Mouse nile theme jabe */
          }
        `,
          }}
        />

        {/* Marquee Track */}
        <div className="animate-marquee gap-4">
          {duplicatedColumns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {col.map((item, itemIndex) => (
                <Link
                  key={`${colIndex}-${itemIndex}`}
                  href={`/news/${item.id}`}
                  className="relative flex flex-col w-[280px] md:w-[320px] h-[220px] bg-slate-100 overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Card Image */}
                  <div className="relative flex-1 w-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Card Title Box (Blue Overlay at bottom) */}
                  <div className="h-[75px] bg-[#0047AB]/90 group-hover:bg-[#0047AB] transition-colors p-3 flex items-center justify-center">
                    {/* line-clamp-2 bebohar kora hoyeche jate lekha boro holeo 2 line er beshi na dekhay */}
                    <p className="text-white text-sm md:text-[15px] font-medium text-center leading-snug line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
