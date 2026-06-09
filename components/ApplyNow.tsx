import Link from "next/link";

export default function ApplyNow() {
  return (
    <section
      className="relative w-full h-[550px] md:h-[600px] flex items-center bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/apply_now/apply_now.png')" }}
    >
      {/* Dark Overlay - Text ke sposto korar jonno */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* --- LEFT SIDE: Texts & Apply Button --- */}
        <div className="flex flex-col text-white w-full md:w-[65%]">
          <h1 className="text-5xl md:text-[75px] font-bold leading-tight tracking-tight mb-4 md:mb-6 drop-shadow-lg">
            We are eager to meet you
          </h1>

          <h2 className="text-xl md:text-[26px] font-extrabold uppercase tracking-wider mb-3 md:mb-4 drop-shadow-md">
            ADMISSION APPLICATION OPEN FOR
          </h2>

          <p className="text-base md:text-[22px] font-bold mb-1 md:mb-2 tracking-wide drop-shadow-md">
            FALL 2026-27 (SLOT-2) [ONLY B.PHARM. & LL.B]
          </p>

          <p className="text-base md:text-[22px] font-bold mb-6 md:mb-10 tracking-wide drop-shadow-md">
            SUMMER 2025-26 (SLOT-2) [EXCEPT B.PHARM. & LL.B]
          </p>

          <Link
            href="https://admission.aiub.edu/"
            target="_blank"
            className="bg-white text-black font-bold text-sm md:text-base px-6 py-2 md:px-8 md:py-2.5 w-fit hover:bg-gray-200 transition-colors shadow-lg"
          >
            Apply Now
          </Link>
        </div>

        {/* --- RIGHT SIDE: Scholarship Button  --- */}
        <div className="flex-shrink-0 self-start md:self-auto mt-4 md:mt-0">
          <Link
            href="#"
            className="inline-block border-2 border-white/90 text-white rounded-[50px] px-8 py-3 md:px-10 md:py-4 text-center hover:bg-white hover:text-black transition-colors duration-300 shadow-xl backdrop-blur-sm"
          >
            <span className="block text-sm md:text-lg font-bold leading-snug tracking-wide">
              Scholarship
            </span>
            <span className="block text-sm md:text-lg font-bold leading-snug tracking-wide">
              Opportunities
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
