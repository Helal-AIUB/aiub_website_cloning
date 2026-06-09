"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HeroSlider() {
  const images = ["/images/hero/1.jpg", "/images/hero/2.jpg", "/images/hero/3.jpg", "/images/hero/4.jpg", "/images/hero/5.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
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
  );
}