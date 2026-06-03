"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlayCircle,
  FaArrowRight,
} from "react-icons/fa";

export default function Home() {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url('${images[currentIndex]}')` }}
        ></div>
        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 border border-white text-white p-3 hover:bg-white hover:text-black transition z-10 hidden md:block cursor-pointer"
        >
          <FaChevronLeft size={24} />
        </button>
        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 border border-white text-white p-3 hover:bg-white hover:text-black transition z-10 hidden md:block cursor-pointer"
        >
          <FaChevronRight size={24} />
        </button>
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <span className="text-xs font-bold text-gray-500 tracking-wider">
            IMPORTANT LINKS
          </span>
          <div className="hidden md:block h-8 w-px bg-gray-300"></div>

          <a
            href="https://www.aiub.edu/sustainability"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="text-[#0047AB] font-bold text-sm text-center group-hover:text-blue-800 transition-colors duration-200">
              SUSTAINABILITY
            </div>
          </a>

          <div className="hidden md:block h-8 w-px bg-gray-300"></div>

          <a
            href="https://www.aiub.edu/aiub-newsletter/news-letter-subscription"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="text-[#0047AB] font-bold text-sm text-center group-hover:text-blue-800 transition-colors duration-200">
              AIUB NEWS LATER
            </div>
          </a>

          <div className="hidden md:block h-8 w-px bg-gray-300"></div>

          <a
            href="https://www.aiub.edu/soho--smart-optimized-high-quality-and-on-demand-tourism-innovative-education-for-sustainable-and-green-development-2023-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="text-[#0047AB] font-bold text-sm text-center group-hover:text-blue-800 transition-colors duration-200">
              ERASMUS
              <br />
              SOHO
              <br />
              PROJECT
            </div>
          </a>
          <div className="hidden md:block h-8 w-px bg-gray-300"></div>

          <a
            href="https://www.aiub.edu/aiub-joins-responsible-futures-international-2024-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="text-[#0047AB] font-bold text-sm text-center group-hover:text-blue-800 transition-colors duration-200">
              RESPONSIBLE
              <br />
              FUTURES
              <br />
              INTERNATIONAL
            </div>
          </a>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto w-full px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[#0047AB] text-6xl font-extrabold mb-1 tracking-tight">
              Find
            </h2>
            <h3 className="text-gray-500 text-3xl font-bold mb-6 tracking-wide">
              YOUR PROGRAM
            </h3>
            <div className="w-full h-[300px] bg-slate-200 rounded-lg shadow-inner flex items-center justify-center text-gray-400">
              <div className=" bg-blue-100 flex items-center justify-center text-blue-900 font-bold text-xs">
                <Image
                  src="/aiub-banner.jpg"
                  alt="AIUB banner"
                  width={630}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Notice Board */}
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-[#0047AB] text-4xl font-extrabold mr-3">
                Notice
              </h2>
              <div className="bg-[#0047AB] text-white rounded-full p-2 cursor-pointer hover:bg-blue-800 transition">
                <FaArrowRight size={16} />
              </div>
            </div>

            {/* Notice List */}
            <div className="border-t border-gray-300">
              {/* Notice Item 1 */}
              <div className="flex border-b border-gray-300 py-4 hover:bg-gray-50 transition group">
                {/* Date Box */}
                <div className="flex flex-col items-center justify-center min-w-[70px] border-r border-gray-300 pr-4">
                  <span className="text-red-500 font-bold text-2xl">24</span>
                  <span className="text-[#0047AB] font-semibold text-sm">
                    May
                  </span>
                </div>
                {/* Notice Text */}
                <div className="pl-4 flex items-center">
                  <p className="text-sm text-gray-600 font-medium group-hover:text-[#0047AB] cursor-pointer">
                    Admission Test Final Result of Summer 2025-26 [Slot-2]
                    [Except LLB & B Pharm]
                  </p>
                </div>
              </div>

              {/* Notice Item 2 */}
              <div className="flex border-b border-gray-300 py-4 hover:bg-gray-50 transition group">
                <div className="flex flex-col items-center justify-center min-w-[70px] border-r border-gray-300 pr-4">
                  <span className="text-[#0047AB] font-bold text-2xl">01</span>
                  <span className="text-[#0047AB] font-semibold text-sm">
                    Jun
                  </span>
                </div>
                <div className="pl-4 flex items-center">
                  <p className="text-sm text-gray-600 font-medium group-hover:text-[#0047AB] cursor-pointer">
                    Instructions for Internship CV Submission of SUMMER 2025-26
                  </p>
                </div>
              </div>

              {/* Notice Item 3 (Extra example) */}
              <div className="flex border-b border-gray-300 py-4 hover:bg-gray-50 transition group">
                <div className="flex flex-col items-center justify-center min-w-[70px] border-r border-gray-300 pr-4">
                  <span className="text-[#0047AB] font-bold text-2xl">28</span>
                  <span className="text-[#0047AB] font-semibold text-sm">
                    May
                  </span>
                </div>
                <div className="pl-4 flex items-center">
                  <p className="text-sm text-gray-600 font-medium group-hover:text-[#0047AB] cursor-pointer">
                    Final Exam Routine Published for Spring 2025-26
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
