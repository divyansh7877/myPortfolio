"use client";

import { useEffect } from "react";

const CAL_NAMESPACE = "div-vi-booking";
const CAL_LINK = "div-vi";

export default function CalEmbed() {
  useEffect(() => {
    // Avoid double-loading the script
    if (document.getElementById("cal-embed-script")) return;

    const script = document.createElement("script");
    script.id = "cal-embed-script";
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cal = (window as any).Cal;
      if (!cal) return;
      cal("init", CAL_NAMESPACE, { origin: "https://cal.com" });
      cal("inline", {
        elementOrSelector: `#cal-inline-${CAL_NAMESPACE}`,
        calLink: CAL_LINK,
        layout: "month_view",
      });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <section id="book" className="py-12 px-4 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent)] mb-2">
          Book a call
        </p>
        <p className="text-sm text-[color:var(--text-secondary)] mb-6 leading-relaxed">
          Pick a slot and let&apos;s talk.
        </p>
        <div
          id={`cal-inline-${CAL_NAMESPACE}`}
          className="w-full rounded-xl overflow-hidden border border-[color:var(--border)]"
          style={{ minHeight: 500 }}
        />
      </div>
    </section>
  );
}
