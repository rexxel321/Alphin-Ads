import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    alt: "Stunning mountain scenery at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    alt: "Misty Alpine hills with a luxury lodge at sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm close-up of classical stone arches of the Colosseum",
  }
];

export function About() {
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
    <section className="w-full bg-white h-[781px] md:h-[923px] pt-20 pb-20 pl-4 pr-4 md:pt-20 md:pb-[120px] md:px-12 font-sans text-zinc-900 overflow-hidden" id="about">
      <div className="mx-auto max-w-[1400px] h-full flex flex-col justify-start gap-10 md:gap-[10px]">

        {/* Section Header */}
        <div className="mb-0 md:mb-0">
          {/* Subtitle - small sans-serif */}
          <span className="block font-sans text-xs font-normal tracking-[0.15em] text-zinc-600 mb-3 text-center md:text-left">
            - Our Heritage -
          </span>

          {/* Title - clean sans-serif as in Figma */}
          <h2 className="font-serif text-[32px] md:text-[46px] font-light tracking-tight text-zinc-900 mb-4 md:mb-6 leading-tight text-center md:text-left">
            Nature, Design, and Soul
          </h2>

          {/* Horizontal layout: Paragraph on left, buttons on right */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="font-sans text-zinc-600 font-light leading-relaxed text-sm md:text-[14.5px] max-w-md md:max-w-[78%] mx-auto md:mx-0 text-center md:text-left">
              Born from a passion for architecture and deep respect for the Alpine landscape,
              L'Aura is more than a hotel—it's a private retreat where every window frames a
              masterpiece of nature.
            </p>

            {/* Custom filled navigation buttons matching figma colors (Desktop only) */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0 self-start md:self-center">
              <button
                onClick={() => handleScroll("left")}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dcd9d4] text-white hover:bg-zinc-300 transition-all duration-300 focus:outline-none cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-5 w-5 stroke-[2]" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a29482] text-white hover:bg-[#908271] transition-all duration-300 focus:outline-none cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-5 w-5 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Cards - sharp corners (rounded-none) and clean horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex w-full gap-4 md:gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="w-[240px] md:w-[748px] min-w-[240px] md:min-w-[748px] snap-start flex-shrink-0 overflow-hidden"
            >
              {/* Aspect ratio and rounded-none styling to match Figma precision */}
              <div className="relative h-[314px] md:h-[519px] w-full overflow-hidden rounded-none">
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover rounded-none transition-transform duration-[6000ms] ease-out hover:scale-103"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Arrows (Centered below gallery) */}
        <div className="flex md:hidden justify-center items-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dcd9d4] text-[#a29482] hover:bg-zinc-200 transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5 stroke-[2]" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a29482] text-white hover:bg-[#908271] transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-5 w-5 stroke-[2]" />
          </button>
        </div>

      </div>
    </section>
  );
}
