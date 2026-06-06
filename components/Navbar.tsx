"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detect korar function
  useEffect(() => {
    const handleScroll = () => {
      // 40px er beshi scroll korle isScrolled true hobe
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Outer Nav wrapper. Scroll na korle gradient thakbe, scroll korle shadow asbe.
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${!isScrolled ? "bg-gradient-to-b from-black/90 via-black/50 to-transparent" : "shadow-lg"} font-sans`}
    >
      <div
        className={`w-full transition-colors duration-300 ${isScrolled ? "bg-white text-[#0047AB]" : "bg-transparent text-white border-b border-white/20"}`}
      >
        <div
          className={`hidden md:flex justify-between items-center max-w-[1500px] mx-auto px-4 sm:px-6 ${isScrolled ? "py-1.5" : "py-2"}`}
        >
          <p
            className={`text-[13px] md:text-[14px] font-semibold tracking-wide ${!isScrolled && "drop-shadow-md"}`}
          >
            American International University-Bangladesh
          </p>
          <div
            className={`flex items-center space-x-4 text-[13px] md:text-[14px] font-medium ${!isScrolled && "drop-shadow-md"}`}
          >
            <Link
              href="#"
              className={`transition ${isScrolled ? "hover:text-blue-700" : "hover:text-blue-200"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className={`transition ${isScrolled ? "hover:text-blue-700" : "hover:text-blue-200"}`}
            >
              Login
            </Link>
            <Link
              href="#"
              className={`transition ${isScrolled ? "hover:text-blue-700" : "hover:text-blue-200"}`}
            >
              Web Mail
            </Link>
            <Link
              href="#"
              className={`transition ${isScrolled ? "hover:text-blue-700" : "hover:text-blue-200"}`}
            >
              MS Teams
            </Link>
            <Link
              href="#"
              className={`transition ${isScrolled ? "hover:text-blue-700" : "hover:text-blue-200"}`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR & LOGO (Scroll korle Blue BG hobe) */}
      <div
        className={`w-full transition-colors duration-300 ${isScrolled ? "bg-[#0052a5] text-white" : "text-white"}`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">
            <div className="hidden md:flex justify-end items-center space-x-6 lg:space-x-10 pr-6 lg:pr-10">
              <div
                className={`relative group transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}
              >
                <Link
                  href="/about"
                  className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition"
                >
                  ABOUT
                </Link>
                <div className="absolute left-0 top-full mt-0 w-[260px] bg-[#0047AB] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out shadow-xl z-50 border-t-2 border-blue-400">
                  <ul className="flex flex-col py-2">
                    <li className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                      <Link
                        href="#"
                        className="block w-full text-[13px] font-medium"
                      >
                        Information or Overview
                      </Link>
                    </li>
                    <li className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                      <Link
                        href="#"
                        className="block w-full text-[13px] font-medium"
                      >
                        General Information
                      </Link>
                    </li>
                    <li className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                      <Link
                        href="#"
                        className="block w-full text-[13px] font-medium"
                      >
                        Rules of Campus Entry
                      </Link>
                    </li>
                    <li className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                      <Link
                        href="#"
                        className="block w-full text-[13px] font-medium"
                      >
                        Why Study Here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ACADEMICS */}
              <div
                className={`relative group transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}
              >
                <Link
                  href="/academics"
                  className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition"
                >
                  ACADEMICS
                </Link>
                <div className="absolute left-[-20px] md:left-[-100px] lg:left-[-150px] top-full mt-0 w-[850px] lg:w-[950px] bg-[#0052a5] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out shadow-xl z-50 border-t-2 border-blue-400">
                  <div className="grid grid-cols-4 gap-6 p-8">
                    <div>
                      <h3 className="font-bold text-sm mb-4 pb-2 border-b border-blue-400/50 uppercase tracking-wide">
                        Faculties
                      </h3>
                      <ul className="space-y-3 text-[13px]">
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Faculty of Arts and Social Sciences
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Faculty of Business Administration
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Faculty of Engineering
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Faculty of Health and Life Sciences
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Faculty of Science and Technology
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-sm mb-4 pb-2 border-b border-blue-400/50 uppercase tracking-wide">
                        Information
                      </h3>
                      <ul className="space-y-3 text-[13px]">
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Academic Calendar
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Academic Regulations
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Course Catalog
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Tuition Fee
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Faculty List
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-sm mb-4 pb-2 border-b border-blue-400/50 uppercase tracking-wide">
                        Partnerships
                      </h3>
                      <ul className="space-y-3 text-[13px]">
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Internationalization
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Academic Partners
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="hover:text-blue-200 transition-colors"
                          >
                            Strategic Partners
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="mb-6">
                        <h3 className="font-bold text-sm mb-4 pb-2 border-b border-blue-400/50 uppercase tracking-wide">
                          Institutes
                        </h3>
                        <ul className="space-y-3 text-[13px]">
                          <li>
                            <Link
                              href="#"
                              className="hover:text-blue-200 transition-colors block leading-snug"
                            >
                              Institute of Continuing Education
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:text-blue-200 transition-colors block leading-snug"
                            >
                              Dr. Anwarul Abedin Institute of Innovation (D2A2I)
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm mb-4 pb-2 border-b border-blue-400/50 uppercase tracking-wide">
                          Accreditations
                        </h3>
                        <ul className="space-y-3 text-[13px]">
                          <li>
                            <Link
                              href="#"
                              className="hover:text-blue-200 transition-colors"
                            >
                              IQAC
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:text-blue-200 transition-colors"
                            >
                              CETL
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ADMISSION */}
              <div
                className={`relative transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}
              >
                <Link
                  href="/admission"
                  className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition"
                >
                  ADMISSION
                </Link>
              </div>
            </div>

            {/* CENTER LOGO */}
            <div className="flex justify-center z-50">
              <Link href="/" className="relative block">
                <div
                  className={`relative flex items-center justify-center transition-all duration-300 ${
                    isScrolled
                      ? "w-[60px] h-[60px]"
                      : "w-[90px] h-[90px] lg:w-[110px] lg:h-[110px]"
                  }`}
                >
                  <Image
                    src="/aiub-logo.png"
                    alt="AIUB Logo"
                    width={110}
                    height={110}
                    className="w-full h-full object-contain drop-shadow-md transition-all duration-300"
                  />
                </div>
              </Link>
            </div>

            {/* --- RIGHT MENU LINKS --- */}
            <div className="hidden md:flex justify-start items-center space-x-6 lg:space-x-10 pl-6 lg:pl-10">
              <div
                className={`relative transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}
              >
                <Link
                  href="/on-campus"
                  className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition"
                >
                  ON CAMPUS
                </Link>
              </div>

              {/* ADMINISTRATION */}
              <div
                className={`relative group transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}
              >
                <Link
                  href="/administration"
                  className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition"
                >
                  ADMINISTRATION
                </Link>
                <div className="absolute left-0 top-full mt-0 w-[260px] bg-[#0047AB] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out shadow-xl z-50 border-t-2 border-blue-400">
                  <ul className="flex flex-col py-2">
                    <li className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                      <Link
                        href="#"
                        className="flex justify-between items-center w-full text-[13px] font-medium"
                      >
                        The Vice Chancellor{" "}
                        <span className="text-lg leading-none">&#8250;</span>
                      </Link>
                    </li>
                    <li className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                      <Link
                        href="#"
                        className="block w-full text-[13px] font-medium"
                      >
                        The Pro Vice Chancellor
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* RESEARCH */}
              <div
                className={`relative group transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}
              >
                <Link
                  href="/research"
                  className="font-bold text-[14px] lg:text-[15px] tracking-wider hover:text-blue-200 uppercase drop-shadow-md transition"
                >
                  RESEARCH
                </Link>
                <div className="absolute right-0 top-full mt-0 w-[260px] bg-[#0047AB] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out shadow-xl z-50 border-t-2 border-blue-400">
                  <ul className="flex flex-col py-2">
                    <li className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                      <Link
                        href="#"
                        className="block w-full text-[13px] font-medium"
                      >
                        Research Overview
                      </Link>
                    </li>
                    <li className="px-6 py-2.5 hover:bg-blue-800 transition-colors">
                      <Link
                        href="#"
                        className="flex justify-between items-center w-full text-[13px] font-medium"
                      >
                        Publications{" "}
                        <span className="text-lg leading-none">&#8250;</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex justify-end py-2">
              <button className="text-white focus:outline-none drop-shadow-md">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUB LINKS / BOTTOM BAR - Eta Scroll korle Hide hoye jabe*/}
      {!isScrolled && (
        <div className="w-full transition-all duration-300 text-white border-t border-white/20">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-[1fr_auto_1fr] py-2 text-[12px] text-gray-200">
              <div className="flex justify-end items-center space-x-2 pr-6 lg:pr-10 drop-shadow-md">
                <Link href="#" className="hover:text-white transition">
                  Notices
                </Link>{" "}
                <span className="opacity-40">|</span>
                <Link href="#" className="hover:text-white transition">
                  News And Events
                </Link>{" "}
                <span className="opacity-40">|</span>
                <Link href="#" className="hover:text-white transition">
                  Newsletter
                </Link>{" "}
                <span className="opacity-40">|</span>
                <Link href="#" className="hover:text-white transition">
                  Convocation
                </Link>
              </div>

              <div className="w-24 lg:w-[110px]"></div>

              <div className="flex justify-start items-center space-x-2 pl-6 lg:pl-10 drop-shadow-md">
                <Link href="#" className="hover:text-white transition">
                  Alumni
                </Link>{" "}
                <span className="opacity-40">|</span>
                <Link href="#" className="hover:text-white transition">
                  Visitors
                </Link>{" "}
                <span className="opacity-40">|</span>
                <Link href="#" className="hover:text-white transition">
                  Future Students
                </Link>{" "}
                <span className="opacity-40">|</span>
                <Link href="#" className="hover:text-white transition">
                  Campus Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
