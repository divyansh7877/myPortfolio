"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "div-vi" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="book" className="py-12 px-4 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent)] mb-2">
          Book a call
        </h2>
        <p className="text-[color:var(--text-secondary)] text-sm leading-relaxed mb-6">
          Pick a time that works — 30 minutes, no agenda required.
        </p>
      </div>
      <div
        className="rounded-xl overflow-hidden border border-[color:var(--border)]"
        style={{ maxWidth: "900px" }}
      >
        <Cal
          namespace="div-vi"
          calLink="div-vi"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </section>
  );
}
