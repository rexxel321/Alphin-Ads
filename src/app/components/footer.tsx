import { Instagram, Youtube, Facebook, Phone, Printer, Copy, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const LINKS = [
  { label: "Home", href: "#" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
];

const LEGALS = [
  { label: "Imprint", href: "#" },
  { label: "Data Protection", href: "#" },
  { label: "Privacy Settings", href: "#" },
  { label: "Sitemap", href: "#" },
];

const SOCIALS = [
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: MessageCircle, href: "#", label: "WhatsApp" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
];

export function Footer() {
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${label} to clipboard!`);
  };

  return (
    <footer
      id="contact"
      className="w-full bg-[#222222] text-white font-montserrat overflow-hidden"
    >
      {/* Main responsive container */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 pt-16 pb-12 flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-8">

        {/* Logo & Address - Centered on mobile, Left-aligned on desktop */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 md:w-1/4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            {/* Premium exact Logoipsum SVG */}
            <svg
              viewBox="0 0 31.25 32.2"
              className="h-10 w-[38.8px] text-white shrink-0"
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
            <span className="font-montserrat text-[22px] font-bold tracking-[0.05em] text-white">
              Logoipsum
            </span>
          </div>

          {/* Address */}
          <p className="text-zinc-400 text-[14px] leading-relaxed font-light mt-1">
            San Valentino,<br />
            South Tyrol, Italy.
          </p>
        </div>

        {/* Links & Legal Columns - Side by side on mobile and desktop */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-w-sm mx-auto w-full md:mx-0 md:w-auto md:flex md:gap-x-20">
          {/* Links Column */}
          <div>
            <h3 className="text-white font-semibold text-[15px] mb-4 font-montserrat">
              Links
            </h3>
            <ul className="space-y-3.5">
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-zinc-400 text-[14px] font-light hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold text-[15px] mb-4 font-montserrat">
              Legal
            </h3>
            <ul className="space-y-3.5">
              {LEGALS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-zinc-400 text-[14px] font-light hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-sm mx-auto w-full md:mx-0 md:w-[320px] flex flex-col gap-4">
          <h3 className="text-white font-semibold text-[15px] mb-1 font-montserrat">
            Contact
          </h3>

          {/* Phone Card */}
          <div
            onClick={() => handleCopy("+43 123456789", "phone number")}
            className="group flex items-center justify-between border border-zinc-800 bg-[#2b2b2b]/50 hover:border-zinc-700 active:bg-[#2b2b2b] rounded-xl px-4 py-3.5 cursor-pointer transition-all duration-200 select-none"
          >
            <div className="flex items-center gap-3">
              <Phone className="h-4.5 w-4.5 text-zinc-400 group-hover:text-zinc-300" />
              <span className="text-zinc-300 text-[14px] font-light group-hover:text-zinc-200">
                +43 123456789
              </span>
            </div>
            <Copy className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
          </div>

          {/* Email Card */}
          <div
            onClick={() => handleCopy("info@hotel.com", "email address")}
            className="group flex items-center justify-between border border-zinc-800 bg-[#2b2b2b]/50 hover:border-zinc-700 active:bg-[#2b2b2b] rounded-xl px-4 py-3.5 cursor-pointer transition-all duration-200 select-none"
          >
            <div className="flex items-center gap-3">
              <Printer className="h-4.5 w-4.5 text-zinc-400 group-hover:text-zinc-300" />
              <span className="text-zinc-300 text-[14px] font-light group-hover:text-zinc-200">
                info@hotel.com
              </span>
            </div>
            <Copy className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-3 mt-2">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-11 w-11 flex items-center justify-center bg-zinc-800/80 border border-zinc-700/50 hover:border-zinc-500 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-xl transition-all duration-200"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Thin bottom separator */}
      <div className="border-t border-zinc-800/60 w-full" />

      {/* Bottom bar container */}
      <div className="mx-auto max-w-[1360px] px-6 md:px-0 py-8 md:py-0 md:my-8 md:h-[24px] flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">
        {/* Copyright line */}
        <p className="text-zinc-500 text-[13px] font-light">
          © 2026 Hotel Ipsum
        </p>

        {/* Design and Code attribution line */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1.5 md:gap-3 font-montserrat">
          <span className="text-zinc-500 text-[12px] font-light md:translate-y-[1px]">
            Design and Code by
          </span>
          <div className="flex items-center gap-2.5">
            {/* White rounded square logo block */}
            <div className="flex items-center justify-center bg-white h-[27px] w-[27px] rounded-lg shadow-sm shrink-0">
              <svg viewBox="0 0 20 14" fill="none" className="h-[14px] w-[16px] text-black">
                <path d="M10 0L20 14H0L10 0Z" fill="black" />
                <path d="M10 4L16 14H4L10 4Z" fill="white" />
              </svg>
            </div>
            <span
              className="font-montserrat italic text-white"
              style={{
                fontSize: "21.93px",
                fontWeight: 800,
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              ALPIN ADS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
