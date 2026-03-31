"use client";

const CAL_LINK = "div-vi";

export default function CalEmbed() {
  const calUrl = `https://cal.com/div-vi?embed=true&hideEventTypeDetails=true&layout=month_view`;

  return (
    <section id="book" className="py-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent)] mb-2">
          Book a call
        </p>
        <p className="text-sm text-[color:var(--text-secondary)] mb-6 leading-relaxed">
          Pick a slot and let&apos;s talk.
        </p>
        <iframe
          src={calUrl}
          className="w-full rounded-xl border border-[color:var(--border)]"
          style={{ minHeight: 600 }}
          title="Schedule a call"
          loading="lazy"
        />
      </div>
    </section>
  );
}
