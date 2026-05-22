import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import {
  Users,
  MoveHorizontal,
  Bed,
  Waves,
  ChevronLeft,
  ChevronRight,
  Tag,
  Check,
  Bath,
  Martini,
  Wifi,
  Sunset,
  Coffee,
  ShieldCheck,
} from "lucide-react";

type Room = {
  name: string;
  price: string;
  img: string;
  desc: string;
  size: string;
  beds: string;
  capacity: string;
  view: string;
  long: string;
  features: string[];
  gallery: string[];
  amenities: string[];
  services: string[];
};

const ROOMS_DATA: Room[] = [
  {
    name: "Larch Junior Suite",
    price: "€280",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    desc: "Panoramic views with a private balcony and natural pine interiors.",
    size: "45 m²",
    beds: "King Size Bed",
    capacity: "2 Guests",
    view: "Mountain Panorama",
    long: "Our Larch Junior Suite blends minimalist Alpine design with natural timber. Featuring panoramic mountain views from a private balcony, high-quality pine interiors, a cozy writing desk, and custom organic linen.",
    features: ["Private balcony", "Pine wood interiors", "Espresso bar", "Rain shower"],
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Private Balcony", "Wifi", "Rain Shower"],
    services: [
      "Complimentary organic herbal tea selection upon arrival.",
      "Daily cleaning and evening turndown service.",
      "Free shuttle service to the local ski lifts and hiking trails."
    ]
  },
  {
    name: "Summit Royal Suite",
    price: "€450",
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    desc: "Luxurious top-floor suite featuring an open fireplace and a freestanding bathtub.",
    size: "75 m²",
    beds: "King Size Luxury Bed",
    capacity: "2 - 4 Guests",
    view: "Summit & Valley View",
    long: "Experience the pinnacle of Alpine luxury. Located on the highest floor of Hotel L'Aura, the Summit Royal Suite offers an expansive living area with a private open fireplace and a freestanding designer bathtub with direct views of the Dolomites. The suite is furnished with hand-carved stone and local Swiss pine wood, known for its calming properties.",
    features: ["Open fireplace", "Freestanding bathtub", "Butler service", "Separate lounge"],
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Bathtub", "Wifi", "Mini Bar"],
    services: [
      "Complimentary bottle of South Tyrolean sparkling wine upon arrival.",
      "Reserved parking space in our underground garage.",
      "Daily \"Gourmet Breakfast\" served in the suite upon request."
    ]
  },
  {
    name: "Family Alpine Lodge",
    price: "€380",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80",
    desc: "Two separate bedrooms and a spacious living area, perfect for mountain families.",
    size: "65 m²",
    beds: "2 Double Beds",
    capacity: "4 Guests",
    view: "Pool & Alps View",
    long: "Perfect for mountain families, the Family Alpine Lodge offers two private bedrooms, a generous living area with games, high-speed Wi-Fi, easy access to our infinity pool, and customized children's amenities.",
    features: ["Two bedrooms", "Direct pool access", "Games corner", "Nespresso bar"],
    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Direct Pool Access", "Wifi", "Nespresso Bar"],
    services: [
      "Welcome basket with local Alpine sweet treats for the family.",
      "Complimentary kids club access and child care services.",
      "Direct heated locker space for ski and hiking gear."
    ]
  }
];

