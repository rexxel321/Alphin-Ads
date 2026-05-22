import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

const GALLERY_ITEMS = [
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    alt: "Premium suite bedroom with king-size bed",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    alt: "Cozy chalet bedroom with warm lighting and wooden finishes",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    alt: "Warm close-up of classical stone arches of the Colosseum",
    category: "Wellness",
  },
  {
    src: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?auto=format&fit=crop&w=800&q=80",
    alt: "Beautiful Florence Duomo Cathedral at dawn",
    category: "Wellness",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Beautiful dusk scenery of green Tuscan hills",
    category: "Wellness",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury ocean terrace with sunbeds and culinary setting",
    category: "Culinary",
  },
  {
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    alt: "Amalfi coastal town cliff houses Positano",
    category: "Culinary",
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    alt: "Misty Alpine hills with a luxury lodge at sunrise",
    category: "Wellness",
  }
];

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Photos");

  // Filter gallery items dynamically based on selected pill tab
  const filteredItems = activeCategory === "All Photos"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Find the index of the currently active item within the filtered list
  const filteredActiveIndex = Math.max(
    0,
    filteredItems.findIndex((item) => item.src === GALLERY_ITEMS[activeIdx]?.src)
  );

  const handleNextFiltered = () => {
    if (filteredItems.length === 0) return;
    const nextFilteredIdx = (filteredActiveIndex + 1) % filteredItems.length;
    const mainIdx = GALLERY_ITEMS.findIndex(
      (item) => item.src === filteredItems[nextFilteredIdx].src
    );
    if (mainIdx >= 0) setActiveIdx(mainIdx);
  };

  const handlePrevFiltered = () => {
    if (filteredItems.length === 0) return;
    const prevFilteredIdx = (filteredActiveIndex - 1 + filteredItems.length) % filteredItems.length;
    const mainIdx = GALLERY_ITEMS.findIndex(
      (item) => item.src === filteredItems[prevFilteredIdx].src
    );
    if (mainIdx >= 0) setActiveIdx(mainIdx);
  };

  return (
    <section className="w-full bg-white h-[885px] md:h-auto py-20 px-4 md:px-12 font-sans text-zinc-900 overflow-hidden border-b border-zinc-100" id="gallery">
      <div className="mx-auto max-w-[1400px] h-full flex flex-col justify-between md:block">

        {/* Section Header */}
        <div className="mb-0 md:mb-14 max-w-2xl text-center md:text-left">
          <span className="block font-sans text-xs tracking-[0.15em] text-zinc-500 mb-3">
            - Visual Memories -
          </span>
          <h2 className="font-serif text-[36px] md:text-[46px] font-light tracking-tight text-zinc-900 mb-4 leading-tight">
            A Glimpse of Paradise
          </h2>
          <p className="font-sans text-zinc-600 font-light text-sm md:text-[14.5px] leading-relaxed">
            From golden sunrises on the terrace to cozy evenings by the fireplace.
          </p>
        </div>

        {/* On Mobile: Top Grid (338px high, 3 photos) + Bottom Photo (185px high, 1 photo) with 8px gap */}
        <div className="flex flex-col gap-[8px] h-[531px] w-full max-w-[358px] mx-auto md:hidden">

          {/* Top Block: 3 photos in a 2-column grid */}
          <div className="grid grid-cols-2 gap-[8px] h-[338px] w-full">
            {/* Column 1: Duomo & Tuscan Hills */}
            <div className="flex flex-col gap-[8px] h-full">
              {/* Duomo */}
              <div
                onClick={() => { setActiveIdx(3); setActiveCategory("All Photos"); setIsOpen(true); }}
                className="h-[165px] w-full cursor-pointer overflow-hidden rounded-none bg-zinc-100"
              >
                <ImageWithFallback
                  src={GALLERY_ITEMS[3].src}
                  alt={GALLERY_ITEMS[3].alt}
                  className="h-full w-full object-cover rounded-none transition-transform duration-500 hover:scale-103"
                />
              </div>

              {/* Tuscan Hills */}
              <div
                onClick={() => { setActiveIdx(4); setActiveCategory("All Photos"); setIsOpen(true); }}
                className="h-[165px] w-full cursor-pointer overflow-hidden rounded-none bg-zinc-100"
              >
                <ImageWithFallback
                  src={GALLERY_ITEMS[4].src}
                  alt={GALLERY_ITEMS[4].alt}
                  className="h-full w-full object-cover rounded-none transition-transform duration-500 hover:scale-103"
                />
              </div>
            </div>

            {/* Column 2: Misty Hills */}
            <div
              onClick={() => { setActiveIdx(7); setActiveCategory("All Photos"); setIsOpen(true); }}
              className="h-[338px] w-full cursor-pointer overflow-hidden rounded-none bg-zinc-100"
            >
              <ImageWithFallback
                src={GALLERY_ITEMS[7].src}
                alt={GALLERY_ITEMS[7].alt}
                className="h-full w-full object-cover rounded-none transition-transform duration-500 hover:scale-103"
              />
            </div>
          </div>

          {/* Bottom Block: 1 Wide Terrace photo with "See All Photos" overlay */}
          <div
            onClick={() => { setActiveIdx(5); setActiveCategory("All Photos"); setIsOpen(true); }}
            className="h-[185px] w-full cursor-pointer overflow-hidden rounded-none bg-zinc-100 relative group"
          >
            <ImageWithFallback
              src={GALLERY_ITEMS[5].src}
              alt={GALLERY_ITEMS[5].alt}
              className="h-full w-full object-cover rounded-none transition-transform duration-500 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px] group-hover:bg-black/30 transition-all duration-300" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-2 pointer-events-none">
              <ImageIcon className="h-5 w-5 stroke-[1.8] text-white/90 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-sans text-[12px] font-medium tracking-[0.2em] uppercase text-white">
                See All Photos
              </span>
            </div>
          </div>

        </div>

        {/* On Desktop: 3-Column Premium Grid Layout with custom row spans */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[250px] w-full">

          {/* Box 1: Duomo (Top-Left) */}
          <div
            onClick={() => { setActiveIdx(3); setActiveCategory("All Photos"); setIsOpen(true); }}
            className="col-start-1 row-start-1 col-span-1 row-span-1 cursor-pointer overflow-hidden rounded-none bg-zinc-100"
          >
            <ImageWithFallback
              src={GALLERY_ITEMS[3].src}
              alt={GALLERY_ITEMS[3].alt}
              className="h-full w-full object-cover rounded-none transition-transform duration-500 hover:scale-103"
            />
          </div>

          {/* Box 4: Amalfi Town (Middle-Left) */}
          <div
            onClick={() => { setActiveIdx(6); setActiveCategory("All Photos"); setIsOpen(true); }}
            className="col-start-1 row-start-2 col-span-1 row-span-1 cursor-pointer overflow-hidden rounded-none bg-zinc-100"
          >
            <ImageWithFallback
              src={GALLERY_ITEMS[6].src}
              alt={GALLERY_ITEMS[6].alt}
              className="h-full w-full object-cover rounded-none transition-transform duration-500 hover:scale-103"
            />
          </div>

          {/* Box 6: Wide Terrace (Bottom Left/Middle) */}
          <div
            onClick={() => { setActiveIdx(5); setActiveCategory("All Photos"); setIsOpen(true); }}
            className="col-start-1 row-start-3 col-span-2 row-span-1 cursor-pointer overflow-hidden rounded-none bg-zinc-100"
          >
            <ImageWithFallback
              src={GALLERY_ITEMS[5].src}
              alt={GALLERY_ITEMS[5].alt}
              className="h-full w-full object-cover rounded-none transition-transform duration-500 hover:scale-103"
            />
          </div>

          {/* Box 2: Misty Hills (Middle Column Tall) */}
          <div
            onClick={() => { setActiveIdx(7); setActiveCategory("All Photos"); setIsOpen(true); }}
            className="col-start-2 row-start-1 col-span-1 row-span-2 cursor-pointer overflow-hidden rounded-none bg-zinc-100"
          >
            <ImageWithFallback
              src={GALLERY_ITEMS[7].src}
              alt={GALLERY_ITEMS[7].alt}
              className="h-full w-full object-cover rounded-none transition-transform duration-500 hover:scale-103"
            />
          </div>

          {/* Box 3: Colosseum (Top-Right) */}
          <div
            onClick={() => { setActiveIdx(2); setActiveCategory("All Photos"); setIsOpen(true); }}
            className="col-start-3 row-start-1 col-span-1 row-span-1 cursor-pointer overflow-hidden rounded-none bg-zinc-100"
          >
            <ImageWithFallback
              src={GALLERY_ITEMS[2].src}
              alt={GALLERY_ITEMS[2].alt}
              className="h-full w-full object-cover rounded-none transition-transform duration-500 hover:scale-103"
            />
          </div>

          {/* Box 5: See All Photos Card (Right Column Tall) */}
          <div
            onClick={() => { setActiveIdx(4); setActiveCategory("All Photos"); setIsOpen(true); }}
            className="col-start-3 row-start-2 col-span-1 row-span-2 cursor-pointer overflow-hidden rounded-none bg-zinc-100 relative group"
          >
            <ImageWithFallback
              src={GALLERY_ITEMS[4].src}
              alt={GALLERY_ITEMS[4].alt}
              className="h-full w-full object-cover rounded-none transition-transform duration-500 group-hover:scale-103"
            />
            {/* Soft dark shaded overlay */}
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px] group-hover:bg-black/35 transition-all duration-300 flex flex-col items-center justify-center text-white" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-3 pointer-events-none">
              <ImageIcon className="h-6 w-6 stroke-[1.8] text-white/90 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-sans text-sm font-medium tracking-[0.25em] uppercase text-white">
                See All Photos
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Immersive Dark Solid Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="fixed inset-0 w-full h-full max-w-none max-h-none sm:max-w-none sm:max-h-none top-0 left-0 sm:top-0 sm:left-0 translate-x-0 translate-y-0 sm:translate-x-0 sm:translate-y-0 border-none sm:border-none rounded-none sm:rounded-none bg-[#474747] flex flex-col justify-start items-center text-white overflow-hidden p-0 sm:p-0 [&>button]:hidden z-50">

          {/* Absolute Close Button at top-right wrapped in a div to bypass [&>button]:hidden */}
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={() => setIsOpen(false)}
              className="h-10 w-10 text-white/80 hover:text-white hover:scale-105 flex items-center justify-center cursor-pointer transition-all"
              aria-label="Close Gallery"
            >
              <X className="h-6 w-6 stroke-[1.8]" />
            </button>
          </div>

          {/* Central Content Area: Category Pills, Active Image, Thumbnails & Navigation stacked tightly */}
          <div className="flex-1 w-full flex flex-col items-center justify-start md:justify-center px-4 md:px-16 min-h-0 bg-transparent pt-16 pb-10 z-10">
            
            {/* Unified Inner Container to align everything perfectly */}
            <div className="w-full max-w-[358px] md:max-w-5xl flex flex-col items-center gap-2 md:gap-3 mt-0">
              
              {/* Category Pills Row - Aligned perfectly with the active image on mobile, centered on desktop */}
              <div className="w-full flex items-center gap-3 overflow-x-auto md:justify-center scrollbar-none py-1 mb-1">
                {["All Photos", "Rooms", "Wellness", "Culinary"].map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        // Switch image view to the first photo in the new category
                        const newFiltered = cat === "All Photos"
                          ? GALLERY_ITEMS
                          : GALLERY_ITEMS.filter((item) => item.category === cat);
                        if (newFiltered.length > 0) {
                          const firstItem = newFiltered[0];
                          const mainIdx = GALLERY_ITEMS.findIndex((item) => item.src === firstItem.src);
                          setActiveIdx(mainIdx >= 0 ? mainIdx : 0);
                        }
                      }}
                      className={`px-5 py-2 rounded-lg font-sans text-xs tracking-wider transition-all duration-300 border cursor-pointer select-none shrink-0 ${
                        isActive
                          ? "bg-white text-zinc-900 border-white shadow-md font-medium"
                          : "bg-transparent text-white border-white/20 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Active Image Box */}
              <div className="relative w-full aspect-[4/5] md:aspect-auto md:max-h-[58vh] flex flex-col items-center justify-center py-0 overflow-hidden">
                <img
                  src={GALLERY_ITEMS[activeIdx]?.src}
                  alt={GALLERY_ITEMS[activeIdx]?.alt}
                  className="w-full h-full md:w-auto md:h-auto md:max-h-[58vh] md:max-w-full object-cover md:object-contain rounded-none transition-all duration-500"
                />
              </div>

              {/* Thumbnails Row */}
              <div className="w-full flex justify-center items-center gap-2 overflow-x-auto py-0 scrollbar-none">
                {filteredItems.map((item) => {
                  const mainIdx = GALLERY_ITEMS.findIndex((gi) => gi.src === item.src);
                  const isActive = mainIdx === activeIdx;
                  return (
                    <div
                      key={item.src}
                      onClick={() => setActiveIdx(mainIdx)}
                      className={`h-[56px] w-[calc((100%-24px)/4)] md:h-[60px] md:w-[100px] shrink-0 cursor-pointer overflow-hidden relative transition-all duration-300 border rounded-none ${
                        isActive
                          ? "border-white opacity-100 scale-102 shadow-lg"
                          : "border-transparent opacity-40 hover:opacity-85"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover rounded-none"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Arrow Buttons & Counter (matches Figma exactly) */}
              <div className="flex items-center gap-6 select-none mt-2 md:mt-1">
                {/* Prev Arrow Button (Grey translucent) */}
                <button
                  onClick={handlePrevFiltered}
                  className="h-11 w-11 bg-white/15 hover:bg-white/20 active:bg-white/25 text-white rounded-lg flex items-center justify-center cursor-pointer transition-colors border border-white/5 shadow-sm"
                  aria-label="Previous Photo"
                >
                  <ArrowLeft className="h-5 w-5 stroke-[1.8]" />
                </button>

                {/* Counter Text */}
                <span className="text-[13px] font-sans font-medium tracking-[0.25em] text-white/95 min-w-[50px] text-center">
                  {filteredActiveIndex + 1} / {filteredItems.length}
                </span>

                {/* Next Arrow Button (Solid white) */}
                <button
                  onClick={handleNextFiltered}
                  className="h-11 w-11 bg-white hover:bg-zinc-200 active:bg-zinc-300 text-zinc-950 rounded-lg flex items-center justify-center cursor-pointer transition-colors shadow-md"
                  aria-label="Next Photo"
                >
                  <ArrowRight className="h-5 w-5 stroke-[1.8]" />
                </button>
              </div>

            </div>
          </div>

        </DialogContent>
      </Dialog>
    </section>
  );
}
