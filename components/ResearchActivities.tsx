"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const sliderImages = [
  "/images/research_activities/1.png",
  "/images/research_activities/2.png",
  "/images/research_activities/3.png",
  "/images/research_activities/4.png",
  "/images/research_activities/5.png",
  "/images/research_activities/6.png",
  "/images/research_activities/7.png",
  "/images/research_activities/8.png",
  "/images/research_activities/9.png",
];

export default function ResearchActivities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play Slider (Every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Manual Navigation Functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + sliderImages.length) % sliderImages.length,
    );
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 flex flex-col md:flex-row gap-16 md:gap-8 items-center">
        {/* --- LEFT SIDE: Text Content --- */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-[#0047AB] text-6xl md:text-[80px] font-bold tracking-tight leading-none mb-2">
            Research
          </h2>
          <h3 className="text-black text-2xl md:text-[30px] font-extrabold tracking-[0.2em] uppercase mb-8 ml-1">
            ACTIVITIES
          </h3>

          <p className="text-gray-700 text-[15px] md:text-base leading-relaxed mb-8 max-w-lg">
            Welcome to the diverse and dynamic world of research at the American
            International University-Bangladesh (AIUB). Our institution is
            committed to fostering innovation, advancing knowledge, and making a
            meaningful impact on society through cutting-edge research across
            various disciplines.
          </p>

          <ul className="space-y-4 ml-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#0047AB] rounded-full mr-4"></span>
              <Link
                href="#"
                className="text-[#0047AB] text-[15px] hover:underline font-medium transition-all"
              >
                Research Groups
              </Link>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#0047AB] rounded-full mr-4"></span>
              <Link
                href="#"
                className="text-[#0047AB] text-[15px] hover:underline font-medium transition-all"
              >
                Conferences
              </Link>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-[#0047AB] rounded-full mr-4"></span>
              <Link
                href="#"
                className="text-[#0047AB] text-[15px] hover:underline font-medium transition-all"
              >
                Innovations
              </Link>
            </li>
          </ul>
        </div>

        {/* --- RIGHT SIDE: Stacked Carousel Slider --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="text-[#0047AB] text-4xl md:text-[45px] font-bold tracking-tight mb-10 text-center">
            Continuing Education
          </h2>

          {/* Slider Container */}
          <div className="relative w-full max-w-[500px] h-[300px] md:h-[350px] flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-[-20px] md:left-[-40px] z-50 text-gray-500 hover:text-[#0047AB] transition-colors p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-10 md:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Stacked Images Logic */}
            <div className="relative w-[85%] h-[85%]">
              {sliderImages.map((img, index) => {
                // Offset ber kora hocche jate image gulo ek-tar pichone arekta sajano jay
                const offset =
                  (index - currentIndex + sliderImages.length) %
                  sliderImages.length;

                const isVisible = offset < 3;
                const zIndex = 30 - offset * 10;
                const scale = 1 - offset * 0.04;
                const translateY = offset * 16;

                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-700 ease-in-out shadow-2xl"
                    style={{
                      zIndex: zIndex,
                      transform: `scale(${scale}) translateY(${translateY}px)`,
                      opacity: isVisible ? 1 - offset * 0.1 : 0, // Pichoner gulo ektu fade hobe
                      pointerEvents: offset === 0 ? "auto" : "none", // Shudhu samner tai click kora jabe
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Slider image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-[-20px] md:right-[-40px] z-50 text-gray-500 hover:text-[#0047AB] transition-colors p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-10 md:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