export function Rooms() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = clientWidth * 0.5;
      const targetScroll = direction === "left" ? scrollLeft - offset : scrollLeft + offset;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="rooms" className="bg-[#FAF9F6] h-[990px] md:h-auto py-20 px-4 md:px-12 font-sans text-zinc-900 overflow-hidden border-b border-zinc-100">
      <div className="mx-auto max-w-[1400px] h-full flex flex-col justify-between md:block">
        
        {/* Section Header */}
        <div className="mb-0 md:mb-14 text-center">
          <span className="block font-sans text-xs tracking-[0.15em] text-zinc-500 mb-3">
            - Your Private Sanctuary -
          </span>
          <h2 className="font-serif text-[36px] md:text-[46px] font-light tracking-tight text-zinc-900 mb-4 leading-tight">
            Designed for Deep Rest
          </h2>
          <p className="font-sans text-zinc-600 font-light text-sm md:text-[14.5px] max-w-2xl mx-auto leading-relaxed">
            Explore our selection of light-flooded suites, each featuring a private panoramic terrace and the soothing scent of natural pine wood.
          </p>
        </div>

        {/* Room Cards Grid (Scrollable on mobile/tablet) */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ROOMS_DATA.map((room) => (
            <div 
              key={room.name} 
              className="w-[310px] md:w-auto min-w-[310px] md:min-w-0 h-[530px] md:h-auto snap-start flex-shrink-0 bg-white rounded-2xl overflow-hidden border border-zinc-200/50 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              {/* Image & Price Pill */}
              <div className="relative h-[250px] md:h-auto md:aspect-[3/2] w-full overflow-hidden bg-zinc-100">
                <ImageWithFallback 
                  src={room.img} 
                  alt={room.name} 
                  className="h-full w-full object-cover transition-transform duration-[5000ms] hover:scale-103" 
                />
                <div className="absolute right-0 top-0 bg-white px-5 py-2.5 font-sans text-xs font-semibold text-zinc-950 tracking-wider">
                  {room.price} / night
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-sans text-xl font-normal tracking-tight text-zinc-900">{room.name}</h3>
                  <p className="font-sans text-zinc-500 font-light text-[13px] leading-relaxed line-clamp-2 md:line-clamp-none">{room.desc}</p>
                </div>

                {/* Stats Row */}
                <div className="flex items-center gap-6 text-zinc-700 text-xs font-medium pt-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 stroke-[1.8] text-zinc-500" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MoveHorizontal className="h-4 w-4 stroke-[1.8] text-zinc-500" />
                    <span>{room.size}</span>
                  </div>
                </div>

                {/* Full Width Button Triggering Dialog */}
                <div className="pt-2">
                  <RoomDialog room={room} />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Centered Navigation Control Circles */}
        <div className="mt-0 flex items-center justify-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dcd9d4] text-[#a29482] hover:bg-zinc-200 transition-all duration-300 focus:outline-none cursor-pointer shadow-sm"
            aria-label="Previous Suite"
          >
            <ChevronLeft className="h-5 w-5 stroke-[2]" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a29482] text-white hover:bg-[#908271] transition-all duration-300 focus:outline-none cursor-pointer shadow-sm"
            aria-label="Next Suite"
          >
            <ChevronRight className="h-5 w-5 stroke-[2]" />
          </button>
        </div>

      </div>
    </section>
  );
}

function getAmenityIcon(name: string) {
  switch (name.toLowerCase()) {
    case "bathtub":
    case "bath":
      return <Bath className="h-4 w-4 text-[#a29482] stroke-[1.8]" />;
    case "wifi":
      return <Wifi className="h-4 w-4 text-[#a29482] stroke-[1.8]" />;
    case "mini bar":
    case "minibar":
      return <Martini className="h-4 w-4 text-[#a29482] stroke-[1.8]" />;
    case "balcony":
    case "private balcony":
      return <Sunset className="h-4 w-4 text-[#a29482] stroke-[1.8]" />;
    case "espresso bar":
    case "coffee":
    case "nespresso bar":
      return <Coffee className="h-4 w-4 text-[#a29482] stroke-[1.8]" />;
    case "direct pool access":
    case "pool access":
    case "pool":
      return <Waves className="h-4 w-4 text-[#a29482] stroke-[1.8]" />;
    default:
      return <ShieldCheck className="h-4 w-4 text-[#a29482] stroke-[1.8]" />;
  }
}

