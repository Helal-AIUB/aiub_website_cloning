import Image from "next/image";
import Link from "next/link";
import { db } from "@/app/lib/db"; 

async function getNotices() {
  try {
    const notices = await db.notice.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });
    return notices;
  } catch (error) {
    console.error("Error fetching notices:", error);
    return [];
  }
}

export default async function FindProgramNotice() {
  const notices = await getNotices();

  return (
    <section className="max-w-[1200px] mx-auto w-full px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* --- LEFT COLUMN: Find Your Program --- */}
        <div className="relative mt-25 md:mt-24">
          <div className="absolute -top-16 md:-top-20 left-0 md:left-[15%] z-20 flex flex-col items-start">
            <h2 className="text-[#0047AB] text-[60px] md:text-[75px] font-extrabold tracking-tight leading-none">
              Find
            </h2>
            <h3 className="text-[22px] md:text-[25px] font-extrabold text-gray-400 tracking-widest uppercase ml-20 md:ml-28 mt-1">
              YOUR PROGRAM
            </h3>
          </div>
          <div className="relative w-[100%] md:w-[85%] h-[380px] md:h-[450px] ml-auto overflow-hidden shadow-md group">
            <Image
              src="/banner-logo.png"
              alt="AIUB Program"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#1b2b45] via-[#1b2b45]/60 to-transparent"></div>
            <div className="absolute bottom-6 left-8 right-8 flex flex-col">
              <Link href="/undergraduate" className="text-white text-[16px] md:text-[18px] font-bold py-3 border-t border-white/40 hover:text-blue-300 transition-colors w-full block">
                Undergraduate
              </Link>
              <Link href="/graduate" className="text-white text-[16px] md:text-[18px] font-bold py-3 border-t border-white/40 hover:text-blue-300 transition-colors w-full block">
                Graduate
              </Link>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Dynamic Notice Board --- */}
        <div>
          <div className="flex items-center mb-6">
            <h2 className="text-[#0047AB] text-4xl font-extrabold mr-3">Notice</h2>
            <Link href="#" className="bg-[#0047AB] text-white rounded-full p-1.5 hover:bg-blue-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="h-[400px] overflow-y-auto pr-3 border-t border-gray-300 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#0047AB]">
            {notices.length > 0 ? (
              notices.map((notice) => {
                const dateObj = new Date(notice.date);
                const day = dateObj.getDate().toString().padStart(2, '0');
                const month = dateObj.toLocaleString('default', { month: 'short' });

                return (
                  <div key={notice.id} id={`notice-${notice.id}`} className="flex border-b border-gray-200 py-3.5 hover:bg-gray-50 transition group">
                    <div className="flex flex-col items-center justify-center min-w-[65px] border-r border-gray-200 pr-4">
                      <span className="text-red-500 font-bold text-xl">{day}</span>
                      <span className="text-[#0047AB] font-bold text-[11px] uppercase">{month}</span>
                    </div>
                    <div className="pl-4 flex items-center w-full">
                      <p className="text-[13px] text-gray-500 font-medium group-hover:text-[#0047AB] cursor-pointer">
                        {notice.title}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500 p-4">No notices available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}