"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    // Load the Cal.com embed script once
    if (typeof window === "undefined") return;
    if (document.getElementById("cal-script")) return;

    const script = document.createElement("script");
    script.id = "cal-script";
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as unknown as Record<string, unknown>).Cal === "function") return;
      // Initialize inline embed
      // @ts-expect-error Cal is injected by the embed script
      window.Cal("init", { origin: "https://cal.com" });
      // @ts-expect-error Cal is injected by the embed script
      window.Cal("inline", {
        elementOrSelector: "#cal-booking-inline",
        calLink: "div-vi",
        config: { layout: "month_view" },
      });
      // @ts-expect-error Cal is injected by the embed script
      window.Cal("ui", {
        styles: { branding: { brandColor: "var(--accent)" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="book" className="py-12 px-4 sm:px-6">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent)] mb-3">
        Book a call
      </h2>
      <p className="text-[color:var(--text-secondary)] text-sm leading-relaxed mb-6">
        Pick a time that works for you — 30 minutes, no agenda required.
      </p>
      <div
        id="cal-booking-inline"
        style={{
          width: "100%",
          height: "600px",
          overflow: "scroll",
          borderRadius: "0.75rem",
          border: "1px solid var(--border)",
        }}
      />
    </section>
  );
}