function RoomDialog({ room }: { room: Room }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? room.gallery.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === room.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full border border-zinc-200 bg-white text-zinc-800 text-[11px] font-medium tracking-[0.2em] py-3.5 px-4 text-center uppercase hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300 rounded-xl cursor-pointer">
          SEE DETAILS
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] w-full sm:max-w-[90vw] md:max-w-5xl rounded-[28px] border-none bg-white px-6 pb-6 pt-3 md:p-10 gap-0 overflow-y-auto select-none [&>button]:hidden shadow-2xl">
        {/* Bottom Sheet Drag Handle for Mobile */}
        <div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mb-2.5 shrink-0 md:hidden" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* Left Column: Image Slider */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[320px] md:min-h-[500px] w-full rounded-2xl overflow-hidden bg-zinc-50 shadow-sm flex flex-col">
            <ImageWithFallback
              src={room.gallery[currentImageIndex]}
              alt={`${room.name} gallery image ${currentImageIndex + 1}`}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
            />
            
            {/* Overlay Navigation Chevrons */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-9 w-9 bg-black/35 hover:bg-black/55 text-white flex items-center justify-center rounded-md transition-colors duration-250 active:scale-95 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.2]" />
            </button>
            
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-9 w-9 bg-black/35 hover:bg-black/55 text-white flex items-center justify-center rounded-md transition-colors duration-250 active:scale-95 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.2]" />
            </button>

            {/* Bottom Centered Dash Indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {room.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`h-[3px] w-6 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentImageIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Room Details & Actions */}
          <div className="flex flex-col justify-between h-full space-y-6 md:space-y-8">
            
            <div>
              {/* Title & Divider */}
              <h3 className="font-sans text-[22px] md:text-2xl font-light text-zinc-900 tracking-tight leading-snug">
                {room.name}
              </h3>
              <div className="w-full h-[1px] bg-zinc-200/50 mt-4 mb-4" />

              {/* Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col md:grid-rows-2 gap-y-3.5 gap-x-6 text-[13.5px] font-sans font-light text-zinc-700">
                <div className="flex items-center gap-3">
                  <MoveHorizontal className="h-4 w-4 stroke-[1.5] text-zinc-500 shrink-0" />
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 stroke-[1.5] text-zinc-500 shrink-0" />
                  <span>{room.capacity}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bed className="h-4 w-4 stroke-[1.5] text-zinc-500 shrink-0" />
                  <span>{room.beds}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Tag className="h-4 w-4 stroke-[1.5] text-zinc-500 shrink-0" />
                  <span className="font-medium text-zinc-800">{room.price} / night</span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-zinc-200/50 mt-4 mb-5" />

              {/* Description */}
              <p className="font-sans text-[13px] text-zinc-500 font-light leading-relaxed mb-5">
                {room.long}
              </p>

              {/* Amenities Section */}
              <div className="mb-5">
                <div className="text-[13px] text-zinc-800 font-medium mb-2.5">
                  Amenities:
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-x-8 gap-y-3">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-[13px] text-zinc-600 font-light">
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included Services Section */}
              <div className="mb-6">
                <div className="text-[13px] text-zinc-800 font-medium mb-2.5">
                  Included services:
                </div>
                <ul className="space-y-2.5">
                  {room.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3 text-[13px] text-zinc-500 font-light leading-relaxed">
                      <div className="flex-shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#a29482] text-white">
                        <Check className="h-2.5 w-2.5 stroke-[3.5]" />
                      </div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-100/80">
              <DialogClose asChild>
                <button className="flex-1 border border-zinc-200 hover:bg-zinc-50 hover:text-zinc-700 text-zinc-500 text-[11px] font-semibold tracking-[0.2em] py-3.5 rounded-xl uppercase transition-all duration-300 text-center cursor-pointer">
                  CLOSE
                </button>
              </DialogClose>
              
              <DialogClose asChild>
                <button
                  className="flex-1 bg-[#a29482] hover:bg-[#908271] text-white text-[11px] font-semibold tracking-[0.2em] py-3.5 rounded-xl uppercase transition-all duration-350 text-center cursor-pointer shadow-sm"
                  onClick={() => {
                    setTimeout(() => {
                      const reserveEl = document.getElementById("reserve");
                      if (reserveEl) {
                        reserveEl.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 200);
                  }}
                >
                  RESERVE THIS SUITE
                </button>
              </DialogClose>
            </div>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
