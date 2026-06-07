"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import NewsEvents from "../components/NewsEvents";
import Faculties from "../components/Faculties";
import DiscoverCampus from "../components/DiscoverCampus";
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
            className="flex flex-col items-center justify-center cursor-pointer group"
          >
            {/* Sustainability Icon Ekhane */}
            <Image
              src="/sustainability.png"
              alt="Sustainability"
              width={50}
              height={50}
              className="mb-2 transform group-hover:scale-110 transition-transform duration-300 object-contain"
            />
            <div className="text-[#0047AB] font-bold text-sm text-center group-hover:text-blue-800 transition-colors duration-200">
              SUSTAINABILITY
            </div>
          </a>

          <div className="hidden md:block h-8 w-px bg-gray-300"></div>

          <a
            href="https://www.aiub.edu/aiub-newsletter/news-letter-subscription"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center cursor-pointer group"
          >
            {/* Newsletter Icon */}
            <Image
              src="/newsletter.png"
              alt="AIUB Newsletter"
              width={50}
              height={50}
              className="mb-2 transform group-hover:scale-110 transition-transform duration-300 object-contain"
            />
            <div className="text-[#0047AB] font-bold text-sm text-center group-hover:text-blue-800 transition-colors duration-200 uppercase">
              AIUB NEWSLETTER
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
      <section className="max-w-[1200px] mx-auto w-full px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="relative mt-25 md:mt-24">
            <div className="absolute -top-16 md:-top-20 left-0 md:left-[15%] z-20 flex flex-col items-start">
              <h2 className="text-[#0047AB] text-[60px] md:text-[75px] font-extrabold tracking-tight leading-none">
                Find
              </h2>

              <h3 className="text-[22px] md:text-[25px] font-extrabold text-gray-400 tracking-widest uppercase ml-20 md:ml-28 mt-1">
                YOUR PROGRAM
              </h3>
            </div>

            {/* Image Container */}
            <div className="relative w-[100%] md:w-[85%] h-[380px] md:h-[450px] ml-auto overflow-hidden shadow-md group">
              <Image
                src="/banner-logo.png"
                alt="AIUB Program"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#1b2b45] via-[#1b2b45]/60 to-transparent"></div>

              <div className="absolute bottom-6 left-8 right-8 flex flex-col">
                <Link
                  href="/undergraduate"
                  className="text-white text-[16px] md:text-[18px] font-bold py-3 border-t border-white/40 hover:text-blue-300 transition-colors w-full block"
                >
                  Undergraduate
                </Link>
                <Link
                  href="/graduate"
                  className="text-white text-[16px] md:text-[18px] font-bold py-3 border-t border-white/40 hover:text-blue-300 transition-colors w-full block"
                >
                  Graduate
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Notice Board */}
          <div>
            {/* Notice Header */}
            <div className="flex items-center mb-6">
              <h2 className="text-[#0047AB] text-4xl font-extrabold mr-3">
                Notice
              </h2>
              {/* Arrow Icon button */}
              <Link
                href="#"
                className="bg-[#0047AB] text-white rounded-full p-1.5 hover:bg-blue-800 transition"
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

            <div className="h-[400px] overflow-y-auto pr-3 border-t border-gray-300 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#0047AB]">
              {/* Notice Item 1 (Red Date) */}
              <div className="flex border-b border-gray-200 py-3.5 hover:bg-gray-50 transition group">
                <div className="flex flex-col items-center justify-center min-w-[65px] border-r border-gray-200 pr-4">
                  <span className="text-red-500 font-bold text-xl">24</span>
                  <span className="text-[#0047AB] font-bold text-[11px] uppercase">
                    May
                  </span>
                </div>
                <div className="pl-4 flex items-center w-full">
                  <p className="text-[13px] text-gray-500 font-medium group-hover:text-[#0047AB] cursor-pointer">
                    Admission Test Final Result of Summer 2025-26 [Slot-2]
                    [Except LLB & B Pharm]
                  </p>
                </div>
              </div>

              {/* Notice Item 2 (Blue Date) */}
              <div className="flex border-b border-gray-200 py-3.5 hover:bg-gray-50 transition group">
                <div className="flex flex-col items-center justify-center min-w-[65px] border-r border-gray-200 pr-4">
                  <span className="text-[#0047AB] font-bold text-xl">01</span>
                  <span className="text-[#0047AB] font-bold text-[11px] uppercase">
                    Jun
                  </span>
                </div>
                <div className="pl-4 flex items-center w-full">
                  <p className="text-[13px] text-gray-500 font-medium group-hover:text-[#0047AB] cursor-pointer">
                    Instructions for Internship CV Submission of SUMMER 2025-26
                  </p>
                </div>
              </div>

              {/* Notice Item 3 (Blue Date) */}
              <div className="flex border-b border-gray-200 py-3.5 hover:bg-gray-50 transition group">
                <div className="flex flex-col items-center justify-center min-w-[65px] border-r border-gray-200 pr-4">
                  <span className="text-[#0047AB] font-bold text-xl">01</span>
                  <span className="text-[#0047AB] font-bold text-[11px] uppercase">
                    Jun
                  </span>
                </div>
                <div className="pl-4 flex items-center w-full">
                  <p className="text-[13px] text-gray-500 font-medium group-hover:text-[#0047AB] cursor-pointer">
                    Internship Registration Instruction FBA for Summer 2025-26
                  </p>
                </div>
              </div>

              {/* Notice Item 4 (Red Date) */}
              <div className="flex border-b border-gray-200 py-3.5 hover:bg-gray-50 transition group">
                <div className="flex flex-col items-center justify-center min-w-[65px] border-r border-gray-200 pr-4">
                  <span className="text-red-500 font-bold text-xl">01</span>
                  <span className="text-[#0047AB] font-bold text-[11px] uppercase">
                    Jun
                  </span>
                </div>
                <div className="pl-4 flex items-center w-full">
                  <p className="text-[13px] text-gray-500 font-medium group-hover:text-[#0047AB] cursor-pointer">
                    ACADEMIC CALENDAR: SUMMER 2025-26 [Except LLB & BPharm]
                  </p>
                </div>
              </div>

              {/* Notice Item 5 (Blue Date) */}
              <div className="flex border-b border-gray-200 py-3.5 hover:bg-gray-50 transition group">
                <div className="flex flex-col items-center justify-center min-w-[65px] border-r border-gray-200 pr-4">
                  <span className="text-[#0047AB] font-bold text-xl">24</span>
                  <span className="text-[#0047AB] font-bold text-[11px] uppercase">
                    May
                  </span>
                </div>
                <div className="pl-4 flex items-center w-full">
                  <p className="text-[13px] text-gray-500 font-medium group-hover:text-[#0047AB] cursor-pointer">
                    SUMMER 2025-26 FINAL REGISTRATION STEPS FOR THE STUDENTS OF
                    DEPARTMENT OF EEE, CoE & IPE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsEvents />
      <Faculties />
      <DiscoverCampus />
    </div>
  );
}
