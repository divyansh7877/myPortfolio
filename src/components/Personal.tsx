export default function Personal() {
  return (
    <section id="personal" className="px-4 py-8 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent)] mb-3">
          Personal
        </h2>
        <p className="text-[color:var(--text-secondary)] leading-relaxed text-sm">
          Outside of work I take long walks, attend orchestral concerts, and cook. I&apos;m drawn to classic
          fiction and philosophy — currently reading{" "}
          <span className="italic">Wuthering Heights</span> and{" "}
          <span className="italic">The Stranger</span>. My music taste runs from Dire Straits and Pink Floyd
          to Steven Wilson and Pearl Jam.
        </p>
      </div>
    </section>
  );
}
