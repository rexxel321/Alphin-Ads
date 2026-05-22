import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Calendar as CalendarIcon, Users, Minus, Plus, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { cn } from "./ui/utils";
import type { DateRange } from "react-day-picker";

type FieldShellProps = {
  label: string;
  value: React.ReactNode;
  icon: React.ReactNode;
  variant?: "light" | "dark" | "glass" | "mobile-dark";
};

export function FieldShell({ label, value, icon, variant = "light" }: FieldShellProps) {
  const isGlass = variant === "glass" || variant === "mobile-dark";
  
  const base =
    variant === "mobile-dark"
      ? "border-transparent bg-transparent text-white hover:bg-white/5 rounded-none py-5 px-6"
      : variant === "glass"
      ? "border-transparent bg-transparent text-white hover:bg-white/5 rounded-none py-4 px-6"
      : variant === "dark"
      ? "border-white/15 bg-white/5 text-white hover:bg-white/10 rounded-full px-4 py-2.5"
      : "border-border bg-background hover:bg-muted/40 rounded-full px-4 py-2.5";
      
  return (
    <div
      className={cn(
        "flex w-full items-center gap-3 transition-colors text-left",
        !isGlass && "border",
        base,
      )}
    >
      <div className={cn("opacity-70 shrink-0", variant === "glass" || variant === "dark" || variant === "mobile-dark" ? "text-white" : "text-foreground")}>
        {icon}
      </div>
      <div className="flex flex-grow flex-col items-start leading-tight min-w-0 pr-2">
        <span 
          className={cn(
            "uppercase tracking-widest block font-medium", 
            variant === "mobile-dark" ? "text-white/40" : variant === "glass" ? "text-white/50" : variant === "dark" ? "text-white/70" : "text-muted-foreground"
          )} 
          style={{ fontSize: 9 }}
        >
          {label}
        </span>
        <span className="truncate text-sm font-medium w-full">{value}</span>
      </div>
      {isGlass && (
        <ChevronDown className="h-4 w-4 text-white/50 shrink-0 ml-auto" />
      )}
    </div>
  );
}

export function DateField({
  label,
  date,
  onChange,
  variant = "light",
  fromDate,
}: {
  label: string;
  date?: Date;
  onChange: (d?: Date) => void;
  variant?: "light" | "dark" | "glass" | "mobile-dark";
  fromDate?: Date;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className="block w-full h-full focus:outline-none">
          <FieldShell
            label={label}
            icon={<CalendarIcon className="h-4 w-4" />}
            variant={variant}
            value={date ? format(date, "EEE, MMM d") : <span className="opacity-60">Select date</span>}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onChange}
          fromDate={fromDate ?? new Date()}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export function DateRangeField({
  dateRange,
  onChange,
  variant = "light",
}: {
  dateRange?: DateRange;
  onChange: (range?: DateRange) => void;
  variant?: "light" | "dark" | "glass" | "mobile-dark";
}) {
  const formatRange = () => {
    if (!dateRange?.from) {
      return <span className="opacity-60">Select date</span>;
    }
    if (!dateRange.to) {
      return format(dateRange.from, "MMM d");
    }
    return `${format(dateRange.from, "MMM d")} – ${format(dateRange.to, "MMM d")}`;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className="block w-full h-full focus:outline-none">
          <FieldShell
            label="Arrival & Departure"
            icon={<CalendarIcon className="h-4.5 w-4.5" />}
            variant={variant}
            value={formatRange()}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={onChange}
          fromDate={new Date()}
          numberOfMonths={2}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export type Guests = { adults: number; children: number };

export function GuestsField({
  value,
  onChange,
  variant = "light",
}: {
  value: Guests;
  onChange: (g: Guests) => void;
  variant?: "light" | "dark" | "glass" | "mobile-dark";
}) {
  const total = value.adults + value.children;
  const summary = `${total} ${total === 1 ? "Guest" : "Guests"}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className="block w-full h-full focus:outline-none">
          <FieldShell
            label="Guests"
            icon={<Users className="h-4.5 w-4.5" />}
            variant={variant}
            value={total > 0 ? summary : <span className="opacity-60">Number of guests</span>}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4" align="start">
        <Stepper
          label="Adults"
          sublabel="Ages 13+"
          value={value.adults}
          min={1}
          max={8}
          onChange={(v) => onChange({ ...value, adults: v })}
        />
        <div className="my-3 h-px bg-border" />
        <Stepper
          label="Children"
          sublabel="Ages 0–12"
          value={value.children}
          min={0}
          max={6}
          onChange={(v) => onChange({ ...value, children: v })}
        />
      </PopoverContent>
    </Popover>
  );
}

function Stepper({
  label,
  sublabel,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  sublabel: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div>{label}</div>
        <div className="text-muted-foreground" style={{ fontSize: 12 }}>{sublabel}</div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-5 text-center tabular-nums">{value}</span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
