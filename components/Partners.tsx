"use client";

import Image from "next/image";

// Strategic Partners er logo array (Tumi asol path gulo ekhane dibe)
const strategicPartners = [
  "/images/logos/strategic/1.png", // Replace with MSDN
  "/images/logos/strategic/2.png", // Replace with IT Academy
  "/images/logos/strategic/3.png", // Replace with CTP
  "/images/logos/strategic/4.png", // Replace with Cisco
  "/images/logos/strategic/5.png", // Replace with CIW
  "/images/logos/strategic/6.png", // Replace with DreamSpark
  "/images/logos/strategic/7.png", // Replace with IEEE
  "/images/logos/strategic/8.png", // Replace with Juniper
  "/images/logos/strategic/9.png", // Replace with EC-Council
];

// Educational Partners er logo array
const educationalPartners = [
  "/images/logos/educational/1.png", // Replace with UCB
  "/images/logos/educational/2.png", // Replace with Algoma
  "/images/logos/educational/3.png", // Replace with Alabama
  "/images/logos/educational/4.png", // Replace with Tokyo
  "/images/logos/educational/5.png", // Replace with Macquarie
  "/images/logos/educational/6.png", // Replace with Sakura
];

// Infinite scroll er jonno array guloke duplicate kora hocche
const duplicateStrategic = [...strategicPartners, ...strategicPartners];
const duplicateEducational = [...educationalPartners, ...educationalPartners];

export default function Partners() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      {/* CSS For Marquee Animation & Edge Fading Mask */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* Right to Left Animation (Strategic) */
          @keyframes scrollMarqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          /* Left to Right Animation (Educational) */
          @keyframes scrollMarqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-marquee {
            display: flex;
            width: max-content;
            animation: scrollMarqueeLeft 35s linear infinite;
          }
          
          .animate-marquee-slow {
            display: flex;
            width: max-content;
            animation: scrollMarqueeRight 40s linear infinite;
          }

          .marquee-container:hover .animate-marquee,
          .marquee-container:hover .animate-marquee-slow {
            animation-play-state: paused;
          }

          /* Magic Fade Effect on Left & Right */
          .fade-edges {
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `,
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* --- Strategic Partners Section --- */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-[#0047AB] text-3xl md:text-[40px] font-bold text-center mb-10 md:mb-16 tracking-tight">
            Strategic Partners
          </h2>

          {/* Marquee Wrapper with Fade Edges */}
          <div className="relative w-full marquee-container fade-edges overflow-hidden">
            <div className="animate-marquee gap-10 md:gap-16 items-center">
              {duplicateStrategic.map((logo, index) => (
                <div
                  key={`strat-${index}`}
                  className="relative w-28 h-12 md:w-40 md:h-20 flex-shrink-0 hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Strategic Partner ${index}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Educational Partners Section --- */}
        <div>
          <h2 className="text-[#0047AB] text-3xl md:text-[40px] font-bold text-center mb-10 md:mb-16 tracking-tight">
            Educational Partners
          </h2>

          {/* Marquee Wrapper with Fade Edges */}
          <div className="relative w-full marquee-container fade-edges overflow-hidden">
            {/* Eitar animation scrollMarqueeRight e set kora ache CSS e */}
            <div className="animate-marquee-slow gap-10 md:gap-16 items-center">
              {duplicateEducational.map((logo, index) => (
                <div
                  key={`edu-${index}`}
                  className="relative w-28 h-12 md:w-40 md:h-20 flex-shrink-0 hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Educational Partner ${index}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}