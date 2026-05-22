import { useRef } from "react";
import { Waves, Wine, Flower2, Mountain, Bike, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const AMENITIES_DATA = [
  {
    icon: Waves,
    title: "Sky Infinity Pool",
    desc: "Experience the sensation of swimming in our 25-meter heated pool that appears to float directly into the rugged Dolomite peaks.",
  },
  {
    icon: Wine,
    title: "Forest-to-Table Dining",
    desc: "Indulge in 5-course gourmet dinners featuring organic ingredients sourced daily from our own gardens and local Alpine farmers.",
  },
  {
    icon: Flower2, // Lotus flower-like icon in Lucide
    title: "Vitalis Panoramic Spa",
    desc: "Recharge in our panoramic saunas and enjoy authentic herbal treatments inspired by ancient Alpine healing traditions.",
  },
  {
    icon: Mountain,
    title: "Ski-In / Ski-Out Access",
    desc: "Enjoy seamless access to the Dolomiti Superski slopes directly from the hotel's ski room—no shuttles, no waiting.",
  },
  {
    icon: Bike,
    title: "E-Bike & Hiking Hub",
    desc: "Explore the mountains with ease using our premium fleet of e-bikes and professional hiking gear available exclusively for guests.",
  },
  {
    icon: Sparkles,
    title: "Mindful Yoga Studio",
    desc: "Find your inner peace in our glass-walled studio overlooking the pine forest, offering daily guided meditation and yoga sessions.",
  }
];

export function Amenities() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = clientWidth * 0.6;
      const targetScroll = direction === "left" ? scrollLeft - offset : scrollLeft + offset;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="amenities" className="w-full bg-white h-[639px] md:h-[836px] py-20 px-4 md:pt-20 md:pb-[120px] md:px-12 font-sans text-zinc-900 overflow-hidden border-b border-zinc-100">
      <div className="mx-auto max-w-[1400px] h-full flex flex-col justify-between md:justify-start md:gap-[10px]">
        
        {/* Section Header */}
        <div className="mb-0 md:mb-0 text-center">
          <span className="block font-sans text-xs tracking-[0.15em] text-zinc-500 mb-3">
            - Amenities -
          </span>
          <h2 className="font-serif text-[36px] md:text-[46px] font-light tracking-tight text-zinc-900 leading-tight">
            Everything you'd hope for, and more.
          </h2>
        </div>

        {/* Swipeable Grid/Carousel Layout */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {AMENITIES_DATA.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="w-[310px] md:w-auto min-w-[310px] md:min-w-0 h-[255px] md:h-auto snap-start flex-shrink-0 bg-[#F5F4F0] p-6 md:p-8 rounded-2xl flex flex-col items-start text-left justify-between hover:bg-[#eae8e3] transition-colors duration-300"
              >
                {/* White square card for the icon */}
                <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] shrink-0">
                  <IconComponent className="h-5.5 w-5.5 text-[#a29482] stroke-[1.8]" />
                </div>
                
                {/* Text content */}
                <div className="space-y-1.5 md:space-y-2">
                  <h3 className="font-sans text-lg font-normal tracking-tight text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="font-sans text-zinc-600 font-light text-[13px] leading-relaxed line-clamp-3 md:line-clamp-none">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Navigation Control Circles (Mobile only) */}
        <div className="flex md:hidden items-center justify-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dcd9d4] text-[#a29482] hover:bg-zinc-200 transition-all duration-300 focus:outline-none cursor-pointer shadow-sm"
            aria-label="Previous Amenity"
          >
            <ChevronLeft className="h-5 w-5 stroke-[2]" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a29482] text-white hover:bg-[#908271] transition-all duration-300 focus:outline-none cursor-pointer shadow-sm"
            aria-label="Next Amenity"
          >
            <ChevronRight className="h-5 w-5 stroke-[2]" />
          </button>
        </div>

      </div>
    </section>
  );
}
