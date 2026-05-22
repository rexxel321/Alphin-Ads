import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner";
import {
  User,
  Mail,
  Phone,
  BedDouble,
  CalendarRange,
  Users,
  ChevronDown,
} from "lucide-react";

const ROOM_OPTIONS = [
  { value: "", label: "Select Room" },
  { value: "larch", label: "Larch Junior Suite" },
  { value: "summit", label: "Summit Royal Suite" },
  { value: "family", label: "Family Alpine Lodge" },
];

const EXTRAS = [
  "Airport Transfer",
  "Spa package",
  "Private dinning",
  "Yacht excursion",
];

function FormInput({
  icon,
  placeholder,
  type = "text",
  required = false,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="relative flex items-center border border-zinc-200 bg-white rounded-xl focus-within:border-zinc-400 transition-colors duration-200">
      <span className="pointer-events-none absolute left-3.5 text-zinc-400">
        {icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent py-3.5 pl-10 pr-4 text-[13px] text-zinc-800 placeholder:text-zinc-400 focus:outline-none rounded-xl"
      />
    </div>
  );
}

export function Reserve() {
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleExtra = (extra: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsSubmitting(false);
    toast.success(
      "Request received — our concierge will be in touch within 24 hours."
    );
  };

  return (
    <section
      id="reserve"
      className="relative w-full font-sans overflow-hidden min-h-[1062px] md:min-h-0"
    >
      {/* Background: dark alpine mountain */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt="Mountain backdrop for reservation form"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Centered white form card */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-20 px-4 md:px-12">

        {/* Section label */}
        <p className="mb-3 font-sans text-xs tracking-[0.2em] text-white/70 uppercase">
          - Plan Your Stay -
        </p>

        {/* Heading */}
        <h2
          className="mb-3 font-serif font-light text-white tracking-tight leading-tight text-center text-3xl sm:text-4xl lg:text-5xl"
        >
          Request a Personal Quote
        </h2>

        {/* Subtext */}
        <p className="mb-10 w-full max-w-[358px] md:max-w-[1360px] md:w-[1360px] md:h-[24px] font-sans text-white/75 font-normal text-[16px] leading-[1.5] tracking-normal text-center opacity-100 rotate-0">
          Fill out the form below, and our team will get back to you within 24
          hours with a non-binding offer tailored to your needs.
        </p>

        {/* White card */}
        <div className="w-full max-w-[358px] md:max-w-[880px] md:w-[880px] md:h-[927px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] p-[20px] rounded-[8px] opacity-100 rotate-0">
          <form onSubmit={onSubmit} className="space-y-[32px]">

            {/* Your Details */}
            <div>
              <p className="mb-3 font-sans text-[14px] font-medium text-zinc-700">
                Your Details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <FormInput
                  icon={<User className="h-4 w-4" />}
                  placeholder="First Name"
                  required
                />
                <FormInput
                  icon={<User className="h-4 w-4" />}
                  placeholder="Last Name"
                  required
                />
                <FormInput
                  icon={<Mail className="h-4 w-4" />}
                  placeholder="Email Address"
                  type="email"
                  required
                />
                <FormInput
                  icon={<Phone className="h-4 w-4" />}
                  placeholder="Phone Number"
                  type="tel"
                />
              </div>
            </div>

            {/* Stay */}
            <div>
              <p className="mb-3 font-sans text-[14px] font-medium text-zinc-700">
                Stay
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                {/* Arrive & Departure */}
                <div className="relative flex items-center border border-zinc-200 bg-white rounded-xl focus-within:border-zinc-400 transition-colors duration-200">
                  <span className="pointer-events-none absolute left-3.5 text-zinc-400">
                    <CalendarRange className="h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Arrival & Departure"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    className="w-full bg-transparent py-3.5 pl-10 pr-4 text-[13px] text-zinc-800 placeholder:text-zinc-400 focus:outline-none rounded-xl"
                  />
                </div>
                {/* Guests */}
                <div className="relative flex items-center border border-zinc-200 bg-white rounded-xl focus-within:border-zinc-400 transition-colors duration-200">
                  <span className="pointer-events-none absolute left-3.5 text-zinc-400">
                    <Users className="h-4 w-4" />
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    placeholder="Guests"
                    className="w-full bg-transparent py-3.5 pl-10 pr-4 text-[13px] text-zinc-800 placeholder:text-zinc-400 focus:outline-none rounded-xl"
                  />
                </div>
              </div>

              {/* Room select */}
              <div className="relative flex items-center border border-zinc-200 bg-white rounded-xl focus-within:border-zinc-400 transition-colors duration-200">
                <span className="pointer-events-none absolute left-3.5 text-zinc-400">
                  <BedDouble className="h-4 w-4" />
                </span>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full appearance-none bg-transparent py-3.5 pl-10 pr-10 text-[13px] text-zinc-500 focus:outline-none cursor-pointer rounded-xl"
                >
                  {ROOM_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 h-4 w-4 text-zinc-400" />
              </div>
            </div>

            {/* Optional add-ons */}
            <div>
              <p className="mb-3 font-sans text-[14px] font-medium text-zinc-700">
                Your Details
              </p>
              <div className="grid grid-cols-1 gap-3">
                {EXTRAS.map((extra) => {
                  const active = selectedExtras.includes(extra);
                  return (
                    <div
                      key={extra}
                      onClick={() => toggleExtra(extra)}
                      className={`flex cursor-pointer items-center gap-3.5 w-full border rounded-xl py-3.5 px-4 text-zinc-800 text-[13px] select-none transition-all duration-200 ${
                        active
                          ? "border-zinc-400 bg-zinc-50/30"
                          : "border-zinc-200 bg-white hover:border-zinc-300"
                      }`}
                    >
                      {/* Custom checkbox */}
                      <span
                        className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center border rounded transition-colors duration-200 ${
                          active
                            ? "border-[#a29482] bg-[#a29482]"
                            : "border-zinc-300 bg-white"
                        }`}
                      >
                        {active && (
                          <svg
                            viewBox="0 0 10 8"
                            fill="none"
                            className="h-2.5 w-2.5"
                          >
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <span className="text-zinc-700 font-normal">{extra}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <p className="mb-3 font-sans text-[14px] font-medium text-zinc-700">
                Special Requests
              </p>
              <textarea
                rows={4}
                placeholder="Anniversary, dietary preferences, arrival time…"
                className="w-full border border-zinc-200 bg-white px-4 py-3.5 text-[13px] text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors duration-200 resize-none rounded-xl"
              />
            </div>

            {/* Submit — full-width on mobile, right-aligned on desktop */}
            <div className="w-full sm:flex sm:justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#a29482] hover:bg-[#908271] active:bg-[#7d7262] text-white text-[12px] font-semibold tracking-[0.2em] uppercase px-10 py-4 rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-center"
              >
                {isSubmitting ? "Sending…" : "SUBMIT REQUEST"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
