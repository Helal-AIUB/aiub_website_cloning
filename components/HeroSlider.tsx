"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    img: "/images/hero/1f.png",
    title: "",
    sub: "TECH CENTRIC TEACHING",
    align: "left",
    motion: "animate-fadeInUp",
  },
  {
    img: "/images/hero/2.jpg",
    title: "",
    sub: "THE OPEN STAGE",
    align: "right",
    motion: "animate-fadeInLeft",
  },
  {
    img: "/images/hero/3.png",
    title: "",
    sub: "CAMPUS LANDMARK",
    align: "left",
    motion: "animate-fadeInRight",
  },
  {
    img: "/images/hero/4.jpg",
    title: "",
    sub: "SPORTS & EVENTS",
    align: "right",
    motion: "animate-fadeInDown",
  },
  {
    img: "/images/hero/5.jpg",
    title: "GYMNASIUM",
    sub: " HEALTH & FITNESS",
    align: "left",
    motion: "animate-fadeInUp",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
      {/* CSS Animations Layer */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes kenBurnsZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.08); }
          }
          .animate-kenBurns {
            animation: kenBurnsZoom 6.5s ease-out forwards;
          }

          @keyframes fadeInUp { 
            0% { opacity: 0; transform: translateY(30px); } 
            100% { opacity: 1; transform: translateY(0); } 
          }
          @keyframes fadeInDown { 
            0% { opacity: 0; transform: translateY(-30px); } 
            100% { opacity: 1; transform: translateY(0); } 
          }
          @keyframes fadeInLeft { 
            0% { opacity: 0; transform: translateX(30px); } 
            100% { opacity: 1; transform: translateX(0); } 
          }
          @keyframes fadeInRight { 
            0% { opacity: 0; transform: translateX(-30px); } 
            100% { opacity: 1; transform: opacity: 1; transform: translateX(0); } 
          }

          .animate-fadeInUp { animation: fadeInUp 1.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards; }
          .animate-fadeInDown { animation: fadeInDown 1.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards; }
          .animate-fadeInLeft { animation: fadeInLeft 1.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards; }
          .animate-fadeInRight { animation: fadeInRight 1.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards; }
        `,
        }}
      />

      {/* Background Slides Stack */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`w-full h-full bg-cover bg-center ${
                index === currentIndex ? "animate-kenBurns" : ""
              }`}
              style={{ backgroundImage: `url('${slide.img}')` }}
            />
            {/* Overlay Grid to soften background hotspots */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/50 z-10"></div>
          </div>
        ))}
      </div>

      {/* --- PREMIUM TEXT MOTION LAYER --- */}
      <div
        key={currentIndex}
        className="absolute inset-0 z-20 flex w-full h-full items-end p-8 md:p-16 lg:p-24 select-none pointer-events-none"
      >
        <div
          className={`w-full ${
            slides[currentIndex].align === "left" ? "text-left" : "text-right"
          } ${slides[currentIndex].motion}`}
        >
          {/* Main Title: Solid Modern Sans-Serif font setup */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-[76px] font-sans font-black tracking-tight leading-none uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] md:drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">
            {slides[currentIndex].title}
          </h1>

          {/* Subtitle: High Tracking premium label */}
          <p className="text-white/90 text-xs md:text-lg lg:text-xl font-sans font-semibold tracking-[0.3em] uppercase mt-3 md:mt-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            {slides[currentIndex].sub}
          </p>
        </div>
      </div>

      {/* Left Navigation Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 border border-white text-white p-3 hover:bg-white hover:text-black transition z-30 hidden md:block cursor-pointer opacity-70 hover:opacity-100"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 border border-white text-white p-3 hover:bg-white hover:text-black transition z-30 hidden md:block cursor-pointer opacity-70 hover:opacity-100"
      >
        <FaChevronRight size={20} />
      </button>
    </section>
  );
}
