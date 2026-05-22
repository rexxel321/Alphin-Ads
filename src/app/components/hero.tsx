import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, Users, Calendar as CalendarIcon } from "lucide-react";
import { DateRangeField, GuestsField, type Guests } from "./booking-fields";
import type { DateRange } from "react-day-picker";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80",
    alt: "Beautiful Alpine mountain lake reflecting peaks",
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80",
    alt: "Stunning mountain peaks covered in snow at sunset",
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=80",
    alt: "Lush green Alpine meadows in early morning mist",
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState<Guests>({ adults: 0, children: 0 });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Optional: Auto-rotation for premium feel
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[844px] md:h-[95vh] md:min-h-[680px] w-full overflow-hidden bg-zinc-950 font-sans">
      {/* Background Image Carousel with absolute transition */}
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-75" : "opacity-0 pointer-events-none"
            }`}
        >
          <ImageWithFallback
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover object-center scale-105 transform transition-transform duration-[7000ms] ease-out"
            style={{
              transform: idx === currentSlide ? "scale(1.0)" : "scale(1.05)",
            }}
          />
        </div>
      ))}

      {/* Earthy Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85" />

      {/* Navigation Arrows at Left and Right Edges (Desktop) */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-20 -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-200 focus:outline-none hidden md:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-8 w-8 stroke-[1.5]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-20 -translate-y-1/2 text-white/50 hover:text-white transition-colors duration-200 focus:outline-none hidden md:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-8 w-8 stroke-[1.5]" />
      </button>

      {/* Mobile Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-black/25 text-white/70 hover:text-white transition-all duration-200 focus:outline-none md:hidden cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-4.5 w-4.5 stroke-[2]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-black/25 text-white/70 hover:text-white transition-all duration-200 focus:outline-none md:hidden cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-4.5 w-4.5 stroke-[2]" />
      </button>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pt-8 pb-3 md:pt-8 md:pb-3 text-white">

        {/* Semi-transparent Glassmorphic Header */}
        <nav className="flex items-center justify-between pb-4 pt-2">
          {/* Premium exact Logoipsum SVG */}
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 31.25 32.2"
              className="h-7 w-[27.2px] text-white shrink-0"
              fill="currentColor"
            >
              {/* Vector 1 (Bottom Right Outer) */}
              <path d="M 31.25 26.38 L 25.44 26.38 Q 24.44 26.38 23.73 25.67 L 19.33 21.27 Q 18.62 20.56 19.62 20.56 L 24.43 20.56 Q 25.43 20.56 26.14 21.27 Z" />
              {/* Vector 2 (Top Right Outer) */}
              <path d="M 31.25 13.02 L 25.46 13.02 Q 24.46 13.02 23.75 13.73 L 19.35 18.13 Q 18.64 18.84 19.64 18.84 L 24.43 18.84 Q 25.43 18.84 26.14 18.13 Z" />
              {/* Vector 3 (Bottom Right Inner) */}
              <path d="M 23.54 32.20 L 23.54 29.27 Q 23.54 28.27 22.83 27.56 L 17.19 21.92 Q 16.48 21.21 16.48 22.21 L 16.48 24.14 Q 16.48 25.14 17.19 25.85 Z" />
              {/* Vector 4 (Top Right Inner) */}
              <path d="M 23.54 7.20 L 23.54 10.13 Q 23.54 11.13 22.83 11.84 L 17.19 17.48 Q 16.48 18.19 16.48 17.19 L 16.48 15.26 Q 16.48 14.26 17.19 13.55 Z" />
              {/* Vector 5 (Bottom Left Outer) */}
              <path d="M 0.00 26.38 L 5.81 26.38 Q 6.81 26.38 7.52 25.67 L 11.92 21.27 Q 12.63 20.56 11.63 20.56 L 6.82 20.56 Q 5.82 20.56 5.11 21.27 Z" />
              {/* Vector 6 (Top Left Outer) */}
              <path d="M 0.00 13.02 L 5.79 13.02 Q 6.79 13.02 7.50 13.73 L 11.90 18.13 Q 12.61 18.84 11.61 18.84 L 6.82 18.84 Q 5.82 18.84 5.11 18.13 Z" />
              {/* Vector 7 (Bottom Left Inner) */}
              <path d="M 7.70 32.20 L 7.70 29.27 Q 7.70 28.27 8.41 27.56 L 14.05 21.92 Q 14.76 21.21 14.76 22.21 L 14.76 24.14 Q 14.76 25.14 14.05 25.85 Z" />
              {/* Vector 8 (Top Left Inner) */}
              <path d="M 7.70 7.20 L 7.70 10.13 Q 7.70 11.13 8.41 11.84 L 14.05 17.48 Q 14.76 18.19 14.76 17.19 L 14.76 15.26 Q 14.76 14.26 14.05 13.55 Z" />
            </svg>
            <span className="text-lg font-medium tracking-[0.1em] font-sans">Logoipsum</span>
          </div>

          {/* Centered navigation links */}
          <div className="hidden gap-12 md:flex text-xs font-semibold tracking-[0.25em] text-white/90">
            <a href="#rooms" className="hover:text-white hover:opacity-100 opacity-80 transition-all duration-200 relative group py-2">
              ROOMS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#amenities" className="hover:text-white hover:opacity-100 opacity-80 transition-all duration-200 relative group py-2">
              AMENITIES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#reserve" className="hover:text-white hover:opacity-100 opacity-80 transition-all duration-200 relative group py-2">
              RESERVE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Right action button */}
          <div>
            <a
              href="#reserve"
              className="rounded border border-white/30 bg-black/25 px-4 py-1.5 md:px-6 md:py-2 text-[11px] md:text-xs font-semibold tracking-[0.2em] text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              BOOK NOW
            </a>
          </div>
        </nav>

        {/* Bottom portion containing Headline and floating bar */}
        <div className="mb-0 md:mb-0 mt-auto flex flex-col items-center w-full">

          {/* Serif elegant Headline */}
          <h1
            className="mb-3 md:mb-4 text-center text-[19px] min-[375px]:text-[20px] md:text-[36px] font-normal leading-[1.2] tracking-normal text-white px-2 font-sans md:max-w-[986px] md:w-[986px] md:h-[43px] md:whitespace-nowrap flex items-center justify-center"
          >
            The Silence of the Alps, Redefined.
          </h1>

          {/* Desktop Booking Panel */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:flex w-full md:w-[885px] md:max-w-[885px] md:h-[72px] gap-[12px] items-stretch p-0"
          >
            {/* Left Box: Guests & Dates grouped with divider */}
            <div className="flex-grow flex items-stretch bg-black/40 border border-white/10 rounded-xl divide-x divide-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Guests Dropdown */}
              <div className="relative flex-1 flex items-center h-full">
                <GuestsField value={guests} onChange={setGuests} variant="glass" />
              </div>

              {/* Date Selector */}
              <div className="relative flex-1 flex items-center h-full">
                <DateRangeField dateRange={dateRange} onChange={setDateRange} variant="glass" />
              </div>
            </div>

            {/* Right Box: Taupe Request Button */}
            <button
              type="submit"
              className="w-[180px] bg-[#a29482] text-white text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#908271] active:bg-[#7d7262] transition-all duration-300 h-full rounded-xl flex items-center justify-center cursor-pointer shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              REQUEST
            </button>
          </form>

          {/* Mobile Booking Panel */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex md:hidden flex-col w-full max-w-[340px] bg-[#2a2524]/95 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {/* Guests Field */}
            <div className="relative w-full">
              <GuestsField value={guests} onChange={setGuests} variant="mobile-dark" />
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-white/10 w-full" />

            {/* Date Field */}
            <div className="relative w-full">
              <DateRangeField dateRange={dateRange} onChange={setDateRange} variant="mobile-dark" />
            </div>

            {/* Request Button - Fits flush at the bottom of the card */}
            <button
              type="submit"
              className="w-full bg-[#a29482] hover:bg-[#908271] active:bg-[#7d7262] text-white text-xs font-semibold tracking-[0.25em] uppercase py-5 rounded-b-2xl rounded-t-none transition-all duration-300 cursor-pointer"
            >
              REQUEST
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
