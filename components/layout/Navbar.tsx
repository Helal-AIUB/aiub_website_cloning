"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

// Login বাদ দিয়ে বাকিগুলো এখানে রাখলাম
const topLinks = ["Web Mail", "MS Teams", "Contact Us"];
const aboutLinks = ["Information or Overview", "General Information", "Rules of Campus Entry", "Why Study Here"];
const adminLinks = ["The Vice Chancellor", "The Pro Vice Chancellor"];
const researchLinks = ["Research Overview", "Publications"];
const mobileMainLinks = ["ABOUT", "ACADEMICS", "ADMISSION", "ON CAMPUS", "ADMINISTRATION", "RESEARCH"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDeadLink = (e: React.MouseEvent) => e.preventDefault();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${!isScrolled ? "bg-gradient-to-b from-black/90 via-black/50 to-transparent" : "shadow-lg"} font-sans`}>
      
      {/* --- TOP BAR --- */}
      <div className={`w-full transition-colors duration-300 ${isScrolled ? "bg-white text-[#0047AB]" : "bg-transparent text-white border-b border-white/20"}`}>
        <div className={`hidden md:flex justify-between items-center max-w-[1500px] mx-auto px-4 sm:px-6 ${isScrolled ? "py-1.5" : "py-2"}`}>
          <p className={`text-[13px] md:text-[14px] font-semibold tracking-wide ${!isScrolled && "drop-shadow-md"}`}>
            American International University-Bangladesh
          </p>
          <div className={`flex items-center space-x-4 text-[13px] md:text-[14px] font-medium ${!isScrolled && "drop-shadow-md"}`}>
            <Link href="#" onClick={handleDeadLink} className={`transition ${isScrolled ? "hover:text-blue-700" : "hover:text-blue-200"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </Link>
            
            {/* ডাইরেক্ট লগইন লিংক - কোন ঝামেলা ছাড়াই কাজ করবে */}
            <Link href="/login" className={`transition ${isScrolled ? "hover:text-blue-700" : "hover:text-blue-200"}`}>
              Login
            </Link>

            {topLinks.map((item, i) => (
              <Link key={i} href="#" onClick={handleDeadLink} className={`transition ${isScrolled ? "hover:text-blue-700" : "hover:text-blue-200"}`}>{item}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <div className={`w-full transition-colors duration-300 relative ${isScrolled ? "bg-[#0052a5] text-white" : "text-white"}`}>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">
            
            <div className="hidden md:flex justify-end items-center space-x-6 lg:space-x-10 pr-6 lg:pr-10">
              <div className={`relative group transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
                <Link href="#" onClick={handleDeadLink} className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition">ABOUT</Link>
                <div className="absolute left-0 top-full mt-0 w-[260px] bg-[#0047AB] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl z-50 border-t-2 border-blue-400">
                  <ul className="flex flex-col py-2">
                    {aboutLinks.map((item, i) => (
                      <li key={i} className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                        <Link href="#" onClick={handleDeadLink} className="block w-full text-[13px] font-medium">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`relative group transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
                <Link href="#" onClick={handleDeadLink} className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition">ACADEMICS</Link>
                <div className="absolute left-[-20px] md:left-[-100px] lg:left-[-150px] top-full mt-0 w-[850px] lg:w-[950px] bg-[#0052a5] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl z-50 border-t-2 border-blue-400">
                  <div className="grid grid-cols-4 gap-6 p-8">
                    {[
                      { title: "Faculties", links: ["Faculty of Arts and Social Sciences", "Faculty of Business Administration", "Faculty of Engineering", "Faculty of Health and Life Sciences", "Faculty of Science and Technology"] },
                      { title: "Information", links: ["Academic Calendar", "Academic Regulations", "Course Catalog", "Tuition Fee", "Faculty List"] },
                      { title: "Partnerships", links: ["Internationalization", "Academic Partners", "Strategic Partners"] }
                    ].map((col, idx) => (
                      <div key={idx}>
                        <h3 className="font-bold text-sm mb-4 pb-2 border-b border-blue-400/50 uppercase tracking-wide">{col.title}</h3>
                        <ul className="space-y-3 text-[13px]">
                          {col.links.map((link, i) => (
                            <li key={i}><Link href="#" onClick={handleDeadLink} className="hover:text-blue-200 transition-colors">{link}</Link></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div>
                      <div className="mb-6">
                        <h3 className="font-bold text-sm mb-4 pb-2 border-b border-blue-400/50 uppercase tracking-wide">Institutes</h3>
                        <ul className="space-y-3 text-[13px]">
                          {["Institute of Continuing Education", "Dr. Anwarul Abedin Institute of Innovation"].map((inst, i) => (
                            <li key={i}><Link href="#" onClick={handleDeadLink} className="hover:text-blue-200 transition-colors block leading-snug">{inst}</Link></li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 pb-2 border-b border-blue-400/50 uppercase tracking-wide">Accreditations</h3>
                        <ul className="space-y-3 text-[13px]">
                          {["IQAC", "CETL"].map((acc, i) => (
                            <li key={i}><Link href="#" onClick={handleDeadLink} className="hover:text-blue-200 transition-colors">{acc}</Link></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`relative transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
                <Link href="#" onClick={handleDeadLink} className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition">ADMISSION</Link>
              </div>
            </div>

            <div className="flex justify-start md:justify-center z-50 py-2 md:py-0">
              <Link href="#" onClick={handleDeadLink} className="relative block">
                <div className={`relative flex items-center justify-center transition-all duration-300 ${isScrolled ? "w-[50px] h-[50px] md:w-[60px] md:h-[60px]" : "w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px]"}`}>
                  <Image src="/aiub-logo.png" alt="AIUB Logo" width={110} height={110} className="w-full h-full object-contain drop-shadow-md transition-all duration-300" />
                </div>
              </Link>
            </div>

            <div className="hidden md:flex justify-start items-center space-x-6 lg:space-x-10 pl-6 lg:pl-10">
              <div className={`relative transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
                <Link href="#" onClick={handleDeadLink} className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition">ON CAMPUS</Link>
              </div>

              <div className={`relative group transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
                <Link href="#" onClick={handleDeadLink} className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition">ADMINISTRATION</Link>
                <div className="absolute left-0 top-full mt-0 w-[260px] bg-[#0047AB] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl z-50 border-t-2 border-blue-400">
                  <ul className="flex flex-col py-2">
                    {adminLinks.map((item, i) => (
                      <li key={i} className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                        <Link href="#" onClick={handleDeadLink} className="flex justify-between items-center w-full text-[13px] font-medium">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`relative group transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
                <Link href="#" onClick={handleDeadLink} className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition">RESEARCH</Link>
                <div className="absolute right-0 top-full mt-0 w-[260px] bg-[#0047AB] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl z-50 border-t-2 border-blue-400">
                  <ul className="flex flex-col py-2">
                    {researchLinks.map((item, i) => (
                      <li key={i} className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                        <Link href="#" onClick={handleDeadLink} className="flex justify-between items-center w-full text-[13px] font-medium">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:hidden flex justify-end py-2">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none drop-shadow-md p-2">
                {isMobileMenuOpen ? (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE DROPDOWN --- */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full bg-[#0047AB] border-t border-blue-400 shadow-xl absolute top-full left-0 z-50">
            <div className="flex flex-col px-6 py-4 space-y-4 text-[14px] font-bold tracking-wider">
              {mobileMainLinks.map((item, i) => (
                <Link key={i} href="#" onClick={(e) => { handleDeadLink(e); setIsMobileMenuOpen(false); }} className="hover:text-blue-200">{item}</Link>
              ))}
              <hr className="border-blue-400/50" />
              <div className="flex flex-col space-y-3 font-medium text-[13px] opacity-90">
                
                {/* মোবাইল লগইন বাটন */}
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-200">
                  Login
                </Link>

                {topLinks.map((item, i) => (
                  <Link key={i} href="#" onClick={(e) => { handleDeadLink(e); setIsMobileMenuOpen(false); }} className="hover:text-blue-200">{item}</Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- SUB LINKS --- */}
      {!isScrolled && (
        <div className="hidden md:block w-full transition-all duration-300 text-white border-t border-white/20">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-[1fr_auto_1fr] py-2 text-[12px] text-gray-200">
              <div className="flex justify-end items-center space-x-2 pr-6 lg:pr-10 drop-shadow-md">
                {["Notices", "News And Events", "Newsletter", "Convocation"].map((item, i, arr) => (
                  <div key={i} className="flex space-x-2">
                    <Link href="#" onClick={handleDeadLink} className="hover:text-white transition">{item}</Link>
                    {i !== arr.length - 1 && <span className="opacity-40">|</span>}
                  </div>
                ))}
              </div>
              <div className="w-24 lg:w-[110px]"></div>
              <div className="flex justify-start items-center space-x-2 pl-6 lg:pl-10 drop-shadow-md">
                {["Alumni", "Visitors", "Future Students", "Campus Map"].map((item, i, arr) => (
                  <div key={i} className="flex space-x-2">
                    <Link href="#" onClick={handleDeadLink} className="hover:text-white transition">{item}</Link>
                    {i !== arr.length - 1 && <span className="opacity-40">|</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}