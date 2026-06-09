'use client';

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function jate shesher dike ektu slow hoye jay (smooth lagbe)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, end, duration]);

  return { count, countRef };
};

// Component for Individual Stat Item
const StatItem = ({ end, label, formatComma }: { end: number, label: string, formatComma?: boolean }) => {
  const { count, countRef } = useCounter(end, 2500);

  // Number format korar jonno (jemon 41226 ke 41,226 banano)
  const displayCount = formatComma ? count.toLocaleString() : count;

  return (
    <div ref={countRef} className="flex flex-col items-center justify-center">
      <h4 className="text-[50px] md:text-[65px] font-extrabold text-black leading-none mb-3 tracking-tight">
        {displayCount}
      </h4>
      <p className="text-gray-600 text-sm md:text-[17px] font-normal tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default function FactsFigures() {
  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
      
      {/* --- Background Floating Dots (Chobir moto artistic feel er jonno) --- */}
      <div className="absolute top-[20%] right-[30%] w-2 h-2 bg-green-600 rounded-full opacity-80"></div>
      <div className="absolute bottom-[10%] left-[25%] w-2.5 h-2.5 bg-orange-400 rounded-full opacity-90"></div>
      <div className="absolute bottom-[5%] right-[40%] w-1.5 h-1.5 bg-green-600 rounded-full opacity-80"></div>
      <div className="absolute top-[70%] right-[5%] w-2 h-2 bg-orange-400 rounded-full opacity-90"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* --- Header Section --- */}
        <div className="flex items-center justify-start mb-16 md:mb-24 lg:ml-8">
          <h2 className="text-[#0047AB] text-[55px] md:text-[75px] font-extrabold mr-4 tracking-tight leading-none">
            Facts
          </h2>
          <h3 className="text-black text-xl md:text-[28px] font-bold tracking-widest uppercase mr-4 mt-2 md:mt-4">
            AND FIGURES
          </h3>
          {/* Blue Diagonal Arrow Icon */}
          <Link
            href="#"
            className="bg-[#0047AB] text-white rounded-full p-2 hover:bg-blue-800 transition mt-2 md:mt-4 shadow-md"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 md:h-6 md:w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" className="hidden" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5v10M19 5H9" />
            </svg>
          </Link>
        </div>

        {/* --- Stats Grid Section --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 w-full max-w-[1200px] mx-auto">
          
          <StatItem end={5} label="Faculties" />
          <StatItem end={21} label="Academic Programs" />
          <StatItem end={41226} label="Total Graduates" formatComma={true} />
          <StatItem end={23} label="Convocations" />

        </div>

      </div>
    </section>
  );
}