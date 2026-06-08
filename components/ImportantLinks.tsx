import Image from "next/image";

export default function ImportantLinks() {
  return (
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
          href="https://www.aiub.edu/soho"
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
          href="https://www.aiub.edu/aiub-joins-responsible-futures"
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
  );
}