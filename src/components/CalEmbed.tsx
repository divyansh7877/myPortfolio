"use client";

import { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";

export default function CalEmbed() {
  const [open, setOpen] = useState(false);
  return (
    <div id="book" className="booking-shell">
      <button type="button" className="button-secondary" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="calendar-frame">
        <CalendarDays size={16} /> {open ? "Close calendar" : "Find a time"} <ChevronDown size={14} aria-hidden className={open ? "rotate-180" : ""} />
      </button>
      {open && <iframe id="calendar-frame" src="https://cal.com/div-vi?embed=true&hideEventTypeDetails=true&layout=month_view" className="calendar-frame" title="Schedule a call" loading="lazy" />}
    </div>
  );
}
